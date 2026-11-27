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

**Definition.** Let γ be a closed path in the plane that avoids a point a. Choose a continuous real angle s along γ about a, measured in full turns. The winding number is s(1) − s(0). For a piecewise smooth path, another definition is the integral (1/2πi)∮ dz/(z − a).

**Problem.** The winding number of a closed path around a point is an integer.

**How the definition helps.** The angle lift makes integrality immediate because the endpoint and start represent the same direction. Their real angles therefore differ by an integer number of turns. In our own comparison, the integral definition has the same value by differentiating the polar form along a piecewise smooth path. The work is proving that a continuous real angle exists once the starting angle is chosen.

**Wikipedia:** [Winding number](https://en.wikipedia.org/wiki/Winding_number). It says: “all the fibers of p are of the form ρ₀ × (s₀ + ℤ) (so the above expression does not depend on the choice of the starting point). It is an integer because the path is closed.”

**Sources:** none listed. No primary source with a working link was found.

### Parity gives a degree even without orientations

**Remember:** Count endpoints in pairs, without signs.

*Makes the theorem clean to state or prove.* MSC 55M25 (Degree, winding number), 57R35. arXiv math.DG. Level 2: later undergraduate.

**Definition.** Consider a smooth map between manifolds of equal dimension without boundary, with compact source and connected target. At a regular value, the derivative is invertible at each preimage. The degree modulo two records whether the number of preimages is even or odd.

**Problem.** The degree modulo two is independent of the regular value and stays the same under smooth homotopy. It exists even when the manifolds have no orientation.

**How the definition helps.** Counting parity makes the two ends of each interval cancel without orientation signs (our own). At a common regular value, the homotopy fiber is a compact curve whose boundary consists of the two end fibers (our own). Sard’s theorem and local constancy let us perturb a chosen value to one regular for the homotopy (our own). Smoothly moving one target point to another then proves independence of the regular value (our own).

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

**Definition.** For a space X and a subspace A, define the relative chain complex as the quotient C•(X)/C•(A) of singular chain complexes. Relative homology Hₙ(X, A) is its homology. A different definition takes the reduced homology of the quotient space X/A, which agrees for good pairs.

**Problem.** Every pair (X, A) has a natural long exact sequence … → Hₙ(A) → Hₙ(X) → Hₙ(X, A) → Hₙ₋₁(A) → …

**How the definition helps.** The quotient definition gives a short exact sequence 0 → C•(A) → C•(X) → C•(X)/C•(A) → 0 of chain complexes. In our own account, the long exact sequence then follows from the zigzag lemma, which builds a connecting map for any short exact sequence of chain complexes. With the quotient-space definition, exactness would need a good pair and excision. So the work moves into the zigzag lemma, which is pure algebra.

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

*Rules out counterexamples.* MSC 55N10 (Singular homology and cohomology theory), 57K20. arXiv math.AT. Level 2: later undergraduate.

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

**How the definition helps.** Keeping paths between all points makes a groupoid component exactly a set of points connected by paths. In our own comparison, a group at one point cannot see paths in the other components. To define composition, one must show that joining paths gives an associative operation on deformation classes. Brown used several base points in his 1967 version of van Kampen’s theorem, which computes paths in a union from its pieces.

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

**Remember:** Take a base point in each piece, so that no piece is left out.

*Makes the theorem clean to state or prove.* MSC 55Q05 (Homotopy groups, general; sets of homotopy classes), 18B40, 57M05. arXiv math.AT, math.CT. Level 2: later undergraduate.

**Definition.** Let X be a space and X₀ a set of points of X. The fundamental groupoid Π₁(X, X₀) is a groupoid (a category in which every morphism is invertible) with the points of X₀ as objects. Its morphisms are homotopy classes of paths between points of X₀. It is the full subgroupoid of the fundamental groupoid Π₁(X) on the objects in X₀.

**Problem.** Let X be the union of open sets U and V, and let X₀ meet every path component of U, V and U ∩ V. Then Π₁(X, X₀) is the pushout of Π₁(U, X₀) and Π₁(V, X₀) over Π₁(U ∩ V, X₀).

**How the definition helps.** With several base points, the theorem no longer needs U ∩ V to be path-connected. The classical van Kampen theorem for groups needs this, so it does not apply to the circle covered by two arcs. For the circle with two base points, this pushout gives π₁(S¹) ≅ ℤ directly. The nLab notes that the groupoid theorem does not reduce to a theorem about groups.

**nLab:** [van Kampen theorem](https://ncatlab.org/nlab/show/van+Kampen+theorem). It says: “Note that the version of the theorem for fundamental groups does not apply, since U ∩ V is not path-connected.”

**Sources:**

- [Ronald Brown, Groupoids and van Kampen's theorem, Proc. London Math. Soc. (3) 17 (1967) 385–401](https://doi.org/10.1112/plms/s3-17.3.385)
- [Ronald Brown, A. Razak Salleh, A van Kampen theorem for unions of non-connected spaces, Archiv der Mathematik 42 (1984) 85–88](https://doi.org/10.1007/BF01198133)

### Semi-locally simply connected spaces have a full classification of covering spaces

**Remember:** Small loops need not shrink inside U, only somewhere in X.

*Rules out counterexamples.* MSC 55R15 (Classification of fiber spaces or bundles in algebraic topology), 57M10. arXiv math.AT, math.GT. Level 2: later undergraduate.

**Definition.** A space X is semi-locally simply connected if every point has a neighbourhood U with this property: every loop in U can be contracted in X. The contraction may leave U. In other words, the map π₁(U, x) → π₁(X, x) is trivial.

**Problem.** Let X be locally path-connected and semi-locally simply connected. Then covering spaces of X are the same as actions of the fundamental groupoid of X on sets.

**How the definition helps.** In our own reading of the nLab proof, the condition is used at one point only, to give the covering space rebuilt from an action the right topology. The rest of the proof, which matches a covering with its monodromy action, is mostly unwinding of definitions. The Hawaiian earring fails the condition, because every neighbourhood of its wedge point holds loops that are not contractible. The condition is weaker than local simple connectivity: for example, the cone on the Hawaiian earring satisfies it.

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

**How the definition helps.** The Lefschetz number depends only on homology, so it is a homotopy invariant and is easy to compute. The proof first treats simplicial maps, where the trace on chains counts simplices sent to themselves. Then the simplicial approximation theorem extends it to continuous maps. What stays hard is the converse, since Λ(f) = 0 does not mean f has no fixed point.

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

**Problem.** Hopf's theorem: let M be a closed, connected, oriented n-manifold. Two maps from M to the n-sphere are homotopic if and only if they have the same degree.

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

**How the definition helps.** The augmented definition makes reduced homology in degree −1 the cokernel of one map, so the answer can be read off. For the empty space, degree 0 is zero, so the cokernel is ℤ. For a nonempty space, the map is onto, so the cokernel is zero. These consequences are our own, and the page gives only the definition.

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

**Problem.** Homology is a functor: each map f: X → Y gives homomorphisms Hₙ(f), compatible with composition. So, for n ≥ 2, there is no retraction Dⁿ → Sⁿ⁻¹, since the identity of Hₙ₋₁(Sⁿ⁻¹) ≅ ℤ would factor through Hₙ₋₁(Dⁿ) = 0 (our own example).

**How the definition helps.** Groups keep the maps, and numbers forget them. A Betti number is the dimension of a vector space, and taking the dimension forgets maps. Noether's emphasis on homology groups keeps the maps, so one can state and use functoriality. Betti numbers alone cannot express the no-retraction argument.

**nLab:** [decategorification](https://ncatlab.org/nlab/show/decategorification). It says: “Noether noted that if we work with homology groups rather than Betti numbers, we can solve more problems, because we obtain invariants not only of spaces, but also of maps.”

**Sources:**

- [J. Baez, This Week's Finds in Mathematical Physics (Week 121), 1998](https://math.ucr.edu/home/baez/week121.html)

### Reduced homology gives the point no homology, so wedge sums split

**Remember:** Reduced homology removes the one copy of ℤ in degree 0 that a point gives.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55N10 (Singular homology and cohomology theory). arXiv math.AT. Level 3: graduate.

**Definition.** The reduced singular homology H̃•(X) is the homology of the augmented chain complex … → C₁(X) → C₀(X) → ℤ → 0. The map C₀(X) → ℤ adds up the coefficients of a 0-chain.

**Problem.** Contractible spaces have zero reduced homology in every degree. For spaces with good base points, the reduced homology of a wedge sum is the direct sum of the reduced homologies of its pieces.

**How the definition helps.** Reduced homology removes exactly the ℤ in degree 0 that forces exceptions in ordinary homology. For non-empty X, H₀(X) ≅ H̃₀(X) ⊕ ℤ, and Hₙ = H̃ₙ for n ≥ 1. So both statements hold in all degrees with no special case. Good base points means, as in Hatcher, that each base point has a neighbourhood that deformation retracts onto it.

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

**Problem.** For a compact Hausdorff space X, every element of K(X) is a formal difference \[E\] − \[trivial bundle\]. Two bundles have the same class in K(X) exactly when they are stably equivalent, that is, isomorphic after adding the same trivial bundle to each.

**How the definition helps.** Over a compact Hausdorff base, every vector bundle E has a bundle Ẽ such that E ⊕ Ẽ is trivial. With this lemma, you rewrite a difference \[E₊\] − \[E₋\] as \[E₊ ⊕ Ẽ₋\] − \[trivial\], so the whole negative part moves into a trivial bundle. The nLab gives no counterexample for a non-compact base. Our own example: on the discrete space ℕ, the bundle with fibre ℝⁿ over the point n has unbounded rank, so it is not a summand of any trivial bundle of finite rank.

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

**How the definition helps.** Dropping only the dimension axiom lets in many new examples, and each of them still comes from a spectrum. With the dimension axiom, an additive theory on CW complexes is ordinary cohomology with the coefficient group of the point, so no new examples appear. The match is not perfect. Because of phantom maps, maps of cohomology theories need not come from unique maps of spectra.

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

**Problem.** Take a natural transformation of additive cohomology theories that is an isomorphism on the 0-sphere S⁰. Then it is an isomorphism on all CW complexes.

**How the definition helps.** The wedge axiom is what carries the isomorphism from finite complexes to infinite ones. Without it, the isomorphism holds only on CW complexes with finitely many cells. Our own counterexample (not from the nLab) compares E(X) = H\*(X; ℤ) ⊗ ℚ with H\*(X; ℚ). The map is an isomorphism on S⁰, but on an infinite wedge of circles, (∏ℤ) ⊗ ℚ is smaller than ∏ℚ.

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

### Complex orientations of a ring spectrum are exactly ring maps from MU

**Remember:** An orientation is one class on ℂℙ∞, and that class is a map from MU.

*True by definition.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology), 55P43. arXiv math.AT. Level 3: graduate.

**Definition.** A ring spectrum E is an object that represents a cohomology theory with products. A complex orientation of E is a class x in E²(ℂℙ∞) whose restriction to ℂℙ¹ is the unit. MU, the complex cobordism spectrum, is built from the Thom spaces MU(n) of the universal complex vector bundles.

**Problem.** For a homotopy commutative ring spectrum E, complex orientations of E correspond bijectively to homotopy ring maps MU → E.

**How the definition helps.** Since MU is built from Thom spaces, a ring map MU → E is by definition a compatible family of Thom classes for complex bundles. An orientation is the first class of such a family, on the Thom space ℂℙ∞ of the universal line bundle (our own summary). The work moves to showing that this one class extends uniquely to all the spaces MU(n). That step uses E\*(BU(n)) = E\*\[\[c₁,…,cₙ\]\] and the splitting principle.

**nLab:** [complex oriented cohomology theory](https://ncatlab.org/nlab/show/complex+oriented+cohomology+theory). It says: “For E a homotopy commutative ring spectrum, there is a bijection between complex orientations of E-cohomology and homotopy commutative ring spectrum-homomorphisms MU ⟶ E out of MU.”

**Wikipedia:** [Complex cobordism](https://en.wikipedia.org/wiki/Complex_cobordism). It says: “A complex orientation on an associative commutative ring spectrum E is an element x in E²(ℂℙ∞) whose restriction to E²(ℂℙ¹) is 1, if the latter ring is identified with the coefficient ring of E.”

**Sources:**

- [D. Quillen, On the formal group laws of unoriented and complex cobordism theory, Bulletin of the American Mathematical Society 75 (1969) 1293–1298](https://doi.org/10.1090/s0002-9904-1969-12401-8)

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

### Even ring spectra are always complex orientable, unlike KO

**Remember:** No odd homotopy, no obstruction to orienting.

*Rules out counterexamples.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology), 55N15. arXiv math.AT. Level 3: graduate.

**Definition.** A ring spectrum E, an object that represents a cohomology theory with products, is even if its homotopy groups πₖE vanish for every odd k. E is complex orientable if some class in E²(ℂℙ∞) restricts to the unit on ℂℙ¹.

**Problem.** Every even ring spectrum is complex orientable. Real K-theory KO, which has π₁KO = ℤ/2, is not complex orientable.

**How the definition helps.** Evenness kills every obstruction to building the orientation, because each obstruction lies in an odd homotopy group of E. The obstructions come one at a time from the cells of ℂℙ∞, one in each even dimension. The condition excludes real K-theory KO, where the Hopf map η is nonzero in π₁KO. In every complex oriented theory η·1 = 0, because the cofibre of η is a suspension of ℂℙ² (our own).

**nLab:** [complex oriented cohomology theory](https://ncatlab.org/nlab/show/complex+oriented+cohomology+theory). It says: “A sufficient condition for this is, evidently, that the reduced E-cohomology of all odd-dimensional spheres vanishes, hence, that the graded E-cohomology ring E• is trivial in odd degrees (an even cohomology theory).”

**Sources:** none listed. No primary source with a working link was found.

### Landweber exactness says when tensoring complex cobordism gives a homology theory

**Remember:** Each vᵢ must act injectively on R modulo the earlier ones.

*Rules out counterexamples.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology), 14L05, 55N20. arXiv math.AT. Level 3: graduate.

**Definition.** A formal group law (a power series F(x, y) that behaves like a group law) over a graded ring R is classified by a ring map from the Lazard ring L ≅ MU•(∗) to R, where MU is complex cobordism. The formal group law is Landweber exact if, for every prime p, the elements v₀ = p, v₁, v₂, … form a regular sequence on R. Here vᵢ is the coefficient of x to the power pⁱ in the p-series \[p\](x), the formal sum of x with itself p times. Regular sequence means that each vᵢ acts injectively on R modulo the earlier ones.

**Problem.** Landweber exact functor theorem: if a formal group law over R is Landweber exact, then X ↦ MU•(X) ⊗ R, with the tensor product over L, is a generalized homology theory. A spectrum then represents it.

**How the definition helps.** Landweber exactness is the regularity condition that makes the tensor product keep the needed exact sequences. Tensoring is not exact in general, so without it the functor can fail the exactness axiom of a homology theory. For example, the additive formal group law is Landweber exact over R only if R contains ℚ, so ordinary integral homology does not arise this way. The hard part is Landweber's theorem on comodules over MU•MU.

**nLab:** [Landweber exact functor theorem](https://ncatlab.org/nlab/show/Landweber+exact+functor+theorem), [Landweber exactness](https://ncatlab.org/nlab/show/Landweber+exactness). It says: “Landweber exactness is a sufficient condition on R for E ≔ MU•(−) ⊗ L R to be indeed a generalized homology theory”

**Sources:**

- [Peter S. Landweber, Homological properties of comodules over MU∗(MU) and BP∗(BP), American Journal of Mathematics 98 (1976) 591–610](https://doi.org/10.2307/2373808)

### Morava K-theory has a graded field of coefficients, so Künneth always holds

**Remember:** Over a field nothing has torsion, so Künneth has no correction term.

*True by definition.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology), 55N20. arXiv math.AT. Level 3: graduate.

**Definition.** Morava K-theory K(n), at a prime p and height n ≥ 1, is a ring spectrum with coefficient ring 𝔽ₚ\[vₙ, vₙ⁻¹\]. Here vₙ has degree 2(pⁿ − 1). In this graded ring every nonzero homogeneous element is invertible, so it is a graded field.

**Problem.** For all spaces X and Y, the K(n)-homology of X × Y is the tensor product over K(n)\* of the K(n)-homologies of X and Y.

**How the definition helps.** Because K(n)\* is a graded field, every K(n)\*-module is free, so the Tor terms in the Künneth spectral sequence vanish (our own). For integral homology the same spectral sequence has Tor terms, because ℤ is not a field. Equivalently, K(n) smashed with any spectrum is a wedge of suspensions of K(n). The work moves to the construction of K(n) as an associative ring spectrum with this coefficient ring.

**nLab:** [Morava K-theory](https://ncatlab.org/nlab/show/Morava+K-theory). It says: “This ring is a graded field in the sense that every graded module over it is free.”

**Wikipedia:** [Morava K-theory](https://en.wikipedia.org/wiki/Morava_K-theory). It says: “They have Künneth isomorphisms for arbitrary pairs of spaces: that is, for X and Y CW complexes, we have”

**Sources:**

- [D. C. Johnson, W. S. Wilson, BP operations and Morava's extraordinary K-theories, Mathematische Zeitschrift 144 (1975) 55–75](https://doi.org/10.1007/BF01214408)

### One class on ℂP∞ gives a formal group law

**Remember:** A complex orientation is a first Chern class that restricts to 1 on the 2-sphere.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology), 55N20. arXiv math.AT. Level 3: graduate.

**Definition.** Let E be a multiplicative cohomology theory (a cohomology theory with products). A complex orientation of E is a class c₁ in the reduced group Ẽ²(BU(1)), where BU(1) ≃ ℂP∞. Its pullback along the inclusion i : S² = ℂP¹ → ℂP∞ must be the unit 1 in Ẽ²(S²) ≅ π₀(E). E is complex orientable if such a class exists.

**Problem.** Every complex oriented cohomology theory carries a formal group law, from the first Chern class of a tensor product of line bundles. For a homotopy commutative ring spectrum E, complex orientations correspond exactly to ring maps MU → E, so MU is the universal complex oriented theory.

**How the definition helps.** This minimal definition asks for one class on one space, and that class already gives Thom classes and Chern classes for all complex bundles. The formal group law then comes from the first Chern class of a tensor product of line bundles. The deep part is Quillen's theorem that the formal group law of MU is universal, so that π•(MU) is the Lazard ring. The bijection does not lift to E∞ ring maps.

**nLab:** [complex oriented cohomology theory](https://ncatlab.org/nlab/show/complex+oriented+cohomology+theory), [Milnor-Quillen theorem on MU](https://ncatlab.org/nlab/show/Milnor-Quillen+theorem+on+MU). It says: “For E a homotopy commutative ring spectrum, there is a bijection between complex orientations of E-cohomology and homotopy commutative ring spectrum-homomorphisms MU ⟶ E out of MU.”

**Sources:**

- [Daniel Quillen, On the formal group laws of unoriented and complex cobordism theory, Bulletin of the American Mathematical Society 75 (1969) 1293–1298](https://doi.org/10.1090/S0002-9904-1969-12401-8)

### p-typical formal group laws make BP a ring summand of p-local MU

**Remember:** Make the universal group law p-typical, and MU splits off BP.

*True by definition.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology), 14L05. arXiv math.AT. Level 3: graduate.

**Definition.** A formal group law over a torsion-free ℤ₍ₚ₎-algebra is p-typical if its logarithm has nonzero terms only in degrees that are powers of p. Cartier showed that every formal group law over a ℤ₍ₚ₎-algebra is canonically strictly isomorphic to a p-typical one.

**Problem.** There is an idempotent ring map ε from MU₍ₚ₎ to itself whose image BP has π\*BP = ℤ₍ₚ₎\[v₁, v₂, …\]. Its formal group law is the universal p-typical one, and MU₍ₚ₎ is a wedge of suspensions of BP.

**How the definition helps.** Cartier's coordinate change to a p-typical law is canonical, so p-typification of MU₍ₚ₎ is an idempotent by construction. The strict change gives a ring map from MU₍ₚ₎ to itself, idempotent since a p-typical law is its own p-typification (our own outline). Brown and Peterson first built BP from a Postnikov tower, where the ring structure is hard to see. The work moves to Quillen's theorem that MU\* is the Lazard ring and to Cartier's theorem.

**nLab:** [Brown-Peterson spectrum](https://ncatlab.org/nlab/show/Brown-Peterson+spectrum). It says: “BP is related to p-typical formal groups as MU is to formal groups.”

**Wikipedia:** [Brown–Peterson cohomology](https://en.wikipedia.org/wiki/Brown%E2%80%93Peterson_cohomology). It says: “BP is the universal example of a complex oriented cohomology theory whose associated formal group law is p-typical.”

**Sources:**

- [D. Quillen, On the formal group laws of unoriented and complex cobordism theory, Bulletin of the American Mathematical Society 75 (1969) 1293–1298](https://doi.org/10.1090/s0002-9904-1969-12401-8)
- [E. H. Brown, F. P. Peterson, A spectrum whose ℤₚ cohomology is the algebra of reduced pth powers, Topology 5 (1966) 149–154](https://doi.org/10.1016/0040-9383(66)90015-2)

### Cohomology with supports in a closed set depends only near it

**Remember:** A section zero off Z glues with zero, so only near Z matters.

*True by definition. Confidence: medium.* MSC 55N30 (Sheaf cohomology in algebraic topology), 14B15. arXiv math.AT, math.AG. Level 3: graduate.

**Definition.** For a closed set Z ⊂ X, the sections of F supported in Z are the global sections that vanish on X − Z. Cohomology with support in Z is defined by the derived functors of this group.

**Problem.** Let U be an open set that contains the closed set Z. Then restriction to U is an isomorphism on cohomology with support in Z, for every sheaf.

**How the definition helps.** A section on U that vanishes off Z glues with zero on X − Z, so supported sections on X and on U agree. Restriction to an open set keeps injective sheaves injective, so one injective resolution computes both sides (our own summary). For relative cohomology of the pair (X, X − Z) this is excision, which singular cohomology proves by subdividing simplices (our own remark).

**Wikipedia:** [Sheaf cohomology](https://en.wikipedia.org/wiki/Sheaf_cohomology). It says: “(So cohomology with support in a closed subset Y only depends on the behavior of the space X and the sheaf E near Y.)”

**Sources:**

- [Glen E. Bredon, Sheaf Theory, 2nd edition, Graduate Texts in Mathematics 170, Springer (1997)](https://doi.org/10.1007/978-1-4612-0647-7)

### Compactly supported Euler characteristic adds across open and closed pieces

**Remember:** Compact supports make an open piece and its closed complement add correctly.

*True by definition.* MSC 55N30 (Sheaf cohomology in algebraic topology), 14P10. arXiv math.AT. Level 3: graduate.

**Definition.** Take a locally compact semialgebraic set, one cut out by finite combinations of polynomial equalities and inequalities. Its compactly supported Euler characteristic is the alternating sum of dimensions of its compactly supported cohomology over ℚ. This cohomology uses classes with support inside compact subsets and agrees with ordinary cohomology on compact spaces.

**Problem.** Let U be an open semialgebraic subset of X with complement Z. Then the compactly supported Euler characteristic of X is the sum of those of U and Z.

**How the definition helps.** The compact-support definition makes the sum rule easy because its cohomology gives a long exact sequence for an open set and its closed complement. In our own proof, the groups are finite-dimensional and vanish in high degrees, so the alternating sum along the exact sequence is zero. Ordinary Euler characteristic fails on the line split into one point and two open half-lines. It gives 1 for the line but 1 + 2 for the pieces. Compact supports give −1 for the line and 1 − 2 for the pieces. The work shifts to proving the exact sequence and the finiteness of the groups.

**Wikipedia:** [Euler characteristic](https://en.wikipedia.org/wiki/Euler_characteristic), [Euler calculus](https://en.wikipedia.org/wiki/Euler_calculus). It says: “if X is a locally compact space, and one uses Euler characteristics with compact supports, no assumptions on M or N are needed.”

**Sources:** none listed. No primary source with a working link was found.

### Defining the exceptional inverse image as an adjoint makes Poincaré duality formal

**Remember:** Make the upper shriek a right adjoint, and duality is the adjunction.

*True by definition.* MSC 55N30 (Sheaf cohomology in algebraic topology), 18F20, 55M05. arXiv math.AT. Level 3: graduate.

**Definition.** Let p map a locally compact space X of finite dimension to a point, so Rp₍!₎ is compactly supported cohomology. The exceptional inverse image p⁽!⁾ is defined as the right adjoint of Rp₍!₎, on derived categories of sheaves of k-vector spaces.

**Problem.** Let X be an oriented n-manifold and k a field. Then the dual of compactly supported cohomology of X in degree i is Hⁿ⁻ⁱ(X; k).

**How the definition helps.** The adjunction gives Hom(Rp₍!₎k, k\[−i\]) ≅ Hom(k, p⁽!⁾k\[−i\]), and the left side is the dual of compactly supported cohomology in degree i. On an oriented n-manifold, p⁽!⁾k is the constant sheaf k shifted by n, so the right side is Hⁿ⁻ⁱ(X; k). The work moves into the existence of p⁽!⁾ and the local computation of p⁽!⁾k, which is where orientation enters. The classical proof instead builds duality open set by open set with Mayer–Vietoris sequences (our own remark).

**nLab:** [Verdier duality](https://ncatlab.org/nlab/show/Verdier+duality). It says: “The analog of Poincaré duality is then the statement that the abelian sheaf cohomology with coefficients in V is dual to the abelian sheaf cohomology with compact support with coefficients in 𝔻V.”

**Wikipedia:** [Verdier duality](https://en.wikipedia.org/wiki/Verdier_duality). It says: “for a continuous map f: X → Y of locally compact Hausdorff spaces, the derived functor of the direct image with compact (or proper) supports Rf₍!₎ has a right adjoint f⁽!⁾ in the derived category of sheaves”

**Sources:**

- [Birger Iversen, Cohomology of Sheaves, Universitext, Springer (1986)](https://doi.org/10.1007/978-3-642-82783-9)
- [Masaki Kashiwara and Pierre Schapira, Sheaves on Manifolds, Grundlehren 292, Springer (1990)](https://doi.org/10.1007/978-3-662-02661-8)

### Direct images with proper supports satisfy base change along every map

**Remember:** Proper supports make every map behave like a proper one.

*Rules out counterexamples.* MSC 55N30 (Sheaf cohomology in algebraic topology), 18F20. arXiv math.AT, math.AG. Level 3: graduate.

**Definition.** Let f : X → Y be a map of locally compact Hausdorff spaces. Then f₍!₎F is the subsheaf of f∗F of sections whose support is proper over Y. For an open inclusion it is extension by zero, and for a proper map it equals f∗F.

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

**How the definition helps.** A cover by disjoint open sets has no overlaps between different sets, so its higher alternating Čech cohomology vanishes (our own summary). Such covers refine every cover, so Čech cohomology of X vanishes in positive degrees. On a quasi-compact Hausdorff space Čech cohomology equals sheaf cohomology (Stacks Lemma 20.16.2), and that comparison carries the work. If profinite spaces are defined as limits of finite discrete spaces, one would instead need a theorem on cohomology of limits (our own remark).

**Paper or page:** [Cohomology](https://stacks.math.columbia.edu/tag/0A3F), [Cohomology](https://stacks.math.columbia.edu/tag/09V2). It says: “Let X be a profinite topological space. Then H<sup>q</sup>(X, ℱ) = 0 for all q &gt; 0 and all abelian sheaves ℱ.”

**Sources:**

- [The Stacks Project, Cohomology of Sheaves, Lemma 20.22.3 (Tag 0A3F)](https://stacks.math.columbia.edu/tag/0A3F)

### Duality through the dualizing complex exchanges direct images and proper direct images

**Remember:** Right adjoints compose, so dualizing complexes pull back to dualizing complexes.

*Makes the theorem clean to state or prove.* MSC 55N30 (Sheaf cohomology in algebraic topology), 18F20. arXiv math.AT, math.AG. Level 3: graduate.

**Definition.** Let p map X to a point, and let p⁽!⁾ be the right adjoint of compactly supported cohomology. The dualizing complex of X is ω(X) = p⁽!⁾k. The Verdier dual of a complex F is D(F) = RHom(F, ω(X)), a derived internal Hom.

**Problem.** For every continuous map f : X → Y of finite-dimensional locally compact spaces and every F, D(Rf₍!₎F) ≅ Rf∗D(F).

**How the definition helps.** Local Verdier duality, the sheaf form of the adjunction between Rf₍!₎ and f⁽!⁾, gives RHom(Rf₍!₎F, ω(Y)) ≅ Rf∗RHom(F, f⁽!⁾ω(Y)). Proper direct images compose, so their right adjoints compose, and f⁽!⁾ω(Y) = ω(X) because the map from X to a point factors through f. So the work is in the local Verdier duality theorem.

**Wikipedia:** [Verdier duality](https://en.wikipedia.org/wiki/Verdier_duality). It says: “(Intertwining of functors f∗ and f₍!₎). If f is a continuous map from X to Y, then there is an isomorphism D(Rf₍!₎(ℱ)) ≅ Rf∗D(ℱ).”

**Sources:**

- [Birger Iversen, Cohomology of Sheaves, Universitext, Springer (1986)](https://doi.org/10.1007/978-3-642-82783-9)
- [Masaki Kashiwara and Pierre Schapira, Sheaves on Manifolds, Grundlehren 292, Springer (1990)](https://doi.org/10.1007/978-3-662-02661-8)

### Extension by zero makes injective sheaves flasque, giving Mayer–Vietoris sequences

**Remember:** Injectivity applied to ℤ\[U′\] ⊂ ℤ\[U\] extends every section.

*True by definition.* MSC 55N30 (Sheaf cohomology in algebraic topology), 18F20. arXiv math.AT, math.AG. Level 3: graduate.

**Definition.** For an open set U, let ℤ\[U\] be the constant sheaf ℤ on U extended by zero to X, so its stalks vanish outside U. It is defined so that sheaf maps ℤ\[U\] → F are the same as sections in F(U).

**Problem.** Let X = U ∪ V with U and V open, and let F be an abelian sheaf. Then there is a long exact sequence 0 → H⁰(X, F) → H⁰(U) ⊕ H⁰(V) → H⁰(U ∩ V) → H¹(X, F) → ⋯.

**How the definition helps.** Since sheaf maps ℤ\[U\] → I are sections of I over U, an injective sheaf I has each restriction I(U) → I(U′) surjective, for open U′ ⊂ U. The sheaf axiom and this surjectivity make 0 → I(X) → I(U) ⊕ I(V) → I(U ∩ V) → 0 exact for each such I. Applied to an injective resolution, the long exact sequence of complexes is the Mayer–Vietoris sequence. Without the representing property of ℤ\[U\], one would have to extend sections of an injective sheaf by hand (our own remark).

**Wikipedia:** [Sheaf cohomology](https://en.wikipedia.org/wiki/Sheaf_cohomology). It says: “Namely, let X be a topological space which is a union of two open subsets U and V, and let E be a sheaf on X. Then there is a long exact sequence of abelian groups:”

**Paper or page:** [Cohomology](https://stacks.math.columbia.edu/tag/01EA), [Cohomology](https://stacks.math.columbia.edu/tag/01EB). It says: “Let U′ ⊂ U ⊂ X be open subspaces. For any injective 𝒪<sub>X</sub>-module ℐ the restriction mapping ℐ(U) → ℐ(U′) is surjective.”

**Sources:**

- [Birger Iversen, Cohomology of Sheaves, Universitext, Springer (1986)](https://doi.org/10.1007/978-3-642-82783-9)

### Fine resolutions by smooth forms identify Dolbeault cohomology with sheaf cohomology

**Remember:** Fine sheaves are acyclic, so ∂̄ on global forms computes holomorphic cohomology.

*Makes the theorem clean to state or prove.* MSC 55N30 (Sheaf cohomology in algebraic topology), 32L10. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** A sheaf is fine when it has partitions of unity made of sheaf endomorphisms. Sheaves of modules over the smooth functions are fine, such as the sheaves of smooth forms of type (p, q).

**Problem.** For a complex manifold X, the q-th sheaf cohomology of the sheaf Ωᵖ of holomorphic p-forms equals the q-th Dolbeault cohomology. That is the cohomology of the operator ∂̄ on global smooth forms of type (p, q).

**How the definition helps.** Fine sheaves are acyclic. So the resolution of Ωᵖ by smooth forms of type (p, 0), (p, 1), … with differential ∂̄ computes its cohomology from global forms. The ∂̄-Poincaré lemma, which says ∂̄-closed forms are locally ∂̄-exact, makes this complex a resolution. The work moves into that lemma, which uses the Cauchy integral formula for smooth functions.

**nLab:** [fine sheaf](https://ncatlab.org/nlab/show/fine+sheaf). It says: “For any fine sheaf J over a paracompact Hausdorff space M, the sheaf cohomology groups of positive degree j are all trivial”

**Wikipedia:** [Dolbeault cohomology](https://en.wikipedia.org/wiki/Dolbeault_cohomology). It says: “If E is a holomorphic vector bundle on a complex manifold X, then one can define likewise a fine resolution of the sheaf 𝒪(E) of holomorphic sections of E, using the Dolbeault operator of E.”

**Sources:**

- [Phillip Griffiths and Joseph Harris, Principles of Algebraic Geometry, Wiley (1978; reprinted 1994)](https://doi.org/10.1002/9781118032527)

### Flasque sheaves are acyclic, so flasque resolutions compute sheaf cohomology

**Remember:** Sections that always extend leave nothing for cohomology to measure.

*Makes the theorem clean to state or prove.* MSC 55N30 (Sheaf cohomology in algebraic topology), 18F20. arXiv math.AT, math.AG. Level 3: graduate.

**Definition.** A sheaf F on a space X is flasque, or flabby, when every restriction map F(V) → F(U) between open sets is surjective. Sheaf cohomology Hⁿ(X, F) is computed from an injective resolution of F. It measures how far global sections fail to keep exact sequences exact.

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

**Remember:** Small open sets must shrink to points, or singular and sheaf cohomology part.

*Rules out counterexamples.* MSC 55N30 (Sheaf cohomology in algebraic topology), 55N10. arXiv math.AT. Level 3: graduate.

**Definition.** A space is weakly locally contractible when each neighbourhood U of a point x contains a smaller neighbourhood V. The inclusion of V into U must be homotopic to a constant map. Sheaf cohomology with coefficients in a group A uses the constant sheaf of locally constant A-valued functions.

**Problem.** Let X be paracompact, Hausdorff and weakly locally contractible. Then sheaf cohomology of X with coefficients in A equals singular cohomology with coefficients in A.

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

**How the definition helps.** Because f is closed, every neighbourhood of the fibre f⁻¹(y) contains a set f⁻¹(V) with V a neighbourhood of y (our own summary). So the stalk of Rⁱf∗F at y is the direct limit of the cohomology of shrinking neighbourhoods of the fibre. For a quasi-compact set whose points are separated, that limit is the cohomology of the set itself, by Stacks Lemma 20.16.3, which carries the work. Base change keeps f proper and keeps its fibres, so the stalk formula gives base change.

**Wikipedia:** [Base change theorems](https://en.wikipedia.org/wiki/Base_change_theorems). It says: “the base change map g\* Rʳf∗ℱ → Rʳf′∗g′\*ℱ is an isomorphism.”

**Paper or page:** [Cohomology](https://stacks.math.columbia.edu/tag/09V5), [Cohomology](https://stacks.math.columbia.edu/tag/09V6). It says: “Assume that f is closed, f is separated, and f⁻¹(y) is quasi-compact. Then for E in D⁺(𝒪<sub>X</sub>) we have (Rf∗E)<sub>y</sub> = RΓ(f⁻¹(y), E\|f⁻¹(y)) in D⁺(𝒪\_(Y, y)).”

**Sources:**

- [Birger Iversen, Cohomology of Sheaves, Universitext, Springer (1986)](https://doi.org/10.1007/978-3-642-82783-9)

### Sheaf cohomology vanishes above covering dimension, which singular cohomology fails

**Remember:** Covers of dimension n leave no room for cohomology above n.

*Rules out counterexamples. Confidence: medium.* MSC 55N30 (Sheaf cohomology in algebraic topology), 54F45. arXiv math.AT, math.GN. Level 3: graduate.

**Definition.** The covering dimension of a space X is the least n with this property. Every open cover has a refinement in which each point lies in at most n + 1 sets. Sheaf cohomology is built from sheaves and open covers, not from singular simplices.

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

**How the definition helps.** Maps into Sky(x, I) are maps out of a stalk, and taking stalks is exact, so Sky(x, I) is injective when I is (our own summary). Products of injective sheaves are injective, and F maps into the product injectively on every stalk. The remaining work is that every abelian group embeds in a divisible group, such as a product of copies of ℚ/ℤ. Grothendieck's general proof instead uses a generator of the category, as the Wikipedia article notes.

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

**Definition.** The orientation sheaf o of an n-manifold X has stalk at x the local homology group Hₙ(X, X − x; k). It is locally isomorphic to the constant sheaf k. If k does not have characteristic 2, it is constant exactly when X is orientable.

**Problem.** Let X be any n-manifold and k a field. Then Hʲ(X, o) is dual to the compactly supported cohomology of X in degree n − j.

**How the definition helps.** Verdier duality pairs against the dualizing complex, which on an n-manifold is o shifted by n, so no orientation hypothesis is needed. The untwisted form fails on the real projective plane with rational coefficients (our own example). There H²(ℝP²; ℚ) = 0, but compactly supported H⁰ is ℚ because ℝP² is compact and connected. With the twist, H²(ℝP², o) ≅ ℚ, as duality requires.

**Wikipedia:** [Sheaf cohomology](https://en.wikipedia.org/wiki/Sheaf_cohomology). It says: “For any manifold X and field k, there is a sheaf o<sub>X</sub> on X, the orientation sheaf, which is locally (but perhaps not globally) isomorphic to the constant sheaf k.”

**Sources:**

- [Birger Iversen, Cohomology of Sheaves, Universitext, Springer (1986)](https://doi.org/10.1007/978-3-642-82783-9)

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

**Definition.** Intersection homology of a stratified space uses only the chains that meet each singular stratum in at most a controlled excess dimension. A function on the strata, called the perversity, sets this control.

**Problem.** On a compact oriented pseudomanifold, the intersection homologies for complementary perversities are dual. For a complex variety the middle perversity is self-dual, so intersection cohomology satisfies Poincaré duality over a field, although ordinary cohomology does not.

**How the definition helps.** Intersection cohomology uses only chains that meet the singular set in a controlled way, and this restores duality by taking the codimension of the singular strata into account. Two special perversities give ordinary homology and ordinary cohomology. Duality for complementary perversities is the theorem of Goresky and MacPherson (our summary). Later theorems, such as the hard Lefschetz theorem and the decomposition theorem, are stated with perverse sheaves and are hard.

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

**Definition.** A genuine G-equivariant cohomology theory, for spaces with an action of the group G, has degrees that are real representations V of G and not only integers. So its degrees form the representation ring RO(G), whose elements are formal differences of representations. The representation sphere Sⱽ is the one-point compactification of V.

**Problem.** In a genuine G-equivariant cohomology theory, Eᴳ•(X) ≅ Eᴳ•⁺ⱽ(Sⱽ ∧ X) for every real representation V of G. This holds also when G acts nontrivially on the sphere.

**How the definition helps.** Grading by representations gives a degree V to shift by, so the theorem can be stated at all. With only integer grading, the suspension isomorphism can be stated only for spheres on which G acts trivially. This isomorphism is part of what makes a theory genuine. The nLab adds, quoting May, that the most intrinsic grading is by the Picard group of the stable G-homotopy category, but RO(G) is much more convenient.

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

**How the definition helps.** The path-space description makes this a general fact about maps defined by a left lifting test (our own explanation). A square for the pushout restricts to a square for the original map. Its filler then extends over the pushout by the universal property of the pushout.

**nLab:** [Hurewicz cofibration](https://ncatlab.org/nlab/show/Hurewicz+cofibration). It says: “A map (continuous function) i : A → X between topological spaces is a Hurewicz cofibration if it satisfies the homotopy extension property for all spaces”

**Sources:**

- [A. Strøm, Note on cofibrations, Mathematica Scandinavica 19 (1966) 11–14](https://doi.org/10.7146/math.scand.a-10791)

### The retraction criterion makes products of cofibrations with spaces cofibrations

**Remember:** Multiply the retraction by the identity on Y.

*True by definition.* MSC 55P05 (Homotopy extension properties, cofibrations in algebraic topology). arXiv math.AT. Level 3: graduate.

**Definition.** A Hurewicz cofibration is an inclusion A → X with the homotopy extension property. A closed inclusion A → X is a Hurewicz cofibration exactly when X × {0} ∪ A × \[0,1\] is a retract of the cylinder X × \[0,1\].

**Problem.** If A → X is a closed Hurewicz cofibration of compactly generated spaces and Y is compactly generated, then Y × A → Y × X is a Hurewicz cofibration.

**How the definition helps.** The retraction criterion asks for one map, and the identity of Y times that map is the needed retraction. Compactly generated spaces form a cartesian closed category, so Y × (−) preserves the gluing that builds the subspace. The work moves into the criterion, which says that one retraction gives the homotopy extension property for all targets.

**nLab:** [Hurewicz cofibration](https://ncatlab.org/nlab/show/Hurewicz+cofibration). It says: “to yield a retract that exhibits the cofibration property of Y × i.”

**Sources:** none listed. No primary source with a working link was found.

### Weak Hausdorff spaces make every Hurewicz cofibration closed

**Remember:** In weak Hausdorff spaces, every cofibration has a closed image.

*Rules out counterexamples. Confidence: medium.* MSC 55P05 (Homotopy extension properties, cofibrations in algebraic topology), 54D50. arXiv math.AT, math.GN. Level 3: graduate.

**Definition.** A space is weak Hausdorff if the image of each map from a compact Hausdorff space into it is closed. Many topologists work in compactly generated weak Hausdorff spaces.

**Problem.** In compactly generated weak Hausdorff spaces, the image of every Hurewicz cofibration is closed. So the retraction and NDR-pair characterizations, proved for closed inclusions, apply to every cofibration.

**How the definition helps.** The separation condition rules out cofibrations whose image is not closed. In the category of all topological spaces, Strøm's counterexample is the inclusion of a point into a two-point space with the codiscrete topology. The work of proving the characterizations for closed inclusions (Strøm's work) still remains.

**nLab:** [Hurewicz cofibration](https://ncatlab.org/nlab/show/Hurewicz+cofibration). It says: “In the category of weakly Hausdorff compactly generated spaces, the image i(A) of a Hurewicz cofibration is always closed.”

**Sources:**

- [Arne Strøm, Note on cofibrations, Math. Scand. 19 (1966) 11–14](https://doi.org/10.7146/math.scand.a-10791)

### Well-pointed groups make plain and fat realization agree

**Remember:** The base point sits in the space as nicely as a cofibration can.

*Rules out counterexamples. Confidence: medium.* MSC 55P05 (Homotopy extension properties, cofibrations in algebraic topology), 18N50, 55R35. arXiv math.AT. Level 3: graduate.

**Definition.** A pointed space (X, x) is well-pointed if the inclusion {x} → X of the base point is a closed Hurewicz cofibration (an inclusion with the homotopy extension property). A topological group is well-pointed if it is well-pointed at its neutral element.

**Problem.** For a well-pointed topological group in compactly generated weak Hausdorff spaces, the plain geometric realization of its nerve is homotopy equivalent to the fat realization. So the plain realization computes the homotopy colimit.

**How the definition helps.** Well-pointedness makes the degeneracy maps of the nerve closed cofibrations, so the nerve is a good simplicial space. For a good simplicial space, the map from the fat to the plain realization is a homotopy equivalence (Segal 1974, Proposition A.1). The fat realization glues along face maps only and models the homotopy colimit. The real work is in that theorem on good simplicial spaces.

**nLab:** [well-pointed topological space](https://ncatlab.org/nlab/show/well-pointed+topological+space). It says: “These facts explain the key role of well-pointedness in classifying space-theory, where it ensures that plain topological realization of simplicial topological spaces coincides, up to weak homotopy equivalence, with fat geometric realization”

**Sources:**

- [Tammo tom Dieck, Algebraic Topology, EMS Textbooks in Mathematics, 2008](https://doi.org/10.4171/048)
- [Graeme Segal, Categories and cohomology theories, Topology 13 (1974) 293–312, appendix A](https://doi.org/10.1016/0040-9383(74)90022-6)

### Defining weak homotopy type by zigzags makes it an equivalence relation

**Remember:** Same homotopy type means joined by a zigzag, not by one arrow.

*True by definition.* MSC 55P15 (Classification of homotopy type), 55P10. arXiv math.AT. Level 3: graduate.

**Definition.** A weak homotopy equivalence is a map that induces isomorphisms on all homotopy groups. Two spaces X and Y have the same weak homotopy type if a zigzag X ← · → · ← … → Y of weak homotopy equivalences joins them. Equivalently, X and Y become isomorphic in the homotopy category Ho(Top), where weak homotopy equivalences are made invertible.

**Problem.** The relation "X and Y have the same weak homotopy type" is an equivalence relation.

**How the definition helps.** A zigzag can be read backwards, so the relation is symmetric by definition. The relation "there is a weak homotopy equivalence X → Y" is reflexive and transitive, but not symmetric. The counterexample is the circle S¹ and the four-point pseudocircle 𝕊: a weak homotopy equivalence S¹ → 𝕊 exists, but every map 𝕊 → S¹ is trivial on π₁.

**nLab:** [weak homotopy equivalence](https://ncatlab.org/nlab/show/weak+homotopy+equivalence). It says: “There is a continuous function S¹ → 𝕊 which is a weak homotopy equivalence, hence in particular π₁(𝕊) ≃ ℤ. But every continuous map the other way round has to induce the trivial map on π₁.”

**Sources:**

- [Michael C. McCord, Singular homology groups and homotopy groups of finite topological spaces, Duke Math. J. 33 (1966) 465–474](https://doi.org/10.1215/S0012-7094-66-03352-7)

### Spanier–Whitehead duality is monoidal duality in the stable homotopy category

**Remember:** The S-dual of a spectrum is its dual object for the smash product.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55P25 (Spanier-Whitehead duality), 55P42. arXiv math.AT. Level 3: graduate.

**Definition.** In a symmetric monoidal category with unit 1, an object X is dualizable if it has a dual DX with maps DX ⊗ X → 1 and 1 → X ⊗ DX. These maps must satisfy the two triangle identities. Spanier–Whitehead duality (S-duality) is this duality in the stable homotopy category, with the smash product as tensor product.

**Problem.** For a closed smooth manifold X, the S-dual of the suspension spectrum Σ∞₊X is the Thom spectrum of the stable normal bundle of X (Atiyah duality). The trace of the identity on Σ∞₊X is the Euler characteristic of X.

**How the definition helps.** Because S-duality is ordinary monoidal duality, the general notions of trace and dimension apply to spectra. The nLab says that this reading is apparently due to Dold and Puppe. The geometric content is in identifying the dual as a Thom spectrum.

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

**Definition.** A spectrum is a sequence of pointed spaces Xₙ with structure maps from the suspension of Xₙ to Xₙ₊₁. An orthogonal spectrum is a spectrum where the orthogonal group O(n) acts on each Xₙ, and the structure maps are compatible with these actions. A symmetric spectrum is the same, with the symmetric group Σₙ in place of O(n).

**Problem.** A map of orthogonal spectra is a stable equivalence exactly when it is an isomorphism on the naive stable homotopy groups πₙ(X) = colimₖ πₖ₊ₙ(Xₖ).

**How the definition helps.** For orthogonal spectra the naive groups work, because the quotients O(q)/O(q − n) become highly connected for large q. The quotients Σ(q)/Σ(q − n) of symmetric groups do not. The counterexample for symmetric spectra is the map λ : F₁S¹ → F₀S⁰ of free symmetric spectra, a stable equivalence that is not an isomorphism on naive stable homotopy groups.

**nLab:** [symmetric spectrum](https://ncatlab.org/nlab/show/symmetric+spectrum), [orthogonal spectrum](https://ncatlab.org/nlab/show/orthogonal+spectrum), [Model categories of diagram spectra](https://ncatlab.org/nlab/show/Model+categories+of+diagram+spectra), [semistable symmetric spectrum](https://ncatlab.org/nlab/show/semistable+symmetric+spectrum). It says: “Among the various (now) common models for spectra, this issue is unique to symmetric spectra”

**Sources:**

- [M. A. Mandell, J. P. May, S. Schwede, B. Shipley, Model categories of diagram spectra, Proc. London Math. Soc. 82 (2001) 441–512](https://doi.org/10.1112/S0024611501012692)
- [Mark Hovey, Brooke Shipley, Jeff Smith, Symmetric spectra, J. Amer. Math. Soc. 13 (2000) 149–208, arXiv:math/9801077](https://arxiv.org/abs/math/9801077)

### Spanier–Whitehead duality makes Alexander duality a formal consequence

**Remember:** A set and its complement are dual, so homology becomes cohomology.

*True by definition.* MSC 55P42 (Stable homotopy theory, spectra), 55P25, 55M05. arXiv math.AT. Level 3: graduate.

**Definition.** Two spectra A and B are Spanier–Whitehead dual when they are dual objects of the stable homotopy category for the smash product. Let X be a compact neighbourhood retract in ℝⁿ, and let X₊ be X with a disjoint base point. Then X₊ is dual to the n-fold desuspension of the unreduced suspension of ℝⁿ ∖ X.

**Problem.** Let X be a proper, nonempty compact neighbourhood retract in the sphere Sⁿ. Then H̃ᵢ(Sⁿ ∖ X) ≅ H̃ⁿ⁻ⁱ⁻¹(X) for reduced homology and cohomology (Alexander duality).

**How the definition helps.** For dual spectra A and B, the E-cohomology of B is the E-homology of A, for every spectrum E (our own). With E the Eilenberg–MacLane spectrum of ℤ, this gives Alexander duality formally (Wikipedia); the passage from ℝⁿ to Sⁿ is our own. The usual proof instead uses Čech cohomology and a Mayer–Vietoris induction or Poincaré–Lefschetz duality. Here the geometric work sits in the Spanier–Whitehead theorem, which builds the duality maps from the embedding.

**Wikipedia:** [Spanier–Whitehead duality](https://en.wikipedia.org/wiki/Spanier%E2%80%93Whitehead_duality). It says: “Taking homology and cohomology with respect to an Eilenberg–MacLane spectrum recovers Alexander duality formally.”

**Sources:**

- [Edwin H. Spanier and J. H. C. Whitehead, Duality in homotopy theory, Mathematika 2 (1955) 56–80](https://doi.org/10.1112/s002557930000070x)

### Flat ring spectra make the Adams E₂-term an Ext of comodules

**Remember:** If E sees itself flatly, E-homology carries a coaction of E•(E).

*Makes the theorem clean to state or prove.* MSC 55P43 (Spectra with additional structure (\\(E\_\\infty\\), \\(A\_\\infty\\), ring spectra, etc.)), 55T15, 16T05. arXiv math.AT. Level 3: graduate.

**Definition.** Let E be a homotopy commutative ring spectrum. Its coefficient ring is π•(E), its homotopy groups. Its self-homology E•(E) is the E-homology of E itself. E is flat if E•(E) is a flat module over π•(E).

**Problem.** Let E be a flat ring spectrum and let E•(X) be projective over π•(E). Then E•(E) is a Hopf algebroid, and the E₂-term of the E-Adams spectral sequence for maps X → Y is Ext over E•(E) from the comodule E•(X) to E•(Y).

**How the definition helps.** Flatness gives the isomorphism E•(E) ⊗ E•(X) ≅ π•(E ∧ E ∧ X), and this turns E-homology into algebra with a good Ext. Because of it, E•(E) is a Hopf algebroid and each E•(X) is a comodule over it. These comodules form an abelian category with enough injectives. Convergence of the spectral sequence is a separate question.

**nLab:** [Adams spectral sequence](https://ncatlab.org/nlab/show/Adams+spectral+sequence). It says: “the d₁-cohomology of the first page computes the Ext-groups from the E-homology of Y to the E-homology of X, regarded as E•(E)-comodules.”

**Sources:**

- [Douglas Ravenel, A novice's guide to the Adams–Novikov spectral sequence, in Geometric Applications of Homotopy Theory II, Lecture Notes in Mathematics 658, Springer 1978](https://doi.org/10.1007/BFb0068728)

### Modules over the Eilenberg–MacLane ring spectrum HR are chain complexes

**Remember:** HR-modules and chain complexes are the same homotopy theory.

*Makes the theorem clean to state or prove.* MSC 55P43 (Spectra with additional structure (\\(E\_\\infty\\), \\(A\_\\infty\\), ring spectra, etc.)), 18G80, 13D09. arXiv math.AT, math.KT. Level 3: graduate.

**Definition.** The Eilenberg–MacLane spectrum HR of a ring R is the ring spectrum with π₀ equal to R and no other homotopy groups. An HR-module spectrum is a spectrum with an action of HR that is associative up to coherent homotopy.

**Problem.** For every ring R, HR-module spectra and unbounded chain complexes of R-modules have Quillen equivalent model structures. So the homotopy category of HR-modules is the derived category D(R).

**How the definition helps.** In both categories a compact generator has endomorphism ring spectrum HR, so Morita theory makes both categories modules over HR (our own outline). The generators are HR itself and the complex R in degree zero. The work went into Schwede–Shipley Morita theory. It also uses the fact that a ring spectrum with homotopy only in degree zero is H of its π₀.

**nLab:** [stable Dold-Kan correspondence](https://ncatlab.org/nlab/show/stable+Dold-Kan+correspondence). It says: “For R any ring (or ringoid, even) there is a Quillen equivalence H R ModSpectra ≃ Ch<sub>•</sub>(R Mod) between a model category of H R-module spectra over the Eilenberg-MacLane spectrum H R and the model structure on unbounded chain complexes”

**Sources:**

- [Stefan Schwede and Brooke Shipley, Stable model categories are categories of modules, Topology 42 (2003) 103–153](https://doi.org/10.1016/S0040-9383(02)00006-X)
- [Brooke Shipley, HZ-algebra spectra are differential graded algebras, American Journal of Mathematics 129 (2007) 351–379](https://doi.org/10.1353/ajm.2007.0014)

### Segal's condition makes Γ-spaces model infinite loop spaces

**Remember:** X(n) must really be the n-fold product of X(1), up to homotopy.

*Rules out counterexamples.* MSC 55P47 (Infinite loop spaces), 55P48, 55P42. arXiv math.AT. Level 3: graduate.

**Definition.** A Γ-space is a functor X from finite pointed sets to spaces. It is special if X(0) is contractible and every Segal map X(n) → X(1) × … × X(1) is a weak equivalence. The Segal map is built from the n maps that keep one point and collapse the others. It is very special if, in addition, the monoid π₀X(1) is a group.

**Problem.** For a special Γ-space X, the maps of finite pointed sets make X(1) a multiplication that is unital, associative and commutative up to coherent homotopy. If X is very special, X presents an infinite loop space (Segal's theorem).

**How the definition helps.** The Segal condition turns X(n) into the n-fold product of X(1), and that gives the multiplication. A bare functor on finite pointed sets carries no product structure, so X(n) need not relate to powers of X(1). Delooping is then a homotopy colimit of a simplicial object. The real content is Segal's theorem; the definition makes it statable.

**nLab:** [Gamma-space](https://ncatlab.org/nlab/show/Gamma-space). It says: “In order for this to be valid, and thus for X to present an infinite loop space, a Γ-space must satisfy the further condition that all the Segal maps … are weak equivalences.”

**Sources:**

- [Graeme Segal, Categories and cohomology theories, Topology 13 (1974) 293–312](https://doi.org/10.1016/0040-9383(74)90022-6)

### Grouplike Eₖ-algebras are exactly the k-fold loop spaces

**Remember:** k-fold loop spaces are grouplike spaces that multiply in k directions.

*Makes the theorem clean to state or prove.* MSC 55P48 (Loop space machines and operads in algebraic topology), 55P35. arXiv math.AT. Level 3: graduate.

**Definition.** An Eₖ-algebra is a space with an action of the little k-cubes operad. This operad describes the ways to place several small k-dimensional cubes, without overlap, inside one big cube. An Eₖ-algebra is grouplike if its monoid of components π₀ is a group.

**Problem.** A space is a k-fold loop space up to homotopy exactly when it is a grouplike Eₖ-algebra (May 1972).

**How the definition helps.** The little cubes operad encodes exactly the operations that a k-fold loop space has. The grouplike condition is needed: a non-grouplike monoid deloops, but its delooping recovers it only up to group completion. In any ∞-topos, Lurie proves the analogue as an equivalence between grouplike Eₖ-algebras and pointed (k−1)-connected objects.

**nLab:** [May recognition theorem](https://ncatlab.org/nlab/show/May+recognition+theorem), [little cubes operad](https://ncatlab.org/nlab/show/little+cubes+operad), [delooping hypothesis](https://ncatlab.org/nlab/show/delooping+hypothesis). It says: “iterated loop spaces as "grouplike" En-algebras in the classical homotopy theory of spaces (∞Grpd)”

**Sources:**

- [J. Peter May, The geometry of iterated loop spaces, Lecture Notes in Mathematics 271, Springer (1972)](https://doi.org/10.1007/BFb0067491)
- [Jacob Lurie, Derived Algebraic Geometry VI: E<sub>k</sub> Algebras, arXiv:0911.0018](https://arxiv.org/abs/0911.0018)

### Shape theory sees the Warsaw circle as a circle

**Remember:** Shape is the homotopy type seen through ever finer blurry glasses.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55P55 (Shape theory). arXiv math.AT, math.GN. Level 3: graduate.

**Definition.** The shape of a compact metric space X is its system of neighbourhoods, or of nerves of open covers. You regard this system, up to homotopy, as a pro-object (an inverse system) of nice spaces, such as ANRs (absolute neighbourhood retracts) or polyhedra. Shape maps are compatible families of maps between these approximations.

**Problem.** Shape agrees with homotopy type on ANRs. The Warsaw circle has the shape of the circle S¹, although its weak homotopy type sees no circle.

**How the definition helps.** Shape sees the Warsaw circle as a circle, because its small neighbourhoods in the plane are annuli up to homotopy. The inclusions between these neighbourhoods are homotopy equivalences. The Warsaw circle is path-connected with trivial homotopy groups, so the map from a point is a weak homotopy equivalence. Shape also lets one state Chapman's complement theorem, which is itself a hard result.

**nLab:** [shape theory](https://ncatlab.org/nlab/show/shape+theory), [Warsaw circle](https://ncatlab.org/nlab/show/Warsaw+circle). It says: “the weak homotopy type fails to give useful information for 'bad' spaces, of which classical examples include the Warsaw Circle”

**Sources:**

- [S. Mardešić, J. Segal, Shapes of compacta and ANR-systems, Fund. Math. 72 (1971) 41–59](https://doi.org/10.4064/fm-72-1-41-59)

### Completion as localization gives every spectrum an arithmetic fracture square

**Remember:** A spectrum is glued from its rationalization and its completions at every prime.

*Makes the theorem clean to state or prove.* MSC 55P60 (Localization and completion in homotopy theory), 55P42. arXiv math.AT. Level 3: graduate.

**Definition.** Bousfield localization at E is the universal map to a spectrum receiving no nonzero maps from spectra Y with E ∧ Y = 0. Rationalization is localization at the rational Moore spectrum Sℚ. The profinite completion of X is the product over all primes p of its p-completions, the localizations at S/p. Bousfield showed that this product is the localization at the Moore spectrum S(ℚ/ℤ).

**Problem.** For every spectrum X, the square formed by X, its rationalization, its profinite completion and the rationalization of that completion is a homotopy pullback. For spaces the same square needs extra hypotheses, such as nilpotence.

**How the definition helps.** With both corners defined as localizations, the proof reduces to comparing the fibres of two maps. The fibre F of the completion map has S(ℚ/ℤ) ∧ F = 0, so its homotopy groups are ℚ-vector spaces (our own outline). Rationalization is exact and leaves this fibre unchanged, so the rationalized map has the same fibre, with no hypothesis on X (our own outline). The work moves into Bousfield's theorem that S(ℚ/ℤ)-localization is the product of the p-completions.

**nLab:** [fracture theorem](https://ncatlab.org/nlab/show/fracture+theorem). It says: “the arithmetic fracture theorem says that stable homotopy types (and suitably tame plain homotopy types) canonically decompose into their rationalization and their p-completion for all primes p”

**Sources:**

- [A. K. Bousfield, The localization of spectra with respect to homology, Topology 18 (1979) 257–281](https://doi.org/10.1016/0040-9383(79)90018-1)

### Defining p-completion as Moore spectrum localization gives an Ext formula

**Remember:** Completion at p maps out of the Prüfer group's Moore spectrum.

*Makes the theorem clean to state or prove.* MSC 55P60 (Localization and completion in homotopy theory), 55P42. arXiv math.AT. Level 3: graduate.

**Definition.** The p-completion of a spectrum X is its Bousfield localization at S/p, the cofibre of multiplication by p on the sphere. A Moore spectrum SA has ordinary homology A in degree 0 only. Completion is the universal map from X to a spectrum that receives no nonzero maps from spectra Y with S/p ∧ Y = 0.

**Problem.** For every spectrum X, the p-completion of X is the function spectrum F(Σ⁻¹Sℤ/p∞, X), with Sℤ/p∞ the Moore spectrum of the Prüfer group ℤ/p∞. Its homotopy fits into a short exact sequence 0 → Ext(ℤ/p∞, πₙX) → πₙ(completion) → Hom(ℤ/p∞, πₙ₋₁X) → 0.

**How the definition helps.** Once completion is a localization, the formula needs only two checks: F(Σ⁻¹Sℤ/p∞, X) is S/p-local, and the map from X to it is an S/p-equivalence. The exact sequence is then the universal coefficient sequence for maps out of a Moore spectrum (our own remark). When the groups πₙX are finitely generated, it gives πₙX ⊗ ℤₚ, with ℤₚ the p-adic integers (our own remark). The work moves into Bousfield's proof of the two checks.

**nLab:** [Bousfield localization of spectra](https://ncatlab.org/nlab/show/Bousfield+localization+of+spectra). It says: “The localization of spectra at the Moore spectrum S𝔽ₚ is given by the mapping spectrum out of S⁻¹ℤ/p<sup>∞</sup>”

**Sources:**

- [A. K. Bousfield, The localization of spectra with respect to homology, Topology 18 (1979) 257–281](https://doi.org/10.1016/0040-9383(79)90018-1)

### Localization at a set of primes works well for nilpotent spaces

**Remember:** On nilpotent spaces, localizing homotopy groups and localizing homology are the same thing.

*Rules out counterexamples.* MSC 55P60 (Localization and completion in homotopy theory). arXiv math.AT. Level 3: graduate.

**Definition.** A connected space is nilpotent if π₁ is a nilpotent group and acts nilpotently on each higher homotopy group. Let T be a set of primes. An abelian group is T-local if multiplication by each prime outside T is a bijection.

**Problem.** For nilpotent spaces, three conditions for being T-local agree: a homology condition, T-local homotopy groups and T-local homology groups. Every nilpotent space has a T-localization, unique up to homotopy, that localizes each homotopy group and each homology group.

**How the definition helps.** For nilpotent spaces the natural definitions agree, so the theory is well defined. For spaces that are not nilpotent, the nLab lists several inequivalent definitions (Bousfield, Bousfield–Kan, Casacuberta–Peschke). Then Sullivan's homotopy-group and homology characterizations are no longer equivalent, and it is not clear that the localizations exist.

**nLab:** [localization of a space](https://ncatlab.org/nlab/show/localization+of+a+space), [nilpotent topological space](https://ncatlab.org/nlab/show/nilpotent+topological+space). It says: “For non-nilpotent spaces, there are multiple inequivalent definitions of localization”

**Sources:**

- [A. K. Bousfield, D. M. Kan, Homotopy Limits, Completions and Localizations, Lecture Notes in Mathematics 304, Springer (1972)](https://doi.org/10.1007/978-3-540-38117-4)
- [Emmanuel Dror, A generalization of the Whitehead theorem, Symposium on Algebraic Topology, Lecture Notes in Mathematics 249, Springer (1971) 13–22](https://doi.org/10.1007/BFb0060891)

### Localizing at a subring of ℚ just tensors homotopy groups with it

**Remember:** Localize at a subring of the rationals by tensoring homotopy with it.

*Makes the theorem clean to state or prove.* MSC 55P60 (Localization and completion in homotopy theory), 55P62. arXiv math.AT. Level 3: graduate.

**Definition.** A localization L is smashing when LX ≃ X ∧ LS for every spectrum X. Here S is the sphere spectrum and ∧ is the smash product. For a subring R of ℚ, let SR be its Moore spectrum, with homology R in degree 0 only. SR-localization is the universal map to a spectrum receiving no nonzero maps from spectra Y with SR ∧ Y = 0.

**Problem.** For a subring R of ℚ, the SR-localization of every spectrum X is X ∧ SR, and its homotopy groups are πₙX ⊗ R. For R = ℚ this is rationalization, and the rational stable homotopy category is equivalent to graded ℚ-vector spaces.

**How the definition helps.** Once SR-localization is smashing, it is X ∧ SR, whose homotopy is πₙX ⊗ R since R is a colimit of copies of ℤ. It is smashing because SR ∧ SR ≃ SR, so X ∧ SR is an SR-module and hence SR-local (our own outline). For R = ℚ, the step to graded vector spaces uses Serre's theorem that the higher stable stems are finite.

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

**Remember:** Minimal: add generators one at a time, in order of degree, none wasted.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55P62 (Rational homotopy theory). arXiv math.AT. Level 3: graduate.

**Definition.** A Sullivan algebra is a free graded-commutative algebra ∧V with a differential. Here V has a well-ordered basis, and each basis element has its differential in the subalgebra generated by earlier ones. It is minimal when the degrees of the generators never decrease along the order. For simply connected spaces, this means the differential has no linear part.

**Problem.** Minimal Sullivan algebras correspond bijectively, up to isomorphism, to rational homotopy types of simply connected spaces of finite type. The generators of the minimal model are dual to the rational homotopy groups.

**How the definition helps.** Minimality makes the model unique up to isomorphism, so invariants can be read straight off it. Any Sullivan model gives the rational homotopy type, but there are many non-isomorphic ones. The deep part is Sullivan's theorem that rational homotopy types of such spaces are equivalent to these algebras.

**nLab:** [Sullivan model](https://ncatlab.org/nlab/show/Sullivan+model). It says: “Conversely, every rational space can be obtained from a dg-algebra and the minimal Sullivan algebras provide convenient representatives that correspond bijectively to rational homotopy types under this correspondence.”

**Sources:**

- [D. Sullivan, Infinitesimal computations in topology, Publications Mathématiques de l'IHÉS 47 (1977)](https://doi.org/10.1007/BF02684341)
- [K. Hess, Rational homotopy theory: a brief introduction, arXiv:math/0604626](https://arxiv.org/abs/math/0604626)

### Rational homotopy theory needs nilpotent spaces of finite type

**Remember:** Sullivan models see cohomology, so π₁ must not hide behind trivial cohomology.

*Rules out counterexamples.* MSC 55P62 (Rational homotopy theory), 55P60. arXiv math.AT. Level 3: graduate.

**Definition.** A group is nilpotent if repeated commutators become trivial after finitely many steps. A connected space is nilpotent if its fundamental group is nilpotent and acts nilpotently on the higher homotopy groups: each higher homotopy group has a finite chain of subgroups, and π₁ acts trivially on each successive quotient. Simply connected spaces are nilpotent. A space is of finite type if its rational homology is finite-dimensional in each degree.

**Problem.** For nilpotent spaces of finite type, piecewise polynomial differential forms give an equivalence between rational homotopy types and minimal Sullivan algebras over ℚ (Sullivan's theorem).

**How the definition helps.** The conditions exclude spaces that cohomology cannot see. The excluded counterexamples are the classifying spaces BΓ of acyclic groups Γ, which have the rational cohomology of a point but π₁(BΓ) ≅ Γ. Their Sullivan algebras cannot be told apart from those of a contractible space. For simply connected spaces, the Hurewicz theorem makes every acyclic space contractible.

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

**How the definition helps.** The restriction to connected pointed spaces is what makes the theorem true. Freyd and Heller found an endomorphism of the classifying space of Thompson's group F that does not split in the homotopy category. A retract of a representable functor that splits it satisfies the Brown conditions but is not representable. With the restriction, the proof is still a real construction that attaches cells.

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

**Problem.** Moore paths in a space form a strict category, with strictly associative composition and strict units. The Moore path space factors each map functorially into a trivial Hurewicz cofibration followed by a Hurewicz fibration.

**How the definition helps.** Variable lengths remove the need to reparametrize, so concatenation is strictly associative and the length-0 path is a strict unit. Ordinary paths on \[0,1\] compose only up to a reparametrizing homotopy. Barthel and Riehl also show that a map is a Hurewicz fibration exactly when it is an algebra for the pointed endofunctor of this factorization.

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

**How the definition helps.** With the colimit definition, the sequence for ΣX is the sequence for X without its first term, and dropping a first term does not change a colimit. In our own account, the k-th term for ΣX is πₙ₊₁₊ₖ(Σᵏ⁺¹X), the (k+1)-th term for X. With the single-group definition, the result needs the Freudenthal suspension theorem. The work moves into Freudenthal's theorem, which shows that the two definitions agree.

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

**Definition.** The product Sᵐ × Sⁿ is the wedge Sᵐ ∨ Sⁿ with one cell of dimension m + n attached by a map w. For based maps f and g from these spheres to X, the Whitehead product \[f, g\] is the class of (f ∨ g) ∘ w.

**Problem.** For m, n ≥ 1, the map f ∨ g on the wedge extends to Sᵐ × Sⁿ exactly when \[f, g\] = 0.

**How the definition helps.** With this definition, the claim is a basic fact: a map extends over an attached cell exactly when its composite with the attaching map is nullhomotopic. In our own account, an extension over the top cell is a map from the disk that extends (f ∨ g) ∘ w, which is a nullhomotopy. The work moves to identifying the attaching map w and to comparing this definition with the Samelson product.

**nLab:** [Whitehead product](https://ncatlab.org/nlab/show/Whitehead+product). It says: “as the result of a cell attachment to the wedge sum”

**Sources:** none listed. No primary source with a working link was found.

### Cup-product Hopf invariants scale by d² under degree-d target maps

**Remember:** Scaling the lower generator by d scales its square by d².

*True by definition.* MSC 55Q25 (Hopf invariants), 55N45. arXiv math.AT. Level 3: graduate.

**Definition.** For a map f: S²ⁿ⁻¹ → Sⁿ, form the mapping cone C(f) by attaching a 2n-dimensional disk to Sⁿ along f. Its cohomology has generators α in degree n and β in degree 2n. The Hopf invariant H(f) is the integer with α ∪ α = H(f) β, where ∪ is the cup product. The geometric definition is the linking number of the inverse images of two regular values.

**Problem.** Let n ≥ 2 and let g: Sⁿ → Sⁿ have degree d. Then H(g ∘ f) = d² H(f).

**How the definition helps.** With the cup-product definition, g induces a map of mapping cones C(f) → C(g ∘ f) whose action on cohomology is simple. In our own account, this map is g on Sⁿ and the identity on the disk, so it sends the degree-n generator to dα and fixes β. Cup products are natural, so (dα) ∪ (dα) = H(g ∘ f) β, which gives H(g ∘ f) = d² H(f). The work moves to comparing the cup-product definition with the linking-number definition.

**nLab:** [Hopf invariant](https://ncatlab.org/nlab/show/Hopf+invariant). It says: “there exists an integer HI(f) which expresses the cup product square”

**Sources:**

- [Allen Hatcher, Algebraic Topology, §4.B, Exercise 1](https://pi.math.cornell.edu/~hatcher/AT/ATch4.4.pdf)

### The cup-square Hopf invariant vanishes for odd target dimensions

**Remember:** In odd degree, reversing the cup square changes its sign.

*True by definition.* MSC 55Q25 (Hopf invariants), 55N45. arXiv math.AT. Level 3: graduate.

**Definition.** For a map φ from the (2n−1)-sphere to the n-sphere, attach a 2n-disk to the n-sphere along φ. Its cohomology has generators α in degree n and β in degree 2n. The Hopf invariant h(φ) is the integer with α ⌣ α = h(φ)β.

**Problem.** For odd n &gt; 1, every map from the (2n−1)-sphere to the n-sphere has Hopf invariant zero.

**How the definition helps.** In our own short proof, the cup-square definition gives zero because an odd-degree class has a square equal to its own negative. Thus 2h(φ)β = 0, and β generates a copy of ℤ, so h(φ) = 0. The geometric definition instead needs a sign rule for exchanging the two preimages.

**Wikipedia:** [Hopf invariant](https://en.wikipedia.org/wiki/Hopf_invariant). It says: “The integer h(φ) is the Hopf invariant of the map φ.”

**Sources:**

- [Hopf, H. (1931). Über die Abbildungen der dreidimensionalen Sphäre auf die Kugelfläche. Mathematische Annalen 104, 637–665.](https://doi.org/10.1007/BF01457962)

### Defining Toda brackets as sets makes their indeterminacy a coset

**Remember:** Take every choice at once, and the bracket becomes a well-defined coset.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55Q45 (Stable homotopy of spheres), 55Q35. arXiv math.AT. Level 3: graduate.

**Definition.** Take maps W → X → Y → Z, called f, g and h, with g ∘ f and h ∘ g null homotopic. Null homotopic means homotopic to a constant map. A choice of these null homotopies glues to a map from the suspension SW to Z. The Toda bracket ⟨f, g, h⟩ is the set of all maps obtained from all such choices.

**Problem.** For stable maps, the Toda bracket ⟨f, g, h⟩ is a coset of the subgroup h ∘ \[SW, Y\] + \[SX, Z\] ∘ Sf. So it is a well-defined element of the quotient of \[SW, Z\] by that subgroup.

**How the definition helps.** Taking the set of all choices makes the bracket independent of choices by construction (our own framing; Wikipedia defines one non-unique map). Changing the null homotopies changes the map by an element of h ∘ \[SW, Y\] or \[SX, Z\] ∘ Sf, which gives the coset. For spaces, \[SW, Z\] may be nonabelian, and the bracket is then a double coset (our own remark). Identities such as the juggling formulas can then be stated as relations between cosets.

**Wikipedia:** [Toda bracket](https://en.wikipedia.org/wiki/Toda_bracket). It says: “Changing these maps changes the Toda bracket by adding elements of h \[SW,Y\] and \[SX,Z\]C<sub>f</sub>.”

**Sources:**

- [H. Toda, Composition Methods in Homotopy Groups of Spheres, Annals of Mathematics Studies 49, Princeton University Press, 1962](https://doi.org/10.1515/9781400882625)

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

**How the definition helps.** With the disk definition, the result follows from closure properties of lifting. The maps that p lifts against are closed under gluing, under composing in a sequence and under retracts. In our own account, for a CW complex X, the inclusion X × {0} → X × \[0,1\] is built by gluing cells along Dⁿ × {0} ∪ ∂Dⁿ × \[0,1\]. This pair is homeomorphic to (Dⁿ × \[0,1\], Dⁿ × {0}). The work moves into the closure properties and this homeomorphism.

**nLab:** [Serre fibration](https://ncatlab.org/nlab/show/Serre+fibration). It says: “A Serre fibration has the right lifting property against all retracts”

**Sources:**

- [Allen Hatcher, Algebraic Topology, §4.2](https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf)

### Schedules glue Hurewicz fibrations over numerable covers

**Remember:** A schedule is a timetable that says which open set a path is in.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55R05 (Fiber spaces in algebraic topology), 55R70. arXiv math.AT. Level 3: graduate.

**Definition.** A schedule is a finite list of pairs (label, length), where each label names an open set of a cover. A path fits a schedule if it spends each successive time interval inside the named open set. A Hurewicz connection for p : E → B is a continuous rule that lifts every path in B, once one gives a starting point in E.

**Problem.** Let B have a locally finite numerable open cover. If p : Y → B restricts to a Hurewicz fibration over each set of the cover, then p is a Hurewicz fibration (the globalisation theorem).

**How the definition helps.** A continuous timetable for each path lets one join the local path lifts piece by piece. The schedule theorem of Dyer and Eilenberg chooses, continuously over all paths, how to cut a path into pieces that each lie in one open set of the cover. A map is a Hurewicz fibration exactly when it has a Hurewicz connection, so the local connections join into a global one. The hard work is the schedule theorem itself.

**nLab:** [schedule](https://ncatlab.org/nlab/show/schedule), [Hurewicz connection](https://ncatlab.org/nlab/show/Hurewicz+connection). It says: “The original motivation for the notion of schedules was to prove the globalisation theorem for (Hurewicz) fibrations.”

**Sources:**

- [Eldon Dyer, Samuel Eilenberg, Globalizing fibrations by schedules, Fundamenta Mathematicae 130 (1988) 125–136](https://doi.org/10.4064/fm-130-2-125-136)

### The homotopy kernel of a homotopy kernel is a loop space

**Remember:** Pull back the point along itself up to homotopy, and you get loops.

*True by definition. Confidence: medium.* MSC 55R05 (Fiber spaces in algebraic topology), 55P35, 18N60. arXiv math.AT, math.CT. Level 3: graduate.

**Definition.** In an (∞,1)-category, the homotopy kernel ker(f) of a map f : A → B is the homotopy pullback of the point \* → B along f. The loop space ΩB is the homotopy kernel of \* → B.

**Problem.** The homotopy kernel of ker(f) → A is the loop space ΩB. So every map f : A → B continues to the left in a long fiber sequence … → ΩA → ΩB → ker(f) → A → B.

**How the definition helps.** With homotopy pullbacks, the kernel of a kernel is a loop space, so the sequence never stops. For ordinary kernels, the kernel of a kernel is trivial. Pasting the two homotopy pullback squares gives the outer square that defines ΩB, so the pasting law gives ker(ker(f)) ≃ ΩB. The nLab notes that the loops are reversed in direction.

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

**Problem.** Over any base space, numerable principal bundles are classified by maps to the classifying space. Also, the projection of a numerable fibre bundle is a Hurewicz fibration.

**How the definition helps.** Dold asks for a partition of unity only on the cover that trivializes the bundle, which is where the proofs use one. The usual proofs assume a paracompact base, where every open cover is numerable. The nLab notes that the results generalize only to numerable bundles, but it names no specific counterexample.

**nLab:** [numerable fiber bundle](https://ncatlab.org/nlab/show/numerable+fiber+bundle), [numerable open cover](https://ncatlab.org/nlab/show/numerable+open+cover). It says: “For the theory of fiber bundles to be well-behaved one typically needs to restrict to those that have a local trivialization not just over any open cover but over a numerable open cover”

**Sources:**

- [Albrecht Dold, Partitions of unity in the theory of fibrations, Ann. of Math. 78 (1963) 223–255](https://doi.org/10.2307/1970341)

### The universal first Chern class classifies complex line bundles

**Remember:** An equivalence of the two target spaces identifies line bundles with cohomology classes.

*True by definition.* MSC 55R15 (Classification of fiber spaces or bundles in algebraic topology), 55R40, 55P20. arXiv math.AT. Level 3: graduate.

**Definition.** The universal first Chern class is the weak homotopy equivalence c₁ : BU(1) → K(ℤ, 2). Here BU(1), infinite complex projective space, classifies complex line bundles. K(ℤ, 2) represents degree-two integral cohomology.

**Problem.** For a CW complex X, the first Chern class is a bijection from isomorphism classes of complex line bundles on X to H²(X, ℤ).

**How the definition helps.** Composition with an equivalence gives a bijection on homotopy classes of maps, so the universal definition gives the bijection at once. In our own proof, a map to BU(1) classifies the line bundle and its composite to K(ℤ, 2) represents its class. The work lies in building both classifying spaces and showing that c₁ is an equivalence.

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

**Definition.** For a topological group G, the universal bundle over BG classifies principal G-bundles over CW complexes by pullback, along maps unique up to homotopy. A characteristic class assigns a cohomology class to each bundle and commutes with pullback.

**Problem.** Degree-k characteristic classes of principal G-bundles, with fixed coefficients, correspond bijectively to degree-k cohomology classes on BG.

**How the definition helps.** Every bundle comes from the universal bundle by pullback, so one universal value fixes the class. In our own proof, evaluating the class on the universal bundle gives a class on BG. Conversely, pull a class on BG back along each classifying map; homotopy invariance makes this independent of the map. The work is building the universal bundle and proving that it classifies bundles.

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

**How the definition helps.** With the representing space, this is the Yoneda lemma, which fixes a natural map by its value on the identity map. Each class α is ϕ\*(ι) for a map ϕ: X → K(G, m), so Θ(α) = ϕ\*(Θ(ι)). The work moves to the theorem that maps to K(G, m) represent cohomology. The operations need not be additive.

**nLab:** [cohomology operation](https://ncatlab.org/nlab/show/cohomology+operation). It says: “(non-abelian/unstable) cohomology operations are in natural bijection with homotopy classes of maps between classifying spaces.”

**Sources:**

- [Allen Hatcher, Algebraic Topology, Theorem 4.57](https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf)
- [Allen Hatcher, Algebraic Topology, §4.L, Proposition 4L.1](https://pi.math.cornell.edu/~hatcher/AT/ATch4.4.pdf)

### Admissible sequences of small excess give the cohomology of K(ℤ/2, n)

**Remember:** Excess below n names exactly the free polynomial generators.

*Makes the theorem clean to state or prove.* MSC 55S10 (Steenrod algebra), 55P20. arXiv math.AT. Level 3: graduate.

**Definition.** A sequence I = (i₁, …, iₖ) of positive integers is admissible if each term is at least twice the next. Its excess is i₁ − i₂ − ⋯ − iₖ. The admissible composites Sqᴵ = Sqⁱ¹ ⋯ Sqⁱᵏ form a basis of the Steenrod algebra.

**Problem.** Let ιₙ be the fundamental class of the Eilenberg–MacLane space K(ℤ/2, n). Its mod 2 cohomology is the polynomial algebra on the classes Sqᴵ(ιₙ), for I admissible of excess less than n (Serre).

**How the definition helps.** The excess measures how far an admissible composite is from being killed by instability (our own). If the excess of I is more than n, then Sqᴵ(ιₙ) = 0 (our own). If it equals n, then Sqᴵ(ιₙ) is the square of a shorter class, so it is no new generator (our own). So the one condition, excess less than n, lists the generators with no further cases. The work went into Serre's spectral sequence computation.

**Wikipedia:** [Steenrod algebra](https://en.wikipedia.org/wiki/Steenrod_algebra). It says: “where I is an admissible sequence, form a basis (the Serre–Cartan basis) for the mod 2 Steenrod algebra, called the admissible basis.”

**Sources:**

- [J.-P. Serre, Cohomologie modulo 2 des complexes d'Eilenberg–MacLane, Commentarii Mathematici Helvetici 27 (1953) 198–232](https://doi.org/10.1007/BF02564562)

### Defining squares through the total power makes the Cartan formula multiplicativity

**Remember:** Squares are coefficients of the total power, which is multiplicative.

*True by definition.* MSC 55S10 (Steenrod algebra), 55S05. arXiv math.AT. Level 3: graduate.

**Definition.** Take a mod 2 class a of degree n on X. Steenrod's construction builds from the external square a × a and its swap symmetry a total power P(a) in H²ⁿ(ℝP∞ × X). Write P(a) as Σ xⁿ⁻ⁱ Sqⁱ(a), a polynomial in the generator x of H\*(ℝP∞). This defines each Sqⁱ(a) as a coefficient.

**Problem.** The squares defined this way satisfy the Cartan formula: Sqᵏ(a ∪ b) is the sum of Sqⁱ(a) ∪ Sqʲ(b) over i + j = k. They also satisfy Sqⁱ(a) = 0 for i &gt; n and Sqⁿ(a) = a ∪ a.

**How the definition helps.** The total power is multiplicative, P(a ∪ b) = P(a)·P(b), because the external square of a product is the product of external squares. Comparing coefficients of powers of x gives the Cartan formula at once (our own summary). The total power has degree 2n, so no coefficient exists for i &gt; n. Setting x = 0 restricts P(a) to the cup square a ∪ a. The work went into building P with its swap symmetry, which uses the cohomology of the symmetric group on two letters.

**nLab:** [power operation](https://ncatlab.org/nlab/show/power+operation). It says: “the second (symmetric) power of a ∈ H(X,ℤ₂) is an element in H•(ℝP∞ × X, ℤ₂) ≃ H•(X,ℤ₂)\[x\] and the coefficients of this polynomial in x are the Steenrod operations on a.”

**Sources:** none listed. No primary source with a working link was found.

### Defining the coproduct by Cartan's formula makes the dual Steenrod algebra commutative

**Remember:** The Cartan formula is symmetric, so the dual Steenrod algebra commutes.

*True by definition.* MSC 55S10 (Steenrod algebra), 16T05. arXiv math.AT. Level 3: graduate.

**Definition.** The mod 2 Steenrod algebra A is the algebra of stable cohomology operations on mod 2 cohomology, generated by the Steenrod squares Sqⁱ. Its coproduct ψ is chosen so that the Cartan formula holds. So ψ(Sqᵏ) is the sum of Sqⁱ ⊗ Sqʲ over all i + j = k. The dual Steenrod algebra is the graded linear dual of A, with the product dual to ψ.

**Problem.** The Steenrod algebra is cocommutative, so the dual Steenrod algebra is a commutative algebra. The Steenrod algebra itself is not commutative, since Sq¹Sq² = Sq³ but Sq²Sq¹ is a different basis element.

**How the definition helps.** The defining formula for ψ(Sqᵏ) does not change when the two tensor factors are swapped. Since ψ is an algebra map and the Sqᵏ generate A, ψ is cocommutative on all of A. Dualizing turns a cocommutative coproduct into a commutative product. The usual alternative reads commutativity off Milnor's explicit polynomial description of the dual. Here the work went into the Cartan formula, which makes ψ a well-defined algebra map.

**Wikipedia:** [Steenrod algebra](https://en.wikipedia.org/wiki/Steenrod_algebra). It says: “It is also a Hopf algebra, so that in particular there is a diagonal or comultiplication map ψ: A → A ⊗ A induced by the Cartan formula for the action of the Steenrod algebra on the cup product.”

**Sources:**

- [J. Milnor, The Steenrod algebra and its dual, Annals of Mathematics 67 (1958) 150–171](https://doi.org/10.2307/1969932)

### Making the total square a ring map computes squares on projective space

**Remember:** Sq of x is x plus x², so take powers.

*True by definition.* MSC 55S10 (Steenrod algebra). arXiv math.AT. Level 3: graduate.

**Definition.** The total Steenrod square Sq is the sum Sq⁰ + Sq¹ + Sq² + ⋯, acting on mod 2 cohomology. The Cartan formula says exactly that Sq is a ring homomorphism. The axioms also give Sq⁰ = identity and Sqⁿx = x² when x has degree n. They give Sqⁱx = 0 when i is larger than the degree of x.

**Problem.** In H\*(ℝP∞; 𝔽₂) = 𝔽₂\[x\], with x in degree 1, the square Sqⁱ(xⁿ) is the binomial coefficient C(n, i) mod 2 times xⁿ⁺ⁱ.

**How the definition helps.** Because the total square is multiplicative, it is fixed by its value on the generator, and the axioms give Sq(x) = x + x². So Sq(xⁿ) = (x + x²)ⁿ, and the binomial theorem gives each Sqⁱ(xⁿ) as the part of degree n + i. The work went into constructing squares that satisfy the Cartan formula and the axioms.

**Wikipedia:** [Steenrod algebra](https://en.wikipedia.org/wiki/Steenrod_algebra). It says: “The Cartan relation implies that the total square Sq := Sq⁰ + Sq¹ + Sq² + ⋯ is a ring homomorphism”

**Sources:** none listed. No primary source with a working link was found.

### Via Sqⁿ, Hopf invariant one forces n to be 2ᵏ

**Remember:** Odd Hopf invariant means Sqⁿ acts, so n must be 2ᵏ.

*True by definition.* MSC 55S10 (Steenrod algebra), 55Q25. arXiv math.AT. Level 3: graduate.

**Definition.** Take a map f from S²ⁿ⁻¹ to Sⁿ, with mapping cone C. The cohomology of C has a generator a in degree n and b in degree 2n. The Hopf invariant H(f) is the integer with a ∪ a = H(f)·b. One axiom of the Steenrod squares says that Sqⁿ is the cup square on classes of degree n.

**Problem.** If a map S²ⁿ⁻¹ → Sⁿ has odd Hopf invariant, then n is a power of 2.

**How the definition helps.** Because Sqⁿ is the cup square on degree n, the Hopf invariant is odd exactly when Sqⁿ(a) = b in mod 2 cohomology. If n is not a power of 2, Sqⁿ is a sum of products of squares of lower positive degree. In each product, the first square applied sends a into a degree n + j with 0 &lt; j &lt; n. The cohomology of C is zero there, so Sqⁿ(a) = 0. The work went into the Adem relations, which give this decomposition. Adams's sharper result, n = 1, 2, 4 or 8, needs secondary operations.

**Wikipedia:** [Steenrod algebra](https://en.wikipedia.org/wiki/Steenrod_algebra), [Hopf invariant](https://en.wikipedia.org/wiki/Hopf_invariant). It says: “The proof uses the fact that each Sqᵏ is decomposable for k which is not a power of 2; that is, such an element is a product of squares of strictly smaller degree.”

**Sources:**

- [J. Adem, The iteration of the Steenrod squares in algebraic topology, Proceedings of the National Academy of Sciences 38 (1952) 720–726](https://doi.org/10.1073/pnas.38.8.720)
- [J. F. Adams, On the non-existence of elements of Hopf invariant one, Annals of Mathematics 72 (1960) 20–104](https://doi.org/10.2307/1970147)

### Truncation keeps lower cutoff

**Remember:** Once only lower groups matter, an earlier higher cutoff makes no difference.

*True by definition.* MSC 55S45 (Postnikov systems, \\(k\\)-invariants), 55P15. arXiv math.AT. Level 3: graduate.

**Definition.** Define n-truncation as the universal map from a space to an n-type, a homotopy type with no higher homotopy groups. The usual Postnikov construction instead attaches cells to kill groups above n without changing lower groups.

**Problem.** Truncating first at one nonnegative degree and then at another is equivalent to truncating once at the lower degree.

**How the definition helps.** In our own words, every type at the lower cutoff also satisfies the higher cutoff. So test maps into types at the lower cutoff and apply the universal property twice. The work moves to proving the universal property for the Postnikov construction.

**nLab:** [n-truncated object of an (infinity,1)-category](https://ncatlab.org/nlab/show/n-truncated+object+of+an+%28infinity%2C1%29-category). It says: “Under mild conditions there is for each n a universal way to send an arbitrary object A to its n-truncation”

**Sources:**

- [Allen Hatcher, Algebraic Topology, Example 4.16 and §4.3, Postnikov Towers](https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf)

### A contractible path space forces the homology of loops on a sphere

**Remember:** The total space is a point, so every other class must die.

*Makes the theorem clean to state or prove.* MSC 55T10 (Serre spectral sequences), 55P35. arXiv math.AT. Level 3: graduate.

**Definition.** The path space PX of a pointed space X is the space of paths that start at the base point. Evaluating a path at its end point is a fibration PX → X whose fibre is the loop space ΩX. The space PX is contractible, because each path can be shrunk back along itself.

**Problem.** For n ≥ 1, the loop space of Sⁿ⁺¹ has Hᵢ(ΩSⁿ⁺¹; ℤ) ≅ ℤ when n divides i. All its other homology groups are zero.

**How the definition helps.** Because the total space is contractible, every class on E² except the corner ℤ must be killed. The base has homology only in degrees 0 and n+1, so the one possible differential dⁿ⁺¹ must be an isomorphism between the two columns. Induction on the degree then gives a ℤ in every degree that is a multiple of n. The work is only the existence of the Serre spectral sequence.

**Wikipedia:** [Serre spectral sequence](https://en.wikipedia.org/wiki/Serre_spectral_sequence). It says: “However, since the path space is contractible, we know that by the time the sequence gets to E∞, everything becomes 0 except for the group at p = q = 0.”

**Sources:**

- [Jean-Pierre Serre, Homologie singulière des espaces fibrés, Annals of Mathematics 54 (1951) 425–505](https://doi.org/10.2307/1969485)

### Classes restricting to a fibre basis make the Serre spectral sequence collapse

**Remember:** Classes on the whole space that restrict to a fibre basis cannot be killed.

*Rules out counterexamples.* MSC 55T10 (Serre spectral sequences), 55R20. arXiv math.AT. Level 3: graduate.

**Definition.** Let F → E → B be a fibre bundle over a connected base, and k a field. The fibre is totally non-homologous to zero when restriction H\*(E; k) → H\*(F; k) is onto. Equivalently, there are classes on E whose restrictions to each fibre form a basis of the fibre's cohomology.

**Problem.** Leray–Hirsch theorem: let H\*(F; k) be finite-dimensional in each degree and let H\*(E; k) → H\*(F; k) be onto. Then H\*(E; k) ≅ H\*(B; k) ⊗ H\*(F; k) as H\*(B; k)-modules, by b ⊗ f ↦ p\*(b) ∪ s(f) for a chosen lift s.

**How the definition helps.** The onto condition rules out fibre classes that a differential could kill, so the spectral sequence must collapse. The Hopf fibration S¹ → S³ → S² shows the need, because H¹(S³) = 0 cannot map onto H¹(S¹) (our own example). Under the condition, the left column of E₂ consists of permanent cycles, and by the Leibniz rule all differentials vanish (our own summary). The H\*(B)-module structure then solves the extension problem, so the module is free.

**nLab:** [Leray-Hirsch theorem](https://ncatlab.org/nlab/show/Leray-Hirsch+theorem). It says: “The Leray-Hirsch theorem states sufficient fiberwise condition for the ordinary cohomology of the total space of a fiber bundle with coefficients in a commutative ring to be free module over the cohomology ring of the base space.”

**Wikipedia:** [Leray–Hirsch theorem](https://en.wikipedia.org/wiki/Leray%E2%80%93Hirsch_theorem). It says: “In other words, if for every p, there exist classes c₁,ₚ, …, cₘₚ,ₚ ∈ Hᵖ(E) that restrict, on each fiber F, to a basis of the cohomology in degree p, the map given below is then an isomorphism of H\*(B) modules.”

**Sources:**

- [Allen Hatcher, Algebraic Topology, Cambridge University Press (2002)](https://pi.math.cornell.edu/~hatcher/AT/AT.pdf)

### Derivation differentials compute the cohomology ring of complex projective space

**Remember:** Know d on the generator, and Leibniz gives d on everything.

*Makes the theorem clean to state or prove.* MSC 55T10 (Serre spectral sequences), 55N45. arXiv math.AT. Level 3: graduate.

**Definition.** A spectral sequence is multiplicative when each page is a bigraded algebra and each differential is a derivation, so d(xy) = d(x)y ± x d(y). The product on each page is the one induced from the page before. The cohomology Serre spectral sequence with coefficients in a ring is multiplicative, with the cup product on E₂ up to sign.

**Problem.** The integral cohomology ring of complex projective space is H\*(ℂPⁿ; ℤ) = ℤ\[x\]/(xⁿ⁺¹) with x in degree 2. Letting n grow gives H\*(ℂP∞; ℤ) = ℤ\[x\].

**How the definition helps.** The Leibniz rule fixes every differential once d₂ is known on the one fibre generator. Take the circle bundle S¹ → S²ⁿ⁺¹ → ℂPⁿ. Its fibre class i must hit a generator x of H²(ℂPⁿ), since S²ⁿ⁺¹ has no H¹ or H². Then d(ixᵏ) = xᵏ⁺¹, so each power xᵏ⁺¹ generates its group up to degree 2n.

**nLab:** [multiplicative spectral sequence](https://ncatlab.org/nlab/show/multiplicative+spectral+sequence). It says: “A spectral sequence is called multiplicative or a spectral ring if there is a bi-graded algebra structure on each page such that the differentials act as graded derivations of total degree 1.”

**Wikipedia:** [Serre spectral sequence](https://en.wikipedia.org/wiki/Serre_spectral_sequence). It says: “We then see that d(ix) = x² by the Leibniz rule telling us that the 4,0 coordinate must be x² since there can be no nontrivial homology until degree 2n + 1.”

**Sources:**

- [Jean-Pierre Serre, Homologie singulière des espaces fibrés, Annals of Mathematics 54 (1951) 425–505](https://doi.org/10.2307/1969485)

### Killing π₃ with K(ℤ,3) makes π₄ of the 3-sphere a homology group

**Remember:** Kill the first homotopy group; Hurewicz then reads off the next one.

*Makes the theorem clean to state or prove.* MSC 55T10 (Serre spectral sequences), 55Q40. arXiv math.AT. Level 3: graduate.

**Definition.** Choose a map S³ → K(ℤ,3) that is an isomorphism on π₃; here K(ℤ,3) is the Eilenberg–MacLane space with only π₃ = ℤ. Its homotopy fibre X is 3-connected, with πₖ(X) = πₖ(S³) for k ≥ 4. Since ΩK(ℤ,3) = K(ℤ,2) = ℂP∞, there is a fibration ℂP∞ → X → S³.

**Problem.** The fourth homotopy group of the 3-sphere is π₄(S³) ≅ ℤ/2. With the Hopf fibration S¹ → S³ → S², this also gives π₄(S²) ≅ ℤ/2.

**How the definition helps.** The new space X is 3-connected, so the Hurewicz theorem turns π₄(X) into the homology group H₄(X). In the cohomology Serre spectral sequence of ℂP∞ → X → S³, the generator a of H²(ℂP∞) must hit the generator ι of H³(S³). By the Leibniz rule, d(a²) = 2aι, so H⁵(X) = ℤ/2 and H⁴(X) = 0, and universal coefficients give H₄(X) = ℤ/2. The work is in this method of killing homotopy groups, due to Cartan and Serre.

**Wikipedia:** [Serre spectral sequence](https://en.wikipedia.org/wiki/Serre_spectral_sequence). It says: “But now since we killed off the lower homotopy groups of X (i.e., the groups in degrees less than 4) by using the iterated fibration, we know that H₄(X) = π₄(X) by the Hurewicz theorem”

**Sources:**

- [Jean-Pierre Serre, Homologie singulière des espaces fibrés, Annals of Mathematics 54 (1951) 425–505](https://doi.org/10.2307/1969485)

### Local coefficients let the Serre spectral sequence work over any connected base

**Remember:** Loops in the base twist the fibre's cohomology; local coefficients keep track.

*Makes the theorem clean to state or prove.* MSC 55T10 (Serre spectral sequences), 55N25. arXiv math.AT. Level 3: graduate.

**Definition.** A local coefficient system on a space B gives a group at each point and an isomorphism along each path, up to homotopy of paths. For a fibration F → E → B, the cohomology groups of the fibres form such a system. Cohomology with local coefficients uses these twisted groups in place of one fixed group.

**Problem.** Every Serre fibration F → E → B over a path-connected base has a spectral sequence from Hᵖ(B; Hᵗ(F)), with local coefficients, to H\*(E). When π₁(B) acts trivially on H\*(F), for example when B is simply connected, the E₂ term is ordinary cohomology.

**How the definition helps.** The local system records how loops in the base act on the fibre's cohomology, so the theorem needs no hypothesis on π₁(B). Without it, the statement must assume that B is simply connected or that the action is trivial. The work goes into Serre's construction, which filters E by the parts over the skeleta of B. Its first page is then the cellular cochain complex of B with the twisted coefficients (our own summary).

**nLab:** [Serre spectral sequence](https://ncatlab.org/nlab/show/Serre+spectral+sequence). It says: “such that the canonical group action of the fundamental group π₁(X) on the ordinary cohomology of the fiber F is trivial (for instance if X is a simply connected topological space)”

**Wikipedia:** [Serre spectral sequence](https://en.wikipedia.org/wiki/Serre_spectral_sequence). It says: “Strictly speaking, what is meant is cohomology with respect to the local coefficient system on B given by the cohomology of the various fibers. Assuming for example, that B is simply connected, this collapses to the usual cohomology.”

**Sources:**

- [Jean-Pierre Serre, Homologie singulière des espaces fibrés, Annals of Mathematics 54 (1951) 425–505](https://doi.org/10.2307/1969485)

### Orientable fibrations multiply Euler characteristics

**Remember:** Each page keeps the Euler characteristic, so the product survives to the end.

*Makes the theorem clean to state or prove.* MSC 55T10 (Serre spectral sequences), 55R20. arXiv math.AT. Level 3: graduate.

**Definition.** A fibration F → E → B is orientable over a field K when π₁(B) acts trivially on H\*(F; K). Then the Serre spectral sequence has E₂ = H\*(B; K) ⊗ H\*(F; K). The Euler characteristic of a page is the alternating sum of the dimensions of its terms, counted by total degree.

**Problem.** If B is path-connected, the fibration is orientable over K and the homology of B and F is finite-dimensional, then χ(E) = χ(F)·χ(B).

**How the definition helps.** Orientability makes E₂ a tensor product, so its Euler characteristic is χ(B)·χ(F). Each differential raises total degree by one, and taking homology of such a differential does not change the Euler characteristic (our own summary). So E∞ has the same value, and E∞ is the associated graded of H\*(E). The work is in the Serre spectral sequence and its E₂ term.

**Wikipedia:** [Euler characteristic](https://en.wikipedia.org/wiki/Euler_characteristic). It says: “If p: E → B is a fibration with fiber F, with the base B path-connected, and the fibration is orientable over a field K, then the Euler characteristic with coefficients in the field K satisfies the product property”

**Sources:**

- [Jean-Pierre Serre, Homologie singulière des espaces fibrés, Annals of Mathematics 54 (1951) 425–505](https://doi.org/10.2307/1969485)

### Serre classes make the Hurewicz theorem hold modulo finite groups

**Remember:** Work modulo finite groups, and only rational information is left.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55T10 (Serre spectral sequences), 55Q40. arXiv math.AT. Level 3: graduate.

**Definition.** A Serre class is a family 𝒞 of abelian groups that contains 0 and is closed under subgroups, quotients and extensions. A map is an isomorphism modulo 𝒞 when its kernel and cokernel lie in 𝒞. The finite abelian groups form a Serre class, and so do the finite groups of order prime to p.

**Problem.** Serre's finiteness theorem: πᵢ(Sⁿ) is finite for i ≠ n, except that π₄ₖ₋₁(S²ᵏ) is ℤ plus a finite group. Its tool is the Hurewicz theorem mod finite groups: if X is simply connected and each πᵢ(X), i &lt; n, is finite, then πₙ(X) → Hₙ(X) has finite kernel and cokernel.

**How the definition helps.** Working modulo the class of finite groups lets the spectral sequence arguments ignore all torsion at once (our own summary). So only rational cohomology decides the answer. The rational cohomology of K(ℤ,n) is one polynomial or exterior generator, and killing homotopy groups then shows that the rest is finite. The work moves into Serre's lemma that the Serre spectral sequence respects the class axioms, which needs extra conditions on 𝒞 for tensor and Tor.

**Wikipedia:** [Homotopy groups of spheres](https://en.wikipedia.org/wiki/Homotopy_groups_of_spheres). It says: “Jean-Pierre Serre showed that homotopy groups of spheres are all finite except for those of the form πₙ(Sⁿ) or π₄ₙ₋₁(S²ⁿ) (for positive n), when the group is the product of the infinite cyclic group with a finite abelian group.”

**Sources:**

- [Jean-Pierre Serre, Groupes d'homotopie et classes de groupes abéliens, Annals of Mathematics 58 (1953) 258–294](https://doi.org/10.2307/1969789)

### The Euler class as a transgression gives the Gysin sequence at once

**Remember:** One differential kills the orientation class; its value is the Euler class.

*True by definition.* MSC 55T10 (Serre spectral sequences), 55R25. arXiv math.AT. Level 3: graduate.

**Definition.** Let Sᵏ → E → B be a sphere bundle that is oriented, so π₁(B) acts trivially on Hᵏ(Sᵏ). Let u be the generator of Hᵏ(Sᵏ) given by the orientation. Its Euler class e in Hᵏ⁺¹(B) can be defined as the transgression of u, that is, e = dₖ₊₁(u) in the Serre spectral sequence.

**Problem.** Every oriented sphere bundle Sᵏ → E → B has a long exact Gysin sequence ⋯ → Hⁿ(B) → Hⁿ⁺ᵏ⁺¹(B) → Hⁿ⁺ᵏ⁺¹(E) → Hⁿ⁺¹(B) → ⋯. The first map is cup product with the Euler class e, and the second is pullback along the projection.

**How the definition helps.** The E₂ page has only the two rows q = 0 and q = k, so the single differential dₖ₊₁ joins them. By the Leibniz rule it sends b·u to ±b ∪ e. A spectral sequence with two rows always unrolls into a long exact sequence, and with this definition of e that sequence is the Gysin sequence. The work moves to the theorem that this transgression equals the Euler class defined by the Thom class (our own remark).

**Wikipedia:** [Serre spectral sequence](https://en.wikipedia.org/wiki/Serre_spectral_sequence), [Gysin homomorphism](https://en.wikipedia.org/wiki/Gysin_homomorphism). It says: “We see that the only non-trivial differentials are given on the E₂ᵣ-page and are defined by cupping with the Euler class e(ℰ).”

**Sources:**

- [Jean-Pierre Serre, Homologie singulière des espaces fibrés, Annals of Mathematics 54 (1951) 425–505](https://doi.org/10.2307/1969485)

### Transgression as a coboundary makes it commute with Steenrod squares

**Remember:** Transgression is a coboundary followed by a pullback, so operations pass through.

*True by definition. Confidence: medium.* MSC 55T10 (Serre spectral sequences), 55S10. arXiv math.AT. Level 3: graduate.

**Definition.** Let p: E → B be a fibration with fibre F over the base point b. A class x in Hᵗ(F) is transgressive, with transgression y in Hᵗ⁺¹(B), when its coboundary δx in Hᵗ⁺¹(E, F) is p\*(y). This geometric relation agrees with the last differential dₜ₊₁ of the Serre spectral sequence.

**Problem.** If x is transgressive with transgression y, then each Steenrod square Sqⁱx is transgressive with transgression Sqⁱy. This lets Serre compute H\*(K(ℤ/2, n); 𝔽₂) as a polynomial ring on the classes Sqᴵιₙ with I admissible of excess below n.

**How the definition helps.** Steenrod squares are natural for maps of pairs and commute with the coboundary δ. So they preserve the relation δx = p\*(y) term by term (our own summary). The work moves to Serre's theorem that this geometric transgression is the differential of the spectral sequence. With that identification, Borel's theorem on transgressive generators gives the cohomology of the Eilenberg–MacLane spaces.

**nLab:** [transgression](https://ncatlab.org/nlab/show/transgression). It says: “This construction really exhibits transgression as a special case of the connecting homomorphism in cohomology”

**Wikipedia:** [Spectral sequence](https://en.wikipedia.org/wiki/Spectral_sequence). It says: “The transgression is a partially defined map (more precisely, a map from a subobject to a quotient)”

**Sources:**

- [Jean-Pierre Serre, Cohomologie modulo 2 des complexes d'Eilenberg-MacLane, Commentarii Mathematici Helvetici 27 (1953) 198–232](https://doi.org/10.1007/BF02564562)

### Transgressive exterior generators make classifying space cohomology polynomial

**Remember:** Each exterior generator upstairs transgresses to one polynomial generator downstairs.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55T10 (Serre spectral sequences), 55R40. arXiv math.AT. Level 3: graduate.

**Definition.** In the Serre spectral sequence of F → E → B, a class x in Hᵗ(F) is transgressive if it survives to the page Eₜ₊₁. Then its last differential dₜ₊₁(x), the transgression of x, is a class in a quotient of Hᵗ⁺¹(B). A simple system of generators is a set of classes whose products of distinct elements form a basis.

**Problem.** Borel's theorem: let E be contractible, B simply connected, and H\*(F; k) have a simple system of odd-degree transgressive generators. Then H\*(B; k) is a polynomial ring on their transgressions, so H\*(BG; ℚ) is polynomial for each compact connected Lie group G.

**How the definition helps.** Transgressive generators let one map a simple model spectral sequence into the real one as a ring map. The model is a tensor product of pieces Λ(xᵢ) ⊗ k\[yᵢ\] with d(xᵢ) = yᵢ. Both agree on the left column, H\*(F), and on E∞ = k, so Zeeman's comparison theorem gives the isomorphism on the bottom row, H\*(B). The work is in Hopf's theorem on H\*(G; ℚ) and Borel's choice of transgressive generators.

**Wikipedia:** [Zeeman's comparison theorem](https://en.wikipedia.org/wiki/Zeeman%27s_comparison_theorem). It says: “A crucial point is that f is a "ring homomorphism"; this rests on the technical conditions that uᵢ are "transgressive”

**Sources:**

- [Armand Borel, Sur la cohomologie des espaces fibrés principaux et des espaces homogènes de groupes de Lie compacts, Annals of Mathematics 57 (1953) 115–207](https://doi.org/10.2307/1969728)
- [E. C. Zeeman, A proof of the comparison theorem for spectral sequences, Proc. Cambridge Philos. Soc. 53 (1957) 57–62](https://doi.org/10.1017/S0305004100031984)

### The Bockstein spectral sequence reads off orders of p-torsion page by page

**Remember:** The r-th page sees exactly the summands of order pʳ.

*Makes the theorem clean to state or prove.* MSC 55T99 (Spectral sequences in algebraic topology), 55N10. arXiv math.AT. Level 3: graduate.

**Definition.** Let C be a chain complex of torsion-free abelian groups, such as singular chains, and p a prime. The short exact sequence 0 → C → C → C/p → 0, with first map multiplication by p, gives an exact couple. Its spectral sequence has E¹ = H\*(C; 𝔽ₚ), first differential the Bockstein, and each page the homology of the last.

**Problem.** If H\*(C) is finitely generated in each degree, then E∞ ≅ (H\*(C)/torsion) ⊗ 𝔽ₚ. Each summand ℤ/pʳ of Hₙ(C) gives two classes, in degrees n and n + 1, that survive to Eʳ and are joined by a nonzero dʳ.

**How the definition helps.** The exact couple builds in division by p, so the r-th differential is the Bockstein for ℤ/pʳ. A torsion summand of order pʳ is invisible to the earlier differentials and is killed by dʳ (our own summary). The work is in the derived couple, whose first group is pʳ⁻¹H\*(C), and in the universal coefficient theorem.

**nLab:** [Bockstein spectral sequence](https://ncatlab.org/nlab/show/Bockstein+spectral+sequence). It says: “The Bockstein spectral sequence is traditionally defined by an exact couple in a way that does not manifestly come from a filtered chain complex.”

**Wikipedia:** [Bockstein spectral sequence](https://en.wikipedia.org/wiki/Bockstein_spectral_sequence). It says: “Letting r → ∞ we thus see E∞ is isomorphic to (free part of H\*(C)) ⊗ ℤ/p.”

**Sources:**

- [William Browder, Torsion in H-spaces, Annals of Mathematics 74 (1961), from page 24](https://doi.org/10.2307/1970305)

### Closure-finiteness and the weak topology put compact sets in finite subcomplexes

**Remember:** C and W keep every compact set inside finitely many cells.

*Rules out counterexamples.* MSC 55U05 (Abstract complexes in algebraic topology), 55P10. arXiv math.AT. Level 3: graduate.

**Definition.** In a CW complex, the boundary of each cell meets only finitely many cells (closure-finiteness). A subset is closed if and only if it meets each closed cell in a closed set (weak topology). The name CW stands for these two conditions.

**Problem.** Every compact subset of a CW complex lies in a finite subcomplex. So a map from a sphere, or a homotopy, only sees finitely many cells.

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

**Definition.** A simplicial map sends each vertex to a vertex and is linear on each simplex. A subdivision of a simplicial complex cuts its simplices into smaller simplices without changing the space. The theorem allows the domain to be subdivided before you look for a simplicial map.

**Problem.** Every continuous map between finite simplicial complexes is homotopic to a simplicial map from a subdivision of the domain. As a consequence, the homotopy group πₖ(Sⁿ) is zero when k is less than n.

**How the definition helps.** Subdivision makes the simplices of the domain small enough that the star of each vertex lands inside the star of a vertex of the target. Without subdivision the statement is false, since a coarse simplex may have to wrap around many simplices. A map from Sᵏ to Sⁿ with k &lt; n then becomes simplicial, misses a point for dimension reasons, and so is homotopic to a constant map.

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

**Definition.** Define the geometric realization \|K\| of a simplicial set K as the colimit-preserving extension of one rule. The rule sends the standard simplicial set Δ\[n\] to the topological simplex Δⁿ. The usual textbook definition glues one topological n-simplex for each n-simplex of K, with identifications from the face and degeneracy maps. The singular simplicial set Sing X has the continuous maps Δⁿ → X as its n-simplices.

**Problem.** Continuous maps \|K\| → X correspond naturally to simplicial maps K → Sing X.

**How the definition helps.** With the colimit definition, the adjunction is a formal case of the general nerve and realization construction, as the nLab states. In our own account, both sides are a family of maps Δⁿ → X, one for each simplex of K, that respects faces and degeneracies. With the concrete gluing as the definition, one must check that the quotient topology turns such families into continuous maps. The work moves to showing that the concrete gluing computes the colimit, which is what the quotient topology is for.

**nLab:** [geometric realization](https://ncatlab.org/nlab/show/geometric+realization). It says: “Geometric realization is the special case of the general notion of nerve and realization that is induced from the standard cosimplicial topological space”

**Sources:** none listed. No primary source with a working link was found.

### Delta-complexes compute the homology of the torus with six simplices

**Remember:** Let faces repeat, and the torus needs only two triangles.

*Makes the theorem clean to state or prove.* MSC 55U10 (Simplicial sets and complexes in algebraic topology), 55N10. arXiv math.AT. Level 3: graduate.

**Definition.** A Δ-complex is a space glued from simplices along face maps that obey the usual composition rule. Its combinatorial data is a Δ-set, also called a semi-simplicial set. Unlike a simplicial complex, a simplex need not be determined by its vertices. Two edges may share both end points, and one edge may have both ends at the same vertex.

**Problem.** The torus is a Δ-complex with one vertex, three edges and two triangles. Its homology is ℤ in degree 0, ℤ² in degree 1 and ℤ in degree 2.

**How the definition helps.** Allowing repeated vertices shrinks the number of simplices, so the chain complex is small enough to compute by hand. A true simplicial complex for the torus needs at least 42 simplices. What stays hard is to prove that this homology agrees with singular homology, which is a separate theorem.

**Wikipedia:** [Delta set](https://en.wikipedia.org/wiki/Delta_set). It says: “It is worth highlighting that the minimum number of simplices needed to endow T² with the structure of a simplicial complex is 7 vertices, 21 edges, and 14 2-simplices, for a total of 42 simplices.”

**Sources:**

- [Samuel Eilenberg and J. A. Zilber, Semi-simplicial complexes and singular homology, Annals of Mathematics 51 (1950) 499–513](https://doi.org/10.2307/1969364)
- [Allen Hatcher, Algebraic Topology, Cambridge University Press, 2002](https://pi.math.cornell.edu/~hatcher/AT/ATpage.html)

### Dowker's two complexes from one relation have the same homotopy type

**Remember:** Swap witnesses and vertices without changing the homotopy type.

*Makes the theorem clean to state or prove.* MSC 55U10 (Simplicial sets and complexes in algebraic topology), 05E45. arXiv math.CO, math.AT. Level 3: graduate.

**Definition.** Let R be a relation between sets X and Y. The first Dowker complex has as faces the finite subsets of X whose members all relate to one common element of Y. The second complex swaps the roles of X and Y. A simplicial complex is a family of finite sets, called faces, closed under taking subsets.

**Problem.** The geometric realizations of the two Dowker complexes of a relation are homotopy equivalent.

**How the definition helps.** The common-partner rule makes each complex the nerve of a cover of the other, so the nerve theorem applies. In our own finite-case proof, cover the first complex by one simplex for each related y in Y, spanned by the elements related to y. A nonempty intersection of these simplices is again a simplex, so it is contractible. The nerve of a cover records which sets of members meet, and here that is exactly the second complex. The real work is in the nerve theorem, which says such a cover has the homotopy type of its nerve.

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

**Definition.** The décalage Dec₀ X of a simplicial set X is X with its last face and degeneracy maps removed and the degrees shifted down by one. So an n-simplex of Dec₀ X is an (n+1)-simplex of X, a map from the cone Δ\[n\] ⋆ Δ\[0\] = Δ\[n+1\].

**Problem.** For a Kan complex X, the last face map Dec₀ X → X is a Kan fibration, and Dec₀ X deformation retracts onto the vertex set X₀. So Dec₀ X → X replaces the inclusion X₀ → X by a Kan fibration.

**How the definition helps.** A lifting problem against Dec₀ X → X is the same as filling one (n+1)-dimensional horn in X, and a Kan complex can do that. The usual path space, the pullback of Xᴵ → X along X₀ → X, uses a larger cone made from the cylinder Δ\[n\] × Δ\[1\]. That the décalage proof is shorter is our reading; the nLab says only that the décalage is "often more convenient".

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

**Definition.** One option defines an ∞-groupoid as a topological space, taken up to weak homotopy equivalence. A second option defines an ∞-groupoid as a Kan complex. A Kan complex is a simplicial set in which every horn has a filler. A horn is the boundary of a simplex with one face removed, and a filler extends it to the full simplex.

**Problem.** The homotopy hypothesis says that ∞-groupoids are equivalent to topological spaces up to weak homotopy equivalence. The fundamental ∞-groupoid of a space gives the equivalence.

**How the definition helps.** The definition decides whether the hypothesis is a tautology, a theorem or an open problem. If an ∞-groupoid is a space up to weak homotopy equivalence, the hypothesis is a tautology. With Kan complexes, it becomes Quillen's theorem that realization and the singular complex give a Quillen equivalence between spaces and simplicial sets. For Grothendieck ∞-groupoids, Henry and Lanari reduced it to a conjecture that is proved only up to dimension 3.

**nLab:** [homotopy hypothesis](https://ncatlab.org/nlab/show/homotopy+hypothesis), [Kan complex](https://ncatlab.org/nlab/show/Kan+complex). It says: “For instance there is some justification for defining an ∞-groupoid to be equivalently a topological space considered modulo weak homotopy equivalence (see at classical model structure on topological spaces). For this definition the homotopy hypothesis is of course a tautology.”

**Sources:**

- [Daniel Quillen, Homotopical Algebra, Lecture Notes in Mathematics 43, Springer (1967)](https://doi.org/10.1007/BFb0097438)
- [Simon Henry, Edoardo Lanari, On the homotopy hypothesis in dimension 3, Theory Appl. Categ. 39 (2023) 735–768, arXiv:1905.05625](https://arxiv.org/abs/1905.05625)

### Defining homotopy limits as derived functors makes them homotopy invariant

**Remember:** A derived functor treats weak equivalences as isomorphisms before it computes.

*True by definition.* MSC 55U35 (Abstract and axiomatic homotopy theory in algebraic topology), 18N40, 18A30. arXiv math.AT. Level 3: graduate.

**Definition.** The homotopy category formally turns weak equivalences into isomorphisms. For diagrams, a weak equivalence means a map that is a weak equivalence at every entry. The homotopy limit is the right derived functor of the ordinary limit, taken with respect to these weak equivalences. Unlike the ordinary limit, this derived functor acts on homotopy categories.

**Problem.** Where the derived functors exist, homotopy limits and colimits send objectwise weak equivalences of diagrams to isomorphisms in the homotopy category.

**How the definition helps.** The derived definition makes invariance automatic, because the input maps are already isomorphisms in the domain. Ordinary pushouts fail this test: gluing two disks along their boundary gives a sphere, but replacing both disks by points gives a point (our own example). An explicit construction, such as the double mapping cylinder, needs its own invariance proof. The work moves into proving that the derived functor exists and that an explicit construction computes it.

**nLab:** [homotopy limit](https://ncatlab.org/nlab/show/homotopy+limit). It says: “The homotopy limit of a functor F : D → C is, if it exists, the image of F under the right derived functor of the limit functor”

**Wikipedia:** [Homotopy colimit and limit](https://en.wikipedia.org/wiki/Homotopy_colimit_and_limit). It says: “if one (or more) of the spaces used to form the pushout is replaced by a weakly equivalent space, the pushout is not guaranteed to stay weakly equivalent. The homotopy pushout rectifies this defect.”

**Sources:**

- [P. S. Hirschhorn, Model Categories and Their Localizations, Mathematical Surveys and Monographs 99, American Mathematical Society, 2003](https://doi.org/10.1090/surv/099)

### Smash products are associative in a convenient category of spaces

**Remember:** Smash is a quotient of a product, and cartesian closed products keep quotients.

*Rules out counterexamples.* MSC 55U40 (Topological categories, foundations of homotopy theory), 54D50, 18F60. arXiv math.AT, math.GN. Level 3: graduate.

**Definition.** For pointed spaces A and B, the smash product A ∧ B is the quotient (A × B)/(A ∨ B). It is the product with the wedge A × {b₀} ∪ {a₀} × B collapsed to one point. A convenient category of spaces, such as compactly generated spaces, is one that is cartesian closed. That means every pair of spaces has a mapping space with the exponential law.

**Problem.** In a convenient category of pointed spaces, the smash product is associative: A ∧ (B ∧ C) ≅ (A ∧ B) ∧ C.

**How the definition helps.** In a cartesian closed category, A ∧ (−) is a left adjoint, so it keeps the quotient that defines B ∧ C, and associativity follows. In the category Top of all spaces, the natural map is a homeomorphism only under extra conditions, for example when A and C are locally compact Hausdorff. The cost is that products and quotients must be taken in the convenient category. The nLab page does not name an explicit counterexample in Top.

**nLab:** [smash product](https://ncatlab.org/nlab/show/smash+product). It says: “Associativity fails in general for the category Top of all topological spaces; however, it is satisfied for pointed objects in any convenient category of topological spaces, since such a category is cartesian closed.”

**Sources:**

- [Norman Steenrod, A convenient category of topological spaces, Michigan Mathematical Journal 14 (1967) 133–152](https://doi.org/10.1307/mmj/1028999711)

### Three axioms give the properties of topological complexity and its relatives

**Remember:** Prove three axioms once, and every variant inherits all the properties.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55M30 (Lyusternik-Shnirel'man category of a space, topological complexity à la Farber, topological robotics (topological aspects)), 55S40. arXiv math.AT. Level 4: research.

**Definition.** The sectional category of a map is the least number of open sets, minus one, that cover the base with local sections. Topological complexity is the sectional category of the path fibration of a space. The paper defines a lifting category that has these invariants and homotopic distance as special cases, and derives their properties from three simple axioms.

**Problem.** The many properties of sectional category, topological complexity and homotopic distance follow from three basic axioms. So they hold for every variant that satisfies the axioms: pointed, fibrewise, equivariant or algebraic.

**How the definition helps.** A property proved from the axioms holds for every variant at once, without further topology. The work moves into checking the three axioms for each variant (our own).

**Paper or page:** [Axiomatic Sectional category, Topological complexity, and Homotopic distance](https://arxiv.org/abs/2503.06969). It says: “Many of the properties of sectional category, topological complexity and homotopic distance are in fact derived from a small number of basic properties, which, once established, lead to all the others without further recourse to topology.”

**Sources:**

- [Jean-Paul Doeraene, Mohammed El Haouari, Axiomatic Sectional category, Topological complexity, and Homotopic distance, arXiv:2503.06969 (2025)](https://arxiv.org/abs/2503.06969)

### Weaker pseudocycles represent exactly the Borel–Moore homology

**Remember:** Weaken pseudocycles, and they match Borel–Moore homology exactly.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55N10 (Singular homology and cohomology theory), 57R95. arXiv math.AT, math.SG. Level 4: research.

**Definition.** A pseudocycle is a smooth map from a manifold whose limit set at infinity is small. The limit set must have dimension at least two less than the manifold. Borel–Moore homology is homology built from locally finite chains, so it suits noncompact spaces. The paper weakens the conditions on pseudocycles and on their equivalence.

**Problem.** There is a natural isomorphism between equivalence classes of the weaker pseudocycles on a manifold and its Borel–Moore homology.

**How the definition helps.** The weaker conditions let pseudocycles be noncompact, so they match the locally finite chains of Borel–Moore homology (our own reading). Pseudocycles are used in symplectic topology to count curves, so this gives such counts a geometric home on noncompact spaces (our own). The work moves into the construction of the natural isomorphism.

**Paper or page:** [Pseudocycles for Borel-Moore Homology](https://arxiv.org/abs/2209.10036). It says: “We define weaker versions of the standard notions of pseudocycle and pseudocycle equivalence and then describe a natural isomorphism between the set of equivalence classes of these weaker pseudocycles and the Borel-Moore homology.”

**Sources:**

- [Spencer Cattalani, Aleksey Zinger, Pseudocycles for Borel-Moore Homology, arXiv:2209.10036 (2022)](https://arxiv.org/abs/2209.10036)

### Bordism holonomy forces integral periods

**Remember:** On a closed bordism, the holonomy difference vanishes and the integral is an integer.

*True by definition.* MSC 55N20 (Generalized (extraordinary) homology and cohomology theories in algebraic topology), 55N22. arXiv math.AT. Level 4: research.

**Definition.** A bordism joins structured manifolds as boundary pieces of a manifold one dimension higher. In the differential Anderson dual model, a cocycle pairs a closed form with an additive rule assigning values modulo integers to cycles. On each bordism, the rule evaluated on its boundary equals the integral determined by the form and the tangential structure, modulo integers.

**Problem.** On closed manifolds, these integrals give an integer-valued homomorphism on the bordism group for the chosen tangential structure.

**How the definition helps.** The boundary rule forces the integral on a closed manifold to vanish modulo integers because its boundary is empty (our own). Thus the model encodes integrality through boundary values instead of testing every period separately (our own). The Chern–Weil construction makes the integrand a closed form from a connection, so Stokes’ theorem gives bordism invariance (our own).

**Paper or page:** [Differential models for the Anderson dual to bordism theories and invertible QFT's, I](https://arxiv.org/abs/2106.09270). It says: “induces a ℤ-valued homomorphism cw(ω) : Ω∗ᴳ(X, Y) → ℤ.”

**Sources:**

- [Yamashita and Yonekura, Differential models for the Anderson dual to bordism theories and invertible QFT’s, I, Lemma 4.77](https://arxiv.org/abs/2106.09270)

### Circle suspension preserves underlying theory

**Remember:** Reduced circle evaluation shifts down once, and suspension shifts back up.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55N20 (Generalized (extraordinary) homology and cohomology theories in algebraic topology). arXiv math.AT. Level 4: research.

**Definition.** For a sheaf of spectra F on manifolds, reduced circle evaluation takes data on S¹ × M together with a trivialization on the basepoint slice. Geometric suspension shifts this reduced spectrum up by one degree.

**Problem.** Geometric suspension preserves the underlying cohomology theory of a differential refinement, obtained by forcing homotopic maps to act alike.

**How the definition helps.** Removing the basepoint contribution leaves a loop in the underlying theory, and the degree shift cancels that loop (our own). Bunke, Nikolaus and Völkl prove that taking the invariant approximation commutes with reduced circle evaluation (our own).

**nLab:** [fiber integration in differential cohomology](https://ncatlab.org/nlab/show/fiber+integration+in+differential+cohomology). It says: “for integration over circle fibers in (Bunke-Nikolaus-Völkl 13, section 4.5).”

**Sources:**

- [Bunke, Nikolaus and Völkl, Differential cohomology theories as sheaves of spectra](https://math.mit.edu/juvitop/pastseminars/notes_2019_Fall/BNV.pdf)

### Cofiber curvature gives homotopy formulas

**Remember:** The difference of endpoint restrictions passes through curvature and lands in deformations.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55N20 (Generalized (extraordinary) homology and cohomology theories in algebraic topology). arXiv math.AT. Level 4: research.

**Definition.** A smooth spectrum assigns spectra to manifolds with gluing on open covers. Define curvature data by quotienting out the constant sheaf built from the value at a point, keeping homotopy information. Deformations form the fiber over zero of the map to the approximation that makes homotopic maps act alike.

**Problem.** For data on M × \[0,1\], the difference of endpoint restrictions factors naturally through curvature data on the cylinder and then through deformations on M.

**How the definition helps.** The endpoints agree up to homotopy on the constant part, so their difference factors through curvature (our own). They also agree after passage to the invariant approximation, so the result lifts to deformations (our own). Bunke, Nikolaus and Völkl construct compatible homotopies for these two steps in Theorem 3.2 (our own).

**nLab:** [smooth spectrum](https://ncatlab.org/nlab/show/smooth+spectrum). It says: “every smooth spectrum sits in a hexagonal differential cohomology diagram”

**Sources:**

- [Bunke, Nikolaus and Völkl, Differential cohomology theories as sheaves of spectra](https://math.mit.edu/juvitop/pastseminars/notes_2019_Fall/BNV.pdf)

### Curvature and topology reconstruct smooth spectra

**Remember:** A smooth spectrum glues its curvature data to its underlying topology.

*Makes the theorem clean to state or prove.* MSC 55N20 (Generalized (extraordinary) homology and cohomology theories in algebraic topology). arXiv math.AT. Level 4: research.

**Definition.** A smooth spectrum assigns spectra to manifolds and allows compatible local data to glue. Its flat part is the constant sheaf built from its value at a point. Its curvature target is the cofiber, the quotient by that flat part that keeps homotopy information.

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

**Remember:** Matching determines the image, and paths account for the kernel one degree lower.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55N20 (Generalized (extraordinary) homology and cohomology theories in algebraic topology). arXiv math.AT. Level 4: research.

**Definition.** Take a connective spectrum E with finitely generated homotopy groups and only even homotopy groups over ℚ. Here connective means its negative homotopy groups vanish. Its weight-p Hodge pullback matches E-classes after weighted complexification with forms of holomorphic degree at least p+j for each coefficient degree 2j.

**Problem.** On a compact Kähler manifold, degree-2p Hodge-filtered classes map onto precisely the E-classes whose complex images belong to this filtration. The kernel is degree-(2p−1) complexified E-cohomology modulo the sum of the filtered subgroup and the image of E-cohomology.

**How the definition helps.** The matching condition gives the image, while the freedom to choose a matching path gives the kernel one degree lower (our own). The pullback exact sequence computes this quotient (our own). Hodge decomposition for compact Kähler manifolds identifies filtered cohomology with a subgroup of complex cohomology (our own).

**nLab:** [Hodge-filtered differential cohomology](https://ncatlab.org/nlab/show/Hodge-filtered+differential+cohomology). It says: “the Hodge-filtered variant pairs instead with the Hodge filtered E• ⊗ ℂ-valued Dolbeault complexes”

**Sources:**

- [Hopkins and Quick, Hodge filtered complex bordism, §4](https://doi.org/10.1112/jtopol/jtu021)

### Hodge pullbacks recover Deligne cohomology

**Remember:** Quotienting out the retained forms leaves the Deligne complex.

*True by definition.* MSC 55N20 (Generalized (extraordinary) homology and cohomology theories in algebraic topology). arXiv math.AT. Level 4: research.

**Definition.** On a complex manifold, the weight-p Hodge pullback matches the lattice (2πi)ᵖℤ with holomorphic forms of degrees at least p. It compares both inside the full holomorphic form complex and keeps the matching homotopies.

**Problem.** For positive integers p, this pullback computes analytic Deligne cohomology in every degree. Its usual defining complex starts with the lattice and continues through holomorphic forms of degrees zero to p−1.

**How the definition helps.** Taking the quotient by the retained forms leaves exactly the degrees below p (our own). The pullback is then the homotopy fiber of the map from the lattice to that quotient, giving the usual Deligne complex (our own). The holomorphic de Rham theorem identifies the full form complex with complex coefficients (our own).

**nLab:** [Hodge-filtered differential cohomology](https://ncatlab.org/nlab/show/Hodge-filtered+differential+cohomology). It says: “reproduces the Deligne complex in its original form”

**Wikipedia:** [Deligne cohomology](https://en.wikipedia.org/wiki/Deligne_cohomology). It says: “An alternative definition of this complex is given as the homotopy limit”

**Sources:**

- [Hopkins and Quick, Hodge filtered complex bordism, §4](https://doi.org/10.1112/jtopol/jtu021)

### In a cohesive ∞-topos, every differential cohomology theory has the hexagon

**Remember:** Cohesion builds the hexagon in for you.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55N20 (Generalized (extraordinary) homology and cohomology theories in algebraic topology), 18N60, 53C08. arXiv math.AT, math.CT. Level 4: research.

**Definition.** Differential cohomology combines a topological cohomology class with differential-form data, such as the curvature of a connection. Here it is defined as the intrinsic cohomology of stable homotopy types in a cohesive (∞,1)-topos, such as sheaves of spectra on smooth manifolds. The shape and flat modalities of cohesion give the maps to the topological classes and to the flat classes.

**Problem.** Every stable homotopy type in a cohesive ∞-topos sits in a differential cohomology hexagon (Bunke, Nikolaus and Völkl). The hexagon is a diagram of two fibre sequences that link curvature, characteristic class, flat classes and forms.

**How the definition helps.** With this definition, the hexagon is one general theorem and not a separate fact for each theory. Simons and Sullivan first found it case by case, for ordinary differential cohomology and differential K-theory. They also showed that, for ordinary differential cohomology, the exact sequences determine the theory up to unique isomorphism. The content is in these theorems; the definition makes them uniform.

**nLab:** [differential cohomology](https://ncatlab.org/nlab/show/differential+cohomology), [ordinary differential cohomology](https://ncatlab.org/nlab/show/ordinary+differential+cohomology). It says: “It is therefore natural to define differential cohomology to be the intrinsic cohomology of cohesive (∞,1)-toposes.”

**Sources:**

- [Ulrich Bunke, Thomas Nikolaus, Michael Völkl, Differential cohomology theories as sheaves of spectra, J. Homotopy Relat. Struct. 11 (2016) 1–66, arXiv:1311.3188](https://arxiv.org/abs/1311.3188)
- [James Simons, Dennis Sullivan, Axiomatic Characterization of Ordinary Differential Cohomology, J. Topology 1 (2008) 45–56, arXiv:math/0701077](https://arxiv.org/abs/math/0701077)
- [M. J. Hopkins, I. M. Singer, Quadratic functions in geometry, topology, and M-theory, J. Differential Geom. 70 (2005) 329–452, arXiv:math/0211216](https://arxiv.org/abs/math/0211216)

### Looping lowers both filtration indices

**Remember:** Looping lowers the cohomology degree and the allowed simplex degree together.

*Makes the theorem clean to state or prove.* MSC 55N20 (Generalized (extraordinary) homology and cohomology theories in algebraic topology). arXiv math.AT. Level 4: research.

**Definition.** A differential function complex describes families of cocycles with a simplex as parameter space. Filtration s allows a curvature form to use at most s directions along the simplex. Take compatible real cocycles on an Ω-spectrum, a sequence of spaces in which each space represents based loops in the next.

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

**Definition.** A sheaf of spectra assigns spectra to manifolds with gluing on open covers. It is pure if its value at a point is zero, and its invariant approximation forces homotopic maps to act alike. A homotopy pullback matches two inputs over a common target and remembers the matching paths.

**Problem.** The homotopy pullback of a pure sheaf P and a constant sheaf over the invariant approximation of P defines a differential theory. Its curvature data recover P.

**How the definition helps.** Removing the constant part preserves this pullback, kills both invariant entries and leaves the pure input P intact (our own). Proposition 3.5 identifies the resulting quotient with the curvature data (our own). If P is nonzero and constant, matching it against zero instead gives zero curvature data (our own).

**nLab:** [differential cohomology diagram](https://ncatlab.org/nlab/show/differential+cohomology+diagram). It says: “♭-anti-modal types are called "pure”

**Sources:**

- [Bunke, Nikolaus and Völkl, Differential cohomology theories as sheaves of spectra](https://math.mit.edu/juvitop/pastseminars/notes_2019_Fall/BNV.pdf)

### Smooth spectra give Mayer–Vietoris sequences

**Remember:** Glue the spectra first, then take homotopy groups.

*True by definition.* MSC 55N20 (Generalized (extraordinary) homology and cohomology theories in algebraic topology), 55N30. arXiv math.AT. Level 4: research.

**Definition.** A smooth spectrum assigns each manifold a spectrum, an object representing groups in successive degrees. Its sheaf condition reconstructs global data from local data together with homotopies matching them on overlaps.

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

**Remember:** When a cycle bounds, its boundary current already has a primitive.

*True by definition. Confidence: medium.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology), 57R77. arXiv math.AT, math.DG. Level 4: research.

**Definition.** In smooth complex cobordism, a cycle map carries a connection on its stable complex normal bundle. Pushing its characteristic form forward gives a current T, a form with distribution coefficients. A corrected cycle includes a current α such that its curvature T − dα is smooth.

**Problem.** Curvature depends only on the smooth complex cobordism class of a corrected cycle.

**How the definition helps.** The geometric boundary and its correcting current contribute opposite terms to curvature (our own). A cycle map alone gives a current that can be singular (our own). Stokes’ theorem identifies the boundary current with the derivative of the bordism current (our own).

**nLab:** [differential cobordism cohomology](https://ncatlab.org/nlab/show/differential+cobordism+cohomology). It says: “A model for a multiplicative differential refinement of complex cobordism cohomology theory, the theory represented by the Thom spectrum MU:”

**Sources:**

- [Bunke, Schick, Schröder, and Wiethaup, Landweber exact formal group laws and smooth cohomology theories (2009)](https://doi.org/10.2140/agt.2009.9.1751)

### Bordism pushforward uses pullback cycles

**Remember:** Send a character forward by pulling its test cycles back.

*Makes the theorem clean to state or prove.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology). arXiv math.AT, math.DG. Level 4: research.

**Definition.** A bordism character assigns values modulo integers to closed manifolds mapped into a space. Across a bordism, the change equals the integral of its curvature with the prescribed characteristic forms. Pushing a character forward evaluates it on inverse images of test manifolds and integrates its curvature along the fibers with those weights.

**Problem.** For a proper submersion with compatible geometric orientation, this construction lifts the topological pushforward on the Anderson dual of bordism. This dual theory pairs cohomology classes with bordism cycles.

**How the definition helps.** The inverse image of a test manifold is the same manifold after forgetting the connections (our own). The proof checks the boundary rule and identifies this geometric operation with the topological pushforward (our own).

**Paper or page:** [Differential models for the Anderson dual to bordism theories and invertible QFT's, I](https://arxiv.org/abs/2106.09270v3). It says: “refines the topological pushforward map”

**Sources:**

- [Mayuko Yamashita and Kazuya Yonekura, Differential models for the Anderson dual to bordism theories and invertible QFT's, I](https://arxiv.org/abs/2106.09270v3)

### Bott orientations give holomorphic pushforwards

**Remember:** The holomorphic normal data supply the orientation without a choice.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology), 57R77. arXiv math.AT, math.DG. Level 4: research.

**Definition.** For a holomorphic map, its virtual normal bundle is the pulled-back target tangent bundle minus the source tangent bundle. Its Bott orientation uses connections whose antiholomorphic parts give the prescribed holomorphic structures. The orientation identifies choices that differ by the allowed filtered and exact form corrections.

**Problem.** A proper holomorphic map between complex manifolds canonically pushes forward Hodge-filtered complex cobordism classes. If d is target dimension minus source dimension over ℂ, the degree increases by 2d and the filtration index by d.

**How the definition helps.** The holomorphic bundles supply the orientation required for the pushforward (our own). The proof shows that changing compatible connections preserves the orientation and uses distribution-valued forms to treat embeddings as well as submersions (our own).

**nLab:** [differential cobordism cohomology](https://ncatlab.org/nlab/show/differential+cobordism+cohomology). It says: “On Umkehr maps in this context:”

**Sources:**

- [Knut Bjarte Haus and Gereon Quick, Geometric pushforward in Hodge filtered complex cobordism and secondary invariants (2024)](https://gereonq.folk.ntnu.no/GeometricAJ_Documenta.pdf)

### Eta invariants fit one anomaly character

**Remember:** The eta phase and its local index form belong to one class.

*Makes the theorem clean to state or prove.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology), 81T50. arXiv hep-th, math-ph. Level 4: research.

**Definition.** A differential spin-c bordism character pairs a curvature form with a phase on closed manifolds carrying spin-c geometry, the structure defining their complex Dirac operators. Across a bordism, a manifold joining two such backgrounds, the phase change equals the curvature integral modulo integers.

**Problem.** For a Hermitian bundle with unitary connection, the reduced eta phase and its local index form represent the spin-c index image in differential Anderson duality.

**How the definition helps.** The character lets one specify that image by giving its form and its values on closed backgrounds. The form is the degree 2k part of the Chern character times the Todd form, two polynomials in the bundle and tangent curvatures. The phase on a (2k−1)-manifold measures the twisted Dirac operator’s spectral asymmetry, including half its kernel dimension, modulo integers. In our own explanation, the boundary index theorem gives compatibility, while Proposition 3.52 identifies the resulting class.

**Paper or page:** [Differential models for the Anderson dual to bordism theories and invertible QFT's, II](https://arxiv.org/abs/2110.14828v2). It says: “((\\mathrm{Ch}(\\nabla ^W)\\otimes \\mathrm{Todd})\|<sub>2k</sub>, \\bar{\\eta }<sub>\\nabla ^W</sub>)= \\Phi \_{\\mathrm{ABS}}(\[W, h<sup>E</sup>, \\nabla ^E, 0\]\\otimes \\gamma \_K).”

**Sources:**

- [Mayuko Yamashita, Differential models for the Anderson dual to bordism theories and invertible QFTs, II](https://arxiv.org/abs/2110.14828v2)

### Eta invariants realize spinᶜ orientations

**Remember:** A Dirac spectral invariant supplies the evaluation part of the orientation.

*Makes the theorem clean to state or prove.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology), 57R15, 58J20. arXiv math.AT, math.DG. Level 4: research.

**Definition.** A spinᶜ structure lifts oriented frames to a group combining spin rotations and circle phases. In degree 2k, a differential bordism character assigns values modulo integers to closed spinᶜ manifolds of dimension 2k−1 mapped into the base. On a boundary it integrates a curvature form using the spinᶜ connection.

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

**Definition.** A bundle gerbe describes a twist by local line bundles and rules for multiplying them on overlaps. A twisted spinᶜ cycle uses local spinor bundles that glue according to these rules. Their endomorphisms carry the prescribed tangent Clifford action, which encodes the metric, with its connection.

**Problem.** A connection-preserving stable isomorphism of gerbes gives an isomorphism between their differential spinᶜ bordism groups. It preserves the maps relating cycles to forms and underlying bordism classes.

**How the definition helps.** The line bundle describing the change of twist acts directly on the local spinors (our own). Tensoring with its inverse changes the twist while preserving endomorphisms. Tensoring back reverses the operation. The proof checks that the new local bundles glue and their characteristic forms agree.

**Paper or page:** [Differential Models for Anderson Dual to Twisted Spinᶜ-Bordism and Twisted Anomaly Map](https://arxiv.org/abs/2510.27286v1). It says: “If (K, ∇ᴷ) is a differential stable isomorphism of bundle gerbes”

**Sources:**

- [Fei Han and Yuanchu Li, Differential Models for Anderson Dual to Twisted Spinᶜ-Bordism and Twisted Anomaly Map](https://arxiv.org/abs/2510.27286v1)
- [Differential Models for Anderson Dual to Twisted Spinᶜ-Bordism and Twisted Anomaly Map, Proposition 4.7](https://bpb-us-w2.wpmucdn.com/blog.nus.edu.sg/dist/4/12585/files/2025/11/2510.27286v1.pdf)

### Hodge cobordism gives Abel–Jacobi invariants

**Remember:** A vanished topological class can still leave a comparison class.

*Makes the theorem clean to state or prove.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology), 14C30. arXiv math.AT, math.DG. Level 4: research.

**Definition.** Hodge-filtered complex cobordism records a topological cobordism class, a differential form and a comparison between their complex cohomology classes. In coefficient degree 2j, filtration p requires at least p + j holomorphic differentials in each term of the form.

**Problem.** On a smooth projective complex variety, a codimension-p algebraic cobordism class that vanishes in topological complex cobordism has an Abel–Jacobi invariant. Its target is complexified cobordism in degree 2p−1 modulo the integral image and the shifted filtration p.

**How the definition helps.** The comparison retains a class in the quotient even when the topological class vanishes (our own). The proof constructs the filtered cycle map from algebraic cobordism and identifies its topologically trivial values with elements of this quotient (our own).

**nLab:** [Center for Quantum and Topological Systems](https://ncatlab.org/nlab/show/Center+for+Quantum+and+Topological+Systems). It says: “This allows us to give a concrete description of an Abel-Jacobi type secondary invariant for topologically trivial cobordism cycles.”

**Sources:**

- [Gereon Quick, An Abel-Jacobi invariant for cobordant cycles (2016)](https://gereonq.folk.ntnu.no/AbelJacobi_Documenta.pdf)
- [Michael J. Hopkins and Gereon Quick, Hodge filtered complex bordism (2015)](https://doi.org/10.1112/jtopol/jtu021)

### Landweber base change preserves differential exactness

**Remember:** Tensor the smooth theory and its structure maps together.

*Makes the theorem clean to state or prove.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology), 57R77. arXiv math.AT, math.DG. Level 4: research.

**Definition.** Let R be a graded algebra over the coefficient ring of complex cobordism. Landweber exactness means that tensoring with R preserves exact sequences of modules carrying the standard cobordism coaction. This coaction records how cobordism operations act.

**Problem.** On compact smooth manifolds, tensoring smooth complex cobordism with R gives a multiplicative differential extension of the corresponding cohomology theory when R is Landweber exact.

**How the definition helps.** One change of coefficients transports both geometric classes and their differential forms (our own). The proof uses Landweber exactness on the underlying cobordism groups to preserve the differential extension sequence (our own).

**nLab:** [differential cobordism cohomology](https://ncatlab.org/nlab/show/differential+cobordism+cohomology). It says: “By tensoring with a Landweber exact ring, this induces various other differential cohomology theories, such as differential elliptic cohomology.”

**Sources:**

- [Bunke, Schick, Schröder, and Wiethaup, Landweber exact formal group laws and smooth cohomology theories (2009)](https://doi.org/10.2140/agt.2009.9.1751)

### Landweber exact vₙ-periodic theories all have the Bousfield class of E(n)

**Remember:** Only the height decides which spectra a Landweber exact theory kills.

*Makes the theorem clean to state or prove.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology), 55P60. arXiv math.AT. Level 4: research.

**Definition.** A Landweber exact theory E is vₙ-periodic if E\*/Iₙ is nonzero and vₙ is invertible in E\*/Iₙ, where Iₙ = (p, v₁, …, vₙ₋₁). So its formal group has height at most n at every point of characteristic p, and height n at some point.

**Problem.** If E is Landweber exact and vₙ-periodic, then E\*X = 0 exactly when K(m)\*X = 0 for all m from 0 to n. So E(n), Morava E-theory Eₙ and similar theories give the same localization Lₙ.

**How the definition helps.** The periodicity condition depends only on the height of the formal group, so the Bousfield class depends only on the height. One no longer checks each theory separately. The work moves to Hovey's comparison of E with the Johnson–Wilson theory E(n) through Landweber's filtration of comodules.

**Paper or page:** [An elementary proof of the chromatic Smith fixed point theorem](https://arxiv.org/abs/2303.02022). It says: “Let E∗ be Landweber exact and vₙ–periodic. A spectrum is E∗–acyclic if and only if it is K(m)∗–acyclic for 0 ≤ m ≤ n.”

**Sources:**

- [M. Hovey, Bousfield localization functors and Hopkins' chromatic splitting conjecture, Contemporary Mathematics 181 (1995) 225–250](https://doi.org/10.1090/conm/181/02036)
- [An elementary proof of the chromatic Smith fixed point theorem, arXiv:2303.02022](https://arxiv.org/abs/2303.02022)

### Morava's change of rings turns chromatic Ext groups into group cohomology

**Remember:** At one height, comodules are just representations of one profinite group.

*Makes the theorem clean to state or prove.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology), 55T25. arXiv math.AT. Level 4: research.

**Definition.** The Morava stabilizer group 𝔾ₕ is the automorphism group of a height h formal group over the algebraic closure of 𝔽ₚ, extended by Galois. A BP\*BP-comodule M is Iₕ-nilpotent if every element is killed by a power of the ideal Iₕ = (p, v₁, …, vₕ₋₁).

**Problem.** Let M be an Iₕ-nilpotent comodule. Then the Ext groups over BP\*BP of BP\* with coefficients in vₕ⁻¹M are the continuous cohomology of 𝔾ₕ with coefficients in Eₕ\* ⊗ M.

**How the definition helps.** The stabilizer group makes the statement possible, because all height h formal groups over the algebraic closure of 𝔽ₚ are isomorphic. So the height h part of the moduli stack of formal groups is, roughly, the classifying stack of 𝔾ₕ (our own summary). Comodules supported there are continuous 𝔾ₕ-modules, and Ext becomes group cohomology. The work moves to Lazard's classification by height and to the Lubin–Tate theory Eₕ.

**nLab:** [Morava stabilizer group](https://ncatlab.org/nlab/show/Morava+stabilizer+group). It says: “This is called the Morava stabilizer group.”

**Paper or page:** [Exotic Picard groups and chromatic vanishing via the Gross-Hopkins duality](https://arxiv.org/abs/2203.09455). It says: “Let M be a BP∗BP-comodule that is Iₕ=(p,v₁,⋯,vₕ₋₁)-nilpotent. Then there is a natural isomorphism”

**Sources:**

- [Exotic Picard groups and chromatic vanishing via the Gross-Hopkins duality, arXiv:2203.09455](https://arxiv.org/abs/2203.09455)

### The only invariant prime ideals of BP are the height ideals

**Remember:** Prime ideals that survive every coordinate change are the height loci.

*Makes the theorem clean to state or prove.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology), 14L05. arXiv math.AT. Level 4: research.

**Definition.** An ideal of BP\* is invariant if it is a sub-comodule. That is, every coordinate change of p-typical formal group laws carries it to itself. The height ideal is generated by p and the first few vᵢ.

**Problem.** At a prime p, the invariant prime ideals of BP\* are 0, the ideals (p, v₁, …, vₙ₋₁) for n ≥ 1, and their union. So Landweber's exactness test needs to check only these ideals.

**How the definition helps.** Invariance asks that an ideal not depend on coordinates, and the height ideals qualify because height does not depend on coordinates. So invariant ideals cut out closed pieces of the moduli stack of p-typical formal groups. The theorem says there are no other primes, so the irreducible closed pieces are the loci of height at least n. Landweber's proof, with the generators vᵢ of Hazewinkel or Araki, carries the work.

**Wikipedia:** [Landweber exact functor theorem](https://en.wikipedia.org/wiki/Landweber_exact_functor_theorem). It says: “the only prime ideals of BP∗ which are invariant under coaction of BP∗BP are the Iₙ = (p,v₁,…, vₙ).”

**Sources:**

- [P. S. Landweber, Homological properties of comodules over MU\*(MU) and BP\*(BP), American Journal of Mathematics 98 (1976) 591–610](https://doi.org/10.2307/2373808)

### The p-series makes Morava E-theory of BCₚ free of rank pⁿ

**Remember:** Cohomology of BCₚ is power series modulo the p-series.

*Makes the theorem clean to state or prove.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology), 55R35. arXiv math.AT. Level 4: research.

**Definition.** Let E be a complex oriented theory with formal group law F. The p-series \[p\](y) is the power series for adding y to itself p times with F. Height n means that \[p\](y) is a unit times y to the power pⁿ modulo the maximal ideal.

**Problem.** For Morava E-theory at height n, Eₙ\*(BCₚ) ≅ Eₙ\*\[\[y\]\]/(\[p\](y)) is free of rank pⁿ over Eₙ\*. Similarly K(n)\*(BCₚ) is K(n)\*\[y\] modulo y to the power pⁿ.

**How the definition helps.** Height is the degree pⁿ of the leading term of \[p\](y), and this degree is exactly the rank. The Gysin sequence gives E\*(BCₚ) as E\*\[\[y\]\] modulo \[p\](y), the Euler class of the p-th tensor power of the universal line bundle (our own outline). Weierstrass preparation then writes \[p\](y) as a unit times a monic polynomial of degree pⁿ. The work moves to the Gysin sequence and to Weierstrass preparation over the complete local ring Eₙ\*.

**Paper or page:** [An elementary proof of the chromatic Smith fixed point theorem](https://arxiv.org/abs/2303.02022), [An elementary proof of the chromatic Smith fixed point theorem](https://arxiv.org/abs/2303.02022). It says: “If A is a finite abelian p-group, then Eₙ\*(BA) is a free Eₙ\*–module of rank \|A\|ⁿ”

**Sources:**

- [An elementary proof of the chromatic Smith fixed point theorem, arXiv:2303.02022](https://arxiv.org/abs/2303.02022)

### The universal property of the Lubin–Tate ring makes the stabilizer group act

**Remember:** Universal objects are acted on by every symmetry of what they deform.

*True by definition.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology), 14L05. arXiv math.AT. Level 4: research.

**Definition.** Let f be a formal group of height n over a perfect field k of characteristic p. A deformation of f to a complete local ring A is a formal group over A with an identification of its reduction with f. The Lubin–Tate ring W(k)\[\[u₁, …, uₙ₋₁\]\] carries a universal deformation, which classifies all deformations.

**Problem.** The automorphism group of f acts on the Lubin–Tate ring by ring maps. Through the Landweber exact functor theorem it acts on the homology theory given by Morava E-theory Eₙ.

**How the definition helps.** The universal property turns each symmetry of f into a ring map, so the action needs no formulas. An automorphism g of f sends a deformation (F, ι) to (F, g∘ι), which a unique ring map classifies (our own outline). Uniqueness makes these maps compose, while in explicit coordinates the action is very hard to write down. The work moves to the Lubin–Tate theorem, and an action by E∞ ring maps needs the harder Goerss–Hopkins–Miller theorem.

**nLab:** [Lubin-Tate theory](https://ncatlab.org/nlab/show/Lubin-Tate+theory). It says: “The Lubin-Tate formal group f̄ is the universal deformation of f in that for every infinitesimal thickening A of k, f̄ induces a bijection”

**Sources:**

- [P. G. Goerss, M. J. Hopkins, Moduli spaces of commutative ring spectra, in Structured Ring Spectra, Cambridge University Press (2004)](https://doi.org/10.1017/cbo9780511529955.009)

### Transversality allows correction current pullback

**Remember:** Keep singular directions away from the pullback map’s normal directions.

*Rules out counterexamples. Confidence: medium.* MSC 55N22 (Bordism and cobordism theories and formal group laws in algebraic topology), 57R77, 58A25. arXiv math.AT, math.DG. Level 4: research.

**Definition.** A smooth cobordism cycle includes a map and a correcting current, a differential form with distribution coefficients. Choose the current so its singular directions annihilate the derivative of the cycle map at some point over their base point. These singular directions form its wavefront set.

**Problem.** Every smooth map transverse to the cycle map can pull back the chosen correcting current.

**How the definition helps.** Transversality keeps singular directions away from covectors that annihilate the derivative of the pullback map (our own). The distribution pullback theorem then applies (our own). A step function at its jump illustrates why arbitrary currents lack a canonical restriction (our own). The paper constructs the required representative by changing the current by an exact current.

**nLab:** [differential cobordism cohomology](https://ncatlab.org/nlab/show/differential+cobordism+cohomology). It says: “A model for a multiplicative differential refinement of complex cobordism cohomology theory, the theory represented by the Thom spectrum MU:”

**Sources:**

- [Bunke, Schick, Schröder, and Wiethaup, Landweber exact formal group laws and smooth cohomology theories (2009)](https://doi.org/10.2140/agt.2009.9.1751)

### Ephemeral modules are exactly those at interleaving distance zero

**Remember:** Modules that die instantly are invisible to the interleaving distance.

*True by definition. Confidence: medium.* MSC 55N31 (Persistent homology and applications, topological data analysis), 06B35. arXiv math.AT, math.GN. Level 4: research.

**Definition.** A persistence module over a continuous poset is ephemeral when its map from x to y is zero whenever x is way below y. In a continuous poset, x is way below y when every directed set with a join above y has an element above x. Scott sheaves are sheaves for the Scott topology. Its open sets are the upward-closed sets U such that every directed set whose join lies in U meets U.

**Problem.** Suppose the family of translations that defines the interleaving distance satisfies three conditions from the paper. Then the distance from a module M to the zero module is zero exactly when M is ephemeral. For Scott sheaves, the distance to zero is zero only for the zero sheaf.

**How the definition helps.** An ephemeral module is defined so that every shift kills it, so its interleaving distance to zero is zero almost by definition (our own). The paper shows that the quotient by ephemeral modules is equivalent to the category of Scott sheaves. So on Scott sheaves, the distance to zero detects the zero sheaf, and the work moves into that equivalence.

**Paper or page:** [Ephemeral Modules and Scott Sheaves on a Continuous Poset](https://arxiv.org/abs/2411.16235). It says: “dₐ(M, 0) = 0 if and only if M is ephemeral; dσ(ℱ, 0) = 0 if and only if ℱ = 0”

**Sources:**

- [Manu Harsu, Eero Hyry, Ephemeral Modules and Scott Sheaves on a Continuous Poset, arXiv:2411.16235 (2024)](https://arxiv.org/abs/2411.16235)

### Möbius homology makes the persistence diagram an Euler characteristic

**Remember:** The persistence diagram is the shadow of a homology theory.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55N31 (Persistent homology and applications, topological data analysis), 06A07. arXiv math.AT, math.CO. Level 4: research.

**Definition.** Möbius homology is a homology theory for representations of a finite poset in an abelian category. The persistence diagram of a representation is defined as the Möbius inversion of its dimension function, over a poset of intervals.

**Problem.** The persistence diagram is the Euler characteristic of Möbius homology. So Möbius homology categorifies the persistence diagram.

**How the definition helps.** With the diagram defined by Möbius inversion, it becomes the Euler characteristic of a homology theory and gains homological structure. Over general posets, modules can be indecomposable without being intervals, so the barcode approach fails (our own). The paper also proves a homological version of Rota's Galois connection theorem and uses it to get results on diagrams.

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

**Problem.** With the new cup product, the cohomology groups of a type form a graded commutative ring, and the paper fully formalises the ring axioms in a proof assistant.

**How the definition helps.** The new cup product is easier to compute with, so the ring laws become checkable (our own reading). The abstract says that the new definitions greatly simplify many earlier proofs. Earlier definitions made the proofs of graded commutativity and associativity very long (our own).

**Paper or page:** [Computational Synthetic Cohomology Theory in Homotopy Type Theory](https://arxiv.org/abs/2401.16336). It says: “the new definition of the cup product allows us to give the first complete formalisation of the axioms needed to turn the cohomology groups into a graded commutative ring.”

**Sources:**

- [Axel Ljungström, Anders Mörtberg, Computational Synthetic Cohomology Theory in Homotopy Type Theory, Math. Struct. Comp. Sci. 35 (2025) e16, arXiv:2401.16336](https://doi.org/10.1017/s0960129525000131)

### Grading Bredon cohomology by representations restores equivariant Poincaré duality

**Remember:** A G-manifold sits inside a representation, so grade by representations.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55N91 (Equivariant homology and cohomology in algebraic topology), 55P91. arXiv math.AT. Level 4: research.

**Definition.** An RO(G)-graded cohomology theory on G-spaces has groups Hᵅ(X; A) for every formal difference α of finite-dimensional real representations of G. It loops by representation spheres Sⱽ, the one-point compactifications of representations V, and not only by ordinary spheres.

**Problem.** In RO(G)-graded Bredon cohomology, with coefficients in a Mackey functor, a G-manifold satisfies Poincaré duality, with a dimension shift by an element α of RO(G).

**How the definition helps.** The duality shift for a G-manifold is a representation, not a number, so the theorem needs grading by representations. A G-manifold M embeds in a representation V, usually not a trivial one, and Thom space arguments give the duality. With integer grading, Poincaré duality for G-manifolds fails. A Bredon theory extends to an RO(G)-graded one exactly when its coefficient system extends to a Mackey functor.

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

**Definition.** For a commutative ring spectrum R, the R-dual of an R-module N is the function R-module from N to R. Atiyah duality concerns a closed manifold M: the Spanier–Whitehead dual of M₊ is a desuspension of the Thom spectrum of its normal bundle. An R-orientation of that bundle is a Thom class that gives a Thom isomorphism in R-theory.

**Problem.** If a closed smooth n-manifold M has an R-orientation of its normal bundle, then the R-dual of R ∧ M₊ is R ∧ Σ⁻ⁿM₊. Taking homotopy groups gives Poincaré duality Rᵏ(M) ≅ Rₙ₋ₖ(M).

**How the definition helps.** Atiyah duality and the Thom isomorphism are both equivalences of spectra. Smashing them with R turns them into the stated equivalence of R-modules (our own). Then Rᵏ(M) is π₋ₖ of the R-dual, which is πₙ₋ₖ(R ∧ M₊) = Rₙ₋ₖ(M) (our own). The work is in Atiyah duality and in the Thom isomorphism; the duality formalism only puts them together.

**nLab:** [Thom spectrum](https://ncatlab.org/nlab/show/Thom+spectrum). It says: “In that case Th(N X) -- the Thom spectrum of its stable normal bundle is the corresponding dual object.”

**Paper or page:** [Homotopy theory of modules over a commutative S-algebra: some tools and examples](https://arxiv.org/abs/2003.12003). It says: “Suppose that M is a compact closed smooth n-manifold whose normal bundle admits an orientation in R-cohomology. Then R∧M₊ is a stably Spanier-Whitehead self R-module and D<sub>R</sub>(R∧M₊) ∼ R∧Σ⁻ⁿ(M₊).”

**Sources:**

- [Michael F. Atiyah, Thom complexes, Proceedings of the London Mathematical Society (3) 11 (1961) 291–310](https://doi.org/10.1112/plms/s3-11.1.291)
- [Homotopy theory of modules over a commutative S-algebra: some tools and examples, arXiv:2003.12003](https://arxiv.org/abs/2003.12003)

### Excisive-functor spectra give Mayer–Vietoris sequences on finite pointed spaces

**Remember:** The excision axiom turns a pushout into a pullback before taking homotopy groups.

*True by definition. Confidence: medium.* MSC 55P42 (Stable homotopy theory, spectra), 55N20, 55P65. arXiv math.AT. Level 4: research.

**Definition.** A functor is excisive if it sends pushout squares to pullback squares. It is reduced if it sends the point to the point. One definition of a spectrum is a reduced excisive functor from finite pointed homotopy types to spaces. The classical definition instead uses a sequence of spaces with structure maps.

**Problem.** For a pushout of finite pointed homotopy types, the functor gives a pullback square of values. The associated spectrum-valued functor gives a Mayer–Vietoris long exact sequence of homotopy groups.

**How the definition helps.** The excisive definition directly gives a pullback square at every suspension of the inputs (our own explanation). The suspension square itself gives E(X) ≃ ΩE(ΣX). Thus the values on iterated suspensions of X are the spaces of a spectrum. They assemble the pullbacks into a pullback of spectra. Its long exact homotopy sequence is the Mayer–Vietoris sequence. The work lies in proving that excisive functors and the usual spectra give equivalent categories.

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

**Definition.** An abelian group A is injective when Hom(−, A) turns every exact sequence into an exact sequence. Divisible groups such as ℚ/ℤ are injective. The Brown–Comenetz spectrum I is a spectrum with \[X, I\] ≅ Hom(π₀X, ℚ/ℤ) for every spectrum X.

**Problem.** For an injective group such as ℚ/ℤ, the functor X ↦ Hom(π₀X, ℚ/ℤ) is represented by a spectrum I. Then \[X, ΣⁿI\] ≅ Hom(πₙX, ℚ/ℤ) for every integer n.

**How the definition helps.** Injectivity makes the functor take cofiber sequences to exact sequences, so it is a cohomology theory on spectra (our own). It also takes wedges to products, since π₀ of a wedge is a direct sum (our own). Brown representability for spectra then gives I, and the work sits there (our own). With ℤ in place of ℚ/ℤ, exactness fails on the cofiber sequence Σ⁻¹(S/2) → S → S given by multiplication by 2 (our own).

**nLab:** [Brown-Comenetz duality](https://ncatlab.org/nlab/show/Brown-Comenetz+duality). It says: “Brown-Comenetz 76 introduced the spectrum I\_ℚ/ℤ which represents the cohomology theory that assigns to a spectrum X the algebraic Pontrjagin duals Hom\_ℤ(π₋⋆X, ℚ/ℤ) of its homotopy groups with respect to ℚ/ℤ.”

**Sources:**

- [Edgar H. Brown and Michael Comenetz, Pontrjagin duality for generalized homology and cohomology theories, American Journal of Mathematics 98 (1976) 1–27](https://doi.org/10.2307/2373610)

### New categories of spectra get around Lewis's no-go theorem

**Remember:** Change the point-set model of spectra until smash product is honestly symmetric monoidal.

*Makes the theorem clean to state or prove.* MSC 55P42 (Stable homotopy theory, spectra), 18M05. arXiv math.AT. Level 4: research.

**Definition.** A spectrum is the basic object of stable homotopy theory: a sequence of spaces linked by suspension maps. A symmetric monoidal model category of spectra is a model category whose homotopy category is the stable homotopy category. Its smash product (the tensor product of spectra) must be associative, unital and commutative up to coherent isomorphism already at the point-set level. S-modules, symmetric spectra and orthogonal spectra are examples.

**Problem.** S-modules, symmetric spectra and orthogonal spectra are symmetric monoidal model categories that model the stable homotopy category. In them, A∞ and E∞ ring spectra are just monoids and commutative monoids.

**How the definition helps.** The monoidal structure absorbs the higher coherent homotopies that an A∞ or E∞ operad used to supply. Lewis proved in 1991 that no symmetric monoidal category of spectra can model the stable homotopy category and also meet a few other natural requirements. Each new model drops one of these requirements. The real work is to show that each new category still models the stable homotopy category with a good model structure.

**nLab:** [symmetric smash product of spectra](https://ncatlab.org/nlab/show/symmetric+smash+product+of+spectra), [S-module](https://ncatlab.org/nlab/show/S-module), [symmetric spectrum](https://ncatlab.org/nlab/show/symmetric+spectrum), [orthogonal spectrum](https://ncatlab.org/nlab/show/orthogonal+spectrum). It says: “Moreover, in all of these cases, the monoidal structure on the model category 𝒮 absorbs all the higher coherent homotopies that used to be supplied by the action of an A∞ or E∞ operad.”

**Sources:**

- [L. Gaunce Lewis, Jr., Is there a convenient category of spectra?, Journal of Pure and Applied Algebra 73 (1991) 233–246](https://doi.org/10.1016/0022-4049(91)90030-6)
- [A. Elmendorf, I. Kriz, M. Mandell, J. P. May, Rings, Modules, and Algebras in Stable Homotopy Theory, AMS Mathematical Surveys and Monographs 47 (1997)](https://doi.org/10.1090/surv/047)
- [Mark Hovey, Brooke Shipley, Jeff Smith, Symmetric spectra, J. Amer. Math. Soc. 13 (2000) 149–208, arXiv:math/9801077](https://arxiv.org/abs/math/9801077)

### Pre-excisive functors give a symmetric monoidal smash product almost for free

**Remember:** Index by all finite complexes, not just spheres, and smash products come free.

*True by definition.* MSC 55P42 (Stable homotopy theory, spectra), 18M05. arXiv math.AT. Level 4: research.

**Definition.** A pre-excisive functor is a pointed, topologically enriched functor from finite pointed CW complexes to pointed spaces. Topologically enriched means that the functor is continuous on spaces of maps. The smash product of two such functors is their Day convolution, the product on functors that the smash product of spaces induces. Its unit is the sphere functor 𝕊, the inclusion of finite complexes into all spaces.

**Problem.** Day convolution gives pre-excisive functors a closed symmetric monoidal smash product, with unit the sphere functor 𝕊. Restricting to sequential spectra loses this symmetric monoidal product.

**How the definition helps.** On pre-excisive functors, Day convolution gives the closed symmetric monoidal product almost tautologically. Orthogonal and symmetric spectra lie between pre-excisive functors and sequential spectra: they are still concrete, but they keep the inherited product. The hard part that remains is to give these categories stable model structures that model the stable homotopy category.

**nLab:** [model structure on orthogonal spectra](https://ncatlab.org/nlab/show/model+structure+on+orthogonal+spectra), [Introduction to Stable homotopy theory -- 1-2](https://ncatlab.org/nlab/show/Introduction+to+Stable+homotopy+theory+--+1-2), [symmetric smash product of spectra](https://ncatlab.org/nlab/show/symmetric+smash+product+of+spectra). It says: “We consider an almost tautological construction of a pointed topologically enriched category equipped with a closed symmetric monoidal product: the category of pre-excisive functors.”

**Sources:**

- [M. A. Mandell, J. P. May, S. Schwede, B. Shipley, Model categories of diagram spectra, Proc. London Math. Soc. 82 (2001) 441–512](https://doi.org/10.1112/S0024611501012692)

### Spanier–Whitehead duality turns representability of cohomology into representability of homology

**Remember:** Dualize the input, and a homology theory becomes a cohomology theory.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55P42 (Stable homotopy theory, spectra), 55N20, 55P25. arXiv math.AT. Level 4: research.

**Definition.** For a finite spectrum X, the Spanier–Whitehead dual DX is the function spectrum F(X, S) into the sphere spectrum S. The functor D is a contravariant self-equivalence of finite spectra that takes cofiber sequences to cofiber sequences. A homology theory h on finite spectra can therefore be read as the cohomology theory Y ↦ h₋ₙ(DY).

**Problem.** Every homology theory h on finite CW complexes is represented by a spectrum E: hₙ(X) ≅ πₙ(E ∧ X), naturally in finite X (Adams).

**How the definition helps.** Through D, the functor Y ↦ h₋ₙ(DY) is a cohomology theory on finite spectra, so homology representability becomes cohomology representability (our own). If that theory is \[−, ΣⁿE\], then hₙ(X) ≅ \[DX, Σ⁻ⁿE\] ≅ πₙ(E ∧ X) for finite X (our own). Plain Brown representability needs infinite wedges, which finite spectra lack, so the nLab's short derivation hides a step (our own). The work moves into Adams' variant of Brown's theorem for functors defined only on finite complexes.

**nLab:** [Brown representability theorem](https://ncatlab.org/nlab/show/Brown+representability+theorem). It says: “But by way of Spanier-Whitehead duality it implies at least over finite CW-complexes that dually every additive generalized homology theory E<sub>•</sub> is representable by a spectrum E”

**Sources:**

- [J. Frank Adams, A variant of E. H. Brown's representability theorem, Topology 10 (1971) 185–198](https://doi.org/10.1016/0040-9383(71)90003-6)

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

**Problem.** For the ring of integers R of a number field, THH(R) is the cofiber of an explicit map, and this gives a long exact sequence.

**How the definition helps.** The new definition works in homotopy theory, so it can be fed directly into THH, and the calculation needs no computational techniques. The work moves into the proof that the new notion agrees with classical ramification for rings of integers. Earlier computations of THH of number rings used heavier computational tools (our own).

**Paper or page:** [Ramification and descent in homotopy theory and derived algebraic geometry](https://arxiv.org/abs/2112.14568). It says: “We prove that the definition is equivalent to the classical definition in the case of rings of integers in number fields. The new definition leads directly (without computational techniques) to a calculation of topological Hochschild homology for rings of integers.”

**Sources:**

- [John D. Berman, Ramification and descent in homotopy theory and derived algebraic geometry, arXiv:2112.14568 (2021)](https://arxiv.org/abs/2112.14568)

### Commutative S-algebras make the smash product the coproduct of E∞ rings

**Remember:** For commutative monoids, tensor product is coproduct.

*True by definition.* MSC 55P43 (Spectra with additional structure (\\(E\_\\infty\\), \\(A\_\\infty\\), ring spectra, etc.)), 55P42. arXiv math.AT. Level 4: research.

**Definition.** Elmendorf, Kriz, Mandell and May built S-modules, a category of spectra with a strict smash product. It is associative, commutative and unital up to isomorphism, not only up to homotopy. A commutative S-algebra is a commutative monoid for this smash product, and these model E∞ ring spectra.

**Problem.** Let A and B be commutative S-algebras under a commutative S-algebra R. Then A ∧ B over R is their coproduct in commutative R-algebras. For cofibrant inputs it is also the homotopy pushout of E∞ rings.

**How the definition helps.** In any symmetric monoidal category, the tensor product of two commutative monoids is their coproduct. So the theorem is formal once E∞ rings are commutative monoids. For E∞ ring spectra as operad algebras, the smash product needs extra structure on the operad, and the coproduct is a separate construction (our own). The work went into building S-modules and showing that commutative S-algebras model E∞ ring spectra.

**Wikipedia:** [Highly structured ring spectrum](https://en.wikipedia.org/wiki/Highly_structured_ring_spectrum). It says: “Therefore, is it possible to define A<sub>∞</sub>-ring spectra and E<sub>∞</sub>-ring spectra as (commutative) monoids in the category of S-modules, so called (commutative) S-algebras.”

**Sources:**

- [A. D. Elmendorf, I. Kriz, M. A. Mandell and J. P. May, Rings, Modules, and Algebras in Stable Homotopy Theory, Mathematical Surveys and Monographs 47, American Mathematical Society (1997)](https://doi.org/10.1090/surv/047)

### Defining K-theory of ring spectra through perfect modules makes it Morita invariant

**Remember:** K-theory sees only the module category, so Morita equivalent rings agree.

*True by definition.* MSC 55P43 (Spectra with additional structure (\\(E\_\\infty\\), \\(A\_\\infty\\), ring spectra, etc.)), 19D10. arXiv math.KT, math.AT. Level 4: research.

**Definition.** A perfect R-module is a compact object of the stable ∞-category Mod(R) of R-module spectra. The algebraic K-theory K(R) of a ring spectrum R is the K-theory of the ∞-category Perf(R) of perfect R-modules. Older definitions use Waldhausen's construction on cell modules, or the plus construction on BGL(R).

**Problem.** If ring spectra R and R′ have equivalent module ∞-categories, then K(R) ≃ K(R′). For example, K(R) ≃ K(End(P)) for each compact generator P of Mod(R), such as Rⁿ with its matrix ring.

**How the definition helps.** An equivalence of module ∞-categories preserves compact objects, so it restricts to Perf(R) ≃ Perf(R′), and K-theory is a functor of that category. The work went into showing that this definition agrees with Waldhausen's definition and with the plus construction for connective ring spectra. The example uses Schwede–Shipley Morita theory, which gives Mod(R) ≃ Mod(End(P)).

**Wikipedia:** [Module spectrum](https://en.wikipedia.org/wiki/Module_spectrum). It says: “Lurie defines the K-theory of a ring spectrum R to be the K-theory of the ∞-category of perfect modules over R (a perfect module being defined as a compact object in the ∞-category of module spectra).”

**Sources:**

- [Andrew J. Blumberg, David Gepner and Gonçalo Tabuada, A universal characterization of higher algebraic K-theory, Geometry &amp; Topology 17 (2013) 733–838](https://doi.org/10.2140/gt.2013.17.733)
- [Stefan Schwede and Brooke Shipley, Stable model categories are categories of modules, Topology 42 (2003) 103–153](https://doi.org/10.1016/S0040-9383(02)00006-X)

### Defining orientations as trivializations makes universal orientations into ring maps

**Remember:** Orient at the level of spectra, and orientations become E∞ maps MG → R.

*True by definition. Confidence: medium.* MSC 55P43 (Spectra with additional structure (\\(E\_\\infty\\), \\(A\_\\infty\\), ring spectra, etc.)), 55N22, 55R25. arXiv math.AT. Level 4: research.

**Definition.** For an E∞ ring R, gl₁(R) is the spectrum of units of R, and maps into Σgl₁(R) classify bundles of rank-one free R-modules. Suppose BG → BGL₁(S) is the infinite loop space of a map of spectra bg → Σgl₁(S). An E∞ R-orientation is a null-homotopy of the composite bg → Σgl₁(S) → Σgl₁(R). The Thom spectrum MG is the colimit of the functor from BG to spectra that this map defines.

**Problem.** Let G → O be a map of groups that deloops to a map of spectra, as for SO, Spin, String and U. Then E∞ R-orientations correspond to E∞ ring maps from the Thom spectrum MG to R.

**How the definition helps.** Defined as null-homotopies of maps of spectra, orientations turn directly into E∞ ring maps out of MG, by the adjunction between units and group rings. The usual definition asks for a Thom class, which gives only a map of R-modules MG → R, or a ring map up to homotopy. The work went into the theorem of Ando, Blumberg, Gepner, Hopkins and Rezk that gl₁ is right adjoint to Σ∞₊Ω∞ on E∞ rings. A space-level null-homotopy is weaker: not every complex orientation of KU comes from an E∞ map MU → KU (our own).

**nLab:** [orientation in generalized cohomology](https://ncatlab.org/nlab/show/orientation+in+generalized+cohomology). It says: “If here G → GL₁(𝕊) is the Ω<sup>∞</sup>-component of a map of spectra then this σ is a homomorphism of E-∞ rings and in this case there is a bijection between universal orientations and such E∞-ring homomorphisms”

**Sources:**

- [Matthew Ando, Andrew J. Blumberg, David Gepner, Michael J. Hopkins and Charles Rezk, Units of ring spectra, orientations, and Thom spectra via rigid infinite loop space theory, Journal of Topology 7 (2014) 1077–1117](https://doi.org/10.1112/jtopol/jtu009)
- [Matthew Ando, Andrew J. Blumberg, David Gepner, Michael J. Hopkins and Charles Rezk, An ∞-categorical approach to R-line bundles, R-module Thom spectra, and twisted R-homology, Journal of Topology 7 (2014) 869–893](https://doi.org/10.1112/jtopol/jtt035)

### E₂ Thom spectra make H𝔽ₚ the free E₂ ring with p zero

**Remember:** Kill p as gently as possible, and you get H𝔽ₚ.

*Makes the theorem clean to state or prove.* MSC 55P43 (Spectra with additional structure (\\(E\_\\infty\\), \\(A\_\\infty\\), ring spectra, etc.)), 55R25. arXiv math.AT. Level 4: research.

**Definition.** An E₂ Thom spectrum is the Thom spectrum of a double loop map Ω²X → BGL₁(R), where GL₁(R) is the units of R. Over the p-complete sphere, the unit 1 − p gives a map S¹ → BGL₁. Its extension to a double loop map Ω²S³ → BGL₁ has an E₂ Thom spectrum. The source works over spherical Witt vectors, which for 𝔽ₚ are the p-complete sphere.

**Problem.** This E₂ Thom spectrum is the Eilenberg–MacLane spectrum H𝔽ₚ (Hopkins–Mahowald). Equivalently, H𝔽ₚ is the free E₂ ring over the p-complete sphere on a null-homotopy of p.

**How the definition helps.** Ω²S³ is the free double loop space on a circle, so E₂ maps out of this Thom spectrum are null-homotopies of p. The work went into proving that this Thom spectrum is H𝔽ₚ; Mahowald did p = 2 via the homology of Ω²S³ (our own summary). So each E₂ ring with p = 0 in π₀ is an H𝔽ₚ-module, hence a wedge of shifted copies of H𝔽ₚ (our own). For MO this recovers Thom's theorem (our own).

**Paper or page:** [Perfectoid rings as Thom spectra](https://arxiv.org/abs/2003.08697v2), [Perfectoid rings as Thom spectra](https://arxiv.org/abs/2003.08697v2). It says: “For all 𝔼₂-W⁺(k)-algebras A, the mapping space Map\_{Alg<sub>W⁺(k)</sub><sup>𝔼₂</sup>}(M f<sub>k,pu</sub>, A) could be naturally identified with the space of null-homotopies of the composite map W⁺(k) →m<sub>pu</sub> W⁺(k) →η A”

**Sources:**

- [Mark Mahowald, Ring spectra which are Thom complexes, Duke Mathematical Journal 46 (1979) 549–559](https://doi.org/10.1215/S0012-7094-79-04628-3)

### E∞ cochains determine finite type nilpotent spaces up to weak equivalence

**Remember:** Remember the higher homotopies of the cup product, and you remember the space.

*Makes the theorem clean to state or prove.* MSC 55P43 (Spectra with additional structure (\\(E\_\\infty\\), \\(A\_\\infty\\), ring spectra, etc.)), 55P15. arXiv math.AT. Level 4: research.

**Definition.** An E∞ algebra is a cochain complex whose product is commutative up to coherent higher homotopies. The singular cochains C∗(X; ℤ) form an E∞ algebra, with the cup-i products as higher homotopies. Over ℤ or 𝔽ₚ no natural cochain algebra is strictly commutative, because Steenrod operations obstruct it.

**Problem.** Finite type nilpotent spaces X and Y are weakly equivalent if and only if their E∞ cochain algebras over ℤ are quasi-isomorphic (Mandell).

**How the definition helps.** The E∞ structure keeps the Steenrod operations, which cohomology rings forget, so a complete integral invariant becomes possible to state. For example, ΣℂP² and S³ ∨ S⁵ have isomorphic cohomology rings but differ by Sq² (our own). The work went into Mandell's earlier p-adic theorem for E∞ algebras over the algebraic closure of 𝔽ₚ. An arithmetic square then glues the primes and the rational case (our own summary).

**nLab:** [E-infinity algebra](https://ncatlab.org/nlab/show/E-infinity+algebra). It says: “Finite type nilpotent spaces X and Y are weakly homotopy equivalent if and only if the E∞-algebras C<sup>\*</sup>(X,ℤ) and C<sup>\*</sup>(Y,ℤ) are quasi-isomorphic.”

**Sources:**

- [Michael A. Mandell, Cochains and homotopy type, Publications Mathématiques de l'IHÉS 103 (2006) 213–246](https://doi.org/10.1007/s10240-006-0037-6)

### E∞-ring spectra let elliptic cohomology theories glue into tmf

**Remember:** Cohomology theories cannot be glued, but the spectra behind them can.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55P43 (Spectra with additional structure (\\(E\_\\infty\\), \\(A\_\\infty\\), ring spectra, etc.)), 55N34, 18N70. arXiv math.AT, math.AG. Level 4: research.

**Definition.** A spectrum is the object that represents a cohomology theory. An E∞-ring spectrum is a spectrum with a multiplication that is commutative up to all higher coherent homotopies. E∞-ring spectra form an (∞,1)-category with good limits. The category of multiplicative cohomology theories does not have such limits.

**Problem.** The presheaf of elliptic cohomology theories on flat elliptic curves Spec R → M₁,₁ lifts to a sheaf of E∞-ring spectra, unique up to homotopy (Goerss–Hopkins–Miller). Its global sections give one universal theory, topological modular forms.

**How the definition helps.** E∞-ring spectra live in a setting with limits, so gluing makes sense there. Cohomology theories, as functors, lack these limits, so "a sheaf of cohomology theories" has no meaning. The same construction over the Deligne–Mumford compactification gives Tmf, and tmf is its connective cover. The definition only makes this statable; the hard part is the Goerss–Hopkins–Miller theorem.

**nLab:** [A Survey of Elliptic Cohomology - E-infinity rings and derived schemes](https://ncatlab.org/nlab/show/A+Survey+of+Elliptic+Cohomology+-+E-infinity+rings+and+derived+schemes). It says: “To get a single cohomology theory from that we want to take global sections, but there is no good way to say what a global section of a cohomology-theoy valued functor would be.”

**Sources:**

- [Paul G. Goerss, Topological modular forms (after Hopkins, Miller, and Lurie), Séminaire Bourbaki, 2009, arXiv:0910.5130](https://arxiv.org/abs/0910.5130)

### Faithful Galois extensions of ring spectra survive every base change

**Remember:** Faithful Galois extensions survive any base change; others can collapse.

*Rules out counterexamples. Confidence: medium.* MSC 55P43 (Spectra with additional structure (\\(E\_\\infty\\), \\(A\_\\infty\\), ring spectra, etc.)). arXiv math.AT. Level 4: research.

**Definition.** A G-Galois extension A → B of E∞ rings is faithful when an A-module M is zero whenever B ∧ M over A is zero. Base change along a map A → A′ replaces B by A′ ∧ B over A, with the same G-action.

**Problem.** Let A → B be a faithful G-Galois extension and A → A′ any map of E∞ rings. Then A′ → A′ ∧ B over A is again a faithful G-Galois extension.

**How the definition helps.** The product condition survives any base change, and faithfulness lets the fixed-point condition, a limit, commute with base change (our own). Without faithfulness this fails for F(BG₊, k) → k, the map from cochains on BG, for a p-group G ≠ 1 in characteristic p. Inverting the augmentation ideal I of F(BG₊, k) gives the Tate ring, by the source, and this kills k, on which I acts as zero. So base change to the Tate ring gives the map from the nonzero Tate ring to 0, which is not Galois (our own).

**Paper or page:** [Endotrivial modules for cyclic p-groups and generalized quaternion groups via Galois descent](https://arxiv.org/abs/2107.06308v2), [Endotrivial modules for cyclic p-groups and generalized quaternion groups via Galois descent](https://arxiv.org/abs/2107.06308v2). It says: “G-Galois extensions are stable under dualizable base-change. Faithful G-Galois extensions are stable under arbitrary base-change.”

**Sources:**

- [John Rognes, Galois extensions of structured ring spectra. Stably dualizable groups, Memoirs of the American Mathematical Society 192 (2008), no. 898](https://doi.org/10.1090/memo/0898)

### Faithfulness makes Galois descent hold and excludes cochains on BG

**Remember:** Faithful means B sees every A-module, so descent works.

*Rules out counterexamples. Confidence: medium.* MSC 55P43 (Spectra with additional structure (\\(E\_\\infty\\), \\(A\_\\infty\\), ring spectra, etc.)), 20C20. arXiv math.AT, math.RT. Level 4: research.

**Definition.** A G-Galois extension A → B of E∞ rings is faithful when it detects zero modules. That is, an A-module M is zero whenever B ∧ M over A is zero. The source proves that this holds exactly when the Tate construction of G acting on B is zero.

**Problem.** For a faithful G-Galois extension A → B, A-modules are the same as B-modules with a homotopy-coherent semilinear G-action. In symbols, Mod(A) is the homotopy fixed points of G acting on Mod(B).

**How the definition helps.** Descent forces base change to B to detect zero modules, and faithfulness is exactly that condition (our own). Without it the theorem fails for F(BG₊, k) → k, the map from cochains on BG, for a p-group G ≠ 1 in characteristic p. This map is G-Galois, but the Tate construction of G on k is nonzero, so it is not faithful (our own). The work went into Mathew's theorem that faithful Galois extensions are descendable: A lies in the thick tensor ideal that B generates.

**Paper or page:** [Endotrivial modules for cyclic p-groups and generalized quaternion groups via Galois descent](https://arxiv.org/abs/2107.06308v2), [Endotrivial modules for cyclic p-groups and generalized quaternion groups via Galois descent](https://arxiv.org/abs/2107.06308v2), [Endotrivial modules for cyclic p-groups and generalized quaternion groups via Galois descent](https://arxiv.org/abs/2107.06308v2), [The inverse limit topology and profinite descent on Picard groups in K(n)-local homotopy theory](https://arxiv.org/abs/2309.05039v3). It says: “If f : R → S is a faithful G-Galois extension of 𝔼<sub>∞</sub>-rings, then we have a natural equivalence of ∞-categories Mod(R) ≃ Mod(S)<sup>hG</sup>.”

**Sources:**

- [John Rognes, Galois extensions of structured ring spectra. Stably dualizable groups, Memoirs of the American Mathematical Society 192 (2008), no. 898](https://doi.org/10.1090/memo/0898)
- [Akhil Mathew, The Galois group of a stable homotopy theory, Advances in Mathematics 291 (2016) 403–541](https://doi.org/10.1016/j.aim.2015.12.017)

### Picard spectra let Galois descent compute Picard groups of ring spectra

**Remember:** Make Pic a spectrum, then descend it like any limit.

*Makes the theorem clean to state or prove.* MSC 55P43 (Spectra with additional structure (\\(E\_\\infty\\), \\(A\_\\infty\\), ring spectra, etc.)), 55P42. arXiv math.AT. Level 4: research.

**Definition.** The Picard group Pic(A) of an E∞ ring A is the group of A-modules that are invertible under smash product over A. The Picard spectrum pic(A) is built from the invertible modules and their equivalences. Its π₀ is Pic(A), its π₁ is the unit group of π₀A, and its higher homotopy groups are those of A, shifted up by one.

**Problem.** For a faithful G-Galois extension A → B, pic(A) is the connective cover of the homotopy fixed points of G on pic(B). So a spectral sequence that starts from group cohomology of G with coefficients in π∗pic(B) converges to Pic(A).

**How the definition helps.** The Picard spectrum is a functor of the symmetric monoidal module category that preserves limits, so descent for modules passes straight to Picard spectra. The homotopy fixed-point spectral sequence then applies, as to any homotopy limit. The work went into the descent theorem for modules and into computing differentials, which the source compares with those for A itself. Applied to KO → KU, this method gives Pic(KO) ≅ ℤ/8 (our own summary of Mathew and Stojanoska).

**Paper or page:** [The inverse limit topology and profinite descent on Picard groups in K(n)-local homotopy theory](https://arxiv.org/abs/2309.05039v3). It says: “If A → B is a faithful G-Galois extension of 𝔼<sub>∞</sub>-ring spectra, then there is a natural equivalence of symmetric monoidal ∞-categories: Mod(A) ≃ (Mod(B))<sup>hG</sup>”

**Sources:**

- [Akhil Mathew and Vesna Stojanoska, The Picard group of topological modular forms via descent theory, Geometry &amp; Topology 20 (2016) 3133–3217](https://doi.org/10.2140/gt.2016.20.3133)

### Principal bundles give Galois extensions of cochain ring spectra

**Remember:** A principal Γ-bundle is a Galois cover, and so are its cochains.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55P43 (Spectra with additional structure (\\(E\_\\infty\\), \\(A\_\\infty\\), ring spectra, etc.)), 55R20. arXiv math.AT. Level 4: research.

**Definition.** The cochain ring spectrum F(X₊, k) is the spectrum of maps from X to the Eilenberg–MacLane spectrum of a field k. It is an E∞ ring whose homotopy groups are the cohomology of X with coefficients in k. In a G-Galois extension A → B, A is the homotopy fixed points of G on B. Also B ∧ B over A is \|G\| copies of B.

**Problem.** Let P → X be a principal Γ-bundle, with Γ finite and X path-connected. Suppose π₁(X) acts nilpotently on the homology of the fibre, the group ring k\[Γ\]. Then the map of cochain rings F(X₊, k) → F(P₊, k) is a Γ-Galois extension.

**How the definition helps.** The definition asks only for equivalences of cochain spectra, which a covering space supplies even when cohomology rings fail to be Galois (our own). The fixed-point condition holds because Γ acts freely on P with quotient X. The product condition holds because P fibred with itself over X is Γ copies of P. The Eilenberg–Moore theorem, which needs the nilpotence condition, turns this pullback into a smash product (our own).

**Paper or page:** [Endotrivial modules for cyclic p-groups and generalized quaternion groups via Galois descent](https://arxiv.org/abs/2107.06308v2). It says: “Let Γ be a finite discrete group, and P → X a principal Γ-bundle. Suppose that X is path-connected and π<sub>1</sub>(X) acts nilpotently on H\_\*(Γ;k). Then the map of cochain k-algebras F(X\_+,k) → F(P\_+,k) is a Γ-Galois extension.”

**Sources:**

- [John Rognes, Galois extensions of structured ring spectra. Stably dualizable groups, Memoirs of the American Mathematical Society 192 (2008), no. 898](https://doi.org/10.1090/memo/0898)

### Profinite Galois extensions make Morava E-theory Galois over the K(n)-local sphere

**Remember:** Morava E-theory is a profinite Galois extension of the K(n)-local sphere.

*Makes the theorem clean to state or prove.* MSC 55P43 (Spectra with additional structure (\\(E\_\\infty\\), \\(A\_\\infty\\), ring spectra, etc.)), 55P60. arXiv math.AT. Level 4: research.

**Definition.** K(n)-local spectra are those seen by the n-th Morava K-theory, a homology theory that isolates one chromatic height. A K(n)-local profinite G-Galois extension A → B is a compatible system of faithful G/U-Galois extensions A → B(U). There is one for each open normal subgroup U of G. B must be the K(n)-local colimit of the B(U).

**Problem.** The unit map from the K(n)-local sphere to Morava E-theory Eₙ is a K(n)-local profinite Galois extension. The group is the Morava stabilizer group 𝔾ₙ, acting by the Goerss–Hopkins–Miller action.

**How the definition helps.** The definition turns the Devinatz–Hopkins fixed-point spectra into the data of one Galois extension, so their results become a single statement. The work went into the Devinatz–Hopkins construction of homotopy fixed points of Eₙ for closed subgroups of 𝔾ₙ. It also needs their proof that the fixed points of all of 𝔾ₙ form the K(n)-local sphere. In this form, the source computes Picard and Brauer groups by profinite Galois descent.

**Paper or page:** [Picard and Brauer groups of K(n)-local spectra via profinite Galois descent](https://arxiv.org/abs/2306.05393v2). It says: “The unit L<sub>K(h)</sub> 𝕊 → E<sub>h</sub> is a K(h)-local profinite Galois extension for the Goerss-Hopkins-Miller action of 𝔾<sub>h</sub>.”

**Sources:**

- [Ethan S. Devinatz and Michael J. Hopkins, Homotopy fixed point spectra for closed subgroups of the Morava stabilizer groups, Topology 43 (2004) 1–47](https://doi.org/10.1016/S0040-9383(03)00029-6)
- [John Rognes, Galois extensions of structured ring spectra. Stably dualizable groups, Memoirs of the American Mathematical Society 192 (2008), no. 898](https://doi.org/10.1090/memo/0898)

### Ring spectra let one compact generator make a stable category modules

**Remember:** One compact generator P makes everything modules over End(P).

*Makes the theorem clean to state or prove.* MSC 55P43 (Spectra with additional structure (\\(E\_\\infty\\), \\(A\_\\infty\\), ring spectra, etc.)), 55U35, 18G80. arXiv math.AT, math.CT. Level 4: research.

**Definition.** A ring spectrum, or A∞ ring, is a spectrum whose multiplication is associative up to coherent higher homotopies. Each object P of a stable model category has an endomorphism ring spectrum End(P), with the maps from shifts of P to P as homotopy. P is a compact generator when maps out of P commute with direct sums, and only zero has no maps from shifts of P.

**Problem.** Let a stable model category be simplicial, cofibrantly generated and proper, with one compact generator P. Then it is Quillen equivalent to the category of modules over the ring spectrum End(P) (Schwede–Shipley).

**How the definition helps.** Ring spectra let the endomorphisms of P have homotopy in every degree, so the theorem needs no condition on those degrees. Rickard's Morita theory for rings needs a tilting complex, whose graded ring of self-maps lies in degree zero. The work went into Schwede and Shipley's construction of mapping spectra in a model category, which makes End(P) a ring spectrum.

**nLab:** [stable model category](https://ncatlab.org/nlab/show/stable+model+category), [derived Morita equivalence](https://ncatlab.org/nlab/show/derived+Morita+equivalence). It says: “there is just one compact generator P ∈ 𝒞, then there is a one-object Sp-enriched category, hence an A-infinity algebra A, which is the endomorphisms A ≃ End\_𝒞(P), and the stable model category is its category of modules”

**Sources:**

- [Stefan Schwede and Brooke Shipley, Stable model categories are categories of modules, Topology 42 (2003) 103–153](https://doi.org/10.1016/S0040-9383(02)00006-X)

### Rognes's Galois extensions make KO → KU a Galois extension

**Remember:** Ask Galois conditions of spectra, not of homotopy groups.

*Makes the theorem clean to state or prove.* MSC 55P43 (Spectra with additional structure (\\(E\_\\infty\\), \\(A\_\\infty\\), ring spectra, etc.)), 55N15. arXiv math.AT, math.KT. Level 4: research.

**Definition.** An E∞ ring spectrum is a spectrum, a stable object of homotopy theory, whose multiplication is commutative up to coherent higher homotopies. Let a finite group G act on B by maps of E∞ rings over A. Then A → B is G-Galois when A is the homotopy fixed points of G on B. Also, the map from B smashed with itself over A to \|G\| copies of B, x ∧ y ↦ (g(x)·y), must be an equivalence.

**Problem.** Complex conjugation makes complex K-theory KU a C₂-Galois extension of real K-theory KO. This holds although π∗KO → π∗KU is not a Galois extension of graded rings.

**How the definition helps.** The definition asks for equivalences of spectra, so it can hold when the map of homotopy rings is far from Galois. A Galois extension of rings is injective, but the Hopf class η in π₁KO maps to zero in π₁KU (our own). The fixed-point condition is the classical fact that conjugation on KU has homotopy fixed points KO. The product condition follows from Wood's theorem that KO smashed with the cofibre of η is KU (our own summary of Rognes).

**Wikipedia:** [G-spectrum](https://en.wikipedia.org/wiki/G-spectrum). It says: “Example: KO → KU is a ℤ./2-Galois extension.”

**Sources:**

- [John Rognes, Galois extensions of structured ring spectra. Stably dualizable groups, Memoirs of the American Mathematical Society 192 (2008), no. 898](https://doi.org/10.1090/memo/0898)

### Thom spectra as colimits make n-fold loop maps give Eₙ ring spectra

**Remember:** Colimits commute with smash products, so loop maps give ring spectra.

*True by definition.* MSC 55P43 (Spectra with additional structure (\\(E\_\\infty\\), \\(A\_\\infty\\), ring spectra, etc.)), 55R25, 55N22. arXiv math.AT. Level 4: research.

**Definition.** Ando, Blumberg, Gepner, Hopkins and Rezk define the Thom spectrum Mf of f: X → BGL₁(S) as a colimit. It is the colimit of the composite functor X → BGL₁(S) → spectra, with the space X viewed as an ∞-groupoid. An Eₙ ring spectrum has a multiplication that is commutative up to homotopies parametrized by n-dimensional little cubes.

**Problem.** If f is a map of n-fold loop spaces, then Mf is an Eₙ ring spectrum; infinite loop maps give E∞ ring spectra. In particular MO, MSO, MSpin, MString and MU are E∞ ring spectra.

**How the definition helps.** Smash products commute with colimits, so the Thom spectrum functor from spaces over BGL₁(S) to spectra is symmetric monoidal (our own outline). A symmetric monoidal functor carries Eₙ algebras to Eₙ algebras. The work went into building BGL₁(S) as an infinite loop space and the Thom functor as a functor of ∞-categories. With the classical definition by Thom spaces of vector bundles, Lewis needed a long point-set construction for the E∞ structure (our own).

**nLab:** [Thom spectrum](https://ncatlab.org/nlab/show/Thom+spectrum). It says: “the sufficient condition for a Thom spectrum of an ∞-module bundle (as above) to have an E-∞ ring structure is that it arises as the (∞,1)-colimit of a homomorphism of E-∞ spaces B → A Line (ABG 10, prop.6.21)”

**Sources:**

- [Matthew Ando, Andrew J. Blumberg, David Gepner, Michael J. Hopkins and Charles Rezk, An ∞-categorical approach to R-line bundles, R-module Thom spectra, and twisted R-homology, Journal of Topology 7 (2014) 869–893](https://doi.org/10.1112/jtopol/jtt035)
- [Matthew Ando, Andrew J. Blumberg, David Gepner, Michael J. Hopkins and Charles Rezk, Units of ring spectra, orientations, and Thom spectra via rigid infinite loop space theory, Journal of Topology 7 (2014) 1077–1117](https://doi.org/10.1112/jtopol/jtu009)

### Thom spectrum models make THH of perfectoid rings polynomial

**Remember:** Write HR as a Thom spectrum; THH becomes the homology of ΩS³.

*True by definition. Confidence: medium.* MSC 55P43 (Spectra with additional structure (\\(E\_\\infty\\), \\(A\_\\infty\\), ring spectra, etc.)), 19D55, 14F30. arXiv math.AT, math.KT. Level 4: research.

**Definition.** Topological Hochschild homology THH(A) of a ring spectrum A is the cyclic bar construction, with smash products over the sphere spectrum. Perfectoid rings are p-adically complete rings, such as 𝔽ₚ, whose Frobenius on R/p is surjective, with a condition on Fontaine's map θ. The source writes HR as an E₂ Thom spectrum over spherical Witt vectors.

**Problem.** For every perfectoid ring R, the p-completed THH(HR) is HR smashed with ΩS³₊. So its homotopy ring is the polynomial ring R\[u\] with u in degree 2, which is Bökstedt's theorem when R = 𝔽ₚ.

**How the definition helps.** THH of a Thom spectrum is again a Thom spectrum over a loop space, so the Thom model reduces THH(HR) to the homology of ΩS³. That homology is polynomial on one class of degree 2. Bökstedt's original proof for 𝔽ₚ instead runs a hard spectral sequence computation with Dyer–Lashof operations (our own). The work went into identifying HR as a Thom spectrum and into comparing absolute THH with THH relative to spherical Witt vectors.

**Wikipedia:** [Topological Hochschild homology](https://en.wikipedia.org/wiki/Topological_Hochschild_homology). It says: “In contrast, the Topological Hochschild Homology ring has the isomorphism THH\_\*(𝔽<sub>p</sub>) = 𝔽<sub>p</sub>\[u\] giving a less pathological theory.”

**Paper or page:** [Perfectoid rings as Thom spectra](https://arxiv.org/abs/2003.08697v2), [Perfectoid rings as Thom spectra](https://arxiv.org/abs/2003.08697v2), [Perfectoid rings as Thom spectra](https://arxiv.org/abs/2003.08697v2). It says: “The (absolute) topological Hochschild homology THH(H R)<sub>p</sub><sup>∧</sup> ≃ H R ⊗ Ω S³ as 𝔼₁-ring spectra.”

**Sources:**

- [Andrew J. Blumberg, Ralph L. Cohen and Christian Schlichtkrull, Topological Hochschild homology of Thom spectra and the free loop space, Geometry &amp; Topology 14 (2010) 1165–1242](https://doi.org/10.2140/gt.2010.14.1165)

### Twisted spectra over a connected space are modules over a Thom spectrum

**Remember:** Twisted spectra on B are modules over the Thom spectrum of Ωσ.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55P43 (Spectra with additional structure (\\(E\_\\infty\\), \\(A\_\\infty\\), ring spectra, etc.)), 55R70. arXiv math.AT. Level 4: research.

**Definition.** Pic(S) is the space of invertible spectra, and a twist on a space B is a map σ: B → BPic(S). It defines a bundle of copies of the ∞-category of spectra over B, and σ-twisted spectra are the sections of this bundle. The Thom spectrum of the loop map Ωσ: ΩB → Pic(S) is an A∞ ring spectrum.

**Problem.** For a connected space B with a twist σ, σ-twisted spectra on B are the modules over the Thom spectrum of Ωσ. For the trivial twist, spectra parametrized over B are modules over the spherical group ring Σ∞₊ΩB.

**How the definition helps.** The Thom spectrum of a loop map is a ring spectrum, so it can be an endomorphism ring of a twisted spectrum. The twisted spectrum induced from a point has this endomorphism ring and generates for connected B, so Morita theory applies (our own outline). The work went into identifying this endomorphism ring with the Thom spectrum, which the colimit definition of Thom spectra makes possible (our own).

**Paper or page:** [Twisted Spectra Revisited](https://arxiv.org/abs/2312.07403v2). It says: “Let B be a connected space and consider a haunt σ : B → BPic(𝕊). Then, there is a natural equivalence TwSp(B,σ) ≃ Mod<sub>Th(Ω σ)</sub> of ∞-categories.”

**Sources:**

- [Matthew Ando, Andrew J. Blumberg, David Gepner, Michael J. Hopkins and Charles Rezk, An ∞-categorical approach to R-line bundles, R-module Thom spectra, and twisted R-homology, Journal of Topology 7 (2014) 869–893](https://doi.org/10.1112/jtopol/jtt035)

### Cofinal completion changes only components

**Remember:** Adding missing summands can add components without changing higher homotopy.

*Makes the theorem clean to state or prove.* MSC 55P48 (Loop space machines and operads in algebraic topology), 19D23. arXiv math.KT, math.AT. Level 4: research.

**Definition.** Consider spaces with addition that is associative and commutative up to coherent homotopy. An inclusion of whole components is cofinal if every target component has a summand one can add to reach the source. Group completion freely adjoins additive inverses.

**Problem.** After group completion, a cofinal inclusion gives an injection on components and isomorphisms on all higher homotopy groups.

**How the definition helps.** In our own explanation, the complement condition says exactly how addition can move any target component into the source. Lehner’s cofinality theorem proves the assertion about homotopy groups. For our own example, take finitely generated projective modules over a unital ring, with isomorphisms as paths and direct sum as addition. The free modules give a cofinal inclusion because every finitely generated projective module is a direct summand of a finite free module.

**Paper or page:** [Group completion via the action ∞-category](https://arxiv.org/abs/2405.12118). It says: “is injective in degree 0 and an isomorphism for i &gt; 0.”

**Sources:**

- [Georg Lehner, Group completion via the action ∞-category](https://arxiv.org/abs/2405.12118)

### Group-like fixed points recognize equivariant V-fold loop spaces

**Remember:** Ask group-like fixed points only where Vᴴ has room to loop.

*Rules out counterexamples.* MSC 55P48 (Loop space machines and operads in algebraic topology), 55P91. arXiv math.AT. Level 4: research.

**Definition.** For a finite group G and a real G-representation V, an 𝔼ᵥ-algebra is a G-space with operations given by embeddings of V-framed G-disks. It is group-like at a subgroup H when the monoid of components of its H-fixed points is a group. The condition is asked only for subgroups H whose fixed space Vᴴ has dimension at least 1.

**Problem.** An 𝔼ᵥ-algebra A is equivalent to a V-fold loop space exactly when Aᴴ is group-like for every subgroup H with dim Vᴴ ≥ 1. This holds for every V; earlier results needed a trivial summand in V.

**How the definition helps.** The condition asks for group-like fixed points exactly where the fixed points carry a multiplication. The fixed points Aᴴ are algebras over the little-disks operad of dimension dim Vᴴ (our own summary of the abstract). Where Vᴴ is zero, there is no multiplication and no condition to ask (our own). The hard part is the equivariant approximation theorem for all V and all based G-spaces.

**Paper or page:** [A genuine equivariant recognition principle for finite groups](https://arxiv.org/abs/2508.04421). It says: “We prove that an 𝔼ᵥ-algebra is equivalent to a V-fold loop space if and only if Aᴴ is group-like for all H such that dim Vᴴ ≥ 1. This generalizes a result by Guillou and May”

**Sources:**

- [Branko Juran, A genuine equivariant recognition principle for finite groups, arXiv:2508.04421 (2025)](https://arxiv.org/abs/2508.04421)
- [Bertrand Guillou, J. Peter May, Equivariant iterated loop space theory and permutative G-categories, Algebr. Geom. Topol. 17 (2017) 3259–3339](https://doi.org/10.2140/agt.2017.17.3259)

### Right Com-modules make two filtrations of TQ agree easily

**Remember:** Write both filtrations as circle products, and they agree.

*True by definition. Confidence: medium.* MSC 55P48 (Loop space machines and operads in algebraic topology), 55P43. arXiv math.AT. Level 4: research.

**Definition.** A right Com-module is a symmetric sequence of spectra with a right action of the commutative operad. The circle product of such a module with a nonunital commutative ring spectrum gives a new spectrum. Topological André–Quillen homology TQ is one such construction.

**Problem.** The two filtrations of TQ(I) in the literature, built from I and the Lie cooperad, by the author and by Behrens and Rezk, agree.

**How the definition helps.** Both filtrations come from one natural filtration of right Com-modules, so their agreement follows from comparing the modules, not the spectra (our own). The paper says its setting makes the proof easy. The hard part is to express each construction as a derived circle product with the right module (our own).

**Paper or page:** [Applications of the circle product with a right Com-module to the theory of commutative ring spectra](https://arxiv.org/abs/2410.05104). It says: “There are two versions of this in the literature -- by the author and by Behrens and Rezk -- and our setting here makes it easy to prove that these agree.”

**Sources:**

- [Nicholas J. Kuhn, Applications of the circle product with a right Com-module to the theory of commutative ring spectra, arXiv:2410.05104 (2024)](https://arxiv.org/abs/2410.05104)

### Stable automorphisms recover completion loops

**Remember:** Loops of formal differences come from stabilized automorphisms.

*Makes the theorem clean to state or prove.* MSC 55P48 (Loop space machines and operads in algebraic topology). arXiv math.AT. Level 4: research.

**Definition.** An Eₙ-monoid is a space with multiplication operations parametrized by configurations of little n-dimensional cubes. Its action category has points as objects. An arrow from x to y gives a multiplier k and a path from kx to y, with higher homotopies retained.

**Problem.** Let X be an Eₙ-monoid with n ≥ 2, and let Xᵍᵖ be its group completion. Then the loop space ΩXᵍᵖ is the colimit, in E₁-groups, of the automorphism groups Aut(x) over the action category.

**How the definition helps.** In our own explanation, the action category specifies how to compare loops at different points. Multiply a loop at x by k and transport it along the chosen path to y. Lehner’s theorem identifies the universal group built from these comparisons with the loops on Xᵍᵖ.

**Paper or page:** [Group completion via the action ∞-category](https://arxiv.org/abs/2405.12118). It says: “There is a natural equivalence of E₁-groups ΩXᵍᵖ ≃ colimₓ∈𝐄𝐗 Aut(x) where the colimit is taken in the ∞-category of E₁-groups.”

**Sources:**

- [Georg Lehner, Group completion via the action ∞-category](https://arxiv.org/abs/2405.12118)

### Transfer systems classify N∞ operads up to homotopy

**Remember:** Up to homotopy, an N∞ operad is just its list of norms.

*Makes the theorem clean to state or prove.* MSC 55P48 (Loop space machines and operads in algebraic topology), 55P91. arXiv math.AT. Level 4: research.

**Definition.** For a finite group G, an N∞ operad is a G-operad whose algebras are commutative up to coherent homotopy. Its algebras also have some norm maps, which are multiplicative transfers. A transfer system is a partial order on the subgroups of G that refines inclusion and is closed under conjugation and restriction.

**Problem.** The homotopy category of G-N∞ operads is equivalent to the lattice of transfer systems on G.

**How the definition helps.** The homotopy type of an N∞ operad depends only on which norms its algebras have, and the transfer system records exactly those norms. So the classification becomes a question about a finite lattice. The theorem is due to Blumberg and Hill and to Rubin. The hard part, that every transfer system comes from an operad, is due to Rubin and to others (our own).

**Paper or page:** [Transfer systems for rank two elementary Abelian groups: characteristic functions and matchstick games](https://arxiv.org/abs/2310.13835). It says: “There is a functor from the category of G-N∞ operads to (the category induced by) the lattice Tr(G) that induces an equivalence between the homotopy category of G-N∞ operads and Tr(G).”

**Sources:**

- [Linus Bao, Christy Hazel, Tia Karkos, Alice Kessler, Austin Nicolas, Kyle Ormsby, Jeremie Park, Cait Schleff, Scotty Tilton, Transfer systems for rank two elementary abelian groups: characteristic functions and matchstick games, Tunisian J. Math. 7 (2025) 167–191, arXiv:2310.13835](https://doi.org/10.2140/tunis.2025.7.167)
- [Andrew J. Blumberg, Michael A. Hill, Operadic multiplications in equivariant spectra, norms, and transfers, Adv. Math. 285 (2015) 658–708](https://doi.org/10.1016/j.aim.2015.07.013)

### Continuous cohomology gives a direct real homotopy theory

**Remember:** Remember that ℝ is a topological ring, not only an abelian group.

*Rules out counterexamples. Confidence: medium.* MSC 55P60 (Localization and completion in homotopy theory), 55P62, 55N30. arXiv math.AT. Level 4: research.

**Definition.** Brown and Szczarba replace plain real cohomology by continuous real cohomology, which uses the topology of ℝ. They also replace plain differential graded commutative algebras over ℝ by topological algebras.

**Problem.** With these replacements, Brown and Szczarba get a direct real homotopy theory, built like the Postnikov-tower construction of rational homotopy theory. The usual PL de Rham adjunction over ℝ cannot give this, because it does not model localization at ℝ.

**How the definition helps.** The new definition lets the theory see the topology of ℝ, which the standard construction ignores. Over ℚ, the PL de Rham adjunction models rationalization, but over ℝ it fails. Algebraically, ℝ is not a solid ring: ℝ ⊗ ℝ is not ℝ (our own words), so tensoring homotopy groups with ℝ twice is not the same as tensoring once. The details of the construction are in the original papers.

**nLab:** [real homotopy theory](https://ncatlab.org/nlab/show/real+homotopy+theory). It says: “the real numbers k = ℝ are naturally a topological ring, whose topology, however, is ignored in the standard Quillen adjunction between simplicial sets and connective dgc-algebras over the real numbers.”

**Sources:**

- [Edgar H. Brown, Robert H. Szczarba, Continuous cohomology and real homotopy type, Trans. Amer. Math. Soc. 311 (1989) 57–106](https://doi.org/10.1090/S0002-9947-1989-0929667-6)
- [Edgar H. Brown, Robert H. Szczarba, Real and rational homotopy theory, chapter 17 of Handbook of Algebraic Topology, Elsevier (1995) 867–915](https://doi.org/10.1016/B978-044481779-2/50018-3)

### Defining invertibility with the K(n)-local smash product gives an algebraic test

**Remember:** K(n)-locally, a spectrum is invertible when its completed E-theory is a line.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55P60 (Localization and completion in homotopy theory), 55P42. arXiv math.AT. Level 4: research.

**Definition.** The K(n)-local category consists of the spectra local for K(n), the Morava K-theory at a prime p and height n. Its product of X and Y is the K(n)-localization of X ∧ Y, with unit the K(n)-local sphere. Here Eₙ is Morava E-theory at height n. The Picard group is the group of spectra X that have an inverse Y for this product.

**Problem.** A K(n)-local spectrum X is invertible exactly when its completed Morava E-theory is an invertible graded module over Eₙ\*. That theory is the homotopy of the K(n)-localization of Eₙ ∧ X.

**How the definition helps.** Using the localized smash product as the multiplication lets one homology theory, completed E-theory, detect invertibility. In the ordinary stable category the Picard group is just ℤ, by Hopkins, Mahowald and Sadofsky. For n = 1 and p odd the K(n)-local Picard group is ℤₚ × ℤ/(2p − 2) (our own addition, from that paper).

**Paper or page:** [Exotic Picard groups and chromatic vanishing via the Gross-Hopkins duality](https://arxiv.org/abs/2203.09455), [Exotic Picard groups and chromatic vanishing via the Gross-Hopkins duality](https://arxiv.org/abs/2203.09455). It says: “The followings are equivalent: X ∈ Sp<sub>K</sub>(h) is invertible. (Eₕ)\*(X) is an invertible graded (Eₕ)\*-module.”

**Sources:**

- [M. J. Hopkins, M. Mahowald and H. Sadofsky, Constructions of elements in Picard groups, Contemporary Mathematics 158 (1994) 89–126](https://doi.org/10.1090/conm/158/01454)

### Finite localizations are smashing because their acyclics are built from compact spectra

**Remember:** Maps out of finite spectra commute with sums, so finite localizations are smashing.

*True by definition.* MSC 55P60 (Localization and completion in homotopy theory), 55Q51. arXiv math.AT. Level 4: research.

**Definition.** Let A be a set of finite spectra. The finite localization away from A has as acyclic spectra those built from A by sums, cofibres and retracts. A spectrum is local for it exactly when it has no nonzero maps from any suspension of a spectrum in A.

**Problem.** Every finite localization is smashing, that is, smash product with the localized sphere, so it commutes with all homotopy colimits. In particular, finite localization away from the finite spectra on which K(0), …, K(n) vanish is smashing, where K(i) are the Morava K-theories.

**How the definition helps.** Local spectra are defined by the vanishing of maps out of finite spectra, and maps out of a finite spectrum commute with infinite sums. So sums of local spectra are local, the localization preserves sums, and such a localization is smashing (our own outline). For localization at a homology theory, the acyclic spectra need not be built from finite spectra, and smashing can be deep. For Morava E-theory it is a theorem of Hopkins and Ravenel, and p-completion is not smashing at all.

**nLab:** [smashing localization](https://ncatlab.org/nlab/show/smashing+localization). It says: “finite localizations" are smashing”

**Sources:**

- [H. R. Miller, Finite localizations, Boletín de la Sociedad Matemática Mexicana 37 (1992) 383–390](http://hopf.math.purdue.edu/cgi-bin/generate?/MillerH/finite-localization)

### Generalized Moore spectra make K(n)-localization a completion of Lₙ

**Remember:** K(n)-localization is E(n)-localization followed by completion along Moore spectra.

*Makes the theorem clean to state or prove.* MSC 55P60 (Localization and completion in homotopy theory), 55Q51. arXiv math.AT. Level 4: research.

**Definition.** At a prime p, let Lₙ be localization at Morava E-theory Eₙ, a theory built from a formal group of height n. A generalized Moore spectrum of type n is a finite spectrum M with Eₙ\*M = Eₙ\*/J for an open invariant ideal J. Open means J contains a power of the maximal ideal; invariant means the symmetries of Eₙ preserve J. Type n means that the Morava K-theories K(n − 1)\*M vanish and K(n)\*M does not.

**Problem.** There is a tower of generalized Moore spectra Mⱼ of type n whose ideals intersect in zero. For every spectrum X, the K(n)-localization of X is the homotopy limit of the spectra LₙX ∧ Mⱼ.

**How the definition helps.** With a tower of type n Moore spectra, K(n)-localization becomes a completion of Lₙ, as p-completion is the limit of the spectra X ∧ S/pᵏ. Each LₙX ∧ Mⱼ is K(n)-local, and the map from X to the limit is a K(n)-equivalence (our own summary). This turns many K(n)-local questions into questions about finite spectra of type n. The work moves into the Hovey–Strickland construction of the tower, with compatible multiplications.

**Paper or page:** [The inverse limit topology and profinite descent on Picard groups in K(n)-local homotopy theory](https://arxiv.org/abs/2309.05039). It says: “Denote the Bousfield localization at the height n Morava E-theory Eₙ by Lₙ. For any spectrum X, we have a natural equivalence: L<sub>K</sub>(n)X ≃ holimⱼ(LₙX ∧ Mⱼ).”

**Sources:**

- [M. Hovey and N. P. Strickland, Morava K-theories and localisation, Memoirs of the AMS 139 (1999), no. 666](https://doi.org/10.1090/memo/0666)

### Moore spectrum localizations depend only on invertible primes and torsion

**Remember:** Two groups that kill the same spectra give the same localization.

*Makes the theorem clean to state or prove.* MSC 55P60 (Localization and completion in homotopy theory), 55P42. arXiv math.AT. Level 4: research.

**Definition.** The Moore spectrum SA of an abelian group A is the spectrum whose ordinary homology is A in degree 0 and zero elsewhere. Localization at SA is the universal map to a spectrum that receives no nonzero maps from spectra Y with SA ∧ Y = 0. Such Y are called SA-acyclic, so this localization depends only on the SA-acyclic spectra.

**Problem.** The localizations at SA₁ and SA₂ agree exactly when the same primes are invertible in A₁ and A₂ and both or neither are torsion. So each such localization is either localization at a subring of ℚ or completion at a set of primes.

**How the definition helps.** Because the localization depends only on the acyclic spectra, two Moore spectra with the same acyclic spectra give the same localization, with no further check. Bousfield showed that the acyclic spectra of SA depend only on which primes are invertible in A and on whether A is torsion. So an infinite family of localizations collapses to two simple kinds. The work moves into that computation of acyclic spectra.

**nLab:** [Bousfield localization of spectra](https://ncatlab.org/nlab/show/Bousfield+localization+of+spectra). It says: “A₁ and A₂ have the same type of acyclicity, meaning that every prime number p is invertible in A₁ precisely if it is in A₂; A₁ is a torsion group precisely if A₂ is.”

**Sources:**

- [A. K. Bousfield, The localization of spectra with respect to homology, Topology 18 (1979) 257–281](https://doi.org/10.1016/0040-9383(79)90018-1)

### Enriched Lie models extend Sullivan theory to all connected spaces

**Remember:** Enrich the Lie model, and the simply connected condition goes away.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55P62 (Rational homotopy theory), 17B70. arXiv math.AT. Level 4: research.

**Definition.** An enriched differential graded Lie algebra is, roughly, a differential graded Lie algebra that is an inverse limit of finite-dimensional nilpotent ones. The category of these algebras has a homotopy theory like the one Sullivan built for commutative differential graded algebras.

**Problem.** Every connected space has a unique minimal enriched Lie model, and an algebraic process connects it to the minimal Sullivan model. This extends results known only for simply connected spaces to all connected spaces.

**How the definition helps.** Minimal models exist for every connected space, so the theorems can be stated without the simply connected condition. The work moves into the construction of the homotopy theory of these algebras. The fundamental group is still seen only through its Malcev completion (our own).

**Paper or page:** [Enriched Differential Lie Algebras in Topology](https://arxiv.org/abs/2208.12171). It says: “Each connected space has a unique minimal edgl model, and an algebraic process connects this to the minimal Sullivan model.”

**Sources:**

- [Yves Félix, Steve Halperin, Enriched Differential Lie Algebras in Topology, arXiv:2208.12171 (2022)](https://arxiv.org/abs/2208.12171)

### Away from the group order, geometric fixed points split G-spectra by subgroups

**Remember:** Invert the group order and G-spectra fall apart into Weyl-group pieces.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55P91 (Equivariant homotopy theory in algebraic topology), 19A22. arXiv math.AT. Level 4: research.

**Definition.** Let H be a subgroup of a finite group G, with Weyl group W(H) = N(H)/H. The geometric fixed points Φᴴ send a G-spectrum to a spectrum with an action of W(H). A spectrum is p-local if multiplication by every prime other than p is invertible on it.

**Problem.** Suppose p does not divide the order of G. Take the functors Φᴴ, one for each conjugacy class of subgroups H. Together they make p-local G-spectra equivalent, as a symmetric monoidal homotopy category, to the product of p-local spectra with a W(H)-action.

**How the definition helps.** Geometric fixed points come from smashing with idempotent G-spaces, so they match idempotent pieces of the Burnside ring, which acts on every G-spectrum. When p does not divide the order of G, the p-local Burnside ring splits by idempotents (our own summary). There is one idempotent for each conjugacy class of subgroups. Each piece is then read by the matching Φᴴ. The work went into this idempotent splitting and into showing that each piece is a category of spectra with a W(H)-action.

**nLab:** [tom Dieck splitting](https://ncatlab.org/nlab/show/tom+Dieck+splitting). It says: “For G finite and for rational equivariant stable homotopy theory this becomes”

**Paper or page:** [On the KU<sub>G</sub>-local equivariant sphere](https://arxiv.org/abs/2204.03797). It says: “Let p be a prime not dividing the order of the group G. Then the collection of geometric fixed point functors, as (H) runs over conjugacy classes of subgroups, yields a symmetric monoidal equivalence of categories”

**Sources:**

- [On the KU<sub>G</sub>-local equivariant sphere, arXiv:2204.03797](https://arxiv.org/abs/2204.03797)

### Completing the Burnside ring at its augmentation ideal makes Segal's conjecture true

**Remember:** Complete the Burnside ring, and it matches the cohomotopy of BG.

*Rules out counterexamples.* MSC 55P91 (Equivariant homotopy theory in algebraic topology), 19A22, 55Q55. arXiv math.AT. Level 4: research.

**Definition.** The Burnside ring A(G) of a finite group G has an augmentation to ℤ that sends a G-set to its number of elements. Its kernel I is the augmentation ideal. The completion of A(G) is the inverse limit of the rings A(G)/Iⁿ.

**Problem.** Let G be a finite group, and add a disjoint base point to BG. The inverse limit over skeleta of its stable cohomotopy in degree zero is the I-adic completion of A(G) (Carlsson).

**How the definition helps.** The completion removes a counterexample to the uncompleted statement. For G of order 2, A(G) ≅ ℤ ⊕ ℤ is countable. By Lin's theorem the other side is ℤ plus the 2-adic integers, which is uncountable (our own example). Here I ≅ ℤ and I² = 2I (our own computation). So completing at I turns that summand into the 2-adic integers, and the two sides agree. The work went into Carlsson's reduction to elementary abelian 2-groups and the computations of Lin and others for those groups.

**Wikipedia:** [Segal's conjecture](https://en.wikipedia.org/wiki/Segal%27s_conjecture). It says: “On the right-hand side, the hat denotes the completion of the Burnside ring with respect to its augmentation ideal.”

**Sources:**

- [G. Carlsson, Equivariant stable homotopy and Segal's Burnside ring conjecture, Annals of Mathematics 120 (1984) 189–224](https://doi.org/10.2307/2006940)
- [W. H. Lin, On conjectures of Mahowald, Segal and Sullivan, Mathematical Proceedings of the Cambridge Philosophical Society 87 (1980) 449–458](https://doi.org/10.1017/S0305004100056887)

### Equivariant suspensions give group completions

**Remember:** Free algebra then completion is the same free object among loops.

*True by definition.* MSC 55P91 (Equivariant homotopy theory in algebraic topology), 55P48. arXiv math.AT. Level 4: research.

**Definition.** Let a finite group G act linearly by isometries on a finite-dimensional real space V. Configurations of disjoint little disks in V specify multiplication operations compatible with this action. Call such an algebra grouplike if its H-fixed components form a group for every subgroup H with a nonzero fixed vector in V. Group completion is the universal map to a grouplike algebra.

**Problem.** For any based G-space X, the group completion of the free little V-disks algebra on X is equivalent to ΩⱽΣⱽX. Suspension takes the smash product with the one-point compactification of V. Looping takes based maps from that same sphere.

**How the definition helps.** In our own argument, freely adjoining operations and then freely adjoining inverses gives the free grouplike algebra on X. Juran’s recognition theorem identifies grouplike algebras with the appropriate based G-spaces via V-fold looping. Under that equivalence, the suspension and looping adjunction gives ΩⱽΣⱽX the same universal property. Recognition supplies the comparison needed to identify the two constructions.

**Paper or page:** [A genuine equivariant recognition principle for finite groups](https://arxiv.org/abs/2508.04421). It says: “exhibits the target as the group completion of the source.”

**Sources:**

- [Branko Juran, A genuine equivariant recognition principle for finite groups](https://arxiv.org/abs/2508.04421)

### Genuine Cₚ-spectra are Borel spectra glued to geometric fixed points through Tate

**Remember:** Genuine for Cₚ means Borel data plus a map into Tate.

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

**How the definition helps.** Genuine fixed points see every orbit type, because transfers exist once all representation spheres are inverted. So on suspension spectra they split into one ordinary spectrum for each conjugacy class of subgroups. The summand for H = G is the suspension spectrum of Xᴳ. The summand for the trivial subgroup is that of the homotopy orbits of X. With only trivial representations inverted, the fixed points would be just the suspension spectrum of Xᴳ (our own remark).

**nLab:** [tom Dieck splitting](https://ncatlab.org/nlab/show/tom+Dieck+splitting). It says: “The tom Dieck splitting (tom Dieck 75, Lewis-May-Steinberger 86, V.11) gives an explicit description of all the wedge summands appearing in fixed point spectra of equivariant suspension spectra.”

**Sources:**

- [T. tom Dieck, Orbittypen und äquivariante Homologie II, Archiv der Mathematik 26 (1975) 650–662](https://doi.org/10.1007/BF01229795)
- [L. G. Lewis, J. P. May and M. Steinberger, Equivariant Stable Homotopy Theory, Lecture Notes in Mathematics 1213, Springer, 1986](https://doi.org/10.1007/BFb0075778)

### Genuine stable maps between representation spheres form the Burnside ring

**Remember:** Degrees on all fixed spheres are the marks of a G-set.

*Makes the theorem clean to state or prove.* MSC 55P91 (Equivariant homotopy theory in algebraic topology), 19A22. arXiv math.AT. Level 4: research.

**Definition.** For a finite group G, the Burnside ring A(G) is the Grothendieck ring of finite G-sets, a free abelian group on the orbits G/H. In genuine G-spectra, the zeroth equivariant stable homotopy group of the sphere is a colimit over representations V. Its terms are G-homotopy classes of G-maps from the representation sphere Sⱽ to itself.

**Problem.** For every finite group G, the zeroth G-equivariant stable homotopy group of the genuine sphere spectrum is isomorphic to A(G) (Segal).

**How the definition helps.** A G-map Sⱽ → Sⱽ restricts to a map of fixed spheres for each subgroup H. So it has one degree for each H, as a G-set has one count of H-fixed points. With only trivial representations, these are plain maps of spheres and the group is just ℤ (our own remark). By the tom Dieck splitting, the group is a sum of one copy of ℤ for each conjugacy class of subgroups, matching the basis G/H. The work went into showing that the degrees satisfy exactly the congruences of the marks of G-sets.

**nLab:** [equivariant stable cohomotopy](https://ncatlab.org/nlab/show/equivariant+stable+cohomotopy), [Burnside ring](https://ncatlab.org/nlab/show/Burnside+ring). It says: “Let G be a finite group, then its Burnside ring A(G) is isomorphic to the equivariant stable cohomotopy cohomology ring 𝕊<sub>G</sub>(∗) of the point in degree 0.”

**Sources:**

- [L. G. Lewis, J. P. May and M. Steinberger, Equivariant Stable Homotopy Theory, Lecture Notes in Mathematics 1213, Springer, 1986](https://doi.org/10.1007/BFb0075778)

### Geometric fixed points detect nilpotence in the C₂-equivariant stable stems

**Remember:** Check nilpotence twice: underlying and geometric fixed points.

*Makes the theorem clean to state or prove.* MSC 55P91 (Equivariant homotopy theory in algebraic topology), 55Q91. arXiv math.AT. Level 4: research.

**Definition.** Let G be the group of order 2. A G-spectrum has two geometric fixed point spectra: the underlying spectrum, and Φᴳ, the fixed points after killing the free part. Both functors to ordinary spectra are symmetric monoidal, unlike genuine fixed points, and together they detect equivalences.

**Problem.** Take an element of the stable homotopy groups of the G-sphere, graded by representations of G. It is nilpotent exactly when its underlying image and its geometric fixed point image are both nilpotent.

**How the definition helps.** Each geometric fixed point functor is symmetric monoidal and preserves colimits. So it sends the telescope of α, the sphere with α inverted, to the telescope of the image of α. An element is nilpotent exactly when its telescope is zero (our own argument). A G-spectrum is zero exactly when both its geometric fixed points are zero. The work moved into this joint detection, which comes from the isotropy separation sequence.

**Paper or page:** [The reduced ring of the RO(C₂)-graded C₂-equivariant stable stems](https://arxiv.org/abs/2211.04611). It says: “An element α ∈ π\_⋆<sup>C₂</sup> is nilpotent if and only if both its geometric fixed points Φ<sup>C₂</sup>(α) ∈ π\_\*<sup>s</sup> and its underlying non-equivariant map Φ<sup>e</sup>(α) ∈ π\_\*<sup>s</sup> are nilpotent.”

**Sources:**

- [The reduced ring of the RO(C₂)-graded C₂-equivariant stable stems, arXiv:2211.04611](https://arxiv.org/abs/2211.04611)

### Geometric fixed points take suspension spectra to suspension spectra of fixed points

**Remember:** Kill proper isotropy first, and only the fixed space remains.

*True by definition.* MSC 55P91 (Equivariant homotopy theory in algebraic topology), 55P42. arXiv math.AT. Level 4: research.

**Definition.** Let G be a finite group. Let ẼP be the based G-space whose H-fixed points are S⁰ for H = G and a point for every proper subgroup H. The geometric fixed points of a G-spectrum X are Φᴳ(X), the fixed point spectrum of ẼP ∧ X. Smashing with ẼP kills everything that comes from proper subgroups.

**Problem.** For every based G-space A, the geometric fixed points of the suspension G-spectrum of A are the suspension spectrum of Aᴳ. The functor Φᴳ is symmetric monoidal, unlike genuine fixed points, which give A(G) instead of ℤ on the sphere.

**How the definition helps.** Smashing with ẼP kills the part of A with proper isotropy, so only the fixed part Aᴳ survives (our own summary). Because ẼP smashed with itself is ẼP, Φᴳ is compatible with smash products. Taking fixed points level by level gives the same functor, and there the formula holds by definition (our own summary). The work went into showing that the two constructions agree and that smashing with ẼP is a localization.

**nLab:** [geometric fixed point spectrum](https://ncatlab.org/nlab/show/geometric+fixed+point+spectrum). It says: “The construction of geometric fixed point spectra is essentially uniquely characterized by the property Φᴳ(Σ∞<sub>G</sub> X) ≃ Σ∞(Xᴳ) and the property of being left derived strong monoidal and preserving homotopy colimits.”

**Sources:**

- [L. G. Lewis, J. P. May and M. Steinberger, Equivariant Stable Homotopy Theory, Lecture Notes in Mathematics 1213, Springer, 1986](https://doi.org/10.1007/BFb0075778)

### Homotopy fixed points defined by Kan extension compose in stages

**Remember:** Factoring the map to a point lets us take fixed points twice.

*True by definition. Confidence: medium.* MSC 55P91 (Equivariant homotopy theory in algebraic topology), 18N60. arXiv math.AT. Level 4: research.

**Definition.** A coherent action of a discrete group G on X is a functor from BG, the one-object groupoid with maps G, to spaces. Its homotopy fixed points are the limit of this functor. Equivalently, take the right Kan extension to a point, the universal extension obtained by limits. A classical model is the space of G-equivariant maps to X from a free contractible G-space.

**Problem.** Let H be a normal subgroup of G. The H-homotopy fixed points inherit a coherent G/H-action, whose homotopy fixed points are the G-homotopy fixed points of X.

**How the definition helps.** Right Kan extensions compose, so factoring BG → point turns the definition into a two-stage calculation (our own explanation). First extend from BG to B(G/H). The fiber of this map over the unique object is BH, so the extension has the H-homotopy fixed points there. The extension also supplies the coherent quotient action. Taking its limit gives the full G-homotopy fixed points. The work lies in the fiber calculation and in comparing the Kan extension with the classical space of equivariant maps.

**nLab:** [homotopy fixed point](https://ncatlab.org/nlab/show/homotopy+fixed+point). It says: “Generally, for G an ∞-group and X equipped with an ∞-action, then the homotopy fixed points is the base change along/dependent product over the delooping 𝐁G”

**Sources:** none listed. No primary source with a working link was found.

### Homotopy fixed points make the generalized Sullivan conjecture statable and true

**Remember:** After p-completion, fixed points of a p-group are homotopy fixed points.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55P91 (Equivariant homotopy theory in algebraic topology), 55S10. arXiv math.AT. Level 4: research.

**Definition.** Let EG be a contractible space with a free G-action. For a G-space X, the homotopy fixed points are the G-fixed points of the space of all maps from EG to X. The map from EG to a point gives a natural map from Xᴳ to the homotopy fixed points. For a trivial action, the homotopy fixed points are the maps from BG to X.

**Problem.** Let G be a finite p-group acting on a finite G-CW complex X. Compare the p-completed fixed points of X with the homotopy fixed points of the p-completion of X. The natural map between them is a weak equivalence (Dwyer–Miller–Neisendorfer, Carlsson, Lannes).

**How the definition helps.** The homotopy fixed point space depends only on the homotopy type of the action. So it gives a homotopy-theoretic target to compare with the honest fixed set. For a trivial action the statement becomes Miller's theorem. Sullivan's first version, for the group of order 2, was incorrect as stated, and Miller gave the corrected version. The work went into three different proofs: an unstable Adams spectral sequence, Carlsson's proof of the Segal conjecture, and Lannes' T-functor.

**Wikipedia:** [Sullivan conjecture](https://en.wikipedia.org/wiki/Sullivan_conjecture). It says: “showing that the natural map (Xᴳ)ₚ → F(EG, (X)ₚ)ᴳ is a weak equivalence when the order of G is a power of a prime p”

**Sources:**

- [W. Dwyer, H. Miller and J. Neisendorfer, Fibrewise completion and unstable Adams spectral sequences, Israel Journal of Mathematics 66 (1989) 160–178](https://doi.org/10.1007/BF02765891)
- [G. Carlsson, Equivariant stable homotopy and Sullivan's conjecture, Inventiones Mathematicae 103 (1991) 497–525](https://doi.org/10.1007/BF01239524)
- [J. Lannes, Sur les espaces fonctionnels dont la source est le classifiant d'un p-groupe abélien élémentaire, Publications Mathématiques de l'IHÉS 75 (1992) 135–244](https://doi.org/10.1007/BF02699494)

### Periodic K-theory breaks Tate vanishing

**Remember:** Periodicity leaves nonzero homotopy groups arbitrarily far below zero.

*Rules out counterexamples.* MSC 55P91 (Equivariant homotopy theory in algebraic topology). arXiv math.AT. Level 4: research.

**Definition.** A spectrum is bounded below if its homotopy groups vanish in all sufficiently negative degrees. Homotopy orbits and homotopy fixed points are the derived forms of orbits and fixed points. For a finite group action, the Tate spectrum is the cofiber of the norm map between them.

**Problem.** Let a cyclic group of order p² act on a bounded-below spectrum, where p is prime. Take homotopy orbits under the subgroup of order p, then take the Tate spectrum for the quotient group. The result vanishes.

**How the definition helps.** The lower bound excludes periodic complex K-theory, whose even homotopy groups are nonzero in arbitrarily negative degrees (our own). Nikolaus and Scholze prove vanishing under the lower bound in their Tate orbit lemma (our own). They also calculate that periodic complex K-theory with trivial action fails the lemma at every prime (our own).

**nLab:** [Tate spectrum](https://ncatlab.org/nlab/show/Tate+spectrum). It says: “the homotopy cofiber Xᵗᴳ of the norm map is called the Tate construction”

**Sources:**

- [Thomas Nikolaus and Peter Scholze, On topological cyclic homology](https://people.mpim-bonn.mpg.de/scholze/CyclotomicSpectra.pdf)

### Prime Tate powers preserve sums

**Remember:** Nonconstant words of prime length have free rotation orbits.

*Rules out counterexamples.* MSC 55P91 (Equivariant homotopy theory in algebraic topology), 55P43. arXiv math.AT. Level 4: research.

**Definition.** The smash product is the tensor product of spectra, which represent stable homotopy types. Form the m-fold smash power and let cyclic rotations permute its factors. Take the Tate spectrum, the cofiber of the norm map from homotopy orbits to homotopy fixed points.

**Problem.** For prime m this operation preserves finite direct sums. For m = 4 it fails even on the sum of two sphere spectra, the units for the smash product.

**How the definition helps.** Prime length forces every nonconstant word in the summand labels to have a free rotation orbit (our own). Each such orbit gives a freely permuted sum, whose norm is an equivalence and whose Tate spectrum vanishes (our own). At length four, the alternating word has stabilizer of order two (our own). Its orbit contributes the order-two Tate spectrum of the sphere by induction from this stabilizer (our own). The proved Segal conjecture for this group implies that this contribution is nonzero (our own).

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

**Remember:** For Cₚ, the Tate spectrum of the sphere is the p-complete sphere.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55P91 (Equivariant homotopy theory in algebraic topology), 55P42. arXiv math.AT. Level 4: research.

**Definition.** Let a finite group G act on a spectrum X. The norm map goes from the homotopy orbits of X to the homotopy fixed points Xʰᴳ. The Tate spectrum Xᵗᴳ is the cofibre of the norm map. For the trivial action of Cₚ on the sphere spectrum 𝕊, the Tate spectrum is a ring with a unit map from 𝕊.

**Problem.** For the cyclic group Cₚ, the unit map from 𝕊 to the Cₚ-Tate spectrum of 𝕊 is a p-completion. This is Lin's theorem for p = 2 and Gunawardena's for odd p, and it is equivalent to the Segal conjecture for Cₚ.

**How the definition helps.** The Tate construction puts the comparison between orbits and fixed points into one spectrum. So the Segal conjecture for Cₚ becomes a statement about one map, with no skeleta or inverse limits (our own summary). For the genuine Cₚ-sphere, the genuine fixed points are a pullback of the sphere and the homotopy fixed points over the Tate spectrum. This pullback turns one statement into the other (our own summary). The work went into Lin's computation of Ext over the Steenrod algebra for stunted projective spaces.

**nLab:** [Tate spectrum](https://ncatlab.org/nlab/show/Tate+spectrum). It says: “then the homotopy cofiber Xᵗᴳ of the norm map is called the Tate construction”

**Wikipedia:** [Segal's conjecture](https://en.wikipedia.org/wiki/Segal%27s_conjecture). It says: “The theorem relates the Burnside ring of a finite group G to the stable cohomotopy of the classifying space BG.”

**Sources:**

- [W. H. Lin, On conjectures of Mahowald, Segal and Sullivan, Mathematical Proceedings of the Cambridge Philosophical Society 87 (1980) 449–458](https://doi.org/10.1017/S0305004100056887)
- [T. Nikolaus and P. Scholze, On topological cyclic homology, Acta Mathematica 221 (2018) 203–409](https://doi.org/10.4310/ACTA.2018.v221.n2.a1)

### Defining the e-invariant as an Ext class detects the image of J

**Remember:** The e-invariant is the extension class of K-theory of the mapping cone.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55Q45 (Stable homotopy of spheres), 55Q50. arXiv math.AT. Level 4: research.

**Definition.** Let f from S²ⁿ⁺²ᵐ⁻¹ to S²ⁿ represent an element of the stable stems, the stable homotopy groups of spheres. With its Adams operations, the K-theory of the mapping cone Cf is an extension of the K-theory of one sphere by the other. Its class e(f) in an Ext¹ group, a subgroup of ℚ/ℤ by Adams, is the e-invariant. The J-homomorphism sends the homotopy groups of the orthogonal group to the stable stems.

**Problem.** The e-invariant is a homomorphism from the odd stable stems to ℚ/ℤ, injective on the image of the J-homomorphism at odd primes. So at an odd prime each odd stem is the direct sum of the image of J and the kernel of e.

**How the definition helps.** Defining e(f) as an extension class makes it additive at once, because sums of maps give Baer sums of extensions (our own remark). The extension splits as abelian groups, so only the Adams operations carry information. The splitting off of the image of J needs Adams's computation of e on that image and the Adams conjecture, proved by Quillen and Sullivan. At the prime 2 one needs a real K-theory version of e.

**nLab:** [Adams e-invariant](https://ncatlab.org/nlab/show/Adams+e-invariant). It says: “Thus this short exact sequence defines an element in the Ext group formed in this category”

**Wikipedia:** [J-homomorphism](https://en.wikipedia.org/wiki/J-homomorphism). It says: “The stable homotopy groups πᵣˢ are the direct sum of the (cyclic) image of the J-homomorphism, and the kernel of the Adams e-invariant (Adams 1966), a homomorphism from the stable homotopy groups to ℚ/ℤ.”

**Sources:**

- [J. F. Adams, On the groups J(X) IV, Topology 5 (1966) 21–71](https://doi.org/10.1016/0040-9383(66)90004-8)

### Defining Toda brackets as sets lets Massey products converge to them

**Remember:** A Massey product on the Adams page detects a matching Toda bracket.

*Makes the theorem clean to state or prove.* MSC 55Q45 (Stable homotopy of spheres), 55T15, 55S30. arXiv math.AT. Level 4: research.

**Definition.** A Toda bracket ⟨α, β, γ⟩ in homotopy is the set of all maps built from choices of null homotopies of αβ and βγ. A Massey product ⟨a, b, c⟩ on a page of a spectral sequence is the same kind of set. It uses choices of elements whose differentials are ab and bc. A permanent cycle is an element that survives to the last page, so it detects a homotopy class.

**Problem.** Let permanent cycles a, b, c on page r detect α, β, γ, with ab = bc = 0 and αβ = βγ = 0. Under a condition on crossing differentials, the Massey product ⟨a, b, c⟩ contains a permanent cycle detecting an element of ⟨α, β, γ⟩.

**How the definition helps.** Because both brackets are sets, the theorem can say that one set meets the other, and no single choice has to match. This is Moss's theorem, and the quoted paper proves a version for multiplicative spectral sequences. In practice it lets Massey products in the Ext groups of the Adams spectral sequence name elements of the stable stems. The work moves into the comparison of null homotopies with differentials, controlled by the crossing differentials condition.

**Wikipedia:** [Toda bracket](https://en.wikipedia.org/wiki/Toda_bracket). It says: “There is a convergence theorem originally due to Moss which states that special Massey products ⟨a,b,c⟩ of elements in the E<sub>r</sub>-page of the Adams spectral sequence contain a permanent cycle”

**Paper or page:** [A Toda bracket convergence theorem for multiplicative spectral sequences](https://arxiv.org/abs/2112.08689). It says: “Then the Massey product ⟨a₁,a₂,a₃⟩ ⊆ Eᵣ(X(1)) contains a permanent cycle that converges to an element of the Toda bracket ⟨α₁,α₂,α₃⟩ ⊆ π\*(X(1)).”

**Sources:**

- [R. M. F. Moss, Secondary compositions and the Adams spectral sequence, Mathematische Zeitschrift 115 (1970) 283–310](https://doi.org/10.1007/BF01129978)

### Localizing the sphere at K-theory makes image-of-J orders zeta denominators

**Remember:** The KU-local sphere counts Bernoulli denominators, which is the image of J.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55Q45 (Stable homotopy of spheres), 55P60, 55Q50. arXiv math.AT, math.NT. Level 4: research.

**Definition.** The KU-local sphere is the Bousfield localization of the sphere spectrum at complex K-theory KU. At an odd prime p, its p-completion is the fibre of ψᵍ − 1 on p-complete K-theory. Here ψᵍ is the Adams operation for a topological generator g of the group of p-adic units.

**Problem.** For each n ≥ 1, π₂ₙ₋₁ of the KU-local sphere has order the denominator of ζ(1 − n), up to a power of 2. Away from 2, they are the image of the J-homomorphism, which maps homotopy of the orthogonal group to stable homotopy of spheres.

**How the definition helps.** The fibre description makes each odd-degree group of the p-completion a cokernel of an explicit map on ℤₚ, the p-adic integers (our own outline). In degree 2n − 1 the group is ℤₚ modulo gⁿ − 1, which is zero unless p − 1 divides n. Otherwise its order is p times the p-part of n, the p-part of the denominator of ζ(1 − n) = −Bₙ/n (our own remark). The work moves into identifying the p-completion as this fibre, and into Quillen's proof of the Adams conjecture.

**Paper or page:** [Denominators of special values of zeta-functions count KU-local homotopy groups of mod p Moore spectra](https://arxiv.org/abs/2303.09550). It says: “the order \#(π₂ₙ(L<sub>KU</sub> S)) of the 2nth stable homotopy group π₂ₙ(L<sub>KU</sub> S) is a power of 2, and \#(π₂ₙ₋₁(L<sub>KU</sub> S)) = denom(ζ(1−n)) up to multiplication by a power of 2”

**Sources:**

- [D. C. Ravenel, Localization with respect to certain periodic homology theories, American Journal of Mathematics 106 (1984) 351–414](https://doi.org/10.2307/2374308)

### Balmer's prime tensor ideals turn the thick subcategory theorem into a space

**Remember:** The primes of finite spectra are the kernels of Morava K-theories.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55Q51 (\\(v<sub>n</sub>\\)-periodicity), 18G80. arXiv math.AT. Level 4: research.

**Definition.** A tensor triangulated category is a triangulated category with a compatible tensor product. In it, a prime is a proper thick tensor ideal P such that X ⊗ Y in P forces X or Y in P. The Balmer spectrum is the set of primes with a Zariski-type topology.

**Problem.** The Balmer spectrum of finite p-local spectra is a chain of points, the subcategories of type at least n for 1 ≤ n ≤ ∞. The closure of each point is the set of points with larger n.

**How the definition helps.** Balmer's theorem matches radical thick tensor ideals with suitable subsets of the spectrum, so a classification of ideals becomes a computation of a space. For finite spectra every thick subcategory is an ideal. The kernel of each K(n)\* is prime because of the Künneth formula for K(n) (our own outline). The work moves to the thick subcategory theorem itself.

**nLab:** [prime spectrum of a symmetric monoidal stable (∞,1)-category](https://ncatlab.org/nlab/show/prime+spectrum+of+a+symmetric+monoidal+stable+%28%E2%88%9E%2C1%29-category). It says: “The prime spectrum of the (∞,1)-category of spectra (p-local and finite) is labeled by the Morava K-theories (Balmer 10, prop. 9.4). This follows from the the thick subcategory theorem.”

**Sources:**

- [P. Balmer, The spectrum of prime ideals in tensor triangulated categories, Journal für die reine und angewandte Mathematik 588 (2005) 149–168](https://doi.org/10.1515/crll.2005.2005.588.149)
- [P. Balmer, Spectra, spectra, spectra – tensor triangular spectra versus Zariski spectra of endomorphism rings, Algebraic &amp; Geometric Topology 10 (2010) 1521–1563](https://doi.org/10.2140/agt.2010.10.1521)
- [M. J. Hopkins, J. H. Smith, Nilpotence and stable homotopy theory II, Annals of Mathematics 148 (1998) 1–49](https://doi.org/10.2307/120991)

### Because Lₙ is smashing, E(n)-local spectra are modules over LₙS

**Remember:** If L is smashing, every local spectrum is a module over LS.

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

**Definition.** Lₙ is localization at E(n), and K(n)-localization is localization at Morava K-theory K(n). Ravenel showed that E(n) has the same Bousfield class as K(0) ∨ … ∨ K(n).

**Problem.** For every spectrum X, the square with corners LₙX, the K(n)-localization of X, Lₙ₋₁X, and Lₙ₋₁ of the K(n)-localization of X is a homotopy pullback.

**How the definition helps.** Since ⟨E(n)⟩ = ⟨E(n−1)⟩ ∨ ⟨K(n)⟩, a map is an E(n)-equivalence exactly when it is an E(n−1)-equivalence and a K(n)-equivalence. So the square reduces to the fact that K(n) smashed with any E(n−1)-local spectrum is zero (our own outline). That fact follows by smashing with a finite spectrum of type n, which commutes with localization and kills every E(n−1)-local spectrum. The work moves to Ravenel's computation of the Bousfield class of E(n) and to the existence of finite spectra of each type.

**nLab:** [smash product theorem](https://ncatlab.org/nlab/show/smash+product+theorem). It says: “For X a homotopy type/spectrum and for all n, there is a homotopy pullback”

**Sources:**

- [D. C. Ravenel, Localization with respect to certain periodic homology theories, American Journal of Mathematics 106 (1984) 351–414](https://doi.org/10.2307/2374308)
- [A. K. Bousfield, The localization of spectra with respect to homology, Topology 18 (1979) 257–281](https://doi.org/10.1016/0040-9383(79)90018-1)

### Chromatic convergence needs finite spectra, which excludes mod p homology

**Remember:** Finite spectra are the limit of their chromatic towers; H𝔽ₚ is invisible.

*Rules out counterexamples.* MSC 55Q51 (\\(v<sub>n</sub>\\)-periodicity), 55P60. arXiv math.AT. Level 4: research.

**Definition.** The chromatic tower of a spectrum X is the sequence of localizations … → L₂X → L₁X → L₀X, where Lₙ is localization at E(n). A finite spectrum is one built from finitely many cells.

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

**Definition.** A triangulated subcategory is closed under shifts and cofibres. A thick subcategory is a triangulated subcategory that is also closed under retracts, that is, under direct summands.

**Problem.** The thick subcategories of finite p-local spectra are exactly the classes of spectra of type at least n. Without closure under retracts this fails: spectra of even rational Euler characteristic form a triangulated subcategory not on the list.

**How the definition helps.** Closure under retracts removes subcategories cut out by a numerical invariant. The rational Euler characteristic adds up along cofibre sequences, so spectra with an even value form a triangulated subcategory (our own example). It contains S ∨ S but not its retract S, the sphere spectrum, so it is not of the form type at least n. Thomason showed that such subcategories, which contain every object up to a summand, correspond to subgroups of the Grothendieck group.

**nLab:** [thick subcategory](https://ncatlab.org/nlab/show/thick+subcategory). It says: “A non-empty full (pre-)triangulated subcategory T is called thick (or épaisse) if it is "closed under direct summands”

**Sources:**

- [M. J. Hopkins, J. H. Smith, Nilpotence and stable homotopy theory II, Annals of Mathematics 148 (1998) 1–49](https://doi.org/10.2307/120991)
- [R. W. Thomason, The classification of triangulated subcategories, Compositio Mathematica 105 (1997) 1–27](https://doi.org/10.1023/a:1017932514274)

### Defining vₙ self maps through Morava K-theory makes the periodicity theorem statable

**Remember:** Judge a self map only by what Morava K-theories see.

*Makes the theorem clean to state or prove.* MSC 55Q51 (\\(v<sub>n</sub>\\)-periodicity), 55P42. arXiv math.AT. Level 4: research.

**Definition.** A vₙ self map of a finite p-local spectrum X is a map f from a suspension of X to X. It must induce an isomorphism on K(n)\* and a nilpotent map on K(m)\* for every m ≠ n. The definition asks only about Morava K-theory, not about how f is built.

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

### Ring spectra with graded field coefficients are modules over Morava K-theories

**Remember:** Fields of stable homotopy theory are Morava K-theories, prime by prime, height by height.

*Makes the theorem clean to state or prove.* MSC 55Q51 (\\(v<sub>n</sub>\\)-periodicity), 55P43. arXiv math.AT. Level 4: research.

**Definition.** A division algebra in spectra is a ring spectrum R in which every nonzero homogeneous element of π\*R is invertible. Its characteristic is a Morava K-theory K(n) at a prime p with K(n) ∧ R ≠ 0. Here K(0) is rational homology and K(∞) is mod p homology.

**Problem.** Every nonzero division algebra in spectra has exactly one characteristic, a Morava K-theory K(n) at one prime. It is a module over that K(n), and different Morava K-theories are different characteristics.

**How the definition helps.** The definition copies the notion of a field, so the result reads like the fact that every field contains a prime field. Distinct Morava K-theories smash to zero, which gives uniqueness of the characteristic. The work moves to the nilpotence theorem, which shows that a division algebra cannot be invisible to all Morava K-theories.

**Wikipedia:** [Morava K-theory](https://en.wikipedia.org/wiki/Morava_K-theory). It says: “Therefore every module spectrum over K(n) is free, meaning it's a wedge of suspensions of K(n).”

**Paper or page:** [On the rationalization of the K(n)-local sphere](https://arxiv.org/abs/2402.00960). It says: “The collection of Morava K-theories K(n,p) for p ranging through the primes and n ∈ ℕ∪{∞} forms a complete and pairwise distinct set of representatives for the characteristics of division algebras in Sp.”

**Sources:**

- [E. S. Devinatz, M. J. Hopkins, J. H. Smith, Nilpotence and stable homotopy theory I, Annals of Mathematics 128 (1988) 207–241](https://doi.org/10.2307/1971440)
- [M. J. Hopkins, J. H. Smith, Nilpotence and stable homotopy theory II, Annals of Mathematics 148 (1998) 1–49](https://doi.org/10.2307/120991)
- [On the rationalization of the K(n)-local sphere, arXiv:2402.00960](https://arxiv.org/abs/2402.00960)

### Thick subcategories of finite p-local spectra form a single chain by type

**Remember:** Thick subcategories of finite spectra are just the types, nested like a ladder.

*Makes the theorem clean to state or prove.* MSC 55Q51 (\\(v<sub>n</sub>\\)-periodicity), 55P42. arXiv math.AT. Level 4: research.

**Definition.** A thick subcategory of finite spectra is a full subcategory closed under suspension, cofibres and retracts. Let K(m) be Morava K-theory. A finite p-local spectrum X has type n if K(n)\*X ≠ 0 and K(m)\*X = 0 for all m &lt; n.

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

**Definition.** Let a locally compact group G act freely on a completely regular space P. The quotient map P → P/G is a Cartan principal bundle if the division map is continuous. The division map goes from the pairs (p, q) in the same fiber to G, and sends (p, q) to the unique g with q = p·g. The definition does not ask for local triviality.

**Problem.** If a Lie group G acts freely on a completely regular space P, then P → P/G is locally trivial exactly when it is a Cartan principal bundle (Palais). So P → P/G is locally trivial for every closed Lie subgroup G of a topological group P.

**How the definition helps.** The Cartan condition is exactly what Palais's theorem needs, so the theorem has a clean statement. The Lie condition matters. Karube's example, an infinite product of circles divided by the product of their order-2 subgroups, has no local sections. The hard part is Palais's slice theorem, not the definition.

**nLab:** [principal bundle](https://ncatlab.org/nlab/show/principal+bundle). It says: “Then the quotient map P → P/G is a G-principal bundle -- in that it is locally trivial -- precisely if the division map”

**Sources:**

- [Richard Palais, On the Existence of Slices for Actions of Non-Compact Lie Groups, Annals of Mathematics 73 (1961) 295–323](https://doi.org/10.2307/1970335)

### Semi-simplicial triangulations of circle bundles have an exact Euler class criterion

**Remember:** Allow semi-simplicial triangulations, and the Euler class criterion becomes exact.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55R10 (Fiber bundles in algebraic topology), 55R15, 18N50. arXiv math.AT, math.GT. Level 4: research.

**Definition.** A semi-simplicial set is like a simplicial complex, but a simplex need not be determined by its vertices. Several simplices may share the same vertices. The Euler class of a circle bundle is a degree-two cohomology class that measures its twisting.

**Problem.** A circle bundle over a finite semi-simplicial base B can be semi-simplicially triangulated over B exactly when its integer Euler class has a special representative (Mnëv). The representative is a simplicial cocycle with values 0 and 1 on the 2-simplices of B.

**How the definition helps.** The looser semi-simplicial notion removes extra combinatorial conditions (our own reading). So the criterion becomes a simple condition on a cocycle with values 0 and 1. For classical simplicial triangulations, the same theorem says that this condition is necessary but not sufficient. The theorem is due to Mnëv, and the paper quotes it as its starting point.

**Paper or page:** [Minimal triangulations of circle bundles](https://arxiv.org/abs/2311.04214). It says: “A circle bundle can be semi-simplicially triangulated over a finite semi-simplicial base B iff its integer Euler class can be represented by a simplicial cocycle having values 0 and 1 on 2-simplices of the base.”

**Sources:**

- [Gaiane Panina, Maksim Turevskii, Minimal triangulations of circle bundles, Funct. Anal. Appl. 59 (2025) 430–439, arXiv:2311.04214](https://arxiv.org/abs/2311.04214)
- [N. Mnëv, Minimal triangulations of circle bundles, circular permutations, and the binary Chern cocycle, J. Math. Sci. 247 (2020) 696–710](https://doi.org/10.1007/s10958-020-04832-y)

### Covering spaces as families of sets make classification follow from 1-truncation

**Remember:** A covering space is a set that varies with the point of X.

*True by definition. Confidence: medium.* MSC 55R15 (Classification of fiber spaces or bundles in algebraic topology), 03B38. arXiv math.AT, math.LO. Level 4: research.

**Definition.** In homotopy type theory, a covering space of a type X is a type family C : X → Sets. Here Sets is the type of sets, so C gives a set C(x) for each point x of X. The usual bundle is the first projection from the dependent sum type Σ (x : X), C(x) to X. This dependent sum is the type of pairs (x, c) with c in C(x).

**Problem.** Covering spaces of X are equivalent to sets with an action of the fundamental groupoid of X (the fundamental theorem of covering spaces).

**How the definition helps.** With this definition, the theorem is a special case of the universal property of 1-truncation. The 1-truncation ‖X‖₁ is the fundamental groupoid of X, and Sets is a 1-type, so maps X → Sets are the same as maps ‖X‖₁ → Sets. Classically, the theorem needs X locally path-connected and semi-locally simply connected, and the proof builds a topology on the covering space. In type theory, this work moves into the definition.

**nLab:** [fundamental theorem of covering spaces](https://ncatlab.org/nlab/show/fundamental+theorem+of+covering+spaces). It says: “In homotopy type theory, the fundamental theorem of covering spaces is really just a special case of the universal property of 1-truncation.”

**Sources:**

- [Felix Cherubini, Egbert Rijke, Modal descent, Mathematical Structures in Computer Science (2020), arXiv:2003.09713](https://arxiv.org/abs/2003.09713)

### Define real projective spaces in homotopy type theory with their bundles

**Remember:** Build each projective space and its line bundle in the same step.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55R25 (Sphere bundles and vector bundles in algebraic topology), 03B38, 55P20. arXiv math.AT, math.LO. Level 4: research.

**Definition.** Define ℝPⁿ and its tautological bundle of 2-element sets together, by induction on n. ℝP⁻¹ is the empty type. ℝPⁿ⁺¹ is the mapping cone (the space made by attaching a cone along a map) of the projection of the tautological bundle on ℝPⁿ. Univalence, the rule that equivalent types are equal, then gives the bundle on ℝPⁿ⁺¹.

**Problem.** In homotopy type theory, ℝPⁿ⁺¹ is ℝPⁿ with one (n+1)-cell attached. The colimit ℝP∞ is K(ℤ/2, 1), the space whose only nonzero homotopy group is ℤ/2 in degree 1.

**How the definition helps.** Each step is a mapping cone, so the cell structure is built into the definition. The classical quotient of the n-sphere by the antipodal map does not translate directly to homotopy type theory. The work that remains is to show that the total space of the tautological bundle on ℝPⁿ is the n-sphere. Then ℝP∞ is the type of 2-element types, which is K(ℤ/2, 1).

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

**Problem.** Let Σ be a closed oriented surface of genus at least 2. The Euler class gives a bijection from the connected components of the space of representations into PSL(2,ℝ) to the integers e with χ(Σ) ⩽ e ⩽ −χ(Σ) (Goldman).

**How the definition helps.** The Euler class is an integer that varies continuously, so it is constant on each component (our own remark). Goldman proved the converse: each value allowed by Milnor–Wood gives exactly one nonempty component. For punctured surfaces, Ryu and Yang also need the signs of the peripheral images. The hard part is to prove that each level set is connected.

**Paper or page:** [Connected components of the space of type-preserving representations](https://arxiv.org/abs/2507.07391), [Connected components of the space of type-preserving representations](https://arxiv.org/abs/2507.07391). It says: “We show that the connected components are indexed by the relative Euler classes and the signs of the images of the peripheral elements satisfying a generalized Milnor-Wood inequality”

**Sources:**

- [I. Ryu, T. Yang, Connected components of the space of type-preserving representations, arXiv:2507.07391 (2025)](https://arxiv.org/abs/2507.07391)
- [W. M. Goldman, Topological components of spaces of representations, Invent. Math. 93 (1988) 557-607](https://doi.org/10.1007/bf01410200)

### The Gauss–Manin connection comes from a fiberwise mapping space

**Remember:** Fiberwise cohomology is components of maps to the classifying space, so it is a covering.

*True by definition. Confidence: medium.* MSC 55R70 (Fibrewise topology), 55N20. arXiv math.AT. Level 4: research.

**Definition.** Take a cohomology theory with a classifying space A, so that cohomology classes are homotopy classes of maps into A. Take a fiber bundle X → B. Form the fiberwise mapping space from X into B × A over B, and reduce each fiber to its set of connected components. Over each point b this set is the cohomology of the fiber over b, and the result is a covering space of B.

**Problem.** Take any cohomology theory with a classifying space, including twisted, generalized and non-abelian ones. Then the cohomology groups of the fibers of a fiber bundle form a covering space of the base. Over a locally path-connected, semi-locally simply connected base, this is a local system, the Gauss–Manin connection.

**How the definition helps.** The bundle of fiber cohomology groups is a covering space by construction, and a covering space is already a flat connection. Classically, one builds the Gauss–Manin connection from local trivializations, or from de Rham theory in the smooth case. Here the bundle is the set of components of each fiber of a fiberwise mapping space, which after fibrant replacement is a covering space. The argument reads naturally in homotopy type theory.

**nLab:** [Gauss-Manin connection](https://ncatlab.org/nlab/show/Gauss-Manin+connection). It says: “In fact, in that formal language the following construction of the Gauss-Manin connection for twisted cohomology on fibers of a fiber bundle is so simple that it becomes essentially a tautology.”

**Sources:**

- [David Jaz Myers, Hisham Sati, Urs Schreiber, Topological Quantum Gates in Homotopy Type Theory, Comm. Math. Phys. (2024), arXiv:2303.02382](https://arxiv.org/abs/2303.02382)

### Internally defined equivariant principal bundles restrict to fixed loci

**Remember:** An equivariant bundle is an ordinary bundle with every part living in G-spaces.

*True by definition.* MSC 55R91 (Equivariant fiber spaces and bundles in algebraic topology), 55P91. arXiv math.AT. Level 4: research.

**Definition.** A G-space is a topological space with an action of the group G. A G-equivariant principal bundle is a principal bundle internal to the category of topological G-spaces: all its spaces and maps are G-spaces and G-maps. So the structure group Γ is a group object in G-spaces, which means that G may act on Γ. Such a bundle is the same as a bundle with an action of the semidirect product Γ ⋊ G.

**Problem.** Take any subgroup H ⊂ G. Then the H-fixed locus Pᴴ → Xᴴ of an equivariant principal bundle is again an equivariant principal bundle. Its group is Γᴴ, and it is equivariant for the Weyl group N(H)/H, where N(H) is the normalizer of H.

**How the definition helps.** The internal definition uses only limits, and taking fixed points preserves limits, so the whole structure passes to fixed loci at once. Taking H-fixed points is a right adjoint, so it preserves products and fiber products. To keep the definition limit-only, the nLab does not ask that the base be the quotient of the total space. It also allows empty bundles, which often appear as fixed loci.

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

**Remember:** One E∞ structure gives Steenrod and Dyer–Lashof operations the same Adem relations.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55S10 (Steenrod algebra), 55S12. arXiv math.AT. Level 4: research.

**Definition.** For a chain complex V over 𝔽₂, the extended square D₂(V) is the homotopy quotient of V ⊗ V by the swap of factors. A symmetric multiplication is a chain map D₂(V) → V, as carried by any E∞-algebra, for example the cochains of a space. From this map, May defines Steenrod operations on the homology of V. They use the homology classes of ℝP∞, the classifying space of the group of order 2.

**Problem.** For algebras over the E∞ operad in 𝔽₂-chain complexes, May's operations satisfy a Cartan formula and Adem relations. The Steenrod squares on spaces and the Dyer–Lashof operations on the homology of infinite loop spaces are special cases.

**How the definition helps.** The operations and their relations are proved from the E∞ structure alone, so each theorem holds in every example at once. The Cartan formula comes from comparing the extended square of a tensor product with two extended squares. The Adem relations come from comparing the two ways of iterating the square, through symmetric groups on four letters (our own summary). The work went into the homology of these symmetric groups.

**nLab:** [Steenrod square](https://ncatlab.org/nlab/show/Steenrod+square). It says: “A chain map D₂(V) ⟶ V is called a symmetric multiplication on V (a shadow of an E-infinity algebra structure).”

**Sources:**

- [J. P. May, A general algebraic approach to Steenrod operations, in The Steenrod Algebra and its Applications, Lecture Notes in Mathematics 168, Springer, 1970, 153–231](https://doi.org/10.1007/BFb0058524)

### Dualizing turns indecomposable Steenrod squares into primitives, so Sq²ⁱ generate

**Remember:** Primitives of Milnor's dual are ξ₁ to powers of two, so Sq²ⁱ generate.

*True by definition.* MSC 55S10 (Steenrod algebra), 16T05. arXiv math.AT. Level 4: research.

**Definition.** An element of a Hopf algebra is primitive if its coproduct is x ⊗ 1 + 1 ⊗ x. An element of an augmented algebra is indecomposable if it is not a sum of products of elements of lower positive degree. For a connected graded Hopf algebra of finite type over a field, the indecomposables are dual to the primitives of the dual Hopf algebra.

**Problem.** The mod 2 Steenrod algebra is generated as an algebra by the squares Sq²ⁱ for i ≥ 0. Every Sqᵏ with k not a power of 2 is a sum of products of squares of lower degree.

**How the definition helps.** Indecomposables of A are dual to primitives of its dual. So the generators of A can be read off from the primitives of 𝔽₂\[ξ₁, ξ₂, …\]. These primitives are only the powers ξ₁²ⁱ, so the indecomposables of A sit only in degrees 2ⁱ, where Sq²ⁱ lives. The work went into Milnor's description of the dual Steenrod algebra and its coproduct. Adem's first proof instead used an explicit Adem relation for each k.

**Wikipedia:** [Steenrod algebra](https://en.wikipedia.org/wiki/Steenrod_algebra). It says: “The only primitive elements of A∗ for p=2 are the elements of the form ξ₁²ⁱ, and these are dual to the Sq²ⁱ (the only indecomposables of A).”

**Sources:**

- [J. Milnor, The Steenrod algebra and its dual, Annals of Mathematics 67 (1958) 150–171](https://doi.org/10.2307/1969932)
- [J. Adem, The iteration of the Steenrod squares in algebraic topology, Proceedings of the National Academy of Sciences 38 (1952) 720–726](https://doi.org/10.1073/pnas.38.8.720)

### Lannes' T, defined as an adjoint, computes cohomology of maps from BV

**Remember:** T is left adjoint to tensoring with H\*(BV), as maps from BV are.

*True by definition. Confidence: medium.* MSC 55S10 (Steenrod algebra), 55R35. arXiv math.AT. Level 4: research.

**Definition.** An unstable module over the mod p Steenrod algebra is a module that obeys the vanishing rules of the cohomology of a space. At p = 2 this means Sqⁱx = 0 when i exceeds the degree of x. For an elementary abelian p-group V, Lannes' functor T is the left adjoint of tensoring with H\*(BV), on unstable modules and on unstable algebras.

**Problem.** Suppose H\*(X) and T H\*(X) are of finite type and T H\*(X) is zero in degree 1. Then T H\*(X) is the mod p cohomology of the space of maps from BV to the p-completion of X (Lannes).

**How the definition helps.** The adjunction says that maps T M → N match maps M → H\*(BV) ⊗ N. This copies the adjunction between maps BV × Y → X and maps Y → map(BV, X), since H\*(BV × Y) = H\*(BV) ⊗ H\*(Y). So T is, by design, the algebraic shadow of the mapping space. The work went into showing that T is exact, which rests on H\*(BV) being injective among unstable modules. It also needed a convergence argument for a spectral sequence (our own summary).

**Wikipedia:** [Jean Lannes (mathematician)](https://en.wikipedia.org/wiki/Jean_Lannes_%28mathematician%29), [Sullivan conjecture](https://en.wikipedia.org/wiki/Sullivan_conjecture). It says: “He introduced the T-functor on the category of unstable algebra over the Steenrod algebra.”

**Sources:**

- [J. Lannes, Sur les espaces fonctionnels dont la source est le classifiant d'un p-groupe abélien élémentaire, Publications Mathématiques de l'IHÉS 75 (1992) 135–244](https://doi.org/10.1007/BF02699494)

### Reading the dual Steenrod algebra as power series automorphisms gives Milnor's coproduct

**Remember:** Compose two additive power series, and Milnor's coproduct falls out.

*True by definition.* MSC 55S10 (Steenrod algebra), 14L05. arXiv math.AT. Level 4: research.

**Definition.** At the prime 2 the dual Steenrod algebra is the polynomial algebra 𝔽₂\[ξ₁, ξ₂, …\], with ξₙ in degree 2ⁿ − 1. Read it as the ring of functions on a group of power series under composition. Its elements are the series f(x) = x + ξ₁x² + ξ₂x⁴ + ξ₃x⁸ + ⋯. Over 𝔽₂ these are the invertible power series that are additive, f(x + y) = f(x) + f(y), and start with x.

**Problem.** The coproduct of the dual Steenrod algebra sends ξₙ to a sum over 0 ≤ i ≤ n. The term for i is (ξₙ₋ᵢ raised to the power 2ⁱ) ⊗ ξᵢ, where ξ₀ = 1.

**How the definition helps.** The coproduct is dual to composition of these power series, so it is computed by substituting one series into another. Squaring is additive in characteristic 2, so the coefficient of x²ⁿ in f(g(x)) gives Milnor's formula in one line (our own computation). The work went into Milnor's theorem that the dual Steenrod algebra is this polynomial ring. There each ξᵢ comes from the coaction on H\*(ℝP∞), which sends the generator x to Σ x²ⁱ ⊗ ξᵢ (our own summary).

**Wikipedia:** [Steenrod algebra](https://en.wikipedia.org/wiki/Steenrod_algebra). It says: “For example, if p=2 then the dual Steenrod algebra is the group scheme of automorphisms of the 1-dimensional additive formal group scheme x+y that are the identity to first order.”

**Sources:**

- [J. Milnor, The Steenrod algebra and its dual, Annals of Mathematics 67 (1958) 150–171](https://doi.org/10.2307/1969932)

### The finite subalgebra A(1) reduces the Adams spectral sequence for ko

**Remember:** ko sees only Sq¹ and Sq², so Ext over A shrinks to A(1).

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 55S10 (Steenrod algebra), 55T15. arXiv math.AT. Level 4: research.

**Definition.** A(1) is the sub-Hopf algebra of the mod 2 Steenrod algebra A generated by Sq¹ and Sq²; it has dimension 8. The quotient A//A(1) is the A-module induced from the trivial A(1)-module 𝔽₂, that is, A tensored over A(1) with 𝔽₂.

**Problem.** The mod 2 cohomology of connective real K-theory ko is A//A(1). So the second page of its Adams spectral sequence is Ext over the finite algebra A(1) of 𝔽₂ with itself.

**How the definition helps.** The cohomology of ko is induced up from A(1). So the change-of-rings isomorphism turns Ext over the infinite algebra A into Ext over the finite algebra A(1) (our own summary). A is free over its sub-Hopf algebra A(1), which is what makes the change of rings valid. The work went into computing the cohomology of ko, a theorem of Stong. Then Ext over A(1) is a finite computation.

**Wikipedia:** [Steenrod algebra](https://en.wikipedia.org/wiki/Steenrod_algebra). It says: “These algebras are significant because they can be used to simplify many Adams spectral sequence computations, such as for π∗(ko), and π∗(tmf).”

**Sources:** none listed. No primary source with a working link was found.

### Conditional convergence gives a usable notion of convergence for spectral sequences

**Remember:** Conditional convergence asks only that the filtration has zero lim and zero lim¹.

*Makes the theorem clean to state or prove.* MSC 55T05 (General theory of spectral sequences in algebraic topology), 18G40. arXiv math.AT. Level 4: research.

**Definition.** A spectral sequence can come from an unrolled exact couple: a sequence of maps … → D² → D¹ → D⁰ together with exact sequences that connect them to the pages. The spectral sequence converges conditionally to D⁰ when this filtration is complete: the limit of the Dˢ is 0, and lim¹ of the Dˢ is 0. Here lim¹ is the first derived functor of the limit; it measures how far the limit fails to be exact. This is a condition on the target filtration only, not on the pages.

**Problem.** A conditionally convergent spectral sequence converges strongly when lim¹ of its pages vanishes (Boardman). This applies to half-plane spectral sequences, such as Adams spectral sequences.

**How the definition helps.** Boardman splits convergence into two parts, and only one part depends on the pages. Conditional convergence is a condition on the target filtration that you can check in practice. The second part is one extra condition on the pages. For example, the E-Adams spectral sequence in general converges only conditionally, to the E-nilpotent completion.

**nLab:** [conditional convergence of spectral sequences](https://ncatlab.org/nlab/show/conditional+convergence+of+spectral+sequences). It says: “that converges conditionally, then sufficient condition that it converges strongly (def.) is that also the lim¹ over its pages vanishes”

**Sources:**

- [J. Michael Boardman, Conditionally convergent spectral sequences, Contemporary Mathematics 239 (1999) 49–84](https://doi.org/10.1090/conm/239/03597)

### Converging to the E-nilpotent completion makes Adams convergence a theorem

**Remember:** The Adams spectral sequence always aims at the completion, not at X.

*Makes the theorem clean to state or prove.* MSC 55T15 (Adams spectral sequences), 55P60. arXiv math.AT. Level 4: research.

**Definition.** Let E be a ring spectrum and let Ē be the fibre of its unit map from the sphere spectrum to E. The E-nilpotent completion of a spectrum X is the homotopy limit of the tower of cofibres of the maps Ēˢ ∧ X → X. The core of a ring R is the subring of elements r with r ⊗ 1 = 1 ⊗ r in R ⊗ R.

**Problem.** Bousfield's theorem: let E and X be connective, and let the core of π₀(E) be ℤ/n or ℤ with a set of primes inverted. Then the E-nilpotent completion of X is the E-localization of X, which for E = H𝔽ₚ is the p-completion of X.

**How the definition helps.** The E-Adams spectral sequence comes from the tower that defines the completion, so it converges to that completion by construction, in Boardman's conditional sense. The question of what it computes then becomes the identification of the completion with a localization. The work moves into Bousfield's theorem, which uses the connectivity of X and the arithmetic of π₀(E).

**nLab:** [nilpotent completion of spectra](https://ncatlab.org/nlab/show/nilpotent+completion+of+spectra), [Adams spectral sequence](https://ncatlab.org/nlab/show/Adams+spectral+sequence). It says: “The E-Adams spectral sequence induced by the given Adams tower conditionally converges to the E-nilpotent completion.”

**Sources:**

- [A. K. Bousfield, The localization of spectra with respect to homology, Topology 18 (1979) 257–281](https://doi.org/10.1016/0040-9383(79)90018-1)

### Defining Adams filtration by factorization makes it add under composition

**Remember:** Filtrations add because factorizations concatenate.

*True by definition. Confidence: medium.* MSC 55T15 (Adams spectral sequences), 55Q45. arXiv math.AT. Level 4: research.

**Definition.** A stable map f has Adams filtration at least s when it is a composite of s maps that each induce zero on mod p cohomology. After p-completion, the E∞ page of the Adams spectral sequence gives the layers of this filtration of π\*(S).

**Problem.** If f has Adams filtration at least s and g has filtration at least t, then g ∘ f has filtration at least s + t. So composition on π\*(S) induces a product on E∞.

**How the definition helps.** Joining factorizations of lengths s and t gives one of length s + t, so the theorem is immediate (our own summary). With the definition by an Adams resolution, the work instead goes into the theorem that the two filtrations agree. For example, p is zero on mod p cohomology, so pᵏ has filtration at least k; these are the vertical lines in charts. The further work is showing that the product on E∞ is the Yoneda product on Ext.

**Wikipedia:** [Adams spectral sequence](https://en.wikipedia.org/wiki/Adams_spectral_sequence). It says: “For X of finite type, E∞ is a bigraded group associated with a filtration of π\*(X) ⊗ ℤₚ (the p-adic integers)”

**Sources:**

- [J. F. Adams, On the structure and applications of the Steenrod algebra, Commentarii Mathematici Helvetici 32 (1958) 180–214](https://doi.org/10.1007/BF02564578)

### Ext¹ classes turn the Hopf invariant one problem into one differential

**Remember:** Hopf invariant one lives exactly where hⱼ survives.

*Makes the theorem clean to state or prove.* MSC 55T15 (Adams spectral sequences), 55Q25. arXiv math.AT. Level 4: research.

**Definition.** In the Adams spectral sequence for the sphere at p = 2, the line Ext¹ has one class hⱼ for each j ≥ 0. The class hⱼ is dual to the Steenrod square of degree 2ʲ, which is indecomposable, and lies in stem 2ʲ − 1. A map S²ⁿ⁻¹ → Sⁿ of Hopf invariant one exists exactly when n = 2ʲ and hⱼ survives to E∞.

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

**Remember:** For Morava K-theory, completion and localization agree for every spectrum.

*Makes the theorem clean to state or prove.* MSC 55T15 (Adams spectral sequences), 55P60. arXiv math.AT. Level 4: research.

**Definition.** Morava K-theory K(n) is a ring spectrum at a prime p and height n, whose coefficient ring is a graded field. The K(n)-nilpotent completion of X is the totalization of the cosimplicial spectrum built from the tensor powers of K(n) with X. The K(n)-localization of X is its Bousfield localization at K(n).

**Problem.** For every spectrum X, the K(n)-nilpotent completion of X is its K(n)-localization. So the K(n)-based Adams spectral sequence converges conditionally to π\* of the K(n)-localization of X, and completely when X is K(n)-locally dualizable.

**How the definition helps.** Because the completion equals the localization, the convergence statement needs no connectivity or finiteness hypothesis on X. By contrast, Bousfield's theorem for H𝔽ₚ is stated for connective X (our own comparison). The work moves into the proof of the comparison of completion and localization.

**Paper or page:** [Morava K-theory and Filtrations by Powers](https://arxiv.org/abs/2111.06379), [Morava K-theory and Filtrations by Powers](https://arxiv.org/abs/2111.06379). It says: “For any spectrum X, the K-nilpotent completion of X is equivalent to the K-localization of X”

**Sources:**

- [Tobias Barthel and Piotr Pstrągowski, Morava K-theory and Filtrations by Powers, arXiv:2111.06379](https://arxiv.org/abs/2111.06379)

### Replacing mod p cohomology by complex cobordism removes p-completion from Adams

**Remember:** With ℤ in degree zero, nothing is completed away.

*Makes the theorem clean to state or prove.* MSC 55T15 (Adams spectral sequences), 55N22. arXiv math.AT. Level 4: research.

**Definition.** The Adams–Novikov spectral sequence is the Adams spectral sequence based on the complex cobordism spectrum MU instead of H𝔽ₚ. Its E₂ term is Ext over the Hopf algebroid MU\*MU of MU\*(X), the complex cobordism of X. At a prime p, one may use the Brown–Peterson spectrum BP instead.

**Problem.** For a connective spectrum X, the Adams–Novikov spectral sequence converges to π\*(X) itself, with no completion at a prime. In particular it converges to the stable homotopy groups of spheres.

**How the definition helps.** The ring π₀(MU) is ℤ, so by Bousfield's theorem the MU-nilpotent completion of a connective spectrum is the spectrum itself. The mod p theory has π₀ = 𝔽ₚ, which is why its Adams spectral sequence sees only the p-completion. The work moves to Novikov's computation of MU\*MU and to the convergence theorem.

**nLab:** [Adams–Novikov spectral sequence](https://ncatlab.org/nlab/show/Adams%E2%80%93Novikov+spectral+sequence), [nilpotent completion of spectra](https://ncatlab.org/nlab/show/nilpotent+completion+of+spectra). It says: “This makes the Adams-Novikov spectral sequence converge to the full homotopy groups of connective spectra, hence in particular to the full stable homotopy groups of spheres”

**Sources:**

- [S. P. Novikov, The methods of algebraic topology from the viewpoint of cobordism theory, Mathematics of the USSR-Izvestiya 1 (1967) 827–913](https://doi.org/10.1070/im1967v001n04abeh000591)
- [A. K. Bousfield, The localization of spectra with respect to homology, Topology 18 (1979) 257–281](https://doi.org/10.1016/0040-9383(79)90018-1)

### Requiring E∗E flat makes cooperations a Hopf algebroid for Adams spectral sequences

**Remember:** Flat cooperations give an Ext page; Hℤ is not flat and fails.

*Rules out counterexamples.* MSC 55T15 (Adams spectral sequences), 55S10. arXiv math.AT. Level 4: research.

**Definition.** For a ring spectrum E, the E-homology of E itself, E∗E, plays the role of the dual Steenrod algebra. For E = H𝔽ₚ it is that algebra. Adams's flatness condition asks that E∗E be flat as a module over the coefficient ring π∗E. Under this condition, E∗E is a Hopf algebroid and the E-homology of every spectrum is a comodule over it.

**Problem.** Suppose E∗E is flat over π∗E. Then the second page of the E-based Adams spectral sequence for X is Ext over E∗E from π∗E to E∗X. This holds for E = H𝔽ₚ, MU and KU, but the condition fails for E = Hℤ.

**How the definition helps.** Flatness gives a Künneth isomorphism from E∗(E ∧ X) to E∗E ⊗ E∗X, and this is what makes E∗X a comodule. With that, the first page of the spectral sequence becomes a resolution by comodules, so the second page is an Ext group. Hℤ fails the condition because the integral homology of Hℤ has torsion, so it is not flat over ℤ (our own example). The work went into checking flatness for each E, such as Milnor's theorem for H𝔽ₚ.

**nLab:** [Steenrod algebra](https://ncatlab.org/nlab/show/Steenrod+algebra), [Adams spectral sequence](https://ncatlab.org/nlab/show/Adams+spectral+sequence). It says: “The dual 𝔽ₚ Steenrod algebra is a special case of a commutative Hopf algebroid structure canonically induced on the self generalized homology E•(E) of any ring spectrum E for which E• → E•(E) is a flat morphisms.”

**Sources:** none listed. No primary source with a working link was found.

### Synthetic spectra turn Adams differentials into powers of λ

**Remember:** A length r Adams differential becomes λ to the r minus one.

*Makes the theorem clean to state or prove.* MSC 55T15 (Adams spectral sequences), 55P42. arXiv math.AT. Level 4: research.

**Definition.** Synthetic spectra form a deformation of the category of spectra. There is a functor ν from spectra and a self-map λ, such that the homotopy of νX/λ is the classical Adams E₂ page of X. The λ-Bockstein spectral sequence of νX comes from the tower νX/λʳ.

**Problem.** Burklund, Hahn and Senger: the synthetic Adams spectral sequence of νX has E₂ page the classical E₂ page tensored with 𝔽₂\[λ\]. Each classical differential dᵣ(x) = y becomes dᵣ(x) = λʳ⁻¹y, and all synthetic differentials arise this way.

**How the definition helps.** The category is built so that λ-divisibility records Adams filtration, so the page on which a class dies becomes a power of λ in homotopy. Arguments about differentials then become statements about λ-torsion in honest homotopy groups, which can be multiplied and compared by maps. The work is in Pstrągowski's construction of synthetic spectra and the identification of νX/λ with the Adams E₂ page.

**Paper or page:** [On the Last Kervaire Invariant Problem](https://arxiv.org/abs/2412.10879), [On the Last Kervaire Invariant Problem](https://arxiv.org/abs/2412.10879). It says: “Given a classical Adams differential dᶜˡᵣ(x)=y, the corresponding synthetic differential is dᵣ(x)=λʳ⁻¹y, which is λ-linear, and all synthetic Adams differentials arise in this way.”

**Sources:**

- [Weinan Lin, Guozhen Wang and Zhouli Xu, On the Last Kervaire Invariant Problem, arXiv:2412.10879](https://arxiv.org/abs/2412.10879)

### A nilpotent action of the fundamental group makes the Eilenberg–Moore sequence converge

**Remember:** Simply connected is too strong; a nilpotent action on the fibre's homology suffices.

*Rules out counterexamples. Confidence: medium.* MSC 55T20 (Eilenberg-Moore spectral sequences), 55R20. arXiv math.AT. Level 4: research.

**Definition.** A group π acts nilpotently on a module M when M has a finite filtration by submodules such that π acts trivially on each quotient. Dwyer's condition asks this of the action of π₁(B) on each homology group of the fibre. When X is a point, the pullback in the Eilenberg–Moore setting is this fibre.

**Problem.** Dwyer's theorem: let F → E → B be a fibration over a connected base, and k a field. If π₁(B) acts nilpotently on Hᵢ(F; k) for every i, then the Eilenberg–Moore spectral sequence converges strongly to H\*(F; k).

**How the definition helps.** Nilpotence replaces simple connectivity and removes the cases where the spectral sequence computes the wrong answer. Our own counterexample is the path fibration over ℝP∞ with rational coefficients, whose fibre is two points swapped by π₁ = ℤ/2. The E₂ page is Tor of ℚ with ℚ over H\*(ℝP∞; ℚ) = ℚ, which is one-dimensional, but H⁰ of two points is two-dimensional. The work is in Dwyer's convergence argument.

**Wikipedia:** [Eilenberg–Moore spectral sequence](https://en.wikipedia.org/wiki/Eilenberg%E2%80%93Moore_spectral_sequence). It says: “refined the convergence results to include spaces for which π₁(B) acts nilpotently on Hᵢ(E<sub>f</sub>) for all i ≥ 0”

**Sources:**

- [W. G. Dwyer, Strong convergence of the Eilenberg–Moore spectral sequence, Topology 13 (1974) 255–265](https://doi.org/10.1016/0040-9383(74)90018-4)

### Tor over the base cohomology turns Künneth into the Eilenberg–Moore spectral sequence

**Remember:** Over a point, Tor is just the tensor product, so Künneth is column zero.

*Makes the theorem clean to state or prove.* MSC 55T20 (Eilenberg-Moore spectral sequences), 55R20. arXiv math.AT. Level 4: research.

**Definition.** Let p: E → B be a fibration, f: X → B a map, and P the pullback of p along f. Over a field k, H\*(X) and H\*(E) are modules over the algebra H\*(B). Their Tor over H\*(B) is bigraded, by homological degree and by internal degree.

**Problem.** Eilenberg–Moore: if B is simply connected, there is a convergent spectral sequence from Tor over H\*(B) of H\*(X) and H\*(E) to H\*(P). For ΩSⁿ with n ≥ 2, the E₂ term is Tor of k over H\*(Sⁿ), which is k in each degree that n − 1 divides.

**How the definition helps.** Tor over H\*(B) records both the tensor product and its failure to be exact, so one statement covers products and fibre products. When B is a point, only Tor₀ = ⊗ survives, and the theorem becomes the Künneth formula. The work goes into Eilenberg and Moore's comparison of the cobar construction on singular chains with the chains of the pullback.

**nLab:** [Eilenberg–Moore spectral sequence](https://ncatlab.org/nlab/show/Eilenberg%E2%80%93Moore+spectral+sequence). It says: “it applies without assumption on vanishing of Tor-groups;”

**Wikipedia:** [Eilenberg–Moore spectral sequence](https://en.wikipedia.org/wiki/Eilenberg%E2%80%93Moore_spectral_sequence). It says: “This is a generalization insofar as the zeroeth Tor functor is just the tensor product and in the above special case the cohomology of the point B is just the coefficient field k (in degree 0).”

**Sources:**

- [Samuel Eilenberg and John C. Moore, Limits and spectral sequences, Topology 1 (1962) 1–23](https://doi.org/10.1016/0040-9383(62)90093-9)
- [Samuel Eilenberg and John C. Moore, Homology and fibrations I: Coalgebras, cotensor product and its derived functors, Commentarii Mathematici Helvetici 40 (1965) 199–236](https://doi.org/10.1007/BF02564371)

### With connections, cubical groups are Kan and cubical products behave correctly

**Remember:** Connections are extra degeneracies that fold a cube along its diagonal.

*Rules out counterexamples.* MSC 55U05 (Abstract complexes in algebraic topology), 18G45. arXiv math.AT. Level 4: research.

**Definition.** A cubical set is like a simplicial set, but it is built from cubes instead of simplices. A cubical set with connections has extra degeneracy maps Γ, called connections. A connection makes an n-cube into an (n+1)-cube by folding, like the maps (s,t) ↦ max(s,t) or (s,t) ↦ min(s,t) on the square. Brown and Higgins added them.

**Problem.** Every cubical group with connections is a Kan complex (Tonks). The cube category with connections is a strict test category, so products of cubical sets have the correct homotopy type (Maltsiniotis).

**How the definition helps.** Connections supply the extra structure that both theorems use. Plain cubical sets fail both claims: cubical groups need not be Kan, and the realization of the cubical product I × I has non-trivial homotopy groups. These failures were one reason that people gave up Kan's cubical approach for simplicial sets. The real content is in the two theorems.

**nLab:** [cubical set](https://ncatlab.org/nlab/show/cubical+set), [connection on a cubical set](https://ncatlab.org/nlab/show/connection+on+a+cubical+set). It says: “Another reason was that cubical groups were in general not Kan complexes; however cubical groups with connection are Kan complexes.”

**Sources:**

- [A. P. Tonks, Cubical groups which are Kan, J. Pure Appl. Algebra 81 (1992) 83–87](https://doi.org/10.1016/0022-4049(92)90136-4)
- [G. Maltsiniotis, La catégorie cubique avec connexions est une catégorie test stricte, Homology Homotopy Appl. 11 (2009)](https://doi.org/10.4310/hha.2009.v11.n2.a15)

### Connections on cubical sets give the equivalence with crossed complexes

**Remember:** A connection folds a cell into a square with the cell on two adjacent sides.

*Makes the theorem clean to state or prove.* MSC 55U10 (Simplicial sets and complexes in algebraic topology), 18G45. arXiv math.AT, math.CT. Level 4: research.

**Definition.** A cubical set has connections if it has extra (n+1)-cells besides the degenerate ones. For each n-cell f : a → b, such a cell has f on two adjacent sides of its boundary and degenerate cells (identities) on the other two. Connections are extra operations of the same kind as degeneracies.

**Problem.** Cubical ω-groupoids with connections are equivalent to crossed complexes (Brown and Higgins). A crossed complex is like a chain complex, with a groupoid at the bottom and groupoid actions above it.

**How the definition helps.** Connections supply the thin cells that a cubical set needs for this equivalence. Plain cubical sets have only degeneracies, which repeat a cell along a new direction. The nLab says that connections are also needed to define a commutative n-shell. In dimension 2, the same idea gives the Brown–Spencer equivalence of crossed modules with edge-symmetric double groupoids with connection.

**nLab:** [connection on a cubical set](https://ncatlab.org/nlab/show/connection+on+a+cubical+set). It says: “Such connections on cubical sets were introduced in 1981 by Brown and Higgins in order to obtain the equivalence of their "cubical ∞-groupoids" with crossed complexes.”

**Sources:**

- [Ronald Brown, Philip J. Higgins, On the algebra of cubes, Journal of Pure and Applied Algebra 21 (1981) 233–260](https://doi.org/10.1016/0022-4049(81)90018-9)

### Cogroup generators make equivalences of spectra detectable at one base point

**Remember:** Suspensions are cogroups, so all components of a mapping space look alike.

*Rules out counterexamples.* MSC 55U35 (Abstract and axiomatic homotopy theory in algebraic topology), 55P42, 18N60. arXiv math.AT, math.CT. Level 4: research.

**Definition.** Let a set of compact objects Sᵢ generate an ∞-category under colimits, with the set closed under suspension. Each Sᵢ is a cogroup in the homotopy category: it has a comultiplication, like a suspension with its pinch map. In spectra, the spheres Sⁿ for all integers n form such a set.

**Problem.** In such an ∞-category, a map f: X → Y is an equivalence when every map \[Sᵢ, X\] → \[Sᵢ, Y\] is a bijection. For spectra, a map is an equivalence exactly when it is an isomorphism on πₙ for every integer n.

**How the definition helps.** The cogroup structure makes each mapping space out of Sᵢ an H-group, so all its components look alike and one base point is enough (nLab). In pointed spaces S⁰ is not a cogroup, so the test can fail when X is not connected (nLab). For example, sending S⁰ into a point plus a disjoint circle passes the test but is not an equivalence (our own). The work is the ordinary Whitehead theorem, applied to the mapping spaces out of each Sᵢ.

**nLab:** [Brown representability theorem](https://ncatlab.org/nlab/show/Brown+representability+theorem). It says: “It is this last condition of testing on all basepoints that the assumed cogroup structure on the S<sub>i</sub> allows to do away with”

**Sources:**

- [Jacob Lurie, Higher Algebra, Section 1.4.1 (the lemma in the proof of Theorem 1.4.1.2)](https://www.math.ias.edu/~lurie/papers/HA.pdf) (link not checked)

### Quillen idempotent monads give the stable model structure on spectra

**Remember:** Check three properties of one functor, and the localized model structure exists.

*Makes the theorem clean to state or prove.* MSC 55U35 (Abstract and axiomatic homotopy theory in algebraic topology), 55P42, 18N40. arXiv math.AT, math.CT. Level 4: research.

**Definition.** Let Q be a functor on a right proper model category, with a natural map η: X → QX. A map f is a Q-equivalence when Q(f) is a weak equivalence. Q is a Quillen idempotent monad if Q preserves weak equivalences, and Q(η) and η applied to QX are weak equivalences. Also, a pullback of a Q-equivalence along a fibration between objects where η is a weak equivalence must be a Q-equivalence.

**Problem.** For such Q, the original cofibrations and the Q-equivalences are part of a model structure (Bousfield–Friedlander). For Q the Ω-spectrification of topological sequential spectra, this is the stable model structure, whose weak equivalences are the stable weak homotopy equivalences.

**How the definition helps.** The definition turns the existence of a localized model structure into three checks on one functor (our own). For sequential spectra these checks are properties of Ω-spectrification, which preserves homotopy pullbacks (our own). The work sits in the general Bousfield–Friedlander theorem, proved once for all such Q.

**nLab:** [Introduction to Stable homotopy theory -- 1-1](https://ncatlab.org/nlab/show/Introduction+to+Stable+homotopy+theory+--+1-1). It says: “this establishes the stable model structure on topological sequential spectra”

**Sources:**

- [A. K. Bousfield and E. M. Friedlander, Homotopy theory of Γ-spaces, spectra, and bisimplicial sets, Lecture Notes in Mathematics 658 (1978) 80–130](https://doi.org/10.1007/BFb0068711)

### Test categories make presheaves model homotopy types almost by definition

**Remember:** A test category is a shape whose presheaves see all homotopy types.

*True by definition. Confidence: medium.* MSC 55U35 (Abstract and axiomatic homotopy theory in algebraic topology), 55P15, 18F20. arXiv math.AT, math.CT. Level 4: research.

**Definition.** Let A be a small category. A presheaf on A is aspherical if the nerve of its category of elements is contractible (the nerve is the simplicial set whose n-simplices are strings of n composable arrows). A is a weak test category if, for every category D with a terminal object, the presheaf a ↦ Hom(A/a, D) is aspherical; here A/a is the slice category of objects over a. A is a test category if A itself has a contractible nerve and every slice A/a is a weak test category.

**Problem.** For a weak test category A, the homotopy category of presheaves on A is equivalent to the homotopy category of small categories. So presheaves on a test category model homotopy types.

**How the definition helps.** The axioms make the comparison with small categories almost automatic: it follows by a short argument (Maltsiniotis, Lemme 1.3.8 and Proposition 1.3.9). The real work moves to two places. One must prove that small categories model homotopy types through nerves, and check that categories such as the simplex category Δ are test categories.

**nLab:** [test category](https://ncatlab.org/nlab/show/test+category), [Pursuing Stacks](https://ncatlab.org/nlab/show/Pursuing+Stacks). It says: “In other words, presheaves over a (weak) test category are models for homotopy types of ∞-groupoids.”

**Sources:**

- [Georges Maltsiniotis, La théorie de l'homotopie de Grothendieck, Astérisque 301 (2005)](https://webusers.imj-prg.fr/~georges.maltsiniotis/textes.html)
