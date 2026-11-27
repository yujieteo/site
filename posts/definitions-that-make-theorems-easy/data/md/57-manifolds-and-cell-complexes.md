### Allowing every diagram gives the true unknotting number

**Remember:** The diagram with the fewest crossings need not be easiest to unknot.

*Rules out counterexamples.* MSC 57K10 (Knot theory). arXiv math.GT. Level 1: early undergraduate.

**Definition.** A crossing change swaps which strand passes over the other. The unknotting number is the fewest crossing changes needed to make a simple unknotted loop, allowing any starting diagram of the knot.

**Problem.** Every diagram gives an upper bound on a knot’s unknotting number. A diagram with more crossings can give a better bound than a minimum-crossing diagram.

**How the definition helps.** Allowing every starting diagram includes shortcuts that diagrams with the fewest crossings can miss. In Bleiler’s example, a ten-crossing diagram needs at least three changes, but a fourteen-crossing diagram of the same knot needs only two.

**nLab:** [unknotting number](https://ncatlab.org/nlab/show/unknotting+number). It says: “The unknotting number of a knot does not necessarily occur in a minimal diagram.”

**Sources:**

- [Yasutaka Nakanishi, Unknotting numbers and knot diagrams with the minimum crossings (1983)](https://da.lib.kobe-u.ac.jp/da/kernel/0100489690/0100489690.pdf)
- [Steven A. Bleiler, A note on unknotting number (1984)](https://doi.org/10.1017/S0305004100062381)

### Descending diagrams give an upper bound on unknotting moves

**Remember:** Choose the direction that already goes over more often.

*True by definition.* MSC 57K10 (Knot theory). arXiv math.GT. Level 1: early undergraduate.

**Definition.** Start away from the crossings and choose a direction around a knot drawing. The drawing is descending if you pass over at the first visit to each crossing.

**Problem.** Any knot drawing with c crossings can become a descending drawing of the unknot by switching at most half its crossings.

**How the definition helps.** The descending condition replaces a search over crossing changes with a count of first visits. In our own count, reversing direction switches which strand comes first at every crossing. One direction therefore needs at most half the crossings switched to give a descending diagram. The remaining geometric fact is that every descending diagram represents an unknotted loop.

**nLab:** [unknotting number](https://ncatlab.org/nlab/show/unknotting+number). It says: “Let D be a diagram with c crossings, then changing at most c/2 crossings of D produces a diagram of the unknot.”

**Sources:** none listed. No primary source with a working link was found.

### Endpoint cycles count the components of a closed braid

**Remember:** Follow a strand and then repeat from its ending label.

*True by definition.* MSC 57K10 (Knot theory). arXiv math.GT. Level 1: early undergraduate.

**Definition.** A braid consists of disjoint strands running from one row of points to another without turning back. Its endpoint permutation sends each starting position to the ending position of its strand. Close the braid by joining each ending position to the starting position with the same label.

**Problem.** The components of a closed braid correspond one-for-one to the cycles of its endpoint permutation. In particular, the closure is a knot if the permutation is a single cycle.

**How the definition helps.** The endpoint permutation records exactly where a trip along one strand continues after closure. In our own proof, repeatedly following the next label traces one component and returns to the starting label. Those labels form one cycle, and every label belongs to exactly one cycle.

**nLab:** [braid group](https://ncatlab.org/nlab/show/braid+group). It says: “the order of the given points may come out permuted by a permutation”

**Sources:** none listed. No primary source with a working link was found.

### Nonconstant tricolorings rule out the unknot

**Remember:** Use all three colors, with each crossing monochrome or showing all three.

*Rules out counterexamples.* MSC 57K10 (Knot theory). arXiv math.GT. Level 1: early undergraduate.

**Definition.** A knot diagram shows a closed loop with each crossing marked over or under. Cut the drawing into arcs at its underpasses and color each arc, using all three colors. A tricoloring requires the three colors at each crossing to be all equal or all different.

**Problem.** A knot with a tricoloring cannot be the unknot, the knot shaped like a plain circle. The trefoil has such a coloring.

**How the definition helps.** Requiring all three colors rules out the plain circle, which has only one arc. The three local moves relating diagrams of the same knot preserve tricolorability. Giving the three arcs of the standard trefoil drawing different colors passes the crossing test.

**nLab:** [colorable knot](https://ncatlab.org/nlab/show/colorable+knot). It says: “exactly three colours are used in the assignment”

**Sources:** none listed. No primary source with a working link was found.

### Over and under marks recover the knot from a diagram

**Remember:** A shadow needs height order at each crossing.

*Rules out counterexamples.* MSC 57K10 (Knot theory). arXiv math.GT. Level 1: early undergraduate.

**Definition.** A knot diagram projects a knot to the plane with crossings only where two branches meet at distinct angles. At each crossing, mark which branch lies higher in space.

**Problem.** An over-and-under diagram determines a single knot type. One unmarked plane projection can represent both a trefoil and an unknot.

**How the definition helps.** The marks give a strict height order that stays valid while one set of strand heights changes into another. In our own proof, move each height linearly between its two values, keeping the plane drawing fixed. No strands meet, and the resulting motion extends to the surrounding space. Switching one crossing in a trefoil drawing gives an unknotted loop with the same unmarked drawing.

**nLab:** [link diagram](https://ncatlab.org/nlab/show/link+diagram). It says: “Which strand of the two intersecting at the double point is the 'over strand' and which is the 'under strand' is recorded”

**Sources:** none listed. No primary source with a working link was found.

### Disk removal makes Euler characteristic of surface sums computable

**Remember:** Each removed disk costs one, and gluing along a circle costs nothing.

*True by definition.* MSC 57K20 (2-dimensional topology (including mapping class groups of surfaces, Teichmüller theory, curve complexes, etc.)). arXiv math.GT. Level 1: early undergraduate.

**Definition.** To form the connected sum of two closed surfaces, remove the interior of one disk from each. Glue the two new boundary circles. The Euler characteristic is the number of vertices minus edges plus faces in a division of the surface into cells.

**Problem.** The Euler characteristic of a connected sum of closed surfaces is the sum of their Euler characteristics minus two.

**How the definition helps.** Counting vertices, edges and faces shows the contribution of each removed disk directly. Our own count uses matching subdivisions on the two boundary circles, with each disk initially a single face. Each disk costs one face, and identifying the circles removes equally many vertices and edges. The work behind this definition is proving that cell counts are independent of subdivision and agree with the definition using homology.

**nLab:** [Euler characteristic](https://ncatlab.org/nlab/show/Euler+characteristic). It says: “the Euler characteristic of their connected sum is the sum of their separate Euler characteristics, minus 2”

**Sources:** none listed. No primary source with a working link was found.

### Reflection across a cylinder makes two Möbius strips

**Remember:** Glue the ends of a cylinder by reflecting its circle.

*True by definition.* MSC 57K20 (2-dimensional topology (including mapping class groups of surfaces, Teichmüller theory, curve complexes, etc.)). arXiv math.GT. Level 1: early undergraduate.

**Definition.** The Klein bottle is the quotient of S¹ × \[0,1\] identifying (z,1) with (r(z),0) for every z, where r reflects the circle (our own).

**Problem.** The Klein bottle is the union of two Möbius strips glued along their single boundary circles.

**How the definition helps.** Cut the circle at opposite points exchanged by the reflection (our own). The reflection preserves each resulting semicircle and reverses its ends (our own). Each semicircle therefore sweeps out a Möbius strip, and the two strips share their entire boundary (our own).

**Wikipedia:** [Klein bottle](https://en.wikipedia.org/wiki/Klein_bottle). It says: “Dissecting the Klein bottle results in two Möbius strips.”

**Sources:** none listed. No primary source with a working link was found.

### The Möbius seam makes its boundary wrap twice

**Remember:** One lap swaps edges, so the boundary needs two.

*True by definition.* MSC 57K20 (2-dimensional topology (including mapping class groups of surfaces, Teichmüller theory, curve complexes, etc.)). arXiv math.GT. Level 1: early undergraduate.

**Definition.** Make a Möbius strip by gluing the ends of a rectangle with a half twist. Join the top on one end to the bottom on the other and join the midpoints.

**Problem.** The Möbius strip has one boundary circle. When the strip shrinks to its middle circle, the boundary goes around that circle twice.

**How the definition helps.** The flipped seam joins the top edge to the bottom edge, making one boundary loop. Our own proof shrinks each crosswise segment to its midpoint, which respects the gluing. Each long edge then travels once around the centerline in the same direction. Using a rectangle avoids tracking the twist in a three-dimensional model.

**Wikipedia:** [Möbius strip](https://en.wikipedia.org/wiki/M%C3%B6bius_strip). It says: “The Möbius strip can be continuously transformed into its centerline”

**Sources:** none listed. No primary source with a working link was found.

### A torus level set counts link components

**Remember:** Divide the winding numbers by their greatest common divisor to get a single strand.

*True by definition.* MSC 57K10 (Knot theory). arXiv math.GT. Level 2: later undergraduate.

**Definition.** Imagine the surface of a doughnut with two angle coordinates x and y, each measured in full turns. For positive integers p and q, the torus link consists of all points where qx − py is an integer.

**Problem.** The torus link has gcd(p, q) components, where gcd means greatest common divisor. It is a knot exactly when p and q are coprime.

**How the definition helps.** The equation describes all strands at once, while tracing a single winding path can miss components. In our own calculation, write d for the greatest common divisor and set u = (q/d)x − (p/d)y. Bézout’s identity supplies a second angle making these valid torus coordinates because the two coefficients of u are coprime. The equation becomes du = 0 modulo one, allowing d values of u and a whole circle at each value.

**Wikipedia:** [Torus knot](https://en.wikipedia.org/wiki/Torus_knot). It says: “A torus link arises if p and q are not coprime”

**Sources:** none listed. No primary source with a working link was found.

### Changing the cut leaves a closed braid unchanged

**Remember:** A closed braid has no preferred place to cut it open.

*True by definition.* MSC 57K10 (Knot theory). arXiv math.GT. Level 2: later undergraduate.

**Definition.** Draw a braid as strands crossing a cylinder from one end to the other without turning back. Close the braid by identifying corresponding points at the two ends.

**Problem.** Conjugate braids have equivalent closures. Conjugating a braid means placing a second braid before it and the inverse of that braid after it.

**How the definition helps.** Joining the cylinder ends makes the order of the braid pieces cyclic. In our own proof, slide the cut until the extra braid meets its inverse, then cancel them. The cylinder with joined ends is a solid torus, whose standard placement in space gives the usual closure drawn with outside arcs.

**Wikipedia:** [Markov theorem](https://en.wikipedia.org/wiki/Markov_theorem). It says: “their closures are equivalent links”

**Sources:** none listed. No primary source with a working link was found.

### Framed links make the Kauffman bracket an invariant with no correction

**Remember:** Remember the ribbon, and the twist count becomes part of the knot.

*True by definition.* MSC 57K10 (Knot theory), 57K14. arXiv math.GT. Level 2: later undergraduate.

**Definition.** A framing of a smooth link in oriented three-space is a homotopy class of nowhere-zero normal vector fields along its components (our own). The blackboard framing pushes each strand sideways in its diagram plane (our own).

**Problem.** The Kauffman bracket is an invariant of framed links. Diagrams show the same framed link exactly when modified Reidemeister moves connect them.

**How the definition helps.** The bracket relations preserve the bracket under moves II and III (our own). Opposite curls on one strand contribute inverse factors, so the modified type I move also preserves it (our own). The framed Reidemeister theorem identifies the resulting equivalence of blackboard diagrams with framed link equivalence.

**Wikipedia:** [Knot (mathematics)](https://en.wikipedia.org/wiki/Knot_%28mathematics%29), [Bracket polynomial](https://en.wikipedia.org/wiki/Bracket_polynomial), [Reidemeister move](https://en.wikipedia.org/wiki/Reidemeister_move). It says: “Link diagrams, with blackboard framing, represent equivalent framed links if and only if they are connected by a sequence of (modified) type I, II, and III moves.”

**Sources:**

- [Louis H. Kauffman, An invariant of regular isotopy, Transactions of the American Mathematical Society 318 (1990) 417–471](https://doi.org/10.1090/S0002-9947-1990-0958895-7)

### Moving the whole space keeps knots from coming undone

**Remember:** You must move the space around the knot, not only the knot.

*Rules out counterexamples.* MSC 57K10 (Knot theory), 57N37. arXiv math.GT. Level 2: later undergraduate.

**Definition.** Two knots are equivalent if there is an ambient isotopy between them. An ambient isotopy is a continuous family of homeomorphisms of the whole surrounding space. It starts at the identity, and its last member carries one knot onto the other.

**Problem.** Under continuous isotopy through embeddings, every tame knot in ℝ³ is equivalent to the unknot. Under ambient isotopy, the trefoil is inequivalent to the unknot.

**How the definition helps.** An ambient isotopy preserves the homeomorphism type of the complement. Our own argument distinguishes the trefoil’s nonabelian knot group from the unknot’s infinite cyclic group. Plain isotopy can shrink a knotted arc to a point on an otherwise unknotted circle while keeping each time slice embedded.

**Wikipedia:** [Knot theory](https://en.wikipedia.org/wiki/Knot_theory), [Ambient isotopy](https://en.wikipedia.org/wiki/Ambient_isotopy). It says: “However, this definition would make every knot equivalent to the unknot, as the knotted portions can be "contracted" down to a straight line.”

**Sources:** none listed. No primary source with a working link was found.

### Oriented knots have a well-defined connected sum

**Remember:** The arrows tell you which cut ends to join.

*Rules out counterexamples.* MSC 57K10 (Knot theory). arXiv math.GT. Level 2: later undergraduate.

**Definition.** To form the oriented connected sum, draw the two directed knots in separate disks. Remove a short arc on the outer face of each drawing. Join the ends by two disjoint arcs across the gap, without new crossings, so the directions continue.

**Problem.** The oriented connected sum depends only on the oriented knot types, not the cut arcs or diagrams.

**How the definition helps.** The directions select a joining that follows both knots as originally directed. Reversing just one direction can give a different knot even after we forget the directions. The remaining proof slides the cut along each knot and checks that changing either diagram preserves the result.

**Wikipedia:** [Connected sum](https://en.wikipedia.org/wiki/Connected_sum). It says: “the oriented ambient isotopy class of the result is well-defined”

**Sources:** none listed. No primary source with a working link was found.

### Oriented Seifert surfaces give an odd Euler characteristic

**Remember:** One boundary and orientability make Euler characteristic odd.

*Rules out counterexamples.* MSC 57K10 (Knot theory). arXiv math.GT. Level 2: later undergraduate.

**Definition.** A Seifert surface for a directed knot is a compact, connected, oriented surface embedded in space whose boundary follows the knot’s direction. Its genus counts the handles after we cap its boundary with a disk. Its Euler characteristic counts vertices minus edges plus faces in a triangulation.

**Problem.** A Seifert surface of genus g spanning one knot has odd Euler characteristic, equal to 1 − 2g.

**How the definition helps.** Capping the single boundary circle gives a closed oriented surface, whose genus determines its Euler characteristic. In our own count, the cap adds one face, so removing it subtracts one from 2 − 2g. Without orientability, a Möbius strip spans a knot and has Euler characteristic zero.

**Wikipedia:** [Seifert surface](https://en.wikipedia.org/wiki/Seifert_surface). It says: “A Seifert surface must be oriented.”

**Paper or page:** [Möbius Strip has Euler Characteristic Zero](https://proofwiki.org/wiki/Möbius_Strip_has_Euler_Characteristic_Zero). It says: “Let M be a Möbius Strip. Then: χ(M) = 0”

**Sources:** none listed. No primary source with a working link was found.

### Seifert circles and bands give a knot genus bound

**Remember:** Count circles and crossings to bound the number of handles.

*True by definition.* MSC 57K10 (Knot theory). arXiv math.GT. Level 2: later undergraduate.

**Definition.** Knot genus is the smallest number of handles of any compact, connected, oriented surface in space bounded by the knot. In Seifert’s construction, reconnect the strands at each crossing to follow their directions without crossing. Fill the resulting circles with disks and restore each crossing with a twisted band.

**Problem.** If a knot diagram has c crossings and smoothing them gives s circles, its knot genus is at most (c − s + 1)/2.

**How the definition helps.** The disk-and-band surface bounds the minimum without a search over all spanning surfaces. Each disk adds one and each band subtracts one from its Euler characteristic, giving s − c. Our own calculation sets this equal to 1 − 2g for a surface with one boundary circle. Seifert’s construction ensures that the surface has no self-intersections and carries a consistent orientation.

**Paper or page:** [Nudos y Superficies](https://arxiv.org/abs/2412.20945v1). It says: “se construye a partir de b bandas y d discos, entonces χ(F) = d − b”

**Sources:**

- [Herbert Seifert, Über das Geschlecht von Knoten (1935)](https://link.springer.com/article/10.1007/BF01448044)

### Signed mixed crossings bound the cost of splitting links

**Remember:** One mixed crossing change can fix at most one unit of linking.

*True by definition.* MSC 57K10 (Knot theory). arXiv math.GT. Level 2: later undergraduate.

**Definition.** For two directed link components, their linking number is half the signed crossing count between them. The absolute linking number of the whole link adds the absolute values for all pairs of components.

**Problem.** Separating all components into disjoint balls requires at least the absolute linking number in crossing changes between different components.

**How the definition helps.** Our own count uses the crossing formula because a switch changes one pair’s linking number by one. Taking absolute values before adding prevents cancellation between different pairs. A separated link has a drawing without crossings between components, so the sum must fall to zero. The work is showing that local diagram moves preserve the signed count, which can also be defined by intersections with a spanning surface.

**nLab:** [linking number](https://ncatlab.org/nlab/show/linking+number). It says: “An R2 move removes or introduces two crossings of opposite sign”

**Paper or page:** [Slice-torus link invariants, combinatorial invariants, and positivity conditions](https://arxiv.org/abs/2008.06921v3). It says: “If there exists a splitting sequence with m mixed crossing changes, then \|ℓk\|(L) ≤ m”

**Sources:** none listed. No primary source with a working link was found.

### Tame knots have finite diagrams, so Reidemeister moves capture equivalence

**Remember:** Finitely many straight pieces mean finitely many crossings.

*Rules out counterexamples.* MSC 57K10 (Knot theory), 57M30. arXiv math.GT. Level 2: later undergraduate.

**Definition.** A polygonal knot is an embedded circle in ℝ³ made of finitely many line segments. A tame knot is a knot ambient isotopic to a polygonal knot.

**Problem.** Two regular diagrams of tame knots represent equivalent knots exactly when planar isotopies and finitely many Reidemeister moves relate them.

**How the definition helps.** Every tame knot has a polygonal representative with a finite regular diagram. Our own observation is that every finite regular diagram reconstructs a tame knot, excluding wild knots. Reidemeister’s theorem supplies the equivalence criterion for these diagrams.

**Wikipedia:** [Knot (mathematics)](https://en.wikipedia.org/wiki/Knot_%28mathematics%29), [Wild knot](https://en.wikipedia.org/wiki/Wild_knot), [Wild arc](https://en.wikipedia.org/wiki/Wild_arc). It says: “A tame knot is any knot equivalent to a polygonal knot. Knots which are not tame are called wild, and can have pathological behavior.”

**Sources:**

- [Kurt Reidemeister, Elementare Begründung der Knotentheorie, Abhandlungen aus dem Mathematischen Seminar der Universität Hamburg 5 (1927) 24–32](https://doi.org/10.1007/BF02952507)
- [Ralph H. Fox and Emil Artin, Some wild cells and spheres in three-dimensional space, Annals of Mathematics 49 (1948) 979–990](https://doi.org/10.2307/1969408)

### The coordinate torus makes T(p,q) equivalent to T(q,p)

**Remember:** Swapping the two complex coordinates swaps the two winding numbers.

*True by definition.* MSC 57K10 (Knot theory). arXiv math.GT. Level 2: later undergraduate.

**Definition.** Take coprime positive integers p and q. On the unit sphere in ℂ², define T(p,q) by the curve (exp(ipt), exp(iqt))/√2 for 0 ≤ t &lt; 2π.

**Problem.** The torus knots T(p,q) and T(q,p) are equivalent by an ambient isotopy of the 3-sphere.

**How the definition helps.** Our own proof swaps the two coordinates, carrying T(p,q) onto T(q,p). The swap belongs to the path-connected unitary group U(2). A path from the identity to the swap restricts to an ambient isotopy of the unit sphere.

**Wikipedia:** [Torus knot](https://en.wikipedia.org/wiki/Torus_knot). It says: “The (p,q) torus knot is equivalent to the (q,p) torus knot.”

**Sources:** none listed. No primary source with a working link was found.

### Conway's normalization fixes the Alexander polynomial by a skein relation

**Remember:** Fix the unknot and one crossing rule, and the polynomial follows.

*Makes the theorem clean to state or prove.* MSC 57K14 (Knot polynomials), 57K10. arXiv math.GT. Level 2: later undergraduate.

**Definition.** The Conway polynomial ∇ assigns each oriented link a polynomial in z and gives the unknot value 1. For every oriented skein triple it satisfies ∇(L₊) − ∇(L₋) = z∇(L₀). The diagrams agree outside one disk containing respectively a positive crossing, a negative crossing, or its oriented smoothing.

**Problem.** The Alexander–Conway polynomial of any oriented link can be computed from a diagram using the skein relation and the unknot value. It satisfies Δ(t²) = ∇(t − t⁻¹) for the suitably normalized Alexander polynomial.

**How the definition helps.** The unknot value fixes the scale of the skein recursion. Our own argument applies the rule to a curl to get zero for unlinks with multiple components. Crossing changes leading to an unlink then reduce the computation to smoothings with fewer crossings. Conway’s normalization identifies this invariant with the stated substitution in the Alexander polynomial.

**Wikipedia:** [Alexander polynomial](https://en.wikipedia.org/wiki/Alexander_polynomial). It says: “John Conway later rediscovered this in a different form and showed that the skein relation together with a choice of value on the unknot was enough to determine the polynomial.”

**Sources:**

- [J. W. Alexander, Topological invariants of knots and links, Transactions of the American Mathematical Society 30 (1928) 275–306](https://doi.org/10.1090/S0002-9947-1928-1501429-1)

### Correcting by the writhe turns the Kauffman bracket into the Jones polynomial

**Remember:** Twisting changes the bracket and the writhe together, so they cancel.

*True by definition.* MSC 57K14 (Knot polynomials), 57K10. arXiv math.GT. Level 2: later undergraduate.

**Definition.** The Kauffman bracket ⟨L⟩ of a link diagram is a Laurent polynomial in A, defined by smoothing each crossing in two ways. The writhe w(L) is the number of positive crossings minus the number of negative crossings of an oriented diagram. The normalized bracket X(L) is ⟨L⟩ multiplied by (−A³) raised to the power −w(L).

**Problem.** X(L) is an invariant of oriented links. After the substitution A = t⁻¹ᐟ⁴, it is the Jones polynomial.

**How the definition helps.** The correction factor is chosen to cancel the only move under which the bracket fails, so invariance follows at once. The bracket is unchanged by moves II and III but gains a factor −A³ or −A⁻³ under move I. The writhe changes by ±1 under move I and not under the others, so the product does not change. The work moves into the bracket's invariance under moves II and III.

**Wikipedia:** [Jones polynomial](https://en.wikipedia.org/wiki/Jones_polynomial), [Bracket polynomial](https://en.wikipedia.org/wiki/Bracket_polynomial). It says: “The bracket polynomial is known to change by a factor of −A±³ under a type I Reidemeister move. The definition of the X polynomial given above is designed to nullify this change”

**Sources:**

- [Louis H. Kauffman, State models and the Jones polynomial, Topology 26 (1987) 395–407](https://doi.org/10.1016/0040-9383(87)90009-7)
- [Vaughan F. R. Jones, A polynomial invariant for knots via von Neumann algebras, Bulletin of the American Mathematical Society 12 (1985) 103–111](https://doi.org/10.1090/S0273-0979-1985-15304-2)

### Seifert determinants make the Alexander polynomial blind to mirrors

**Remember:** A mirror transposes and negates, but the Alexander determinant keeps its class.

*True by definition.* MSC 57K14 (Knot polynomials), 57K10. arXiv math.GT. Level 2: later undergraduate.

**Definition.** Choose loops representing a basis for the first homology group of an oriented surface spanning the knot. Its Seifert matrix V records how each loop links with a copy of each basis loop pushed slightly to the positive side. The Alexander polynomial is det(V − tVᵀ), up to sign and a power of t.

**Problem.** A knot and its mirror have the same Alexander polynomial up to sign and a power of t.

**How the definition helps.** In our own calculation, reflection changes the matrix V into −Vᵀ. Reflection reverses linking signs and exchanges the two sides of the surface, which transposes the matrix. A determinant equals its transpose, and negating a matrix changes its determinant by at most a sign. The work lies in the rule for exchanging sides and the agreement with the original definition from the knot group.

**Wikipedia:** [Alexander polynomial](https://en.wikipedia.org/wiki/Alexander_polynomial). It says: “the Alexander polynomial of a knot is the same polynomial for the mirror image knot.”

**Sources:** none listed. No primary source with a working link was found.

### Smoothing states make Jones polynomials multiply under knot sum

**Remember:** When you join two knots, one circle from each state becomes one circle.

*True by definition.* MSC 57K14 (Knot polynomials), 57K10. arXiv math.GT. Level 2: later undergraduate.

**Definition.** The Kauffman bracket sums one term for each choice of smoothing at every crossing. Weight the two choices by A and A⁻¹, and weight every circle after the first by −A² − A⁻². The Jones polynomial multiplies this sum by (−A³)⁻ʷ and substitutes t = A⁻⁴, with w the signed crossing sum.

**Problem.** The Jones polynomial of a connected sum of knots is the product of their Jones polynomials.

**How the definition helps.** A smoothing of the joined diagram amounts to choosing a smoothing independently on each side. In our own count, two circles merge, so the counts of circles after the first add. The signed crossing counts also add, making both the bracket and its correction multiply. The work lies in proving agreement with the original Jones polynomial.

**Wikipedia:** [Bracket polynomial](https://en.wikipedia.org/wiki/Bracket_polynomial). It says: “adding a circle disjoint from the rest of the diagram multiplies the bracket”

**Sources:** none listed. No primary source with a working link was found.

### The bracket makes mirroring invert the Jones variable

**Remember:** A mirror swaps the two smoothing weights.

*True by definition.* MSC 57K14 (Knot polynomials), 57K10. arXiv math.GT. Level 2: later undergraduate.

**Definition.** The Kauffman bracket sums over ways to smooth all crossings, with weights A and A⁻¹ for the two smoothings. Each circle after the first contributes a factor −A² − A⁻². For the Jones polynomial, multiply by (−A³)⁻ʷ and use t = A⁻⁴, with w the signed crossing sum.

**Problem.** The Jones polynomial of a mirror knot is the original Jones polynomial with t replaced by t⁻¹.

**How the definition helps.** Reflection exchanges the two smoothings, so replacing A by A⁻¹ exchanges their weights and preserves the circle factor. Reflection also reverses the signed crossing count, giving the same substitution in the correction factor. The work lies in identifying the corrected bracket with the original Jones polynomial.

**Wikipedia:** [Jones polynomial](https://en.wikipedia.org/wiki/Jones_polynomial). It says: “the Jones polynomial of its mirror image is given by substitution of t⁻¹ for t”

**Sources:**

- [Louis H. Kauffman, State models and the Jones polynomial (1987)](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/kauffmanjones.pdf)

### The Jones skein rule at one ignores crossing changes

**Remember:** At one the smoothing term drops out.

*True by definition.* MSC 57K14 (Knot polynomials), 57K10. arXiv math.GT. Level 2: later undergraduate.

**Definition.** The Jones skein rule compares two directed diagrams differing at one crossing with the diagram obtained by smoothing that crossing along the arrows. Its equation is t⁻¹V(D₊) − tV(D₋) = (√t − 1/√t)V(D₀), where the subscripts denote positive, negative and smoothed crossings. The plain circle has value one.

**Problem.** For a link with m components, setting √t equal to 1 gives the Jones polynomial the value (−2) raised to the power m − 1.

**How the definition helps.** At t = 1 the smoothing term vanishes, so switching a crossing changes nothing. Our own reduction switches crossings to obtain an unlink with the same number of components. The bracket of that unlink is one factor −2 for each circle after the first. The main work is proving the skein rule and bracket give the same polynomial.

**Wikipedia:** [Skein relation](https://en.wikipedia.org/wiki/Skein_relation). It says: “are sufficient to calculate the polynomial recursively”

**Sources:**

- [Louis H. Kauffman, State models and the Jones polynomial (1987)](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/kauffmanjones.pdf)

### An outside normal orients a closed surface in space

**Remember:** The outside gives a normal, but a boundary can let the sides join.

*True by definition.* MSC 57K20 (2-dimensional topology (including mapping class groups of surfaces, Teichmüller theory, curve complexes, etc.)). arXiv math.GT. Level 2: later undergraduate.

**Definition.** For a smooth surface embedded in three-dimensional space, an orientation can be given by a continuous choice of unit normal. A unit normal is a length-one arrow perpendicular to the tangent plane.

**Problem.** Every smooth compact connected surface embedded in three-dimensional space with no boundary is orientable.

**How the definition helps.** The normal-vector definition lets us orient the whole surface by pointing outward everywhere. Our own argument uses the separation theorem for embedded closed surfaces to choose the outside consistently. The usual definition orients tangent planes, and the orientation of space identifies those choices with the two unit normals. An embedded Möbius strip has boundary and admits no such continuous normal.

**Wikipedia:** [Surface (topology)](https://en.wikipedia.org/wiki/Surface_%28topology%29). It says: “the boundary of a solid”

**Sources:** none listed. No primary source with a working link was found.

### Capping and counting boundary circles classifies compact surfaces

**Remember:** Capping gives the closed type, but keep count of the caps.

*Rules out counterexamples.* MSC 57K20 (2-dimensional topology (including mapping class groups of surfaces, Teichmüller theory, curve complexes, etc.)). arXiv math.GT. Level 2: later undergraduate.

**Definition.** Cap each boundary circle of a compact connected surface by gluing on a disk. Record the resulting closed surface and the number of disks used.

**Problem.** Two compact connected surfaces have the same topological type exactly when their capped surfaces have the same type and their boundary counts agree.

**How the definition helps.** Capping leaves just one extra number to record because the positions of the removed disks do not matter. A continuous deformation can carry any collection of disjoint disks on a connected surface to any other collection of the same size. In our own example, a disk and an annulus both cap to a sphere, but their boundary counts differ.

**Wikipedia:** [Surface (topology)](https://en.wikipedia.org/wiki/Surface_%28topology%29). It says: “An alternative classification of compact connected surfaces with boundary is by orientability, genus, and the number of boundary components.”

**Sources:** none listed. No primary source with a working link was found.

### Closed surfaces are classified by Euler characteristic and orientability

**Remember:** Compact, no edge, connected: then Euler characteristic and orientability say everything.

*Makes the theorem clean to state or prove.* MSC 57K20 (2-dimensional topology (including mapping class groups of surfaces, Teichmüller theory, curve complexes, etc.)). arXiv math.GT. Level 2: later undergraduate.

**Definition.** A closed surface is a compact two-dimensional manifold without boundary.

**Problem.** The classification of surfaces: every connected closed surface is a sphere with handles or a connected sum of projective planes.

**How the definition helps.** Closedness excludes the disk and surfaces with infinitely many handles. Our own explanation uses the classification theorem for compact connected surfaces. With no boundary circles to record, its orientable and nonorientable cases give exactly the stated list.

**Wikipedia:** [Surface (topology)](https://en.wikipedia.org/wiki/Surface_%28topology%29). It says: “In other words, Euler characteristic and orientability completely classify closed surfaces up to homeomorphism.”

**Sources:**

- [C. Thomassen, The Jordan–Schönflies theorem and the classification of surfaces, American Mathematical Monthly 99 (1992) 116–130](https://doi.org/10.2307/2324180)

### Doubling the flipped seam gives a torus cover

**Remember:** Two trips through a flipped seam restore orientation.

*True by definition.* MSC 57K20 (2-dimensional topology (including mapping class groups of surfaces, Teichmüller theory, curve complexes, etc.)). arXiv math.GT. Level 2: later undergraduate.

**Definition.** Build the Klein bottle from a cylinder by gluing its two circle ends with a reflection. Its orientation cover has two possible local orientations above each point.

**Problem.** The torus is the orientation double cover of the Klein bottle.

**How the definition helps.** The reflected seam reverses the local sense of clockwise, so crossing it switches orientation sheets. In our own construction we use two cylinders, one for each choice, and join them with a reflection at each seam. Two reflections cancel, leaving a cylinder with its ends joined without a twist, which is a torus. This describes the cover directly from the gluing, without classifying closed surfaces.

**Wikipedia:** [Klein bottle](https://en.wikipedia.org/wiki/Klein_bottle). It says: “There is a 2-1 covering map from the torus to the Klein bottle”

**Sources:** none listed. No primary source with a working link was found.

### Local orientations detect whether the double cover is connected

**Remember:** Two separate sheets mean clockwise can be chosen everywhere.

*True by definition.* MSC 57K20 (2-dimensional topology (including mapping class groups of surfaces, Teichmüller theory, curve complexes, etc.)). arXiv math.GT. Level 2: later undergraduate.

**Definition.** The orientation double cover of a surface puts two choices of local orientation over every point. Nearby choices lie in the same sheet when they give the same sense of rotation in a common coordinate chart.

**Problem.** The orientation double cover of a connected surface is connected exactly when the surface is nonorientable.

**How the definition helps.** The cover turns the usual test for consistent clockwise choices in overlapping charts into a test for two separate sheets. A global choice and its opposite give those sheets. Conversely, each component of a disconnected double cover of a connected surface maps onto the surface, so each contains one choice per point. Our own argument lifts paths from the surface to show that each component reaches every point.

**Wikipedia:** [Orientability](https://en.wikipedia.org/wiki/Orientability). It says: “Around each point of M there are two local orientations.”

**Sources:** none listed. No primary source with a working link was found.

### Polyhedra whose surface is a manifold are classified by Euler characteristic

**Remember:** If the surface looks like the plane near every point, surface topology applies.

*Rules out counterexamples.* MSC 57K20 (2-dimensional topology (including mapping class groups of surfaces, Teichmüller theory, curve complexes, etc.)), 57Q05. arXiv math.GT. Level 2: later undergraduate.

**Definition.** A closed polyhedral surface is a finite polygonal complex with two incident face sides at every edge and a single cyclic link at every vertex.

**Problem.** Euler characteristic and orientability determine the homeomorphism type of a connected closed polyhedral surface.

**How the definition helps.** The manifold condition lets the classification of closed surfaces apply directly. The condition rules out two cubes that share only one edge, and two cubes that share only one vertex. For example, an orientable polyhedron with χ = 2 must be a topological sphere. The deep part is the classification of surfaces itself; the definition only makes it available.

**Wikipedia:** [Polyhedron](https://en.wikipedia.org/wiki/Polyhedron). It says: “For polyhedra defined in these ways, the classification of manifolds implies that the topological type of the surface is completely determined by the combination of its Euler characteristic and orientability.”

**Sources:** none listed. No primary source with a working link was found.

### Sphere quotients give lens spaces cyclic fundamental groups

**Remember:** The group acting freely on the sphere becomes the fundamental group.

*True by definition.* MSC 57K30 (General topology of 3-manifolds), 57M10. arXiv math.GT. Level 2: later undergraduate.

**Definition.** Let p ≥ 2 and q be coprime integers. The lens space L(p;q) is the orbit space of the unit sphere in ℂ² under (z,w) ↦ (exp(2πi/p)z, exp(2πiq/p)w) and its powers.

**Problem.** For every q coprime to p, the fundamental group of L(p;q) is ℤ/pℤ.

**How the definition helps.** Our own argument uses the quotient map as the universal cover. A power fixing a nonzero first coordinate has exponent divisible by p. Coprimality gives the same conclusion for a nonzero second coordinate, so the cyclic action is free. The sphere S³ is simply connected, hence its deck group ℤ/pℤ gives the fundamental group.

**Wikipedia:** [Lens space](https://en.wikipedia.org/wiki/Lens_space). It says: “The fundamental group of all the lens spaces L(p;q₁,…, qₙ) is ℤ/pℤ independent of the qᵢ.”

**Sources:** none listed. No primary source with a working link was found.

### Sphere quotients identify lens spaces when q changes sign or inverts

**Remember:** Conjugate one coordinate to negate q, or swap coordinates to invert it.

*True by definition.* MSC 57K30 (General topology of 3-manifolds), 57M10. arXiv math.GT. Level 2: later undergraduate.

**Definition.** Let p ≥ 2 and q be coprime integers. The lens space L(p;q) is the orbit space of the unit sphere in ℂ² under (z,w) ↦ (exp(2πi/p)z, exp(2πiq/p)w) and its powers.

**Problem.** If q′ ≡ ±q or q′q ≡ ±1 modulo p, then L(p;q) and L(p;q′) are homeomorphic. The homeomorphism may reverse orientation.

**How the definition helps.** Our own proof carries orbits to orbits by changing coordinates. Conjugating the second coordinate replaces q by −q. For rq ≡ 1 modulo p, the rth power generates the same group. Swapping coordinates then gives the generator for r, so these changes give all the stated homeomorphisms.

**Wikipedia:** [Lens space](https://en.wikipedia.org/wiki/Lens_space). It says: “they are "obviously" homeomorphic, as one can easily produce a homeomorphism. It is harder to show that these are the only homeomorphic lens spaces.”

**Sources:** none listed. No primary source with a working link was found.

### A polygon gluing gives the surface group relations

**Remember:** Paired edges give generators, and the rim gives the relation.

*True by definition.* MSC 57M05 (Fundamental group, presentations, free differential calculus), 57K20. arXiv math.GT. Level 2: later undergraduate.

**Definition.** Present a closed surface by a polygon whose edges are paired, with all vertices glued to one point. Read the polygon boundary as a word in the directed pairs, using an inverse for an edge traversed against its arrow.

**Problem.** The fundamental group of this surface has one generator per edge pair. Its single relation sets the boundary word equal to the identity.

**How the definition helps.** The polygon replaces an analysis of all loops by a single boundary word. Its paired edges form a collection of circles meeting at one point, one circle for each generator. In our own argument, the van Kampen theorem says that filling the polygon imposes exactly the relation given by its boundary word. Finding the polygon and proving that theorem account for the topological work.

**nLab:** [surface](https://ncatlab.org/nlab/show/surface). It says: “the attaching map is a representative in this free group of the composition of group commutators”

**Sources:** none listed. No primary source with a working link was found.

### Knot complement groups are invariant without checking diagram moves

**Remember:** A homeomorphism of complements gives an isomorphism of knot groups.

*True by definition.* MSC 57M05 (Fundamental group, presentations, free differential calculus), 57K10. arXiv math.GT. Level 2: later undergraduate.

**Definition.** The knot group is the fundamental group of the complement of a knot in the 3-sphere. The diagram-based Wirtinger presentation uses one generator for each arc and one relation for each crossing.

**Problem.** Equivalent knots have isomorphic knot groups.

**How the definition helps.** The complement definition makes invariance a direct consequence of how homeomorphisms act on fundamental groups. A homeomorphism that takes one knot to the other restricts to a homeomorphism of their complements. Starting with the diagram presentation, one can instead check the local diagram changes called Reidemeister moves (our own). The work in connecting the two definitions is the van Kampen computation, which assembles the complement group from pieces (our own).

**Wikipedia:** [Knot group](https://en.wikipedia.org/wiki/Knot_group). It says: “Such a homeomorphism restricts onto a homeomorphism of the complements of the knots, and this restricted homeomorphism induces an isomorphism of fundamental groups.”

**Sources:** none listed. No primary source with a working link was found.

### The common torus gives the torus knot group relation

**Remember:** The same curve winds p times on one side and q on the other.

*True by definition.* MSC 57M05 (Fundamental group, presentations, free differential calculus), 57K10. arXiv math.GT. Level 2: later undergraduate.

**Definition.** On the standard torus in S³, a (p,q) torus knot is a simple closed curve of slope (p,q), for coprime positive integers p,q. Its oriented class winds p times around the core of one complementary solid torus and q times around the other.

**Problem.** The group of loops around the (p, q) torus knot has generators x and y and just one relation, xᵖ = yᑫ.

**How the definition helps.** The common torus gives one curve whose two winding counts supply the relation. In our own argument, remove a thin tube around the knot, leaving the solid torus pieces joined along an annulus. Its central loop represents the pth power on one side and the qth power on the other. The van Kampen theorem combines these two descriptions, avoiding a separate group calculation at every diagram crossing.

**Wikipedia:** [Torus knot](https://en.wikipedia.org/wiki/Torus_knot). It says: “the knot group of a torus knot has the presentation”

**Sources:** none listed. No primary source with a working link was found.

### Wirtinger generators give every knot group the same abelianization

**Remember:** Once generators commute, follow the knot and every arc gets the same name.

*True by definition.* MSC 57M05 (Fundamental group, presentations, free differential calculus), 57K10. arXiv math.GT. Level 2: later undergraduate.

**Definition.** The knot group records loops in the space around a knot, identifying loops that deform into each other while fixing their base point. Its Wirtinger presentation gives each diagram arc between undercrossings a generator. Each crossing makes the two underpassing generators conjugate by the overpassing generator or its inverse.

**Problem.** The abelianization of a knot group, formed by making all its elements commute, is the infinite cyclic group.

**How the definition helps.** Making generators commute turns every crossing relation into equality of the two underpassing generators. In our own calculation, following the knot identifies every generator, with no relation left to impose finite order. The Wirtinger theorem proves that this diagram calculation gives the group defined by loops in space.

**Wikipedia:** [Wirtinger presentation](https://en.wikipedia.org/wiki/Wirtinger_presentation). It says: “The abelianization of the group is the integers.”

**Sources:** none listed. No primary source with a working link was found.

### Closed lifts identify the subgroup of a covering

**Remember:** The loops that return upstairs are the ones from upstairs.

*True by definition.* MSC 57M10 (Covering spaces and low-dimensional topology), 55Q05. arXiv math.AT. Level 2: later undergraduate.

**Definition.** The fiber over a point is the set of points that map to it. Monodromy lets a loop class act on that fiber by sending a starting point to the endpoint of its lift.

**Problem.** For a covering, the loop classes that fix a chosen point form its monodromy stabilizer. This subgroup consists exactly of the classes of loops that project from loops upstairs based at that point.

**How the definition helps.** Our own argument reads the stabilizer from the lifted endpoint. A loop fixes the chosen point exactly when its lift there is closed. Conversely, a based loop upstairs is the unique lift of its projection from that point. Homotopy lifting makes this endpoint test independent of the representative.

**nLab:** [monodromy](https://ncatlab.org/nlab/show/monodromy). It says: “it is independent of the choice of γ in the given homotopy class of paths due to the homotopy-lifting property”

**Sources:** none listed. No primary source with a working link was found.

### Defining universal covers by a universal property makes them unique

**Remember:** Two objects that map uniquely to everything are uniquely isomorphic.

*True by definition.* MSC 57M10 (Covering spaces and low-dimensional topology). arXiv math.AT. Level 2: later undergraduate.

**Definition.** Fix a connected base B with a base point. Call a connected pointed cover universal if it has exactly one pointed map over B to every connected pointed cover. A pointed map over B commutes with the projections to B and keeps the base points.

**Problem.** A pointed universal cover is unique up to a unique isomorphism over the base.

**How the definition helps.** Our own argument applies the universal property in both directions. Each composite is a pointed map over B from a universal cover to itself. The identity is such a map, so uniqueness forces both composites to be identities.

**nLab:** [universal covering space](https://ncatlab.org/nlab/show/universal+covering+space). It says: “and that these are unique once we specify the image of a single point, which we may freely do (in the given fiber).”

**Sources:**

- [Allen Hatcher, Algebraic Topology, §1.3](https://pi.math.cornell.edu/~hatcher/AT/ATch1.pdf)

### Describing covers as coset actions makes the deck group N(H)/H

**Remember:** A deck map is a symmetry of the coset action.

*True by definition.* MSC 57M10 (Covering spaces and low-dimensional topology). arXiv math.AT. Level 2: later undergraduate.

**Definition.** For a connected cover of a path-connected, locally path-connected base B, lifting loops gives a right action of π₁(B,b) on the fiber. Choosing a point identifies the fiber with the right cosets Hg of its stabilizer H, with G = π₁(B,b) acting by right multiplication.

**Problem.** For such a cover, its group of deck transformations is isomorphic to N(H)/H, where N(H) consists of elements n satisfying nHn⁻¹ = H.

**How the definition helps.** Monodromy identifies deck transformations with equivariant permutations of the fiber. In our own calculation, sending H to Hn forces Hg to map to Hng. This gives a permutation exactly when H and Hn have the same stabilizer, equivalently nHn⁻¹ = H. Composition multiplies representatives, and the kernel is H.

**nLab:** [category of covering spaces](https://ncatlab.org/nlab/show/category+of+covering+spaces). It says: “For X a topological space then forming monodromy is a functor from the category of covering spaces over X to that of permutation groupoid representations of the fundamental groupoid of X”

**Sources:**

- [Allen Hatcher, Algebraic Topology, §1.3, Proposition 1.39](https://pi.math.cornell.edu/~hatcher/AT/ATch1.pdf)

### Disjoint translates turn orbit maps into coverings

**Remember:** Disjoint translates give distinct sheets.

*Rules out counterexamples.* MSC 57M10 (Covering spaces and low-dimensional topology), 55Q05. arXiv math.AT. Level 2: later undergraduate.

**Definition.** Suppose a group acts on a space by homeomorphisms. Each point has an open neighborhood disjoint from its translates by all nonidentity elements. The orbit space identifies points that differ by the action.

**Problem.** The orbit map of such an action is a covering map. If the original space is path-connected and simply connected, the orbit space has fundamental group isomorphic to the acting group.

**How the definition helps.** The disjoint translates give separate sheets above the image of each chosen neighborhood (our own). For a simply connected, path-connected covering space, lift endpoints classify loop classes (our own). Each endpoint is a unique translate of the starting point, and joining loops corresponds to multiplying group elements (our own). Free action alone fails for rational translations of the line because every orbit is dense (our own).

**nLab:** [fundamental theorem of covering spaces](https://ncatlab.org/nlab/show/fundamental+theorem+of+covering+spaces). It says: “the automorphism group of the universal covering space of X coincides with the fundamental group π₁(X,x) itself”

**Sources:** none listed. No primary source with a working link was found.

### Evenly covered neighborhoods guarantee lifts of whole paths

**Remember:** A cover gives all sheets at once, not one at a time.

*Rules out counterexamples.* MSC 57M10 (Covering spaces and low-dimensional topology). arXiv math.AT. Level 2: later undergraduate.

**Definition.** A covering map is a continuous surjection for which every base point has an evenly covered open neighborhood. Its inverse image consists of disjoint open sheets, each mapped homeomorphically onto that neighborhood. A lift is a path upstairs that projects to the given path.

**Problem.** Every path in the base of a covering map lifts uniquely once its starting point upstairs is chosen.

**How the definition helps.** Each sheet supplies a single inverse for an entire path segment inside its neighborhood (our own). Compactness of the time interval gives a finite subdivision into such segments (our own). The local homeomorphism t ↦ exp(2πit) from (0, 2) onto the circle lacks this guarantee (our own). One positive turn starting upstairs at 1 would end at the missing point 2 (our own).

**nLab:** [covering space](https://ncatlab.org/nlab/show/covering+space). It says: “by the triviality of the covering space over Uₓⱼ and the first argument above, there is a unique lift”

**Sources:** none listed. No primary source with a working link was found.

### Pairs with matching images let coverings change base spaces

**Remember:** Keep exactly the sheets lying over the image of each point.

*True by definition.* MSC 57M10 (Covering spaces and low-dimensional topology). arXiv math.AT. Level 2: later undergraduate.

**Definition.** Let p map a covering space E onto X, and let f map Y continuously to X. The pullback consists of pairs (y, e) with f(y) = p(e), with the topology inherited from Y × E. Its projection sends each pair to y.

**Problem.** Pulling back a covering map along any continuous map gives a covering map over the new base.

**How the definition helps.** Over the inverse image of an evenly covered neighborhood, each original sheet gives one new sheet (our own). If s sends a base point to its unique point on that sheet, the new sheet consists of pairs (y, s(f(y))) (our own). Projection is a homeomorphism there, with the displayed pair giving its continuous inverse (our own).

**nLab:** [pullback bundle](https://ncatlab.org/nlab/show/pullback+bundle). It says: “the pullback bundle f∗ E → Y is (if it exists) simply the pullback of p along f, regarded as a bundle over Y.”

**Sources:** none listed. No primary source with a working link was found.

### Path classes build a simply connected covering space

**Remember:** Paths with memory make every closed lift project to a trivial loop.

*True by definition.* MSC 57M10 (Covering spaces and low-dimensional topology), 55Q05. arXiv math.AT. Level 2: later undergraduate.

**Definition.** Take paths from a fixed point and identify paths that deform into each other with both endpoints fixed. Project each class to its endpoint. A basic neighborhood consists of all continuations inside a path-connected open set whose loops contract in the original space.

**Problem.** A path-connected, locally path-connected space has a simply connected cover if every point has a neighborhood whose loops contract in the space.

**How the definition helps.** The class of a path records exactly where its lift from the constant class ends (our own). Lifting initial segments reaches every class, so the model is path-connected (our own). A closed lift therefore projects to a loop that contracts, and lifting its contraction contracts the original loop (our own). The neighborhood condition makes endpoint projection a covering because continuations to the same nearby endpoint give the same class (our own).

**nLab:** [universal covering space](https://ncatlab.org/nlab/show/universal+covering+space). It says: “whose points are homotopy classes of paths in X starting at x₀, with the projection X⁽¹⁾ → X projecting to the endpoint of a path.”

**Sources:** none listed. No primary source with a working link was found.

### Allowing the empty manifold makes it a manifold of every dimension

**Remember:** With no points to check, the empty space passes every local test.

*True by definition. Confidence: low.* MSC 57N99 (Topological manifolds), 54A05. arXiv math.GT, math.GN. Level 2: later undergraduate.

**Definition.** For an integer n ≥ 0, a topological n-manifold is a second-countable Hausdorff space locally homeomorphic to ℝⁿ at every point.

**Problem.** The empty space is an n-manifold for every n. So the invariance of dimension, which says that a manifold has only one dimension, holds only for nonempty manifolds.

**How the definition helps.** The empty family is a countable base for the empty space. The Hausdorff and chart conditions hold vacuously, for there are no points to check. Our own observation is that this works for every n, so uniqueness of dimension requires nonemptiness.

**Paper or page:** [Empty Topological Space is n-Manifold](https://proofwiki.org/wiki/Empty_Topological_Space_is_n-Manifold), [Empty Topological Space is Hausdorff](https://proofwiki.org/wiki/Empty_Topological_Space_is_Hausdorff). It says: “Let T = (∅, {∅}) be the empty topological space. Then T is a topological n-manifold for every n ∈ ℕ.”

**Sources:**

- [ProofWiki, Empty Topological Space is n-Manifold](https://proofwiki.org/wiki/Empty_Topological_Space_is_n-Manifold)
- [ProofWiki, Empty Topological Space is Hausdorff](https://proofwiki.org/wiki/Empty_Topological_Space_is_Hausdorff)

### Cell counts make Euler characteristic additive for subcomplexes and quotients

**Remember:** Count shared cells once, and count the collapsed subcomplex as one point.

*True by definition.* MSC 57Q05 (General topology of complexes), 55N10. arXiv math.AT. Level 2: later undergraduate.

**Definition.** A finite CW complex is a space built by attaching finitely many cells. Its Euler characteristic χ is the alternating sum of cell counts by dimension. A subcomplex consists of cells together with their attaching boundaries.

**Problem.** For subcomplexes A and B of a finite CW complex, χ(A ∪ B) = χ(A) + χ(B) − χ(A ∩ B). For a nonempty subcomplex A of X, χ(X) = χ(A) + χ(X/A) − 1.

**How the definition helps.** The cell-count definition makes both formulas direct, because the constructions either share cells or replace cells by one point. In our own proof, the union counts shared cells once, and the quotient keeps the cells outside A and adds one point for A. With the Betti-number definition, one needs an exact sequence. The formula fails for arbitrary pieces: a point and its complement in the line have Euler characteristics 1 and 2, but the line has 1.

**Wikipedia:** [Euler characteristic](https://en.wikipedia.org/wiki/Euler_characteristic). It says: “If X is a finite CW-complex and A is a subcomplex, then χ(X) = χ(A) + χ(X/A) − 1.”

**Sources:** none listed. No primary source with a working link was found.

### Cell counts make Euler characteristic multiply on products

**Remember:** Cell dimensions add under products, so their alternating signs multiply.

*True by definition.* MSC 57Q05 (General topology of complexes), 55U25. arXiv math.AT. Level 2: later undergraduate.

**Definition.** A finite CW complex is a space built by attaching finitely many cells. Its Euler characteristic χ adds the counts in even dimensions and subtracts the counts in odd dimensions. This equals the alternating sum of the Betti numbers, the ranks of the homology groups.

**Problem.** For finite CW complexes M and N, χ(M × N) = χ(M) · χ(N).

**How the definition helps.** A product cell has dimension equal to the sum of its factor dimensions. In our own count its sign is therefore the product of their signs. Summing over all pairs of cells gives χ(M)χ(N).

**Wikipedia:** [Euler characteristic](https://en.wikipedia.org/wiki/Euler_characteristic). It says: “Also, the Euler characteristic of any product space M × N is χ(M × N) = χ(M) · χ(N).”

**Sources:** none listed. No primary source with a working link was found.

### Cell counts make Euler characteristic scale by the covering degree

**Remember:** Every cell downstairs gives one cell upstairs for each sheet.

*True by definition.* MSC 57Q05 (General topology of complexes), 57M10. arXiv math.AT, math.GT. Level 2: later undergraduate.

**Definition.** A finite CW complex is a space built by attaching finitely many cells, one dimension at a time. Its Euler characteristic χ is the alternating sum of its cell counts. This also equals the alternating sum of its Betti numbers, the ranks of the homology groups.

**Problem.** A k-sheeted cover of a finite CW complex has k times its Euler characteristic.

**How the definition helps.** Every cell downstairs contributes one cell of the same dimension per sheet. In our own argument, each characteristic map lifts from its disk in exactly k ways because the disk is simply connected. The lifted maps give the cells upstairs, so their alternating count is k times the original count.

**Wikipedia:** [Euler characteristic](https://en.wikipedia.org/wiki/Euler_characteristic). It says: “Similarly, for a k-sheeted covering space M̃ → M, one has χ(M̃) = k · χ(M).”

**Sources:** none listed. No primary source with a working link was found.

### The derivative frames regular fibers through a homotopy

**Remember:** One target basis frames both ends and the fiber between.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 57R15 (Specialized structures on manifolds (spin manifolds, framed manifolds, etc.)), 57R35. arXiv math.DG. Level 2: later undergraduate.

**Definition.** A normal framing chooses a smoothly varying basis of tangent directions modulo directions tangent to a submanifold. At a regular fiber, the derivative identifies this quotient with the tangent space at the target value.

**Problem.** Take smoothly homotopic maps from a compact manifold without boundary to a sphere and choose one basis at a common regular value. A submanifold in the product with an interval joins the two fibers and carries a normal framing extending both induced framings.

**How the definition helps.** One target basis specifies the framing along the entire joining fiber, including its ends (our own). Make the homotopy constant near the ends, then apply relative transversality to make the chosen value regular while preserving those collars (our own). The boundary preimage theorem gives the joining submanifold, and the derivative identifies its normal directions with the target tangent space (our own).

**nLab:** [Pontryagin's theorem](https://ncatlab.org/nlab/show/Pontryagin%27s+theorem). It says: “regular pre-image of 0”

**Sources:**

- [John Milnor, Topology from the Differentiable Viewpoint](https://people.dm.unipi.it/benedett/MILNOR-TDVPOINT.pdf)

### Boundary tangency keeps compact manifold flows complete

**Remember:** Tangent arrows stay on the boundary.

*Rules out counterexamples. Confidence: medium.* MSC 57R25 (Vector fields, frame fields in differential topology), 58A05. arXiv math.DG. Level 2: later undergraduate.

**Definition.** A vector field on a manifold with boundary is tangent to the boundary if its arrows at boundary points lie in the boundary tangent spaces.

**Problem.** On a compact smooth manifold with boundary, a smooth vector field tangent to the boundary has a flow for all real times.

**How the definition helps.** Tangency gives a solution within the boundary, and uniqueness prevents any other trajectory from crossing it (our own). Local existence and compactness then extend every solution past any finite endpoint (our own). Without tangency, the constant field 1 on the closed unit interval exits at its right endpoint (our own).

**nLab:** [flow of a vector field](https://ncatlab.org/nlab/show/flow+of+a+vector+field). It says: “Then v has a unique maximal flow”

**Wikipedia:** [Vector field](https://en.wikipedia.org/wiki/Vector_field). It says: “On a compact manifold without boundary, every smooth vector field is complete.”

**Sources:** none listed. No primary source with a working link was found.

### Compact support prevents a flow from escaping in finite time

**Remember:** Outside the support, flow lines stay put.

*Rules out counterexamples.* MSC 57R25 (Vector fields, frame fields in differential topology), 58A05. arXiv math.DG. Level 2: later undergraduate.

**Definition.** A vector field has compact support if the closure of the set where its arrows are nonzero is compact. A field is complete if its solution through every point exists for all real time.

**Problem.** Every smooth vector field with compact support on a manifold without boundary is complete.

**How the definition helps.** Uniqueness keeps each nonconstant trajectory inside the compact support because trajectories outside it are constant (our own). The continuation theorem extends a trajectory that stays in a compact set beyond any finite endpoint (our own). Without compact support, the equation x′ = x² starting at 1 has solution 1 ÷ (1 − t), which diverges at time one (our own).

**Wikipedia:** [Vector field](https://en.wikipedia.org/wiki/Vector_field). It says: “In particular, compactly supported vector fields on a manifold are complete.”

**Sources:** none listed. No primary source with a working link was found.

### The flow definition of the bracket detects commuting flows

**Remember:** Zero bracket means the first flow leaves the second field unchanged.

*True by definition.* MSC 57R25 (Vector fields, frame fields in differential topology), 58A05. arXiv math.DG. Level 2: later undergraduate.

**Definition.** The Lie bracket of fields X and Y is the derivative at time zero of Y pulled back along the flow of X. To pull back Y, move its arrows by the derivative of the inverse flow map.

**Problem.** Two smooth vector fields with flows defined for all time have commuting flows exactly when their Lie bracket is zero.

**How the definition helps.** The flow law transports the zero derivative at time zero to every later time (our own). The first flow then preserves the second field, and uniqueness of solutions makes it commute with the second flow (our own). Conversely, commuting flows preserve the second field and give zero derivative (our own). The comparison with the usual bracket uses the theorem that this derivative equals the commutator of the two directional derivatives (our own).

**nLab:** [Lie derivative](https://ncatlab.org/nlab/show/Lie+derivative), [Lie bracket of vector fields](https://ncatlab.org/nlab/show/Lie+bracket+of+vector+fields). It says: “Alternatively, we can set \[u,v\] = ℒᵤ v = −ℒᵥ u”

**Sources:** none listed. No primary source with a working link was found.

### Constant ends make smooth homotopies easy to join

**Remember:** Pause at each end before joining two families.

*True by definition.* MSC 57R35 (Differentiable mappings in differential topology), 58A05. arXiv math.DG. Level 2: later undergraduate.

**Definition.** A smooth homotopy is a smooth family of maps from time zero to time one. In the constant-end convention, the family equals its initial map near zero and its final map near one.

**Problem.** Smooth homotopy is an equivalence relation on smooth maps between two manifolds, including when the maps must stay fixed on a specified subset.

**How the definition helps.** The two families agree with the middle map on a neighborhood of the join (our own). Constant families give reflexivity, and reversing time gives symmetry (our own). To match the usual definition, use a smooth change of time that stays at zero and one near the ends (our own).

**Paper or page:** [Smooth Homotopy is an Equivalence Relation](https://proofwiki.org/wiki/Smooth_Homotopy_is_an_Equivalence_Relation). It says: “Then ∼ is an equivalence relation.”

**Sources:**

- [John Milnor, Topology from the Differentiable Viewpoint](https://people.dm.unipi.it/benedett/MILNOR-TDVPOINT.pdf)

### Joint transversality excludes families with only bad parameters

**Remember:** Source and parameter derivatives together supply every direction normal to the submanifold.

*Rules out counterexamples.* MSC 57R35 (Differentiable mappings in differential topology), 58K05. arXiv math.DG. Level 2: later undergraduate.

**Definition.** Let F: M × P → N be smooth and S an embedded submanifold of N. Joint transversality means that at every (x,p) with y = F(x,p) in S, the image of dF plus TᵧS equals TᵧN.

**Problem.** For a jointly transverse smooth family on manifolds without boundary, almost every parameter gives a transverse map. The exceptional parameters form a set of measure zero in local coordinates.

**How the definition helps.** Joint transversality makes the full inverse image a manifold on which we can project to the parameter (our own). At a regular projection value, source directions alone supply all missing directions (our own). Sard’s theorem says the other parameter values have measure zero (our own). A family constantly equal to zero in ℝ fails transversality to the point zero for every parameter (our own).

**nLab:** [transversal maps](https://ncatlab.org/nlab/show/transversal+maps). It says: “the differentials of f and g in these points span the entire tangent space at z in the sense that”

**Sources:**

- [Victor Guillemin and Alan Pollack, Differential Topology](https://web.math.ucsb.edu/~bigelow/books/guillemin_pollack.pdf)

### Properness makes regular fiber counts locally constant

**Remember:** Compact preimages keep extra inverse images from slipping away.

*Rules out counterexamples.* MSC 57R35 (Differentiable mappings in differential topology). arXiv math.DG. Level 2: later undergraduate.

**Definition.** A smooth map is proper if the inverse image of every compact set is compact. For manifolds of equal dimension, a value is regular if the derivative is invertible at every preimage.

**Problem.** For a proper smooth map between manifolds of equal dimension without boundary, the number of preimages is finite and constant near each regular value.

**How the definition helps.** Properness makes the discrete regular fiber compact, so finitely many local inverses cover it (our own). The complement of their open patches has closed image because the map is proper (our own). Avoiding that image excludes extra preimages nearby (our own). Without properness, t ↦ (cos t, sin t) on (0, 4π) hits (1, 0) once and nearby circle points twice (our own).

**nLab:** [local diffeomorphism](https://ncatlab.org/nlab/show/local+diffeomorphism). It says: “f restricted to U is a diffeomorphism onto its image”

**Sources:**

- [John Milnor, Topology from the Differentiable Viewpoint](https://people.dm.unipi.it/benedett/MILNOR-TDVPOINT.pdf)

### Regular values need not be hit for Sard’s theorem

**Remember:** No preimages means no critical preimages.

*Makes the theorem clean to state or prove.* MSC 57R35 (Differentiable mappings in differential topology), 58K05. arXiv math.DG. Level 2: later undergraduate.

**Definition.** A target point is a regular value if the derivative maps onto the target tangent space at every preimage. A point outside the image satisfies this condition because it has no preimages.

**Problem.** Every nonempty open part of the target contains a regular value of a smooth map between manifolds without boundary. If the source has lower dimension than the target, every regular value lies outside the image.

**How the definition helps.** The definition counts every point that the map misses as regular (our own). Sard’s theorem supplies the hard part by showing that the critical values have measure zero (our own). With an image-only definition, even the inclusion of a line into a plane would have no regular values (our own).

**nLab:** [Sard's theorem](https://ncatlab.org/nlab/show/Sard%27s+theorem). It says: “Then the set of critical values in N is a meager subset (alias first category subset) and a negligible subset (alias measure zero subset) of N.”

**Paper or page:** [Generalizing Andreev's Theorem via circle patterns](https://arxiv.org/abs/2308.14386v2). It says: “has zero measure in N.”

**Sources:**

- [John Milnor, Topology from the Differentiable Viewpoint](https://people.dm.unipi.it/benedett/MILNOR-TDVPOINT.pdf)
- [Arthur Sard, The measure of the critical values of differentiable maps (1942)](https://doi.org/10.1090/S0002-9904-1942-07811-6)

### Regular values rule out crossing level sets

**Remember:** Full rank makes a level set a coordinate slice.

*Rules out counterexamples.* MSC 57R35 (Differentiable mappings in differential topology), 58A05. arXiv math.DG. Level 2: later undergraduate.

**Definition.** A target point is a regular value if the derivative maps onto its whole tangent space at each preimage. The fiber is the set of all those preimages.

**Problem.** For a smooth map between manifolds without boundary, each nonempty regular fiber is an embedded submanifold, locally a coordinate slice. Its dimension equals the source dimension minus the target dimension.

**How the definition helps.** The rank condition lets the map serve as a coordinate projection near the fiber (our own). The inverse function theorem supplies those coordinates (our own). For a counterexample without the condition, the zero fiber of (x, y) ↦ xy is two crossing axes (our own).

**nLab:** [regular value](https://ncatlab.org/nlab/show/regular+value). It says: “at a regular value q ∈ Y is a smooth manifold of X.”

**Paper or page:** [Diffgeo: Manifolds](https://venhance.github.io/napkin/Napkin.pdf). It says: “Then M is a manifold of dimension n−m.”

**Sources:**

- [Victor Guillemin and Alan Pollack, Differential Topology](https://web.math.ucsb.edu/~bigelow/books/guillemin_pollack.pdf)

### Regularity on the boundary rules out touching fibers

**Remember:** Check the rank again using only boundary directions.

*Rules out counterexamples. Confidence: medium.* MSC 57R35 (Differentiable mappings in differential topology), 57R40. arXiv math.DG. Level 2: later undergraduate.

**Definition.** A target point is regular for a map if the derivative maps onto the target tangent space at every preimage. Regularity for the boundary restriction requires this even when only vectors tangent to the boundary are used.

**Problem.** Let a smooth map have a source with boundary and a target without boundary. A nonempty fiber regular for both the map and its boundary restriction is an embedded manifold with boundary exactly on the source boundary.

**How the definition helps.** Surjectivity along the boundary lets the map be a projection without using the half-space coordinate (our own). The inverse function theorem supplies those coordinates (our own). Without the boundary condition, the zero fiber of y − x² on y ≥ 0 touches the edge but has no boundary there (our own).

**Paper or page:** [Bounded domains in the 3-dimensional space](https://arxiv.org/abs/2511.01278v1). It says: “the inverse image F⁻¹(z) is the domain with boundary (F\|∂M)⁻¹(z).”

**Sources:**

- [John Milnor, Topology from the Differentiable Viewpoint](https://people.dm.unipi.it/benedett/MILNOR-TDVPOINT.pdf)

### Transversality gives intersections the expected dimension

**Remember:** Spanning tangent spaces make codimensions add.

*Rules out counterexamples.* MSC 57R35 (Differentiable mappings in differential topology), 57R40. arXiv math.DG. Level 2: later undergraduate.

**Definition.** Two embedded submanifolds meet transversely if their tangent spaces together span the ambient tangent space at every common point. Codimension is the ambient dimension minus the submanifold dimension.

**Problem.** In a smooth manifold without boundary, a nonempty transverse intersection of two embedded submanifolds without boundary is an embedded submanifold. Its codimension is the sum of their codimensions.

**How the definition helps.** Transversality keeps the two sets of local defining equations independent at every common point (our own). The regular value theorem then gives one dimension lost per equation (our own). Without transversality, the surfaces z = 0 and z = xy meet in two crossing lines (our own).

**Wikipedia:** [Transversality](https://en.wikipedia.org/wiki/Transversality). It says: “their separate tangent spaces at that point together generate the tangent space of the ambient manifold at that point”

**Sources:**

- [Victor Guillemin and Alan Pollack, Differential Topology](https://web.math.ucsb.edu/~bigelow/books/guillemin_pollack.pdf)

### Closed embedded submanifolds admit smooth extensions

**Remember:** Local slices extend functions nearby, and closedness gives an open patch everywhere else.

*Rules out counterexamples.* MSC 57R40 (Embeddings in differential topology), 58A05. arXiv math.DG. Level 2: later undergraduate.

**Definition.** An embedded submanifold looks in local coordinates like a slice where some coordinates vanish. It is closed if its complement is open in the ambient manifold.

**Problem.** Every smooth real function on an embedded submanifold without boundary extends smoothly to the ambient manifold if the submanifold is closed as a subset.

**How the definition helps.** Closedness supplies an open patch for every point outside the submanifold (our own). Extend the function in each slice chart by ignoring the extra coordinates, and use zero on the open complement (our own). A smooth partition of unity blends these extensions with locally finite weights summing to one and supported inside the patches (our own). Without closedness, 1 ÷ x on (0, 1) cannot extend continuously to ℝ (our own).

**nLab:** [partition of unity](https://ncatlab.org/nlab/show/partition+of+unity). It says: “Paracompact smooth manifolds admit locally finite smooth partitions of unity subordinate to any open cover”

**Sources:** none listed. No primary source with a working link was found.

### Second countability excludes the long line from the embedding theorem

**Remember:** Every Euclidean subspace has a countable base.

*Rules out counterexamples.* MSC 57R40 (Embeddings in differential topology), 58A05. arXiv math.DG. Level 2: later undergraduate.

**Definition.** A space is second countable if it has a countable family of open sets whose unions give every open set. Smooth manifolds require this property, local Euclidean coordinates and disjoint neighborhoods for distinct points.

**Problem.** Every finite-dimensional smooth manifold without boundary admits a smooth embedding into some Euclidean space. An embedding identifies the manifold smoothly with a submanifold carrying the topology inherited from that space.

**How the definition helps.** The countable base rules out the long line, which has smooth local charts but no countable base (our own). Every Euclidean subspace inherits a countable base from rational balls (our own). Whitney’s embedding theorem carries the work of constructing an embedding under the manifold assumptions (our own).

**nLab:** [Whitney embedding theorem](https://ncatlab.org/nlab/show/Whitney+embedding+theorem). It says: “It is easier to see that every smooth manifold embeds into the Euclidean space of some dimension”

**Sources:** none listed. No primary source with a working link was found.

### Slice charts make smooth graphs embedded submanifolds

**Remember:** Subtract the graph height to get a flat slice.

*True by definition.* MSC 57R40 (Embeddings in differential topology), 58A05. arXiv math.DG. Level 2: later undergraduate.

**Definition.** An embedded submanifold is a subset that ambient coordinates turn locally into a slice. In a slice, the extra coordinates are all zero.

**Problem.** The graph of a smooth map between manifolds without boundary is an embedded submanifold of their product. Projection onto the source gives a smooth bijection with smooth inverse.

**How the definition helps.** Subtracting the map in target coordinates turns its graph into a zero slice (our own). Adding the map back gives a smooth inverse to that coordinate change (our own). The constant rank theorem supplies the general equivalence of the slice and embedding definitions (our own).

**nLab:** [submanifold](https://ncatlab.org/nlab/show/submanifold). It says: “For each point σ ∈ Σ there is a coordinate chart”

**Sources:** none listed. No primary source with a working link was found.

### Tangent-map degree makes turning number invariant through immersed curves

**Remember:** Nonzero velocity keeps the unit tangent map defined throughout the deformation.

*True by definition.* MSC 57R42 (Immersions in differential topology), 55M25, 53A04. arXiv math.GT, math.DG. Level 2: later undergraduate.

**Definition.** For a smooth immersion γ: S¹ → ℝ², the turning number is the degree of the unit tangent map γ′/‖γ′‖: S¹ → S¹.

**Problem.** The turning number stays fixed in a deformation through immersed closed plane curves with continuously varying velocities.

**How the definition helps.** The nonzero velocities give a homotopy of unit tangent maps throughout the deformation. Homotopy invariance of degree gives the same turning number at both ends.

**Wikipedia:** [Regular homotopy](https://en.wikipedia.org/wiki/Regular_homotopy). It says: “two immersions are regularly homotopic if and only if they have the same turning number – equivalently, total curvature; equivalently, if and only if their Gauss maps have the same degree/winding number.”

**Sources:** none listed. No primary source with a working link was found.

### The critical point condition makes the Hessian intrinsic

**Remember:** Zero first derivatives remove the extra terms.

*Rules out counterexamples.* MSC 57R70 (Critical points and critical submanifolds in differential topology), 58A05. arXiv math.DG. Level 2: later undergraduate.

**Definition.** A critical point of a smooth real function is a point where its first derivative vanishes. In local coordinates, the Hessian matrix lists the second partial derivatives.

**Problem.** At a critical point, the Hessian matrices in different coordinates represent the same symmetric bilinear form on tangent vectors. They have the same counts of positive and negative eigenvalues.

**How the definition helps.** At a critical point, the zero first derivative cancels the extra term in the second derivative chain rule (our own calculation). The remaining term changes both vector inputs by the same invertible linear map. Equality of mixed partials gives symmetry, and Sylvester’s law of inertia preserves the sign counts. At zero, f(x) = x has second derivative zero in x but two in y when x = y + y².

**nLab:** [Hessian](https://ncatlab.org/nlab/show/Hessian). It says: “descends to the tangent space at x, and is pronounced as the Hessian of φ at the critical point x.”

**Sources:** none listed. No primary source with a working link was found.

### Dihedral representations make Fox coloring counts link invariants

**Remember:** Fox colorings count maps that send meridians to reflections.

*True by definition. Confidence: medium.* MSC 57K10 (Knot theory), 57M05. arXiv math.GT. Level 3: graduate.

**Definition.** For an integer n ≥ 3, a Fox n-coloring is a homomorphism from the link group to the symmetry group of a regular n-gon. It must send every meridian to a reflection.

**Problem.** The number of Fox n-colorings, including the constant colorings, does not depend on the link diagram. In particular, the existence of a nonconstant Fox 3-coloring is a link invariant.

**How the definition helps.** Our own argument counts homomorphisms preserving the meridian condition, which link equivalences preserve. Label i represents the reflection tsⁱ for a fixed reflection t and generating rotation s. Each Wirtinger crossing relation gives twice the overpassing label as the sum of the underpassing labels modulo n. Exactly n colorings are constant, so the total count also detects nonconstant colorings.

**Wikipedia:** [Fox n-coloring](https://en.wikipedia.org/wiki/Fox_n-coloring). It says: “Such reflections correspond to elements tsⁱ of the dihedral group, where t is a reflection and s is a generating (2π/n) rotation of the n-gon.”

**Sources:** none listed. No primary source with a working link was found.

### Gauss map degree makes linking number invariant under isotopy

**Remember:** The knots stay apart, so their Gauss map keeps its degree.

*True by definition.* MSC 57K10 (Knot theory), 55M25. arXiv math.GT, math.AT. Level 3: graduate.

**Definition.** Take two disjoint, oriented smooth knots in three-dimensional space. The Gauss map sends a pair of points, one on each knot, to the unit vector from the second to the first. Linking number is its degree, a signed count of preimages taken where the derivative is invertible at each preimage.

**Problem.** Linking number stays fixed during an isotopy, a motion through disjoint knots.

**How the definition helps.** The degree definition gives invariance, because moving disjoint knots continuously deforms their Gauss map. With the diagram definition, one checks each local change that connects diagrams of the same link. The work shifts to proving that degree is a homotopy invariant and that the two definitions agree.

**Wikipedia:** [Linking number](https://en.wikipedia.org/wiki/Linking_number). It says: “Isotopy invariance of the linking number is automatically obtained as the degree is invariant under homotopic maps. Any other regular value would give the same number, so the linking number doesn't depend on any particular link diagram.”

**Sources:**

- [Ricca, R. L.; Nipoti, B. (2011). Gauss' linking number revisited. Journal of Knot Theory and Its Ramifications 20(10), 1325–1343.](https://doi.org/10.1142/S0218216511009261)

### Knot complement homology makes linking number an integer

**Remember:** A loop in the knot complement represents an integer multiple of the generator.

*True by definition.* MSC 57K10 (Knot theory), 55N10. arXiv math.GT. Level 3: graduate.

**Definition.** Let K be an oriented knot, a smoothly embedded circle in three-dimensional space. The first homology of its complement is ℤ, generated by a small loop that circles K once in the positive direction. The linking number of a disjoint oriented loop L with K is the integer giving the class of L in that group.

**Problem.** The linking number is an integer. So in any diagram, the signed count of crossings between two knots is even.

**How the definition helps.** The class of L has an integer coefficient in the positive meridian basis. By the crossing formula, the signed count of mixed crossings equals twice that coefficient. Our own explanation uses the complement homology computation and its agreement with the crossing formula.

**nLab:** [linking number](https://ncatlab.org/nlab/show/linking+number). It says: “We deduce that n₁ − n₂ = 0 in all cases. Hence n₁ = n₂, and the linking number is equal to ½(2n₁) = n₁ = n₂.”

**Wikipedia:** [Linking number](https://en.wikipedia.org/wiki/Linking_number). It says: “More generally, if either of the curves is simple, then the first homology group of its complement is isomorphic to Z. In this case, the linking number is determined by the homology class of the other curve.”

**Sources:** none listed. No primary source with a working link was found.

### Knot genus from orientable surfaces shows the unknot is not a sum

**Remember:** Genus adds under knot sum, so nothing cancels a real knot.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 57K10 (Knot theory), 57K14. arXiv math.GT. Level 3: graduate.

**Definition.** The genus of a tame knot in S³ is the least genus among compact connected orientable surfaces embedded in S³ with that knot as boundary.

**Problem.** Knot genus is additive: the genus of K₁ \# K₂ is the genus of K₁ plus the genus of K₂. So a sum of two nontrivial knots is never the unknot.

**How the definition helps.** Our own deduction uses Schubert’s genus additivity theorem for the equality. A genus-zero Seifert surface with one boundary component is a disk. Only the unknot bounds an embedded disk, so each nontrivial summand has positive genus and their sum does too.

**Wikipedia:** [Seifert surface](https://en.wikipedia.org/wiki/Seifert_surface), [Connected sum](https://en.wikipedia.org/wiki/Connected_sum). It says: “In three dimensions, the unknot cannot be written as the sum of two non-trivial knots. This fact follows from additivity of knot genus”

**Sources:**

- [Herbert Seifert, Über das Geschlecht von Knoten, Mathematische Annalen 110 (1935) 571–592](https://doi.org/10.1007/BF01448044)

### Orientable Seifert surfaces give every knot a Seifert matrix

**Remember:** Two sides let you push loops off the surface and count linking.

*Makes the theorem clean to state or prove.* MSC 57K10 (Knot theory), 57K14. arXiv math.GT. Level 3: graduate.

**Definition.** A Seifert surface for a tame oriented link in S³ is a compact connected oriented surface embedded in S³ whose oriented boundary equals the link.

**Problem.** Every tame oriented link admits a Seifert surface by Seifert’s construction. Its integral Seifert matrix V satisfies V − Vᵀ = the intersection matrix with compatible conventions. Its one-variable Alexander polynomial is det(V − tVᵀ) up to a unit.

**How the definition helps.** Our own explanation uses Seifert’s algorithm for existence, connecting separate surface components by tubes if needed. Linking integral basis cycles with positive normal push-offs gives integer matrix entries. The difference between the positive and negative push-off pairings gives the intersection form with compatible signs. The Seifert matrix formula identifies det(V − tVᵀ) with the one-variable Alexander polynomial up to a unit.

**Wikipedia:** [Seifert surface](https://en.wikipedia.org/wiki/Seifert_surface). It says: “The standard Möbius strip has the unknot for a boundary but is not a Seifert surface for the unknot because it is not orientable.”

**Sources:**

- [Herbert Seifert, Über das Geschlecht von Knoten, Mathematische Annalen 110 (1935) 571–592](https://doi.org/10.1007/BF01448044)

### Oriented knots factor uniquely into prime knots

**Remember:** Knots add as whole numbers multiply, with the unknot as 1.

*Makes the theorem clean to state or prove.* MSC 57K10 (Knot theory). arXiv math.GT. Level 3: graduate.

**Definition.** Form the connected sum of two oriented knots in separate balls by removing a small arc from each and joining corresponding ends without twisting. A prime knot is a nontrivial knot admitting no connected sum decomposition with both summands nontrivial.

**Problem.** Every nontrivial tame oriented knot in S³ is a connected sum of prime knots uniquely up to oriented knot type and order.

**How the definition helps.** Orientation fixes the joining convention, so prime decomposition is a statement about oriented knot types. In our own comparison, excluding the unknot prevents insertion of arbitrary unit factors. Schubert’s prime decomposition theorem provides existence and uniqueness.

**Wikipedia:** [Connected sum](https://en.wikipedia.org/wiki/Connected_sum), [Prime knot](https://en.wikipedia.org/wiki/Prime_knot). It says: “Under this operation, oriented knots in 3-space form a commutative monoid with unique prime factorization, which allows us to define what is meant by a prime knot.”

**Sources:** none listed. No primary source with a working link was found.

### Reduced alternating diagrams minimize crossings

**Remember:** Alternate over and under, and exclude crossings cut off by a circle.

*Rules out counterexamples.* MSC 57K10 (Knot theory), 57K14. arXiv math.GT. Level 3: graduate.

**Definition.** A link diagram is alternating if overcrossings and undercrossings alternate as one follows each component. It is reduced if no simple closed curve crosses the diagram only at one crossing and separates its four strands into two pairs.

**Problem.** Every reduced alternating diagram of a knot realizes the knot’s crossing number, the least number of crossings in any diagram.

**How the definition helps.** Reducedness excludes a removable twist, such as a one-crossing drawing of the unknot. Our own argument uses the Jones span bound for every knot diagram. The span equals the crossing count for a reduced alternating knot diagram, so no diagram of that knot has fewer crossings.

**Wikipedia:** [Tait conjectures](https://en.wikipedia.org/wiki/Tait_conjectures). It says: “a knot diagram is called "reduced" if all the "isthmi", or "nugatory crossings" have been removed.”

**Sources:**

- [Louis H. Kauffman, State models and the Jones polynomial (1987).](https://doi.org/10.1016/0040-9383(87)90009-7)

### Signed crossing counts make linking number symmetric

**Remember:** Swapping the knot names changes neither the crossings nor their signs.

*True by definition. Confidence: medium.* MSC 57K10 (Knot theory). arXiv math.GT. Level 3: graduate.

**Definition.** Take a plane diagram of two disjoint oriented knots. The directions of the two strands and which passes over the other give each crossing a sign. The linking number is half the sum of the signs at crossings between the knots.

**Problem.** The linking number is unchanged when the two knots switch roles.

**How the definition helps.** The crossing definition makes symmetry immediate because switching the knot names changes neither the crossing set nor the signs. In our own comparison, the surface definition instead needs a proof that using a surface for either knot gives the same count. The nLab checks that the crossing count survives the local moves between diagrams of the same link. The work also includes showing that the crossing and surface definitions agree.

**nLab:** [linking number](https://ncatlab.org/nlab/show/linking+number). It says: “The linking number of Cᵢ with Cⱼ where Cᵢ and Cⱼ are distinct components of D, is to be one half of the sum of the signs of the crossings of Cᵢ with Cⱼ”

**Sources:** none listed. No primary source with a working link was found.

### The Alexander covering module gives monic polynomials for fibered knots

**Remember:** A fibered knot turns the Alexander polynomial into a characteristic polynomial.

*True by definition.* MSC 57K10 (Knot theory), 57K14. arXiv math.GT. Level 3: graduate.

**Definition.** A fibered knot exterior is a surface bundle over S¹ with connected fiber F and return map g. Its Alexander module is the first integral homology of the infinite cyclic cover, with t acting by deck translation. Its Alexander polynomial generates the zeroth Fitting ideal of that module over ℤ\[t,t⁻¹\].

**Problem.** For a fibered knot the Alexander polynomial is det(tI − A), up to a factor ±tⁿ. Here A is the action of g on H₁(F; ℤ), with the shift t chosen to match it. This determinant is monic and has constant term ±1.

**How the definition helps.** Unwrapping the circle gives the infinite cyclic cover F × ℝ. In our own calculation its first homology is free abelian, with t acting by the integral automorphism A induced by g. Thus tI − A is a square presentation, whose determinant generates the ideal. Its leading coefficient is one and its constant term is ±1 since det(A) = ±1.

**Wikipedia:** [Fibered knot](https://en.wikipedia.org/wiki/Fibered_knot), [Alexander polynomial](https://en.wikipedia.org/wiki/Alexander_polynomial). It says: “The Alexander polynomial of a fibered knot is monic, i.e. the coefficients of the highest and lowest powers of t are plus or minus 1.”

**Sources:** none listed. No primary source with a working link was found.

### Knot quandle maps make diagram coloring counts invariant

**Remember:** Count maps from the knot quandle instead of checking local diagram moves.

*True by definition.* MSC 57K12 (Generalized knots (virtual knots, welded knots, quandles, etc.)), 57K10. arXiv math.GT. Level 3: graduate.

**Definition.** For a finite quandle Q, a Q-coloring of an oriented knot diagram assigns an element of Q to every arc between undercrossings. If the overarc has color b, crossing its positive normal takes the underarc color a to a ▷ b.

**Problem.** For any finite quandle Q, the number of Q-colorings does not depend on the oriented knot diagram.

**How the definition helps.** The fundamental quandle presentation identifies these assignments with homomorphisms from the knot quandle to Q. Each arc gives one generator and each crossing gives its coloring relation. Our own deduction uses invariance of the fundamental quandle under oriented knot equivalence, so every diagram counts the same homomorphisms.

**Wikipedia:** [Racks and quandles](https://en.wikipedia.org/wiki/Racks_and_quandles). It says: “Less powerful but more easily computable invariants of knots may be obtained by counting the homomorphisms from the knot quandle to a fixed quandle Q.”

**Sources:**

- [David Joyce, A classifying invariant of knots, the knot quandle, Journal of Pure and Applied Algebra (1982)](https://doi.org/10.1016/0022-4049(82)90077-9)

### Alexander polynomials from covers detect perfect knot commutator subgroups

**Remember:** Alexander polynomial one means the covering module is zero.

*True by definition.* MSC 57K14 (Knot polynomials), 57M05. arXiv math.GT. Level 3: graduate.

**Definition.** Let G be the knot complement group and G′ its commutator subgroup, generated by all products aba⁻¹b⁻¹. In the cover X with fundamental group G′, shifting sheets acts as t on H₁(X; ℤ), making it a module over ℤ\[t, t⁻¹\]. The Alexander polynomial generates the zeroth Fitting ideal, the ideal of full-size minors of a square matrix presenting this module.

**Problem.** The Alexander polynomial is a unit, so it can be normalized to 1, exactly when G′ equals its own commutator subgroup.

**How the definition helps.** Our own argument identifies H₁(X; ℤ) with the abelianization of G′. The knot module has a square presentation, so its determinant is a unit exactly when the presentation matrix is invertible. This holds exactly when its cokernel vanishes, equivalently when G′ equals its commutator subgroup.

**Wikipedia:** [Alexander polynomial](https://en.wikipedia.org/wiki/Alexander_polynomial). It says: “Since the Alexander ideal is principal, Δₖ(t) = 1 if and only if the commutator subgroup of the knot group is perfect (i.e. equal to its own commutator subgroup).”

**Sources:** none listed. No primary source with a working link was found.

### Seifert matrices multiply Alexander polynomials and add signatures under connected sum

**Remember:** Join the surfaces and the Seifert matrices sit in separate blocks.

*True by definition.* MSC 57K14 (Knot polynomials), 57K10. arXiv math.GT. Level 3: graduate.

**Definition.** Choose a compact connected oriented surface embedded in S³ with the knot as oriented boundary. Set Vᵢⱼ to the linking number of basis cycle i with a positive push-off of basis cycle j in integral first homology. Define the Alexander polynomial by det(V − tVᵀ) up to ±tⁿ and the signature by the signature of V + Vᵀ.

**Problem.** For the connected sum K \# J, the Alexander polynomial is the product, up to a unit ±tⁿ. The knot signature is the sum.

**How the definition helps.** In our own construction a band across a separating sphere joins the two spanning surfaces. Their basis cycles together form a basis, and mixed linking numbers vanish because the sphere separates the cycles. The resulting Seifert matrix is block diagonal. Determinants multiply across blocks, and signatures add.

**Paper or page:** [An Elementary Proof of the Signature of Satellite Knots](https://arxiv.org/abs/2203.03217v2). It says: “If K′ is a satellite of J by K and n is the winding number of the embedding of K in the solid torus, then a Seifert matrix A for K′ is given by the block matrix”

**Sources:**

- [Daniel Carter, An Elementary Proof of the Signature of Satellite Knots](https://arxiv.org/abs/2203.03217v2)

### The HOMFLY skein definition gives Jones and Conway specializations

**Remember:** Specialize the HOMFLY relation and the unknot value identifies the invariant.

*True by definition.* MSC 57K14 (Knot polynomials). arXiv math.GT. Level 3: graduate.

**Definition.** The HOMFLY polynomial P equals 1 on the unknot and obeys aP(L₊) − a⁻¹P(L₋) = zP(L₀). The three oriented links agree except at one crossing, where it is positive, negative or smoothed. Earlier definitions used operator algebras for Jones and a diagram matrix for Alexander.

**Problem.** Setting a = 1 in the HOMFLY polynomial gives the Alexander–Conway polynomial. Setting a = s⁻² and z = s − s⁻¹ gives the normalized Jones polynomial with t = s².

**How the definition helps.** The skein definition makes each specialization a check of one local relation and one unknot value (our own). Changing crossings until the diagram is an unlink, the relation determines the invariant from diagrams with fewer crossings (our own). The stated substitutions turn the HOMFLY relation into the Conway and Jones relations (our own). The work lies in the existence of the HOMFLY invariant and in proving that the older polynomials obey their skein relations (our own).

**Wikipedia:** [HOMFLY polynomial](https://en.wikipedia.org/wiki/HOMFLY_polynomial). It says: “it generalizes two polynomials previously discovered, the Alexander polynomial and the Jones polynomial, both of which can be obtained by appropriate substitutions from HOMFLY.”

**Sources:**

- [P. Freyd, D. Yetter, J. Hoste, W. B. R. Lickorish, K. Millett, A. Ocneanu, A new polynomial invariant of knots and links, Bulletin of the AMS (1985)](https://doi.org/10.1090/S0273-0979-1985-15361-3)

### The HOMFLY skein definition gives the mirror formula

**Remember:** Mirroring swaps the two crossing terms, just like inverting ℓ.

*True by definition. Confidence: medium.* MSC 57K14 (Knot polynomials). arXiv math.GT. Level 3: graduate.

**Definition.** The HOMFLY polynomial P equals 1 on the unknot and obeys ℓP(L₊) + ℓ⁻¹P(L₋) + mP(L₀) = 0. The three oriented diagrams differ only at one site, with a positive crossing, a negative crossing or an oriented smoothing. One can also construct P from a trace on a quotient of the braid group algebra.

**Problem.** For the mirror of an oriented link L, the HOMFLY polynomial is P(L) with ℓ replaced by ℓ⁻¹ and m unchanged.

**How the definition helps.** The skein definition reduces the mirror formula to checking one relation and the unknot value (our own). Mirroring swaps positive and negative crossings and commutes with oriented smoothing. So the mirror's polynomial, with ℓ replaced by ℓ⁻¹, obeys the defining relation and equals 1 on the unknot (our own). Uniqueness from the relation then gives the formula, without comparing braids or traces (our own).

**Wikipedia:** [HOMFLY polynomial](https://en.wikipedia.org/wiki/HOMFLY_polynomial). It says: “Pₖ(ℓ,m) = P₍Mirror Image(K)₎(ℓ⁻¹,m), so the HOMFLY polynomial can often be used to distinguish between two knots of different chirality.”

**Sources:**

- [P. Freyd, D. Yetter, J. Hoste, W. B. R. Lickorish, K. Millett, A. Ocneanu, A new polynomial invariant of knots and links, Bulletin of the AMS (1985)](https://doi.org/10.1090/S0273-0979-1985-15361-3)

### The infinite cyclic cover makes the Alexander polynomial a knot invariant

**Remember:** Equivalent oriented knots have the same covering module.

*True by definition.* MSC 57K14 (Knot polynomials), 57M10. arXiv math.GT. Level 3: graduate.

**Definition.** For an oriented knot, take the cover X corresponding to the kernel of abelianization, with positive meridians mapping to 1 in ℤ. Its Alexander module is H₁(X; ℤ) over ℤ\[t,t⁻¹\], with t acting by positive deck translation. The Alexander polynomial generates its zeroth Fitting ideal.

**Problem.** Equivalent oriented knots have the same Alexander polynomial up to a factor ±tⁿ.

**How the definition helps.** An oriented knot equivalence preserves the meridian homomorphism and therefore lifts to a homeomorphism commuting with t. Our own deduction gives isomorphic Alexander modules and hence equal Fitting ideals. A Seifert matrix supplies a square presentation, so the ideal is principal and its generators differ by units ±tⁿ.

**Wikipedia:** [Alexander polynomial](https://en.wikipedia.org/wiki/Alexander_polynomial). It says: “The transformation t acts on the homology and so we can consider H₁(X) a module over the ring of Laurent polynomials ℤ\[t, t⁻¹\]. This is called the Alexander invariant or Alexander module.”

**Sources:**

- [J. W. Alexander, Topological invariants of knots and links, Transactions of the AMS (1928)](https://doi.org/10.1090/S0002-9947-1928-1501429-1)

### The Seifert matrix bounds Alexander degree span by twice knot genus

**Remember:** The size of the Seifert matrix bounds the Alexander degree.

*True by definition.* MSC 57K14 (Knot polynomials), 57K10. arXiv math.GT. Level 3: graduate.

**Definition.** Take a compact connected oriented surface of genus g embedded in S³ with the knot as boundary. Its Seifert matrix V pairs each integral homology basis cycle with each positive push-off by linking number. The Alexander polynomial is det(V − tVᵀ) up to a factor ±tⁿ.

**Problem.** The difference between the highest and lowest exponents in a knot's Alexander polynomial is at most twice the knot's least Seifert surface genus.

**How the definition helps.** The Seifert matrix formula bounds the degree by the size of the matrix, which records the surface genus. For a surface of least genus g, each determinant term has at most 2g linear factors. Unlike the covering module definition, this formula gives the bound without first building a presentation from a spanning surface (our own). The work lies in showing that V − tVᵀ presents that module, which also proves independence of the surface (our own).

**Wikipedia:** [Seifert surface](https://en.wikipedia.org/wiki/Seifert_surface), [Alexander polynomial](https://en.wikipedia.org/wiki/Alexander_polynomial). It says: “The Alexander polynomial is computed from the Seifert matrix by A(t) = det(V − tV\*), which is a polynomial of degree at most 2g in the indeterminate t.”

**Sources:** none listed. No primary source with a working link was found.

### The Conway skein definition makes its coefficients finite type

**Remember:** Each double point contributes a factor of z.

*True by definition.* MSC 57K16 (Finite-type and quantum invariants, topological quantum field theories (TQFT)), 57K14. arXiv math.GT. Level 3: graduate.

**Definition.** The Conway polynomial equals 1 on the unknot and satisfies ∇(L₊) − ∇(L₋) = z∇(L₀) for every oriented skein triple. Extend an invariant to transverse double points by repeatedly subtracting its negative resolution value from its positive resolution value. It has order at most n if this extension vanishes on every knot with n + 1 double points.

**Problem.** For n ≥ 0, the coefficient of zⁿ in the Conway polynomial is finite type of order at most n.

**How the definition helps.** Our own argument applies the skein relation at each double point. Each difference introduces a factor z and replaces that double point by its oriented smoothing. After n + 1 smoothings, the result is divisible by zⁿ⁺¹, so its coefficient of zⁿ vanishes.

**nLab:** [Vassiliev invariant](https://ncatlab.org/nlab/show/Vassiliev+invariant). It says: “The nth coefficient of the Conway polynomial is a Vassiliev invariant of order ≤ n.”

**Sources:**

- [Joan S. Birman and Xiao-Song Lin, Knot polynomials and Vassiliev's invariants, Inventiones Mathematicae (1993)](https://doi.org/10.1007/BF01231287)

### Genus and nested end spaces classify all orientable surfaces

**Remember:** Genus plus the shape of infinity tells you which surface you have.

*Makes the theorem clean to state or prove.* MSC 57K20 (2-dimensional topology (including mapping class groups of surfaces, Teichmüller theory, curve complexes, etc.)). arXiv math.GT. Level 3: graduate.

**Definition.** An end selects a component U(K) of the surface outside each compact K, with U(K′) ⊆ U(K) whenever K ⊆ K′. Fixing one selection U(K) gives a basic open set in the end space E. An end belongs to E∞ if every selected component has positive genus.

**Problem.** Two connected orientable surfaces without boundary are homeomorphic exactly when they have the same genus and homeomorphic pairs (E, E∞) of end spaces (Kerékjártó, Richards).

**How the definition helps.** The end space records exactly the information at infinity that genus cannot see. With the pair (E, E∞), the classification becomes one sentence, as in the compact case. For example, infinite-genus surfaces with one end and with two ends differ only in their end spaces (our own example). The work moves into building a homeomorphism from matching end data.

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

**How the definition helps.** Evaluation at x is a fiber bundle whose fiber consists of homeomorphisms fixing x. Our own argument takes its long exact homotopy sequence, whose connecting map pushes x around a loop. Contractibility of the identity component gives π₁(Homeo⁺(S)) = 0, so point pushing is injective. Connectedness of S makes the forgetful map surjective.

**nLab:** [braid group](https://ncatlab.org/nlab/show/braid+group). It says: “In words: The mapping class group of a punctured surface is a group extension of the mapping class group of the plain surface by the surface braid group on the set of punctures.”

**Sources:**

- [Joan S. Birman, Mapping class groups and their relationship to braid groups, Communications on Pure and Applied Mathematics (1969)](https://doi.org/10.1002/cpa.3160220206)

### Isotopy classes give the mapping class group its symplectic action

**Remember:** Isotopic maps act alike on homology and preserve oriented intersections.

*True by definition.* MSC 57K20 (2-dimensional topology (including mapping class groups of surfaces, Teichmüller theory, curve complexes, etc.)). arXiv math.GT. Level 3: graduate.

**Definition.** For a closed connected oriented surface S, the mapping class group consists of orientation-preserving homeomorphisms up to isotopy, a continuous deformation through homeomorphisms. Another description presents the group by Dehn twists and relations. A Dehn twist makes one full turn in a thin annulus around a closed curve.

**Problem.** The mapping class group of a genus g surface acts on first integral homology by matrices in Sp(2g, ℤ). This is the group of invertible integer matrices preserving the signed intersection pairing of curves.

**How the definition helps.** The isotopy class definition gives an action on homology without checking relations among Dehn twists (our own). An isotopy is a homotopy, so isotopic maps induce the same action on homology (our own). Orientation-preserving homeomorphisms preserve signed intersections, so the matrices preserve the pairing. Surjectivity onto Sp(2g, ℤ) is a separate result.

**Wikipedia:** [Mapping class group of a surface](https://en.wikipedia.org/wiki/Mapping_class_group_of_a_surface). It says: “As singular homology is functorial, the mapping class group Mod(S) acts by automorphisms on the first homology group H₁(S).”

**Sources:** none listed. No primary source with a working link was found.

### The torus lattice quotient realizes every matrix in SL₂(ℤ)

**Remember:** A determinant-one integer matrix preserves the lattice and acts on the torus.

*True by definition.* MSC 57K20 (2-dimensional topology (including mapping class groups of surfaces, Teichmüller theory, curve complexes, etc.)). arXiv math.GT. Level 3: graduate.

**Definition.** Define the torus as the plane modulo integer translations by vectors in ℤ². One can instead use a product of two circles and work with the two curves given by the circle factors.

**Problem.** The group of isotopy classes of orientation-preserving torus homeomorphisms is isomorphic to SL₂(ℤ), the group of determinant-one integer matrices.

**How the definition helps.** The lattice quotient makes every matrix act by a linear map of the plane that descends to the torus, so every matrix is realized. The two circle curves instead give twist maps, and one must show that their matrices generate SL₂(ℤ) (our own). For injectivity, a map trivial on homology is homotopic to the identity, because the torus has a contractible universal cover (our own). The theorem that homotopic surface homeomorphisms are isotopic then finishes the proof (our own).

**Wikipedia:** [Mapping class group of a surface](https://en.wikipedia.org/wiki/Mapping_class_group_of_a_surface). It says: “It is easy to construct a morphism Φ : SL₂(ℤ) → Mod(𝕋²): every A ∈ SL₂(ℤ) induces a diffeomorphism of 𝕋² via x + ℤ² ↦ Ax + ℤ².”

**Sources:** none listed. No primary source with a working link was found.

### Excluding S³ and fixing summand types makes 3-manifold prime decomposition unique

**Remember:** S³ is the 1 of connected sums, so it is not prime.

*Rules out counterexamples. Confidence: medium.* MSC 57K30 (General topology of 3-manifolds). arXiv math.GT. Level 3: graduate.

**Definition.** A closed connected oriented 3-manifold is prime if it differs from S³ and every connected sum decomposition has a factor homeomorphic to S³. Connected sum removes an open ball from each summand and glues the boundary spheres by an orientation-reversing homeomorphism. A manifold is irreducible if every smoothly embedded 2-sphere bounds a ball in the smooth category.

**Problem.** Every closed connected oriented smooth 3-manifold other than S³ splits uniquely up to order and oriented homeomorphism into prime summands. Equivalently, its summands are irreducible manifolds other than S³ and copies of S² × S¹.

**How the definition helps.** Our own observation is that allowing the unit S³ would permit arbitrary extra summands. Excluding it gives the uniqueness statement of the Kneser–Milnor theorem. Among closed connected oriented prime 3-manifolds, only S² × S¹ is reducible.

**Wikipedia:** [Prime decomposition of 3-manifolds](https://en.wikipedia.org/wiki/Prime_decomposition_of_3-manifolds). It says: “This sum is unique as long as we specify that each summand is either irreducible or a non-orientable S² bundle over S¹.”

**Paper or page:** [Profinite almost rigidity in 3-manifolds](https://arxiv.org/abs/2410.16002). It says: “with prime decomposition M ≅ M₁ \# ⋯ \# Mₘ \# (S² × S¹)\#ʳ and N ≅ N₁ \# ⋯ \# Nₙ \# (S² × S¹)\#ˢ, where Mᵢ and Nⱼ are irreducible.”

**Sources:**

- [X. Xu, Profinite almost rigidity in 3-manifolds, Adv. Math. 480 (2025) 110505, arXiv:2410.16002](https://arxiv.org/abs/2410.16002)
- [John Milnor, A unique decomposition theorem for 3-manifolds, Amer. J. Math. 84 (1962)](https://doi.org/10.2307/2372800)

### The Poincaré conjecture needs trivial fundamental group, not only sphere homology

**Remember:** Having no holes in homology is not enough; every loop must shrink.

*Rules out counterexamples.* MSC 57K30 (General topology of 3-manifolds), 57R60. arXiv math.GT. Level 3: graduate.

**Definition.** A space is simply connected if it is path-connected and every loop in it contracts to a point.

**Problem.** Every closed simply connected 3-manifold is homeomorphic to S³.

**How the definition helps.** Simple connectivity excludes the Poincaré homology sphere, whose fundamental group has order 120 despite its sphere homology. Our own explanation uses this example to distinguish the two hypotheses. Perelman’s proof of the Poincaré conjecture supplies the classification under the stronger hypothesis.

**Wikipedia:** [Poincaré conjecture](https://en.wikipedia.org/wiki/Poincar%C3%A9_conjecture). It says: “This example made it clear that homology is not powerful enough to characterize the topology of a manifold.”

**Sources:**

- [H. Poincaré, Cinquième complément à l'analysis situs, Rend. Circ. Mat. Palermo 18 (1904) 45–110](https://doi.org/10.1007/bf03014091)

### The quaternion quotient gives the Poincaré sphere the homology of S³

**Remember:** A simply connected sphere modulo a perfect group has zero first homology.

*True by definition.* MSC 57K30 (General topology of 3-manifolds), 57M10. arXiv math.GT. Level 3: graduate.

**Definition.** View the 3-sphere as the group of unit quaternions, with multiplication extending complex multiplication. Define the Poincaré sphere as the quotient by left multiplication by the binary icosahedral group. This is the inverse image of the icosahedron's rotation group in the two-to-one map from unit quaternions to rotations of 3-space.

**Problem.** The Poincaré sphere has fundamental group of order 120 and the same integral homology as the 3-sphere.

**How the definition helps.** In our own argument, the finite group acts freely by translations on the simply connected sphere, giving the universal cover. The binary icosahedral group therefore gives the fundamental group, of order 2 · 60 = 120. Its perfectness gives zero first homology by abelianization. The quotient is closed and oriented, so integral Poincaré duality and the universal coefficient theorem give the remaining sphere homology.

**Wikipedia:** [Homology sphere](https://en.wikipedia.org/wiki/Homology_sphere). It says: “In this case, the Poincaré homology sphere is isomorphic to S³/Ĩ where Ĩ is the binary icosahedral group, the perfect double cover of I embedded in S³.”

**Sources:** none listed. No primary source with a working link was found.

### Two-sided incompressible surfaces preserve fundamental groups under inclusion

**Remember:** A two-sided surface without compressing disks keeps its fundamental group.

*Rules out counterexamples.* MSC 57K30 (General topology of 3-manifolds). arXiv math.GT. Level 3: graduate.

**Definition.** Let S be a closed connected locally flat surface other than a sphere in the interior of a 3-manifold. A compressing disk is an embedded disk meeting S exactly along its boundary, an essential simple closed curve in S. Incompressibility excludes such disks, and two-sidedness requires a neighborhood homeomorphic to S × (−1,1) with S as the middle slice.

**Problem.** For such a two-sided incompressible surface, inclusion induces an injection of fundamental groups. A loop that contracts in the ambient manifold already contracts on the surface.

**How the definition helps.** Two-sidedness lets us cut along the surface and apply the loop theorem to either boundary copy, in our own explanation. If inclusion kills a nontrivial loop class, the theorem supplies a compressing disk. The one-sided Klein bottle in the lens space L(4,1) has no compressing disk. Its fundamental group is infinite, while the ambient fundamental group has order four.

**Wikipedia:** [Incompressible surface](https://en.wikipedia.org/wiki/Incompressible_surface). It says: “However, if S is two-sided, the loop theorem implies Kneser's lemma, that if S is incompressible, then it is π₁-injective.”

**Sources:** none listed. No primary source with a working link was found.

### Ignoring spheres in the Euler characteristic gives Thurston's seminorm on homology

**Remember:** Spheres cost nothing, so they cannot drive the complexity down.

*Rules out counterexamples.* MSC 57K31 (Invariants of 3-manifolds (including skein modules, character varieties)), 57K30. arXiv math.GT. Level 3: graduate.

**Definition.** For an integral class in H₂(M;ℤ) of a compact oriented 3-manifold M, consider all closed embedded oriented surfaces representing it. Minimize the sum of max(0,−χ(C)) over their connected components C.

**Problem.** This minimum extends to a seminorm x on H₂(M;ℝ), the Thurston norm. It satisfies the triangle inequality and x(ra) = \|r\|x(a) for every real r and class a.

**How the definition helps.** Our own example adds disjoint null-homologous spheres, driving plain −χ down without changing the class. The componentwise maximum makes each added sphere cost zero. Thurston’s seminorm theorem supplies the triangle inequality, absolute homogeneity and extension to real classes.

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

**Definition.** Take the rational vector space freely generated by complex shapes z ≠ 0,1 of ordered ideal tetrahedra. Read z as the fourth vertex after sending the first three to 0, ∞, 1. The rational pre-Bloch group imposes the alternating sum of the five ordered faces of each ordered five-tuple of distinct ideal vertices as zero.

**Problem.** Sending each shape to its signed volume defines a linear map to ℝ. For an oriented complete cusped hyperbolic three-manifold of finite volume, this map sends its Bloch class to its volume.

**How the definition helps.** Our own argument uses signed volume additivity to make every five-term relation map to zero. The resulting linear map evaluates each tetrahedron by its Bloch–Wigner volume, with flat tetrahedra contributing zero. The Bloch class is represented by the sum of shapes of an oriented ideal triangulation. Its signed tetrahedral volumes sum to the manifold volume.

**Paper or page:** [The Andersen-Kashaev volume conjecture for FAMED geometric triangulations](https://arxiv.org/abs/2410.10776v1). It says: “Let T be an ideal tetrahedron in ℍ³ with complex shape structure z. Then, its volume is given by Vol(T) = D(z) = D((z − 1)/z) = D(1/(1 − z)).”

**Sources:**

- [Walter D. Neumann, Extended Bloch group and the Cheeger–Chern–Simons class (2004)](https://doi.org/10.2140/gt.2004.8.413)
- [Fathi Ben Aribi and Ka Ho Wong, The Andersen-Kashaev volume conjecture for FAMED geometric triangulations (2024), ideal tetrahedron volume proposition](https://arxiv.org/abs/2410.10776v1)

### In the topological category every unimodular form is an intersection form

**Remember:** Drop smoothness, and every unimodular form is some 4-manifold's intersection form.

*Makes the theorem clean to state or prove.* MSC 57K40 (General topology of 4-manifolds), 57K41. arXiv math.GT. Level 3: graduate.

**Definition.** For a closed oriented topological 4-manifold M, the intersection form pairs integral degree-two classes modulo torsion by evaluating their cup product on \[M\]. A topological manifold is Hausdorff, second countable and locally homeomorphic to Euclidean space.

**Problem.** Every symmetric unimodular form on a finite-rank free abelian group occurs as the intersection form of a closed simply connected oriented topological 4-manifold. The form and the Kirby–Siebenmann invariant classify these manifolds up to orientation-preserving homeomorphism.

**How the definition helps.** Working with topological manifolds lets Freedman use constructions that are only topologically standard, such as Casson handles (our own remark). For even forms, the Kirby–Siebenmann invariant must equal one eighth of the signature mod 2. The smooth version fails: by Donaldson's theorem, no smooth closed simply connected manifold has the E8 form (our own remark). The hard work moves into Freedman's disc embedding theorem (our own remark).

**Paper or page:** [Algorithms in 4-manifold topology](https://arxiv.org/abs/2411.08775). It says: “There exists a closed, oriented, simply connected, topological 4-manifold X whose intersection form is isometric to λ and with Kirby–Siebenmann invariant ks(X)=k ∈ ℤ/2.”

**Sources:**

- [S. Bastl, R. Burke, R. Chatterjee et al., Algorithms in 4-manifold topology, arXiv:2411.08775 (2024)](https://arxiv.org/abs/2411.08775)
- [M. H. Freedman, The topology of four-dimensional manifolds, J. Differential Geom. 17 (1982) 357-453](https://doi.org/10.4310/jdg/1214437136)

### The Wu class definition makes spin intersection forms even

**Remember:** On a spin four-manifold, the class that measures cup squares is zero.

*True by definition.* MSC 57K40 (General topology of 4-manifolds), 57R20, 55S10. arXiv math.GT, math.AT. Level 3: graduate.

**Definition.** On a closed oriented smooth four-manifold, the second Wu class v₂ satisfies v₂ ⌣ x = x ⌣ x for every x ∈ H²(M;ℤ/2). This property determines v₂ uniquely. The integral intersection form evaluates cup products on the fundamental class.

**Problem.** The intersection form of a closed spin four-manifold is even: every integral class has even self-pairing.

**How the definition helps.** Our own calculation uses Wu’s formula v₂ = w₂ for oriented manifolds. A spin structure makes w₂(TM) vanish. Reducing an integral class modulo 2 therefore makes its cup square zero, so its integral self-pairing is even.

**nLab:** [Wu formula](https://ncatlab.org/nlab/show/Wu+formula), [Wu class](https://ncatlab.org/nlab/show/Wu+class). It says: “The intersection form of a closed spin topological 4-manifold is even.”

**Sources:** none listed. No primary source with a working link was found.

### Locally flat spheres make the Schoenflies theorem true in every dimension

**Remember:** Near each of its points, a locally flat sphere sits like a flat plane.

*Rules out counterexamples.* MSC 57N45 (Flatness and tameness of topological manifolds), 57N50. arXiv math.GT. Level 3: graduate.

**Definition.** An embedded (n − 1)-sphere in Sⁿ is locally flat if ambient coordinates near each of its points identify it with a coordinate hyperplane.

**Problem.** Every locally flat (n − 1)-sphere in the n-sphere bounds a ball on each side (the generalized Schoenflies theorem).

**How the definition helps.** Local flatness excludes Alexander’s horned sphere, whose exterior is not simply connected. Its wild points admit no chart in which the sphere is a coordinate plane. The generalized Schoenflies theorem supplies the ball on each side under the local flatness hypothesis.

**Wikipedia:** [Schoenflies problem](https://en.wikipedia.org/wiki/Schoenflies_problem), [Alexander horned sphere](https://en.wikipedia.org/wiki/Alexander_horned_sphere), [Knot (mathematics)](https://en.wikipedia.org/wiki/Knot_%28mathematics%29). It says: “At these Cantor points, the sphere is "wild". This set of wild points is the reason the Schoenflies theorem fails in three dimensions.”

**Sources:**

- [M. Brown, A proof of the generalized Schoenflies theorem, Bull. AMS 66 (1960) 74–76](https://doi.org/10.1090/S0002-9904-1960-10400-4)
- [B. Mazur, On embeddings of spheres, Bull. AMS 65 (1959) 59–65](https://doi.org/10.1090/S0002-9904-1959-10274-3)
- [J. W. Alexander, An example of a simply connected surface bounding a region which is not simply connected, PNAS 10 (1924) 8–10](https://doi.org/10.1073/pnas.10.1.8)

### Mod 2 orientations give Poincaré duality on every closed manifold

**Remember:** Modulo two, each local homology group has just one generator.

*Rules out counterexamples.* MSC 57N65 (Algebraic topology of manifolds), 55N25, 55M05. arXiv math.AT, math.GT. Level 3: graduate.

**Definition.** An orientation of an n-manifold with coefficients in a ring R is a continuous choice of local generators. At each point it picks a generator of the local homology group Hₙ(M, M minus the point; R). With R = ℤ/2 the local group has only one generator, so the choice is forced.

**Problem.** For a closed n-manifold M, the cohomology Hᵏ(M; ℤ/2) is isomorphic to the homology Hₙ₋ₖ(M; ℤ/2) for all k.

**How the definition helps.** The unique mod 2 generator varies consistently in every chart, so Poincaré duality applies with these coefficients. Our own example is the real projective plane. Its top integral homology vanishes despite its nonzero integral degree-zero cohomology. Both groups with mod 2 coefficients are ℤ/2.

**Wikipedia:** [Poincaré duality](https://en.wikipedia.org/wiki/Poincar%C3%A9_duality). It says: “Poincaré duality holds for any coefficient ring, so long as one has taken an orientation with respect to that coefficient ring; in particular, since every manifold has a unique orientation mod 2, Poincaré duality holds mod 2”

**Sources:**

- [Allen Hatcher, Algebraic Topology, Cambridge University Press, 2002](https://pi.math.cornell.edu/~hatcher/AT/ATpage.html)

### Orientations via local homology make orientability work for topological manifolds

**Remember:** Two generators at each point make a double cover that tests orientability.

*Makes the theorem clean to state or prove.* MSC 57N65 (Algebraic topology of manifolds), 55N25, 55M05. arXiv math.AT, math.GT. Level 3: graduate.

**Definition.** At each point p of an n-manifold without boundary, a local orientation is a generator of Hₙ(M,M∖{p};ℤ) ≅ ℤ. A chart transports each choice to nearby points, giving the two local sheets of the orientation cover. A global orientation is a continuous section.

**Problem.** Every nonempty connected manifold without boundary has an orientation double cover. It is disconnected exactly when the manifold is orientable. Otherwise it is connected and orientable.

**How the definition helps.** Local charts give two choices at every point, hence a double cover. A section and its opposite split the cover into two sheets. Conversely, in a disconnected double cover of a connected manifold each component maps homeomorphically onto the base. Our own observation is that the chosen generator at each point upstairs orients the cover itself.

**Wikipedia:** [Orientability](https://en.wikipedia.org/wiki/Orientability). It says: “If M is orientable, then M itself is one of these open sets, so O is the disjoint union of two copies of M. If M is non-orientable, however, then O is connected and orientable.”

**Sources:**

- [Allen Hatcher, Algebraic Topology, Cambridge University Press, 2002](https://pi.math.cornell.edu/~hatcher/AT/ATpage.html)

### Simple homotopy type separates lens spaces that ordinary homotopy cannot

**Remember:** The two rotation exponents give the parameters for both lens-space classifications.

*Makes the theorem clean to state or prove.* MSC 57Q10 (Simple homotopy type, Whitehead torsion, Reidemeister-Franz torsion, etc.), 57K31. arXiv math.GT, math.AT. Level 3: graduate.

**Definition.** Let p ≥ 2 and q be coprime integers. The lens space L(p;q) is the orbit space of the unit sphere in ℂ² under (z,w) ↦ (exp(2πi/p)z, exp(2πiq/p)w) and its powers.

**Problem.** L(p;q₁) and L(p;q₂) are homotopy equivalent when q₁q₂ is ± a square mod p. They are homeomorphic only when q₁ is ±q₂ or ±q₂⁻¹ mod p. For example (our own), L(7;1) and L(7;2) are homotopy equivalent but not homeomorphic.

**How the definition helps.** The cyclic quotient describes both classification tests using the same parameter q modulo p. The homotopy classification uses the square condition, while the Reidemeister–Brody homeomorphism classification uses the stricter congruences. In our own example, 2 ≡ 3² modulo 7, but 2 is neither 1 nor −1 modulo 7.

**Wikipedia:** [Lens space](https://en.wikipedia.org/wiki/Lens_space). It says: “The homeomorphism classification is more subtle, and is given by Reidemeister torsion.”

**Sources:**

- [Kurt Reidemeister, Homotopieringe und Linsenräume, Abhandlungen aus dem Mathematischen Seminar der Universität Hamburg 11 (1935) 102–109](https://doi.org/10.1007/BF02940717)

### Whitehead torsion extends the h-cobordism theorem to every fundamental group

**Remember:** Not just homotopy, but simple homotopy, makes the cobordism a cylinder.

*Makes the theorem clean to state or prove.* MSC 57Q10 (Simple homotopy type, Whitehead torsion, Reidemeister-Franz torsion, etc.), 57R80. arXiv math.GT, math.AT. Level 3: graduate.

**Definition.** A smooth h-cobordism is a compact smooth manifold W with boundary M ⊔ N such that both boundary inclusions are homotopy equivalences. It is an s-cobordism when M → W is a simple homotopy equivalence, equivalently when its Whitehead torsion τ(W,M) vanishes.

**Problem.** A connected smooth h-cobordism W of dimension at least six is diffeomorphic to M × \[0,1\] relative to M exactly when τ(W,M) vanishes.

**How the definition helps.** The torsion condition expresses simplicity for any fundamental group. The smooth s-cobordism theorem turns that condition into a product relative to M. Conversely, a product collapses onto its incoming boundary and has zero torsion.

**Wikipedia:** [h-cobordism](https://en.wikipedia.org/wiki/h-cobordism), [Whitehead torsion](https://en.wikipedia.org/wiki/Whitehead_torsion). It says: “If the assumption that M and N are simply connected is dropped, h-cobordisms need not be cylinders; the obstruction is exactly the Whitehead torsion τ (W, M) of the inclusion M ↪︎ W.”

**Sources:**

- [J. H. C. Whitehead, Simple homotopy types, American Journal of Mathematics 72 (1950) 1–57](https://doi.org/10.2307/2372133)
- [Barry Mazur, Differential topology from the point of view of simple homotopy theory, Publications Mathématiques de l'IHÉS 15 (1963) 5–93](https://doi.org/10.1007/BF02684277)

### Asking vertex links to be spheres separates PL manifolds from triangulated ones

**Remember:** Spheres around every vertex mean PL; topology alone is not enough.

*Rules out counterexamples.* MSC 57Q15 (Triangulating manifolds), 57Q25. arXiv math.GT. Level 3: graduate.

**Definition.** The link of a vertex in a simplicial complex is made of the simplices of its star that do not contain it. A combinatorial n-manifold is a simplicial complex in which every vertex link is a PL (piecewise linear) (n−1)-sphere. A triangulated manifold only asks that the whole space be a topological manifold.

**Problem.** The vertex-link condition survives subdivision and PL homeomorphism. Two PL-equivalent finite closed combinatorial manifolds of the same dimension are related by finitely many Pachner moves.

**How the definition helps.** The link condition is local and is kept by subdivision, so PL manifolds become finite combinatorial objects. It excludes the double suspension of a homology sphere X that is not a sphere, such as the Poincaré sphere (our own detail). By the theorem of Edwards and Cannon, this double suspension is a topological sphere. But the link of a suspension vertex is the single suspension of X, which is not a sphere, so this triangulation is not combinatorial.

**Wikipedia:** [Triangulation (topology)](https://en.wikipedia.org/wiki/Triangulation_%28topology%29), [Hauptvermutung](https://en.wikipedia.org/wiki/Hauptvermutung). It says: “Choosing a triangulation t: \|𝒮\| → S²X obtained via the suspension operation on triangulations the resulting simplicial complex is not a PL-manifold, because there is a vertex v such that link(v) is not a n−1 sphere.”

**Sources:**

- [Robert D. Edwards, Suspensions of homology spheres, arXiv:math/0610573 (2006)](https://arxiv.org/abs/math/0610573)

### Acyclic matchings make the discrete Morse complex well defined

**Remember:** Pair faces with cofaces and reverse their arrows without creating a directed cycle.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 57Q70 (Discrete Morse theory and related ideas in manifold topology), 55U05. arXiv math.AT, math.CO. Level 3: graduate.

**Definition.** An acyclic matching pairs cells disjointly, matching each lower cell with a coface in which it is a regular face. The attaching map must carry the entire preimage of the lower open cell homeomorphically onto that cell. Reversing matched edges in the downward face graph must leave no directed cycle, and unmatched cells are critical.

**Problem.** A finite CW complex X with an acyclic matching with n critical cells is homotopy equivalent to a CW complex with n cells. The Morse complex, built on the critical cells, has the same integer homology as X.

**How the definition helps.** Regular face incidences make each matched face geometrically available for cancellation. Acyclicity orders the cancellations and makes the gradient path sums finite. Our own explanation uses the discrete Morse theorem for the homotopy equivalence and its integral Morse boundary formula for homology.

**nLab:** [discrete Morse theory](https://ncatlab.org/nlab/show/discrete+Morse+theory). It says: “The first axiom of the partial matching guarantees that one only divides by ±1, while the second axiom guarantees that no such path can go "backwards" from c′ up to c.”

**Sources:**

- [Robin Forman, Morse theory for cell complexes, Advances in Mathematics 134 (1998) 90–145](https://doi.org/10.1006/aima.1997.1650)

### A spin structure is a lift through the homotopy fiber of w₂

**Remember:** A spin structure is a chosen trivialization of w₂ of the tangent bundle.

*True by definition. Confidence: medium.* MSC 57R15 (Specialized structures on manifolds (spin manifolds, framed manifolds, etc.)), 55R40, 55R15. arXiv math.DG, math.AT. Level 3: graduate.

**Definition.** Fix the classifying map f: X → BSO of the oriented tangent bundle of a smooth manifold. A spin structure is a lift of f to BSpin, modeled by a null-homotopy of w₂ ∘ f: X → K(ℤ/2,2).

**Problem.** An oriented smooth manifold X admits a spin structure exactly when w₂(TX) = 0. When structures exist, their isomorphism classes form a torsor for H¹(X; ℤ/2).

**How the definition helps.** The composite admits a null-homotopy precisely when the cohomology class it represents vanishes. Our own argument compares two null-homotopies by joining one to the reverse of the other. Their difference is a map into the loop space K(ℤ/2,1), giving a free and transitive H¹ action on classes. The identification of BSpin with the homotopy fiber of w₂ relates this description to classical spin structures.

**nLab:** [spin structure](https://ncatlab.org/nlab/show/spin+structure). It says: “By construction (the universal property of the homotopy fiber) this is the obstruction to the existence of a lift”

**Sources:**

- [John Milnor, Spin structures on manifolds, L'Enseignement Mathématique 9 (1963) 198–203](https://doi.org/10.5169/seals-38784)
- [Michael K. Murray, Michael A. Singer, Gerbes, Clifford modules and the index theorem, 2003, arXiv:math/0302096](https://arxiv.org/abs/math/0302096)

### Fractional Euler characteristic decides the geometry of every 2-orbifold

**Remember:** Subtract cone deficits and half corner deficits from the surface’s Euler characteristic.

*Makes the theorem clean to state or prove.* MSC 57R18 (Topology and geometry of orbifolds), 57K20. arXiv math.GT, math.DG. Level 3: graduate.

**Definition.** An orbifold is a space locally modelled on ℝⁿ divided by a finite group. For a compact 2-orbifold, χ = χ(X₀) − Σ(1 − 1/nᵢ)/2 − Σ(1 − 1/mᵢ). Here X₀ is the underlying surface, nᵢ are orders of corner reflectors and mᵢ are orders of cone points.

**Problem.** A compact connected 2-orbifold is hyperbolic when χ &lt; 0 and Euclidean when χ = 0. When χ &gt; 0 it is either spherical or bad, which means it has no manifold cover.

**How the definition helps.** The fractional contributions make Euler characteristic multiply by the degree of a finite orbifold cover. Our own explanation uses orbifold uniformization to supply the geometric structures, with bad orbifolds exceptional when the Euler characteristic is positive. Gauss–Bonnet relates the sign of curvature to the sign of the orbifold Euler characteristic.

**Wikipedia:** [Orbifold](https://en.wikipedia.org/wiki/Orbifold), [Euler characteristic](https://en.wikipedia.org/wiki/Euler_characteristic). It says: “A 2-dimensional compact connected orbifold has a hyperbolic structure if its Euler characteristic is less than 0, a Euclidean structure if it is 0, and if its Euler characteristic is positive it is either bad or has an elliptic structure”

**Sources:**

- [William P. Thurston, The Geometry and Topology of Three-Manifolds, Princeton lecture notes, 1978–1981, chapter 13](https://library.slmath.org/books/gt3m/)

### Orbifolds as groupoids keep the finite symmetry groups of points

**Remember:** Keep the finite symmetry groups of the points; do not just take the quotient.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 57R18 (Topology and geometry of orbifolds), 58H05. arXiv math.DG, math.GT. Level 3: graduate.

**Definition.** An orbifold is represented by a proper étale Lie groupoid, up to Morita equivalence. Étale means the source and target are local diffeomorphisms. Proper means their joint map from arrows to ordered pairs of objects has compact inverse images of compact sets.

**Problem.** The orbifold bicategory localizes proper étale Lie groupoids at Morita equivalences. The inertia orbifold of X is the mapping stack from Bℤ to X, where Bℤ has one object and automorphism group ℤ.

**How the definition helps.** Morita localization identifies groupoid presentations of the same orbifold, as in the Moerdijk–Pronk theorem. Our own calculation sends the generator of ℤ to an automorphism of an object of X. Isomorphisms between these choices act by conjugation, giving exactly the inertia groupoid.

**nLab:** [orbifold](https://ncatlab.org/nlab/show/orbifold). It says: “It has been noticed that the topological invariants of the underlying topological space of an orbifold as a topological space with an orbifold structure are not appropriate, but have to be corrected”

**Sources:**

- [Ieke Moerdijk, Orbifolds as Groupoids: an Introduction, Contemp. Math. 310 (2002) 205–222, arXiv:math/0203100](https://arxiv.org/abs/math/0203100)
- [Ieke Moerdijk, Dorette Pronk, Orbifolds, sheaves and groupoids, K-theory 12 (1997) 3–21](https://doi.org/10.1023/A:1007767628271)

### Chern–Weil forms make the Chern character multiplicative on tensor products

**Remember:** Exponentiate the sum of the two commuting curvatures and take the trace.

*True by definition. Confidence: medium.* MSC 57R20 (Characteristic classes and numbers in differential topology), 53C05. arXiv math.DG, math.AT. Level 3: graduate.

**Definition.** For a smooth complex vector bundle E with connection of curvature F, its de Rham Chern character is the class of tr(exp(iF/2π)).

**Problem.** For smooth complex vector bundles E and E′, the Chern character of E ⊗ E′ is the product of their Chern characters.

**How the definition helps.** Our own calculation uses the tensor product curvature F ⊗ 1 + 1 ⊗ F′. Its two summands commute, so exponentiating gives the tensor product of the individual exponentials. Taking the trace multiplies their traces, and taking de Rham classes gives the claimed product.

**nLab:** [Chern character](https://ncatlab.org/nlab/show/Chern+character). It says: “and it is multiplicative under the tensor product of vector bundles”

**Sources:** none listed. No primary source with a working link was found.

### Complexification expresses Pontryagin classes of complex bundles through Chern classes

**Remember:** Complexify the underlying real bundle to get the original and its conjugate.

*True by definition.* MSC 57R20 (Characteristic classes and numbers in differential topology), 55R40. arXiv math.AT. Level 3: graduate.

**Definition.** For a real vector bundle F, complexification F ⊗ ℂ extends each fiber from real to complex scalars. Its Chern class c₂ₖ defines the Pontryagin class pₖ(F) = (−1)ᵏc₂ₖ(F ⊗ ℂ). For a complex bundle E, write Ē for the same bundle with multiplication by i replaced by multiplication by −i.

**Problem.** For a complex vector bundle E, the Pontryagin classes of the underlying real bundle satisfy 1 − p₁ + p₂ − ⋯ = c(E)c(Ē). In particular, p₁ = c₁² − 2c₂.

**How the definition helps.** Complexifying the underlying real bundle splits it into E ⊕ Ē, so the definition gives the formula. The total Chern class multiplies under direct sums. Conjugation multiplies cᵢ by (−1)ⁱ, so the terms of odd degree in c(E)c(Ē) cancel. The terms of even degree give the alternating Pontryagin sum, and degree four gives p₁ = c₁² − 2c₂.

**Wikipedia:** [Pontryagin class](https://en.wikipedia.org/wiki/Pontryagin_class). It says: “This follows from the fact that E⊗ℝℂ ≅ E⊕Ē, the Whitney sum formula, and properties of Chern classes of its complex conjugate bundle.”

**Sources:**

- [Milnor, J. W.; Stasheff, J. D. (1974). Characteristic Classes. Annals of Mathematics Studies 76. Princeton University Press.](https://doi.org/10.1515/9781400881826)

### Complexification makes Pontryagin classes stable under trivial summands

**Remember:** A trivial real summand becomes a trivial complex summand with Chern class one.

*True by definition. Confidence: medium.* MSC 57R20 (Characteristic classes and numbers in differential topology), 55R40. arXiv math.AT. Level 3: graduate.

**Definition.** For a real vector bundle E, its complexification E ⊗ ℂ extends each fiber from real to complex scalars. Define pₖ(E) = (−1)ᵏc₂ₖ(E ⊗ ℂ), where c₂ₖ is a Chern class of the complexification. A trivial bundle is a product of the base with a fixed vector space.

**Problem.** Adding a trivial real bundle does not change any integral Pontryagin class.

**How the definition helps.** The complexification definition makes stability immediate, because a trivial real summand becomes a trivial complex summand. That summand has total Chern class 1, so the Chern class product rule, which holds with integer coefficients, leaves all the classes unchanged. In our own comparison, the Pontryagin product rule alone would leave a possible error of order two.

**Wikipedia:** [Pontryagin class](https://en.wikipedia.org/wiki/Pontryagin_class). It says: “The axiom set above also implies that Pontryagin classes are stable: adding a trivial real bundle does not change p(E).”

**Sources:**

- [Milnor, J. W.; Stasheff, J. D. (1974). Characteristic Classes. Annals of Mathematics Studies 76. Princeton University Press.](https://doi.org/10.1515/9781400881826)

### Complexification makes the top Pontryagin class the Euler class squared

**Remember:** Complexification doubles the real bundle, and two orientation signs cancel.

*True by definition.* MSC 57R20 (Characteristic classes and numbers in differential topology), 55R40. arXiv math.AT. Level 3: graduate.

**Definition.** For an oriented real vector bundle E of rank 2k, the Euler class is the pullback of its Thom class along the zero section. Define its top Pontryagin class by pₖ(E) = (−1)ᵏc₂ₖ(E ⊗ ℂ).

**Problem.** For an oriented real vector bundle E of rank 2k, the square of the Euler class is the top Pontryagin class: e(E)² = pₖ(E).

**How the definition helps.** Complexification reduces the identity to a product of Euler classes, because the underlying real bundle of E ⊗ ℂ is E ⊕ E. With the product orientation, its Euler class is e(E)². With the complex orientation, it is the top Chern class, and the two orientations differ by (−1)ᵏ. This sign cancels the sign in pₖ.

**nLab:** [Euler class](https://ncatlab.org/nlab/show/Euler+class). It says: “For E a vector bundle of even rank rank(E) = 2k, the cup product of the Euler class with itself equals the kth Pontryagin class”

**Wikipedia:** [Euler class](https://en.wikipedia.org/wiki/Euler_class). It says: “The Euler class of E is given by the highest dimensional Chern class”

**Sources:**

- [Milnor, J. W.; Stasheff, J. D. (1974). Characteristic Classes. Annals of Mathematics Studies 76. Princeton University Press.](https://doi.org/10.1515/9781400881826)

### Curvature makes Chern classes of dual bundles alternate in sign

**Remember:** Duality transposes and negates curvature, and only the negation changes determinant coefficients.

*True by definition. Confidence: medium.* MSC 57R20 (Characteristic classes and numbers in differential topology), 53C05. arXiv math.DG, math.AT. Level 3: graduate.

**Definition.** The fibers of the dual bundle E∗ are the linear functionals on the fibers of E. A connection differentiates sections, and its curvature Ω measures the failure of derivatives to commute. The Chern–Weil definition takes the coefficients of det(I + itΩ/2π) as forms representing the real Chern classes.

**Problem.** The ith real Chern class of the dual bundle is (−1)ⁱ times that of the original bundle.

**How the definition helps.** The dual connection has curvature −Ωᵀ. In our own calculation, transposing preserves the Chern determinant and negating curvature replaces t by −t. Its degree-j coefficient thus gains the factor (−1)ʲ, which passes to the real cohomology class by Chern–Weil theory.

**Wikipedia:** [Chern class](https://en.wikipedia.org/wiki/Chern_class), [Chern–Weil homomorphism](https://en.wikipedia.org/wiki/Chern%E2%80%93Weil_homomorphism). It says: “For the dual bundle E\* of E, cᵢ(E\*) = (−1)ⁱcᵢ(E).”

**Sources:**

- [Milnor, J. W.; Stasheff, J. D. (1974). Characteristic Classes. Annals of Mathematics Studies 76. Princeton University Press.](https://doi.org/10.1515/9781400881826)

### Curvature makes positive-degree real Chern classes vanish for flat bundles

**Remember:** Zero curvature leaves only the constant term in the Chern determinant.

*True by definition.* MSC 57R20 (Characteristic classes and numbers in differential topology), 53C05. arXiv math.DG. Level 3: graduate.

**Definition.** For a smooth complex vector bundle with connection of curvature Ω, the coefficient of tʲ in det(I + itΩ/2π) represents its jth real Chern class. A connection is flat if Ω vanishes everywhere.

**Problem.** Every positive-degree real Chern class of a bundle with a flat connection vanishes.

**How the definition helps.** The curvature definition makes vanishing immediate, because Ω = 0 leaves the determinant equal to 1. The integral definition uses the topology of the bundle and does not directly use a connection (our own comparison). The work shifts to proving that the forms represent the real Chern classes for every connection. The argument says nothing about integral torsion classes.

**Wikipedia:** [Chern class](https://en.wikipedia.org/wiki/Chern_class). It says: “This is evinced by the fact that a trivial bundle always admits a flat connection.”

**Sources:**

- [Chern, S.-S. (1946). Characteristic classes of Hermitian manifolds. Annals of Mathematics 47(1), 85–121.](https://doi.org/10.2307/1969037)

### Defining Stiefel–Whitney numbers cohomologically makes them vanish on boundaries

**Remember:** A class that extends across a filling pairs to zero with its boundary.

*True by definition.* MSC 57R20 (Characteristic classes and numbers in differential topology), 57R75. arXiv math.AT, math.GT. Level 3: graduate.

**Definition.** For a closed smooth n-manifold M, choose any product of Stiefel–Whitney classes of TM whose degrees sum to n. Its Stiefel–Whitney number is the evaluation of that product on the mod 2 fundamental class of M.

**Problem.** If M is the boundary of a compact smooth manifold W, then every Stiefel–Whitney number of M is zero.

**How the definition helps.** Our own proof extends each characteristic class product across W. Along M the tangent bundle of W splits as TM plus a trivial line, so stability and naturality give the extension. The fundamental class of M maps to zero in W because it bounds the relative fundamental class. Naturality of evaluation therefore gives zero for every such number.

**nLab:** [Stiefel-Whitney number](https://ncatlab.org/nlab/show/Stiefel-Whitney+number). It says: “All Stiefel-Whitney numbers of the boundary of a compact smooth manifold vanish.”

**Sources:**

- [John W. Milnor and James D. Stasheff, Characteristic Classes (1974)](https://press.princeton.edu/books/paperback/9780691081229/characteristic-classes)
- [René Thom, Quelques propriétés globales des variétés différentiables (1954), pp. 17–86 (the converse)](https://doi.org/10.1007/BF02566923)

### Defining the Euler class by the Thom class makes it multiplicative

**Remember:** Multiply the Thom classes first, then restrict to the zero section.

*True by definition.* MSC 57R20 (Characteristic classes and numbers in differential topology), 55R25. arXiv math.AT, math.GT. Level 3: graduate.

**Definition.** Let Z be the zero section of an oriented real rank-n bundle E. Its Thom class in Hⁿ(E, E ∖ Z; ℤ) restricts to each fibre’s orientation generator. The Euler class is its pullback along the zero section.

**Problem.** For oriented real vector bundles E and F over the same base, e(E ⊕ F) = e(E) ⌣ e(F).

**How the definition helps.** With the Thom class definition, the theorem reduces to the product rule for Thom classes. That rule says the Thom class of E ⊕ F is a product of the two Thom classes, since fibre orientations multiply. In our own proof, restricting to the zero section turns this product into the cup product. The work goes into the Thom isomorphism and this product rule.

**nLab:** [Euler class](https://ncatlab.org/nlab/show/Euler+class). It says: “Euler class takes Whitney sum to cup product”

**Sources:**

- [John W. Milnor and James D. Stasheff, Characteristic Classes (1974), §9, Property 9.6](https://press.princeton.edu/books/paperback/9780691081229/characteristic-classes)

### Defining the top Chern class as the Euler class makes equality immediate

**Remember:** Start with the real Euler class and use it as the top Chern class.

*True by definition. Confidence: medium.* MSC 57R20 (Characteristic classes and numbers in differential topology), 55R40. arXiv math.AT. Level 3: graduate.

**Definition.** Give a rank-n complex bundle E its complex orientation as a real bundle. Define cₙ(E) by pulling the real Thom class back along the zero section.

**Problem.** The top Chern class of a complex vector bundle equals the Euler class of the underlying oriented real bundle.

**How the definition helps.** The Euler-class definition makes the equality true by construction. In our own comparison, a definition from a projective-bundle relation or curvature does not build in that equality. The work shifts to extending the top class to lower classes and showing that the result satisfies the Chern class axioms. In particular, one must prove the product rule for direct sums.

**Wikipedia:** [Chern class](https://en.wikipedia.org/wiki/Chern_class). It says: “Hence, one simply defines the top Chern class of the bundle to be its Euler class (the Euler class of the underlying real vector bundle) and handles lower Chern classes in an inductive fashion.”

**Sources:**

- [Milnor, J. W.; Stasheff, J. D. (1974). Characteristic Classes. Annals of Mathematics Studies 76. Princeton University Press.](https://doi.org/10.1515/9781400881826)

### The determinant line makes the first Stiefel–Whitney class detect orientability

**Remember:** Orienting a bundle is the same as making its determinant line trivial.

*True by definition.* MSC 57R20 (Characteristic classes and numbers in differential topology), 55R25. arXiv math.AT. Level 3: graduate.

**Definition.** For a real rank-n bundle E over a CW complex X, its determinant line is ∧ⁿE. Define w₁(E) as the class of this line under the classification of real line bundles by H¹(X; ℤ/2).

**Problem.** A real vector bundle E is orientable exactly when w₁(E) = 0.

**How the definition helps.** Orientations of E correspond to orientations of its determinant line. Given a bundle metric, the positive unit vectors form a trivializing section of an oriented line (our own argument). Conversely, a trivialization orients the line. The classification sends exactly the trivial line to zero.

**Wikipedia:** [Orientation of a vector bundle](https://en.wikipedia.org/wiki/Orientation_of_a_vector_bundle), [Stiefel–Whitney class](https://en.wikipedia.org/wiki/Stiefel%E2%80%93Whitney_class). It says: “To give an orientation to a real vector bundle E of rank n is to give an orientation to the (real) determinant bundle det E = ∧ⁿE of E.”

**Sources:**

- [Milnor, J. W.; Stasheff, J. D. (1974). Characteristic Classes. Annals of Mathematics Studies 76. Princeton University Press.](https://doi.org/10.1515/9781400881826)

### The projective-bundle definition gives natural Chern classes that vanish above rank

**Remember:** A unique expansion gives only n coefficients, and pullback preserves the relation.

*True by definition.* MSC 57R20 (Characteristic classes and numbers in differential topology), 14C17. arXiv math.AT, math.AG. Level 3: graduate.

**Definition.** On the projective bundle π of lines in a complex rank-n bundle E, let a be minus the tautological line’s first Chern class. For n &gt; 0, define cᵢ(E) by the unique relation aⁿ + ∑ᵢ₌₁ⁿ π\*(cᵢ(E))aⁿ⁻ⁱ = 0. Set cᵢ(E) = 0 for i &gt; n.

**Problem.** For a complex vector bundle E of rank n, the classes cᵢ(E) vanish for i &gt; n. Pulling back the bundle along a map pulls back its Chern classes.

**How the definition helps.** The projective-bundle definition makes both claims direct because the defining expansion has exactly n coefficients and stays unique after pullback. In our own naturality argument, the bundle of lines and its chosen line both pull back with E. The relation therefore pulls back, and uniqueness identifies each new coefficient. Leray–Hirsch gives uniqueness.

**Wikipedia:** [Chern class](https://en.wikipedia.org/wiki/Chern_class). It says: “In particular, one may define the Chern classes of E in the sense of Grothendieck, denoted c₁(E), … cₙ(E) by expanding this way the class −aⁿ, with the relation:”

**Sources:**

- [Grothendieck, A. (1958). La théorie des classes de Chern. Bulletin de la Société Mathématique de France 86, 137–154.](https://doi.org/10.24033/bsmf.1501)

### The total Stiefel–Whitney class makes the Whitney sum rule multiplicative

**Remember:** Include the constant 1 so ordinary multiplication supplies the end terms.

*Makes the theorem clean to state or prove.* MSC 57R20 (Characteristic classes and numbers in differential topology), 55R40. arXiv math.AT. Level 3: graduate.

**Definition.** The Stiefel–Whitney classes wᵢ(E) record topological properties of a real vector bundle in mod 2 cohomology. Set w₀(E) = 1 and collect the classes into the total class w(E) = 1 + w₁(E) + w₂(E) + ⋯.

**Problem.** The total Stiefel–Whitney class is multiplicative: w(E ⊕ F) = w(E)w(F).

**How the definition helps.** The degree-k part of the product sums wᵢ(E)wⱼ(F) over i + j = k. The constant terms supply both end terms for k &gt; 0 (our own explanation). The Whitney sum formula identifies this sum with wₖ(E ⊕ F).

**Wikipedia:** [Stiefel–Whitney class](https://en.wikipedia.org/wiki/Stiefel%E2%80%93Whitney_class). It says: “The w₀(E) class contains no information, because it is equal to 1 by definition. Its creation by Whitney was an act of creative notation, allowing the Whitney sum Formula w(E₁ ⊕ E₂) = w(E₁)w(E₂) to be true.”

**Sources:**

- [Milnor, J. W.; Stasheff, J. D. (1974). Characteristic Classes. Annals of Mathematics Studies 76. Princeton University Press.](https://doi.org/10.1515/9781400881826)

### Thom-class Euler classes make self-intersection numbers equal normal Euler numbers

**Remember:** Restricting a submanifold's dual class to itself gives its normal Euler class.

*True by definition.* MSC 57R20 (Characteristic classes and numbers in differential topology), 55N45. arXiv math.AT, math.GT. Level 3: graduate.

**Definition.** Let Z be the zero section of an oriented real rank-n bundle E. Its Thom class in Hⁿ(E, E ∖ Z; ℤ) restricts to each fibre’s orientation generator. The Euler class is its pullback along the zero section.

**Problem.** Let M be a closed oriented m-manifold smoothly embedded in a closed oriented 2m-manifold W. The self-intersection number of M equals the Euler class of its normal bundle, evaluated on \[M\].

**How the definition helps.** Our own proof evaluates the restriction of the Poincaré dual of M on \[M\]. In a tubular neighborhood this dual is the absolute image of the normal Thom class. Restriction to M pulls that class back along the zero section, giving the normal Euler class.

**Wikipedia:** [Euler class](https://en.wikipedia.org/wiki/Euler_class). It says: “if Y is a compact submanifold, then the Euler class of the normal bundle of Y in X is naturally identified with the self-intersection of Y in X.”

**Sources:**

- [John W. Milnor and James D. Stasheff, Characteristic Classes (1974)](https://press.princeton.edu/books/paperback/9780691081229/characteristic-classes)

### Thom-class Euler classes vanish for bundles with nowhere-zero sections

**Remember:** A section that misses the zero section pulls the relative class back to zero.

*True by definition.* MSC 57R20 (Characteristic classes and numbers in differential topology), 55R25. arXiv math.AT, math.GT. Level 3: graduate.

**Definition.** Let E be an oriented real vector bundle over X, with zero section E₀. Its Thom class u lies in the cohomology of E relative to E ∖ E₀ and restricts to the orientation generator on each fibre. Define the Euler class e(E) as the pullback of u to X along the zero section.

**Problem.** If an oriented real vector bundle has a section that is nowhere zero, its Euler class is zero.

**How the definition helps.** Our own proof uses the absolute image of the Thom class, which vanishes off the zero section by relative exactness. A nowhere-zero section therefore pulls it back to zero. Scaling that section to zero gives a homotopy, so its pullback equals the Euler class.

**Wikipedia:** [Euler class](https://en.wikipedia.org/wiki/Euler_class). It says: “If E possesses a nowhere-zero section, then e(E) = 0.”

**Sources:**

- [John W. Milnor and James D. Stasheff, Characteristic Classes (1974), §9, Property 9.7](https://press.princeton.edu/books/paperback/9780691081229/characteristic-classes)

### Thom’s Steenrod-square definition bounds Stiefel–Whitney classes by rank

**Remember:** Apply a Steenrod square to the Thom class, then undo the Thom isomorphism.

*True by definition.* MSC 57R20 (Characteristic classes and numbers in differential topology), 55S10. arXiv math.AT. Level 3: graduate.

**Definition.** Thom defines the Stiefel–Whitney classes of a real vector bundle E of rank n by wᵢ(E) = Φ⁻¹(Sqⁱ(u)). Here u is the mod 2 Thom class, of degree n, and Φ is the Thom isomorphism. The Steenrod square Sqⁱ raises degree by i.

**Problem.** For a real vector bundle E of rank n, wᵢ(E) = 0 for i &gt; n and w₀(E) = 1. The top class wₙ(E) is the mod 2 Euler class.

**How the definition helps.** Instability gives Sqⁱ(u) = 0 for i &gt; n, and Sq⁰(u) = u gives w₀ = 1. In our own calculation, Sqⁿ(u) = u ⌣ u. The Thom isomorphism sends the mod 2 Euler class to this square, since the zero section pulls u back to the Euler class.

**Wikipedia:** [Thom space](https://en.wikipedia.org/wiki/Thom_space), [Euler class](https://en.wikipedia.org/wiki/Euler_class). It says: “We can define the ith Stiefel–Whitney class wᵢ(p) of the vector bundle p: E → B by: wᵢ(p) = Φ⁻¹(Sqⁱ(Φ(1))) = Φ⁻¹(Sqⁱ(u)).”

**Sources:**

- [Thom, R. (1952). Espaces fibrés en sphères et carrés de Steenrod. Annales scientifiques de l'École normale supérieure 69, 109–182.](https://doi.org/10.24033/asens.998)

### Wu classes make tangent Stiefel–Whitney classes homotopy invariant

**Remember:** Wu classes use cohomology operations that survive a homotopy equivalence.

*True by definition.* MSC 57R20 (Characteristic classes and numbers in differential topology), 55S10. arXiv math.AT. Level 3: graduate.

**Definition.** On a closed smooth n-manifold M, use cohomology modulo 2. For 0 ≤ k ≤ n, vₖ is the unique degree-k class satisfying vₖ ⌣ x = Sqᵏ(x) for every degree-(n−k) class x.

**Problem.** A homotopy equivalence between closed smooth manifolds pulls back the Stiefel–Whitney classes of one tangent bundle to those of the other.

**How the definition helps.** A homotopy equivalence preserves cup products and Steenrod squares, so uniqueness makes the Wu classes invariant (our own argument). Wu’s theorem expresses the tangent Stiefel–Whitney classes as sums of squares of Wu classes. Each sum commutes with pullback.

**nLab:** [Wu class](https://ncatlab.org/nlab/show/Wu+class). It says: “is defined to be the class that "represents" Sqᵏ(−) under the cup product”

**Wikipedia:** [Thom space](https://en.wikipedia.org/wiki/Thom_space), [Stiefel–Whitney class](https://en.wikipedia.org/wiki/Stiefel%E2%80%93Whitney_class). It says: “since the Steenrod operations are invariant under homotopy equivalence, we conclude that the Stiefel–Whitney classes of a manifold are as well.”

**Sources:**

- [Thom, R. (1952). Espaces fibrés en sphères et carrés de Steenrod. Annales scientifiques de l'École normale supérieure 69, 109–182.](https://doi.org/10.24033/asens.998)

### Defining flows as ℝ-actions makes each time map a diffeomorphism

**Remember:** Running the action backwards undoes running it forwards.

*True by definition.* MSC 57R25 (Vector fields, frame fields in differential topology), 37C10. arXiv math.DG, math.DS. Level 3: graduate.

**Definition.** A global flow on a smooth manifold M is a smooth map φ from ℝ × M to M. Writing φₜ(x) = φ(t,x), require φ₀ = id and φₛ ∘ φₜ = φₛ₊ₜ for all real s and t.

**Problem.** Each time map φₜ of a global flow is a diffeomorphism, with inverse φ₋ₜ.

**How the definition helps.** The action law gives φₜ ∘ φ₋ₜ = φ₀ = φ₋ₜ ∘ φₜ. Both maps are smooth by restriction of φ (our own proof).

**nLab:** [flow of a vector field](https://ncatlab.org/nlab/show/flow+of+a+vector+field). It says: “This yields an action of the additive group (ℝ,+) of real numbers on the differentiable manifold X by diffeomorphisms”

**Sources:** none listed. No primary source with a working link was found.

### Defining indices by the Thom class reduces Poincaré–Hopf to Euler class evaluation

**Remember:** Pull the Thom class back along the field, then split it over the zeros.

*True by definition. Confidence: medium.* MSC 57R25 (Vector fields, frame fields in differential topology), 57R20, 55M25. arXiv math.GT, math.AT. Level 3: graduate.

**Definition.** For a vector field v on a closed oriented manifold, choose an oriented coordinate ball B around each isolated zero containing no other zero. Its index is the evaluation of the tangent Thom class pulled back by v on the relative fundamental class \[B, ∂B\].

**Problem.** For a vector field with isolated zeros on a closed oriented manifold, the indices sum to the Euler characteristic.

**How the definition helps.** Excision splits the relative Thom class pulled back by v into its local contributions (our own argument). Their sum evaluates its absolute image on \[M\]. Scaling v to zero identifies that image with the Euler class. The tangent Euler class evaluates to χ(M).

**nLab:** [Euler class](https://ncatlab.org/nlab/show/Euler+class). It says: “The Euler class of the tangent bundle of a smooth manifold X, evaluated on its fundamental class, is its Euler characteristic χ\[X\].”

**Sources:**

- [John W. Milnor, Topology from the Differentiable Viewpoint, §§5–6](https://press.princeton.edu/books/paperback/9780691048338/topology-from-the-differentiable-viewpoint)
- [John W. Milnor and James D. Stasheff, Characteristic Classes (1974)](https://press.princeton.edu/books/paperback/9780691081229/characteristic-classes)

### Defining the bracket as a commutator makes related fields have related brackets

**Remember:** Operators that intertwine with pullback still intertwine after taking commutators.

*True by definition. Confidence: medium.* MSC 57R25 (Vector fields, frame fields in differential topology), 17B66. arXiv math.DG. Level 3: graduate.

**Definition.** Treat a vector field as a derivation, a linear operator on smooth functions that obeys the product rule. Define the bracket \[X, Y\] as the commutator XY − YX. Fields X on M and X′ on N are F-related when dF sends X(p) to X′(F(p)) for every point p.

**Problem.** Let F: M → N be smooth. If X is F-related to X′ and Y is F-related to Y′, then \[X, Y\] is F-related to \[X′, Y′\].

**How the definition helps.** In our own proof, related fields satisfy X ∘ F\* = F\* ∘ X′ on smooth functions. Applying the identities for X and Y successively gives XY ∘ F\* = F\* ∘ X′Y′. Reversing the order and subtracting proves the bracket identity.

**nLab:** [Lie bracket of vector fields](https://ncatlab.org/nlab/show/Lie+bracket+of+vector+fields). It says: “Taking the commutator uv−vu of these derivations produces another derivation”

**Sources:** none listed. No primary source with a working link was found.

### Defining the Lie derivative by flows makes zero derivative mean invariance

**Remember:** The flow law carries a zero derivative at time zero to every time.

*True by definition. Confidence: medium.* MSC 57R25 (Vector fields, frame fields in differential topology), 37C10. arXiv math.DG. Level 3: graduate.

**Definition.** Define the Lie derivative of a tensor field T along a vector field X as the derivative at t = 0 of φₜ\*T. Here φₜ is the flow of X, and φₜ\*T is the pullback of T.

**Problem.** Let X be a complete vector field. If the Lie derivative of T along X is zero, then every flow map φₜ preserves T.

**How the definition helps.** The flow law gives φₜ₊ₛ\*T = φₜ\*(φₛ\*T). In our own proof, differentiating in s at zero gives the time derivative of φₜ\*T as the pullback of the Lie derivative. That derivative vanishes, so the pullback stays equal to its initial value T.

**Wikipedia:** [Lie derivative](https://en.wikipedia.org/wiki/Lie_derivative). It says: “The Lie derivative is the speed with which the tensor field changes under the space deformation caused by the flow.”

**Sources:** none listed. No primary source with a working link was found.

### The outward-boundary condition is what makes Poincaré–Hopf hold on manifolds with boundary

**Remember:** Point outward at the edge, and zeros count the Euler characteristic.

*Rules out counterexamples. Confidence: medium.* MSC 57R25 (Vector fields, frame fields in differential topology), 55M25. arXiv math.DG, math.AT. Level 3: graduate.

**Definition.** A field points outward if its normal component points strictly out of the manifold at every boundary point. At an isolated interior zero, its index is the degree of its normalized coordinate field on a small sphere enclosing only that zero.

**Problem.** Poincaré–Hopf theorem. Let v be a vector field with isolated zeros on a compact manifold M, pointing outward with no zeros along any boundary. Then the indices of v sum to the Euler characteristic χ(M).

**How the definition helps.** The outward condition keeps zeros off the boundary throughout a straight-line homotopy between outward fields. Homotopy invariance of total index permits comparison with an outward Morse gradient, whose index sum is χ(M) by Morse theory (our own argument). A constant nonzero field on a disk has index sum zero although the disk has Euler characteristic one (our own example).

**Wikipedia:** [Poincaré–Hopf theorem](https://en.wikipedia.org/wiki/Poincar%C3%A9%E2%80%93Hopf_theorem). It says: “If M has a boundary, then we insist that v be pointing in the outward normal direction along the boundary and have no zeros on the boundary.”

**Sources:** none listed. No primary source with a working link was found.

### Defining submersions as local projections gives local sections immediately

**Remember:** Freeze the discarded coordinates to get a local section.

*True by definition. Confidence: medium.* MSC 57R35 (Differentiable mappings in differential topology), 58A05. arXiv math.DG, math.GT. Level 3: graduate.

**Definition.** Call f: X → Y a submersion when, near each point, some charts make it a projection (x₁, …, xₙ) ↦ (x₁, …, xₘ). The usual definition asks that the derivative be onto at every point. The two agree by the rank theorem, which gives such charts for maps of constant rank.

**Problem.** A submersion f: X → Y has a local section through every point. For each x in X there is a smooth map s near f(x) with f ∘ s the identity and s(f(x)) = x.

**How the definition helps.** With the projection definition, a section is just the map that freezes the discarded coordinates. In our own proof, take charts centred at x and set s(x₁, …, xₘ) = (x₁, …, xₘ, 0, …, 0). With the derivative definition, one must first build the projection charts. The work goes into the rank theorem, which comes from the inverse function theorem.

**nLab:** [submersion](https://ncatlab.org/nlab/show/submersion). It says: “In terms of coordinates, the map f is a submersion at a point p : X if and only if there exists a coordinate chart on X near p and a coordinate chart on Y near f(p) relative to which f is the projection f(x₁,…,xₙ) = (x₁,…,xₘ).”

**Sources:** none listed. No primary source with a working link was found.

### Defining submersions as local projections gives local sections that detect smoothness

**Remember:** Use a local section to test smoothness downstairs.

*True by definition. Confidence: medium.* MSC 57R35 (Differentiable mappings in differential topology). arXiv math.DG. Level 3: graduate.

**Definition.** A smooth map p is a submersion if suitable charts near each point turn it into a coordinate projection. The infinitesimal definition asks that the derivative of p be onto at each point.

**Problem.** Let p from M to N be a surjective submersion, and let h be a map from N to a smooth manifold. If h ∘ p is smooth, then h is smooth.

**How the definition helps.** With the local-projection definition, p has smooth local sections, made by fixing the coordinates that p forgets. Near a point of N, h equals (h ∘ p) ∘ s for such a section s, so h is smooth there (our own step). Surjectivity gives such a section near every point of N. The derivative definition gives local sections only after the submersion theorem, which carries the work (our own comparison).

**Wikipedia:** [Submersion (mathematics)](https://en.wikipedia.org/wiki/Submersion_%28mathematics%29). It says: “the map f in these local coordinates is the standard projection”

**Sources:** none listed. No primary source with a working link was found.

### Defining submersions as local projections makes them stable under pullback

**Remember:** Pulling back a projection keeps the extra coordinates free.

*True by definition. Confidence: medium.* MSC 57R35 (Differentiable mappings in differential topology), 58A05. arXiv math.DG. Level 3: graduate.

**Definition.** A smooth map p is a submersion if suitable charts near each point turn it into a projection that forgets some coordinates. The infinitesimal definition asks that the derivative of p be onto at every point. The submersion theorem, a form of the implicit function theorem, shows that the two definitions agree.

**Problem.** Let p from E to B be a submersion and f from A to B any smooth map. Then the fiber product of all pairs (a, e) with f(a) = p(e) is a smooth manifold. Its projection to A is a submersion.

**How the definition helps.** In projection charts for p, the fibre product looks locally like f⁻¹(U) × V, where V contains the free coordinates (our own proof). These charts give the fibre product its smooth structure. Projection to A forgets the V coordinate, so it is a submersion.

**nLab:** [submersion](https://ncatlab.org/nlab/show/submersion). It says: “Moreover, submersions are stable under pullback.”

**Sources:** none listed. No primary source with a working link was found.

### Diagonal transversality makes the fibre product of two maps smooth

**Remember:** The diagonal tests equality of two outputs at once.

*True by definition. Confidence: medium.* MSC 57R35 (Differentiable mappings in differential topology), 58A05. arXiv math.GT, math.DG. Level 3: graduate.

**Definition.** Maps f: X → Z and g: Y → Z are transverse when, wherever f(x) = g(y), their derivative images span TZ there. Equivalently, the product map f × g: X × Y → Z × Z is transverse to the diagonal, the set of pairs (z, z).

**Problem.** Let f and g be transverse, and let X, Y and Z have no boundary. Then the set of pairs (x, y) with f(x) = g(y) is a submanifold of X × Y. When it is nonempty, its dimension is dim X + dim Y − dim Z.

**How the definition helps.** The diagonal form reduces the theorem to the preimage theorem for one map and one submanifold. In our own proof, the set of pairs is the preimage of the diagonal under f × g. So it is a submanifold whose codimension is that of the diagonal, which is dim Z. The two forms agree because, by taking differences, directions normal to the diagonal correspond to tangent vectors of Z.

**nLab:** [transversal maps](https://ncatlab.org/nlab/show/transversal+maps). It says: “the differentials of f and g in these points span the entire tangent space at z”

**Sources:** none listed. No primary source with a working link was found.

### Properness is the condition that makes a submersion a fibre bundle

**Remember:** Proper submersions cannot lose points to infinity, so fibres stay alike.

*Rules out counterexamples.* MSC 57R35 (Differentiable mappings in differential topology), 57R22. arXiv math.DG, math.GT. Level 3: graduate.

**Definition.** A smooth map f from M to N is a submersion if its derivative is onto at every point. It is proper if the preimage of every compact set is compact.

**Problem.** By Ehresmann’s theorem, a surjective proper submersion between smooth manifolds without boundary is a locally trivial smooth fibre bundle. All fibres over a connected base are then diffeomorphic.

**How the definition helps.** Properness stops fibres from escaping to infinity, so the lifted flows that move one fibre to the next exist long enough. Without it, project the plane with the origin removed to the x-axis (our own example). That is a surjective submersion, but the fibre over 0 is two half-lines while the other fibres are whole lines. The proof lifts vector fields from the base and integrates them (our own sketch).

**Wikipedia:** [Ehresmann's lemma](https://en.wikipedia.org/wiki/Ehresmann%27s_lemma). It says: “a proper map (in particular, this condition is always satisfied if M is compact), then it is a locally trivial fibration.”

**Sources:** none listed. No primary source with a working link was found.

### Defining embeddings as homeomorphic immersions makes proper injective immersions embeddings

**Remember:** Properness supplies the topology, and the immersion supplies the derivative.

*True by definition.* MSC 57R40 (Embeddings in differential topology), 58A05. arXiv math.DG, math.GT. Level 3: graduate.

**Definition.** Call a smooth map an embedding when it is an immersion and a homeomorphism onto its image with the subspace topology. An immersion is a map whose derivative is injective at every point.

**Problem.** A proper injective immersion is an embedding with closed image. Proper means that inverse images of compact sets are compact.

**How the definition helps.** With this definition, only a point-set fact remains to check. In our own proof, a proper continuous map into a manifold is closed, because manifolds are locally compact and Hausdorff. A closed continuous injection is a homeomorphism onto its image, and that image is closed. The immersion condition is given.

**nLab:** [embedding of differentiable manifolds](https://ncatlab.org/nlab/show/embedding+of+differentiable+manifolds). It says: “proper injective immersions are equivalently the closed embeddings”

**Sources:** none listed. No primary source with a working link was found.

### Defining injective immersions by jet conditions makes embeddings dense in high dimension

**Remember:** Bad jets and double points vanish when their codimension exceeds the source dimension.

*True by definition. Confidence: medium.* MSC 57R40 (Embeddings in differential topology), 57R45. arXiv math.GT, math.DG. Level 3: graduate.

**Definition.** For compact M, a smooth map M → N is an embedding if its derivative is injective everywhere and distinct points have distinct images.

**Problem.** Let M be a compact manifold of dimension m without boundary, and N a manifold of dimension n &gt; 2m. Then smooth embeddings are dense among smooth maps M → N.

**How the definition helps.** Jet and multijet transversality give generic avoidance of both forbidden sets (our own argument). Each deficient-rank stratum has codimension at least n − m + 1 &gt; m. On distinct pairs the diagonal has codimension n &gt; 2m. A transverse preimage of either kind must therefore be empty.

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

**How the definition helps.** In our own proof, compose df on W with the quotient by TZ. Transversality makes this composite surjective on each fibre. The transverse preimage theorem identifies its kernel with TW, so it induces the required smooth bundle isomorphism.

**nLab:** [normal bundle](https://ncatlab.org/nlab/show/normal+bundle). It says: “The normal bundle is fiberwise the quotient of the fiber of the tangent bundle of Y by the fiber of the tangent bundle of X”

**Sources:** none listed. No primary source with a working link was found.

### Defining normal bundles as tangent quotients makes them independent of metric

**Remember:** A normal direction is a tangent vector up to directions along the submanifold.

*True by definition. Confidence: medium.* MSC 57R40 (Embeddings in differential topology), 57R22. arXiv math.DG, math.GT. Level 3: graduate.

**Definition.** Let X be an embedded submanifold of Y. Define its normal bundle as TY restricted to X, modulo TX, fibre by fibre. Another definition takes the vectors perpendicular to TX for a chosen Riemannian metric, a smoothly varying inner product.

**Problem.** For any two Riemannian metrics on Y, the two perpendicular bundles of X are canonically isomorphic.

**How the definition helps.** Both perpendicular bundles map smoothly to the same quotient (our own argument). Each coset has a unique representative perpendicular to TX for each metric. Composing one identification with the inverse of the other gives the canonical isomorphism.

**nLab:** [normal bundle](https://ncatlab.org/nlab/show/normal+bundle). It says: “The normal bundle is fiberwise the quotient of the fiber of the tangent bundle of Y by the fiber of the tangent bundle of X”

**Sources:** none listed. No primary source with a working link was found.

### Defining submanifolds by slice charts makes restricting the target smooth

**Remember:** To read a map into a slice, drop the zero coordinates.

*True by definition. Confidence: medium.* MSC 57R40 (Embeddings in differential topology), 58A05. arXiv math.DG, math.GT. Level 3: graduate.

**Definition.** Call S ⊂ M an embedded submanifold when each point of S has a chart of M in which S is a coordinate slice. A coordinate slice is the set where the last few coordinates are zero.

**Problem.** Let F: N → M be smooth with image inside an embedded submanifold S. Then F is smooth as a map into S.

**How the definition helps.** With slice charts, the charts of S are the slice charts with the zero coordinates dropped. In our own proof, F is continuous into S because S has the subspace topology. In a slice chart, F into S is F into M followed by dropping the zero coordinates, so it is smooth.

**nLab:** [embedding of differentiable manifolds](https://ncatlab.org/nlab/show/embedding+of+differentiable+manifolds). It says: “For each point σ ∈ Σ there is a coordinate chart”

**Sources:** none listed. No primary source with a working link was found.

### Defining field theories as functors makes mapping torus values traces

**Remember:** Closing a cylinder takes the trace of its map.

*True by definition.* MSC 57R56 (Topological quantum field theories (aspects of differential topology)). arXiv math.QA, math.GT. Level 3: graduate.

**Definition.** An oriented topological field theory is a symmetric monoidal functor from the oriented bordism category to vector spaces over a field. Composition glues bordisms, and the functor sends disjoint unions to tensor products.

**Problem.** Let f be an orientation-preserving diffeomorphism of a closed manifold Σ. Glue the two ends of Σ × \[0, 1\] by f to get the mapping torus T(f). Then Z(T(f)) is the trace of the linear map Z(f) on Z(Σ).

**How the definition helps.** The functor definition turns gluing the two ends into a trace. The mapping torus is the cylinder of f composed with two bordisms that bend Σ back on itself (our own explanation). These bending bordisms make Z(Σ) and the space of Σ with reversed orientation dual to each other. Applying Z to the composite gives the trace of Z(f) (our own).

**Wikipedia:** [Topological quantum field theory](https://en.wikipedia.org/wiki/Topological_quantum_field_theory). It says: “Z(Σf) = Trace Σ(f)”

**Sources:**

- [Michael Atiyah, Topological quantum field theory (1988)](https://doi.org/10.1007/BF02698547)

### Every map between topological field theories is invertible

**Remember:** With duals everywhere, you can run every map of theories backwards.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 57R56 (Topological quantum field theories (aspects of differential topology)), 18M05. arXiv math.QA, math.AT. Level 3: graduate.

**Definition.** A fully extended framed n-dimensional topological quantum field theory is a symmetric monoidal functor from framed Bordₙ to a symmetric monoidal (∞,n)-category 𝒞. A morphism of theories is a symmetric monoidal natural transformation.

**Problem.** Every morphism between two framed n-dimensional TQFTs with values in 𝒞 is invertible. So two such theories are either equivalent or have no morphism between them.

**How the definition helps.** The cobordism hypothesis identifies the category of these theories with the ∞-groupoid of fully dualizable objects of 𝒞 (our own explanation). Every morphism in this groupoid has an inverse up to equivalence.

**nLab:** [cobordism hypothesis](https://ncatlab.org/nlab/show/cobordism+hypothesis). It says: “In particular, any two of them are either equivalent or have no morphism between them.”

**Sources:**

- [Jacob Lurie, On the Classification of Topological Field Theories, Current Developments in Mathematics 2008 (2009) 129–280, arXiv:0905.0465](https://arxiv.org/abs/0905.0465)

### Functorial field theories have finite-dimensional state spaces through bordism duality

**Remember:** Bent cylinders make a dual, and duals in vector spaces are finite.

*True by definition. Confidence: medium.* MSC 57R56 (Topological quantum field theories (aspects of differential topology)). arXiv math.QA, math.GT. Level 3: graduate.

**Definition.** An oriented topological field theory is a symmetric monoidal functor from oriented bordisms to vector spaces over a field. It sends disjoint unions to tensor products and gluing to composition.

**Problem.** Every state space Z(Σ) of such a field theory is finite-dimensional, although the target allows all vector spaces.

**How the definition helps.** Bent cylinders give evaluation and coevaluation maps satisfying the duality identities (our own argument). Coevaluation sends 1 to a finite sum of elementary tensors. The duality identity then expresses every state as a linear combination of the first factors.

**nLab:** [functorial field theory](https://ncatlab.org/nlab/show/functorial+field+theory). It says: “For genuine topological field theories, all spaces of quantum states are finite dimensional”

**Sources:**

- [Michael Atiyah, Topological quantum field theory (1988)](https://doi.org/10.1007/BF02698547)

### Quadratic refinements make spin signs multiply

**Remember:** Connected sum puts the two quadratic forms side by side.

*True by definition.* MSC 57R56 (Topological quantum field theories (aspects of differential topology)). arXiv math.AT. Level 3: graduate.

**Definition.** A spin structure on a closed oriented surface determines q on first homology modulo two, satisfying q(x+y) = q(x)+q(y)+x·y for all x,y. For any symplectic basis (aᵢ,bᵢ), set Arf(q) = ∑ᵢ q(aᵢ)q(bᵢ) modulo two. The Arf theory assigns the sign (−1)ᴬʳᶠ⁽ᑫ⁾.

**Problem.** For closed connected spin surfaces Σ and Σ′, the Arf sign of Σ \# Σ′ equals the product of their Arf signs.

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

**Definition.** A 2d topological quantum field theory (TQFT) in the sense of Atiyah is a symmetric monoidal functor Z from 2Cob to vector spaces. In 2Cob, the objects are closed oriented 1-manifolds (unions of circles), and the morphisms are oriented surfaces between them (cobordisms).

**Problem.** Two-dimensional TQFTs are equivalent to commutative Frobenius algebras. The equivalence sends Z to Z(S¹) with the product from the pair of pants and the trace from the cap.

**How the definition helps.** Abrams’s presentation of oriented two-dimensional bordisms gives exactly the generators and relations of a commutative Frobenius algebra. A symmetric monoidal functor sends the circle to that algebra and gluing to its operations (our own explanation). Conversely, the relations make these assignments independent of the decomposition of a surface.

**nLab:** [Frobenius algebra](https://ncatlab.org/nlab/show/Frobenius+algebra), [functorial field theory](https://ncatlab.org/nlab/show/functorial+field+theory). It says: “The PROP for commutative Frobenius algebras is 2Cob, as noted by many people and formally proved in Abrams (1996).”

**Sources:**

- [Lowell Abrams, Two-dimensional topological quantum field theories and Frobenius algebras, J. Knot Theory Ramifications 5 (1996) 569–587](https://doi.org/10.1142/S0218216596000333)
- [Joachim Kock, Frobenius Algebras and 2D Topological Quantum Field Theories, Cambridge University Press (2004)](http://mat.uab.cat/~kock/TQFT.html)

### Counting homotopy spheres up to h-cobordism makes them a finite group

**Remember:** Group spheres by h-cobordism, and connected sum gives inverses.

*Makes the theorem clean to state or prove.* MSC 57R60 (Homotopy spheres, Poincaré conjecture), 57R80. arXiv math.GT, math.AT. Level 3: graduate.

**Definition.** An oriented homotopy n-sphere is a closed oriented smooth manifold homotopy equivalent to Sⁿ. An oriented h-cobordism joins two such spheres by a compact oriented cobordism whose two boundary inclusions are homotopy equivalences. Define Θₙ as their oriented h-cobordism classes under connected sum.

**Problem.** Kervaire and Milnor showed that Θₙ is a finite abelian group for every n ≠ 3. For example, Θ₇ has order 28, so there are 28 oriented smooth structures on the 7-sphere.

**How the definition helps.** Oriented h-cobordism makes connected sum a group operation with orientation reversal as inverse (our own explanation). Kervaire and Milnor’s finiteness theorem and their calculation in dimension seven give the stated orders. The h-cobordism theorem identifies the seven-dimensional classes with oriented diffeomorphism classes.

**Wikipedia:** [Exotic sphere](https://en.wikipedia.org/wiki/Exotic_sphere). It says: “Provided n ≠ 4, this monoid is a group and is isomorphic to the group Θₙ of h-cobordism classes of oriented homotopy n-spheres, which is finite and abelian.”

**Sources:**

- [Michel A. Kervaire and John W. Milnor, Groups of homotopy spheres I, Annals of Mathematics 77 (1963) 504–537](https://doi.org/10.2307/1970128)

### Homotopy spheres are the right hypothesis for the higher Poincaré conjecture

**Remember:** In high dimensions, ask for a sphere's homotopy type, not just simple connectivity.

*Rules out counterexamples.* MSC 57R60 (Homotopy spheres, Poincaré conjecture). arXiv math.GT. Level 3: graduate.

**Definition.** A homotopy n-sphere is a closed n-manifold (compact and without boundary) that is homotopy equivalent to the n-sphere. Homotopy equivalent means that there are maps both ways whose composites can be deformed continuously into the identity maps.

**Problem.** Generalized Poincaré theorem. Every homotopy n-sphere is homeomorphic to the n-sphere.

**How the definition helps.** In dimension 4 and higher, simple connectivity does not pick out the sphere, so the hypothesis asks for the homotopy type. For example, S² × S² is simply connected but has the wrong second homology (our own example). With the homotopy-sphere hypothesis, Smale proved the theorem for n ≥ 5 in 1961, and Freedman proved it for n = 4 in 1982. In dimension 3, simple connectivity is already enough.

**Wikipedia:** [Poincaré conjecture](https://en.wikipedia.org/wiki/Poincar%C3%A9_conjecture), [Homotopy sphere](https://en.wikipedia.org/wiki/Homotopy_sphere). It says: “A stronger assumption than simply-connectedness is necessary; in dimensions four and higher there are simply-connected, closed manifolds which are not homotopy equivalent to an n-sphere.”

**Sources:**

- [S. Smale, Generalized Poincaré's conjecture in dimensions greater than four, Annals of Mathematics 74 (1961) 391–406](https://doi.org/10.2307/1970239)

### The generalized Poincaré conjecture asks for homeomorphism, not diffeomorphism

**Remember:** Exotic spheres are spheres to a topologist but not to a differential geometer.

*Rules out counterexamples.* MSC 57R60 (Homotopy spheres, Poincaré conjecture), 57R55. arXiv math.GT. Level 3: graduate.

**Definition.** A homeomorphism is a continuous bijection with continuous inverse. An exotic n-sphere is a smooth manifold homeomorphic to Sⁿ but admitting no diffeomorphism to Sⁿ.

**Problem.** Every homotopy n-sphere is homeomorphic to the n-sphere. A homotopy n-sphere is a closed n-manifold with the homotopy type of the n-sphere.

**How the definition helps.** Milnor’s exotic seven-sphere satisfies the required topological conclusion even though its smooth structure differs. The generalized Poincaré theorem supplies the homeomorphism for arbitrary homotopy spheres (our own explanation).

**Wikipedia:** [Exotic sphere](https://en.wikipedia.org/wiki/Exotic_sphere), [Homotopy sphere](https://en.wikipedia.org/wiki/Homotopy_sphere). It says: “At first, I thought I'd found a counterexample to the generalized Poincaré conjecture in dimension seven. But careful study showed that the manifold really was homeomorphic to S⁷.”

**Sources:**

- [J. Milnor, On manifolds homeomorphic to the 7-sphere, Annals of Mathematics 64 (1956) 399–405](https://doi.org/10.2307/1969983)
- [M. Kervaire and J. Milnor, Groups of homotopy spheres I, Annals of Mathematics 77 (1963) 504–537](https://doi.org/10.2307/1970128)

### Defining homology by the Morse complex makes critical counts give Euler characteristic

**Remember:** The alternating sum of chain ranks equals the alternating sum of homology ranks.

*True by definition. Confidence: medium.* MSC 57R70 (Critical points and critical submanifolds in differential topology), 58E05. arXiv math.GT, math.AT. Level 3: graduate.

**Definition.** Choose a Morse–Smale gradient and coherent orientations for a Morse function on a closed manifold. Over a fixed field, the degree-k chains have one basis vector per critical point with k negative Hessian eigenvalues. The differential counts oriented unparametrized negative gradient trajectories between critical points whose indices differ by one.

**Problem.** For a Morse function on a closed manifold, let cₖ be the number of critical points of index k. Then the alternating sum of the cₖ equals the Euler characteristic.

**How the definition helps.** The Morse complex is a finite chain complex whose ranks are the critical point counts. For any finite chain complex over a field, the alternating sum of chain ranks equals that of homology ranks. In our own proof, this follows from rank–nullity, because the ranks of the boundary maps cancel in pairs. The work goes into the theorem that Morse homology equals singular homology.

**Wikipedia:** [Morse homology](https://en.wikipedia.org/wiki/Morse_homology). It says: “the boundary maps in the Morse and cellular complexes correspond”

**Paper or page:** [Witten Deformation and Its Application toward Morse Inequalities](https://arxiv.org/abs/1710.09579v1). It says: “and the equality holds when q = n”

**Sources:**

- [Edward Witten, Supersymmetry and Morse theory (1982), pp. 661–692](https://doi.org/10.4310/jdg/1214437492)

### Defining homology by the Morse complex makes even-index Morse functions perfect

**Remember:** With no odd generators, the Morse differential has nowhere to go.

*True by definition. Confidence: medium.* MSC 57R70 (Critical points and critical submanifolds in differential topology), 58E05. arXiv math.GT, math.AT. Level 3: graduate.

**Definition.** Choose a Morse–Smale gradient and coherent orientations for a Morse function on a closed manifold. Over a fixed field, the degree-k chains have one basis vector per critical point with k negative Hessian eigenvalues. The differential counts oriented unparametrized negative gradient trajectories between critical points whose indices differ by one.

**Problem.** Suppose a Morse function on a closed manifold has only critical points of even index. For each k, the number of index-k critical points equals the k-th Betti number.

**How the definition helps.** Every differential meets a zero odd-degree chain group, so all differentials vanish (our own proof). Homology therefore has one basis vector per critical point in its degree. The Morse homology theorem identifies this homology with singular homology.

**Wikipedia:** [Morse homology](https://en.wikipedia.org/wiki/Morse_homology). It says: “the boundary maps in the Morse and cellular complexes correspond”

**Sources:** none listed. No primary source with a working link was found.

### Defining homology by the Morse complex makes the weak Morse inequalities immediate

**Remember:** Homology cannot have more independent classes than the chains it comes from.

*True by definition.* MSC 57R70 (Critical points and critical submanifolds in differential topology), 58E05. arXiv math.GT, math.AT. Level 3: graduate.

**Definition.** Choose a Morse–Smale gradient and coherent orientations for a Morse function on a closed manifold. Over a fixed field, the degree-k chains have one basis vector per critical point with k negative Hessian eigenvalues. The differential counts oriented unparametrized negative gradient trajectories between critical points whose indices differ by one.

**Problem.** For a Morse function on a closed manifold, the number of index-k critical points is at least the k-th Betti number.

**How the definition helps.** Degree-k homology is a quotient of a subspace of degree-k Morse chains (our own argument). Its dimension cannot exceed the number of generators. The Morse homology theorem identifies it with singular homology.

**Wikipedia:** [Morse homology](https://en.wikipedia.org/wiki/Morse_homology). It says: “From the fact that the Morse homology is isomorphic to the singular homology, the Morse inequalities follow by considering the number of generators”

**Paper or page:** [Witten Deformation and Its Application toward Morse Inequalities](https://arxiv.org/abs/1710.09579v1). It says: “Let M be a closed smooth n-dimensional manifold. Suppose f ∈ C∞(M) is a Morse function. Then we have Weak Morse Inequalities: for each 0 ≤ q ≤ n, b<sub>q</sub> ≤ m<sub>q</sub>”

**Sources:**

- [Edward Witten, Supersymmetry and Morse theory (1982), pp. 661–692](https://doi.org/10.4310/jdg/1214437492)

### Defining Morse functions by jet transversality makes them generic

**Remember:** Transversality to the zero-derivative jets is generic, so Morse functions are generic.

*True by definition. Confidence: medium.* MSC 57R70 (Critical points and critical submanifolds in differential topology), 58K05, 57R45. arXiv math.GT, math.DG. Level 3: graduate.

**Definition.** The first jet of a smooth real function records its point, value and derivative. Call the function Morse if its first-jet map is transverse to the submanifold of jets with zero derivative.

**Problem.** On a compact manifold without boundary, Morse functions form an open dense set of smooth functions. Here two functions are close when they and all their derivatives are uniformly close.

**How the definition helps.** Thom’s jet transversality theorem gives density. The zero-derivative submanifold is closed and the source is compact, so transversality is open. In coordinates the transverse derivative is the Hessian at a critical point, giving the usual nondegeneracy test (our own check).

**nLab:** [Morse function](https://ncatlab.org/nlab/show/Morse+function). It says: “The function f is called a Morse function if every critical point of f is regular”

**Sources:**

- [Martin Golubitsky and Victor Guillemin, Stable Mappings and Their Singularities (1973), Chapter II, Transversality](https://doi.org/10.1007/978-1-4615-7904-5_2)

### Defining the Morse differential as cellular makes it square to zero

**Remember:** A cellular boundary map squares to zero, so the Morse differential does too.

*True by definition. Confidence: medium.* MSC 57R70 (Critical points and critical submanifolds in differential topology), 58E05. arXiv math.GT, math.AT. Level 3: graduate.

**Definition.** Choose a Morse–Smale negative gradient on a closed manifold with a Euclidean metric in Morse coordinates near each critical point. Its unstable cells consist of points converging to their respective critical points in backward time. Define the Morse differential as the cellular boundary for these oriented cells.

**Problem.** On a closed manifold, take a Morse function and a metric of that kind whose stable and unstable manifolds meet transversely. Then the Morse differential applied twice gives zero.

**How the definition helps.** Every cellular boundary squares to zero, so the cellular definition gives the identity immediately. The cellular comparison theorem identifies its coefficients with signed counts of gradient trajectories (our own explanation).

**Wikipedia:** [Morse homology](https://en.wikipedia.org/wiki/Morse_homology). It says: “the boundary maps in the Morse and cellular complexes correspond”

**Sources:** none listed. No primary source with a working link was found.

### Requiring nondegenerate critical points makes Morse theory see every change

**Remember:** Critical points must curve, or they may change nothing.

*Rules out counterexamples.* MSC 57R70 (Critical points and critical submanifolds in differential topology). arXiv math.DG, math.GT. Level 3: graduate.

**Definition.** A critical point of a smooth function f is a point where its derivative is zero. It is nondegenerate if the Hessian, the matrix of second derivatives, is invertible there. A Morse function has only nondegenerate critical points.

**Problem.** Let f be a Morse function on a compact manifold without boundary. Crossing a critical value containing one critical point of index k changes the sublevel set up to homotopy by attaching one k-cell.

**How the definition helps.** At a nondegenerate critical point, the Morse lemma gives a quadratic normal form with exactly k negative squares after subtracting the critical value. The Morse attachment theorem gives the corresponding k-cell (our own explanation). For x³ on ℝ, crossing zero leaves both sublevel sets contractible despite the critical point.

**Wikipedia:** [Morse theory](https://en.wikipedia.org/wiki/Morse_theory). It says: “One must take care to make the critical points non-degenerate. To see what can pose a problem, let M = ℝ and let f(x) = x³.”

**Sources:**

- [M. Morse, Relations between the critical points of a real function of n independent variables, Transactions of the American Mathematical Society 27 (1925) 345–396](https://doi.org/10.1090/S0002-9947-1925-1501318-X)
- [R. Bott, Lectures on Morse theory, old and new, Bulletin of the American Mathematical Society 7 (1982) 331–358](https://doi.org/10.1090/s0273-0979-1982-15038-8)

### Cobordism, a coarser relation than diffeomorphism, gives a computable classification

**Remember:** A disjoint union that bounds identifies two unoriented cobordism classes.

*Makes the theorem clean to state or prove.* MSC 57R75 (\\(\\mathrm\\)- and \\(\\mathrm\\)-cobordism), 55N22. arXiv math.AT, math.GT. Level 3: graduate.

**Definition.** Two closed smooth n-manifolds are unoriented cobordant if their disjoint union is the boundary of a compact smooth (n+1)-manifold. Disjoint union adds classes of the same dimension, and Cartesian product multiplies classes in the graded cobordism ring.

**Problem.** Thom showed that the unoriented cobordism ring is a polynomial ring over ℤ/2. It has one generator in each positive degree not of the form 2ᵏ − 1. A closed manifold bounds if and only if all its Stiefel–Whitney numbers vanish.

**How the definition helps.** Cobordism makes bounding equivalent to representing zero (our own explanation). Pontryagin–Thom identifies the graded groups with stable homotopy groups of the unoriented Thom spectrum. Thom’s computation gives the polynomial generators and shows that Stiefel–Whitney numbers detect the zero class.

**Wikipedia:** [Cobordism](https://en.wikipedia.org/wiki/Cobordism). It says: “The cobordism class \[M\] ∈ 𝔑ₙ of a closed unoriented n-dimensional manifold M is determined by the Stiefel–Whitney characteristic numbers of M”

**Sources:**

- [René Thom, Quelques propriétés globales des variétés différentiables, Commentarii Mathematici Helvetici 28 (1954) 17–86](https://doi.org/10.1007/BF02566923)

### Defining bordism geometrically makes homotopic maps represent the same class

**Remember:** A homotopy is a bordism on the cylinder.

*True by definition. Confidence: medium.* MSC 57R75 (\\(\\mathrm\\)- and \\(\\mathrm\\)-cobordism), 55N22. arXiv math.AT. Level 3: graduate.

**Definition.** An oriented bordism class over X is represented by a closed oriented manifold M with a map f: M → X. Two such maps are bordant when they extend over a compact oriented manifold whose boundary is the first source and the second with reversed orientation.

**Problem.** Homotopic maps from the same closed oriented manifold to X represent the same oriented bordism class over X.

**How the definition helps.** With the geometric definition, a homotopy is itself a bordism. In our own proof, a homotopy is a map from the cylinder M × \[0, 1\]. Its oriented boundary is M at one end and M with reversed orientation at the other.

**nLab:** [bordism homology theory](https://ncatlab.org/nlab/show/bordism+homology+theory). It says: “Atiyah's geometric model for bordism homology groups defines them as equivalence classes of maps of manifolds.”

**Sources:**

- [M. F. Atiyah, Bordism and Cobordism (1961), pp. 200–208](https://doi.org/10.1017/S0305004100035064)

### Multiplicative sequences make genera multiply on manifold products

**Remember:** Products join the formal factors, so their genus values multiply.

*True by definition.* MSC 57R75 (\\(\\mathrm\\)- and \\(\\mathrm\\)-cobordism), 57R20, 55N22. arXiv math.AT. Level 3: graduate.

**Definition.** Write the total rational Pontryagin class of a manifold as a formal product of factors (1 + zⱼ). A rational power series Q with constant term 1 gives the multiplicative sequence ∏ Q(zⱼ), rewritten in Pontryagin classes. The genus of a closed oriented manifold is the value of its top-degree part on the fundamental class.

**Problem.** The genus defined by a multiplicative sequence is multiplicative on products of manifolds. It vanishes on oriented boundaries.

**How the definition helps.** Our own calculation uses the product tangent bundle to join the two lists of Pontryagin factors. Only the top degrees on both factors contribute to evaluation, so the values multiply. On an oriented boundary the stable tangent bundle extends over the bounding manifold. Its characteristic class therefore pairs trivially with the boundary fundamental class.

**Wikipedia:** [Genus of a multiplicative sequence](https://en.wikipedia.org/wiki/Genus_of_a_multiplicative_sequence). It says: “The conditions on Φ can be rephrased as saying that Φ is a ring homomorphism from the cobordism ring of manifolds (with additional structure) to another ring.”

**Sources:** none listed. No primary source with a working link was found.

### The fixed points of a proper action form a submanifold

**Remember:** Properness keeps points from escaping, so the action looks linear near each fixed point.

*Rules out counterexamples. Confidence: medium.* MSC 57S15 (Compact Lie groups of differentiable transformations), 57S20, 22F05. arXiv math.DG, math.GT. Level 3: graduate.

**Definition.** A smooth action of G on X is proper if (g,x) ↦ (g·x,x) has compact preimage for every compact subset of X × X.

**Problem.** For a smooth proper action of a Lie group G on a manifold X, the fixed locus Xᴳ is a smooth submanifold. The fixed locus is the set of points fixed by every element of G.

**How the definition helps.** Properness makes the action linear near each fixed point, and the fixed set of a linear action is a linear subspace. Precisely, a fixed point has a G-invariant neighbourhood that is G-equivariantly diffeomorphic to a linear representation V, so near it Xᴳ is Vᴳ. Without properness, let ℝ act on ℝ² by the flow of x²y²/(1 + x²y²)·∂/∂x (our own example). Its fixed points are the two axes, a cross, which is not a submanifold.

**nLab:** [fixed point space](https://ncatlab.org/nlab/show/fixed+point+space). It says: “Let X be a smooth manifold, G a Lie group and ρ : G × X → X a proper action by diffeomorphisms. Then the G-fixed locus Xᴳ ↪︎ X is a smooth submanifold.”

**Sources:**

- [Marja Kankaanrinta, Equivariant collaring, tubular neighbourhood and gluing theorems for proper Lie group actions, Algebraic &amp; Geometric Topology 7 (2007) 1–27](https://doi.org/10.2140/agt.2007.7.1)

### Link-homotopy turns every link into a closed pure braid with algebraic moves

**Remember:** Let each strand cross itself, and only linking between strands remains.

*Makes the theorem clean to state or prove.* MSC 57K10 (Knot theory), 20F36. arXiv math.GT. Level 4: research.

**Definition.** A link-homotopy is a homotopy of maps from ordered oriented circles into three-space during which distinct components have disjoint images at every time. Each component may intersect itself.

**Problem.** Every ordered oriented link is link-homotopic to the closure of a pure braid. Two such braids have link-homotopic closures exactly when partial conjugations relate them in the homotopy braid group.

**How the definition helps.** Allowing self-crossings while keeping components apart gives the equivalence relation on both sides (our own explanation). The Habegger–Lin classification identifies its closure classes with orbits under partial conjugations.

**Paper or page:** [On braids and links up to link-homotopy](https://arxiv.org/abs/2210.01539), [On braids and links up to link-homotopy](https://arxiv.org/abs/2210.01539). It says: “Any n-component link is link-homotopic to the closure of an n-component pure braid.”

**Sources:**

- [E. Graff, On braids and links up to link-homotopy, arXiv:2210.01539 (2023)](https://arxiv.org/abs/2210.01539)
- [Habegger, Lin, The classification of links up to link-homotopy, J. Amer. Math. Soc. (1990)](https://doi.org/10.1090/s0894-0347-1990-1026062-0)

### Kuperberg's minimal surface lets Floer homology be defined for virtual knots

**Remember:** Pick the smallest surface, and stabilization stops being a problem.

*Makes the theorem clean to state or prove.* MSC 57K12 (Generalized knots (virtual knots, welded knots, quandles, etc.)). arXiv math.GT. Level 4: research.

**Definition.** A virtual knot is a knot in a thickened closed oriented surface, up to isotopy, surface diffeomorphisms and stabilization. Stabilization adds or removes a handle away from the knot. A minimal representative realizes the least genus among all equivalent surface representatives.

**Problem.** The authors' Heegaard Floer homology of knots in thickened surfaces changes under stabilization. Evaluated on Kuperberg's minimal genus representative, it is nevertheless an invariant of virtual knots.

**How the definition helps.** Kuperberg’s uniqueness theorem identifies any two minimal representatives up to surface equivalence. Their surface-knot Floer invariants therefore agree (our own explanation).

**Wikipedia:** [Virtual knot](https://en.wikipedia.org/wiki/Virtual_knot). It says: “a virtual knot is a generalization of knots in 3-dimensional Euclidean space, R³, to knots in thickened surfaces Σ × \[0,1\] modulo an equivalence relation called stabilization/destabilization.”

**Paper or page:** [New invariants for virtual knots via spanning surfaces](https://arxiv.org/abs/2207.08129), [New invariants for virtual knots via spanning surfaces](https://arxiv.org/abs/2207.08129). It says: “We also propose several constructions of Heegaard Floer homology for knots in thickened surfaces, and give examples why they are not stabilization invariant. However, we can define Floer homology for virtual knots by taking a minimal genus representative.”

**Sources:**

- [A. Juhász, L. H. Kauffman, E. Ogasa, New invariants for virtual knots via spanning surfaces, arXiv:2207.08129 (2024)](https://arxiv.org/abs/2207.08129)
- [Greg Kuperberg, What is a virtual link?, Algebr. Geom. Topol. 3 (2003)](https://doi.org/10.2140/agt.2003.3.587)

### Quandle colorings count surface-links once a generating set of moves is known

**Remember:** Quandle axioms are the moves, so colorings never notice them.

*True by definition. Confidence: medium.* MSC 57K12 (Generalized knots (virtual knots, welded knots, quandles, etc.)), 57K45. arXiv math.GT. Level 4: research.

**Definition.** A quandle is a set Q with x∗x=x, bijective right translations and (x∗y)∗z=(x∗z)∗(y∗z) for every x,y,z in Q. A diagram coloring assigns elements of Q to arcs according to the crossing and vertex rules for oriented singular marked diagrams.

**Problem.** The number of quandle colorings of an oriented singular marked diagram is an invariant of the oriented immersed surface-link that it presents.

**How the definition helps.** Proposition 7.1 gives bijections of colorings under the generating diagram moves (our own summary). Theorem 6.1 connects any two diagrams presenting the same immersed surface-link by these moves. Composing the bijections preserves the count.

**Paper or page:** [Minimal generating sets of moves for surfaces immersed in the four-space](https://arxiv.org/abs/2208.08244). It says: “The number of quandle colorings \#ColQ(D) of an oriented singular marked diagram D is an invariant of an oriented surface-link ℒ presented by D”

**Sources:**

- [M. Jabłonowski, Minimal generating sets of moves for surfaces immersed in the four-space, J. Knot Theory Ramifications (2023), arXiv:2208.08244](https://arxiv.org/abs/2208.08244)

### Rack axioms that copy Legendrian Reidemeister moves give an automatic invariant

**Remember:** Write each move into an axiom, and invariance comes free.

*True by definition.* MSC 57K12 (Generalized knots (virtual knots, welded knots, quandles, etc.)), 53D10. arXiv math.GT, math.SG. Level 4: research.

**Definition.** A rack has bijective right translations and satisfies (x∗y)∗z=(x∗z)∗(y∗z) for all x,y,z. A generalized Legendrian rack adds unary maps u,d commuting with right translations and satisfying x∗u(y)=x∗d(y)=x∗y. Require u(d(x∗x))=d(u(x∗x))=x for every x.

**Problem.** The generalised Legendrian rack of a front diagram, up to isomorphism, is an invariant of oriented Legendrian links up to Legendrian isotopy.

**How the definition helps.** The rack and cusp identities give isomorphic presentations on either side of every oriented front move (our own explanation). The Legendrian Reidemeister theorem connects fronts of isotopic links by these moves.

**Paper or page:** [Generalised Legendrian racks of Legendrian links](https://arxiv.org/abs/2301.06854), [Generalised Legendrian racks of Legendrian links](https://arxiv.org/abs/2301.06854). It says: “A generalised Legendrian rack is a rack equipped with a Legendrian structure, which is a pair of maps encoding the information of Legendrian Reidemeister moves together with up and down cusps in the front diagram of an oriented Legendrian link.”

**Sources:**

- [B. Karmakar, D. Saraf, M. Singh, Generalised Legendrian racks of Legendrian links, J. Topol. Anal. (2025), arXiv:2301.06854](https://arxiv.org/abs/2301.06854)
- [J. Świątkowski, On the isotopy of Legendrian knots, Ann. Global Anal. Geom. 10 (1992) 195-207](https://doi.org/10.1007/bf00136863)

### Virtual diagrams and knots in thickened surfaces define the same virtual knots

**Remember:** Virtual crossings are just the shadow of a handle in the surface.

*True by definition.* MSC 57K12 (Generalized knots (virtual knots, welded knots, quandles, etc.)). arXiv math.GT. Level 4: research.

**Definition.** A virtual diagram marks each crossing as classical or virtual. Virtual isotopy is generated by classical Reidemeister moves and detours replacing arcs meeting only virtual crossings, with every new intersection marked virtual.

**Problem.** Two virtual link diagrams are virtually isotopic exactly when their surface links are equivalent. Equivalence allows isotopy in the thickened surface, orientation-preserving surface diffeomorphisms and handle stabilization.

**How the definition helps.** Detours change how a surface link is drawn in the plane (our own explanation). The surface correspondence theorem of Kauffman and Carter, Kamada and Saito identifies virtual isotopy with stable surface equivalence in both directions.

**Paper or page:** [New invariants for virtual knots via spanning surfaces](https://arxiv.org/abs/2207.08129). It says: “Two virtual link diagrams are virtually isotopic if and only if their surface embeddings are equivalent up to isotopy in the thickened surfaces, orientation-preserving diffeomorphisms of the surfaces, and one-handle stabilizations and destabilizations.”

**Sources:**

- [A. Juhász, L. H. Kauffman, E. Ogasa, New invariants for virtual knots via spanning surfaces, arXiv:2207.08129 (2024)](https://arxiv.org/abs/2207.08129)

### Welded diagrams give Milnor invariants an exact diagrammatic meaning

**Remember:** In the welded world, Milnor invariants see exactly one concordance relation.

*Makes the theorem clean to state or prove. Confidence: low.* MSC 57K12 (Generalized knots (virtual knots, welded knots, quandles, etc.)), 57K10. arXiv math.GT. Level 4: research.

**Definition.** Fix a positive integer q. Welded concordance and surgeries on w-trees of degree at least q generate wq-concordance of welded string links. The degree counts the tails of the tree (our own summary).

**Problem.** Two classical string links have equal Milnor invariants through length q exactly when they are wq-concordant as welded string links (our own reading).

**How the definition helps.** The degree cutoff gives a single equivalence relation for all Milnor invariants through length q (our own explanation). Meilhan and Yasuhara’s classification applies to classical string links viewed as welded string links.

**Paper or page:** [A diagrammatical characterization of Milnor invariants](https://arxiv.org/abs/2201.01499). It says: “we describe when two string links have equal Milnor invariants of length ≤ q and when a link has trivial Milnor invariants of lenght ≤ q. This will be done through the use of welded knot theory”

**Sources:**

- [B. Colombari, A diagrammatical characterization of Milnor invariants, arXiv:2201.01499 (2022)](https://arxiv.org/abs/2201.01499)

### Welded equivalence is the relation that Satoh's tube map respects

**Remember:** The tubes cannot tell welded-equivalent diagrams apart, so welded is right.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 57K12 (Generalized knots (virtual knots, welded knots, quandles, etc.)), 57K45. arXiv math.GT. Level 4: research.

**Definition.** Welded equivalence is generated by virtual diagram equivalence and the move interchanging consecutive overcrossings along the same overpassing strand. Satoh’s Tube construction thickens the diagram into a ribbon torus in four-space.

**Problem.** If two virtual diagrams are welded equivalent, the tube map sends them to isotopic ribbon torus knots. The knot group and knot quandle of a welded diagram equal those of its tube.

**How the definition helps.** The extra overcrossing move gives isotopic tubes in four-space (our own explanation). Satoh’s Theorem 5 establishes invariance under welded equivalence. Theorem 6 identifies the corresponding groups and quandles.

**Paper or page:** [Some generalizations of Satoh's Tube map](https://arxiv.org/abs/2103.08766), [Some generalizations of Satoh's Tube map](https://arxiv.org/abs/2103.08766). It says: “If K and K′ are w-equivalent, then Tube(K) and Tube(K′) are isotopic through a stable equivalence of ribbon links.”

**Sources:**

- [B. K. Winter, Some generalizations of Satoh's Tube map, arXiv:2103.08766 (2021)](https://arxiv.org/abs/2103.08766)
- [Satoh, Virtual knot presentation of ribbon torus-knots, J. Knot Theory Ramifications (2000)](https://doi.org/10.1142/s0218216500000293)

### A Jones polynomial for open curves agrees with the classical one

**Remember:** Define the polynomial on open diagrams, and closing the ends changes nothing.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 57K14 (Knot polynomials), 57K12. arXiv math.GT. Level 4: research.

**Definition.** A linkoid is a link diagram allowing arc components with free endpoints. It is link-type if disjoint closing arcs join the corresponding endpoint pairs without meeting the diagram except at those endpoints.

**Problem.** For a link-type linkoid, the Jones polynomial of Barkataki and Panagiotou equals the Jones polynomial of the link obtained by closing its arcs.

**How the definition helps.** Closing adds no crossings, so each open smoothing corresponds to a smoothing of the closed diagram (our own explanation). The endpoint pairings count precisely the additional circles formed by closure. The writhe stays the same, so Theorem 3.1 gives equality of the normalized brackets.

**Paper or page:** [The Jones polynomial of collections of open curves in 3-space](https://arxiv.org/abs/2205.03474). It says: “show that this is a well-defined single variable polynomial that is a topological invariant, which, for link-type linkoids, it coincides with that of the corresponding link.”

**Sources:**

- [K. Barkataki, E. Panagiotou, The Jones polynomial of collections of open curves in 3-space, arXiv:2205.03474 (2022)](https://arxiv.org/abs/2205.03474)
- [Panagiotou, Kauffman, Knot polynomials of open and closed curves, Proc. R. Soc. A (2020)](https://doi.org/10.1098/rspa.2020.0124)

### The normalized Markov trace gives a link invariant from braids

**Remember:** Trace handles conjugation, and the crossing-count correction handles stabilization.

*True by definition. Confidence: medium.* MSC 57K14 (Knot polynomials), 20F36. arXiv math.GT, math.QA. Level 4: research.

**Definition.** Use the normalized Temperley–Lieb trace with loop value δ = −A² − A⁻² and braid generator image A·1 + A⁻¹eᵢ. For an n-strand braid β of writhe w, set J(β) = (−A³)⁻ʷ δⁿ⁻¹ tr(ρ(β)).

**Problem.** The corrected trace is independent of the braid chosen to close to a given oriented link. After the Jones change of variable it equals the Jones polynomial.

**How the definition helps.** Cyclicity preserves the trace under conjugation (our own calculation). Positive and negative stabilization multiply the scaled trace by −A³ and its inverse, respectively, cancelling the writhe correction. Markov’s theorem gives independence of the braid, and the bracket trace formula identifies the result with Jones after substituting t = A⁻⁴.

**Wikipedia:** [Jones polynomial](https://en.wikipedia.org/wiki/Jones_polynomial). It says: “Take the braid word σ obtained previously from L and compute δⁿ⁻¹ tr ρ(σ) where tr is the Markov trace.”

**Sources:**

- [Vaughan F. R. Jones, A polynomial invariant for knots via von Neumann algebras, Bulletin of the AMS (1985)](https://doi.org/10.1090/s0273-0979-1985-15304-2)
- [Vaughan F. R. Jones, Hecke algebra representations of braid groups and link polynomials, Annals of Mathematics (1987)](https://doi.org/10.2307/1971403)

### Topologically slice knots have square determinants

**Remember:** Local flatness makes the determinant of a slice knot a square.

*Rules out counterexamples.* MSC 57K14 (Knot polynomials), 57K10. arXiv math.GT. Level 4: research.

**Definition.** A knot is topologically slice if it bounds an embedded disk in the four-dimensional ball that meets the boundary exactly in the knot. The disk must be locally flat. Near each point, the disk and ball look like a plane in four-dimensional space, using half-spaces at boundary points.

**Problem.** The absolute value of the Alexander polynomial at −1 is a square for every topologically slice knot.

**How the definition helps.** Fox–Milnor factorization for locally flat slice disks writes the Alexander polynomial as f(t)f(1/t) up to a signed monomial. At −1 the factors agree, so the absolute value is a square (our own calculation). The trefoil has determinant three but bounds a cone disk. Local flatness excludes that disk at its cone point (our own counterexample).

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

**Definition.** At each double point recursively extend a knot invariant by v(K×) = v(K₊) − v(K₋), using the positive and negative resolutions. Its degree is at most n if the extension vanishes on every knot with n+1 double points. The chord diagram pairs the two preimages of each double point on the parameter circle.

**Problem.** For an invariant of degree at most n, its value on a singular knot with n double points depends only on the chord diagram.

**How the definition helps.** The difference definition makes an ordinary crossing change cost one extra double point, whose value is zero (our own). The geometric step identifies two singular knots with the same chord diagram up to ordinary crossing changes and isotopy (our own). They are embeddings of the same graph with matched branches at each double point (our own). One arranges the double-point neighborhoods first, then deforms the connecting arcs while allowing crossings away from those neighborhoods (our own).

**nLab:** [Vassiliev invariant](https://ncatlab.org/nlab/show/Vassiliev+invariant). It says: “Let v be a Vassiliev invariant of degree ≤ n. Then the value of v on a singular knot with n distinct double points depends only on the chord diagram of the singular knot, and not on the knot itself.”

**Sources:**

- [Dror Bar-Natan, On the Vassiliev knot invariants, Topology (1995)](https://doi.org/10.1016/0040-9383(95)93237-2)
- [Joan S. Birman and Xiao-Song Lin, Knot polynomials and Vassiliev's invariants, Inventiones Mathematicae (1993)](https://doi.org/10.1007/BF01231287)

### Khovanov’s graded chain groups recover the Jones polynomial

**Remember:** Khovanov chain groups replace each circle factor with a graded vector space.

*True by definition.* MSC 57K18 (Homology theories in knot theory (Khovanov, Heegaard-Floer, etc.)), 57K14. arXiv math.GT. Level 4: research.

**Definition.** For a resolution with k circles, take V⊗ᵏ, where V has basis degrees 1 and −1. With r one-smoothings and n₊ positive and n₋ negative crossings, place it in homological degree r−n₋ and shift internal degree by r+n₊−2n₋. Sum these groups over all resolutions.

**Problem.** The graded Euler characteristic of unreduced Khovanov homology equals the Jones state sum normalized to give q + q⁻¹ on the unknot.

**How the definition helps.** The chain groups are defined so that their graded dimensions reproduce the writhe-corrected Kauffman bracket, the diagram state sum for Jones (our own). One circle contributes q + q⁻¹, the sum of q raised to each basis degree (our own). A smoothing contributes the product of its circle factors with the sign from chain degree and the power from the internal shift (our own). The graded Euler characteristic is this alternating sum of graded dimensions, and it is unchanged on passing to homology (our own).

**Wikipedia:** [Khovanov homology](https://en.wikipedia.org/wiki/Khovanov_homology). It says: “The graded Euler characteristic of H(L) turns out to be the Jones polynomial of L.”

**Paper or page:** [A quantum algorithm for Khovanov homology](https://arxiv.org/abs/2501.12378v2). It says: “The graded Euler characteristic of C(K) is the unnormalized Jones polynomial of K.”

**Sources:**

- [Mikhail Khovanov, A categorification of the Jones polynomial, Duke Mathematical Journal (2000)](https://doi.org/10.1215/S0012-7094-00-10131-7)

### Using real curves, not isotopy classes, makes graph automorphisms the homeomorphisms

**Remember:** Keep the curves themselves, and the graph's symmetries are all homeomorphisms.

*Makes the theorem clean to state or prove.* MSC 57K20 (2-dimensional topology (including mapping class groups of surfaces, Teichmüller theory, curve complexes, etc.)). arXiv math.GT. Level 4: research.

**Definition.** The fine curve graph of a surface has one vertex for each essential simple closed curve, meaning one that bounds no disc. Vertices are actual curves, not isotopy classes of curves. Two vertices are joined by an edge when the curves are disjoint.

**Problem.** For a closed orientable surface of genus at least two, its homeomorphism group is naturally isomorphic to the automorphism group of its fine curve graph.

**How the definition helps.** Homeomorphisms act directly on actual curves and preserve disjointness (our own explanation). Long, Margalit, Pham, Verberne and Yao proved that each graph automorphism arises from exactly one homeomorphism.

**Paper or page:** [Automorphisms of some variants of fine graphs](https://arxiv.org/abs/2210.05460), [Automorphisms of the fine 1-curve graph](https://arxiv.org/abs/2309.16041). It says: “Later Long, Margalit, Pham, Verberne and Yao proved that for a closed surface of genus g ⩾ 2, the automorphism group of the fine graph is naturally isomorphic to the homeomorphism group of the surface.”

**Sources:**

- [F. Le Roux, M. Wolff, Automorphisms of some variants of fine graphs, Algebr. Geom. Topol. 24 (2024) 4697-4730, arXiv:2210.05460](https://arxiv.org/abs/2210.05460)
- [Long, Margalit, Pham, Verberne, Yao, Automorphisms of the fine curve graph, Trans. Amer. Math. Soc. (2025)](https://doi.org/10.1090/tran/9374)
- [Bowden, Hensel, Webb, Quasi-morphisms on surface diffeomorphism groups, J. Amer. Math. Soc. (2021)](https://doi.org/10.1090/jams/981)

### Homology cobordism turns homology cylinders into one group containing mapping classes

**Remember:** Divide by homology cobordism, and stacked cylinders gain inverses.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 57K30 (General topology of 3-manifolds), 57R90, 57K20. arXiv math.GT. Level 4: research.

**Definition.** A homology cylinder is a compact oriented cobordism from Σ to itself whose two boundary markings induce integral homology isomorphisms. For surfaces with boundary, the markings agree along their common boundary. Homology cobordism requires a compact oriented cobordism respecting the markings, with both cylinder inclusions inducing integral homology isomorphisms.

**Problem.** Homology cylinders over Σ, up to homology cobordism, form a group under stacking. Mapping cylinders give a homomorphism from the mapping class group, and string-link exteriors give one for the corresponding punctured disk.

**How the definition helps.** Up to homology cobordism, a cylinder stacked with its upside-down copy is trivial, so inverses exist (our own summary of Garoufalidis and Levine). Mapping classes give homology cylinders through their mapping cylinders, and string links through their exteriors (our own remark).

**Paper or page:** [Homology cobordism group of homology cylinders and invariants related to lower central series](https://arxiv.org/abs/2012.13165). It says: “The homology cobordism group of homology cylinders is a generalization of both the mapping class group of surfaces and the string link concordance group.”

**Sources:**

- [M. Song, Homology cobordism group of homology cylinders and invariants related to lower central series, arXiv:2012.13165 (2020)](https://arxiv.org/abs/2012.13165)
- [Garoufalidis, Levine, Tree-level invariants of three-manifolds, Massey products and the Johnson homomorphism, Proc. Sympos. Pure Math. 73 (2005)](https://doi.org/10.1090/pspum/073/2131016)

### Flattened Rogers values give complex volume

**Remember:** Flatten the tetrahedra before adding their Rogers values.

*Makes the theorem clean to state or prove.* MSC 57K31 (Invariants of 3-manifolds (including skein modules, character varieties)), 33B30, 11G55. arXiv math.GT, math.NT. Level 4: research.

**Definition.** For shape z, choose integers p,q and edge parameters log z+pπi, −log(1−z)+qπi and minus their sum. A strong flattening has zero signed log sum around each edge and along each closed normal path in a vertex link. It also has zero parity around edges and along every closed normal path.

**Problem.** Consider an ordered ideal triangulation of a complete oriented cusped hyperbolic three-manifold of finite volume, with complete shapes and a strong flattening. Put R = Li₂(z) + log(z)log(1−z)/2 + πi(p log(1−z)+q log z)/2 − π²/6. The signed sum of R equals i times volume minus the Chern–Simons invariant modulo π²ℤ in Neumann’s convention.

**How the definition helps.** The branch indices let the complex volume be written as one sum over tetrahedra (our own terms). The lifted five-term relation makes the sum independent of the triangulation. The work lies in finding strong flattenings and in identifying the sum with the Cheeger–Chern–Simons class.

**nLab:** [Bloch group](https://ncatlab.org/nlab/show/Bloch+group). It says: “when applied to a fundamental class \[X\] of a hyperbolic 3-manifold according to the above, then it yields its complex volume”

**Sources:**

- [Walter D. Neumann, Extended Bloch group and the Cheeger–Chern–Simons class (2004)](https://msp.org/gt/2004/8-1/gt-v8-n1-p10-p.pdf)

### Transfer removes spurious two-torsion

**Remember:** The transfer relation makes the two branch changes independent.

*Rules out counterexamples.* MSC 57K31 (Invariants of 3-manifolds (including skein modules, character varieties)), 11G55, 33B30. arXiv math.GT, math.NT. Level 4: research.

**Definition.** Start with the abelian group on \[z,p,q\] for complex z outside {0,1} and integers p,q, modulo Neumann’s lifted five-term relations. In the extended pre-Bloch group also impose \[z,p,q\]+\[z,r,s\]=\[z,p,s\]+\[z,r,q\] for every z and all integers p,q,r,s.

**Problem.** The map from Neumann’s group with only the lifted five-term relations to the extended pre-Bloch group has kernel cyclic of order two. Its generator is \[z,1,1\]+\[z,0,0\]−\[z,1,0\]−\[z,0,1\], independent of z.

**How the definition helps.** In our own terms, the transfer relation kills the mixed difference of the two branch changes. In our own terms, without it the mixed difference at p = q = 1 is a nonzero class of order two. In our own terms, Neumann’s Proposition 7.2 shows all transfer relations generate exactly that class.

**nLab:** [Bloch group](https://ncatlab.org/nlab/show/Bloch+group). It says: “Accordingly H₃ᵍʳᵖ(♭ PSL(2,ℂ), ℤ) itself is also called the extended Bloch group”

**Sources:**

- [Walter D. Neumann, Extended Bloch group and the Cheeger–Chern–Simons class (2004)](https://msp.org/gt/2004/8-1/gt-v8-n1-p10-p.pdf)

### Twisted Alexander polynomials detect fibred 3-manifolds where the ordinary one fails

**Remember:** One polynomial can be fooled; all the twisted ones together cannot.

*Makes the theorem clean to state or prove.* MSC 57K31 (Invariants of 3-manifolds (including skein modules, character varieties)), 57K14. arXiv math.GT. Level 4: research.

**Definition.** For integral φ and a finite quotient α of π₁N onto G, form first homology with coefficients ℤ\[G\]\[t,t⁻¹\]. Each loop g acts by left multiplication by α(g) times t raised to φ(g). The twisted Alexander polynomial is the module order, up to a signed power of t.

**Problem.** Let N be compact, orientable and irreducible with empty or toroidal boundary, and let φ be a nonzero primitive integral first cohomology class. It fibres in direction φ exactly when every finite quotient α gives a monic twisted Alexander polynomial of the Friedl–Vidussi degree.

**How the definition helps.** The finite quotients let one state a single test (our own explanation). For quotient G, the required degree is \|G\| times the Thurston norm plus (1+b₃(N)) times the divisibility of φ restricted to ker α. Friedl and Vidussi prove that these tests characterize fibering.

**Paper or page:** [Twisted Alexander polynomials detect fibered 3-manifolds](https://arxiv.org/abs/0805.1234). It says: “In this paper we show that the conditions on twisted Alexander polynomials are not only necessary but also sufficient for a 3-manifold to be fibered.”

**Sources:**

- [S. Friedl, S. Vidussi, Twisted Alexander polynomials detect fibered 3-manifolds, Ann. of Math. (2) 173 (2011) 1587-1643, arXiv:0805.1234](https://arxiv.org/abs/0805.1234)

### Antisymmetric classes forget orientation

**Remember:** Reverse orientation and conjugate, and the antisymmetric part stays put.

*Makes the theorem clean to state or prove.* MSC 57K32 (Hyperbolic 3-manifolds), 52B45. arXiv math.GT, math.KT. Level 4: research.

**Definition.** For an oriented complete cusped hyperbolic three-manifold of finite volume, let β be the rational Bloch class obtained by summing signed ideal tetrahedron shapes. Define β⁻ = (β−conj(β))/2, where conjugation acts on each shape.

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

**Definition.** Choose a conjugation-stable number field K containing both invariant trace fields, generated by the squared holonomy traces. Fix one embedding K → ℂ from each conjugate pair of nonreal embeddings. The Borel regulator vector lists the signed volumes of the rational Bloch class under those embeddings.

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

**How the definition helps.** Finite volume excludes cyclic quotients of hyperbolic three-space by translations along one geodesic (our own example). Each has infinite volume and fundamental group ℤ. Different translation lengths give different shortest closed geodesic lengths, hence nonisometric quotients. Mostow–Prasad rigidity proves the finite-volume conclusion.

**nLab:** [Mostow rigidity theorem](https://ncatlab.org/nlab/show/Mostow+rigidity+theorem). It says: “then this structure is unique up to isometry, and in fact it is uniquely determined already by the fundamental group π₁(Σ).”

**Wikipedia:** [Mostow rigidity theorem](https://en.wikipedia.org/wiki/Mostow_rigidity_theorem). It says: “There is also a rich theory of deformation spaces of hyperbolic structures on infinite volume manifolds in three dimensions.”

**Sources:**

- [Gopal Prasad, Strong rigidity of Q-rank 1 lattices (1973).](https://doi.org/10.1007/bf01418789)

### Five-term relations absorb retriangulation

**Remember:** The two sides of the move are one five-term boundary.

*True by definition.* MSC 57K32 (Hyperbolic 3-manifolds), 52B45. arXiv math.GT, math.KT. Level 4: research.

**Definition.** For four distinct ordered ideal vertices, define \[z\] using the fourth coordinate after sending the first three to 0, ∞, 1 by a Möbius transformation. The rational pre-Bloch group has generators \[z\] for complex z outside {0,1}. For every five distinct ordered ideal vertices, impose the alternating deletion sum as a relation.

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

**How the definition helps.** The quotient discards precisely the finite-order difference produced by the cut and regluing (our own). Neumann expresses that difference as the class of the mapping torus, formed by joining the ends of a surface cylinder using the symmetry. A finite cover is a surface times a circle, and its holonomy kills the circle. Its class therefore vanishes, so the original difference has finite order.

**nLab:** [Bloch group](https://ncatlab.org/nlab/show/Bloch+group). It says: “The fundamental class of a hyperbolic 3-manifold X canonically gives an element in the Bloch group”

**Sources:**

- [Walter D. Neumann, Realizing arithmetic invariants of hyperbolic 3-manifolds (2011)](https://doi.org/10.1090/conm/541/10687)

### Meridian flattenings remove filling corrections

**Remember:** Flatten the filled meridian before summing tetrahedra.

*Makes the theorem clean to state or prove.* MSC 57K32 (Hyperbolic 3-manifolds). arXiv math.GT. Level 4: research.

**Definition.** For each ideal tetrahedron, a flattening shifts two shape logarithms by integral multiples of πi and chooses the third to make their sum zero. Require zero signed log sums around edges and along closed normal paths in every unfilled vertex link. Require zero parity around edges and along every closed normal path.

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

**How the definition helps.** Pseudo-Anosov stretching excludes the identity gluing, and Thurston’s hyperbolization theorem gives the hyperbolic metric. Identity gluing produces a surface times a circle (our own example). An essential simple closed curve times the circle gives a subgroup ℤ², impossible in a closed hyperbolic three-manifold group.

**Paper or page:** [Cusp geometry of fibered 3-manifolds](https://arxiv.org/abs/1108.5748v2). It says: “For every orientation-preserving, pseudo-Anosov homeomorphism φ : F → F, the mapping torus Mφ is a hyperbolic 3–manifold”

**Sources:** none listed. No primary source with a working link was found.

### Relative classes record cusp boundaries

**Remember:** The ideal end contributes a boundary in group homology.

*Rules out counterexamples.* MSC 57K32 (Hyperbolic 3-manifolds), 20J06. arXiv math.GT. Level 4: research.

**Definition.** Let C be the truncated core of an oriented complete finite-volume hyperbolic three-manifold with one torus cusp. Conjugate holonomy so the cusp group acts by translations in P = (ℂ,+) inside discrete G = PSL(2,ℂ). The relative holonomy class is the image of \[C,∂C\] in H₃(G,P;ℤ) under this map of pairs.

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

**Definition.** A trisection splits a closed 4-manifold X into three 4-dimensional 1-handlebodies, which are boundary connected sums of copies of S¹ × B³. Each pair of pieces meets in a 3-dimensional handlebody, and all three meet in one closed surface. The spine is the union of the three 3-dimensional handlebodies.

**Problem.** Every connected closed smooth oriented 4-manifold X has a trisection, and any two trisections of X become isotopic after enough stabilizations. The spine of any trisection determines X up to diffeomorphism.

**How the definition helps.** By Laudenbach and Poénaru, a 4-dimensional 1-handlebody can be glued on in essentially one way, so the spine fixes the 4-manifold (our own remark). The spine is fixed by three families of curves on the central surface (our own remark). Existence and uniqueness up to stabilization are the 4-dimensional versions of the Heegaard and Reidemeister–Singer theorems. The hard work moves into their proofs, which Gay and Kirby did with Morse 2-functions (our own remark).

**Paper or page:** [Constructions of symplectic forms on 4-manifolds](https://arxiv.org/abs/2403.05512). It says: “Let X be a closed, smooth, oriented 4-manifold. Then X admits a trisection, any two trisections of X become ambient isotopic after sufficiently many stabilizations, and X is determined up to diffeomorphism by the spine of any trisection 𝒯.”

**Sources:**

- [P. Lambert-Cole, Constructions of symplectic forms on 4-manifolds, arXiv:2403.05512 (2024)](https://arxiv.org/abs/2403.05512)
- [D. Gay, R. Kirby, Trisecting 4-manifolds, Geom. Topol. 20 (2016) 3097-3132](https://doi.org/10.2140/gt.2016.20.3097)

### Perturbed Seiberg–Witten equations avoid reducible solutions

**Remember:** Perturb the equations so that solutions with zero spinor are impossible.

*Rules out counterexamples.* MSC 57K41 (Invariants of 4-manifolds (including Donaldson and Seiberg-Witten invariants)), 58J05. arXiv math.GT, math.DG. Level 4: research.

**Definition.** Fix a spinᶜ structure and a metric on a closed oriented four-manifold. Its reducible wall Π consists of the self-dual curvatures F⁺ of all unitary connections on the determinant line. Choose a self-dual perturbation η outside this affine subspace, using the same imaginary-valued convention as for curvature.

**Problem.** Let M be a closed oriented 4-manifold with b₊(M) ≥ 1, and choose η outside Π. Then the perturbed Seiberg–Witten equations have no reducible solutions, the solutions with zero spinor.

**How the definition helps.** A reducible solution has zero spinor, so its quadratic spinor term vanishes. The curvature equation then requires F⁺ = η, contrary to η lying outside Π. The wall has codimension b₊, so such perturbations exist when b₊ ≥ 1 (our own explanation).

**nLab:** [Seiberg-Witten moduli space](https://ncatlab.org/nlab/show/Seiberg-Witten+moduli+space). It says: “If b₊(M) ≥ 1, then a perturbation η ∈ Ω₊²(M) ∖ Π ≠ ∅ forces solutions of the perturbed Seiberg-Witten equations with ψ = 0 to fulfill F<sub>A</sub>⁺ = η, which is not possible due to η ∉ Π.”

**Sources:**

- [Simon Donaldson, The Seiberg-Witten equations and 4-manifold topology, Bull. Amer. Math. Soc. 33 (1996) 45–70](https://doi.org/10.1090/S0273-0979-96-00625-8)

### Signed monopole counts survive metric changes

**Remember:** Two solutions can appear together without changing their signed sum.

*True by definition.* MSC 57K41 (Invariants of 4-manifolds (including Donaldson and Seiberg-Witten invariants)), 53C07. arXiv math.DG, math-ph. Level 4: research.

**Definition.** Fix a spinᶜ structure of expected dimension zero on a closed connected oriented smooth four-manifold. Orient the direct sum of its first real cohomology and a maximal positive subspace of its intersection form. The signed count sums the resulting orientation signs of all gauge classes of solutions for generic data.

**Problem.** If the intersection form has at least two positive directions, the signed count of Seiberg–Witten solutions is the same for every generic metric and perturbation.

**How the definition helps.** In our own proof, the signs make the two ends of every oriented interval cancel. Along a generic path between two choices, the solutions form a compact oriented one-manifold with boundary. Its oriented boundary represents the final count minus the initial count. Compactness, regularity and avoidance of solutions with extra symmetries are the analytic inputs.

**Wikipedia:** [Seiberg–Witten invariants](https://en.wikipedia.org/wiki/Seiberg%E2%80%93Witten_invariants). It says: “the number of elements of the moduli space counted with signs.”

**Sources:**

- [Edward Witten, Monopoles and four-manifolds](https://doi.org/10.4310/mrl.1994.v1.n6.a13)

### Smoothness diagonalizes definite intersection forms

**Remember:** Smooth coordinate changes exclude the topological manifold with definite E₈ intersection form.

*Rules out counterexamples.* MSC 57K41 (Invariants of 4-manifolds (including Donaldson and Seiberg-Witten invariants)), 57R10. arXiv math.GT. Level 4: research.

**Definition.** A smooth four-manifold has charts to open subsets of ℝ⁴ with smooth transition maps. The integral intersection form pairs degree-two homology classes modulo torsion by signed intersection. It is definite if all nonzero classes have strictly positive square or all have strictly negative square.

**Problem.** Donaldson's theorem. If a closed, oriented, simply connected smooth 4-manifold has definite intersection form, some integer basis makes the form diagonal.

**How the definition helps.** Smoothness excludes Freedman’s topological E₈ manifold, in our own comparison. Its positive definite form has determinant one and gives only even squares. A positive diagonal integer form of determinant one has only ones on its diagonal, so it represents one. Donaldson’s theorem supplies the diagonal basis in the smooth case through the study of differential equations on the manifold.

**Wikipedia:** [Donaldson's theorem](https://en.wikipedia.org/wiki/Donaldson%27s_theorem). It says: “a definite intersection form of a closed, oriented, smooth manifold of dimension 4 is diagonalizable”

**Sources:**

- [S. K. Donaldson, An application of gauge theory to four-dimensional topology (1983).](https://doi.org/10.4310/jdg/1214437665)

### Every continuum has a compact universal cover

**Remember:** Take the limit of all compact covers, and every continuum gets one.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 57M10 (Covering spaces and low-dimensional topology), 54F15. arXiv math.AT, math.GN. Level 4: research.

**Definition.** Fix a basepoint of a compact connected metrizable space X. Its compact universal cover is the inverse limit of its pointed connected compact regular covers, with based covering maps over X as bonding maps.

**Problem.** Every continuum has a compact universal cover, even one such as a solenoid that has no classical universal cover. It is unique among generalized universal covers by compactly simply connected continua.

**How the definition helps.** The inverse limit gives a single candidate even for a solenoid (our own explanation). The compact universal covering theorem supplies the inverse system, the continuum properties of its limit, and uniqueness among compactly simply connected generalized covers.

**Paper or page:** [Every Continuum has a Compact Universal Cover](https://arxiv.org/abs/2109.02152). It says: “We define the compact universal cover of a compact, metrizable connected space (i.e. a continuum) X to be the inverse limit of all continua that regularly cover X.”

**Sources:**

- [Conrad Plaut, Every Continuum has a Compact Universal Cover, arXiv:2109.02152 (2022)](https://arxiv.org/abs/2109.02152)

### Semicoverings form a class closed under composition and 2-out-of-3

**Remember:** Keep only the lifting that covering theory uses; drop even covering of neighbourhoods.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 57M10 (Covering spaces and low-dimensional topology), 55Q05. arXiv math.AT, math.GN. Level 4: research.

**Definition.** A semicovering is a local homeomorphism that lifts based paths and based path homotopies uniquely and continuously for every chosen lift of the basepoint. Continuity uses the compact-open topologies on the corresponding mapping spaces.

**Problem.** Let f = g ∘ h be continuous maps between nonempty spaces, with path-connected middle space and base. If two of f, g and h are semicoverings, so is the third.

**How the definition helps.** Unique continuous lifting makes the induced maps on based path and homotopy spaces homeomorphisms. These compose and cancel, and path connectedness lets one choose the required starting lifts (our own explanation of Brazas’s theorem). Ordinary covers can fail closure under composition because their composite need not evenly cover any neighborhood of a point.

**nLab:** [covering space](https://ncatlab.org/nlab/show/covering+space). It says: “Semicoverings satisfy the "2 out of 3 rule". I.e,, if f=g h and two of f,g,h are semicoverings , then so is the third. This is not true for covering maps.”

**Sources:**

- [J. Brazas, Semicoverings: a generalization of covering space theory, Homology Homotopy Appl. 14 (2012) 33–63, arXiv:1108.3021](https://arxiv.org/abs/1108.3021)
- [E. Spanier, Algebraic Topology, Springer (first published 1966; DOI record of the 1981 Springer printing), Chapter 2](https://doi.org/10.1007/978-1-4684-9322-1)

### Torsion refined by spin-c structures equals the Seiberg–Witten count

**Remember:** Remove the unit ambiguity, and torsion matches the gauge theory count.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 57Q10 (Simple homotopy type, Whitehead torsion, Reidemeister-Franz torsion, etc.), 57K31, 57R15. arXiv math.GT, math.SG. Level 4: research.

**Definition.** An Euler structure on a closed oriented three-manifold is an equivalence class of nowhere-zero tangent fields under homotopy outside a ball. Such structures correspond to spinᶜ structures and specify the homology translation in Turaev’s refinement of torsion.

**Problem.** Fix compatible chambers when the first Betti number is one. On a closed oriented connected three-manifold with positive first Betti number, Seiberg–Witten and Turaev torsion agree as functions on spinᶜ structures up to overall sign.

**How the definition helps.** Euler structures specify the common argument of the two functions (our own explanation). Turaev’s refinement of the Meng–Taubes comparison gives equality with compatible conventions.

**Paper or page:** [Monopoles and Landau-Ginzburg Models III: A Gluing Theorem](https://arxiv.org/abs/2010.04318). It says: “is independent of the auxiliary data (gY, gΣ; ω, λ, μ) and is equal to the Minor-Turaev torsion T(Y) up to an overall sign ambiguity.”

**Sources:**

- [D. Wang, Monopoles and Landau-Ginzburg Models III: A Gluing Theorem, arXiv:2010.04318 (2023)](https://arxiv.org/abs/2010.04318)
- [G. Meng, C. H. Taubes, SW = Milnor torsion, Math. Res. Lett. 3 (1996) 661-674](https://doi.org/10.4310/mrl.1996.v3.n5.a8)

### Tree-cotree curl solvers can terminate exactly on collapsible meshes

**Remember:** A collapse order is a successful elimination order.

*Makes the theorem clean to state or prove.* MSC 57Q10 (Simple homotopy type, Whitehead torsion, Reidemeister-Franz torsion, etc.), 65N30, 05C85. arXiv math.NA, math.AT. Level 4: research.

**Definition.** A face of a mesh is free if it lies in exactly one remaining cell of one dimension higher. An elementary collapse removes a free face together with that cell. A mesh is collapsible if elementary collapses reduce it to a single vertex.

**Problem.** Let a tetrahedral mesh fill a domain in ℝ³ with no holes or cavities and a Lipschitz boundary. Some spanning tree of edges makes the tree-cotree method for a discrete vector potential terminate if and only if the mesh is collapsible.

**How the definition helps.** Collapsibility turns a question about the existence of a good starting tree into a known topological property of the mesh. The paper links both conditions to complete acyclic matchings, which pair edges with faces like steps of Gaussian elimination. A collapse sequence gives such a matching, and such a matching gives a tree for which the method terminates. This explains the known termination failures on meshes that are not collapsible.

**Paper or page:** [Inverting the discrete curl operator: a novel graph algorithm to find a vector potential of a given vector field](https://arxiv.org/abs/2111.04431v1). It says: “This fact gives a topological characterization of well-known termination problems of tree-cotree techniques.”

**Sources:**

- [Silvano Pitassi, Riccardo Ghiloni, Ruben Specogna, Inverting the discrete curl operator: a novel graph algorithm to find a vector potential of a given vector field, arXiv:2111.04431v1 (2021)](https://arxiv.org/abs/2111.04431v1)

### A string structure is defined as a trivialization of ½p₁

**Remember:** A string structure is a spin structure plus a chosen reason that ½p₁ vanishes.

*True by definition.* MSC 57R15 (Specialized structures on manifolds (spin manifolds, framed manifolds, etc.)), 55R40, 53C27. arXiv math.AT, math.DG. Level 4: research.

**Definition.** Let λ represent the universal degree-four integral spin class ½p₁, and define BString(n) as its homotopy fibre. For a fixed spin classifying map f on X, a string structure is a homotopy lift of f to BString(n).

**Problem.** A spin manifold X has a string structure exactly when ½p₁(X) = 0. The string structures on X form the homotopy fiber of ½p₁ on X.

**How the definition helps.** A lift is precisely a choice of nullhomotopy of λ ∘ f (our own explanation). Such choices exist exactly when ½p₁(X) vanishes. Mapping out of X preserves homotopy fibres, giving the stated space of choices.

**nLab:** [string structure](https://ncatlab.org/nlab/show/string+structure). It says: “The 2-groupoid of string structure on X is the homotopy fiber of ½𝐩₁<sup>X</sup>”

**Sources:**

- [Timothy Killingback, World-sheet anomalies and loop geometry, Nuclear Physics B 288 (1987) 578–588](https://doi.org/10.1016/0550-3213(87)90229-X)
- [Hisham Sati, Urs Schreiber, Jim Stasheff, Twisted differential String and Fivebrane structures, Comm. Math. Phys. 315 (2012), arXiv:0910.4001](https://arxiv.org/abs/0910.4001)

### Fusion recovers string structures from loops

**Remember:** Fusion remembers how loops were cut into paths.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 57R15 (Specialized structures on manifolds (spin manifolds, framed manifolds, etc.)), 53C27. arXiv math.AT, math.DG. Level 4: research.

**Definition.** Lift the looped spin frame bundle through the basic central circle extension of the loop spin group. For paths a,b with common endpoints, let Lₐᵦ denote the circle fibre over a followed by reversed b. Fusion gives smooth, associative, action-compatible isomorphisms Lₐᵦ ⊗ Lᵦ𝒸 → Lₐ𝒸 for all triples of paths sharing both endpoints.

**Problem.** Let M be a spin manifold of dimension three or at least five. Its free loop space admits a fusion spin structure exactly when M admits a string structure, a trivialization of half its first Pontryagin class.

**How the definition helps.** Fusion supplies the path gluing needed to reconstruct the string obstruction from loops (our own). Without fusion, even a spin bundle with nonzero half-Pontryagin class can have a spin loop bundle. Waldorf proves the reconstruction theorem.

**nLab:** [From String structures to Spin structures on loop spaces](https://ncatlab.org/nlab/show/From+String+structures+to+Spin+structures+on+loop+spaces). It says: “what Waldorf calls a fusion extension of ℒSpin.”

**Sources:**

- [Konrad Waldorf, Spin structures on loop spaces that characterize string manifolds (2016)](https://msp.org/agt/2016/16-2/agt-v16-n2-p02-s.pdf)

### String trivializations integrate Chern–Simons holonomy

**Remember:** Integrate the global connection form to compute holonomy.

*True by definition. Confidence: medium.* MSC 57R15 (Specialized structures on manifolds (spin manifolds, framed manifolds, etc.)), 53C27. arXiv math.DG, math.AT. Level 4: research.

**Definition.** A spin connection determines a higher circle bundle representing the differential class of half the first Pontryagin class. A geometric string structure identifies this bundle, with its connection, with the trivial bundle carrying a global 3-form H. The differential class assigns a value modulo integers to each closed integral 3-cycle.

**Problem.** On every smooth integral 3-cycle, the differential half-Pontryagin class evaluates to the integral of H modulo integers.

**How the definition helps.** In the chosen trivialization, integration of H gives the value on the cycle directly (our own). A purely topological trivialization supplies no such connection form (our own). Comparing higher circle bundles with differential characters identifies this value with the original holonomy (our own).

**nLab:** [differential string structure](https://ncatlab.org/nlab/show/differential+string+structure). It says: “a choice of equivalence λ of the Chern-Simons circle 3-bundle with connection”

**Sources:**

- [Konrad Waldorf, String connections and Chern-Simons theory (2013)](https://doi.org/10.1090/S0002-9947-2013-05816-3)

### Inertia makes holonomy flat

**Remember:** A constant base loop contributes no tangent to the curvature integral.

*True by definition.* MSC 57R18 (Topology and geometry of orbifolds), 81T30. arXiv math.DG, hep-th. Level 4: research.

**Definition.** In an orbifold chart U with group G, inertia consists of pairs (x,g) with g·x=x. A chart symmetry h sends (x,g) to (h·x,hgh⁻¹). These pairs represent constant loops closed by a symmetry.

**Problem.** The holonomy line of an orbifold gerbe has flat connection on the inertia orbifold, even when the gerbe has nonzero curvature.

**How the definition helps.** On these loops the circle tangent maps to zero, so integrating the gerbe curvature around the circle gives zero (our own). This uses the curvature formula for the holonomy line constructed by Lupercio and Uribe (our own). The closing symmetry can still act on the flat line (our own).

**nLab:** [inner local system](https://ncatlab.org/nlab/show/inner+local+system). It says: “is a family of local systems (in fact flat connections with coefficients in U(1)) on loci with non-trivial automorphisms”

**Sources:**

- [Ernesto Lupercio and Bernardo Uribe, Holonomy for gerbes over orbifolds (2006), §5](https://doi.org/10.1016/j.geomphys.2005.08.006)
- [Ernesto Lupercio and Bernardo Uribe, An introduction to gerbes on orbifolds (2004), §§3–4](https://doi.org/10.5802/ambp.190)

### Antipodes force flat Euler two-torsion

**Remember:** Antipodes negate the fiber form without changing the base cycle.

*True by definition.* MSC 57R20 (Characteristic classes and numbers in differential topology), 53C05. arXiv math.DG, math.AT. Level 4: research.

**Definition.** For a flat oriented Euclidean rank-r bundle, extend normalized fibre volume on the unit sphere bundle to vanish on horizontal arguments. Evaluate its flat Euler class on each integral (r−1)-cycle by integrating over any homology lift of its class, modulo integers.

**Problem.** For every flat oriented Euclidean bundle of odd rank at least three, twice the flat Euler class is zero.

**How the definition helps.** The antipodal map negates the sphere form while preserving the projected cycle. Our own summary uses the sphere integral in place of a calculation with universal characteristic classes. The homology sequence makes the value independent of the lift, so it equals its negative.

**nLab:** [secondary characteristic class](https://ncatlab.org/nlab/show/secondary+characteristic+class). It says: “If that curvature form happens to vanish, the corresponding Chern-Simons form itself becomes closed, and now itself represents a cohomology class, in one degree lower.”

**Sources:**

- [Jeff Cheeger and James Simons, Differential characters and geometric invariants (1985), Proposition 8.12](https://math.mit.edu/juvitop/pastseminars/notes_2019_Fall/cheeger-simons.pdf)

### Bott characters retain normal torsion

**Remember:** Zero curvature leaves room for torsion in the integral class.

*Makes the theorem clean to state or prove.* MSC 57R20 (Characteristic classes and numbers in differential topology), 57R30. arXiv math.DG, math.AT. Level 4: research.

**Definition.** A flat degree-k differential character is a homomorphism from integral homology in degree k−1 to ℝ/ℤ. Its integral characteristic class is, up to sign, the Bockstein of the corresponding cohomology class.

**Problem.** A smooth codimension-two foliation can have a normal plane bundle whose squared first Pontryagin class is nonzero integrally, although its adapted curvature form vanishes.

**How the definition helps.** A flat character allows zero curvature with nonzero torsion characteristic class (our own example). Take the total space of the flat line with generator holonomy over the nine-dimensional lens space with fundamental group ℤ/3. The horizontal foliation restricts along the zero section to a normal bundle equal to that line. Its squared Pontryagin class restricts to c₁⁴, which generates degree-eight integral cohomology ℤ/3.

**Paper or page:** [Characteristic classes for flat Diff(M)-foliations](https://arxiv.org/abs/2311.09160). It says: “is injective for all ℓ ≥ 0.”

**Sources:**

- [Jeff Cheeger and James Simons, Differential characters and geometric invariants (1985), Theorem 7.4 and Corollary 7.5](https://math.mit.edu/juvitop/pastseminars/notes_2019_Fall/cheeger-simons.pdf)
- [Steven Hurder, Characteristic classes for flat Diff(M)-foliations](https://arxiv.org/abs/2311.09160)

### Determinants give first flat Chern classes

**Remember:** Take the determinant before taking the logarithm.

*True by definition.* MSC 57R20 (Characteristic classes and numbers in differential topology), 53C05. arXiv math.DG, math.AT. Level 4: research.

**Definition.** For a flat complex bundle, define its first differential Chern class using the determinant line, the top exterior power of the bundle. On that line the class measures the logarithm of parallel transport around loops, divided by 2πi, modulo integers.

**Problem.** The first differential Chern class on a loop equals the logarithm of the determinant of its transport matrix, divided by 2πi, modulo integers.

**How the definition helps.** Transport on the top exterior power acts by the determinant. Our own explanation replaces evaluation of the universal differential class with transport on a line. Proposition 4.4 identifies these descriptions with the stated sign.

**Paper or page:** [Classification of indecomposable reflexive modules on quotient singularities through Atiyah--Patodi--Singer theory](https://arxiv.org/abs/2504.21204). It says: “\\widehat{c}<sub>\\rho ,1</sub>(\\bar{\\nu })=\\widehat{c}<sub>\\det (\\rho ),1</sub>(\\bar{\\nu })=\\frac{1}{2\\pi i}\\log (\\det (\\rho )\_{\\mathrm{Ab}}(\\bar{\\nu }))”

**Sources:**

- [Jeff Cheeger and James Simons, Differential characters and geometric invariants (1985), §4 and §8](https://math.mit.edu/juvitop/pastseminars/notes_2019_Fall/cheeger-simons.pdf)
- [José Antonio Arciniega Nevárez, José Luis Cisneros-Molina and Agustín Romano Velázquez, Classification of indecomposable reflexive modules on quotient singularities through Atiyah–Patodi–Singer theory (2025)](https://arxiv.org/abs/2504.21204)

### Differential Euler classes multiply

**Remember:** Multiply the Euler forms and the integral classes together.

*True by definition.* MSC 57R20 (Characteristic classes and numbers in differential topology), 53C08. arXiv math.DG, math.AT. Level 4: research.

**Definition.** The differential Euler class assigns values modulo integers to cycles of dimension one below the rank of an oriented Euclidean bundle with metric connection. It is the unique natural refinement with Euler curvature form and integral Euler class.

**Problem.** For two such bundles of positive even rank, the differential Euler class of their oriented direct sum with the sum connection equals the product.

**How the definition helps.** Natural uniqueness reduces the product formula to checking its curvature and integral class. Both multiply under direct sums. Our own summary uses the universal pair of bundles to apply uniqueness, avoiding a calculation on individual cycles.

**nLab:** [Cheeger-Simons homomorphism](https://ncatlab.org/nlab/show/Cheeger-Simons+homomorphism). It says: “the Cheeger-Simons homomorphism refines this to an assignment of secondary characteristic classes in ordinary differential cohomology to principal connections”

**Sources:**

- [Jeff Cheeger and James Simons, Differential characters and geometric invariants (1985), Theorem 3.6](https://math.mit.edu/juvitop/pastseminars/notes_2019_Fall/cheeger-simons.pdf)

### Differential normal classes bound conformal immersions

**Remember:** An immersion replaces the inverse tangent class with a normal class.

*Makes the theorem clean to state or prove.* MSC 57R20 (Characteristic classes and numbers in differential topology), 53C05. arXiv math.DG, math.AT. Level 4: research.

**Definition.** Form the total differential Chern class of the complexified tangent bundle using the metric connection with zero torsion. Invert this sum in the ring of differential characters. Its degree-4i component, multiplied by (−1)ⁱ, is the inverse differential Pontryagin class of index i.

**Problem.** If a Riemannian manifold admits a conformal immersion into Euclidean space of codimension k, its inverse differential Pontryagin classes vanish for 2i &gt; k.

**How the definition helps.** Inversion expresses the obstruction using only the tangent bundle. For the induced metric, Cheeger and Simons identify the inverse class with the corresponding normal class. The complexified normal bundle has rank k, so its Chern classes above index k vanish. Our own summary then uses conformal invariance to recover the given metric.

**nLab:** [secondary characteristic class](https://ncatlab.org/nlab/show/secondary+characteristic+class). It says: “Using refined Chern-Weil theory the notions of curvature characteristic forms and their Chern-Simons forms are unified into the notion of cocycles in ordinary differential cohomology.”

**Sources:**

- [Jeff Cheeger and James Simons, Differential characters and geometric invariants (1985), Theorem 6.2 and §5](https://math.mit.edu/juvitop/pastseminars/notes_2019_Fall/cheeger-simons.pdf)

### Exact transgression preserves differential Chern classes

**Remember:** Exact Chern character transgression leaves all differential Chern classes unchanged.

*True by definition.* MSC 57R20 (Characteristic classes and numbers in differential topology), 53C05. arXiv math.DG, math.AT. Level 4: research.

**Definition.** A structured Hermitian bundle identifies unitary connections when their Chern character transgression is exact. This odd form integrates the Chern character curvature along a path between the connections.

**Problem.** Over a compact smooth manifold, each differential Chern class depends only on the structured Hermitian bundle. It extends to formal differences of such bundles in differential K-theory.

**How the definition helps.** The equivalence relation kills exactly the change measured by the Chern character transgression. Our own summary uses the polynomial relations between Chern forms and Chern character forms to obtain exact transgressions for each Chern class. The connection-change formula gives equality, and Ho uses the direct sum formula to pass to formal differences.

**nLab:** [differential K-theory](https://ncatlab.org/nlab/show/differential+K-theory). It says: “two connections on a vector bundle are taken to be the same representative of a differential K-cocycle if they are related by a concordance such that the corresponding Chern-Simons form is exact.”

**Sources:**

- [Man-Ho Ho, On differential characteristic classes (2015), §3.2](https://www.cambridge.org/core/services/aop-cambridge-core/content/view/40022D852E2A3F395D25C626125F268C/S1446788714000627a.pdf/on_differential_characteristic_classes.pdf)

### Flat determinants detect trivial bundles

**Remember:** No rational first cohomology means the determinant cannot hide.

*Rules out counterexamples.* MSC 57R20 (Characteristic classes and numbers in differential topology), 53C05. arXiv math.DG, math.AT. Level 4: research.

**Definition.** The first secondary Chern class of a flat complex bundle measures determinant transport around loops by its logarithm divided by 2πi, modulo integers. The coboundary of a complex lift recovers the integral first Chern class up to sign.

**Problem.** On a closed oriented rational homology three-sphere, a flat complex bundle is topologically trivial exactly when every loop has determinant transport one. Here the base has the rational homology of the three-sphere.

**How the definition helps.** Vanishing first complex cohomology makes the coboundary map injective, so determinant transport detects the integral first Chern class. That class and the rank classify complex bundles in dimension three. Our own counterexample on S¹ × S² gives a trivial line nontrivial transport around the circle.

**Paper or page:** [Classification of indecomposable reflexive modules on quotient singularities through Atiyah--Patodi--Singer theory](https://arxiv.org/abs/2504.21204). It says: “The representation ρ is topologically trivial if and only if cᵨ,₁ = 0, if and only if ĉᵨ,₁ = 0.”

**Sources:**

- [José Antonio Arciniega Nevárez, José Luis Cisneros-Molina and Agustín Romano Velázquez, Classification of indecomposable reflexive modules on quotient singularities through Atiyah–Patodi–Singer theory (2025)](https://arxiv.org/abs/2504.21204)

### Godbillon–Vey numbers obstruct foliated cobordism

**Remember:** Integrate the secondary form on the boundary of the cobordism.

*Makes the theorem clean to state or prove.* MSC 57R20 (Characteristic classes and numbers in differential topology), 57R30. arXiv math.DG, math.AT. Level 4: research.

**Definition.** A cooriented codimension-one foliation has tangent planes given by the kernel of a global one-form α without zeros. Choose β with dα = β ∧ α. The Godbillon–Vey number on a closed oriented three-manifold is the integral of β ∧ dβ.

**Problem.** Thurston constructed foliations of the three-sphere with every real Godbillon–Vey number. Different numbers rule out a cooriented foliated cobordism, an oriented interpolating manifold whose foliation restricts to the two given foliations.

**How the definition helps.** The number integrates a closed form that extends across any such cobordism. Stokes’ theorem gives equal boundary integrals with the two ends given their original orientations. Our own summary uses independence of α and β for the invariant and Thurston’s construction for the range.

**Wikipedia:** [William Thurston](https://en.wikipedia.org/wiki/William_Thurston). It says: “whose Godbillon–Vey invariants (after Claude Godbillon and Jacques Vey) take every real value.”

**Sources:**

- [William Thurston, Noncobordant foliations of S³ (1972)](https://doi.org/10.1090/S0002-9904-1972-12975-6)

### Integral lifts distinguish identical curvatures

**Remember:** Curvature cannot see which torsion class you added.

*Makes the theorem clean to state or prove.* MSC 57R20 (Characteristic classes and numbers in differential topology), 53C08. arXiv math.DG, math.AT. Level 4: research.

**Definition.** A degree-2k Cheeger–Simons input for G pairs an invariant degree-k polynomial P with u ∈ H²ᵏ(BG; ℤ). The real image of u must equal the Chern–Weil class of P.

**Problem.** For the cyclic group of order two, the zero polynomial admits two distinct natural differential characteristic classes of degree two.

**How the definition helps.** In our own example, H²(BG; ℤ) has order two and both classes map to zero over ℝ. The Cheeger–Simons theorem refines each pair to a natural differential class with the specified integral class, so the two refinements differ.

**nLab:** [Cheeger-Simons homomorphism](https://ncatlab.org/nlab/show/Cheeger-Simons+homomorphism). It says: “the Cheeger-Simons homomorphism refines this to an assignment of secondary characteristic classes in ordinary differential cohomology to principal connections”

**Sources:**

- [Jeff Cheeger and James Simons, Differential characters and geometric invariants (1985), Theorem 2.2](https://math.mit.edu/juvitop/pastseminars/notes_2019_Fall/cheeger-simons.pdf)

### Mapping tori give Chern–Simons holonomy

**Remember:** One loop of surfaces sweeps out one three-cycle.

*True by definition.* MSC 57R20 (Characteristic classes and numbers in differential topology), 53C08, 58J28. arXiv math.DG, math.AT. Level 4: research.

**Definition.** A degree-four differential character is a homomorphism h from smooth integral three-cycles to ℝ/ℤ satisfying h(∂c) = ∫<sub>c</sub> ω modulo integers for every smooth four-chain c. One fixed four-form ω serves for all c. Fiber integration along closed oriented surfaces gives the degree-two character of the Chern–Simons line.

**Problem.** Parallel transport around a loop in the base equals exp(2πi h), where h is the original character evaluated on the surface family over that loop.

**How the definition helps.** Fiber integration evaluates the character on the three-manifold swept out by the surfaces. Our own explanation uses this in place of constructing transport by gluing local line trivializations. The three-manifold is the mapping torus, obtained by joining the ends of the surface family around the loop.

**nLab:** [fiber integration in ordinary differential cohomology](https://ncatlab.org/nlab/show/fiber+integration+in+ordinary+differential+cohomology). It says: “is the partial higher holonomy operation for circle n-bundles with connection”

**Sources:**

- [Daniel Freed, Classical Chern–Simons Theory, Part 2 (2002)](https://www.ma.utexas.edu/users/dafr/cs2.pdf)

### Trivializations recover Chern–Simons integrals

**Remember:** Use the tautological frame upstairs and your chosen frame downstairs.

*True by definition.* MSC 57R20 (Characteristic classes and numbers in differential topology), 53C08. arXiv math.DG, math.AT. Level 4: research.

**Definition.** For a principal bundle π:P → M, the tautological section of π\*P = P ×<sub>M</sub> P sends each p to (p,p). It defines the trivial reference connection used to transgress the pulled-back connection.

**Problem.** On the total space, the differential characteristic class evaluates on cycles by integrating this Chern–Simons form modulo integers. A global section gives the same formula on the base.

**How the definition helps.** In our own argument, the trivial framed connection has zero positive-degree differential characteristic class by naturality from a point. The connection-change formula therefore gives integration of the transgression form modulo integers. Pullback along any global section gives the base formula.

**nLab:** [secondary characteristic class](https://ncatlab.org/nlab/show/secondary+characteristic+class). It says: “Using refined Chern-Weil theory the notions of curvature characteristic forms and their Chern-Simons forms are unified into the notion of cocycles in ordinary differential cohomology.”

**Wikipedia:** [Chern–Simons form](https://en.wikipedia.org/wiki/Chern%E2%80%93Simons_form). It says: “The right-hand side of this equation is proportional to the k-th Chern character of the connection A.”

**Sources:**

- [Jeff Cheeger and James Simons, Differential characters and geometric invariants (1985), Propositions 2.8–2.9](https://math.mit.edu/juvitop/pastseminars/notes_2019_Fall/cheeger-simons.pdf)

### Truncation closes mixed foliation forms

**Remember:** The differential hits a polynomial that the algebra has already discarded.

*True by definition.* MSC 57R20 (Characteristic classes and numbers in differential topology), 57R30. arXiv math.DG, math.AT. Level 4: research.

**Definition.** For codimension q, take the polynomial algebra on c₁,…,c<sub>q</sub> tensored with the exterior algebra on y₁,…,y<sub>q</sub> over ℝ. Give cᵢ degree 2i and yᵢ degree 2i−1, with dcᵢ = 0 and dyᵢ = cᵢ. Quotient by the ideal generated by curvature monomials of degree above 2q.

**Problem.** For a smooth foliation with a framed normal bundle, a polynomial c of degree at most 2q gives a secondary class whenever degree(cᵢc) exceeds 2q. The class is represented in the algebra by yᵢc.

**How the definition helps.** Truncation sets the derivative cᵢc of yᵢc equal to zero. Our own calculation replaces a derivative on the manifold with multiplication in the algebra. Bott vanishing justifies the cutoff, and the characteristic map takes the resulting class to the manifold using the chosen normal frame.

**nLab:** [Bott connection](https://ncatlab.org/nlab/show/Bott+connection). It says: “for any connection on the (co)normal bundle and defined on all vector fields on X which restricts to the above along leaves”

**Paper or page:** [Rigid secondary characteristic classes](https://arxiv.org/abs/2403.09371). It says: “of graded degree $deg(c<sub>J</sub>) &gt; 2q$, the Chern form $c<sub>J</sub>(\\Omega ({\\nabla ^{{\\mathcal F}}}))$ is identically zero.”

**Sources:**

- [Raoul Bott, On characteristic classes in the framework of Gelfand–Fuks cohomology (1976)](https://www.numdam.org/item/AST_1976__32-33__113_0/)
- [Steven Hurder, Rigid secondary characteristic classes](https://arxiv.org/abs/2403.09371)

### Universal flat classes live on discrete groups

**Remember:** Classify the locally constant transitions, not just the underlying bundle.

*Makes the theorem clean to state or prove.* MSC 57R20 (Characteristic classes and numbers in differential topology), 55R40. arXiv math.DG, math.AT. Level 4: research.

**Definition.** A flat principal G-bundle has a specified reduction to locally constant transition functions. Equivalently, its flat atlas has locally constant transition functions on every overlap, and compatible flat atlases define the same structure.

**Problem.** Choose a positive-degree integral characteristic class and a curvature polynomial representing it over the reals. One universal secondary class then gives every flat bundle’s secondary class by pullback.

**How the definition helps.** The discrete topology retains the locally constant transition functions and hence the flat bundle itself. Our own summary uses naturality after Cheeger and Simons construct the universal class with coefficients in ℝ/ℤ.

**nLab:** [Cheeger-Simons differential character](https://ncatlab.org/nlab/show/Cheeger-Simons+differential+character). It says: “in particular if the curvature characteristic form vanishes so that the corresponding Chern-Simons form becomes closed”

**Sources:**

- [Jeff Cheeger and James Simons, Differential characters and geometric invariants (1985), §8](https://math.mit.edu/juvitop/pastseminars/notes_2019_Fall/cheeger-simons.pdf)

### Universal foliation classes pull back

**Remember:** Pull back one class from the space of framed transverse data.

*Makes the theorem clean to state or prove.* MSC 57R20 (Characteristic classes and numbers in differential topology), 57R30, 55R40. arXiv math.DG, math.AT. Level 4: research.

**Definition.** A smooth codimension-q Haefliger cocycle assigns local maps to ℝᑫ and smooth overlap maps into the étale groupoid of local diffeomorphism germs. Each germ carries one local value to the other, and the germs compose on triple overlaps. A framing trivializes the rank-q bundle glued by their derivatives.

**Problem.** Every secondary class from the truncated Weil algebra of a framed foliation comes by pullback from the framed Haefliger classifying space.

**How the definition helps.** The classifying space puts the transverse data for all framed foliations in one place. The truncated Weil algebra records curvature polynomials and their primitives, subject to the codimension bound. Our own summary uses the universal characteristic map of Theorem 3.2 to obtain the pullback formula.

**Paper or page:** [Rigid secondary characteristic classes](https://arxiv.org/abs/2403.09371). It says: “There is a well-defined universal characteristic map”

**Sources:**

- [Raoul Bott and André Haefliger, On characteristic classes of Γ-foliations (1972)](https://doi.org/10.1090/S0002-9904-1972-13101-X)
- [Steven Hurder, Rigid secondary characteristic classes](https://arxiv.org/abs/2403.09371)

### In cohesive higher geometry every foliation is simple

**Remember:** Let the leaf space be a stack, and every foliation becomes a submersion.

*True by definition. Confidence: low.* MSC 57R30 (Foliations in differential topology; geometric theory), 18F40, 18N60. arXiv math.DG, math.CT. Level 4: research.

**Definition.** In differential cohesion, a foliation of X is a formally smooth 1-epimorphism X → X//𝒟 to its higher leaf stack. Its leaves are the fibers over points.

**Problem.** In differential cohesion, every foliation is simple. Its leaves are the fibres of a formally smooth epimorphism onto its leaf space, which is a higher stack. For an étale foliation groupoid, these are the traditional leaves.

**How the definition helps.** The defining map already exhibits each leaf as a fiber. In our own groupoid description, the fiber over a represented point projects onto its orbit, the traditional leaf in the étale presentation.

**nLab:** [foliation](https://ncatlab.org/nlab/show/foliation). It says: “Because the quotient map to the leaf space of a general foliation is always a submersion/formally smooth morphism, just not always onto a manifold, but onto a higher space.”

**Sources:**

- [Urs Schreiber, Differential cohomology in a cohesive infinity-topos, 2013, arXiv:1310.7930](https://arxiv.org/abs/1310.7930)

### Flexible sheaves are defined so that the h-principle follows

**Remember:** Restrictions of sections over compact sets lift homotopies of disks.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 57R42 (Immersions in differential topology), 18F20. arXiv math.DG, math.GT. Level 4: research.

**Definition.** A continuous sheaf on a polyhedron is flexible if every inclusion K ⊂ L of compact subsets induces a Serre fibration of section spaces. Sections over compact sets are germs of sections on neighborhoods.

**Problem.** Every flexible sheaf on a polyhedron satisfies the parametric h-principle.

**How the definition helps.** Gromov’s flexible sheaf theorem uses homotopy lifting for these restrictions to establish the parametric h-principle.

**Paper or page:** [Fibration structure for Gromov h-principle](https://arxiv.org/abs/2102.03449), [Fibration structure for Gromov h-principle](https://arxiv.org/abs/2102.03449). It says: “Any flexible sheaf on a polyhedron satisfies the parametric h-principle.”

**Sources:**

- [K. Yamazaki, Fibration structure for Gromov h-principle, arXiv:2102.03449 (2022)](https://arxiv.org/abs/2102.03449)
- [M. Gromov, Partial Differential Relations, Springer (1986)](https://doi.org/10.1007/978-3-662-02267-2)

### Counting bundles by groupoid cardinality makes Dijkgraaf–Witten values basepoint-free

**Remember:** Weight each bundle by its symmetries, and no basepoint is needed.

*True by definition.* MSC 57R56 (Topological quantum field theories (aspects of differential topology)), 81T45. arXiv math.QA, math.GT. Level 4: research.

**Definition.** For finite G and closed M, the untwisted value Z(M) sums 1/\|Aut(P)\| over isomorphism classes of principal G-bundles P on M.

**Problem.** Let M be a connected closed manifold and G a finite group. The untwisted Dijkgraaf–Witten value of M does not depend on a basepoint. It equals \|Hom(π₁(M, x), G)\| / \|G\| for every basepoint x.

**How the definition helps.** The bundle count uses no basepoint (our own observation). For connected M, monodromy identifies the bundle groupoid with the action groupoid for conjugation on Hom(π₁(M,x),G) (our own explanation). The quoted cardinality formula gives the stated quotient.

**nLab:** [Dijkgraaf-Witten theory](https://ncatlab.org/nlab/show/Dijkgraaf-Witten+theory), [groupoid cardinality](https://ncatlab.org/nlab/show/groupoid+cardinality). It says: “then the cardinality of the action groupoid X//G is \|X\|/\|G\|.”

**Sources:**

- [Robbert Dijkgraaf and Edward Witten, Topological gauge theories and group cohomology (1990)](https://doi.org/10.1007/BF02096988)
- [Daniel Freed and Frank Quinn, Chern-Simons theory with finite gauge group (1993)](https://doi.org/10.1007/BF02096860)

### Derived sewing turns circles into loops

**Remember:** Glue the diagonal to itself to recover all the loops.

*True by definition.* MSC 57R56 (Topological quantum field theories (aspects of differential topology)), 81T45. arXiv math.AT. Level 4: research.

**Definition.** Derived sewing composes correspondences over their common boundary by homotopy fiber product. For affine derived schemes Spec B and Spec C over Spec R, this product has function algebra B ⊗ᴸ<sub>R</sub> C.

**Problem.** Take the oriented two-dimensional theory of Theorem C with point value X and the canonical trivialization of its Serre automorphism. It assigns to the circle Spec of the Hochschild chains of A.

**How the definition helps.** Derived gluing computes the intersection of the diagonal with itself and retains its higher homology. Our own affine calculation gives the derived tensor product of A with itself over A ⊗ A. This is the Hochschild chain complex. The construction of the oriented theory proves that the two arcs use those diagonal correspondences.

**Paper or page:** [Higher categories of push-pull spans, II: Matrix factorizations](https://arxiv.org/abs/2409.00219v2). It says: “Spec HC(A)”

**Sources:**

- [Higher categories of push-pull spans, II: Matrix factorizations](https://arxiv.org/abs/2409.00219v2)

### Gauge spans compose under sewing

**Remember:** Sew by matching boundary fields up to a chosen gauge isomorphism.

*Makes the theorem clean to state or prove.* MSC 57R56 (Topological quantum field theories (aspects of differential topology)), 81T45. arXiv math.AT. Level 4: research.

**Definition.** Fix a finite group G. The gauge groupoid of a manifold has principal G-bundles as objects and bundle isomorphisms as arrows. A bordism gives a span, a pair of restriction maps from its gauge groupoid to those of its boundaries.

**Problem.** For oriented three-dimensional bordisms, the gauge groupoid of a gluing is equivalent to the homotopy pullback of the two bundle groupoids over their common boundary.

**How the definition helps.** In our own argument, the homotopy pullback records two bundles and an isomorphism of their boundary restrictions. Its arrows are pairs of bundle isomorphisms respecting that identification. Gluing bundles and their arrows along collars gives the inverse to restriction up to natural isomorphism.

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

**How the definition helps.** In our own explanation, equivariance records compatibility with changes of oriented frame. The oriented cobordism hypothesis identifies these choices with fully extended oriented theories.

**nLab:** [cobordism hypothesis](https://ncatlab.org/nlab/show/cobordism+hypothesis). It says: “a homotopy fixed point is not just a property. It is additional structure.”

**Sources:**

- [Lurie, On the Classification of Topological Field Theories](https://people.math.harvard.edu/~lurie/papers/cobordism.pdf)

### Inverting bordisms exposes partition characters

**Remember:** A theory that already inverts every bordism factors through the completion.

*True by definition.* MSC 57R56 (Topological quantum field theories (aspects of differential topology)). arXiv math.AT. Level 4: research.

**Definition.** The groupoid completion of a category universally inverts every arrow. Every functor from the category to a groupoid extends uniquely up to natural isomorphism across the completion.

**Problem.** Every such theory factors through the groupoid completion. On the component containing the empty manifold, a character of its automorphism group determines the underlying functor up to isomorphism. For the structured bordism categories of the cited theorem, that group is the cut-and-paste group.

**How the definition helps.** In our own argument, an invertible theory lands in the groupoid of lines and isomorphisms, so it factors through the completion. The empty manifold’s component is equivalent to its one-object automorphism groupoid. A functor on that groupoid amounts to a line with a character. The cited theorem identifies the group.

**Paper or page:** [SKK groups of manifolds and non-unitary invertible TQFTs](https://arxiv.org/abs/2504.07917v1). It says: “π₁(‖Bordξₙ₋₁,ₙ‖) ≅ π₁(‖N Cobξₙ₋₁,ₙ‖) ≅ SKK(Cobξₙ₋₁,ₙ) = SKKξₙ.”

**Sources:**

- [SKK groups of manifolds and non-unitary invertible TQFTs](https://arxiv.org/abs/2504.07917v1)

### Lines turn sewing into scalar multiplication

**Remember:** Gluing four line maps in either pairing gives the same product.

*True by definition.* MSC 57R56 (Topological quantum field theories (aspects of differential topology)). arXiv math.AT. Level 4: research.

**Definition.** An invertible complex topological field theory is a symmetric monoidal functor from the bordism category to complex lines and linear isomorphisms.

**Problem.** The product of the two closed values stays unchanged when the incoming pieces exchange outgoing partners. Thus closed values define a homomorphism from the cut-and-paste group to the nonzero complex numbers.

**How the definition helps.** The boundary line makes the exchange relation an identity between products of scalars. In our own calculation, choose a basis and write the incoming vectors as a,b and the outgoing functionals as c,d. The products (ca)(db) and (da)(cb) agree. The cited proposition proves that these exchanges generate the required relations.

**Paper or page:** [SKK groups of manifolds and non-unitary invertible TQFTs](https://arxiv.org/abs/2504.07917v1). It says: “N₁ ∪ N₁′ + N₂ ∪ N₂′ ∼ N₁ ∪ N₂′ + N₂ ∪ N₁′”

**Sources:**

- [SKK groups of manifolds and non-unitary invertible TQFTs](https://arxiv.org/abs/2504.07917v1)

### Maslov weights lift projective actions

**Remember:** Record the gluing correction as part of the cylinder.

*True by definition.* MSC 57R56 (Topological quantum field theories (aspects of differential topology)). arXiv math.GT, math.QA. Level 4: research.

**Definition.** Fix a Lagrangian L in the real first homology of a closed oriented surface. A weighted mapping cylinder consists of a mapping class f and an integer m. Its product with (g,n) is (fg,m+n+μ(L,fL,fgL)), using the Gilmer–Masbaum Maslov index.

**Problem.** For the surface theories of Gilmer and Masbaum, the operators assigned to weighted mapping cylinders form a linear representation of the extended mapping class group.

**How the definition helps.** The Maslov cocycle identity makes the group law associative. In our own explanation, the sewing theorem contributes exactly the scalar encoded by the extra Maslov weight, so operators compose linearly.

**Paper or page:** [Some remarks on the Maslov index](https://arxiv.org/abs/2105.04337v3). It says: “The Maslov index is a 2-cocycle”

**Sources:**

- [Gilmer and Masbaum, Maslov index, Lagrangians, Mapping Class Groups and TQFT](https://doi.org/10.1515/form.2011.143)
- [Some remarks on the Maslov index](https://arxiv.org/abs/2105.04337v3)

### Ordered intervals allow noncommutative products

**Remember:** Without a swap of inputs, a pair of pants need not commute.

*Makes the theorem clean to state or prove.* MSC 57R56 (Topological quantum field theories (aspects of differential topology)). arXiv math.AT. Level 4: research.

**Definition.** A Frobenius algebra object has a unital associative multiplication m and a counital coassociative comultiplication Δ. They satisfy Δm = (m ⊗ id)(id ⊗ Δ) = (id ⊗ m)(Δ ⊗ id).

**Problem.** For a monoidal target C, evaluation on one interval gives an equivalence between monoidal functors from planar open bordisms and Frobenius algebras in C.

**How the definition helps.** Planar gluing keeps the order of inputs, so the classification can include products with ab different from ba. Our own example is the algebra of complex two-by-two matrices with trace pairing given by tracing the product. The proof identifies generators and relations for the planar surfaces.

**Paper or page:** [Graded Frobenius Algebras](https://arxiv.org/abs/2412.13909v2). It says: “Funᵐᵒⁿ(Cob₂ᵖˡᵃⁿᵃʳ,C) → Frob(C)”

**Sources:**

- [Clivio, Graded Frobenius Algebras](https://academic.oup.com/qjmath/article-abstract/76/4/1105/8258596)

### Radical quotients make sewing nondegenerate

**Remember:** Two states agree when every possible gluing gives the same answer.

*True by definition.* MSC 57R56 (Topological quantum field theories (aspects of differential topology)). arXiv math.AT. Level 4: research.

**Definition.** For each boundary, take free vector spaces on incoming and outgoing bordisms to and from the empty boundary. Pair basis bordisms by the assigned scalar of their closed gluing, and extend bilinearly. Quotient each space by all vectors pairing to zero with every opposite vector.

**Problem.** The induced pairing has zero left and right radicals. Gluing another bordism gives a well-defined linear map between the quotients.

**How the definition helps.** The quotient kills exactly the vectors invisible to all tests, so both radicals vanish. In our own argument, testing after gluing equals testing against the composite bordism by associativity. Thus gluing preserves the radical and descends to the quotient.

**Paper or page:** [Universal construction in monoidal and non-monoidal settings, the Brauer envelope, and pseudocharacters](https://arxiv.org/abs/2303.02696v1). It says: “is nondegenerate.”

**Sources:**

- [Universal construction in monoidal and non-monoidal settings, the Brauer envelope, and pseudocharacters](https://arxiv.org/abs/2303.02696v1)
