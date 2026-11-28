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

**Definition.** Choose a starting point away from the crossings and a direction around a knot drawing. The drawing is descending if you pass over each crossing on your first visit, so the strand only goes down and the knot is unknotted (our own).

**Problem.** Any knot drawing with c crossings can become a descending drawing of the unknot by switching at most half its crossings.

**How the definition helps.** Reversing direction swaps which strand comes first at every crossing, so one direction already passes over first at half the crossings or more (our own count). Switching the other crossings, at most c/2 of them, gives a descending drawing and so the unknot.

**nLab:** [unknotting number](https://ncatlab.org/nlab/show/unknotting+number). It says: “Let D be a diagram with c crossings, then changing at most c/2 crossings of D produces a diagram of the unknot.”

**Sources:** none listed. No primary source with a working link was found.

### Endpoint cycles count the components of a closed braid

**Remember:** Closing a braid turns each cycle of its permutation into a loop.

*True by definition.* MSC 57K10 (Knot theory). arXiv math.GT. Level 1: early undergraduate.

**Definition.** A braid's strands run without turning back from one row of labelled points to another, and its endpoint permutation sends each start to the end of its strand. Closing the braid joins each end back to the start with the same label, so a trip continues on the strand that starts there.

**Problem.** The components of a closed braid correspond one-for-one to the cycles of its endpoint permutation. In particular, the closure is a knot if the permutation is a single cycle.

**How the definition helps.** Following one component applies the permutation again and again until the label returns, which traces one cycle (our own proof). Every label lies in exactly one cycle, so components and cycles match.

**nLab:** [braid group](https://ncatlab.org/nlab/show/braid+group). It says: “the order of the given points may come out permuted by a permutation”

**Sources:** none listed. No primary source with a working link was found.

### Nonconstant tricolorings rule out the unknot

**Remember:** Use all three colors; each crossing shows one color or three.

*Rules out counterexamples.* MSC 57K10 (Knot theory). arXiv math.GT. Level 1: early undergraduate.

**Definition.** A tricoloring of a knot diagram colors each arc between underpasses, using all three colors, so that at each crossing the three meeting arcs are all one color or all different.

**Problem.** A knot with a tricoloring cannot be the unknot, the knot shaped like a plain circle. The trefoil has such a coloring.

**How the definition helps.** The plain circle has one arc, so it cannot use all three colors, and the Reidemeister moves relating diagrams of the same knot preserve tricolorability. Coloring the three arcs of the standard trefoil drawing differently passes the crossing test.

**nLab:** [colorable knot](https://ncatlab.org/nlab/show/colorable+knot). It says: “exactly three colours are used in the assignment”

**Sources:** none listed. No primary source with a working link was found.

### Over and under marks recover the knot from a diagram

**Remember:** A shadow needs height order at each crossing.

*Rules out counterexamples.* MSC 57K10 (Knot theory). arXiv math.GT. Level 1: early undergraduate.

**Definition.** A knot diagram is a plane projection of a knot whose only crossings are double points where two branches meet at distinct angles, each marked with which branch lies higher.

**Problem.** An over-and-under diagram determines a single knot type. One unmarked plane projection can represent both a trefoil and an unknot.

**How the definition helps.** The marks fix the height order at each crossing, and two height assignments with the same order are joined by moving heights linearly with the drawing fixed (our own proof). No strands meet during this motion, and it extends to the surrounding space. Switching one crossing of a trefoil drawing gives an unknot with the same unmarked drawing.

**nLab:** [link diagram](https://ncatlab.org/nlab/show/link+diagram). It says: “Which strand of the two intersecting at the double point is the 'over strand' and which is the 'under strand' is recorded”

**Sources:** none listed. No primary source with a working link was found.

### Disk removal makes Euler characteristic of surface sums computable

**Remember:** Each removed disk costs one, and gluing along a circle costs nothing.

*True by definition.* MSC 57K20 (2-dimensional topology (including mapping class groups of surfaces, Teichmüller theory, curve complexes, etc.)). arXiv math.GT. Level 1: early undergraduate.

**Definition.** The connected sum of two closed surfaces removes an open disk from each and glues the two boundary circles together. Euler characteristic, vertices minus edges plus faces, drops by one for each removed disk and does not change when two circles are glued (our own).

**Problem.** The Euler characteristic of a connected sum of closed surfaces is the sum of their Euler characteristics minus two.

**How the definition helps.** Take each removed disk as one face, with matching subdivisions on the two circles (our own count). Each disk costs one face, and gluing the circles removes equally many vertices and edges, so the total drops by two. That the count does not depend on the subdivision needs a separate proof.

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

**Definition.** Make a Möbius strip by gluing the two ends of a rectangle with a half twist, so the top edge at one end meets the bottom edge at the other and the midpoints meet.

**Problem.** The Möbius strip has one boundary circle. When the strip shrinks to its middle circle, the boundary goes around that circle twice.

**How the definition helps.** The flipped seam joins the top edge to the bottom edge, so the two long edges form one boundary loop. Shrinking each crosswise segment to its midpoint respects the gluing, and each long edge then goes once around the centerline (our own proof). The boundary is made of both edges, so it goes around twice.

**Wikipedia:** [Möbius strip](https://en.wikipedia.org/wiki/M%C3%B6bius_strip). It says: “The Möbius strip can be continuously transformed into its centerline”

**Sources:** none listed. No primary source with a working link was found.

### A torus level set counts link components

**Remember:** Points with qx − py an integer form gcd(p,q) circles.

*True by definition.* MSC 57K10 (Knot theory). arXiv math.GT. Level 2: later undergraduate.

**Definition.** Imagine the surface of a doughnut with two angle coordinates x and y, each measured in full turns. For positive integers p and q, the torus link consists of all points where qx − py is an integer.

**Problem.** The torus link has gcd(p, q) components, where gcd means greatest common divisor. It is a knot exactly when p and q are coprime.

**How the definition helps.** The equation describes all strands at once. Write d = gcd(p, q) and u = (q/d)x − (p/d)y; its coefficients are coprime, so by Bézout's identity u is one coordinate of a valid torus coordinate system (our own). The equation becomes du ∈ ℤ, which allows d values of u, each a whole circle.

**Wikipedia:** [Torus knot](https://en.wikipedia.org/wiki/Torus_knot). It says: “A torus link arises if p and q are not coprime”

**Sources:** none listed. No primary source with a working link was found.

### Changing the cut leaves a closed braid unchanged

**Remember:** A closed braid has no preferred place to cut it open.

*True by definition.* MSC 57K10 (Knot theory). arXiv math.GT. Level 2: later undergraduate.

**Definition.** Draw a braid as strands crossing a cylinder from one end to the other without turning back. Closing the braid identifies the two ends, so the closure lies in a solid torus with no preferred place where the braid starts.

**Problem.** Conjugate braids have equivalent closures. Conjugating a braid means placing a second braid before it and the inverse of that braid after it.

**How the definition helps.** After closure the braid pieces sit in a cyclic order, so the second braid and its inverse become adjacent. Slide the cut until they meet, then cancel them (our own proof). The standard placement of the solid torus in space gives the usual closure drawn with outside arcs.

**Wikipedia:** [Markov theorem](https://en.wikipedia.org/wiki/Markov_theorem). It says: “their closures are equivalent links”

**Sources:** none listed. No primary source with a working link was found.

### Framed links make the Kauffman bracket an invariant with no correction

**Remember:** Remember the ribbon, and the twist count becomes part of the knot.

*True by definition.* MSC 57K10 (Knot theory), 57K14. arXiv math.GT. Level 2: later undergraduate.

**Definition.** A framing of a link is a ribbon along it: a homotopy class of nowhere-zero normal vector fields on each component (our own). A diagram carries the blackboard framing, which pushes each strand sideways in the diagram plane, so a curl adds one twist to the ribbon (our own).

**Problem.** The Kauffman bracket is an invariant of framed links. Diagrams show the same framed link exactly when modified Reidemeister moves connect them.

**How the definition helps.** Framing makes a curl part of the data, so the bracket needs no correction for curls. The bracket relations preserve it under moves II and III, and opposite curls on one strand contribute inverse factors under the modified move I (our own). The framed Reidemeister theorem identifies these moves on blackboard diagrams with framed link equivalence.

**Wikipedia:** [Knot (mathematics)](https://en.wikipedia.org/wiki/Knot_%28mathematics%29), [Bracket polynomial](https://en.wikipedia.org/wiki/Bracket_polynomial), [Reidemeister move](https://en.wikipedia.org/wiki/Reidemeister_move). It says: “Link diagrams, with blackboard framing, represent equivalent framed links if and only if they are connected by a sequence of (modified) type I, II, and III moves.”

**Sources:**

- [Louis H. Kauffman, An invariant of regular isotopy, Transactions of the American Mathematical Society 318 (1990) 417–471](https://doi.org/10.1090/S0002-9947-1990-0958895-7)

### Moving the whole space keeps knots from coming undone

**Remember:** You must move the space around the knot, not only the knot.

*Rules out counterexamples.* MSC 57K10 (Knot theory), 57N37. arXiv math.GT. Level 2: later undergraduate.

**Definition.** Two knots are equivalent when an ambient isotopy carries one onto the other: a continuous family of homeomorphisms of the whole surrounding space, starting at the identity. Because the whole space moves, the knot's complement keeps its homeomorphism type.

**Problem.** Under continuous isotopy through embeddings, every tame knot in ℝ³ is equivalent to the unknot. Under ambient isotopy, the trefoil is inequivalent to the unknot.

**How the definition helps.** Ambient isotopy preserves the complement, so knot groups tell knots apart: the trefoil's is nonabelian and the unknot's is infinite cyclic (our own argument). Plain isotopy can shrink a knotted arc to a point while keeping each time slice embedded.

**Wikipedia:** [Knot theory](https://en.wikipedia.org/wiki/Knot_theory), [Ambient isotopy](https://en.wikipedia.org/wiki/Ambient_isotopy). It says: “However, this definition would make every knot equivalent to the unknot, as the knotted portions can be "contracted" down to a straight line.”

**Sources:** none listed. No primary source with a working link was found.

### Oriented knots have a well-defined connected sum

**Remember:** The arrows tell you which cut ends to join.

*Rules out counterexamples.* MSC 57K10 (Knot theory). arXiv math.GT. Level 2: later undergraduate.

**Definition.** Draw the two directed knots in separate disks and cut a short arc on the outer face of each. The oriented connected sum joins the ends by two disjoint arcs across the gap, without new crossings, so that both directions continue.

**Problem.** The oriented connected sum depends only on the oriented knot types, not the cut arcs or diagrams.

**How the definition helps.** The directions fix which cut ends to join, so no choice is left. Reversing just one direction can give a different knot even after the directions are forgotten. The rest of the proof slides the cut along each knot and checks that changing either diagram keeps the result.

**Wikipedia:** [Connected sum](https://en.wikipedia.org/wiki/Connected_sum). It says: “the oriented ambient isotopy class of the result is well-defined”

**Sources:** none listed. No primary source with a working link was found.

### Oriented Seifert surfaces give an odd Euler characteristic

**Remember:** One boundary and orientability make Euler characteristic odd.

*Rules out counterexamples.* MSC 57K10 (Knot theory). arXiv math.GT. Level 2: later undergraduate.

**Definition.** A Seifert surface for a directed knot is a compact, connected, oriented surface in space whose boundary is the knot, with matching direction. Capping its one boundary circle with a disk gives a closed oriented surface, whose genus g is the genus of the Seifert surface.

**Problem.** A Seifert surface of genus g spanning one knot has odd Euler characteristic, equal to 1 − 2g.

**How the definition helps.** A closed oriented surface of genus g has Euler characteristic 2 − 2g, and removing the cap subtracts one face, giving 1 − 2g (our own count). Without orientability the claim fails: a Möbius strip spans a knot and has Euler characteristic zero.

**Wikipedia:** [Seifert surface](https://en.wikipedia.org/wiki/Seifert_surface). It says: “A Seifert surface must be oriented.”

**Paper or page:** [Möbius Strip has Euler Characteristic Zero](https://proofwiki.org/wiki/Möbius_Strip_has_Euler_Characteristic_Zero). It says: “Let M be a Möbius Strip. Then: χ(M) = 0”

**Sources:** none listed. No primary source with a working link was found.

### Seifert circles and bands give a knot genus bound

**Remember:** Count circles and crossings to bound the number of handles.

*True by definition.* MSC 57K10 (Knot theory). arXiv math.GT. Level 2: later undergraduate.

**Definition.** Seifert's construction smooths each crossing of a directed diagram along the directions into s circles, fills them with disks, and joins the disks by one twisted band per crossing. The result is an oriented spanning surface with Euler characteristic s − c, one per disk minus one per band; knot genus is the least genus of any compact, connected, oriented spanning surface.

**Problem.** If a knot diagram has c crossings and smoothing them gives s circles, its knot genus is at most (c − s + 1)/2.

**How the definition helps.** The construction gives one oriented spanning surface, so its genus bounds the minimum without a search over all surfaces. Setting s − c = 1 − 2g for a surface with one boundary circle gives g = (c − s + 1)/2 (our own calculation). Seifert's construction ensures that the surface is embedded and consistently oriented.

**Paper or page:** [Nudos y Superficies](https://arxiv.org/abs/2412.20945v1). It says: “se construye a partir de b bandas y d discos, entonces χ(F) = d − b”

**Sources:**

- [Herbert Seifert, Über das Geschlecht von Knoten (1935)](https://link.springer.com/article/10.1007/BF01448044)

### Signed mixed crossings bound the cost of splitting links

**Remember:** One mixed crossing change can fix at most one unit of linking.

*True by definition.* MSC 57K10 (Knot theory). arXiv math.GT. Level 2: later undergraduate.

**Definition.** The linking number of two directed link components is half their signed crossing count, so changing one crossing between them changes it by exactly one (our own). The absolute linking number of a link adds the absolute values over all pairs of components.

**Problem.** Separating all components into disjoint balls requires at least the absolute linking number in crossing changes between different components.

**How the definition helps.** Each mixed crossing change lowers the absolute linking number by at most one, and a split link has absolute linking number zero. Taking absolute values before adding prevents cancellation between different pairs. The signed count is an invariant because each Reidemeister move keeps it; an R2 move adds or removes two crossings of opposite sign.

**nLab:** [linking number](https://ncatlab.org/nlab/show/linking+number). It says: “An R2 move removes or introduces two crossings of opposite sign”

**Paper or page:** [Slice-torus link invariants, combinatorial invariants, and positivity conditions](https://arxiv.org/abs/2008.06921v3). It says: “If there exists a splitting sequence with m mixed crossing changes, then \|ℓk\|(L) ≤ m”

**Sources:** none listed. No primary source with a working link was found.

### Tame knots have finite diagrams, so Reidemeister moves capture equivalence

**Remember:** Finitely many straight pieces mean finitely many crossings.

*Rules out counterexamples.* MSC 57K10 (Knot theory), 57M30. arXiv math.GT. Level 2: later undergraduate.

**Definition.** A tame knot is a knot that an ambient isotopy carries onto a polygonal knot, a closed loop of finitely many straight segments in ℝ³. So every tame knot has a regular diagram with finitely many crossings.

**Problem.** Two regular diagrams of tame knots represent equivalent knots exactly when planar isotopies and finitely many Reidemeister moves relate them.

**How the definition helps.** Tame knots are exactly the knots with finite regular diagrams, so Reidemeister’s theorem covers all of them. A polygonal knot in general position projects to a finite regular diagram, and every such diagram lifts back to a polygonal knot (our own). Wild knots have no finite diagram, so they are excluded.

**Wikipedia:** [Knot (mathematics)](https://en.wikipedia.org/wiki/Knot_%28mathematics%29), [Wild knot](https://en.wikipedia.org/wiki/Wild_knot), [Wild arc](https://en.wikipedia.org/wiki/Wild_arc). It says: “A tame knot is any knot equivalent to a polygonal knot. Knots which are not tame are called wild, and can have pathological behavior.”

**Sources:**

- [Kurt Reidemeister, Elementare Begründung der Knotentheorie, Abhandlungen aus dem Mathematischen Seminar der Universität Hamburg 5 (1927) 24–32](https://doi.org/10.1007/BF02952507)
- [Ralph H. Fox and Emil Artin, Some wild cells and spheres in three-dimensional space, Annals of Mathematics 49 (1948) 979–990](https://doi.org/10.2307/1969408)

### The coordinate torus makes T(p,q) equivalent to T(q,p)

**Remember:** Swapping the two complex coordinates swaps the two winding numbers.

*True by definition.* MSC 57K10 (Knot theory). arXiv math.GT. Level 2: later undergraduate.

**Definition.** For coprime positive integers p and q, the torus knot T(p,q) is the curve (exp(ipt), exp(iqt))/√2, for 0 ≤ t &lt; 2π, on the unit sphere in ℂ². Its first coordinate winds p times and its second winds q times.

**Problem.** The torus knots T(p,q) and T(q,p) are equivalent by an ambient isotopy of the 3-sphere.

**How the definition helps.** Swapping the two coordinates carries T(p,q) onto T(q,p) (our own). The swap lies in the path-connected unitary group U(2), so a path from the identity to the swap gives an ambient isotopy of the sphere.

**Wikipedia:** [Torus knot](https://en.wikipedia.org/wiki/Torus_knot). It says: “The (p,q) torus knot is equivalent to the (q,p) torus knot.”

**Sources:** none listed. No primary source with a working link was found.

### Conway's normalization fixes the Alexander polynomial by a skein relation

**Remember:** Fix the unknot and one crossing rule, and the polynomial follows.

*Makes the theorem clean to state or prove.* MSC 57K14 (Knot polynomials), 57K10. arXiv math.GT. Level 2: later undergraduate.

**Definition.** The Conway polynomial ∇ assigns to each oriented link a polynomial in z, with value 1 on the unknot. It obeys ∇(L₊) − ∇(L₋) = z∇(L₀) when three diagrams agree outside one disk, which holds a positive crossing, a negative crossing, or its oriented smoothing.

**Problem.** The Alexander–Conway polynomial of any oriented link can be computed from a diagram using the skein relation and the unknot value. It satisfies Δ(t²) = ∇(t − t⁻¹) for the suitably normalized Alexander polynomial.

**How the definition helps.** These two rules determine ∇, because crossing changes turn any diagram into an unlink and the smoothing has fewer crossings (our own). The rule applied to a curl gives zero for unlinks of two or more components (our own). Conway showed that this invariant equals the Alexander polynomial under the substitution Δ(t²) = ∇(t − t⁻¹).

**Wikipedia:** [Alexander polynomial](https://en.wikipedia.org/wiki/Alexander_polynomial). It says: “John Conway later rediscovered this in a different form and showed that the skein relation together with a choice of value on the unknot was enough to determine the polynomial.”

**Sources:**

- [J. W. Alexander, Topological invariants of knots and links, Transactions of the American Mathematical Society 30 (1928) 275–306](https://doi.org/10.1090/S0002-9947-1928-1501429-1)

### Correcting by the writhe turns the Kauffman bracket into the Jones polynomial

**Remember:** Twisting changes the bracket and the writhe together, so they cancel.

*True by definition.* MSC 57K14 (Knot polynomials), 57K10. arXiv math.GT. Level 2: later undergraduate.

**Definition.** The normalized bracket X(L) is the Kauffman bracket ⟨L⟩, a Laurent polynomial in A from smoothing each crossing two ways, times (−A³)⁻ʷ⁽ᴸ⁾. The writhe w(L) counts positive minus negative crossings, so the factor cancels the −A±³ that the bracket gains under a type I move.

**Problem.** X(L) is an invariant of oriented links. After the substitution A = t⁻¹ᐟ⁴, it is the Jones polynomial.

**How the definition helps.** Invariance follows because the factor undoes the only move that changes the bracket. Moves II and III change neither ⟨L⟩ nor w(L), while move I multiplies ⟨L⟩ by −A±³ and changes w(L) by ±1. The work lies in the bracket’s invariance under moves II and III.

**Wikipedia:** [Jones polynomial](https://en.wikipedia.org/wiki/Jones_polynomial), [Bracket polynomial](https://en.wikipedia.org/wiki/Bracket_polynomial). It says: “The bracket polynomial is known to change by a factor of −A±³ under a type I Reidemeister move. The definition of the X polynomial given above is designed to nullify this change”

**Sources:**

- [Louis H. Kauffman, State models and the Jones polynomial, Topology 26 (1987) 395–407](https://doi.org/10.1016/0040-9383(87)90009-7)
- [Vaughan F. R. Jones, A polynomial invariant for knots via von Neumann algebras, Bulletin of the American Mathematical Society 12 (1985) 103–111](https://doi.org/10.1090/S0273-0979-1985-15304-2)

### Seifert determinants make the Alexander polynomial blind to mirrors

**Remember:** A mirror negates and transposes the Seifert matrix; the determinant survives.

*True by definition.* MSC 57K14 (Knot polynomials), 57K10. arXiv math.GT. Level 2: later undergraduate.

**Definition.** Choose loops forming a basis of the first homology of an oriented surface spanning the knot. The Seifert matrix V lists the linking numbers between these loops and copies pushed to the positive side. The Alexander polynomial is det(V − tVᵀ), up to sign and a power of t.

**Problem.** A knot and its mirror have the same Alexander polynomial up to sign and a power of t.

**How the definition helps.** Mirroring turns V into −Vᵀ, and det(tV − Vᵀ) equals ±det(V − tVᵀ) after transposing (our own). Reflection negates linking numbers and swaps the two sides of the surface, which transposes V. The deeper work is showing that this formula is a knot invariant agreeing with the knot-group definition.

**Wikipedia:** [Alexander polynomial](https://en.wikipedia.org/wiki/Alexander_polynomial). It says: “the Alexander polynomial of a knot is the same polynomial for the mirror image knot.”

**Sources:** none listed. No primary source with a working link was found.

### Smoothing states make Jones polynomials multiply under knot sum

**Remember:** Joining two knots merges one circle from each state into one.

*True by definition.* MSC 57K14 (Knot polynomials), 57K10. arXiv math.GT. Level 2: later undergraduate.

**Definition.** The Kauffman bracket sums over all ways to smooth every crossing. It weights the two smoothings by A and A⁻¹, and each circle after the first by −A² − A⁻². The Jones polynomial is this sum times (−A³)⁻ʷ, with w the signed crossing count, at t = A⁻⁴.

**Problem.** The Jones polynomial of a connected sum of knots is the product of their Jones polynomials.

**How the definition helps.** A state of the joined diagram is a pair of states, one per side, and the two circles at the join merge into one (our own). So the counts of circles after the first add, and the signed crossing counts add, making every factor multiply. The work lies in proving that this formula gives the Jones polynomial.

**Wikipedia:** [Bracket polynomial](https://en.wikipedia.org/wiki/Bracket_polynomial). It says: “adding a circle disjoint from the rest of the diagram multiplies the bracket”

**Sources:** none listed. No primary source with a working link was found.

### The bracket makes mirroring invert the Jones variable

**Remember:** A mirror swaps the two smoothing weights A and A⁻¹.

*True by definition.* MSC 57K14 (Knot polynomials), 57K10. arXiv math.GT. Level 2: later undergraduate.

**Definition.** The Kauffman bracket sums over all ways to smooth every crossing. It weights the two smoothings by A and A⁻¹, and each circle after the first by −A² − A⁻². The Jones polynomial is this sum times (−A³)⁻ʷ, with w the signed crossing count, at t = A⁻⁴.

**Problem.** The Jones polynomial of a mirror knot is the original Jones polynomial with t replaced by t⁻¹.

**How the definition helps.** Mirroring swaps the two smoothings at every crossing, which is the substitution A ↦ A⁻¹, and the circle weight does not change. Mirroring also negates w, so the correction factor undergoes the same substitution, and t = A⁻⁴ becomes t⁻¹. The work lies in identifying this formula with the original Jones polynomial.

**Wikipedia:** [Jones polynomial](https://en.wikipedia.org/wiki/Jones_polynomial). It says: “the Jones polynomial of its mirror image is given by substitution of t⁻¹ for t”

**Sources:**

- [Louis H. Kauffman, State models and the Jones polynomial (1987)](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/kauffmanjones.pdf)

### The Jones skein rule at one ignores crossing changes

**Remember:** At one, the smoothing term vanishes, so crossings switch freely.

*True by definition.* MSC 57K14 (Knot polynomials), 57K10. arXiv math.GT. Level 2: later undergraduate.

**Definition.** The Jones skein rule says t⁻¹V(D₊) − tV(D₋) = (√t − 1/√t)V(D₀) for oriented diagrams that agree except at one crossing, which is positive, negative or smoothed. The unknot has value one.

**Problem.** For a link with m components, setting √t equal to 1 gives the Jones polynomial the value (−2) raised to the power m − 1.

**How the definition helps.** At √t = 1 the smoothing term vanishes, so switching a crossing does not change the value. Switching crossings turns the link into an unlink with m components (our own). The rule at a curl shows that each extra unlinked circle multiplies V by −(√t + 1/√t), which is −2 at √t = 1 (our own).

**Wikipedia:** [Skein relation](https://en.wikipedia.org/wiki/Skein_relation). It says: “are sufficient to calculate the polynomial recursively”

**Sources:**

- [Louis H. Kauffman, State models and the Jones polynomial (1987)](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/kauffmanjones.pdf)

### An outside normal orients a closed surface in space

**Remember:** A closed surface has an outside, and the outward arrow orients it.

*True by definition.* MSC 57K20 (2-dimensional topology (including mapping class groups of surfaces, Teichmüller theory, curve complexes, etc.)). arXiv math.GT. Level 2: later undergraduate.

**Definition.** A smooth surface in three-dimensional space is orientable if it has a continuous unit normal, a length-one arrow perpendicular to the surface at each point. A closed surface is the boundary of a solid, so the outward arrow is such a normal.

**Problem.** Every smooth compact connected surface embedded in three-dimensional space with no boundary is orientable.

**How the definition helps.** The outward normal varies continuously, so it orients the surface. The separation theorem for compact embedded surfaces without boundary supplies the inside and the outside (our own). An embedded Möbius strip has boundary, bounds no solid, and has no continuous normal.

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

**Definition.** A closed surface is a compact two-dimensional manifold without boundary. Examples are the sphere and the torus, but not the disk or the plane.

**Problem.** Every connected closed surface is a sphere with handles or a connected sum of projective planes.

**How the definition helps.** Compactness and the missing boundary rule out the plane, the disk and surfaces with infinitely many handles. The classification of compact connected surfaces then applies with no boundary circles to count (our own). Orientability picks the family, and Euler characteristic picks the number of handles or projective planes.

**Wikipedia:** [Surface (topology)](https://en.wikipedia.org/wiki/Surface_%28topology%29). It says: “In other words, Euler characteristic and orientability completely classify closed surfaces up to homeomorphism.”

**Sources:**

- [C. Thomassen, The Jordan–Schönflies theorem and the classification of surfaces, American Mathematical Monthly 99 (1992) 116–130](https://doi.org/10.2307/2324180)

### Doubling the flipped seam gives a torus cover

**Remember:** Two trips through a flipped seam restore orientation.

*True by definition.* MSC 57K20 (2-dimensional topology (including mapping class groups of surfaces, Teichmüller theory, curve complexes, etc.)). arXiv math.GT. Level 2: later undergraduate.

**Definition.** The Klein bottle is a cylinder whose two end circles are glued by a reflection. Its orientation double cover has two points over each point, one per local orientation, and crossing the reflected seam swaps them.

**Problem.** The torus is the orientation double cover of the Klein bottle.

**How the definition helps.** Two reflections cancel, so the cover is a torus. Take two cylinders, one per orientation, and glue each end of one to the opposite end of the other by the reflection (our own). Going around twice gives one long cylinder with its ends joined without a twist.

**Wikipedia:** [Klein bottle](https://en.wikipedia.org/wiki/Klein_bottle). It says: “There is a 2-1 covering map from the torus to the Klein bottle”

**Sources:** none listed. No primary source with a working link was found.

### Local orientations detect whether the double cover is connected

**Remember:** Two separate sheets mean clockwise can be chosen everywhere.

*True by definition.* MSC 57K20 (2-dimensional topology (including mapping class groups of surfaces, Teichmüller theory, curve complexes, etc.)). arXiv math.GT. Level 2: later undergraduate.

**Definition.** The orientation double cover of a surface has, over each point, its two local orientations, the two senses of rotation. Nearby choices lie on the same sheet when they give the same sense of rotation in a shared chart.

**Problem.** The orientation double cover of a connected surface is connected exactly when the surface is nonorientable.

**How the definition helps.** A global orientation is a continuous choice of one point over every point, so it and its opposite form two separate sheets. Conversely, each component of a disconnected cover maps onto the connected surface and so holds exactly one orientation over each point (our own). That component is a global orientation.

**Wikipedia:** [Orientability](https://en.wikipedia.org/wiki/Orientability). It says: “Around each point of M there are two local orientations.”

**Sources:** none listed. No primary source with a working link was found.

### Polyhedra whose surface is a manifold are classified by Euler characteristic

**Remember:** Planar near every point, so surface classification applies.

*Rules out counterexamples.* MSC 57K20 (2-dimensional topology (including mapping class groups of surfaces, Teichmüller theory, curve complexes, etc.)), 57Q05. arXiv math.GT. Level 2: later undergraduate.

**Definition.** A closed polyhedral surface is a finite polygonal complex that looks like the plane near every point. Each edge lies on exactly two faces, and the faces around each vertex form a single cycle.

**Problem.** Euler characteristic and orientability determine the homeomorphism type of a connected closed polyhedral surface.

**How the definition helps.** The local condition makes the polyhedron a closed surface, so the classification of closed surfaces applies. It rules out two cubes sharing only an edge, where four faces meet, or only a vertex, where the faces form two cycles. For example, an orientable one with χ = 2 is a sphere.

**Wikipedia:** [Polyhedron](https://en.wikipedia.org/wiki/Polyhedron). It says: “For polyhedra defined in these ways, the classification of manifolds implies that the topological type of the surface is completely determined by the combination of its Euler characteristic and orientability.”

**Sources:** none listed. No primary source with a working link was found.

### Sphere quotients give lens spaces cyclic fundamental groups

**Remember:** The group acting freely on the sphere becomes the fundamental group.

*True by definition.* MSC 57K30 (General topology of 3-manifolds), 57M10. arXiv math.GT. Level 2: later undergraduate.

**Definition.** For coprime integers p ≥ 2 and q, the lens space L(p;q) is the unit sphere S³ in ℂ² modulo the group generated by (z,w) ↦ (exp(2πi/p)z, exp(2πiq/p)w). This group of order p fixes no point except by its identity, and S³ is simply connected (our own).

**Problem.** For every q coprime to p, the fundamental group of L(p;q) is ℤ/pℤ.

**How the definition helps.** The quotient map is then the universal cover, and its deck group ℤ/pℤ is the fundamental group (our own). The kth power fixes a point with z ≠ 0 only if p divides k. It fixes one with w ≠ 0 only if p divides kq, hence k (our own).

**Wikipedia:** [Lens space](https://en.wikipedia.org/wiki/Lens_space). It says: “The fundamental group of all the lens spaces L(p;q₁,…, qₙ) is ℤ/pℤ independent of the qᵢ.”

**Sources:** none listed. No primary source with a working link was found.

### Sphere quotients identify lens spaces when q changes sign or inverts

**Remember:** Conjugate one coordinate to negate q, or swap coordinates to invert it.

*True by definition.* MSC 57K30 (General topology of 3-manifolds), 57M10. arXiv math.GT. Level 2: later undergraduate.

**Definition.** For coprime integers p ≥ 2 and q, L(p;q) is the unit sphere in ℂ² with points identified under the group generated by (z,w) ↦ (exp(2πi/p)z, exp(2πiq/p)w). A linear coordinate change carrying this group onto the group for q′ gives a homeomorphism L(p;q) → L(p;q′) (our own).

**Problem.** If q′ ≡ ±q or q′q ≡ ±1 modulo p, then L(p;q) and L(p;q′) are homeomorphic. The homeomorphism may reverse orientation.

**How the definition helps.** Conjugating w carries the group for q onto the group for −q. If rq ≡ 1 modulo p, the rth power (exp(2πir/p)z, exp(2πi/p)w) generates the same group, and swapping coordinates makes it the generator for r. Combining these two moves gives all four cases.

**Wikipedia:** [Lens space](https://en.wikipedia.org/wiki/Lens_space). It says: “they are "obviously" homeomorphic, as one can easily produce a homeomorphism. It is harder to show that these are the only homeomorphic lens spaces.”

**Sources:** none listed. No primary source with a working link was found.

### A polygon gluing gives the surface group relations

**Remember:** Paired edges give generators, and the rim gives the relation.

*True by definition.* MSC 57M05 (Fundamental group, presentations, free differential calculus), 57K20. arXiv math.GT. Level 2: later undergraduate.

**Definition.** Present a closed surface as a polygon whose edges are glued in pairs, with all vertices glued to one point. The edges then form one circle per pair, all meeting at that point, and the polygon is a disk glued along its boundary word.

**Problem.** The fundamental group of this surface has one generator per edge pair. Its single relation sets the boundary word equal to the identity.

**How the definition helps.** By the van Kampen theorem, gluing a disk to circles meeting at a point adds exactly one relation, the word along the disk’s boundary (our own). The circles give one free generator each. The word uses the inverse of an edge traversed against its arrow.

**nLab:** [surface](https://ncatlab.org/nlab/show/surface). It says: “the attaching map is a representative in this free group of the composition of group commutators”

**Sources:** none listed. No primary source with a working link was found.

### Knot complement groups are invariant without checking diagram moves

**Remember:** A homeomorphism of complements gives an isomorphism of knot groups.

*True by definition.* MSC 57M05 (Fundamental group, presentations, free differential calculus), 57K10. arXiv math.GT. Level 2: later undergraduate.

**Definition.** The knot group is the fundamental group of the knot complement, the space left when the knot is removed from the 3-sphere. It is defined from that space alone, with no diagram.

**Problem.** Equivalent knots have isomorphic knot groups.

**How the definition helps.** An equivalence of knots restricts to a homeomorphism of their complements, which induces an isomorphism of fundamental groups. With the diagram-based Wirtinger presentation, one would instead check each Reidemeister move (our own).

**Wikipedia:** [Knot group](https://en.wikipedia.org/wiki/Knot_group). It says: “Such a homeomorphism restricts onto a homeomorphism of the complements of the knots, and this restricted homeomorphism induces an isomorphism of fundamental groups.”

**Sources:** none listed. No primary source with a working link was found.

### The common torus gives the torus knot group relation

**Remember:** The same curve winds p times on one side and q on the other.

*True by definition.* MSC 57M05 (Fundamental group, presentations, free differential calculus), 57K10. arXiv math.GT. Level 2: later undergraduate.

**Definition.** For coprime positive integers p and q, a (p,q) torus knot is a simple closed curve on the standard torus, which splits S³ into two solid tori. It winds p times around the core of one solid torus and q times around the other.

**Problem.** The knot group of the (p,q) torus knot has generators x and y and the single relation xᵖ = yᑫ.

**How the definition helps.** Each solid torus gives one generator, its core, and the two winding counts give the one relation. Removing a thin tube around the knot leaves the solid tori joined along an annulus (our own). Its central loop is xᵖ on one side and yᑫ on the other, and the van Kampen theorem combines the pieces.

**Wikipedia:** [Torus knot](https://en.wikipedia.org/wiki/Torus_knot). It says: “the knot group of a torus knot has the presentation”

**Sources:** none listed. No primary source with a working link was found.

### Wirtinger generators give every knot group the same abelianization

**Remember:** Commuting makes conjugates equal, so every arc gets the same name.

*True by definition.* MSC 57M05 (Fundamental group, presentations, free differential calculus), 57K10. arXiv math.GT. Level 2: later undergraduate.

**Definition.** The Wirtinger presentation of a knot group has one generator for each arc of a diagram, a loop circling that arc once. At each crossing, one underpassing generator is the other conjugated by the overpassing generator or its inverse.

**Problem.** The abelianization of a knot group, formed by making all its elements commute, is the infinite cyclic group.

**How the definition helps.** Making generators commute turns every crossing relation into equality of the two underpassing generators. Following the knot, all generators become equal, and no relation remains to give that element finite order (our own). The Wirtinger theorem says this diagram group is the group of loops around the knot.

**Wikipedia:** [Wirtinger presentation](https://en.wikipedia.org/wiki/Wirtinger_presentation). It says: “The abelianization of the group is the integers.”

**Sources:** none listed. No primary source with a working link was found.

### Closed lifts identify the subgroup of a covering

**Remember:** The loops that return upstairs are the ones from upstairs.

*True by definition.* MSC 57M10 (Covering spaces and low-dimensional topology), 55Q05. arXiv math.AT. Level 2: later undergraduate.

**Definition.** Monodromy lets a loop class act on the fiber of a covering, the points over the base point. It moves a starting point to the endpoint of the loop’s lift from there.

**Problem.** For a covering, the loop classes that fix a chosen point form its monodromy stabilizer. This subgroup consists exactly of the classes of loops that project from loops upstairs based at that point.

**How the definition helps.** A class fixes the chosen point exactly when its lift from there is closed (our own). Conversely, a based loop upstairs is the unique lift of its projection. Homotopy lifting makes the endpoint independent of the representative.

**nLab:** [monodromy](https://ncatlab.org/nlab/show/monodromy). It says: “it is independent of the choice of γ in the given homotopy class of paths due to the homotopy-lifting property”

**Sources:** none listed. No primary source with a working link was found.

### Defining universal covers by a universal property makes them unique

**Remember:** Two objects that map uniquely to everything are uniquely isomorphic.

*True by definition.* MSC 57M10 (Covering spaces and low-dimensional topology). arXiv math.AT. Level 2: later undergraduate.

**Definition.** Fix a connected pointed base B. A connected pointed cover is universal if it has exactly one map over B to every connected pointed cover. A map over B commutes with the projections and keeps base points.

**Problem.** A pointed universal cover is unique up to a unique isomorphism over the base.

**How the definition helps.** Uniqueness of maps forces both composites to be identities. Each composite is a map over B from a universal cover to itself, and the identity is the only one (our own).

**nLab:** [universal covering space](https://ncatlab.org/nlab/show/universal+covering+space). It says: “and that these are unique once we specify the image of a single point, which we may freely do (in the given fiber).”

**Sources:**

- [Allen Hatcher, Algebraic Topology, §1.3](https://pi.math.cornell.edu/~hatcher/AT/ATch1.pdf)

### Describing covers as coset actions makes the deck group N(H)/H

**Remember:** A deck map is a symmetry of the coset action.

*True by definition.* MSC 57M10 (Covering spaces and low-dimensional topology). arXiv math.AT. Level 2: later undergraduate.

**Definition.** For a connected cover of a path-connected, locally path-connected base B, lifting loops makes G = π₁(B,b) act on the fiber. Choosing a point upstairs turns the fiber into the cosets Hg of its stabilizer H, with G acting by right multiplication. Deck transformations become the permutations of these cosets that commute with this action.

**Problem.** For such a cover, its group of deck transformations is isomorphic to N(H)/H, where N(H) consists of elements n satisfying nHn⁻¹ = H.

**How the definition helps.** Such a permutation is fixed by where it sends H, say to Hn, and then it sends Hg to Hng (our own). This gives a well-defined permutation exactly when Hn has stabilizer H, that is nHn⁻¹ = H (our own). Composition multiplies representatives, and n in H gives the identity, so the group is N(H)/H.

**nLab:** [category of covering spaces](https://ncatlab.org/nlab/show/category+of+covering+spaces). It says: “For X a topological space then forming monodromy is a functor from the category of covering spaces over X to that of permutation groupoid representations of the fundamental groupoid of X”

**Sources:**

- [Allen Hatcher, Algebraic Topology, §1.3, Proposition 1.39](https://pi.math.cornell.edu/~hatcher/AT/ATch1.pdf)

### Disjoint translates turn orbit maps into coverings

**Remember:** Disjoint translates give distinct sheets.

*Rules out counterexamples.* MSC 57M10 (Covering spaces and low-dimensional topology), 55Q05. arXiv math.AT. Level 2: later undergraduate.

**Definition.** A group acts on a space by homeomorphisms, and each point has an open neighborhood U that meets none of its translates gU for g ≠ 1. The orbit space identifies points in the same orbit.

**Problem.** The orbit map of such an action is a covering map. If the original space is path-connected and simply connected, the orbit space has fundamental group isomorphic to the acting group.

**How the definition helps.** The translates of such a U are disjoint sheets, each mapped homeomorphically onto the image of U, so the orbit map is a covering (our own). In a simply connected space, a loop’s lift ends at a unique translate of its start, which matches loop classes with group elements (our own). A free action is not enough: rational translations of the line have dense orbits (our own).

**nLab:** [fundamental theorem of covering spaces](https://ncatlab.org/nlab/show/fundamental+theorem+of+covering+spaces). It says: “the automorphism group of the universal covering space of X coincides with the fundamental group π₁(X,x) itself”

**Sources:** none listed. No primary source with a working link was found.

### Evenly covered neighborhoods guarantee lifts of whole paths

**Remember:** A cover gives all sheets at once, not one at a time.

*Rules out counterexamples.* MSC 57M10 (Covering spaces and low-dimensional topology). arXiv math.AT. Level 2: later undergraduate.

**Definition.** A covering map is a continuous surjection in which every point of the base has an evenly covered open neighborhood. Its inverse image is a disjoint union of open sheets, each mapped homeomorphically onto the neighborhood.

**Problem.** Every path in the base of a covering map lifts uniquely to a path upstairs once its starting point upstairs is chosen.

**How the definition helps.** Each sheet inverts the map on a whole neighborhood, so a path segment inside that neighborhood lifts in one step (our own). Compactness of the time interval splits the path into finitely many such segments (our own). The local homeomorphism t ↦ exp(2πit) from (0, 2) onto the circle fails, since one positive turn from 1 would end at the missing point 2 (our own).

**nLab:** [covering space](https://ncatlab.org/nlab/show/covering+space). It says: “by the triviality of the covering space over Uₓⱼ and the first argument above, there is a unique lift”

**Sources:** none listed. No primary source with a working link was found.

### Pairs with matching images let coverings change base spaces

**Remember:** Keep exactly the sheets lying over the image of each point.

*True by definition.* MSC 57M10 (Covering spaces and low-dimensional topology). arXiv math.AT. Level 2: later undergraduate.

**Definition.** Take a covering p: E → X and a continuous map f: Y → X. The pullback is the set of pairs (y, e) with f(y) = p(e), with the topology from Y × E. It projects to y, and its fiber over y is a copy of the fiber of p over f(y).

**Problem.** Pulling back a covering map along any continuous map gives a covering map over the new base.

**How the definition helps.** Over the inverse image of an evenly covered neighborhood, each sheet of p gives one sheet of the pullback (our own). If s inverts p on a sheet, the new sheet is the set of pairs (y, s(f(y))) (our own). The map y ↦ (y, s(f(y))) is a continuous inverse to projection there (our own).

**nLab:** [pullback bundle](https://ncatlab.org/nlab/show/pullback+bundle). It says: “the pullback bundle f∗ E → Y is (if it exists) simply the pullback of p along f, regarded as a bundle over Y.”

**Sources:** none listed. No primary source with a working link was found.

### Path classes build a simply connected covering space

**Remember:** Paths with memory make every closed lift project to a trivial loop.

*True by definition.* MSC 57M10 (Covering spaces and low-dimensional topology), 55Q05. arXiv math.AT. Level 2: later undergraduate.

**Definition.** Take the paths from a fixed point, identify those that deform into each other with both endpoints fixed, and project each class to its endpoint. A basic open set around a class consists of its continuations by paths inside a path-connected open set whose loops contract in the space.

**Problem.** A path-connected, locally path-connected space has a simply connected covering space if every point has a neighborhood whose loops contract in the space.

**How the definition helps.** A path class remembers how it reached its endpoint, so a closed lift must project to a loop that contracts (our own). The neighborhood condition makes the projection a covering, because continuations to the same nearby endpoint give the same class (our own). Lifting initial segments shows the cover is path-connected, and lifting a contraction shows each loop upstairs contracts (our own).

**nLab:** [universal covering space](https://ncatlab.org/nlab/show/universal+covering+space). It says: “whose points are homotopy classes of paths in X starting at x₀, with the projection X⁽¹⁾ → X projecting to the endpoint of a path.”

**Sources:** none listed. No primary source with a working link was found.

### Allowing the empty manifold makes it a manifold of every dimension

**Remember:** With no points to check, the empty space passes every local test.

*True by definition. Confidence: low.* MSC 57N99 (Topological manifolds), 54A05. arXiv math.GT, math.GN. Level 2: later undergraduate.

**Definition.** For n ≥ 0, a topological n-manifold is a second-countable Hausdorff space in which every point has a neighborhood homeomorphic to ℝⁿ. The empty space has no points to test, so it meets every condition for every n.

**Problem.** The empty space is an n-manifold for every n. So the invariance of dimension, which says that a manifold has only one dimension, holds only for nonempty manifolds.

**How the definition helps.** The empty family is a countable base, and the Hausdorff and chart conditions hold vacuously. Since this works for every n, uniqueness of dimension needs a nonempty manifold (our own).

**Paper or page:** [Empty Topological Space is n-Manifold](https://proofwiki.org/wiki/Empty_Topological_Space_is_n-Manifold), [Empty Topological Space is Hausdorff](https://proofwiki.org/wiki/Empty_Topological_Space_is_Hausdorff). It says: “Let T = (∅, {∅}) be the empty topological space. Then T is a topological n-manifold for every n ∈ ℕ.”

**Sources:**

- [ProofWiki, Empty Topological Space is n-Manifold](https://proofwiki.org/wiki/Empty_Topological_Space_is_n-Manifold)
- [ProofWiki, Empty Topological Space is Hausdorff](https://proofwiki.org/wiki/Empty_Topological_Space_is_Hausdorff)

### Cell counts make Euler characteristic additive for subcomplexes and quotients

**Remember:** Count shared cells once, and count the collapsed subcomplex as one point.

*True by definition.* MSC 57Q05 (General topology of complexes), 55N10. arXiv math.AT. Level 2: later undergraduate.

**Definition.** The Euler characteristic χ of a finite CW complex is the alternating sum of its numbers of cells in each dimension. A subcomplex is a union of cells that contains the boundary of each of its cells.

**Problem.** For subcomplexes A and B of a finite CW complex, χ(A ∪ B) = χ(A) + χ(B) − χ(A ∩ B). For a nonempty subcomplex A of X, χ(X) = χ(A) + χ(X/A) − 1.

**How the definition helps.** Both formulas are cell counts. A union counts shared cells once, and X/A keeps the cells outside A and replaces A by one 0-cell (our own). For arbitrary pieces the formula fails: a point and its complement in the line have χ equal to 1 and 2, but the line has χ = 1.

**Wikipedia:** [Euler characteristic](https://en.wikipedia.org/wiki/Euler_characteristic). It says: “If X is a finite CW-complex and A is a subcomplex, then χ(X) = χ(A) + χ(X/A) − 1.”

**Sources:** none listed. No primary source with a working link was found.

### Cell counts make Euler characteristic multiply on products

**Remember:** Cell dimensions add under products, so their alternating signs multiply.

*True by definition.* MSC 57Q05 (General topology of complexes), 55U25. arXiv math.AT. Level 2: later undergraduate.

**Definition.** The Euler characteristic χ of a finite CW complex counts its cells with sign +1 in even dimensions and −1 in odd dimensions. In a product of two complexes, an i-cell times a j-cell is an (i + j)-cell.

**Problem.** For finite CW complexes M and N, χ(M × N) = χ(M) · χ(N).

**How the definition helps.** The sign of a product cell is (−1)ⁱ⁺ʲ, the product of the signs of its two factors (our own). Summing over all pairs of cells gives χ(M)χ(N).

**Wikipedia:** [Euler characteristic](https://en.wikipedia.org/wiki/Euler_characteristic). It says: “Also, the Euler characteristic of any product space M × N is χ(M × N) = χ(M) · χ(N).”

**Sources:** none listed. No primary source with a working link was found.

### Cell counts make Euler characteristic scale by the covering degree

**Remember:** Every cell downstairs gives one cell upstairs for each sheet.

*True by definition.* MSC 57Q05 (General topology of complexes), 57M10. arXiv math.AT, math.GT. Level 2: later undergraduate.

**Definition.** The Euler characteristic χ of a finite CW complex is the alternating sum of its numbers of cells in each dimension. It also equals the alternating sum of the Betti numbers. In a k-sheeted cover, each cell lifts to exactly k cells of the same dimension (our own).

**Problem.** A k-sheeted cover of a finite CW complex has k times its Euler characteristic.

**How the definition helps.** The lifted cells make the cover a CW complex with k times as many cells in each dimension, so χ multiplies by k. Each characteristic map lifts from its disk in exactly k ways because the disk is simply connected (our own).

**Wikipedia:** [Euler characteristic](https://en.wikipedia.org/wiki/Euler_characteristic). It says: “Similarly, for a k-sheeted covering space M̃ → M, one has χ(M̃) = k · χ(M).”

**Sources:** none listed. No primary source with a working link was found.

### The derivative frames regular fibers through a homotopy

**Remember:** One target basis frames both ends and the fiber between.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 57R15 (Specialized structures on manifolds (spin manifolds, framed manifolds, etc.)), 57R35. arXiv math.DG. Level 2: later undergraduate.

**Definition.** A normal framing of a submanifold is a smooth choice of basis for its normal directions, the tangent directions modulo those along it. On a regular fiber, the derivative maps the normal directions isomorphically onto the tangent space at the target value, so one basis there frames the whole fiber.

**Problem.** Take smoothly homotopic maps from a compact manifold without boundary to a sphere, and fix a basis at a common regular value. Then a submanifold of the product with an interval joins the two fibers, with a normal framing extending both induced framings.

**How the definition helps.** The derivative pulls the one target basis back to a framing of the whole joining fiber, ends included (our own). Make the homotopy constant near the ends, then perturb it away from the ends so that the chosen value is regular (our own). The preimage theorem for manifolds with boundary gives the joining submanifold (our own).

**nLab:** [Pontryagin's theorem](https://ncatlab.org/nlab/show/Pontryagin%27s+theorem). It says: “regular pre-image of 0”

**Sources:**

- [John Milnor, Topology from the Differentiable Viewpoint](https://people.dm.unipi.it/benedett/MILNOR-TDVPOINT.pdf)

### Boundary tangency keeps compact manifold flows complete

**Remember:** Tangent arrows never point out, so no flow line escapes.

*Rules out counterexamples. Confidence: medium.* MSC 57R25 (Vector fields, frame fields in differential topology), 58A05. arXiv math.DG. Level 2: later undergraduate.

**Definition.** A vector field on a manifold with boundary is tangent to the boundary if at each boundary point its arrow lies in the boundary’s tangent space. Then flow lines starting on the boundary stay in it, and flow lines starting inside never reach it (our own).

**Problem.** On a compact smooth manifold with boundary, a smooth vector field tangent to the boundary has a flow for all real times.

**How the definition helps.** Since no flow line can leave, compactness extends every solution to all real times (our own). Tangency gives solutions inside the boundary, and uniqueness keeps other trajectories off it (our own). Without tangency, the constant field 1 on the closed unit interval flows out through its right endpoint (our own).

**nLab:** [flow of a vector field](https://ncatlab.org/nlab/show/flow+of+a+vector+field). It says: “Then v has a unique maximal flow”

**Wikipedia:** [Vector field](https://en.wikipedia.org/wiki/Vector_field). It says: “On a compact manifold without boundary, every smooth vector field is complete.”

**Sources:** none listed. No primary source with a working link was found.

### Compact support prevents a flow from escaping in finite time

**Remember:** Outside the support, flow lines stay put.

*Rules out counterexamples.* MSC 57R25 (Vector fields, frame fields in differential topology), 58A05. arXiv math.DG. Level 2: later undergraduate.

**Definition.** A vector field has compact support if it vanishes outside some compact set, so every point outside that set stays fixed under the flow. The field is complete if the solution through every point exists for all real times.

**Problem.** Every smooth vector field with compact support on a manifold without boundary is complete.

**How the definition helps.** Every flow line stays in one compact set, because points outside the support are fixed and uniqueness keeps other flow lines from reaching them (our own). A solution that stays in a compact set extends past any finite time (our own). Without compact support, x′ = x² from 1 has solution 1 ÷ (1 − t), which blows up at time one (our own).

**Wikipedia:** [Vector field](https://en.wikipedia.org/wiki/Vector_field). It says: “In particular, compactly supported vector fields on a manifold are complete.”

**Sources:** none listed. No primary source with a working link was found.

### The flow definition of the bracket detects commuting flows

**Remember:** Zero bracket means the first flow leaves the second field unchanged.

*True by definition.* MSC 57R25 (Vector fields, frame fields in differential topology), 58A05. arXiv math.DG. Level 2: later undergraduate.

**Definition.** The Lie bracket \[X, Y\] is the rate of change at time zero of Y pulled back along the flow of X. So \[X, Y\] = 0 says that the flow of X does not change Y at its first instant.

**Problem.** Two smooth vector fields with flows defined for all time have commuting flows exactly when their Lie bracket is zero.

**How the definition helps.** The flow law spreads a zero rate at time zero to all times, so the flow of X preserves Y; the converse reads this backward (our own). A map preserving Y carries flow lines of Y to flow lines of Y, so by uniqueness the flows commute (our own). A standard theorem identifies this rate with the usual commutator of directional derivatives (our own).

**nLab:** [Lie derivative](https://ncatlab.org/nlab/show/Lie+derivative), [Lie bracket of vector fields](https://ncatlab.org/nlab/show/Lie+bracket+of+vector+fields). It says: “Alternatively, we can set \[u,v\] = ℒᵤ v = −ℒᵥ u”

**Sources:** none listed. No primary source with a working link was found.

### Constant ends make smooth homotopies easy to join

**Remember:** Pause at each end before joining two families.

*True by definition.* MSC 57R35 (Differentiable mappings in differential topology), 58A05. arXiv math.DG. Level 2: later undergraduate.

**Definition.** A smooth homotopy is a smooth family of maps from time zero to time one. In the constant-end convention, the family equals its first map near time zero and its last map near time one. So two such families can run one after the other and stay smooth.

**Problem.** Smooth homotopy is an equivalence relation on smooth maps between two manifolds, including when the maps must stay fixed on a specified subset.

**How the definition helps.** At the join, both families equal the middle map on a whole time interval, so the joined family is smooth (our own). Constant families give reflexivity, and reversing time gives symmetry (our own). Any smooth homotopy gains constant ends after a smooth change of time that stays at zero and one near the ends (our own).

**Paper or page:** [Smooth Homotopy is an Equivalence Relation](https://proofwiki.org/wiki/Smooth_Homotopy_is_an_Equivalence_Relation). It says: “Then ∼ is an equivalence relation.”

**Sources:**

- [John Milnor, Topology from the Differentiable Viewpoint](https://people.dm.unipi.it/benedett/MILNOR-TDVPOINT.pdf)

### Joint transversality excludes families with only bad parameters

**Remember:** Source and parameter derivatives together supply every direction normal to the submanifold.

*Rules out counterexamples.* MSC 57R35 (Differentiable mappings in differential topology), 58K05. arXiv math.DG. Level 2: later undergraduate.

**Definition.** A smooth family F: M × P → N, with parameters in P, is jointly transverse to an embedded submanifold S of N under one condition. At every (x,p) with y = F(x,p) in S, the derivatives of F in x and p together with TᵧS span TᵧN.

**Problem.** For a jointly transverse smooth family on manifolds without boundary, almost every parameter gives a transverse map. The exceptional parameters form a set of measure zero in local coordinates.

**How the definition helps.** Joint transversality makes the inverse image of S a manifold, and every regular value of its projection to P is a transverse parameter (our own). Sard’s theorem says the other parameters have measure zero (our own). The family constantly equal to zero in ℝ is transverse to the point zero for no parameter (our own).

**nLab:** [transversal maps](https://ncatlab.org/nlab/show/transversal+maps). It says: “the differentials of f and g in these points span the entire tangent space at z in the sense that”

**Sources:**

- [Victor Guillemin and Alan Pollack, Differential Topology](https://web.math.ucsb.edu/~bigelow/books/guillemin_pollack.pdf)

### Properness makes regular fiber counts locally constant

**Remember:** Compact preimages keep extra inverse images from slipping away.

*Rules out counterexamples.* MSC 57R35 (Differentiable mappings in differential topology). arXiv math.DG. Level 2: later undergraduate.

**Definition.** A smooth map is proper if the inverse image of every compact set is compact. Between manifolds of equal dimension, a value is regular if the derivative is invertible at every preimage, so the map is a local diffeomorphism near each one.

**Problem.** For a proper smooth map between manifolds of equal dimension without boundary, the number of preimages is finite and constant near each regular value.

**How the definition helps.** Properness makes the regular fiber compact and discrete, hence finite, and keeps extra preimages from arriving from far away (our own). The rest of the source, outside small patches around the preimages, has closed image by properness, and nearby values avoid it (our own). Without properness, t ↦ (cos t, sin t) on (0, 4π) hits (1, 0) once and nearby circle points twice (our own).

**nLab:** [local diffeomorphism](https://ncatlab.org/nlab/show/local+diffeomorphism). It says: “f restricted to U is a diffeomorphism onto its image”

**Sources:**

- [John Milnor, Topology from the Differentiable Viewpoint](https://people.dm.unipi.it/benedett/MILNOR-TDVPOINT.pdf)

### Regular values need not be hit for Sard’s theorem

**Remember:** No preimages means no critical preimages.

*Makes the theorem clean to state or prove.* MSC 57R35 (Differentiable mappings in differential topology), 58K05. arXiv math.DG. Level 2: later undergraduate.

**Definition.** A value of a smooth map is regular if the derivative is onto at every preimage. A point that the map misses has no preimages, so it is regular.

**Problem.** Every nonempty open part of the target contains a regular value of a smooth map between manifolds without boundary. If the source has lower dimension than the target, every regular value lies outside the image.

**How the definition helps.** Since missed points count as regular, Sard’s theorem, which says critical values have measure zero, puts regular values in every nonempty open set (our own). If the source has lower dimension, no derivative is onto, so the regular values are exactly the missed points (our own). An image-only definition would give the inclusion of a line into a plane no regular values (our own).

**nLab:** [Sard's theorem](https://ncatlab.org/nlab/show/Sard%27s+theorem). It says: “Then the set of critical values in N is a meager subset (alias first category subset) and a negligible subset (alias measure zero subset) of N.”

**Paper or page:** [Generalizing Andreev's Theorem via circle patterns](https://arxiv.org/abs/2308.14386v2). It says: “has zero measure in N.”

**Sources:**

- [John Milnor, Topology from the Differentiable Viewpoint](https://people.dm.unipi.it/benedett/MILNOR-TDVPOINT.pdf)
- [Arthur Sard, The measure of the critical values of differentiable maps (1942)](https://doi.org/10.1090/S0002-9904-1942-07811-6)

### Regular values rule out crossing level sets

**Remember:** Full rank makes a level set a coordinate slice.

*Rules out counterexamples.* MSC 57R35 (Differentiable mappings in differential topology), 58A05. arXiv math.DG. Level 2: later undergraduate.

**Definition.** A target point is a regular value if the derivative is onto the target tangent space at every preimage. Then near each preimage the map is a coordinate projection (our own).

**Problem.** For a smooth map between manifolds without boundary, each nonempty regular fiber is an embedded submanifold, locally a coordinate slice. Its dimension equals the source dimension minus the target dimension.

**How the definition helps.** A fiber of a coordinate projection is a coordinate slice whose dimension is the source dimension minus the target dimension. The inverse function theorem supplies those coordinates (our own). Without regularity, the zero fiber of (x, y) ↦ xy is two crossing axes (our own).

**nLab:** [regular value](https://ncatlab.org/nlab/show/regular+value). It says: “at a regular value q ∈ Y is a smooth manifold of X.”

**Paper or page:** [Diffgeo: Manifolds](https://venhance.github.io/napkin/Napkin.pdf). It says: “Then M is a manifold of dimension n−m.”

**Sources:**

- [Victor Guillemin and Alan Pollack, Differential Topology](https://web.math.ucsb.edu/~bigelow/books/guillemin_pollack.pdf)

### Regularity on the boundary rules out touching fibers

**Remember:** Check the rank again using only boundary directions.

*Rules out counterexamples. Confidence: medium.* MSC 57R35 (Differentiable mappings in differential topology), 57R40. arXiv math.DG. Level 2: later undergraduate.

**Definition.** A value is regular for a map on a manifold with boundary if the derivative is onto at every preimage. It is also regular for the boundary restriction if the derivative stays onto when only directions along the boundary are used.

**Problem.** Let a smooth map have a source with boundary and a target without boundary. A nonempty fiber regular for both the map and its boundary restriction is an embedded manifold with boundary exactly on the source boundary.

**How the definition helps.** Being onto along the boundary lets the map be a coordinate projection that leaves the half-space coordinate free (our own). So the fiber meets the boundary as a half-space slice, with coordinates from the inverse function theorem (our own). Without the boundary condition, the zero fiber of y − x² on y ≥ 0 touches the edge but has no boundary there (our own).

**Paper or page:** [Bounded domains in the 3-dimensional space](https://arxiv.org/abs/2511.01278v1). It says: “the inverse image F⁻¹(z) is the domain with boundary (F\|∂M)⁻¹(z).”

**Sources:**

- [John Milnor, Topology from the Differentiable Viewpoint](https://people.dm.unipi.it/benedett/MILNOR-TDVPOINT.pdf)

### Transversality gives intersections the expected dimension

**Remember:** Spanning tangent spaces make codimensions add.

*Rules out counterexamples.* MSC 57R35 (Differentiable mappings in differential topology), 57R40. arXiv math.DG. Level 2: later undergraduate.

**Definition.** Two embedded submanifolds meet transversely if, at every common point, their tangent spaces together span the ambient tangent space. Then their local defining equations, one per codimension, stay independent when combined (our own).

**Problem.** In a smooth manifold without boundary, a nonempty transverse intersection of two embedded submanifolds without boundary is an embedded submanifold. Its codimension is the sum of their codimensions.

**How the definition helps.** The combined equations are independent, so the regular value theorem gives a submanifold losing one dimension per equation (our own). So codimensions add. Without transversality, the surfaces z = 0 and z = xy meet in two crossing lines (our own).

**Wikipedia:** [Transversality](https://en.wikipedia.org/wiki/Transversality). It says: “their separate tangent spaces at that point together generate the tangent space of the ambient manifold at that point”

**Sources:**

- [Victor Guillemin and Alan Pollack, Differential Topology](https://web.math.ucsb.edu/~bigelow/books/guillemin_pollack.pdf)

### Closed embedded submanifolds admit smooth extensions

**Remember:** Slices extend locally; closedness leaves an open patch elsewhere for zero.

*Rules out counterexamples.* MSC 57R40 (Embeddings in differential topology), 58A05. arXiv math.DG. Level 2: later undergraduate.

**Definition.** An embedded submanifold looks, in suitable local coordinates, like a slice where the extra coordinates vanish. It is closed if it is closed as a subset, so every point off it has an open neighborhood that misses it (our own).

**Problem.** Every smooth real function on an embedded submanifold without boundary extends smoothly to the ambient manifold if the submanifold is closed as a subset.

**How the definition helps.** Extend the function in each slice chart by ignoring the extra coordinates, and use zero on the open complement (our own). Closedness makes these sets cover the manifold, and a smooth partition of unity glues the extensions into one function (our own). Without closedness, 1 ÷ x on (0, 1) has no continuous extension to ℝ (our own).

**nLab:** [partition of unity](https://ncatlab.org/nlab/show/partition+of+unity). It says: “Paracompact smooth manifolds admit locally finite smooth partitions of unity subordinate to any open cover”

**Sources:** none listed. No primary source with a working link was found.

### Second countability excludes the long line from the embedding theorem

**Remember:** Every Euclidean subspace has a countable base.

*Rules out counterexamples.* MSC 57R40 (Embeddings in differential topology), 58A05. arXiv math.DG. Level 2: later undergraduate.

**Definition.** A space is second countable if a countable family of open sets gives every open set as a union. Every subset of Euclidean space has this property, from balls with rational centers and radii, so smooth manifolds must assume it to embed (our own).

**Problem.** Every finite-dimensional smooth manifold without boundary admits a smooth embedding into some Euclidean space. An embedding identifies the manifold smoothly with a submanifold carrying the topology inherited from that space.

**How the definition helps.** A space that embeds in Euclidean space inherits a countable base, so the long line, with smooth charts but no countable base, must be excluded (our own). With second countability and the Hausdorff property, Whitney’s embedding theorem builds the embedding (our own).

**nLab:** [Whitney embedding theorem](https://ncatlab.org/nlab/show/Whitney+embedding+theorem). It says: “It is easier to see that every smooth manifold embeds into the Euclidean space of some dimension”

**Sources:** none listed. No primary source with a working link was found.

### Slice charts make smooth graphs embedded submanifolds

**Remember:** Subtract the graph height to get a flat slice.

*True by definition.* MSC 57R40 (Embeddings in differential topology), 58A05. arXiv math.DG. Level 2: later undergraduate.

**Definition.** An embedded submanifold is a subset that, in suitable ambient coordinates near each of its points, becomes a slice where the extra coordinates are zero.

**Problem.** The graph of a smooth map between manifolds without boundary is an embedded submanifold of their product. Projection onto the source gives a smooth bijection with smooth inverse.

**How the definition helps.** In the coordinates (x, y − f(x)), the graph of f is the slice where the second coordinate is zero (our own). This change has smooth inverse (x, y + f(x)), so it is a valid chart (our own). Projection to the source then has smooth inverse x ↦ (x, f(x)) (our own).

**nLab:** [submanifold](https://ncatlab.org/nlab/show/submanifold). It says: “For each point σ ∈ Σ there is a coordinate chart”

**Sources:** none listed. No primary source with a working link was found.

### Tangent-map degree makes turning number invariant through immersed curves

**Remember:** Nonzero velocity keeps the unit tangent map defined throughout the deformation.

*True by definition.* MSC 57R42 (Immersions in differential topology), 55M25, 53A04. arXiv math.GT, math.DG. Level 2: later undergraduate.

**Definition.** For a smooth immersion γ: S¹ → ℝ², a closed plane curve with nonzero velocity everywhere, the turning number is the degree of the unit tangent map γ′/‖γ′‖: S¹ → S¹.

**Problem.** The turning number stays fixed in a deformation through immersed closed plane curves with continuously varying velocities.

**How the definition helps.** The nonzero velocities give a homotopy of unit tangent maps throughout the deformation. Homotopy invariance of degree gives the same turning number at both ends.

**Wikipedia:** [Regular homotopy](https://en.wikipedia.org/wiki/Regular_homotopy). It says: “two immersions are regularly homotopic if and only if they have the same turning number – equivalently, total curvature; equivalently, if and only if their Gauss maps have the same degree/winding number.”

**Sources:** none listed. No primary source with a working link was found.

### The critical point condition makes the Hessian intrinsic

**Remember:** Zero first derivatives remove the extra terms.

*Rules out counterexamples.* MSC 57R70 (Critical points and critical submanifolds in differential topology), 58A05. arXiv math.DG. Level 2: later undergraduate.

**Definition.** A critical point of a smooth real function is a point where its first derivative vanishes. There the chain rule term with first derivatives drops out, so the Hessian, the matrix of second partials, changes like a bilinear form (our own).

**Problem.** At a critical point, the Hessian matrices in different coordinates represent the same symmetric bilinear form on tangent vectors. They have the same counts of positive and negative eigenvalues.

**How the definition helps.** Under a change of coordinates with Jacobian J, the Hessian becomes JᵀHJ plus a term with the first derivatives, which is zero at a critical point (our own). Sylvester’s law of inertia then keeps the counts of positive and negative eigenvalues. Away from critical points this fails: f = x has second derivative 0 in x but 2 in y, where x = y + y².

**nLab:** [Hessian](https://ncatlab.org/nlab/show/Hessian). It says: “descends to the tangent space at x, and is pronounced as the Hessian of φ at the critical point x.”

**Sources:** none listed. No primary source with a working link was found.

### Dihedral representations make Fox coloring counts link invariants

**Remember:** Fox colorings count maps that send meridians to reflections.

*True by definition. Confidence: medium.* MSC 57K10 (Knot theory), 57M05. arXiv math.GT. Level 3: graduate.

**Definition.** For n ≥ 3, a Fox n-coloring is a homomorphism from the link group to the symmetries of a regular n-gon that sends every meridian to a reflection. In a diagram, it labels each arc by a residue modulo n (our own). At each crossing, twice the over label equals the sum of the under labels (our own).

**Problem.** The number of Fox n-colorings, including the constant colorings, does not depend on the link diagram. In particular, the existence of a nonconstant Fox 3-coloring is a link invariant.

**How the definition helps.** The count is defined from the link group and its meridians, which link equivalences preserve, so it does not depend on the diagram (our own). Label i stands for the reflection tsⁱ, and each Wirtinger relation becomes the crossing rule (our own). Exactly n colorings are constant, so a count above n shows a nonconstant coloring.

**Wikipedia:** [Fox n-coloring](https://en.wikipedia.org/wiki/Fox_n-coloring). It says: “Such reflections correspond to elements tsⁱ of the dihedral group, where t is a reflection and s is a generating (2π/n) rotation of the n-gon.”

**Sources:** none listed. No primary source with a working link was found.

### Gauss map degree makes linking number invariant under isotopy

**Remember:** The knots stay apart, so their Gauss map keeps its degree.

*True by definition.* MSC 57K10 (Knot theory), 55M25. arXiv math.GT, math.AT. Level 3: graduate.

**Definition.** Take two disjoint oriented knots in space. The Gauss map sends a pair of points, one on each knot, to the unit vector from the second point to the first. The linking number is the degree of this map from the torus to the sphere, a signed count of preimages of a regular value.

**Problem.** Linking number stays fixed during an isotopy, a motion through disjoint knots.

**How the definition helps.** Moving the knots without collision deforms the Gauss map by a homotopy, and degree is a homotopy invariant. A diagram definition would instead need a check of each Reidemeister move. The deeper facts are the homotopy invariance of degree and its agreement with the crossing count.

**Wikipedia:** [Linking number](https://en.wikipedia.org/wiki/Linking_number). It says: “Isotopy invariance of the linking number is automatically obtained as the degree is invariant under homotopic maps. Any other regular value would give the same number, so the linking number doesn't depend on any particular link diagram.”

**Sources:**

- [Ricca, R. L.; Nipoti, B. (2011). Gauss' linking number revisited. Journal of Knot Theory and Its Ramifications 20(10), 1325–1343.](https://doi.org/10.1142/S0218216511009261)

### Knot complement homology makes linking number an integer

**Remember:** A loop in the knot complement represents an integer multiple of the generator.

*True by definition.* MSC 57K10 (Knot theory), 55N10. arXiv math.GT. Level 3: graduate.

**Definition.** The complement of an oriented knot K in space has first homology ℤ, generated by a small loop circling K once in the positive direction. The linking number of a disjoint oriented loop L with K is the integer n such that L represents n times this generator.

**Problem.** The linking number is an integer. So in any diagram, the signed count of crossings between two knots is even.

**How the definition helps.** The class of L is an integer multiple of the generator, so the linking number is an integer. The crossing formula says the signed count of mixed crossings is twice this integer, hence even (our own).

**nLab:** [linking number](https://ncatlab.org/nlab/show/linking+number). It says: “We deduce that n₁ − n₂ = 0 in all cases. Hence n₁ = n₂, and the linking number is equal to ½(2n₁) = n₁ = n₂.”

**Wikipedia:** [Linking number](https://en.wikipedia.org/wiki/Linking_number). It says: “More generally, if either of the curves is simple, then the first homology group of its complement is isomorphic to Z. In this case, the linking number is determined by the homology class of the other curve.”

**Sources:** none listed. No primary source with a working link was found.

### Knot genus from orientable surfaces shows the unknot is not a sum

**Remember:** Fewest handles on a spanning surface; only the unknot needs none.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 57K10 (Knot theory), 57K14. arXiv math.GT. Level 3: graduate.

**Definition.** The genus of a tame knot in S³ is the least genus of a compact connected orientable surface embedded in S³ with the knot as its boundary. Genus zero means the knot bounds a disk, so only the unknot has genus zero.

**Problem.** Knot genus is additive: the genus of K₁ \# K₂ is the genus of K₁ plus the genus of K₂. So a sum of two nontrivial knots is never the unknot.

**How the definition helps.** Each nontrivial summand has positive genus, so additivity gives the sum positive genus, while the unknot has genus zero (our own deduction). Schubert’s genus additivity theorem supplies the equality.

**Wikipedia:** [Seifert surface](https://en.wikipedia.org/wiki/Seifert_surface), [Connected sum](https://en.wikipedia.org/wiki/Connected_sum). It says: “In three dimensions, the unknot cannot be written as the sum of two non-trivial knots. This fact follows from additivity of knot genus”

**Sources:**

- [Herbert Seifert, Über das Geschlecht von Knoten, Mathematische Annalen 110 (1935) 571–592](https://doi.org/10.1007/BF01448044)

### Orientable Seifert surfaces give every knot a Seifert matrix

**Remember:** Two sides let you push loops off the surface and count linking.

*Makes the theorem clean to state or prove.* MSC 57K10 (Knot theory), 57K14. arXiv math.GT. Level 3: graduate.

**Definition.** A Seifert surface for a tame oriented link in S³ is a compact connected oriented surface embedded in S³ whose oriented boundary is the link. Being oriented, it has a positive side, so each loop on it can be pushed off to that side and linked with other loops.

**Problem.** Every tame oriented link has a Seifert surface, by Seifert’s construction. Its integral Seifert matrix V satisfies V − Vᵀ = the intersection matrix with matching sign conventions, and det(V − tVᵀ) is the one-variable Alexander polynomial up to a unit.

**How the definition helps.** The positive side lets one set Vᵢⱼ to the linking number of loop i with the positive push-off of loop j, an integer (our own explanation). Pushing to the positive side minus pushing to the negative side counts intersections, which gives V − Vᵀ. Seifert’s algorithm, joining separate pieces by tubes, gives existence, and the Seifert matrix formula gives the Alexander polynomial.

**Wikipedia:** [Seifert surface](https://en.wikipedia.org/wiki/Seifert_surface). It says: “The standard Möbius strip has the unknot for a boundary but is not a Seifert surface for the unknot because it is not orientable.”

**Sources:**

- [Herbert Seifert, Über das Geschlecht von Knoten, Mathematische Annalen 110 (1935) 571–592](https://doi.org/10.1007/BF01448044)

### Oriented knots factor uniquely into prime knots

**Remember:** Knots add as whole numbers multiply, with the unknot as 1.

*Makes the theorem clean to state or prove.* MSC 57K10 (Knot theory). arXiv math.GT. Level 3: graduate.

**Definition.** A prime knot is a nontrivial knot that is not a connected sum of two nontrivial knots. Connected sum places two oriented knots in separate balls, cuts a small arc from each, and joins the ends with matching orientations.

**Problem.** Every nontrivial tame oriented knot in S³ is a connected sum of prime knots uniquely up to oriented knot type and order.

**How the definition helps.** Excluding the unknot, the unit for connected sum, is what makes the factorization unique, as excluding 1 does for whole numbers (our own comparison). Schubert’s prime decomposition theorem gives existence and uniqueness. Orientation fixes how the ends are joined, so the factors are oriented knot types.

**Wikipedia:** [Connected sum](https://en.wikipedia.org/wiki/Connected_sum), [Prime knot](https://en.wikipedia.org/wiki/Prime_knot). It says: “Under this operation, oriented knots in 3-space form a commutative monoid with unique prime factorization, which allows us to define what is meant by a prime knot.”

**Sources:** none listed. No primary source with a working link was found.

### Reduced alternating diagrams minimize crossings

**Remember:** Over, under, over, and no crossing that a circle cuts off.

*Rules out counterexamples.* MSC 57K10 (Knot theory), 57K14. arXiv math.GT. Level 3: graduate.

**Definition.** A link diagram is alternating if, along each component, the strand goes over and under at successive crossings in turn. It is reduced if no simple closed curve meets the diagram at just one crossing and separates its four strands into two pairs.

**Problem.** Every reduced alternating diagram of a knot realizes the knot’s crossing number, the least number of crossings in any diagram.

**How the definition helps.** A crossing cut off by such a curve can be untwisted, so reducedness removes non-minimal drawings such as a one-crossing unknot. For a reduced alternating diagram the span of the Jones polynomial equals the crossing count, and for every diagram the span is at most the crossing count (our own argument). So no diagram of the knot has fewer crossings.

**Wikipedia:** [Tait conjectures](https://en.wikipedia.org/wiki/Tait_conjectures). It says: “a knot diagram is called "reduced" if all the "isthmi", or "nugatory crossings" have been removed.”

**Sources:**

- [Louis H. Kauffman, State models and the Jones polynomial (1987).](https://doi.org/10.1016/0040-9383(87)90009-7)

### Signed crossing counts make linking number symmetric

**Remember:** Swapping the knot names changes neither the crossings nor their signs.

*True by definition. Confidence: medium.* MSC 57K10 (Knot theory). arXiv math.GT. Level 3: graduate.

**Definition.** In a plane diagram of two disjoint oriented knots, each crossing between them gets a sign, +1 or −1, from which strand passes over and the directions of both strands. The linking number is half the sum of these signs. Neither the set of crossings nor the sign rule depends on which knot is named first.

**Problem.** The linking number is unchanged when the two knots switch roles.

**How the definition helps.** Switching the knot names changes neither the crossings nor their signs, so the sum is the same. A definition through a surface bounded by one knot would instead need a proof that either knot’s surface gives the same count (our own comparison).

**nLab:** [linking number](https://ncatlab.org/nlab/show/linking+number). It says: “The linking number of Cᵢ with Cⱼ where Cᵢ and Cⱼ are distinct components of D, is to be one half of the sum of the signs of the crossings of Cᵢ with Cⱼ”

**Sources:** none listed. No primary source with a working link was found.

### The Alexander covering module gives monic polynomials for fibered knots

**Remember:** A fibered knot turns the Alexander polynomial into a characteristic polynomial.

*True by definition.* MSC 57K10 (Knot theory), 57K14. arXiv math.GT. Level 3: graduate.

**Definition.** A knot is fibered if its exterior is a surface bundle over the circle with connected fiber F and return map g: F → F. Then the infinite cyclic cover is F × ℝ, so its first homology is H₁(F; ℤ), with t acting by the map A that g induces. The Alexander polynomial generates the zeroth Fitting ideal of this module over ℤ\[t,t⁻¹\].

**Problem.** For a fibered knot the Alexander polynomial is det(tI − A) up to a factor ±tⁿ, where A is the action of g on H₁(F; ℤ). So it is monic and has constant term ±1.

**How the definition helps.** The module is H₁(F; ℤ), free abelian of finite rank with t acting by A, so tI − A is a square presentation and its determinant generates the ideal (our own calculation). Its leading coefficient is 1, and its constant term is ±det(A) = ±1 because A is invertible over ℤ.

**Wikipedia:** [Fibered knot](https://en.wikipedia.org/wiki/Fibered_knot), [Alexander polynomial](https://en.wikipedia.org/wiki/Alexander_polynomial). It says: “The Alexander polynomial of a fibered knot is monic, i.e. the coefficients of the highest and lowest powers of t are plus or minus 1.”

**Sources:** none listed. No primary source with a working link was found.

### Knot quandle maps make diagram coloring counts invariant

**Remember:** A coloring is just a map from the knot quandle to Q.

*True by definition.* MSC 57K12 (Generalized knots (virtual knots, welded knots, quandles, etc.)), 57K10. arXiv math.GT. Level 3: graduate.

**Definition.** For a finite quandle Q, a Q-coloring of an oriented knot diagram gives each arc an element of Q, so that crossing an overarc of color b in its positive normal direction turns underarc color a into a ▷ b. These are exactly the homomorphisms to Q from the knot quandle, which has one generator per arc and one such relation per crossing.

**Problem.** For any finite quandle Q, the number of Q-colorings does not depend on the oriented knot diagram.

**How the definition helps.** A coloring is the same as a homomorphism from the knot quandle to Q, because the diagram presents that quandle. The knot quandle depends only on the oriented knot, so every diagram has the same number of colorings (our own deduction).

**Wikipedia:** [Racks and quandles](https://en.wikipedia.org/wiki/Racks_and_quandles). It says: “Less powerful but more easily computable invariants of knots may be obtained by counting the homomorphisms from the knot quandle to a fixed quandle Q.”

**Sources:**

- [David Joyce, A classifying invariant of knots, the knot quandle, Journal of Pure and Applied Algebra (1982)](https://doi.org/10.1016/0022-4049(82)90077-9)

### Alexander polynomials from covers detect perfect knot commutator subgroups

**Remember:** Alexander polynomial one means the commutator subgroup's abelianization is zero.

*True by definition.* MSC 57K14 (Knot polynomials), 57M05. arXiv math.GT. Level 3: graduate.

**Definition.** The Alexander module of a knot is the abelianization of the commutator subgroup G′ of the knot group, which is H₁ of the infinite cyclic cover, with t acting by deck translation. The Alexander polynomial generates its zeroth Fitting ideal, the ideal generated by the determinant of a square matrix over ℤ\[t, t⁻¹\] that presents this module.

**Problem.** The Alexander polynomial is a unit, so it can be normalized to 1, exactly when G′ is perfect, that is, equal to its own commutator subgroup.

**How the definition helps.** A square presentation matrix has unit determinant exactly when it is invertible, which happens exactly when the module it presents is zero. That module is the abelianization of G′, which is zero exactly when G′ is perfect (our own argument).

**Wikipedia:** [Alexander polynomial](https://en.wikipedia.org/wiki/Alexander_polynomial). It says: “Since the Alexander ideal is principal, Δₖ(t) = 1 if and only if the commutator subgroup of the knot group is perfect (i.e. equal to its own commutator subgroup).”

**Sources:** none listed. No primary source with a working link was found.

### Seifert matrices multiply Alexander polynomials and add signatures under connected sum

**Remember:** Join the surfaces and the Seifert matrices sit in separate blocks.

*True by definition.* MSC 57K14 (Knot polynomials), 57K10. arXiv math.GT. Level 3: graduate.

**Definition.** Take a Seifert surface of the knot, a compact connected oriented surface in S³ with the knot as oriented boundary. Its Seifert matrix V has Vᵢⱼ equal to the linking number of basis loop i with the positive push-off of basis loop j. The Alexander polynomial is det(V − tVᵀ) up to ±tⁿ, and the signature is the signature of V + Vᵀ.

**Problem.** For the connected sum K \# J, the Alexander polynomial is the product, up to a unit ±tⁿ. The knot signature is the sum.

**How the definition helps.** Joining Seifert surfaces of K and J by a band gives one for K \# J whose Seifert matrix is block diagonal, with blocks for K and for J. Mixed linking numbers vanish because a sphere separates the two halves (our own construction). Determinants multiply over blocks, and signatures add.

**Paper or page:** [An Elementary Proof of the Signature of Satellite Knots](https://arxiv.org/abs/2203.03217v2). It says: “If K′ is a satellite of J by K and n is the winding number of the embedding of K in the solid torus, then a Seifert matrix A for K′ is given by the block matrix”

**Sources:**

- [Daniel Carter, An Elementary Proof of the Signature of Satellite Knots](https://arxiv.org/abs/2203.03217v2)

### The HOMFLY skein definition gives Jones and Conway specializations

**Remember:** Two rules fix the invariant, so substitute and compare the rules.

*True by definition.* MSC 57K14 (Knot polynomials). arXiv math.GT. Level 3: graduate.

**Definition.** The HOMFLY polynomial P is the oriented link invariant that equals 1 on the unknot and obeys aP(L₊) − a⁻¹P(L₋) = zP(L₀). Here L₊, L₋ and L₀ agree except at one crossing, which is positive, negative or smoothed. These two rules determine P on every link (our own).

**Problem.** Setting a = 1 in the HOMFLY polynomial gives the Alexander–Conway polynomial. Setting a = s⁻² and z = s − s⁻¹ gives the normalized Jones polynomial with t = s².

**How the definition helps.** Since the skein relation and the unknot value determine an invariant, it is enough to check that each substitution turns the HOMFLY relation into the Conway or Jones relation (our own). For example, a = 1 gives P(L₊) − P(L₋) = zP(L₀), the Conway relation (our own). The hard part is the existence of P (our own).

**Wikipedia:** [HOMFLY polynomial](https://en.wikipedia.org/wiki/HOMFLY_polynomial). It says: “it generalizes two polynomials previously discovered, the Alexander polynomial and the Jones polynomial, both of which can be obtained by appropriate substitutions from HOMFLY.”

**Sources:**

- [P. Freyd, D. Yetter, J. Hoste, W. B. R. Lickorish, K. Millett, A. Ocneanu, A new polynomial invariant of knots and links, Bulletin of the AMS (1985)](https://doi.org/10.1090/S0273-0979-1985-15361-3)

### The HOMFLY skein definition gives the mirror formula

**Remember:** Mirroring swaps the two crossing terms, just like inverting ℓ.

*True by definition. Confidence: medium.* MSC 57K14 (Knot polynomials). arXiv math.GT. Level 3: graduate.

**Definition.** The HOMFLY polynomial P is the oriented link invariant that equals 1 on the unknot and obeys ℓP(L₊) + ℓ⁻¹P(L₋) + mP(L₀) = 0. Here the three diagrams differ only at one site: a positive crossing, a negative crossing or an oriented smoothing. These two rules determine P (our own).

**Problem.** For the mirror of an oriented link L, the HOMFLY polynomial is P(L) with ℓ replaced by ℓ⁻¹ and m unchanged.

**How the definition helps.** Mirroring swaps positive and negative crossings and keeps smoothings, so the mirror’s polynomial with ℓ replaced by ℓ⁻¹ obeys the same relation and is 1 on the unknot (our own). Since the two rules determine P, the two polynomials agree, with no braids or traces needed (our own).

**Wikipedia:** [HOMFLY polynomial](https://en.wikipedia.org/wiki/HOMFLY_polynomial). It says: “Pₖ(ℓ,m) = P₍Mirror Image(K)₎(ℓ⁻¹,m), so the HOMFLY polynomial can often be used to distinguish between two knots of different chirality.”

**Sources:**

- [P. Freyd, D. Yetter, J. Hoste, W. B. R. Lickorish, K. Millett, A. Ocneanu, A new polynomial invariant of knots and links, Bulletin of the AMS (1985)](https://doi.org/10.1090/S0273-0979-1985-15361-3)

### The infinite cyclic cover makes the Alexander polynomial a knot invariant

**Remember:** Same complement and meridian give the same covering module.

*True by definition.* MSC 57K14 (Knot polynomials), 57M10. arXiv math.GT. Level 3: graduate.

**Definition.** Let X be the infinite cyclic cover of an oriented knot’s complement, and let t be the deck translation given by a positive meridian. The Alexander module is H₁(X; ℤ) over ℤ\[t,t⁻¹\], and the Alexander polynomial generates its zeroth Fitting ideal. Nothing here uses a diagram or a surface, only the complement and its meridian.

**Problem.** Equivalent oriented knots have the same Alexander polynomial up to a factor ±tⁿ.

**How the definition helps.** An equivalence of oriented knots carries complement to complement and positive meridian to positive meridian, so it lifts to X and commutes with t. The Alexander modules are then isomorphic, so their Fitting ideals agree (our own deduction). A Seifert matrix gives a square presentation, so the ideal is principal and its generators differ by units ±tⁿ.

**Wikipedia:** [Alexander polynomial](https://en.wikipedia.org/wiki/Alexander_polynomial). It says: “The transformation t acts on the homology and so we can consider H₁(X) a module over the ring of Laurent polynomials ℤ\[t, t⁻¹\]. This is called the Alexander invariant or Alexander module.”

**Sources:**

- [J. W. Alexander, Topological invariants of knots and links, Transactions of the AMS (1928)](https://doi.org/10.1090/S0002-9947-1928-1501429-1)

### The Seifert matrix bounds Alexander degree span by twice knot genus

**Remember:** The size of the Seifert matrix bounds the Alexander degree.

*True by definition.* MSC 57K14 (Knot polynomials), 57K10. arXiv math.GT. Level 3: graduate.

**Definition.** Take a Seifert surface of genus g for the knot, a compact connected oriented surface in S³ bounded by it. Its Seifert matrix V is a 2g × 2g matrix of linking numbers of basis loops with positive push-offs. The Alexander polynomial is det(V − tVᵀ) up to a factor ±tⁿ.

**Problem.** The difference between the highest and lowest exponents in a knot's Alexander polynomial is at most twice the knot's least Seifert surface genus.

**How the definition helps.** Each entry of V − tVᵀ has degree at most 1 in t, so the determinant of this 2g × 2g matrix has degree span at most 2g. Apply this to a surface of least genus.

**Wikipedia:** [Seifert surface](https://en.wikipedia.org/wiki/Seifert_surface), [Alexander polynomial](https://en.wikipedia.org/wiki/Alexander_polynomial). It says: “The Alexander polynomial is computed from the Seifert matrix by A(t) = det(V − tV\*), which is a polynomial of degree at most 2g in the indeterminate t.”

**Sources:** none listed. No primary source with a working link was found.

### The Conway skein definition makes its coefficients finite type

**Remember:** Each double point contributes a factor of z.

*True by definition.* MSC 57K16 (Finite-type and quantum invariants, topological quantum field theories (TQFT)), 57K14. arXiv math.GT. Level 3: graduate.

**Definition.** An invariant extends to knots with transverse double points: at each one, take its value on the positive resolution minus its value on the negative resolution. It has order at most n if this extension vanishes on all knots with n + 1 double points. The Conway relation ∇(L₊) − ∇(L₋) = z∇(L₀), with ∇ = 1 on the unknot, turns each double point into z times its smoothing.

**Problem.** For n ≥ 0, the coefficient of zⁿ in the Conway polynomial is finite type of order at most n.

**How the definition helps.** Each of the n + 1 double points contributes a factor z, so the extended polynomial is zⁿ⁺¹ times a polynomial in z. Hence its coefficient of zⁿ vanishes (our own argument).

**nLab:** [Vassiliev invariant](https://ncatlab.org/nlab/show/Vassiliev+invariant). It says: “The nth coefficient of the Conway polynomial is a Vassiliev invariant of order ≤ n.”

**Sources:**

- [Joan S. Birman and Xiao-Song Lin, Knot polynomials and Vassiliev's invariants, Inventiones Mathematicae (1993)](https://doi.org/10.1007/BF01231287)

### Genus and nested end spaces classify all orientable surfaces

**Remember:** Genus plus the shape of infinity tells you which surface you have.

*Makes the theorem clean to state or prove.* MSC 57K20 (2-dimensional topology (including mapping class groups of surfaces, Teichmüller theory, curve complexes, etc.)). arXiv math.GT. Level 3: graduate.

**Definition.** An end of a surface picks, for each compact set K, one component U(K) of the surface outside K, with U(K′) ⊆ U(K) when K ⊆ K′. The ends form a space E, in which the ends through one given component form a basic open set. E∞ is the set of ends whose chosen components all have positive genus.

**Problem.** Two connected orientable surfaces without boundary are homeomorphic exactly when they have the same genus and homeomorphic pairs (E, E∞) of end spaces (Kerékjártó, Richards).

**How the definition helps.** Genus cannot see how a surface goes to infinity, and the pair (E, E∞) records exactly that, so the classification is one clean sentence. For example, the infinite-genus surfaces with one end and with two ends differ only in their end spaces (our own example). The work is in building a homeomorphism from matching end data.

**Wikipedia:** [Surface (topology)](https://en.wikipedia.org/wiki/Surface_%28topology%29). It says: “If both Nₕ and Nₚ are finite, then these two numbers, and the topological type of space of ends, classify the surface M up to topological equivalence.”

**Paper or page:** [Conjugacy classes of big mapping class groups](https://arxiv.org/abs/2105.11282). It says: “Let Σ and Σ′ be two orientable surfaces of the same genus. Then Σ and Σ′ are homeomorphic if and only if E∞(Σ) ⊂ E(Σ) and E∞(Σ′) ⊂ E(Σ′) are homeomorphic as nested topological spaces.”

**Sources:**

- [J. Hernández Hernández, M. Hrušák, I. Morales, A. Randecker, M. Sedano, F. Valdez, Conjugacy classes of big mapping class groups, arXiv:2105.11282 (2021)](https://arxiv.org/abs/2105.11282)
- [Ian Richards, On the classification of noncompact surfaces, Trans. Amer. Math. Soc. (1963)](https://doi.org/10.1090/s0002-9947-1963-0143186-0)

### Homeomorphism group components give Birman’s point-pushing exact sequence

**Remember:** Sending each homeomorphism to where x goes is a bundle over S.

*True by definition.* MSC 57K20 (2-dimensional topology (including mapping class groups of surfaces, Teichmüller theory, curve complexes, etc.)), 20F36. arXiv math.GT, math.GR. Level 3: graduate.

**Definition.** Mod(S) is the group of path components of Homeo⁺(S), the orientation-preserving homeomorphisms of a closed oriented surface S with the topology of uniform convergence. Mod(S, x) is the group of path components of the subgroup fixing a point x. Evaluation at x is a fiber bundle Homeo⁺(S) → S whose fiber is that subgroup.

**Problem.** If S has genus at least two, then 1 → π₁(S, x) → Mod(S, x) → Mod(S) → 1 is exact. The left map pushes the marked point around a loop, and the right map forgets the mark.

**How the definition helps.** The long exact homotopy sequence of this bundle gives the sequence, and its connecting map pushes x around a loop (our own argument). For genus at least two the identity component of Homeo⁺(S) is contractible, so π₁(Homeo⁺(S)) = 0 and point pushing is injective. S is connected, so the forgetful map is onto.

**nLab:** [braid group](https://ncatlab.org/nlab/show/braid+group). It says: “In words: The mapping class group of a punctured surface is a group extension of the mapping class group of the plain surface by the surface braid group on the set of punctures.”

**Sources:**

- [Joan S. Birman, Mapping class groups and their relationship to braid groups, Communications on Pure and Applied Mathematics (1969)](https://doi.org/10.1002/cpa.3160220206)

### Isotopy classes give the mapping class group its symplectic action

**Remember:** Isotopic maps act alike on homology and preserve oriented intersections.

*True by definition.* MSC 57K20 (2-dimensional topology (including mapping class groups of surfaces, Teichmüller theory, curve complexes, etc.)). arXiv math.GT. Level 3: graduate.

**Definition.** The mapping class group of a closed connected oriented surface S is the group of orientation-preserving homeomorphisms of S up to isotopy, a continuous deformation through homeomorphisms. Since an isotopy is a homotopy, each class acts on H₁(S; ℤ) by a well-defined map (our own).

**Problem.** The mapping class group of a closed genus g surface acts on H₁(S; ℤ) by matrices in Sp(2g, ℤ), the invertible integer matrices that preserve the signed intersection pairing of curves.

**How the definition helps.** Isotopic maps are homotopic, so they act the same on homology, and no relations among Dehn twists need checking (our own). An orientation-preserving homeomorphism keeps signed intersection numbers, so its matrix preserves the pairing. Surjectivity onto Sp(2g, ℤ) is a separate result.

**Wikipedia:** [Mapping class group of a surface](https://en.wikipedia.org/wiki/Mapping_class_group_of_a_surface). It says: “As singular homology is functorial, the mapping class group Mod(S) acts by automorphisms on the first homology group H₁(S).”

**Sources:** none listed. No primary source with a working link was found.

### The torus lattice quotient realizes every matrix in SL₂(ℤ)

**Remember:** A determinant-one integer matrix preserves the lattice and acts on the torus.

*True by definition.* MSC 57K20 (2-dimensional topology (including mapping class groups of surfaces, Teichmüller theory, curve complexes, etc.)). arXiv math.GT. Level 3: graduate.

**Definition.** The torus is the plane modulo the integer lattice ℤ². A determinant-one integer matrix maps ℤ² onto itself, so its linear map of the plane descends to an orientation-preserving homeomorphism of the torus.

**Problem.** The group of isotopy classes of orientation-preserving torus homeomorphisms is isomorphic to SL₂(ℤ), the group of determinant-one integer matrices.

**How the definition helps.** Homology gives a map from mapping classes to SL₂(ℤ), and every matrix occurs, because its own linear map acts on H₁ = ℤ² by that matrix. For injectivity, a map trivial on homology is homotopic to the identity because the universal cover ℝ² is contractible (our own). Homotopic surface homeomorphisms are isotopic, which finishes the proof (our own).

**Wikipedia:** [Mapping class group of a surface](https://en.wikipedia.org/wiki/Mapping_class_group_of_a_surface). It says: “It is easy to construct a morphism Φ : SL₂(ℤ) → Mod(𝕋²): every A ∈ SL₂(ℤ) induces a diffeomorphism of 𝕋² via x + ℤ² ↦ Ax + ℤ².”

**Sources:** none listed. No primary source with a working link was found.

### Excluding S³ and fixing summand types makes 3-manifold prime decomposition unique

**Remember:** S³ is the 1 of connected sums, so it is not prime.

*Rules out counterexamples. Confidence: medium.* MSC 57K30 (General topology of 3-manifolds). arXiv math.GT. Level 3: graduate.

**Definition.** A closed connected oriented 3-manifold is prime if it is not S³ and every way of writing it as a connected sum has a factor equal to S³. S³ is the unit for connected sum, as 1 is for multiplying whole numbers.

**Problem.** Every closed connected oriented smooth 3-manifold other than S³ splits uniquely up to order and oriented homeomorphism into prime summands. Each summand is either S² × S¹ or irreducible and not S³, where irreducible means every embedded 2-sphere bounds a ball.

**How the definition helps.** If S³ counted as prime, one could add any number of S³ summands, so excluding it is what makes uniqueness possible (our own observation). The Kneser–Milnor theorem then gives existence and uniqueness. Among prime manifolds, only S² × S¹ is reducible.

**Wikipedia:** [Prime decomposition of 3-manifolds](https://en.wikipedia.org/wiki/Prime_decomposition_of_3-manifolds). It says: “This sum is unique as long as we specify that each summand is either irreducible or a non-orientable S² bundle over S¹.”

**Paper or page:** [Profinite almost rigidity in 3-manifolds](https://arxiv.org/abs/2410.16002). It says: “with prime decomposition M ≅ M₁ \# ⋯ \# Mₘ \# (S² × S¹)\#ʳ and N ≅ N₁ \# ⋯ \# Nₙ \# (S² × S¹)\#ˢ, where Mᵢ and Nⱼ are irreducible.”

**Sources:**

- [X. Xu, Profinite almost rigidity in 3-manifolds, Adv. Math. 480 (2025) 110505, arXiv:2410.16002](https://arxiv.org/abs/2410.16002)
- [John Milnor, A unique decomposition theorem for 3-manifolds, Amer. J. Math. 84 (1962)](https://doi.org/10.2307/2372800)

### The Poincaré conjecture needs trivial fundamental group, not only sphere homology

**Remember:** Having no holes in homology is not enough; every loop must shrink.

*Rules out counterexamples.* MSC 57K30 (General topology of 3-manifolds), 57R60. arXiv math.GT. Level 3: graduate.

**Definition.** A space is simply connected if it is path-connected and every loop in it can be shrunk to a point. This is stronger than having the homology of a sphere, which the Poincaré homology sphere has although some of its loops do not shrink.

**Problem.** Every closed simply connected 3-manifold is homeomorphic to S³.

**How the definition helps.** Simple connectivity excludes the Poincaré homology sphere, whose fundamental group has order 120 although its homology is that of S³ (our own explanation). Perelman’s proof of the Poincaré conjecture then gives the classification.

**Wikipedia:** [Poincaré conjecture](https://en.wikipedia.org/wiki/Poincar%C3%A9_conjecture). It says: “This example made it clear that homology is not powerful enough to characterize the topology of a manifold.”

**Sources:**

- [H. Poincaré, Cinquième complément à l'analysis situs, Rend. Circ. Mat. Palermo 18 (1904) 45–110](https://doi.org/10.1007/bf03014091)

### The quaternion quotient gives the Poincaré sphere the homology of S³

**Remember:** A simply connected sphere modulo a perfect group has zero first homology.

*True by definition.* MSC 57K30 (General topology of 3-manifolds), 57M10. arXiv math.GT. Level 3: graduate.

**Definition.** View the 3-sphere as the group of unit quaternions. The Poincaré sphere is its quotient by left multiplication by the binary icosahedral group, the 120 unit quaternions over the icosahedron’s rotations under the two-to-one map to rotations of 3-space. This group is perfect: it equals its own commutator subgroup.

**Problem.** The Poincaré sphere has fundamental group of order 120 and the same integral homology as the 3-sphere.

**How the definition helps.** The group acts freely on the simply connected 3-sphere, so it is the fundamental group, of order 2 · 60 = 120. Being perfect, it has trivial abelianization, so the first homology is zero. The quotient is a closed oriented 3-manifold, so Poincaré duality and universal coefficients give the rest of the homology of S³ (our own argument).

**Wikipedia:** [Homology sphere](https://en.wikipedia.org/wiki/Homology_sphere). It says: “In this case, the Poincaré homology sphere is isomorphic to S³/Ĩ where Ĩ is the binary icosahedral group, the perfect double cover of I embedded in S³.”

**Sources:** none listed. No primary source with a working link was found.

### Two-sided incompressible surfaces preserve fundamental groups under inclusion

**Remember:** A two-sided surface without compressing disks keeps its fundamental group.

*Rules out counterexamples.* MSC 57K30 (General topology of 3-manifolds). arXiv math.GT. Level 3: graduate.

**Definition.** A compressing disk for a surface S in a 3-manifold is an embedded disk that meets S only in its boundary, a curve that bounds no disk in S. A closed connected locally flat surface S other than a sphere, in the interior, is incompressible if it has no compressing disk. It is two-sided if a neighborhood of S is S × (−1,1) with S as the middle slice.

**Problem.** For a two-sided incompressible surface, inclusion induces an injection of fundamental groups: a loop on the surface that contracts in the manifold already contracts on the surface.

**How the definition helps.** The loop theorem turns a loop on S that dies in the manifold into a compressing disk, but it needs two sides so one can cut along S (our own explanation). So without compressing disks, no such loop exists. The one-sided Klein bottle in the lens space L(4,1) has no compressing disk but infinite fundamental group, while L(4,1) has fundamental group of order four.

**Wikipedia:** [Incompressible surface](https://en.wikipedia.org/wiki/Incompressible_surface). It says: “However, if S is two-sided, the loop theorem implies Kneser's lemma, that if S is incompressible, then it is π₁-injective.”

**Sources:** none listed. No primary source with a working link was found.

### Ignoring spheres in the Euler characteristic gives Thurston's seminorm on homology

**Remember:** Spheres cost nothing, so they cannot drive the complexity down.

*Rules out counterexamples.* MSC 57K31 (Invariants of 3-manifolds (including skein modules, character varieties)), 57K30. arXiv math.GT. Level 3: graduate.

**Definition.** For a class in H₂(M; ℤ) of a compact oriented 3-manifold M, take the closed embedded oriented surfaces representing it. Measure each by the sum of max(0, −χ(C)) over its components C, so spheres count zero, and take the least value.

**Problem.** This minimum extends to a seminorm x on H₂(M;ℝ), the Thurston norm. It satisfies the triangle inequality and x(ra) = \|r\|x(a) for every real r and class a.

**How the definition helps.** Without the maximum, each added disjoint null-homologous sphere would lower −χ by 2 without changing the class, so no minimum would exist (our own example). Counting spheres as zero removes this. Thurston’s seminorm theorem then gives the triangle inequality, absolute homogeneity and extension to real classes.

**Wikipedia:** [Thurston norm](https://en.wikipedia.org/wiki/Thurston_norm). It says: “χ₋(F) = max(0, −χ(F)) is the absolute value of the Euler characteristic for surfaces which are not spheres (and 0 for spheres).”

**Paper or page:** [The Thurston norm of graph manifolds](https://arxiv.org/abs/2412.03437). It says: “The null-space of the Thurston norm on H₂(M;ℝ) has dimension \|Γ\|−χ(Γ)+2∑ᵢ₌₁ⁿ gᵢ, where \|Γ\| is the number of connected components of Γ and χ(Γ) is its Euler characteristic.”

**Sources:**

- [A. V. Cigna, The Thurston norm of graph manifolds, arXiv:2412.03437 (2024)](https://arxiv.org/abs/2412.03437)

### Hyperbolic 3-space quotients make complete hyperbolic manifolds aspherical

**Remember:** A contractible universal cover leaves no higher homotopy groups.

*True by definition.* MSC 57K32 (Hyperbolic 3-manifolds), 57M50. arXiv math.GT. Level 3: graduate.

**Definition.** A complete hyperbolic 3-manifold is hyperbolic 3-space ℍ³ modulo a discrete group of isometries acting freely, so no element other than the identity fixes a point. Its universal cover is therefore ℍ³, which is contractible (our own). Equivalently, it is a complete Riemannian 3-manifold of constant curvature −1.

**Problem.** A connected complete hyperbolic 3-manifold is aspherical, meaning its homotopy groups above degree one vanish. Its fundamental group has no nonidentity element of finite order.

**How the definition helps.** The universal cover ℍ³ is contractible, so all homotopy groups above degree one vanish (our own). A finite-order isometry of ℍ³ fixes a point, so a free action has no nontrivial element of finite order (our own). Starting from the curvature definition, one first needs the space form theorem to identify the universal cover with ℍ³ (our own).

**Wikipedia:** [Hyperbolic 3-manifold](https://en.wikipedia.org/wiki/Hyperbolic_3-manifold). It says: “It is generally required that this metric be also complete: in this case the manifold can be realised as a quotient of the 3-dimensional hyperbolic space by a discrete group of isometries (a Kleinian group).”

**Sources:** none listed. No primary source with a working link was found.

### Tetrahedron volumes descend to Bloch groups

**Remember:** Two ways to cut five points into tetrahedra give equal volume.

*True by definition.* MSC 57K32 (Hyperbolic 3-manifolds), 52B45. arXiv math.GT, math.KT. Level 3: graduate.

**Definition.** The rational pre-Bloch group is the ℚ-vector space with one generator for each shape z ≠ 0, 1 of an ordered ideal tetrahedron, where z is the fourth vertex once the first three go to 0, ∞, 1. Its relations say that, for any ordered five distinct ideal points, the alternating sum of the five tetrahedra they span is zero.

**Problem.** Sending each shape to its signed volume defines a linear map to ℝ. For an oriented complete cusped hyperbolic three-manifold of finite volume, this map sends its Bloch class to its volume.

**How the definition helps.** The five tetrahedra on five ideal points fill the same region in two ways, so their signed volumes cancel and volume is a linear map on the group (our own argument). This map is the Bloch–Wigner function, with flat tetrahedra counting zero. The Bloch class is the sum of the shapes of an oriented ideal triangulation, so its image is the manifold’s volume.

**Paper or page:** [The Andersen-Kashaev volume conjecture for FAMED geometric triangulations](https://arxiv.org/abs/2410.10776v1). It says: “Let T be an ideal tetrahedron in ℍ³ with complex shape structure z. Then, its volume is given by Vol(T) = D(z) = D((z − 1)/z) = D(1/(1 − z)).”

**Sources:**

- [Walter D. Neumann, Extended Bloch group and the Cheeger–Chern–Simons class (2004)](https://doi.org/10.2140/gt.2004.8.413)
- [Fathi Ben Aribi and Ka Ho Wong, The Andersen-Kashaev volume conjecture for FAMED geometric triangulations (2024), ideal tetrahedron volume proposition](https://arxiv.org/abs/2410.10776v1)

### A global frame of contact planes makes rotation a planar winding number

**Remember:** One frame for all of space turns rotation into planar winding.

*True by definition. Confidence: medium.* MSC 57K33 (Contact structures in 3 dimensions), 57K10. arXiv math.SG, math.GT. Level 3: graduate.

**Definition.** In standard R³ the vector fields ∂x + y∂z and ∂y span every contact plane, so they form one frame over all of space. The rotation number of a Legendrian knot is the number of turns its tangent vector makes in this frame.

**Problem.** The rotation number of a Legendrian knot equals the winding number of the tangent of its Lagrangian projection to the (x, y)-plane. In the front it equals half the difference between the numbers of downward and upward cusps.

**How the definition helps.** The frame projects to the constant frame ∂x, ∂y of the plane, so both tangents turn alike (our own). In the front the tangent points along ±∂y only at cusps, so signed cusp counts give the turns (our own). The general definition uses a frame over a Seifert surface, and the work moves into noting that the global frame restricts to one (our own).

**Wikipedia:** [Rotation number (knot theory)](https://en.wikipedia.org/wiki/Rotation_number_%28knot_theory%29). It says: “The rotation number of a Legendrian knot K can be computed combinatorially from the front projection. It is given by rot(K) = ½(\#downward cusps − \#upward cusps), where cusps are counted with respect to the orientation of the knot.”

**Sources:**

- [Geiges, An Introduction to Contact Topology, Cambridge University Press (2008)](https://doi.org/10.1017/CBO9780511611438)

### Complex tangencies make the tightness of the standard 3-sphere immediate

**Remember:** The 3-sphere's contact planes are the complex lines tangent to it.

*True by definition. Confidence: medium.* MSC 57K33 (Contact structures in 3 dimensions), 32T15. arXiv math.SG, math.GT. Level 3: graduate.

**Definition.** The standard contact structure on the 3-sphere is the field of complex tangent lines to the unit sphere in ℂ². With this definition the unit 4-ball is a symplectic filling, a symplectic 4-manifold whose boundary carries the structure.

**Problem.** The standard contact structure on the 3-sphere is tight.

**How the definition helps.** The 4-ball fills the sphere, and the Gromov–Eliashberg theorem says that fillable structures are tight, the principle the quote applies (our own). Bennequin's first proof started from the formula dz + x dy − y dx and needed a long study of braids (our own). The work moves into Gromov's holomorphic disks, which would fill an overtwisted disk and escape the filling (our own).

**Paper or page:** [Transverse fibered knots and Taut Foliations](https://arxiv.org/abs/2509.04680). It says: “Contact structures, C⁰-close to a taut foliation, are symplectically semi-fillable, and therefore, tight.”

**Sources:**

- [M. Gromov, Pseudo holomorphic curves in symplectic manifolds, Invent. Math. 82 (1985) 307–347](https://doi.org/10.1007/BF01388806)

### Contact framings turn the Stein handle condition into a single number

**Remember:** Count handle framings from the contact planes, not from the Seifert surface.

*Makes the theorem clean to state or prove.* MSC 57K33 (Contact structures in 3 dimensions), 32Q28, 57R65. arXiv math.GT, math.SG. Level 3: graduate.

**Definition.** The Thurston–Bennequin framing tb of a Legendrian knot is the framing given by the contact planes along it. Framings of 2-handles attached along Legendrian knots are measured against tb.

**Problem.** Take a 4-dimensional handlebody with 0- and 1-handles, and attach 2-handles along Legendrian knots in its boundary with framing tb − 1. It carries a Stein structure, and every compact Stein surface arises this way (Eliashberg, Gompf).

**How the definition helps.** A Weinstein 2-handle can be attached exactly with framing one less than the contact framing, so against tb the condition is one number (our own). Stabilizing a Legendrian knot lowers tb by one, so any framing below tb can be reached (our own). Gompf used this to draw Stein surfaces as Legendrian link diagrams (our own).

**Wikipedia:** [Stein manifold](https://en.wikipedia.org/wiki/Stein_manifold). It says: “when n = 2 the same holds provided the 2-handles are attached with certain framings (framing less than the Thurston–Bennequin framing).”

**Sources:**

- [Y. Eliashberg, Topological characterization of Stein manifolds of dimension &gt; 2, Internat. J. Math. 1 (1990) 29–46](https://doi.org/10.1142/S0129167X90000034)
- [R. E. Gompf, Handlebody construction of Stein surfaces, Ann. of Math. 148 (1998) 619–693](https://doi.org/10.2307/121005)

### Convex surfaces let the dividing set alone fix the contact structure nearby

**Remember:** A transverse symmetry makes a surface forget everything but its dividing curves.

*Makes the theorem clean to state or prove.* MSC 57K33 (Contact structures in 3 dimensions), 53D10. arXiv math.SG, math.GT. Level 3: graduate.

**Definition.** A surface is convex when some vector field that preserves the contact structure is transverse to it. Its dividing set Γ is where this field lies in the contact planes. A singular foliation is divided by Γ when a flow along it crosses Γ, expanding area on one side and contracting it on the other.

**Problem.** Giroux flexibility: let Σ be convex with dividing set Γ. Then any foliation divided by Γ is the characteristic foliation, the line field the planes cut, of an isotopic copy of Σ.

**How the definition helps.** The transverse field makes a neighbourhood of Σ look like Σ × ℝ with a translation-invariant contact structure, encoded by data on Σ (our own). In that data the contact condition only sees how the foliation sits relative to Γ, so the foliation can be changed freely (our own). With Giroux's result that the characteristic foliation fixes the nearby structure, the dividing set alone decides it up to isotopy (our own).

**Paper or page:** [A proof of the classification theorem of overtwisted contact structures via convex surface theory](https://arxiv.org/abs/1102.5398). It says: “Assume Σ is convex with characteristic foliation Σξ, contact vector field v, and dividing set ΓΣ. Let 𝓕 be another singular foliation on Σ divided by ΓΣ. Then there exists an isotopy φt: M → M”

**Sources:**

- [E. Giroux, Convexité en topologie de contact, Comment. Math. Helv. 66 (1991) 637–677](https://doi.org/10.1007/BF02566670)

### Defining support by positive pages gives every open book a contact form

**Remember:** Positive pages let a large circle term make the form contact.

*True by definition.* MSC 57K33 (Contact structures in 3 dimensions), 53D10. arXiv math.GT, math.SG. Level 3: graduate.

**Definition.** An open book is a link B, the binding, with a fibration of its complement over the circle by surfaces with boundary B, the pages. A contact form α is supported by it when α is positive on B and dα is positive on every page.

**Problem.** Every open book on a closed oriented 3-manifold supports a contact structure (Thurston and Winkelnkemper). Since every such manifold has an open book, every one carries a contact structure.

**How the definition helps.** The definition only asks for dβ &gt; 0 on pages, and adding K dφ for large K then gives a contact form (our own). Then d(β + K dφ) = dβ, and K dφ ∧ dβ dominates (β + K dφ) ∧ dβ for large K (our own). This replaces Martinet's proof by surgery on links, and the work moves into Alexander's theorem that open books exist (our own).

**Wikipedia:** [Contact geometry](https://en.wikipedia.org/wiki/Contact_geometry). It says: “Every connected compact orientable three-dimensional manifold admits a contact structure.”

**Sources:**

- [W. P. Thurston and H. E. Winkelnkemper, On the existence of contact forms, Proc. Amer. Math. Soc. 52 (1975) 345–347](https://doi.org/10.1090/S0002-9939-1975-0375366-7)

### Dividing sets turn tightness near a surface into a check on curves

**Remember:** Dividing curves are the fingerprint of the contact planes on a surface.

*Makes the theorem clean to state or prove.* MSC 57K33 (Contact structures in 3 dimensions). arXiv math.GT, math.SG. Level 3: graduate.

**Definition.** A convex surface Σ carries a dividing set Γ, the disjoint curves where a transverse field preserving the contact structure lies in the planes. Up to isotopy, Γ determines the contact structure near Σ.

**Problem.** Giroux's criterion: a closed convex surface other than a sphere has a tight neighbourhood exactly when no dividing curve bounds a disk in it. A closed convex sphere has a tight neighbourhood exactly when its dividing set is connected.

**How the definition helps.** Because Γ determines the structure near Σ, tightness near Σ must be a property of Γ alone, and the criterion names it (our own). A dividing curve bounding a disk lets one build an overtwisted disk by Legendrian realization (our own). Building a tight neighbourhood when no such curve exists is the hard direction, due to Giroux.

**Paper or page:** [The homotopy type of the contactomorphism groups of tight contact 3-manifolds, part I](https://arxiv.org/abs/2012.14948). It says: “Let S ⊆ (M,ξ) be a convex surface in a tight contact 3–manifold. Then, if S is an sphere the dividing set is connected, if S is not an sphere the dividing set does not contain any homotopically trivial curve.”

**Sources:**

- [E. Giroux, Structures de contact en dimension trois et bifurcations des feuilletages de surfaces, Invent. Math. 141 (2000) 615–689](https://doi.org/10.1007/s002220000082)

### Excluding overtwisted disks leaves exactly one contact structure on the 3-sphere

**Remember:** Remove overtwisted disks and the 3-sphere keeps one contact structure.

*Rules out counterexamples.* MSC 57K33 (Contact structures in 3 dimensions). arXiv math.GT, math.SG. Level 3: graduate.

**Definition.** A contact structure on a 3-manifold is tight when it contains no overtwisted disk. An overtwisted disk is an embedded disk whose boundary is tangent to the contact planes. Along that boundary the planes do not twist relative to the disk.

**Problem.** Every tight contact structure on the 3-sphere with the standard orientation is isotopic to the standard one.

**How the definition helps.** Tightness excludes the overtwisted structures, which fill every homotopy class of plane fields on the 3-sphere, one class per integer (our own). For a tight structure, one removes a standard ball and is left with a 3-ball (our own). The work is in Eliashberg's theorem that tight structures on the 3-ball with a fixed boundary germ are unique (our own).

**Wikipedia:** [Contact geometry](https://en.wikipedia.org/wiki/Contact_geometry). It says: “Any structure not overtwisted is called tight. The standard contact structure on the sphere is the only tight one possible up to isotopy.”

**Sources:**

- [Y. Eliashberg, Contact 3-manifolds twenty years since J. Martinet's work, Ann. Inst. Fourier 42 (1992) 165–192](https://doi.org/10.5802/aif.1288)

### Excluding overtwisted disks makes the Bennequin inequality hold

**Remember:** Tight means no disk where the contact planes stop twisting.

*Rules out counterexamples.* MSC 57K33 (Contact structures in 3 dimensions), 57K10. arXiv math.GT, math.SG. Level 3: graduate.

**Definition.** A contact structure on a 3-manifold is tight when it contains no overtwisted disk. An overtwisted disk is an embedded disk whose boundary is tangent to the contact planes. Along that boundary the planes do not twist relative to the disk.

**Problem.** Let L be a Legendrian knot, one tangent to the planes, with Seifert surface Σ in a tight contact 3-manifold. Then tb(L) + \|rot(L)\| ≤ −χ(Σ), where tb counts turns of the planes along L and rot counts turns of L's tangent in the planes.

**How the definition helps.** Tightness excludes the overtwisted disk, whose boundary is the basic knot that breaks the bound (our own). That boundary is a Legendrian unknot with tb = 0, while the bound for a disk gives tb ≤ −1 (our own). The quote gives Bennequin's case of standard ℝ³, and Eliashberg's proof for all tight structures carries the real work (our own).

**Wikipedia:** [Thurston–Bennequin number](https://en.wikipedia.org/wiki/Thurston%E2%80%93Bennequin_number). It says: “He proved that for all Legendrian knot K in the standard contact ℝ³ the following inequality is true: tb(K)+\|rot(K)\| ≤ −χ(Σ), where χ(Σ) denotes the Euler characteristic of a Seifert surface Σ of K”

**Sources:**

- [Y. Eliashberg, Contact 3-manifolds twenty years since J. Martinet's work, Ann. Inst. Fourier 42 (1992) 165–192](https://doi.org/10.5802/aif.1288)

### Overtwisted contact structures are classified by their plane fields

**Remember:** One floppy disk makes contact structures as flexible as plane fields.

*Makes the theorem clean to state or prove.* MSC 57K33 (Contact structures in 3 dimensions), 57R17. arXiv math.GT, math.SG. Level 3: graduate.

**Definition.** A contact structure on a 3-manifold is overtwisted when it contains an overtwisted disk. This is an embedded disk whose boundary is tangent to the contact planes, with zero twisting of the planes relative to the disk.

**Problem.** On a closed oriented 3-manifold, two overtwisted contact structures are isotopic exactly when they are homotopic as plane fields. So their classification reduces to homotopy theory.

**How the definition helps.** Overtwisted disks absorb every obstruction, so only the homotopy class of the plane field is left (our own). Tight structures fail this, since the 3-torus has infinitely many non-isotopic tight structures in one homotopy class (Kanda, Giroux) (our own). Eliashberg's proof extends over cells using the disk, and the quoted paper by Huang reproves it with convex surfaces (our own).

**Paper or page:** [A proof of the classification theorem of overtwisted contact structures via convex surface theory](https://arxiv.org/abs/1102.5398). It says: “Let M be a closed, oriented 3-manifold. If ξ and ξ′ are two positive overtwisted contact structures on M, then they are isotopic if and only if they are homotopic as 2-plane fields.”

**Sources:**

- [Y. Eliashberg, Classification of overtwisted contact structures on 3-manifolds, Invent. Math. 98 (1989) 623–637](https://doi.org/10.1007/BF01393840)

### Positive stabilization makes contact structures and open books correspond

**Remember:** A new handle with a positive twist never changes the contact structure.

*Makes the theorem clean to state or prove.* MSC 57K33 (Contact structures in 3 dimensions), 57K30. arXiv math.GT, math.SG. Level 3: graduate.

**Definition.** An open book supports a contact structure when a contact form is positive on the binding and its differential is positive on each page. A positive stabilization adds a 1-handle to the page and a right-handed Dehn twist along a curve crossing it once.

**Problem.** On a closed oriented 3-manifold, the supporting relation gives a bijection between contact structures up to isotopy and open books up to positive stabilization (Giroux).

**How the definition helps.** Positive stabilization is the move that keeps the supported structure, so the theorem can state a bijection after dividing out by it (our own). The move is a connected sum with the standard 3-sphere, whose open book has an annulus page (our own). The hard part is Giroux's theorem that two open books supporting one structure have a common positive stabilization (our own).

**Wikipedia:** [Open book decomposition](https://en.wikipedia.org/wiki/Open_book_decomposition). It says: “Then there is a bijection between the set of oriented contact structures on M up to isotopy and the set of open book decompositions of M up to positive stabilization.”

**Sources:**

- [E. Giroux, Géométrie de contact: de la dimension trois vers les dimensions supérieures, Proceedings of the ICM, Beijing 2002, Vol. II, 405–414](https://arxiv.org/abs/math/0305129) (link not checked)

### Pushing off vertically makes Thurston–Bennequin number the writhe of the Lagrangian projection

**Remember:** Thurston–Bennequin number is how a knot links a copy floating above it.

*True by definition. Confidence: medium.* MSC 57K33 (Contact structures in 3 dimensions), 57K10. arXiv math.SG, math.GT. Level 3: graduate.

**Definition.** A Legendrian knot K is tangent to the contact planes everywhere. Its Thurston–Bennequin number tb(K) is its linking number with a copy pushed slightly off those planes. In standard R³ one can push along the vertical field ∂z, so the copy lies directly above K.

**Problem.** For a Legendrian knot in standard contact R³, tb(K) equals the writhe of its Lagrangian projection to the (x, y)-plane. The writhe is the sum of the signs of the crossings of that diagram.

**How the definition helps.** The copy pushed along ∂z has the same Lagrangian projection, so a tiny sideways shift makes it run parallel to K (our own). The two knots cross only near the crossings of K, twice at each with its sign, so their linking number is the writhe (our own). The other usual definition counts how the contact planes meet a Seifert surface, and the work moves into showing that both definitions agree (our own).

**Wikipedia:** [Thurston–Bennequin number](https://en.wikipedia.org/wiki/Thurston%E2%80%93Bennequin_number). It says: “The Thurston-Bennequin number of a Legendrian knot K ⊂ ℝ³ is the writhe of its Lagrangian projection”

**Sources:**

- [Geiges, An Introduction to Contact Topology, Cambridge University Press (2008)](https://doi.org/10.1017/CBO9780511611438)

### Self-linking of push-offs turns the transverse Bennequin bound into the Legendrian one

**Remember:** Each push-off sees the Thurston–Bennequin number shifted by rotation.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 57K33 (Contact structures in 3 dimensions), 57K10. arXiv math.GT, math.SG. Level 3: graduate.

**Definition.** The self-linking number sl(T) of a transverse knot T is its linking number with a copy pushed along a nonvanishing field in the contact planes. That field is taken over a Seifert surface, an oriented surface bounded by T. With this definition, the two transverse push-offs of a Legendrian knot L satisfy sl(L±) = tb(L) ∓ rot(L).

**Problem.** Wherever transverse knots satisfy the Bennequin bound sl(T) ≤ −χ(Σ), Legendrian knots satisfy tb(L) + \|rot(L)\| ≤ −χ(Σ). This holds in particular in standard contact R³.

**How the definition helps.** The bound for both push-offs gives tb(L) − rot(L) ≤ −χ(Σ) and tb(L) + rot(L) ≤ −χ(Σ), hence the claim (our own). The push-offs lie in a thin tube around L, so they bound surfaces like Σ (our own). So the Legendrian bound needs no separate proof; the work is the transverse bound, which Bennequin proved with braids (our own).

**Wikipedia:** [Thurston–Bennequin number](https://en.wikipedia.org/wiki/Thurston%E2%80%93Bennequin_number). It says: “He proved that for all Legendrian knot K in the standard contact ℝ³ the following inequality is true: tb(K) + \|rot(K)\| ≤ −χ(Σ),”

**Paper or page:** [Non-looseness of boundaries of Legendrian ribbons](https://arxiv.org/abs/2307.06828). It says: “Let T be a non-loose, null-homologous transverse link. Then for any Seifert surface Σ we have sl(T, \[Σ\]) ≤ −χ(Σ).”

**Sources:**

- [Geiges, An Introduction to Contact Topology, Cambridge University Press (2008)](https://doi.org/10.1017/CBO9780511611438)

### Slopes of the front recover a Legendrian knot completely

**Remember:** In a front, the hidden coordinate is just the slope.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 57K33 (Contact structures in 3 dimensions), 57K10. arXiv math.SG, math.GT. Level 3: graduate.

**Definition.** A Legendrian knot in standard contact R³ is tangent everywhere to the planes where the 1-form dz − y dx vanishes. Along such a knot dz = y dx. So the coordinate y equals the slope dz/dx of the front, the projection to the (x, z)-plane.

**Problem.** A Legendrian knot is determined by its front, a closed curve with cusps but no vertical tangents. At each crossing of the front, the two slopes alone decide which strand lies in front.

**How the definition helps.** Since y = dz/dx along the knot away from cusps, the front gives back y at every point, and so the whole knot (our own). A vertical tangent would need infinite y, and two strands that cross with equal slopes would meet in R³ (our own). An ordinary knot diagram needs over and under marks, but here the contact condition supplies them (our own).

**Wikipedia:** [Thurston–Bennequin number](https://en.wikipedia.org/wiki/Thurston%E2%80%93Bennequin_number). It says: “The front diagram of a Legendrian knot does not have vertical tangencies, however cusps can appear.”

**Sources:**

- [Geiges, An Introduction to Contact Topology, Cambridge University Press (2008)](https://doi.org/10.1017/CBO9780511611438)

### The vertical push-off makes Thurston–Bennequin number writhe minus half the cusps

**Remember:** Lift the front a little and count where it meets itself.

*True by definition. Confidence: medium.* MSC 57K33 (Contact structures in 3 dimensions), 57K10. arXiv math.SG, math.GT. Level 3: graduate.

**Definition.** A Legendrian knot K is tangent to the contact planes everywhere. Its Thurston–Bennequin number tb(K) is its linking number with a copy pushed slightly off those planes. In standard R³ the z direction leaves the contact planes, and pushing along it moves the front straight up.

**Problem.** For a Legendrian knot with a generic front, tb(K) equals the writhe of the front minus half the number of its cusps. So tb(K) can be read off any front by counting.

**How the definition helps.** The copy pushed along ∂z is the front moved up a little, so one front picture shows all its crossings with the knot (our own). Each front crossing gives two such crossings with its sign, and each cusp one of sign −1, so halving gives the formula (our own). With the Seifert-surface definition this count needs a surface, and the work moves into showing that the two definitions agree (our own).

**Wikipedia:** [Thurston–Bennequin number](https://en.wikipedia.org/wiki/Thurston%E2%80%93Bennequin_number). It says: “In this case the Thurston-Bennequin number is tb(K) = writhe(Π(K)) − ½(\# number of cusps),”

**Sources:** none listed. No primary source with a working link was found.

### Vanishing Euler class makes the rotation number independent of the Seifert surface

**Remember:** No Euler class means no hidden twist from the choice of surface.

*Rules out counterexamples. Confidence: medium.* MSC 57K33 (Contact structures in 3 dimensions). arXiv math.SG, math.GT. Level 3: graduate.

**Definition.** Fix a Seifert surface Σ for a Legendrian knot K, that is, an oriented surface with boundary K. The rotation number rot(K, Σ) counts the turns of the tangent of K in a frame of the contact planes over Σ. One writes rot(K) only when the Euler class e(ξ) of the contact planes is zero, so that frames exist over closed surfaces too.

**Problem.** If e(ξ) = 0, the rotation number of a Legendrian knot that bounds a surface does not depend on the Seifert surface. It is then an invariant of the Legendrian isotopy class.

**How the definition helps.** Two Seifert surfaces glue along K to a closed surface S, and their rotation numbers differ by e(ξ) evaluated on S (our own). Without the condition this can be nonzero: S¹ × S² has an overtwisted contact structure with Euler class 2 on the sphere (our own). Tubing that sphere onto Σ then changes rot(K, Σ) by 2 (our own).

**Wikipedia:** [Rotation number (knot theory)](https://en.wikipedia.org/wiki/Rotation_number_%28knot_theory%29). It says: “Moreover, whenever the Euler class e(ξ) of the contact structure vanishes, the rotation number is independent of the above choice and is hence denoted rot(K).”

**Sources:**

- [Geiges, An Introduction to Contact Topology, Cambridge University Press (2008)](https://doi.org/10.1017/CBO9780511611438)

### In the topological category every unimodular form is an intersection form

**Remember:** Drop smoothness, and every unimodular form is some 4-manifold's intersection form.

*Makes the theorem clean to state or prove.* MSC 57K40 (General topology of 4-manifolds), 57K41. arXiv math.GT. Level 3: graduate.

**Definition.** The intersection form of a closed oriented topological 4-manifold M pairs two integral degree-two classes, modulo torsion, by evaluating their cup product on \[M\]. Here M need only be a topological manifold, not a smooth one.

**Problem.** Every symmetric unimodular form on a finite-rank free abelian group occurs as the intersection form of a closed simply connected oriented topological 4-manifold. The form and the Kirby–Siebenmann invariant classify these manifolds up to orientation-preserving homeomorphism.

**How the definition helps.** Allowing topological manifolds lets Freedman use pieces that are only topologically standard, such as Casson handles, and his disc embedding theorem does the hard work (our own remark). The smooth version fails: by Donaldson’s theorem, no smooth closed simply connected 4-manifold has the E8 form (our own remark). For even forms, the Kirby–Siebenmann invariant must equal one eighth of the signature mod 2.

**Paper or page:** [Algorithms in 4-manifold topology](https://arxiv.org/abs/2411.08775). It says: “There exists a closed, oriented, simply connected, topological 4-manifold X whose intersection form is isometric to λ and with Kirby–Siebenmann invariant ks(X)=k ∈ ℤ/2.”

**Sources:**

- [S. Bastl, R. Burke, R. Chatterjee et al., Algorithms in 4-manifold topology, arXiv:2411.08775 (2024)](https://arxiv.org/abs/2411.08775)
- [M. H. Freedman, The topology of four-dimensional manifolds, J. Differential Geom. 17 (1982) 357-453](https://doi.org/10.4310/jdg/1214437136)

### The Wu class definition makes spin intersection forms even

**Remember:** On a spin four-manifold, the class that measures cup squares is zero.

*True by definition.* MSC 57K40 (General topology of 4-manifolds), 57R20, 55S10. arXiv math.GT, math.AT. Level 3: graduate.

**Definition.** On a closed oriented smooth 4-manifold M, the Wu class v₂ is the unique class in H²(M; ℤ/2) with v₂ ⌣ x = x ⌣ x for every x. Wu’s formula says v₂ = w₂, which is zero on a spin manifold.

**Problem.** The intersection form of a closed spin four-manifold is even: every integral class has even self-pairing.

**How the definition helps.** On a spin manifold w₂ = 0, so Wu’s formula v₂ = w₂ gives x ⌣ x = 0 mod 2 for every x (our own calculation). Reducing an integral class mod 2 then shows that its self-pairing is even.

**nLab:** [Wu formula](https://ncatlab.org/nlab/show/Wu+formula), [Wu class](https://ncatlab.org/nlab/show/Wu+class). It says: “The intersection form of a closed spin topological 4-manifold is even.”

**Sources:** none listed. No primary source with a working link was found.

### Blowing up base points turns a pencil into a fibration with sections

**Remember:** A base point is a blow-up waiting to happen.

*True by definition. Confidence: medium.* MSC 57K43 (Symplectic structures in 4 dimensions), 14D06. arXiv math.GT, math.SG. Level 3: graduate.

**Definition.** A Lefschetz pencil is a map from a closed 4-manifold to the 2-sphere, defined away from finitely many base points. Near each base point it is (z₁, z₂) ↦ \[z₁ : z₂\], which sends each complex line through the origin to its slope. Blowing up a point replaces it by the sphere of complex lines through it, the exceptional sphere.

**Problem.** Blowing up the k base points of a Lefschetz pencil gives a Lefschetz fibration over the 2-sphere. The k exceptional spheres become disjoint sections of square −1, and the square of the fiber drops from k to 0.

**How the definition helps.** The blow-up of ℂ² at the origin is defined as the closure of the graph of this very map, so the map extends (our own). Each exceptional sphere then maps one-to-one onto the base, so it is a section of square −1 (our own). A local model such as \[z₁ : z₂²\] needs two blow-ups and leaves a sphere of square −2 inside a fiber (our own).

**Wikipedia:** [Lefschetz pencil](https://en.wikipedia.org/wiki/Lefschetz_pencil). It says: “which is in fact well-defined only outside the points on the intersection of J with V. To make a well-defined mapping, some blowing up must be applied to V.”

**Sources:**

- [S. K. Donaldson, Lefschetz pencils on symplectic manifolds, Journal of Differential Geometry 53 (1999) 205–236](https://doi.org/10.4310/jdg/1214425535)

### Complex local models make Lefschetz monodromy a product of right-handed Dehn twists

**Remember:** Each pinched circle twists the fiber once to the right.

*Makes the theorem clean to state or prove.* MSC 57K43 (Symplectic structures in 4 dimensions), 14D05, 57K20. arXiv math.GT, math.SG. Level 3: graduate.

**Definition.** A Lefschetz fibration maps a 4-manifold onto a surface. Near each critical point it is (z₁, z₂) ↦ z₁² + z₂² in complex charts that preserve orientation. The vanishing cycle is the circle in a nearby fiber that shrinks to the critical point.

**Problem.** Going once around a critical value changes the fiber by a right-handed Dehn twist: cut along the vanishing cycle and reglue after one full turn. So over the disk, the monodromy around the boundary circle is the product of these twists, one for each critical point.

**How the definition helps.** Every critical point has the same complex model, so its monodromy is the Picard–Lefschetz twist, right-handed because the charts preserve orientation (our own). Achiral fibrations also allow orientation-reversing charts, so they also get left-handed twists, and this positivity is lost (our own). For fiber genus at least 2 over the sphere, Kas showed that such words with product 1 determine the fibration (our own).

**Wikipedia:** [Picard–Lefschetz theory](https://en.wikipedia.org/wiki/Picard%E2%80%93Lefschetz_theory). It says: “The Picard–Lefschetz formula describes the monodromy at a critical point.”

**Paper or page:** [Monodromy factorizations of Seifert fibered spaces](https://arxiv.org/abs/2208.13924v1). It says: “Then the corresponding abstract open book (F, φ) has monodromy φ = Tγ₁⋯Tγₙ, where F is the general fiber and each γᵢ is a vanishing cycle in F.”

**Sources:**

- [A. Kas, On the handlebody decomposition associated to a Lefschetz fibration, Pacific Journal of Mathematics 89 (1980) 89–104](https://doi.org/10.2140/pjm.1980.89.89)

### Defining blow-up by cutting a ball gives the exceptional sphere area πr²

**Remember:** The exceptional sphere is the ball's boundary, quotiented by circles.

*True by definition. Confidence: medium.* MSC 57K43 (Symplectic structures in 4 dimensions), 53D35. arXiv math.SG. Level 3: graduate.

**Definition.** The symplectic blow-up at an embedded ball of radius r removes the open ball. It then collapses to a point each Hopf circle, where a complex line through the center meets the boundary sphere. The collapsed boundary is the exceptional sphere.

**Problem.** The exceptional sphere has area πr², and the volume drops by π²r⁴/2. So each ball embedding gives the blow-up a symplectic form in the class \[ω\] − πr²e, where e is Poincaré dual to the exceptional sphere.

**How the definition helps.** The collapsed sphere is the radius-r sphere divided by the Hopf circles, with area πr², like a disk through the center (our own). For a complex blow-up with a glued-in Kähler form, the area is a free parameter, matched to a ball only by computation (our own). McDuff and Polterovich proved the converse, that suitable forms on blow-ups give ball embeddings, and that carries the hard work (our own).

**Wikipedia:** [Symplectic cut](https://en.wikipedia.org/wiki/Symplectic_cut). It says: “Topologically, this operation may also be viewed as the removal of an ε-neighborhood of the blow up locus, followed by the collapse of the boundary by the Hopf map.”

**Sources:**

- [E. Lerman, Symplectic cuts, Mathematical Research Letters 2 (1995) 247–258](https://doi.org/10.4310/MRL.1995.v2.n3.a2)
- [D. McDuff and L. Polterovich, Symplectic packings and algebraic geometry, Inventiones Mathematicae 115 (1994) 405–429](https://doi.org/10.1007/BF01231766)

### Opposite normal Euler numbers let symplectic surfaces be glued symplectically

**Remember:** Glue a neighborhood to its mirror image, inside out.

*True by definition.* MSC 57K43 (Symplectic structures in 4 dimensions), 53D05. arXiv math.SG, math.GT. Level 3: graduate.

**Definition.** The symplectic sum glues two symplectic 4-manifolds along symplectic surfaces of equal genus and area. The surfaces must have opposite self-intersection numbers. Then the deleted neighborhoods match by a map that turns each normal disk inside out.

**Problem.** By Gompf, the sum has a symplectic form equal to the given forms away from the surfaces, unique up to isotopy for each gluing. For example, the fiber sum of n copies of the rational elliptic surface E(1) is symplectic.

**How the definition helps.** By the symplectic neighborhood theorem, a neighborhood of a symplectic surface depends only on its genus, area and normal Euler number (our own). Opposite Euler numbers make the two punctured neighborhoods mirror images, so they glue symplectically almost by definition (our own). The work moves into that neighborhood theorem, which Moser's deformation method proves (our own).

**Wikipedia:** [Symplectic sum](https://en.wikipedia.org/wiki/Symplectic_sum). It says: “such that the Euler classes of the normal bundles are opposite”

**Sources:**

- [R. E. Gompf, A new construction of symplectic manifolds, Annals of Mathematics 142 (1995) 527–595](https://doi.org/10.2307/2118554)

### Relative minimality makes genus-one Lefschetz fibrations have 12k singular fibers

**Remember:** Forbid trivial twists, and every twist counts toward twelve.

*Rules out counterexamples. Confidence: medium.* MSC 57K43 (Symplectic structures in 4 dimensions), 14J27, 57K20. arXiv math.GT, math.SG. Level 3: graduate.

**Definition.** A genus-one Lefschetz fibration has tori as fibers. It is relatively minimal when no fiber contains a sphere of square −1. Equivalently, no vanishing cycle bounds a disk in the fiber.

**Problem.** A relatively minimal genus-one Lefschetz fibration over the 2-sphere has 12k singular fibers for some k ≥ 0. So its total space has Euler characteristic 12k.

**How the definition helps.** Relative minimality makes every vanishing cycle essential on the torus, so each monodromy is conjugate to one Dehn twist in SL(2,ℤ) (our own). The abelianization of SL(2,ℤ) is ℤ/12, the twist maps to a generator, and the product of all monodromies is 1 (our own). Without the condition it fails: blowing up a point on a smooth fiber of the rational elliptic surface E(1) gives 13 singular fibers (our own).

**Wikipedia:** [Elliptic surface](https://en.wikipedia.org/wiki/Elliptic_surface). It says: “The monodromy around each singular fiber is a well-defined conjugacy class in the group SL(2,Z) of 2 × 2 integer matrices with determinant 1.”

**Sources:**

- [B. Moishezon, Complex Surfaces and Connected Sums of Complex Projective Planes, Lecture Notes in Mathematics 603, Springer (1977)](https://doi.org/10.1007/BFb0063355)
- [R. E. Gompf and A. I. Stipsicz, 4-Manifolds and Kirby Calculus, Graduate Studies in Mathematics 20, American Mathematical Society (1999)](https://doi.org/10.1090/gsm/020)

### Requiring base points makes every Lefschetz pencil carry a symplectic form

**Remember:** Fibers forced through common points cannot hide in homology.

*Rules out counterexamples.* MSC 57K43 (Symplectic structures in 4 dimensions), 53D35. arXiv math.SG, math.GT. Level 3: graduate.

**Definition.** A Lefschetz pencil on a closed 4-manifold is a map to the 2-sphere, defined away from a nonempty finite set of base points. Near each base point it is (z₁, z₂) ↦ \[z₁ : z₂\]. Near each critical point it is (z₁, z₂) ↦ z₁² + z₂² in orientation-preserving complex charts.

**Problem.** Every closed 4-manifold with a Lefschetz pencil has a symplectic form, a closed nondegenerate 2-form, for which the fibers are symplectic surfaces. With Donaldson's converse, a closed 4-manifold is symplectic exactly when it has a Lefschetz pencil.

**How the definition helps.** Two fibers of a pencil meet only at the base points, positively, so the fiber class has positive square (our own). So Gompf's theorem, which needs a nonzero fiber class, covers every pencil (our own). Without base points it fails: S¹ × S³ is a torus bundle over S² with zero second cohomology (our own).

**Paper or page:** [Achiral Lefschetz fibrations and the moduli space of curves](https://arxiv.org/abs/2510.18593v1). It says: “Let f:X→S be a Lefschetz fibration such that the homology class of the fiber \[F\] does not vanish in H₂(X,ℝ). Then X admits a symplectic structure ω such that the regular fibers Fₓ = f⁻¹(x) are symplectic.”

**Sources:**

- [R. E. Gompf and A. I. Stipsicz, 4-Manifolds and Kirby Calculus, Graduate Studies in Mathematics 20, American Mathematical Society (1999)](https://doi.org/10.1090/gsm/020)
- [S. K. Donaldson, Lefschetz pencils on symplectic manifolds, Journal of Differential Geometry 53 (1999) 205–236](https://doi.org/10.4310/jdg/1214425535)

### Locally flat spheres make the Schoenflies theorem true in every dimension

**Remember:** Near each of its points, a locally flat sphere sits like a flat plane.

*Rules out counterexamples.* MSC 57N45 (Flatness and tameness of topological manifolds), 57N50. arXiv math.GT. Level 3: graduate.

**Definition.** An embedded (n − 1)-sphere in Sⁿ is locally flat if, near each of its points, some chart of Sⁿ makes it a flat coordinate hyperplane.

**Problem.** Every locally flat (n − 1)-sphere in the n-sphere bounds a ball on each side (the generalized Schoenflies theorem).

**How the definition helps.** Local flatness excludes Alexander’s horned sphere, whose wild points have no flat chart and whose exterior is not simply connected. Under this hypothesis, the generalized Schoenflies theorem gives a ball on each side.

**Wikipedia:** [Schoenflies problem](https://en.wikipedia.org/wiki/Schoenflies_problem), [Alexander horned sphere](https://en.wikipedia.org/wiki/Alexander_horned_sphere), [Knot (mathematics)](https://en.wikipedia.org/wiki/Knot_%28mathematics%29). It says: “At these Cantor points, the sphere is "wild". This set of wild points is the reason the Schoenflies theorem fails in three dimensions.”

**Sources:**

- [M. Brown, A proof of the generalized Schoenflies theorem, Bull. AMS 66 (1960) 74–76](https://doi.org/10.1090/S0002-9904-1960-10400-4)
- [B. Mazur, On embeddings of spheres, Bull. AMS 65 (1959) 59–65](https://doi.org/10.1090/S0002-9904-1959-10274-3)
- [J. W. Alexander, An example of a simply connected surface bounding a region which is not simply connected, PNAS 10 (1924) 8–10](https://doi.org/10.1073/pnas.10.1.8)

### Mod 2 orientations give Poincaré duality on every closed manifold

**Remember:** Modulo two, each local homology group has just one generator.

*Rules out counterexamples.* MSC 57N65 (Algebraic topology of manifolds), 55N25, 55M05. arXiv math.AT, math.GT. Level 3: graduate.

**Definition.** An R-orientation of an n-manifold M is a continuous choice, at each point x, of a generator of the local homology group Hₙ(M, M ∖ x; R). With R = ℤ/2 that group is ℤ/2, which has one generator, so every manifold has exactly one mod 2 orientation.

**Problem.** For a closed n-manifold M, the cohomology Hᵏ(M; ℤ/2) is isomorphic to the homology Hₙ₋ₖ(M; ℤ/2) for all k.

**How the definition helps.** Poincaré duality holds with coefficients in R for every closed R-oriented manifold, and every manifold is ℤ/2-oriented. For example, the real projective plane has zero top integral homology but nonzero integral H⁰ (our own example). With mod 2 coefficients both groups are ℤ/2.

**Wikipedia:** [Poincaré duality](https://en.wikipedia.org/wiki/Poincar%C3%A9_duality). It says: “Poincaré duality holds for any coefficient ring, so long as one has taken an orientation with respect to that coefficient ring; in particular, since every manifold has a unique orientation mod 2, Poincaré duality holds mod 2”

**Sources:**

- [Allen Hatcher, Algebraic Topology, Cambridge University Press, 2002](https://pi.math.cornell.edu/~hatcher/AT/ATpage.html)

### Orientations via local homology make orientability work for topological manifolds

**Remember:** Two generators at each point make a double cover that tests orientability.

*Makes the theorem clean to state or prove.* MSC 57N65 (Algebraic topology of manifolds), 55N25, 55M05. arXiv math.AT, math.GT. Level 3: graduate.

**Definition.** At each point p of an n-manifold M without boundary, a local orientation is one of the two generators of Hₙ(M, M ∖ p; ℤ) ≅ ℤ. The orientation cover is the space of all local orientations, a two-sheeted cover of M, and an orientation of M is a continuous section of it.

**Problem.** Every nonempty connected manifold M without boundary has an orientation double cover, which is disconnected exactly when M is orientable. When M is not orientable, the cover is connected and orientable.

**How the definition helps.** A section and its opposite split the cover into two sheets, and conversely each sheet of a disconnected cover is a section. The cover always orients itself, since each point upstairs is a chosen generator (our own observation).

**Wikipedia:** [Orientability](https://en.wikipedia.org/wiki/Orientability). It says: “If M is orientable, then M itself is one of these open sets, so O is the disjoint union of two copies of M. If M is non-orientable, however, then O is connected and orientable.”

**Sources:**

- [Allen Hatcher, Algebraic Topology, Cambridge University Press, 2002](https://pi.math.cornell.edu/~hatcher/AT/ATpage.html)

### Simple homotopy type separates lens spaces that ordinary homotopy cannot

**Remember:** Homotopy sees q up to squares; torsion sees q up to sign.

*Makes the theorem clean to state or prove.* MSC 57Q10 (Simple homotopy type, Whitehead torsion, Reidemeister-Franz torsion, etc.), 57K31. arXiv math.GT, math.AT. Level 3: graduate.

**Definition.** For coprime integers p ≥ 2 and q, the lens space L(p;q) is the unit sphere in ℂ² modulo the rotation (z,w) ↦ (exp(2πi/p)z, exp(2πiq/p)w) and its powers.

**Problem.** L(p;q₁) and L(p;q₂) are homotopy equivalent when q₁q₂ is ± a square mod p, but homeomorphic only when q₁ is ±q₂ or ±q₂⁻¹ mod p. For example (our own), L(7;1) and L(7;2) are homotopy equivalent but not homeomorphic.

**How the definition helps.** Both tests read the same rotation exponent q mod p: homotopy type sees only whether q₁q₂ is ± a square, while Reidemeister torsion, a simple homotopy invariant, gives the stricter congruences. In our own example, 2 ≡ 3² mod 7, but 2 is neither 1 nor −1 mod 7.

**Wikipedia:** [Lens space](https://en.wikipedia.org/wiki/Lens_space). It says: “The homeomorphism classification is more subtle, and is given by Reidemeister torsion.”

**Sources:**

- [Kurt Reidemeister, Homotopieringe und Linsenräume, Abhandlungen aus dem Mathematischen Seminar der Universität Hamburg 11 (1935) 102–109](https://doi.org/10.1007/BF02940717)

### Whitehead torsion extends the h-cobordism theorem to every fundamental group

**Remember:** Not just homotopy, but simple homotopy, makes the cobordism a cylinder.

*Makes the theorem clean to state or prove.* MSC 57Q10 (Simple homotopy type, Whitehead torsion, Reidemeister-Franz torsion, etc.), 57R80. arXiv math.GT, math.AT. Level 3: graduate.

**Definition.** A smooth h-cobordism is a compact smooth manifold W with boundary M ⊔ N such that both boundary inclusions are homotopy equivalences. Its Whitehead torsion τ(W,M) vanishes exactly when M → W is a simple homotopy equivalence, one built from elementary expansions and collapses.

**Problem.** A connected smooth h-cobordism W of dimension at least six is diffeomorphic to M × \[0,1\] relative to M exactly when τ(W,M) vanishes.

**How the definition helps.** The smooth s-cobordism theorem, in dimension at least six, turns vanishing torsion into a product structure relative to M, for any fundamental group. Conversely, M × \[0,1\] collapses onto M, so its torsion is zero.

**Wikipedia:** [h-cobordism](https://en.wikipedia.org/wiki/h-cobordism), [Whitehead torsion](https://en.wikipedia.org/wiki/Whitehead_torsion). It says: “If the assumption that M and N are simply connected is dropped, h-cobordisms need not be cylinders; the obstruction is exactly the Whitehead torsion τ (W, M) of the inclusion M ↪︎ W.”

**Sources:**

- [J. H. C. Whitehead, Simple homotopy types, American Journal of Mathematics 72 (1950) 1–57](https://doi.org/10.2307/2372133)
- [Barry Mazur, Differential topology from the point of view of simple homotopy theory, Publications Mathématiques de l'IHÉS 15 (1963) 5–93](https://doi.org/10.1007/BF02684277)

### Asking vertex links to be spheres separates PL manifolds from triangulated ones

**Remember:** Spheres around every vertex mean PL; topology alone is not enough.

*Rules out counterexamples.* MSC 57Q15 (Triangulating manifolds), 57Q25. arXiv math.GT. Level 3: graduate.

**Definition.** A combinatorial n-manifold is a simplicial complex in which the link of every vertex, the simplices of its star that miss it, is a PL (piecewise linear) (n−1)-sphere. A triangulated manifold asks only that the whole space be a topological manifold.

**Problem.** The vertex-link condition survives subdivision and PL homeomorphism. Two PL-equivalent finite closed combinatorial manifolds of the same dimension are related by finitely many Pachner moves.

**How the definition helps.** The vertex-link condition is local and survives subdivision, so PL manifolds become finite combinatorial objects for Pachner’s moves. It excludes the double suspension of the Poincaré sphere, a topological sphere by the theorem of Edwards and Cannon (our own detail). There the link of a suspension vertex is the single suspension of the Poincaré sphere, which is not a sphere.

**Wikipedia:** [Triangulation (topology)](https://en.wikipedia.org/wiki/Triangulation_%28topology%29), [Hauptvermutung](https://en.wikipedia.org/wiki/Hauptvermutung). It says: “Choosing a triangulation t: \|𝒮\| → S²X obtained via the suspension operation on triangulations the resulting simplicial complex is not a PL-manifold, because there is a vertex v such that link(v) is not a n−1 sphere.”

**Sources:**

- [Robert D. Edwards, Suspensions of homology spheres, arXiv:math/0610573 (2006)](https://arxiv.org/abs/math/0610573)

### Acyclic matchings make the discrete Morse complex well defined

**Remember:** Pair each cell with a coface; flipped arrows must form no cycle.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 57Q70 (Discrete Morse theory and related ideas in manifold topology), 55U05. arXiv math.AT, math.CO. Level 3: graduate.

**Definition.** An acyclic matching pairs cells of a CW complex disjointly, each lower cell with a coface one dimension up, so that the pair can be cancelled. The coface’s attaching map must cover the open lower cell exactly once, homeomorphically, and reversing matched arrows in the face graph must leave no directed cycle. Unmatched cells are critical.

**Problem.** A finite CW complex X with an acyclic matching with n critical cells is homotopy equivalent to a CW complex with n cells. The Morse complex, built on the critical cells, has the same integer homology as X.

**How the definition helps.** Each matched pair can be cancelled, and acyclicity gives an order in which to cancel them all, leaving only the critical cells. The discrete Morse theorem makes this a homotopy equivalence, and its boundary formula sums over gradient paths, which acyclicity keeps finite (our own explanation).

**nLab:** [discrete Morse theory](https://ncatlab.org/nlab/show/discrete+Morse+theory). It says: “The first axiom of the partial matching guarantees that one only divides by ±1, while the second axiom guarantees that no such path can go "backwards" from c′ up to c.”

**Sources:**

- [Robin Forman, Morse theory for cell complexes, Advances in Mathematics 134 (1998) 90–145](https://doi.org/10.1006/aima.1997.1650)

### A spin structure is a lift through the homotopy fiber of w₂

**Remember:** A spin structure is a chosen reason why w₂ vanishes.

*True by definition. Confidence: medium.* MSC 57R15 (Specialized structures on manifolds (spin manifolds, framed manifolds, etc.)), 55R40, 55R15. arXiv math.DG, math.AT. Level 3: graduate.

**Definition.** A spin structure on an oriented smooth manifold X is a null-homotopy of w₂ ∘ f: X → K(ℤ/2,2), where f: X → BSO classifies the tangent bundle. This is the same as a lift of f to BSpin, since BSpin is the homotopy fiber of w₂.

**Problem.** An oriented smooth manifold X admits a spin structure exactly when w₂(TX) = 0. When structures exist, their isomorphism classes form a torsor for H¹(X; ℤ/2).

**How the definition helps.** A map to K(ℤ/2,2) is null-homotopic exactly when the class it represents, here w₂(TX), vanishes. Two null-homotopies differ by a map to the loop space K(ℤ/2,1), a class in H¹(X; ℤ/2), so H¹ acts freely and transitively on isomorphism classes (our own argument).

**nLab:** [spin structure](https://ncatlab.org/nlab/show/spin+structure). It says: “By construction (the universal property of the homotopy fiber) this is the obstruction to the existence of a lift”

**Sources:**

- [John Milnor, Spin structures on manifolds, L'Enseignement Mathématique 9 (1963) 198–203](https://doi.org/10.5169/seals-38784)
- [Michael K. Murray, Michael A. Singer, Gerbes, Clifford modules and the index theorem, 2003, arXiv:math/0302096](https://arxiv.org/abs/math/0302096)

### Requiring an open manifold lets almost symplectic forms become symplectic

**Remember:** Without a closed piece, topology is the only obstruction.

*Rules out counterexamples.* MSC 57R17 (Symplectic and contact topology in high or arbitrary dimension), 53D35, 58A20. arXiv math.SG. Level 3: graduate.

**Definition.** An open manifold is one with no compact component without boundary. On such manifolds every open condition on derivatives that diffeomorphisms preserve satisfies Gromov's h-principle. This means that any formal solution, with derivatives replaced by free variables, deforms to a true solution.

**Problem.** On an open manifold, every nondegenerate 2-form deforms through nondegenerate 2-forms to an exact symplectic form dλ. On closed manifolds this fails: the sphere S⁶ carries a nondegenerate 2-form but no symplectic form.

**How the definition helps.** Nondegeneracy of dλ is an open, diffeomorphism-invariant condition on first derivatives of λ, so Gromov's theorem applies, with nondegenerate 2-forms as formal solutions (our own). On a closed 2n-manifold a symplectic class has nonzero n-th power, which fails on S⁶ because its second cohomology vanishes (our own). S⁶ is still almost symplectic, since it has an almost complex structure, so openness removes a real counterexample (our own).

**nLab:** [h-principle](https://ncatlab.org/nlab/show/h-principle). It says: “if B is an open n-manifold, and if R is open as a subspace of X⁽ʳ⁾ and is Diff(B)-invariant, then R satisfies the h-principle”

**Wikipedia:** [Almost symplectic manifold](https://en.wikipedia.org/wiki/Almost_symplectic_manifold). It says: “An almost symplectic manifold is equivalent to an Sp-structure; requiring ω to be closed is an integrability condition.”

**Sources:**

- [M. Gromov, Stable mappings of foliations into manifolds, Math. USSR-Izv. 3 (1969), 671–694](https://doi.org/10.1070/im1969v003n04abeh000796)

### Fractional Euler characteristic decides the geometry of every 2-orbifold

**Remember:** Subtract cone deficits and half corner deficits from the surface’s Euler characteristic.

*Makes the theorem clean to state or prove.* MSC 57R18 (Topology and geometry of orbifolds), 57K20. arXiv math.GT, math.DG. Level 3: graduate.

**Definition.** For a compact 2-orbifold with underlying surface X₀, corner reflectors of orders nᵢ and cone points of orders mᵢ, set χ = χ(X₀) − Σ(1 − 1/nᵢ)/2 − Σ(1 − 1/mᵢ). Each singular point counts as a fraction, so χ multiplies by the degree of a finite orbifold cover.

**Problem.** A compact connected 2-orbifold is hyperbolic when χ &lt; 0 and Euclidean when χ = 0. When χ &gt; 0 it is either spherical or bad, which means it has no manifold cover.

**How the definition helps.** Since χ multiplies under covers and, by Gauss–Bonnet, has the sign of the curvature, its sign decides the geometry. Orbifold uniformization supplies the structures, with bad orbifolds the only exceptions when χ &gt; 0 (our own explanation).

**Wikipedia:** [Orbifold](https://en.wikipedia.org/wiki/Orbifold), [Euler characteristic](https://en.wikipedia.org/wiki/Euler_characteristic). It says: “A 2-dimensional compact connected orbifold has a hyperbolic structure if its Euler characteristic is less than 0, a Euclidean structure if it is 0, and if its Euler characteristic is positive it is either bad or has an elliptic structure”

**Sources:**

- [William P. Thurston, The Geometry and Topology of Three-Manifolds, Princeton lecture notes, 1978–1981, chapter 13](https://library.slmath.org/books/gt3m/)

### Orbifolds as groupoids keep the finite symmetry groups of points

**Remember:** Keep each point's finite symmetry group instead of taking the quotient.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 57R18 (Topology and geometry of orbifolds), 58H05. arXiv math.DG, math.GT. Level 3: graduate.

**Definition.** An orbifold is a proper étale Lie groupoid up to Morita equivalence, so each point keeps its finite group of symmetries instead of being flattened into a quotient. Étale means source and target are local diffeomorphisms, and proper means the map from arrows to pairs of objects has compact preimages of compact sets.

**Problem.** The orbifold bicategory localizes proper étale Lie groupoids at Morita equivalences. The inertia orbifold of X is the mapping stack from Bℤ to X, where Bℤ has one object and automorphism group ℤ.

**How the definition helps.** Morita localization identifies the groupoid presentations of one orbifold, as in the Moerdijk–Pronk theorem. A map from Bℤ to X picks an object and an automorphism of it, and maps between such choices act by conjugation, giving the inertia groupoid (our own calculation).

**nLab:** [orbifold](https://ncatlab.org/nlab/show/orbifold). It says: “It has been noticed that the topological invariants of the underlying topological space of an orbifold as a topological space with an orbifold structure are not appropriate, but have to be corrected”

**Sources:**

- [Ieke Moerdijk, Orbifolds as Groupoids: an Introduction, Contemp. Math. 310 (2002) 205–222, arXiv:math/0203100](https://arxiv.org/abs/math/0203100)
- [Ieke Moerdijk, Dorette Pronk, Orbifolds, sheaves and groupoids, K-theory 12 (1997) 3–21](https://doi.org/10.1023/A:1007767628271)

### Chern–Weil forms make the Chern character multiplicative on tensor products

**Remember:** Exponentiate the sum of the two commuting curvatures and take the trace.

*True by definition. Confidence: medium.* MSC 57R20 (Characteristic classes and numbers in differential topology), 53C05. arXiv math.DG, math.AT. Level 3: graduate.

**Definition.** For a smooth complex vector bundle E with a connection of curvature F, its de Rham Chern character is the class of tr(exp(iF/2π)). The exponential turns a sum of commuting terms into a product.

**Problem.** For smooth complex vector bundles E and E′, the Chern character of E ⊗ E′ is the product of their Chern characters.

**How the definition helps.** The curvature of E ⊗ E′ is F ⊗ 1 + 1 ⊗ F′, a sum of commuting terms, so its exponential is the tensor product of the two exponentials (our own calculation). The trace of a tensor product is the product of the traces, and this passes to de Rham classes.

**nLab:** [Chern character](https://ncatlab.org/nlab/show/Chern+character). It says: “and it is multiplicative under the tensor product of vector bundles”

**Sources:** none listed. No primary source with a working link was found.

### Complexification expresses Pontryagin classes of complex bundles through Chern classes

**Remember:** Complexify the underlying real bundle to get the original and its conjugate.

*True by definition.* MSC 57R20 (Characteristic classes and numbers in differential topology), 55R40. arXiv math.AT. Level 3: graduate.

**Definition.** The Pontryagin class pₖ(F) of a real vector bundle F is (−1)ᵏc₂ₖ(F ⊗ ℂ), where F ⊗ ℂ extends each fiber to complex scalars. When F is a complex bundle E viewed as real, F ⊗ ℂ splits as E ⊕ Ē, where Ē is E with i acting as −i.

**Problem.** For a complex vector bundle E, the Pontryagin classes of the underlying real bundle satisfy 1 − p₁ + p₂ − ⋯ = c(E)c(Ē). In particular, p₁ = c₁² − 2c₂.

**How the definition helps.** The splitting and the Whitney product rule give c(F ⊗ ℂ) = c(E)c(Ē). Conjugation multiplies cᵢ by (−1)ⁱ, so the odd-degree terms cancel and the even terms give the alternating Pontryagin sum. In degree four this reads −p₁ = 2c₂ − c₁², so p₁ = c₁² − 2c₂.

**Wikipedia:** [Pontryagin class](https://en.wikipedia.org/wiki/Pontryagin_class). It says: “This follows from the fact that E⊗ℝℂ ≅ E⊕Ē, the Whitney sum formula, and properties of Chern classes of its complex conjugate bundle.”

**Sources:**

- [Milnor, J. W.; Stasheff, J. D. (1974). Characteristic Classes. Annals of Mathematics Studies 76. Princeton University Press.](https://doi.org/10.1515/9781400881826)

### Complexification makes Pontryagin classes stable under trivial summands

**Remember:** Trivial real summands complexify to trivial ones, with Chern class one.

*True by definition. Confidence: medium.* MSC 57R20 (Characteristic classes and numbers in differential topology), 55R40. arXiv math.AT. Level 3: graduate.

**Definition.** The Pontryagin class pₖ(E) of a real vector bundle E is (−1)ᵏc₂ₖ(E ⊗ ℂ), a Chern class of its complexification, which extends each fiber to complex scalars. A trivial real summand complexifies to a trivial complex summand.

**Problem.** Adding a trivial real bundle does not change any integral Pontryagin class.

**How the definition helps.** A trivial complex bundle has total Chern class 1, so the Whitney product rule for Chern classes, which holds over ℤ, leaves every c₂ₖ unchanged. In our own comparison, the Pontryagin product rule alone holds only up to elements of order two.

**Wikipedia:** [Pontryagin class](https://en.wikipedia.org/wiki/Pontryagin_class). It says: “The axiom set above also implies that Pontryagin classes are stable: adding a trivial real bundle does not change p(E).”

**Sources:**

- [Milnor, J. W.; Stasheff, J. D. (1974). Characteristic Classes. Annals of Mathematics Studies 76. Princeton University Press.](https://doi.org/10.1515/9781400881826)

### Complexification makes the top Pontryagin class the Euler class squared

**Remember:** Complexification doubles the real bundle, and two orientation signs cancel.

*True by definition.* MSC 57R20 (Characteristic classes and numbers in differential topology), 55R40. arXiv math.AT. Level 3: graduate.

**Definition.** For an oriented real vector bundle E of rank 2k, the Euler class e(E) is the pullback of its Thom class along the zero section. The top Pontryagin class is pₖ(E) = (−1)ᵏc₂ₖ(E ⊗ ℂ), and c₂ₖ is the Euler class of E ⊗ ℂ with its complex orientation.

**Problem.** For an oriented real vector bundle E of rank 2k, the square of the Euler class is the top Pontryagin class: e(E)² = pₖ(E).

**How the definition helps.** As a real bundle, E ⊗ ℂ is E ⊕ E, whose Euler class in the product orientation is e(E)². The complex orientation differs from the product one by (−1)ᵏ, which cancels the sign in pₖ.

**nLab:** [Euler class](https://ncatlab.org/nlab/show/Euler+class). It says: “For E a vector bundle of even rank rank(E) = 2k, the cup product of the Euler class with itself equals the kth Pontryagin class”

**Wikipedia:** [Euler class](https://en.wikipedia.org/wiki/Euler_class). It says: “The Euler class of E is given by the highest dimensional Chern class”

**Sources:**

- [Milnor, J. W.; Stasheff, J. D. (1974). Characteristic Classes. Annals of Mathematics Studies 76. Princeton University Press.](https://doi.org/10.1515/9781400881826)

### Curvature makes Chern classes of dual bundles alternate in sign

**Remember:** Dual curvature is minus the transpose; only the minus sign matters.

*True by definition. Confidence: medium.* MSC 57R20 (Characteristic classes and numbers in differential topology), 53C05. arXiv math.DG, math.AT. Level 3: graduate.

**Definition.** For a connection with curvature Ω on a complex bundle E, the coefficient of tʲ in det(I + itΩ/2π) represents the jth real Chern class. The dual bundle E∗, whose fibers are the linear functionals on those of E, gets the dual connection, with curvature −Ωᵀ.

**Problem.** The ith real Chern class of the dual bundle is (−1)ⁱ times that of the original bundle.

**How the definition helps.** Transposing does not change a determinant, and negating Ω replaces t by −t. So the coefficient of tʲ changes by (−1)ʲ, and Chern–Weil theory passes this to real cohomology (our own calculation).

**Wikipedia:** [Chern class](https://en.wikipedia.org/wiki/Chern_class), [Chern–Weil homomorphism](https://en.wikipedia.org/wiki/Chern%E2%80%93Weil_homomorphism). It says: “For the dual bundle E\* of E, cᵢ(E\*) = (−1)ⁱcᵢ(E).”

**Sources:**

- [Milnor, J. W.; Stasheff, J. D. (1974). Characteristic Classes. Annals of Mathematics Studies 76. Princeton University Press.](https://doi.org/10.1515/9781400881826)

### Curvature makes positive-degree real Chern classes vanish for flat bundles

**Remember:** Zero curvature leaves only the constant term in the Chern determinant.

*True by definition.* MSC 57R20 (Characteristic classes and numbers in differential topology), 53C05. arXiv math.DG. Level 3: graduate.

**Definition.** For a smooth complex vector bundle with a connection of curvature Ω, the coefficient of tʲ in det(I + itΩ/2π) represents its jth real Chern class, whatever connection is chosen. A connection is flat if Ω vanishes everywhere.

**Problem.** Every positive-degree real Chern class of a bundle with a flat connection vanishes.

**How the definition helps.** If Ω = 0 the determinant is 1, so every positive-degree coefficient is zero. The work is in showing that these forms represent the real Chern classes for every connection. The argument says nothing about integral torsion classes.

**Wikipedia:** [Chern class](https://en.wikipedia.org/wiki/Chern_class). It says: “This is evinced by the fact that a trivial bundle always admits a flat connection.”

**Sources:**

- [Chern, S.-S. (1946). Characteristic classes of Hermitian manifolds. Annals of Mathematics 47(1), 85–121.](https://doi.org/10.2307/1969037)

### Defining Stiefel–Whitney numbers cohomologically makes them vanish on boundaries

**Remember:** A class that extends across a filling pairs to zero with its boundary.

*True by definition.* MSC 57R20 (Characteristic classes and numbers in differential topology), 57R75. arXiv math.AT, math.GT. Level 3: graduate.

**Definition.** For a closed smooth n-manifold M, a Stiefel–Whitney number evaluates a product of Stiefel–Whitney classes of TM, of total degree n, on the mod 2 fundamental class \[M\]. If M bounds W, these classes extend over W, while \[M\] becomes zero in W.

**Problem.** If M is the boundary of a compact smooth manifold W, then every Stiefel–Whitney number of M is zero.

**How the definition helps.** Along M, the tangent bundle of W is TM plus a trivial line, so stability and naturality make the classes of TM restrictions of classes of W (our own proof). The fundamental class of M bounds the relative fundamental class of W, so it maps to zero in W. Naturality of evaluation then gives zero.

**nLab:** [Stiefel-Whitney number](https://ncatlab.org/nlab/show/Stiefel-Whitney+number). It says: “All Stiefel-Whitney numbers of the boundary of a compact smooth manifold vanish.”

**Sources:**

- [John W. Milnor and James D. Stasheff, Characteristic Classes (1974)](https://press.princeton.edu/books/paperback/9780691081229/characteristic-classes)
- [René Thom, Quelques propriétés globales des variétés différentiables (1954), pp. 17–86 (the converse)](https://doi.org/10.1007/BF02566923)

### Defining the Euler class by the Thom class makes it multiplicative

**Remember:** Multiply the Thom classes first, then restrict to the zero section.

*True by definition.* MSC 57R20 (Characteristic classes and numbers in differential topology), 55R25. arXiv math.AT, math.GT. Level 3: graduate.

**Definition.** The Thom class of an oriented real rank-n bundle E is the class in Hⁿ(E, E ∖ Z; ℤ), with Z the zero section, that restricts to the orientation generator on each fibre. The Euler class is its pullback along the zero section.

**Problem.** For oriented real vector bundles E and F over the same base, e(E ⊕ F) = e(E) ⌣ e(F).

**How the definition helps.** The Thom class of E ⊕ F is the product of the Thom classes of E and F, because fibre orientations multiply. Pulling back along the zero section turns this product into e(E) ⌣ e(F) (our own proof). The work is in this product rule for Thom classes.

**nLab:** [Euler class](https://ncatlab.org/nlab/show/Euler+class). It says: “Euler class takes Whitney sum to cup product”

**Sources:**

- [John W. Milnor and James D. Stasheff, Characteristic Classes (1974), §9, Property 9.6](https://press.princeton.edu/books/paperback/9780691081229/characteristic-classes)

### Defining the top Chern class as the Euler class makes equality immediate

**Remember:** The top Chern class is simply the Euler class, by fiat.

*True by definition. Confidence: medium.* MSC 57R20 (Characteristic classes and numbers in differential topology), 55R40. arXiv math.AT. Level 3: graduate.

**Definition.** Give a complex rank-n bundle E the orientation of its complex structure, as a real bundle of rank 2n. Define cₙ(E) as the pullback of the Thom class along the zero section, which is the Euler class.

**Problem.** The top Chern class of a complex vector bundle equals the Euler class of the underlying oriented real bundle.

**How the definition helps.** The equality holds by construction. The work moves to building the lower Chern classes and proving the axioms, in particular the product rule for direct sums (our own comparison).

**Wikipedia:** [Chern class](https://en.wikipedia.org/wiki/Chern_class). It says: “Hence, one simply defines the top Chern class of the bundle to be its Euler class (the Euler class of the underlying real vector bundle) and handles lower Chern classes in an inductive fashion.”

**Sources:**

- [Milnor, J. W.; Stasheff, J. D. (1974). Characteristic Classes. Annals of Mathematics Studies 76. Princeton University Press.](https://doi.org/10.1515/9781400881826)

### The determinant line makes the first Stiefel–Whitney class detect orientability

**Remember:** Orienting a bundle is the same as making its determinant line trivial.

*True by definition.* MSC 57R20 (Characteristic classes and numbers in differential topology), 55R25. arXiv math.AT. Level 3: graduate.

**Definition.** For a real rank-n bundle E over a CW complex X, w₁(E) is the class in H¹(X; ℤ/2) that classifies the determinant line ∧ⁿE, so it is zero exactly when that line is trivial. An orientation of E is the same as an orientation of ∧ⁿE.

**Problem.** A real vector bundle E is orientable exactly when w₁(E) = 0.

**How the definition helps.** So E is orientable exactly when ∧ⁿE is orientable, which for a line bundle means trivial. With a bundle metric, the positive unit vectors give a nowhere-zero section, and conversely a trivialization orients the line (our own argument).

**Wikipedia:** [Orientation of a vector bundle](https://en.wikipedia.org/wiki/Orientation_of_a_vector_bundle), [Stiefel–Whitney class](https://en.wikipedia.org/wiki/Stiefel%E2%80%93Whitney_class). It says: “To give an orientation to a real vector bundle E of rank n is to give an orientation to the (real) determinant bundle det E = ∧ⁿE of E.”

**Sources:**

- [Milnor, J. W.; Stasheff, J. D. (1974). Characteristic Classes. Annals of Mathematics Studies 76. Princeton University Press.](https://doi.org/10.1515/9781400881826)

### The projective-bundle definition gives natural Chern classes that vanish above rank

**Remember:** A unique expansion gives only n coefficients, and pullback preserves the relation.

*True by definition.* MSC 57R20 (Characteristic classes and numbers in differential topology), 14C17. arXiv math.AT, math.AG. Level 3: graduate.

**Definition.** On the projective bundle π: P(E) → X of lines in a complex rank-n bundle E with n &gt; 0, let a be minus the first Chern class of the tautological line. The classes cᵢ(E) are the unique coefficients with aⁿ + ∑ᵢ₌₁ⁿ π\*(cᵢ(E))aⁿ⁻ⁱ = 0, and cᵢ(E) = 0 for i &gt; n.

**Problem.** For a complex vector bundle E of rank n, the classes cᵢ(E) vanish for i &gt; n. Pulling back the bundle along a map pulls back its Chern classes.

**How the definition helps.** There are only n coefficients, so the classes above the rank vanish. Under a pullback, the bundle of lines and its tautological line pull back too, so the relation pulls back (our own argument). Uniqueness, from Leray–Hirsch, then identifies the new coefficients.

**Wikipedia:** [Chern class](https://en.wikipedia.org/wiki/Chern_class). It says: “In particular, one may define the Chern classes of E in the sense of Grothendieck, denoted c₁(E), … cₙ(E) by expanding this way the class −aⁿ, with the relation:”

**Sources:**

- [Grothendieck, A. (1958). La théorie des classes de Chern. Bulletin de la Société Mathématique de France 86, 137–154.](https://doi.org/10.24033/bsmf.1501)

### The total Stiefel–Whitney class makes the Whitney sum rule multiplicative

**Remember:** Include the constant 1 so ordinary multiplication supplies the end terms.

*Makes the theorem clean to state or prove.* MSC 57R20 (Characteristic classes and numbers in differential topology), 55R40. arXiv math.AT. Level 3: graduate.

**Definition.** The total Stiefel–Whitney class of a real vector bundle E is w(E) = 1 + w₁(E) + w₂(E) + ⋯, the sum of its mod 2 classes with w₀(E) = 1 put in front. So the degree-k part of w(E)w(F) includes the end terms wₖ(E) and wₖ(F).

**Problem.** The total Stiefel–Whitney class is multiplicative: w(E ⊕ F) = w(E)w(F).

**How the definition helps.** The degree-k part of w(E)w(F) is the sum of wᵢ(E)wⱼ(F) over i + j = k, with w₀ = 1 supplying the end terms (our own explanation). The Whitney sum formula says this sum is wₖ(E ⊕ F).

**Wikipedia:** [Stiefel–Whitney class](https://en.wikipedia.org/wiki/Stiefel%E2%80%93Whitney_class). It says: “The w₀(E) class contains no information, because it is equal to 1 by definition. Its creation by Whitney was an act of creative notation, allowing the Whitney sum Formula w(E₁ ⊕ E₂) = w(E₁)w(E₂) to be true.”

**Sources:**

- [Milnor, J. W.; Stasheff, J. D. (1974). Characteristic Classes. Annals of Mathematics Studies 76. Princeton University Press.](https://doi.org/10.1515/9781400881826)

### Thom-class Euler classes make self-intersection numbers equal normal Euler numbers

**Remember:** Restricting a submanifold's dual class to itself gives its normal Euler class.

*True by definition.* MSC 57R20 (Characteristic classes and numbers in differential topology), 55N45. arXiv math.AT, math.GT. Level 3: graduate.

**Definition.** The Thom class of an oriented real rank-n bundle E lies in Hⁿ(E, E ∖ Z; ℤ), with Z the zero section, and restricts to each fibre’s orientation generator. The Euler class is its pullback along the zero section. For a submanifold M, the normal bundle’s Thom class is the Poincaré dual of M, seen in a tubular neighbourhood.

**Problem.** Let M be a closed oriented m-manifold smoothly embedded in a closed oriented 2m-manifold W. The self-intersection number of M equals the Euler class of its normal bundle, evaluated on \[M\].

**How the definition helps.** The self-intersection number is the Poincaré dual of M restricted to M and evaluated on \[M\]. In a tubular neighbourhood that dual is the normal Thom class, and restricting to M pulls it back along the zero section, giving the normal Euler class (our own proof).

**Wikipedia:** [Euler class](https://en.wikipedia.org/wiki/Euler_class). It says: “if Y is a compact submanifold, then the Euler class of the normal bundle of Y in X is naturally identified with the self-intersection of Y in X.”

**Sources:**

- [John W. Milnor and James D. Stasheff, Characteristic Classes (1974)](https://press.princeton.edu/books/paperback/9780691081229/characteristic-classes)

### Thom-class Euler classes vanish for bundles with nowhere-zero sections

**Remember:** A section avoiding the zero section pulls the Thom class to zero.

*True by definition.* MSC 57R20 (Characteristic classes and numbers in differential topology), 55R25. arXiv math.AT, math.GT. Level 3: graduate.

**Definition.** The Euler class e(E) of an oriented real vector bundle E over X is the Thom class u pulled back to X along the zero section. Here u is the class of E relative to E ∖ E₀, the complement of the zero section, that restricts to the orientation generator on each fibre.

**Problem.** If an oriented real vector bundle has a section that is nowhere zero, its Euler class is zero.

**How the definition helps.** Scaling shows that every section is homotopic to the zero section, so every section pulls u back to e(E). A nowhere-zero section maps X into E ∖ E₀, where u restricts to zero by the exact sequence of the pair, so e(E) = 0 (our own proof).

**Wikipedia:** [Euler class](https://en.wikipedia.org/wiki/Euler_class). It says: “If E possesses a nowhere-zero section, then e(E) = 0.”

**Sources:**

- [John W. Milnor and James D. Stasheff, Characteristic Classes (1974), §9, Property 9.7](https://press.princeton.edu/books/paperback/9780691081229/characteristic-classes)

### Thom’s Steenrod-square definition bounds Stiefel–Whitney classes by rank

**Remember:** Square the Thom class, then pull back through the Thom isomorphism.

*True by definition.* MSC 57R20 (Characteristic classes and numbers in differential topology), 55S10. arXiv math.AT. Level 3: graduate.

**Definition.** Thom defines the Stiefel–Whitney classes of a rank-n real vector bundle E by wᵢ(E) = Φ⁻¹(Sqⁱ(u)): apply the Steenrod square Sqⁱ to the mod 2 Thom class u, of degree n, and undo the Thom isomorphism Φ. On a class of degree n, Sq⁰ is the identity, Sqⁿ is the cup square, and Sqⁱ is zero for i &gt; n.

**Problem.** For a real vector bundle E of rank n, wᵢ(E) = 0 for i &gt; n and w₀(E) = 1. The top class wₙ(E) is the mod 2 Euler class.

**How the definition helps.** The three facts about Steenrod squares on the degree-n class u give the three claims. Sqⁱ(u) = 0 for i &gt; n gives wᵢ = 0, and Sq⁰(u) = u gives w₀ = 1. Sqⁿ(u) = u ⌣ u, which Φ⁻¹ sends to the mod 2 Euler class, since the zero section pulls u back to that class (our own calculation).

**Wikipedia:** [Thom space](https://en.wikipedia.org/wiki/Thom_space), [Euler class](https://en.wikipedia.org/wiki/Euler_class). It says: “We can define the ith Stiefel–Whitney class wᵢ(p) of the vector bundle p: E → B by: wᵢ(p) = Φ⁻¹(Sqⁱ(Φ(1))) = Φ⁻¹(Sqⁱ(u)).”

**Sources:**

- [Thom, R. (1952). Espaces fibrés en sphères et carrés de Steenrod. Annales scientifiques de l'École normale supérieure 69, 109–182.](https://doi.org/10.24033/asens.998)

### Wu classes make tangent Stiefel–Whitney classes homotopy invariant

**Remember:** Wu classes represent Steenrod squares under cup product.

*True by definition.* MSC 57R20 (Characteristic classes and numbers in differential topology), 55S10. arXiv math.AT. Level 3: graduate.

**Definition.** On a closed smooth n-manifold M, the Wu class vₖ is the unique mod 2 class of degree k with vₖ ⌣ x = Sqᵏ(x) for every class x of degree n − k. It is built only from cup products and Steenrod squares, which a homotopy equivalence preserves.

**Problem.** A homotopy equivalence between closed smooth manifolds pulls back the Stiefel–Whitney classes of one tangent bundle to those of the other.

**How the definition helps.** Since the definition uses only cup products and Steenrod squares, a homotopy equivalence carries Wu classes to Wu classes (our own argument). Wu's theorem gives the total tangent Stiefel–Whitney class as w = Sq(v), the total Steenrod square of the Wu classes. Steenrod squares commute with pullback, so w is invariant too.

**nLab:** [Wu class](https://ncatlab.org/nlab/show/Wu+class). It says: “is defined to be the class that "represents" Sqᵏ(−) under the cup product”

**Wikipedia:** [Thom space](https://en.wikipedia.org/wiki/Thom_space), [Stiefel–Whitney class](https://en.wikipedia.org/wiki/Stiefel%E2%80%93Whitney_class). It says: “since the Steenrod operations are invariant under homotopy equivalence, we conclude that the Stiefel–Whitney classes of a manifold are as well.”

**Sources:**

- [Thom, R. (1952). Espaces fibrés en sphères et carrés de Steenrod. Annales scientifiques de l'École normale supérieure 69, 109–182.](https://doi.org/10.24033/asens.998)

### Defining flows as ℝ-actions makes each time map a diffeomorphism

**Remember:** Running the action backwards undoes running it forwards.

*True by definition.* MSC 57R25 (Vector fields, frame fields in differential topology), 37C10. arXiv math.DG, math.DS. Level 3: graduate.

**Definition.** A global flow on a smooth manifold M is a smooth action of the additive group ℝ on M: a smooth map φ: ℝ × M → M, written φₜ(x) = φ(t, x), with φ₀ = id and φₛ ∘ φₜ = φₛ₊ₜ for all real s and t.

**Problem.** Each time map φₜ of a global flow is a diffeomorphism, with inverse φ₋ₜ.

**How the definition helps.** The action law gives φₜ ∘ φ₋ₜ = φ₀ = φ₋ₜ ∘ φₜ, and φ₀ is the identity. Both maps are smooth, being restrictions of φ (our own proof).

**nLab:** [flow of a vector field](https://ncatlab.org/nlab/show/flow+of+a+vector+field). It says: “This yields an action of the additive group (ℝ,+) of real numbers on the differentiable manifold X by diffeomorphisms”

**Sources:** none listed. No primary source with a working link was found.

### Defining indices by the Thom class reduces Poincaré–Hopf to Euler class evaluation

**Remember:** The Euler class, pulled back by the field, splits over its zeros.

*True by definition. Confidence: medium.* MSC 57R25 (Vector fields, frame fields in differential topology), 57R20, 55M25. arXiv math.GT, math.AT. Level 3: graduate.

**Definition.** The index of an isolated zero p of a vector field v on a closed oriented manifold is the local share of the pulled-back Thom class. Pull the tangent Thom class back by v and evaluate it on \[B, ∂B\], for a small oriented ball B around p containing no other zero.

**Problem.** For a vector field with isolated zeros on a closed oriented manifold, the indices sum to the Euler characteristic.

**How the definition helps.** The pulled-back Thom class lives on M relative to the complement of the zeros, so excision splits its value into the local indices (our own argument). Scaling v to zero shows that its absolute image is the Euler class. The tangent Euler class evaluates to χ(M) on \[M\].

**nLab:** [Euler class](https://ncatlab.org/nlab/show/Euler+class). It says: “The Euler class of the tangent bundle of a smooth manifold X, evaluated on its fundamental class, is its Euler characteristic χ\[X\].”

**Sources:**

- [John W. Milnor, Topology from the Differentiable Viewpoint, §§5–6](https://press.princeton.edu/books/paperback/9780691048338/topology-from-the-differentiable-viewpoint)
- [John W. Milnor and James D. Stasheff, Characteristic Classes (1974)](https://press.princeton.edu/books/paperback/9780691081229/characteristic-classes)

### Defining the bracket as a commutator makes related fields have related brackets

**Remember:** If fields intertwine with pullback, so do their commutators.

*True by definition. Confidence: medium.* MSC 57R25 (Vector fields, frame fields in differential topology), 17B66. arXiv math.DG. Level 3: graduate.

**Definition.** Treat a vector field as a derivation, an operator on smooth functions that obeys the product rule, and set \[X, Y\] = XY − YX. Fields X on M and X′ on N are F-related when they intertwine pullback: X(f ∘ F) = (X′f) ∘ F for every smooth f on N.

**Problem.** Let F: M → N be smooth. If X is F-related to X′ and Y is F-related to Y′, then \[X, Y\] is F-related to \[X′, Y′\].

**How the definition helps.** Intertwining passes through products of operators: XY(f ∘ F) = X((Y′f) ∘ F) = (X′Y′f) ∘ F. The same holds for YX, and subtracting gives the bracket identity (our own proof).

**nLab:** [Lie bracket of vector fields](https://ncatlab.org/nlab/show/Lie+bracket+of+vector+fields). It says: “Taking the commutator uv−vu of these derivations produces another derivation”

**Sources:** none listed. No primary source with a working link was found.

### Defining the Lie derivative by flows makes zero derivative mean invariance

**Remember:** Zero change at time zero means zero change at all times.

*True by definition. Confidence: medium.* MSC 57R25 (Vector fields, frame fields in differential topology), 37C10. arXiv math.DG. Level 3: graduate.

**Definition.** The Lie derivative of a tensor field T along a vector field X is the rate at which T changes under the flow φₜ of X: the derivative at t = 0 of the pullback φₜ\*T.

**Problem.** Let X be a complete vector field. If the Lie derivative of T along X is zero, then every flow map φₜ preserves T.

**How the definition helps.** By the flow law φₜ₊ₛ\*T = φₜ\*(φₛ\*T), the derivative of φₜ\*T at any time t is φₜ\* of the Lie derivative (our own proof). If the Lie derivative is zero, φₜ\*T is constant in t, so it equals φ₀\*T = T.

**Wikipedia:** [Lie derivative](https://en.wikipedia.org/wiki/Lie_derivative). It says: “The Lie derivative is the speed with which the tensor field changes under the space deformation caused by the flow.”

**Sources:** none listed. No primary source with a working link was found.

### The outward-boundary condition is what makes Poincaré–Hopf hold on manifolds with boundary

**Remember:** Point outward at the edge, and zeros count the Euler characteristic.

*Rules out counterexamples. Confidence: medium.* MSC 57R25 (Vector fields, frame fields in differential topology), 55M25. arXiv math.DG, math.AT. Level 3: graduate.

**Definition.** A vector field on a compact manifold with boundary points outward if it points strictly out of the manifold at every boundary point. The index of an isolated interior zero is the degree of the field, scaled to unit length, on a small sphere around that zero.

**Problem.** Let v be a vector field with isolated zeros on a compact manifold M that points outward along the boundary. Then the indices of v sum to the Euler characteristic χ(M).

**How the definition helps.** The straight-line homotopy between two outward fields stays outward, so no zero crosses the boundary and the total index stays fixed. An outward Morse gradient has index sum χ(M) by Morse theory (our own argument). Without the condition the theorem fails: a constant field on a disk has no zeros, yet the disk has χ = 1 (our own example).

**Wikipedia:** [Poincaré–Hopf theorem](https://en.wikipedia.org/wiki/Poincar%C3%A9%E2%80%93Hopf_theorem). It says: “If M has a boundary, then we insist that v be pointing in the outward normal direction along the boundary and have no zeros on the boundary.”

**Sources:** none listed. No primary source with a working link was found.

### Defining submersions as local projections gives local sections immediately

**Remember:** Freeze the discarded coordinates to get a local section.

*True by definition. Confidence: medium.* MSC 57R35 (Differentiable mappings in differential topology), 58A05. arXiv math.DG, math.GT. Level 3: graduate.

**Definition.** A submersion f: X → Y is a map that is locally a coordinate projection: near each point, some charts make it (x₁, …, xₙ) ↦ (x₁, …, xₘ). By the rank theorem, this agrees with the usual definition, that the derivative is onto at every point.

**Problem.** A submersion f: X → Y has a local section through every point. For each x in X there is a smooth map s near f(x) with f ∘ s the identity and s(f(x)) = x.

**How the definition helps.** A projection has an obvious section that puts the discarded coordinates back as zero. In charts centred at x, set s(x₁, …, xₘ) = (x₁, …, xₘ, 0, …, 0) (our own proof). With the derivative definition, the work moves into the rank theorem, which builds projection charts from the inverse function theorem.

**nLab:** [submersion](https://ncatlab.org/nlab/show/submersion). It says: “In terms of coordinates, the map f is a submersion at a point p : X if and only if there exists a coordinate chart on X near p and a coordinate chart on Y near f(p) relative to which f is the projection f(x₁,…,xₙ) = (x₁,…,xₘ).”

**Sources:** none listed. No primary source with a working link was found.

### Defining submersions as local projections gives local sections that detect smoothness

**Remember:** Test smoothness downstairs by composing with a local section.

*True by definition. Confidence: medium.* MSC 57R35 (Differentiable mappings in differential topology). arXiv math.DG. Level 3: graduate.

**Definition.** A smooth map p is a submersion if, near each point, suitable charts turn it into a coordinate projection, so p has smooth local sections that fix the coordinates p forgets. The derivative definition, that dp is onto at each point, agrees with this by the submersion theorem.

**Problem.** Let p from M to N be a surjective submersion, and let h be a map from N to a smooth manifold. If h ∘ p is smooth, then h is smooth.

**How the definition helps.** Near p(x), h equals (h ∘ p) ∘ s for a local section s through x, so h is smooth there (our own step). Surjectivity gives such a point x over every point of N. With the derivative definition, local sections come only after the submersion theorem (our own comparison).

**Wikipedia:** [Submersion (mathematics)](https://en.wikipedia.org/wiki/Submersion_%28mathematics%29). It says: “the map f in these local coordinates is the standard projection”

**Sources:** none listed. No primary source with a working link was found.

### Defining submersions as local projections makes them stable under pullback

**Remember:** Pulling back a projection keeps the extra coordinates free.

*True by definition. Confidence: medium.* MSC 57R35 (Differentiable mappings in differential topology), 58A05. arXiv math.DG. Level 3: graduate.

**Definition.** A smooth map p: E → B is a submersion if, near each point, suitable charts turn it into a projection U × V → U that forgets the V coordinates. The derivative definition, that dp is onto everywhere, agrees with this by the submersion theorem.

**Problem.** Let p: E → B be a submersion and f: A → B any smooth map. Then the fibre product of all pairs (a, e) with f(a) = p(e) is a smooth manifold, and its projection to A is a submersion.

**How the definition helps.** Over a projection chart U × V → U, the fibre product is locally f⁻¹(U) × V, a product of manifolds (our own proof). These local products give the fibre product its smooth structure. The projection to A forgets V, so it is again a projection.

**nLab:** [submersion](https://ncatlab.org/nlab/show/submersion). It says: “Moreover, submersions are stable under pullback.”

**Sources:** none listed. No primary source with a working link was found.

### Diagonal transversality makes the fibre product of two maps smooth

**Remember:** Equal outputs are the preimage of the diagonal.

*True by definition. Confidence: medium.* MSC 57R35 (Differentiable mappings in differential topology), 58A05. arXiv math.GT, math.DG. Level 3: graduate.

**Definition.** Maps f: X → Z and g: Y → Z are transverse when, wherever f(x) = g(y), the images of their derivatives together span the tangent space of Z there. Equivalently, f × g: X × Y → Z × Z is transverse to the diagonal Δ of pairs (z, z), whose preimage is exactly the set of pairs with f(x) = g(y).

**Problem.** Let f: X → Z and g: Y → Z be transverse maps between manifolds without boundary. Then the pairs (x, y) with f(x) = g(y) form a submanifold of X × Y, of dimension dim X + dim Y − dim Z when nonempty.

**How the definition helps.** The diagonal form turns the theorem into the preimage theorem for one map and one submanifold. The set of pairs is (f × g)⁻¹(Δ), so it is a submanifold whose codimension is that of Δ, namely dim Z (our own proof). The two forms agree because the normal space of Δ at (z, z) is a copy of the tangent space of Z, by (a, b) ↦ a − b.

**nLab:** [transversal maps](https://ncatlab.org/nlab/show/transversal+maps). It says: “the differentials of f and g in these points span the entire tangent space at z”

**Sources:** none listed. No primary source with a working link was found.

### Properness is the condition that makes a submersion a fibre bundle

**Remember:** Proper submersions cannot lose points to infinity, so fibres stay alike.

*Rules out counterexamples.* MSC 57R35 (Differentiable mappings in differential topology), 57R22. arXiv math.DG, math.GT. Level 3: graduate.

**Definition.** A submersion f: M → N, a smooth map whose derivative is onto everywhere, is proper if the preimage of every compact set is compact. So no part of a fibre can escape to infinity.

**Problem.** By Ehresmann’s theorem, a surjective proper submersion between smooth manifolds without boundary is a locally trivial smooth fibre bundle. All fibres over a connected base are then diffeomorphic.

**How the definition helps.** Properness lets vector fields lifted from the base flow long enough to carry one fibre onto nearby ones, which gives local trivializations (our own sketch). Without it, project the plane minus the origin to the x-axis (our own example). That is a surjective submersion, but the fibre over 0 is two half-lines and the other fibres are whole lines.

**Wikipedia:** [Ehresmann's lemma](https://en.wikipedia.org/wiki/Ehresmann%27s_lemma). It says: “a proper map (in particular, this condition is always satisfied if M is compact), then it is a locally trivial fibration.”

**Sources:** none listed. No primary source with a working link was found.

### Defining embeddings as homeomorphic immersions makes proper injective immersions embeddings

**Remember:** Immersion for the derivative, homeomorphism onto the image for the topology.

*True by definition.* MSC 57R40 (Embeddings in differential topology), 58A05. arXiv math.DG, math.GT. Level 3: graduate.

**Definition.** An embedding is an immersion, a smooth map whose derivative is injective at every point, that is also a homeomorphism onto its image with the subspace topology.

**Problem.** A proper injective immersion, one where preimages of compact sets are compact, is an embedding with closed image.

**How the definition helps.** The immersion part is given, so only a point-set fact remains (our own proof). A proper continuous map into a manifold is closed, since manifolds are locally compact and Hausdorff. A closed continuous injection is a homeomorphism onto its image, and that image is closed.

**nLab:** [embedding of differentiable manifolds](https://ncatlab.org/nlab/show/embedding+of+differentiable+manifolds). It says: “proper injective immersions are equivalently the closed embeddings”

**Sources:** none listed. No primary source with a working link was found.

### Defining injective immersions by jet conditions makes embeddings dense in high dimension

**Remember:** Generic maps miss bad sets of high codimension.

*True by definition. Confidence: medium.* MSC 57R40 (Embeddings in differential topology), 57R45. arXiv math.GT, math.DG. Level 3: graduate.

**Definition.** For a compact manifold M of dimension m, a smooth map f: M → N is an embedding exactly when it avoids two bad sets. Its first jet never has rank below m, and its values at distinct points never lie on the diagonal of N × N.

**Problem.** Let M be a compact manifold of dimension m without boundary, and N a manifold of dimension n &gt; 2m. Then smooth embeddings are dense among smooth maps M → N.

**How the definition helps.** Jet and multijet transversality make a dense set of maps transverse to both bad sets (our own argument). The rank-deficient jets have codimension n − m + 1 &gt; m, and the diagonal has codimension n &gt; 2m among pairs of points. A transverse preimage whose codimension exceeds the source dimension is empty.

**Wikipedia:** [Whitney embedding theorem](https://en.wikipedia.org/wiki/Whitney_embedding_theorem). It says: “any continuous function from an n-dimensional manifold to an m-dimensional manifold may be approximated by a smooth embedding provided m &gt; 2n”

**Sources:**

- [Hassler Whitney, Differentiable Manifolds (1936), pp. 645–680](https://doi.org/10.2307/1968482)
- [Martin Golubitsky and Victor Guillemin, Stable Mappings and Their Singularities (1973), Chapter II, Transversality](https://doi.org/10.1007/978-1-4615-7904-5_2)

### Defining normal bundles as quotients gives the exact sequence for nested submanifolds

**Remember:** Nested tangent spaces give nested quotients that fit together exactly.

*True by definition. Confidence: medium.* MSC 57R40 (Embeddings in differential topology), 57R22. arXiv math.DG, math.GT. Level 3: graduate.

**Definition.** The normal bundle of a submanifold X in Y is the quotient of TY restricted to X by TX: at each point, the tangent vectors of Y modulo those tangent to X.

**Problem.** Let X ⊂ Y ⊂ Z be embedded submanifolds. The normal bundle of X in Y injects into the normal bundle of X in Z. The quotient is the normal bundle of Y in Z, restricted to X.

**How the definition helps.** At each point the theorem is the third isomorphism theorem (TZ/TX)/(TY/TX) ≅ TZ/TY for TX ⊂ TY ⊂ TZ. Slice charts show that these maps vary smoothly (our own account). With perpendicular vectors, the bundles depend on a metric and the maps need orthogonal projections.

**nLab:** [normal bundle](https://ncatlab.org/nlab/show/normal+bundle). It says: “The normal bundle is fiberwise the quotient of the fiber of the tangent bundle of Y by the fiber of the tangent bundle of X”

**Sources:** none listed. No primary source with a working link was found.

### Defining normal bundles as quotients makes transverse preimages pull them back

**Remember:** The derivative, taken modulo tangent directions, carries normals to normals.

*True by definition. Confidence: medium.* MSC 57R40 (Embeddings in differential topology), 57R22. arXiv math.DG, math.GT. Level 3: graduate.

**Definition.** The normal bundle of a submanifold Z of N is TN restricted to Z, modulo TZ. A map f: M → N is transverse to Z when, at each point of f⁻¹(Z), the image of df and TZ together span TN, so df followed by the quotient map is onto the normal space.

**Problem.** Let f: M → N be transverse to Z, and let W be the inverse image of Z. Then the normal bundle of W in M is isomorphic to the pullback by f of the normal bundle of Z.

**How the definition helps.** On W = f⁻¹(Z), compose df with the quotient by TZ; transversality makes this onto each normal fibre (our own proof). The preimage theorem identifies its kernel with TW. So it induces a smooth bundle isomorphism from the normal bundle of W to the pullback of the normal bundle of Z.

**nLab:** [normal bundle](https://ncatlab.org/nlab/show/normal+bundle). It says: “The normal bundle is fiberwise the quotient of the fiber of the tangent bundle of Y by the fiber of the tangent bundle of X”

**Sources:** none listed. No primary source with a working link was found.

### Defining normal bundles as tangent quotients makes them independent of metric

**Remember:** Normal vectors are tangent vectors modulo the submanifold's own directions.

*True by definition. Confidence: medium.* MSC 57R40 (Embeddings in differential topology), 57R22. arXiv math.DG, math.GT. Level 3: graduate.

**Definition.** The normal bundle of an embedded submanifold X of Y is TY restricted to X, modulo TX, and it uses no metric. For any Riemannian metric, the vectors perpendicular to TX meet each coset in exactly one vector.

**Problem.** For any two Riemannian metrics on Y, the two perpendicular bundles of X are canonically isomorphic.

**How the definition helps.** Each perpendicular bundle maps isomorphically and smoothly onto the quotient, because each coset has exactly one perpendicular representative (our own argument). Composing one of these isomorphisms with the inverse of the other gives the canonical isomorphism.

**nLab:** [normal bundle](https://ncatlab.org/nlab/show/normal+bundle). It says: “The normal bundle is fiberwise the quotient of the fiber of the tangent bundle of Y by the fiber of the tangent bundle of X”

**Sources:** none listed. No primary source with a working link was found.

### Defining submanifolds by slice charts makes restricting the target smooth

**Remember:** To read a map into a slice, drop the zero coordinates.

*True by definition. Confidence: medium.* MSC 57R40 (Embeddings in differential topology), 58A05. arXiv math.DG, math.GT. Level 3: graduate.

**Definition.** An embedded submanifold S of M is a subset that, near each of its points, is a coordinate slice of a chart of M, the set where the last few coordinates are zero. Dropping those zero coordinates gives the charts of S.

**Problem.** Let F: N → M be smooth with image inside an embedded submanifold S. Then F is smooth as a map into S.

**How the definition helps.** F is continuous into S, because S has the subspace topology (our own proof). In a slice chart, F into S is F into M followed by dropping the zero coordinates, so it is smooth.

**nLab:** [embedding of differentiable manifolds](https://ncatlab.org/nlab/show/embedding+of+differentiable+manifolds). It says: “For each point σ ∈ Σ there is a coordinate chart”

**Sources:** none listed. No primary source with a working link was found.

### Defining field theories as functors makes mapping torus values traces

**Remember:** Closing a cylinder takes the trace of its map.

*True by definition.* MSC 57R56 (Topological quantum field theories (aspects of differential topology)). arXiv math.QA, math.GT. Level 3: graduate.

**Definition.** An oriented topological field theory is a symmetric monoidal functor Z from oriented bordisms to vector spaces. It turns gluing of bordisms into composition of linear maps, and disjoint union into tensor product.

**Problem.** Let f be an orientation-preserving diffeomorphism of a closed manifold Σ, and let T(f) be its mapping torus, Σ × \[0, 1\] with the two ends glued by f. Then Z(T(f)) is the trace of the linear map Z(f) on Z(Σ).

**How the definition helps.** Gluing the two ends of a cylinder becomes a trace, because the bent cylinders make Z of Σ with reversed orientation the dual of Z(Σ) (our own explanation). The mapping torus is the cylinder of f composed with these two bent cylinders. Applying Z gives coevaluation, then Z(f), then evaluation, which is the trace of Z(f) (our own).

**Wikipedia:** [Topological quantum field theory](https://en.wikipedia.org/wiki/Topological_quantum_field_theory). It says: “Z(Σf) = Trace Σ(f)”

**Sources:**

- [Michael Atiyah, Topological quantum field theory (1988)](https://doi.org/10.1007/BF02698547)

### Every map between topological field theories is invertible

**Remember:** With duals everywhere, you can run every map of theories backwards.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 57R56 (Topological quantum field theories (aspects of differential topology)), 18M05. arXiv math.QA, math.AT. Level 3: graduate.

**Definition.** A fully extended framed n-dimensional TQFT with values in a symmetric monoidal (∞,n)-category 𝒞 is a symmetric monoidal functor from framed bordisms Bordₙ to 𝒞. A morphism of theories is a symmetric monoidal natural transformation, so it must commute with the duality maps that bent bordisms give (our own).

**Problem.** Every morphism between two framed n-dimensional TQFTs with values in 𝒞 is invertible. So two such theories are either equivalent or have no morphism between them.

**How the definition helps.** The cobordism hypothesis identifies these theories, by evaluation at a point, with the ∞-groupoid of fully dualizable objects of 𝒞 (our own explanation). In a groupoid, every morphism is invertible.

**nLab:** [cobordism hypothesis](https://ncatlab.org/nlab/show/cobordism+hypothesis). It says: “In particular, any two of them are either equivalent or have no morphism between them.”

**Sources:**

- [Jacob Lurie, On the Classification of Topological Field Theories, Current Developments in Mathematics 2008 (2009) 129–280, arXiv:0905.0465](https://arxiv.org/abs/0905.0465)

### Functorial field theories have finite-dimensional state spaces through bordism duality

**Remember:** Bent cylinders make a dual, and duals in vector spaces are finite.

*True by definition. Confidence: medium.* MSC 57R56 (Topological quantum field theories (aspects of differential topology)). arXiv math.QA, math.GT. Level 3: graduate.

**Definition.** An oriented topological field theory is a symmetric monoidal functor Z from oriented bordisms to vector spaces over a field. The bent cylinders on Σ become evaluation and coevaluation maps between Z(Σ) and Z of Σ reversed, which satisfy the zigzag identities (our own).

**Problem.** Every state space Z(Σ) of such a field theory is finite-dimensional, although the target allows all vector spaces.

**How the definition helps.** A vector space with such a pair of maps is finite-dimensional (our own argument). Coevaluation sends 1 to a finite sum ∑ aᵢ ⊗ bᵢ. The zigzag identity then writes every state as a combination of the finitely many aᵢ.

**nLab:** [functorial field theory](https://ncatlab.org/nlab/show/functorial+field+theory). It says: “For genuine topological field theories, all spaces of quantum states are finite dimensional”

**Sources:**

- [Michael Atiyah, Topological quantum field theory (1988)](https://doi.org/10.1007/BF02698547)

### Quadratic refinements make spin signs multiply

**Remember:** Connected sum puts the two quadratic forms side by side.

*True by definition.* MSC 57R56 (Topological quantum field theories (aspects of differential topology)). arXiv math.AT. Level 3: graduate.

**Definition.** A spin structure on a closed oriented surface gives a quadratic refinement q of the mod 2 intersection form on first homology: q(x + y) = q(x) + q(y) + x·y. Its Arf invariant is ∑ᵢ q(aᵢ)q(bᵢ) mod 2 for any symplectic basis (aᵢ, bᵢ), and the theory assigns the sign (−1) to the power Arf(q).

**Problem.** For closed connected spin surfaces Σ and Σ′, the Arf sign of Σ \# Σ′ equals the product of their Arf signs.

**How the definition helps.** For a connected sum, the two symplectic bases together form a symplectic basis, since curves on opposite sides of the joining circle do not meet (our own check). So the Arf invariants add mod 2 and the signs multiply. The geometric input is that spin structures correspond to these refinements, compatibly with gluing.

**Wikipedia:** [Arf invariant](https://en.wikipedia.org/wiki/Arf_invariant). It says: “The Arf invariant Arf(q) is defined to be the sum of the Arf invariants of the qᵢ.”

**Sources:**

- [Johnson, Spin Structures and Quadratic forms on Surfaces](https://math.mit.edu/~hrm/palestine/johnson-spin-structures.pdf)
- [Runkel and Szegedy, Topological field theory on r-spin surfaces and the Arf-invariant](https://research-explorer.ista.ac.at/record/10176)

### Sphere lines make connected sums multiply

**Remember:** Divide by the sphere to cancel the gluing scalar.

*True by definition.* MSC 57R56 (Topological quantum field theories (aspects of differential topology)). arXiv math.AT. Level 3: graduate.

**Definition.** Let Z be an oriented n-dimensional topological field theory over a field, with n ≥ 2, with Z(Sⁿ⁻¹) one-dimensional and Z(Sⁿ) ≠ 0, and set F(M) = Z(M)/Z(Sⁿ). Dividing by the sphere cancels the scalar that the line Z(Sⁿ⁻¹) introduces when two punctured manifolds are glued (our own).

**Problem.** For closed connected oriented n-manifolds M and N, the normalized value satisfies F(M \# N) = F(M)F(N).

**How the definition helps.** Cut a ball from each manifold: the punctured manifolds give a vector and a functional on the line Z(Sⁿ⁻¹), and the two balls pair to Z(Sⁿ) (our own calculation). Since the line is one-dimensional, this gives Z(Sⁿ)Z(M \# N) = Z(M)Z(N). Dividing by Z(Sⁿ)² gives F(M \# N) = F(M)F(N).

**Paper or page:** [Turaev-Viro TQFT and the Rank versus Genus Conjecture](https://arxiv.org/abs/2206.02650v1). It says: “Z(Sⁿ) Z(M) = Z(M₀) Z(M₁).”

**Sources:**

- [Turaev-Viro TQFT and the Rank versus Genus Conjecture](https://arxiv.org/abs/2206.02650v1)

### Two-dimensional topological field theories are commutative Frobenius algebras

**Remember:** The circle is a Frobenius algebra, so its image is one too.

*Makes the theorem clean to state or prove.* MSC 57R56 (Topological quantum field theories (aspects of differential topology)), 18M05. arXiv math.QA, math.AT. Level 3: graduate.

**Definition.** A 2d TQFT is a symmetric monoidal functor Z to vector spaces from 2Cob, whose objects are unions of circles and whose morphisms are oriented surfaces between them. In 2Cob the circle is a commutative Frobenius algebra, with the pair of pants as product and the cap as trace.

**Problem.** Two-dimensional TQFTs are equivalent to commutative Frobenius algebras. The equivalence sends Z to Z(S¹) with the product from the pair of pants and the trace from the cap.

**How the definition helps.** Abrams proved that 2Cob is generated by the circle with these operations, subject exactly to the commutative Frobenius algebra relations. So a symmetric monoidal functor is the same as the commutative Frobenius algebra Z(S¹) (our own explanation). The relations make the value independent of how a surface is cut into pieces.

**nLab:** [Frobenius algebra](https://ncatlab.org/nlab/show/Frobenius+algebra), [functorial field theory](https://ncatlab.org/nlab/show/functorial+field+theory). It says: “The PROP for commutative Frobenius algebras is 2Cob, as noted by many people and formally proved in Abrams (1996).”

**Sources:**

- [Lowell Abrams, Two-dimensional topological quantum field theories and Frobenius algebras, J. Knot Theory Ramifications 5 (1996) 569–587](https://doi.org/10.1142/S0218216596000333)
- [Joachim Kock, Frobenius Algebras and 2D Topological Quantum Field Theories, Cambridge University Press (2004)](http://mat.uab.cat/~kock/TQFT.html)

### Counting homotopy spheres up to h-cobordism makes them a finite group

**Remember:** Group spheres by h-cobordism, and connected sum gives inverses.

*Makes the theorem clean to state or prove.* MSC 57R60 (Homotopy spheres, Poincaré conjecture), 57R80. arXiv math.GT, math.AT. Level 3: graduate.

**Definition.** An oriented homotopy n-sphere is a closed oriented smooth manifold homotopy equivalent to Sⁿ. Θₙ is the set of these up to oriented h-cobordism, a compact oriented cobordism whose two boundary inclusions are homotopy equivalences, with connected sum as the operation.

**Problem.** Kervaire and Milnor showed that Θₙ is a finite abelian group for every n ≠ 3. For example, Θ₇ has order 28, so there are 28 oriented smooth structures on the 7-sphere.

**How the definition helps.** Up to h-cobordism, M \# (−M) is the standard sphere, so connected sum has inverses and Θₙ is a group (our own explanation). Kervaire and Milnor proved finiteness and computed that Θ₇ has order 28. In dimension seven, the h-cobordism theorem turns h-cobordism classes into oriented diffeomorphism classes.

**Wikipedia:** [Exotic sphere](https://en.wikipedia.org/wiki/Exotic_sphere). It says: “Provided n ≠ 4, this monoid is a group and is isomorphic to the group Θₙ of h-cobordism classes of oriented homotopy n-spheres, which is finite and abelian.”

**Sources:**

- [Michel A. Kervaire and John W. Milnor, Groups of homotopy spheres I, Annals of Mathematics 77 (1963) 504–537](https://doi.org/10.2307/1970128)

### Homotopy spheres are the right hypothesis for the higher Poincaré conjecture

**Remember:** Ask for the sphere's homotopy type, not just simple connectivity.

*Rules out counterexamples.* MSC 57R60 (Homotopy spheres, Poincaré conjecture). arXiv math.GT. Level 3: graduate.

**Definition.** A homotopy n-sphere is a closed n-manifold, compact and without boundary, that is homotopy equivalent to Sⁿ, so it has all of the sphere's homotopy type, not just simple connectivity. Homotopy equivalent means that there are maps both ways whose composites deform to the identity maps.

**Problem.** Every homotopy n-sphere is homeomorphic to the n-sphere (the generalized Poincaré theorem).

**How the definition helps.** From dimension 4 on, simple connectivity does not pick out the sphere: S² × S² is simply connected but has nonzero second homology (our own example). With the homotopy-sphere hypothesis, Smale proved the theorem for n ≥ 5 and Freedman for n = 4. In dimension 3, simple connectivity is already enough.

**Wikipedia:** [Poincaré conjecture](https://en.wikipedia.org/wiki/Poincar%C3%A9_conjecture), [Homotopy sphere](https://en.wikipedia.org/wiki/Homotopy_sphere). It says: “A stronger assumption than simply-connectedness is necessary; in dimensions four and higher there are simply-connected, closed manifolds which are not homotopy equivalent to an n-sphere.”

**Sources:**

- [S. Smale, Generalized Poincaré's conjecture in dimensions greater than four, Annals of Mathematics 74 (1961) 391–406](https://doi.org/10.2307/1970239)

### The generalized Poincaré conjecture asks for homeomorphism, not diffeomorphism

**Remember:** Exotic spheres are topological spheres, not smooth ones.

*Rules out counterexamples.* MSC 57R60 (Homotopy spheres, Poincaré conjecture), 57R55. arXiv math.GT. Level 3: graduate.

**Definition.** A homeomorphism is a continuous bijection with continuous inverse, while a diffeomorphism must be smooth both ways. An exotic n-sphere is a smooth manifold homeomorphic to Sⁿ but not diffeomorphic to it, so a smooth conclusion would fail.

**Problem.** Every homotopy n-sphere, a closed n-manifold with the homotopy type of the n-sphere, is homeomorphic to the n-sphere.

**How the definition helps.** Milnor's exotic 7-spheres are homotopy spheres that are not diffeomorphic to S⁷, so they rule out a smooth conclusion. They are still homeomorphic to S⁷, as the topological statement says.

**Wikipedia:** [Exotic sphere](https://en.wikipedia.org/wiki/Exotic_sphere), [Homotopy sphere](https://en.wikipedia.org/wiki/Homotopy_sphere). It says: “At first, I thought I'd found a counterexample to the generalized Poincaré conjecture in dimension seven. But careful study showed that the manifold really was homeomorphic to S⁷.”

**Sources:**

- [J. Milnor, On manifolds homeomorphic to the 7-sphere, Annals of Mathematics 64 (1956) 399–405](https://doi.org/10.2307/1969983)
- [M. Kervaire and J. Milnor, Groups of homotopy spheres I, Annals of Mathematics 77 (1963) 504–537](https://doi.org/10.2307/1970128)

### Defining homology by the Morse complex makes critical counts give Euler characteristic

**Remember:** Alternating sums of chain ranks and homology ranks agree.

*True by definition. Confidence: medium.* MSC 57R70 (Critical points and critical submanifolds in differential topology), 58E05. arXiv math.GT, math.AT. Level 3: graduate.

**Definition.** Over a fixed field, the Morse complex of a Morse function on a closed manifold has one basis vector in degree k for each critical point of index k. Its differential counts, with signs from coherent orientations, the unparametrized negative gradient trajectories of a Morse–Smale gradient between critical points whose indices differ by one.

**Problem.** For a Morse function on a closed manifold, let cₖ be the number of critical points of index k. Then the alternating sum of the cₖ equals the Euler characteristic.

**How the definition helps.** The Morse complex is a finite chain complex with ranks cₖ, and the Morse homology theorem identifies its homology with singular homology. For any finite complex over a field, the alternating sum of chain ranks equals that of homology ranks. By rank–nullity, the ranks of the boundary maps cancel in pairs (our own proof).

**Wikipedia:** [Morse homology](https://en.wikipedia.org/wiki/Morse_homology). It says: “the boundary maps in the Morse and cellular complexes correspond”

**Paper or page:** [Witten Deformation and Its Application toward Morse Inequalities](https://arxiv.org/abs/1710.09579v1). It says: “and the equality holds when q = n”

**Sources:**

- [Edward Witten, Supersymmetry and Morse theory (1982), pp. 661–692](https://doi.org/10.4310/jdg/1214437492)

### Defining homology by the Morse complex makes even-index Morse functions perfect

**Remember:** With no odd generators, the Morse differential has nowhere to go.

*True by definition. Confidence: medium.* MSC 57R70 (Critical points and critical submanifolds in differential topology), 58E05. arXiv math.GT, math.AT. Level 3: graduate.

**Definition.** Over a fixed field, the Morse complex of a Morse function on a closed manifold has one basis vector in degree k for each critical point of index k. Its differential counts, with signs from coherent orientations, the unparametrized negative gradient trajectories of a Morse–Smale gradient between critical points whose indices differ by one.

**Problem.** Suppose a Morse function on a closed manifold has only critical points of even index. For each k, the number of index-k critical points equals the k-th Betti number.

**How the definition helps.** Every differential changes degree by one, so with zero odd-degree chain groups it starts or ends at zero and vanishes (our own proof). Homology then has one basis vector per critical point in each degree. The Morse homology theorem identifies this homology with singular homology.

**Wikipedia:** [Morse homology](https://en.wikipedia.org/wiki/Morse_homology). It says: “the boundary maps in the Morse and cellular complexes correspond”

**Sources:** none listed. No primary source with a working link was found.

### Defining homology by the Morse complex makes the weak Morse inequalities immediate

**Remember:** Homology cannot outnumber the chains it comes from.

*True by definition.* MSC 57R70 (Critical points and critical submanifolds in differential topology), 58E05. arXiv math.GT, math.AT. Level 3: graduate.

**Definition.** Over a fixed field, the Morse complex of a Morse function on a closed manifold has one basis vector in degree k for each critical point of index k. Its differential counts, with signs from coherent orientations, the unparametrized negative gradient trajectories of a Morse–Smale gradient between critical points whose indices differ by one.

**Problem.** For a Morse function on a closed manifold, the number of index-k critical points is at least the k-th Betti number.

**How the definition helps.** Degree-k homology is a quotient of a subspace of the degree-k chains, so its dimension is at most the number of index-k critical points (our own argument). The Morse homology theorem identifies it with singular homology.

**Wikipedia:** [Morse homology](https://en.wikipedia.org/wiki/Morse_homology). It says: “From the fact that the Morse homology is isomorphic to the singular homology, the Morse inequalities follow by considering the number of generators”

**Paper or page:** [Witten Deformation and Its Application toward Morse Inequalities](https://arxiv.org/abs/1710.09579v1). It says: “Let M be a closed smooth n-dimensional manifold. Suppose f ∈ C∞(M) is a Morse function. Then we have Weak Morse Inequalities: for each 0 ≤ q ≤ n, b<sub>q</sub> ≤ m<sub>q</sub>”

**Sources:**

- [Edward Witten, Supersymmetry and Morse theory (1982), pp. 661–692](https://doi.org/10.4310/jdg/1214437492)

### Defining Morse functions by jet transversality makes them generic

**Remember:** Morse means the derivative crosses zero transversely, a generic condition.

*True by definition. Confidence: medium.* MSC 57R70 (Critical points and critical submanifolds in differential topology), 58K05, 57R45. arXiv math.GT, math.DG. Level 3: graduate.

**Definition.** The first jet of a smooth real function f records, at each point, the value and derivative of f. Call f Morse if its first-jet map is transverse to the submanifold of jets with zero derivative, which in coordinates says the Hessian is invertible at each critical point (our own check).

**Problem.** On a compact manifold without boundary, Morse functions form an open dense set of smooth functions. Here two functions are close when they and all their derivatives are uniformly close.

**How the definition helps.** Thom's jet transversality theorem makes maps transverse to a fixed submanifold of jets dense, which gives density. Transversality to a closed submanifold is an open condition when the source is compact, which gives openness.

**nLab:** [Morse function](https://ncatlab.org/nlab/show/Morse+function). It says: “The function f is called a Morse function if every critical point of f is regular”

**Sources:**

- [Martin Golubitsky and Victor Guillemin, Stable Mappings and Their Singularities (1973), Chapter II, Transversality](https://doi.org/10.1007/978-1-4615-7904-5_2)

### Defining the Morse differential as cellular makes it square to zero

**Remember:** A cellular boundary squares to zero, so this one does too.

*True by definition. Confidence: medium.* MSC 57R70 (Critical points and critical submanifolds in differential topology), 58E05. arXiv math.GT, math.AT. Level 3: graduate.

**Definition.** Take a Morse–Smale negative gradient on a closed manifold, Euclidean in Morse coordinates near each critical point. Its unstable cells, the points that tend to a critical point in backward time, are oriented cells. Define the Morse differential as the cellular boundary map for these cells.

**Problem.** For a Morse function on a closed manifold with a Morse–Smale metric of this kind, the Morse differential applied twice gives zero.

**How the definition helps.** Every cellular boundary map squares to zero, so the identity holds by definition. The cellular comparison theorem identifies its coefficients with signed counts of gradient trajectories, so it is the usual Morse differential (our own explanation).

**Wikipedia:** [Morse homology](https://en.wikipedia.org/wiki/Morse_homology). It says: “the boundary maps in the Morse and cellular complexes correspond”

**Sources:** none listed. No primary source with a working link was found.

### Requiring nondegenerate critical points makes Morse theory see every change

**Remember:** Critical points must curve, or they may change nothing.

*Rules out counterexamples.* MSC 57R70 (Critical points and critical submanifolds in differential topology). arXiv math.DG, math.GT. Level 3: graduate.

**Definition.** A Morse function is a smooth function whose critical points, where the derivative is zero, are all nondegenerate: the Hessian, the matrix of second derivatives, is invertible there. By the Morse lemma, f near such a point is its critical value minus k squares plus the remaining squares.

**Problem.** Let f be a Morse function on a compact manifold without boundary. Crossing a critical value containing one critical point of index k changes the sublevel set up to homotopy by attaching one k-cell.

**How the definition helps.** The k descending directions of the normal form span a k-disk, which is the attached cell (our own explanation). Without nondegeneracy this fails: for x³ on ℝ, both sublevel sets near zero are contractible, so crossing the critical point attaches nothing.

**Wikipedia:** [Morse theory](https://en.wikipedia.org/wiki/Morse_theory). It says: “One must take care to make the critical points non-degenerate. To see what can pose a problem, let M = ℝ and let f(x) = x³.”

**Sources:**

- [M. Morse, Relations between the critical points of a real function of n independent variables, Transactions of the American Mathematical Society 27 (1925) 345–396](https://doi.org/10.1090/S0002-9947-1925-1501318-X)
- [R. Bott, Lectures on Morse theory, old and new, Bulletin of the American Mathematical Society 7 (1982) 331–358](https://doi.org/10.1090/s0273-0979-1982-15038-8)

### Cobordism, a coarser relation than diffeomorphism, gives a computable classification

**Remember:** Bounding means zero, so classify manifolds up to bounding.

*Makes the theorem clean to state or prove.* MSC 57R75 (O- and SO-cobordism), 55N22. arXiv math.AT, math.GT. Level 3: graduate.

**Definition.** Two closed smooth n-manifolds are unoriented cobordant if their disjoint union is the boundary of a compact smooth (n+1)-manifold, so a manifold represents zero exactly when it bounds. The classes form a graded ring under disjoint union and Cartesian product.

**Problem.** Thom showed that the unoriented cobordism ring is a polynomial ring over ℤ/2, with one generator in each positive degree not of the form 2ᵏ − 1. A closed manifold bounds if and only if all its Stiefel–Whitney numbers vanish.

**How the definition helps.** The definition turns 'bounds' into 'represents zero', so the question becomes one about a ring (our own explanation). The Pontryagin–Thom construction identifies the graded groups with the homotopy groups of the unoriented Thom spectrum. Thom's computation of these groups gives the polynomial generators and shows that Stiefel–Whitney numbers detect zero.

**Wikipedia:** [Cobordism](https://en.wikipedia.org/wiki/Cobordism). It says: “The cobordism class \[M\] ∈ 𝔑ₙ of a closed unoriented n-dimensional manifold M is determined by the Stiefel–Whitney characteristic numbers of M”

**Sources:**

- [René Thom, Quelques propriétés globales des variétés différentiables, Commentarii Mathematici Helvetici 28 (1954) 17–86](https://doi.org/10.1007/BF02566923)

### Defining bordism geometrically makes homotopic maps represent the same class

**Remember:** A homotopy is a bordism on the cylinder.

*True by definition. Confidence: medium.* MSC 57R75 (O- and SO-cobordism), 55N22. arXiv math.AT. Level 3: graduate.

**Definition.** An oriented bordism class over X is represented by a closed oriented manifold M with a map f: M → X. Two such maps are bordant when a map from a compact oriented manifold W to X restricts on its boundary to the first map and to the second with reversed orientation.

**Problem.** Homotopic maps from the same closed oriented manifold to X represent the same oriented bordism class over X.

**How the definition helps.** A homotopy from f to g is a map from the cylinder M × \[0, 1\] to X, so it is itself a bordism. The cylinder's oriented boundary is M at one end and M reversed at the other (our own proof).

**nLab:** [bordism homology theory](https://ncatlab.org/nlab/show/bordism+homology+theory). It says: “Atiyah's geometric model for bordism homology groups defines them as equivalence classes of maps of manifolds.”

**Sources:**

- [M. F. Atiyah, Bordism and Cobordism (1961), pp. 200–208](https://doi.org/10.1017/S0305004100035064)

### Multiplicative sequences make genera multiply on manifold products

**Remember:** One factor per formal root turns bundle sums into products.

*True by definition.* MSC 57R75 (O- and SO-cobordism), 57R20, 55N22. arXiv math.AT. Level 3: graduate.

**Definition.** Write the total rational Pontryagin class as a formal product of factors (1 + zⱼ), and, for a rational power series Q with constant term 1, take ∏ Q(zⱼ) rewritten in Pontryagin classes. This class turns a direct sum of bundles into a product of classes. The genus of a closed oriented manifold is its top-degree part evaluated on the fundamental class.

**Problem.** The genus defined by a multiplicative sequence is multiplicative on products of manifolds. It vanishes on oriented boundaries.

**How the definition helps.** The tangent bundle of M × N is the sum of the two pulled-back tangent bundles, so the class of M × N is the product of the two classes. Only the top-degree parts pair with \[M × N\] = \[M\] × \[N\], so the genus values multiply. On a boundary ∂W the class extends over W, and every class from W pairs to zero with \[∂W\] (our own calculation).

**Wikipedia:** [Genus of a multiplicative sequence](https://en.wikipedia.org/wiki/Genus_of_a_multiplicative_sequence). It says: “The conditions on Φ can be rephrased as saying that Φ is a ring homomorphism from the cobordism ring of manifolds (with additional structure) to another ring.”

**Sources:** none listed. No primary source with a working link was found.

### The fixed points of a proper action form a submanifold

**Remember:** Properness makes the action linear near fixed points.

*Rules out counterexamples. Confidence: medium.* MSC 57S15 (Compact Lie groups of differentiable transformations), 57S20, 22F05. arXiv math.DG, math.GT. Level 3: graduate.

**Definition.** A smooth action of a Lie group G on X is proper if the map (g, x) ↦ (g·x, x) from G × X to X × X pulls back compact sets to compact sets. By the slice theorem, near a fixed point a proper action then looks like a linear representation.

**Problem.** For a smooth proper action of a Lie group G on a manifold X, the fixed locus Xᴳ, the set of points fixed by every element of G, is a smooth submanifold.

**How the definition helps.** Near a fixed point, X is G-equivariantly a representation V, so the fixed locus is locally the linear subspace Vᴳ. Without properness, let ℝ act on ℝ² by the flow of x²y²/(1 + x²y²)·∂/∂x (our own example). Its fixed points are the two axes, a cross, which is not a submanifold.

**nLab:** [fixed point space](https://ncatlab.org/nlab/show/fixed+point+space). It says: “Let X be a smooth manifold, G a Lie group and ρ : G × X → X a proper action by diffeomorphisms. Then the G-fixed locus Xᴳ ↪︎ X is a smooth submanifold.”

**Sources:**

- [Marja Kankaanrinta, Equivariant collaring, tubular neighbourhood and gluing theorems for proper Lie group actions, Algebraic &amp; Geometric Topology 7 (2007) 1–27](https://doi.org/10.2140/agt.2007.7.1)

### Link-homotopy turns every link into a closed pure braid with algebraic moves

**Remember:** Let each strand cross itself, and only linking between strands remains.

*Makes the theorem clean to state or prove.* MSC 57K10 (Knot theory), 20F36. arXiv math.GT. Level 4: research.

**Definition.** A link-homotopy deforms an ordered oriented link through maps of circles into three-space in which each component may pass through itself but distinct components never meet.

**Problem.** Every ordered oriented link is link-homotopic to the closure of a pure braid. Two such braids have link-homotopic closures exactly when partial conjugations relate them in the homotopy braid group.

**How the definition helps.** Self-crossings erase the knotting within each component, so only the linking between components remains (our own explanation). The Habegger–Lin classification identifies closure classes with orbits of the homotopy braid group under partial conjugations.

**Paper or page:** [On braids and links up to link-homotopy](https://arxiv.org/abs/2210.01539), [On braids and links up to link-homotopy](https://arxiv.org/abs/2210.01539). It says: “Any n-component link is link-homotopic to the closure of an n-component pure braid.”

**Sources:**

- [E. Graff, On braids and links up to link-homotopy, arXiv:2210.01539 (2023)](https://arxiv.org/abs/2210.01539)
- [Habegger, Lin, The classification of links up to link-homotopy, J. Amer. Math. Soc. (1990)](https://doi.org/10.1090/s0894-0347-1990-1026062-0)

### Kuperberg's minimal surface lets Floer homology be defined for virtual knots

**Remember:** Pick the smallest surface, and stabilization stops being a problem.

*Makes the theorem clean to state or prove.* MSC 57K12 (Generalized knots (virtual knots, welded knots, quandles, etc.)). arXiv math.GT. Level 4: research.

**Definition.** A virtual knot is a knot in a thickened closed oriented surface, up to isotopy, surface diffeomorphisms and stabilization, which adds or removes a handle away from the knot. Kuperberg proved that each virtual knot has a minimal-genus representative, unique up to isotopy and surface diffeomorphism.

**Problem.** The authors' Heegaard Floer homology of knots in thickened surfaces changes under stabilization. Evaluated on Kuperberg's minimal genus representative, it is nevertheless an invariant of virtual knots.

**How the definition helps.** Any invariant of knots in thickened surfaces, evaluated on the unique minimal representative, is an invariant of virtual knots, even when stabilization changes it (our own explanation).

**Wikipedia:** [Virtual knot](https://en.wikipedia.org/wiki/Virtual_knot). It says: “a virtual knot is a generalization of knots in 3-dimensional Euclidean space, R³, to knots in thickened surfaces Σ × \[0,1\] modulo an equivalence relation called stabilization/destabilization.”

**Paper or page:** [New invariants for virtual knots via spanning surfaces](https://arxiv.org/abs/2207.08129), [New invariants for virtual knots via spanning surfaces](https://arxiv.org/abs/2207.08129). It says: “We also propose several constructions of Heegaard Floer homology for knots in thickened surfaces, and give examples why they are not stabilization invariant. However, we can define Floer homology for virtual knots by taking a minimal genus representative.”

**Sources:**

- [A. Juhász, L. H. Kauffman, E. Ogasa, New invariants for virtual knots via spanning surfaces, arXiv:2207.08129 (2024)](https://arxiv.org/abs/2207.08129)
- [Greg Kuperberg, What is a virtual link?, Algebr. Geom. Topol. 3 (2003)](https://doi.org/10.2140/agt.2003.3.587)

### Quandle colorings count surface-links once a generating set of moves is known

**Remember:** Quandle axioms are the moves, so colorings never notice them.

*True by definition. Confidence: medium.* MSC 57K12 (Generalized knots (virtual knots, welded knots, quandles, etc.)), 57K45. arXiv math.GT. Level 4: research.

**Definition.** A quandle is a set Q with an operation ∗ such that x ∗ x = x, each right translation y ↦ y ∗ x is a bijection, and (x ∗ y) ∗ z = (x ∗ z) ∗ (y ∗ z); these axioms mirror the Reidemeister moves (our own). A coloring of an oriented singular marked diagram assigns elements of Q to arcs by fixed rules at crossings and vertices.

**Problem.** The number of quandle colorings of an oriented singular marked diagram is an invariant of the oriented immersed surface-link that it presents.

**How the definition helps.** Each generating diagram move gives a bijection of colorings (Proposition 7.1), because the quandle axioms encode the moves (our own summary). Theorem 6.1 joins any two diagrams of the same immersed surface-link by these moves, so the count is preserved.

**Paper or page:** [Minimal generating sets of moves for surfaces immersed in the four-space](https://arxiv.org/abs/2208.08244). It says: “The number of quandle colorings \#ColQ(D) of an oriented singular marked diagram D is an invariant of an oriented surface-link ℒ presented by D”

**Sources:**

- [M. Jabłonowski, Minimal generating sets of moves for surfaces immersed in the four-space, J. Knot Theory Ramifications (2023), arXiv:2208.08244](https://arxiv.org/abs/2208.08244)

### Rack axioms that copy Legendrian Reidemeister moves give an automatic invariant

**Remember:** Write each move into an axiom, and invariance comes free.

*True by definition.* MSC 57K12 (Generalized knots (virtual knots, welded knots, quandles, etc.)), 53D10. arXiv math.GT, math.SG. Level 4: research.

**Definition.** A rack is a set with an operation ∗ whose right translations are bijections and which satisfies (x ∗ y) ∗ z = (x ∗ z) ∗ (y ∗ z). A generalized Legendrian rack adds maps u and d, for up and down cusps, that commute with right translations. They satisfy x ∗ u(y) = x ∗ d(y) = x ∗ y and u(d(x ∗ x)) = d(u(x ∗ x)) = x, axioms that copy the Legendrian Reidemeister moves.

**Problem.** The generalised Legendrian rack of a front diagram, up to isomorphism, is an invariant of oriented Legendrian links up to Legendrian isotopy.

**How the definition helps.** Each oriented front move gives isomorphic rack presentations, because the axioms copy the moves (our own explanation). The Legendrian Reidemeister theorem connects fronts of isotopic links by these moves.

**Paper or page:** [Generalised Legendrian racks of Legendrian links](https://arxiv.org/abs/2301.06854), [Generalised Legendrian racks of Legendrian links](https://arxiv.org/abs/2301.06854). It says: “A generalised Legendrian rack is a rack equipped with a Legendrian structure, which is a pair of maps encoding the information of Legendrian Reidemeister moves together with up and down cusps in the front diagram of an oriented Legendrian link.”

**Sources:**

- [B. Karmakar, D. Saraf, M. Singh, Generalised Legendrian racks of Legendrian links, J. Topol. Anal. (2025), arXiv:2301.06854](https://arxiv.org/abs/2301.06854)
- [J. Świątkowski, On the isotopy of Legendrian knots, Ann. Global Anal. Geom. 10 (1992) 195-207](https://doi.org/10.1007/bf00136863)

### Virtual diagrams and knots in thickened surfaces define the same virtual knots

**Remember:** Virtual crossings are just the shadow of a handle in the surface.

*True by definition.* MSC 57K12 (Generalized knots (virtual knots, welded knots, quandles, etc.)). arXiv math.GT. Level 4: research.

**Definition.** A virtual diagram marks each crossing as classical or virtual. Virtual isotopy is generated by classical Reidemeister moves and detours, which redraw an arc that meets only virtual crossings and mark every new crossing virtual.

**Problem.** Two virtual link diagrams are virtually isotopic exactly when their surface links are equivalent. Equivalence allows isotopy in the thickened surface, orientation-preserving surface diffeomorphisms and handle stabilization.

**How the definition helps.** A detour only changes how the surface link is drawn in the plane, so it keeps the surface link (our own explanation). The correspondence theorem of Kauffman and of Carter, Kamada and Saito proves both directions.

**Paper or page:** [New invariants for virtual knots via spanning surfaces](https://arxiv.org/abs/2207.08129). It says: “Two virtual link diagrams are virtually isotopic if and only if their surface embeddings are equivalent up to isotopy in the thickened surfaces, orientation-preserving diffeomorphisms of the surfaces, and one-handle stabilizations and destabilizations.”

**Sources:**

- [A. Juhász, L. H. Kauffman, E. Ogasa, New invariants for virtual knots via spanning surfaces, arXiv:2207.08129 (2024)](https://arxiv.org/abs/2207.08129)

### Welded diagrams give Milnor invariants an exact diagrammatic meaning

**Remember:** Trees of high degree are invisible to short Milnor invariants.

*Makes the theorem clean to state or prove. Confidence: low.* MSC 57K12 (Generalized knots (virtual knots, welded knots, quandles, etc.)), 57K10. arXiv math.GT. Level 4: research.

**Definition.** For a positive integer q, wq-concordance of welded string links is the equivalence generated by welded concordance and by surgery along w-trees of degree at least q, where the degree counts a tree's tails (our own summary).

**Problem.** Two classical string links have equal Milnor invariants through length q exactly when they are wq-concordant as welded string links (our own reading).

**How the definition helps.** Welded concordance and surgery on w-trees of degree at least q leave Milnor invariants through length q unchanged (our own explanation). Meilhan and Yasuhara's classification proves the converse, for classical string links viewed as welded string links.

**Paper or page:** [A diagrammatical characterization of Milnor invariants](https://arxiv.org/abs/2201.01499). It says: “we describe when two string links have equal Milnor invariants of length ≤ q and when a link has trivial Milnor invariants of lenght ≤ q. This will be done through the use of welded knot theory”

**Sources:**

- [B. Colombari, A diagrammatical characterization of Milnor invariants, arXiv:2201.01499 (2022)](https://arxiv.org/abs/2201.01499)

### Welded equivalence is the relation that Satoh's tube map respects

**Remember:** In four-space, overcrossings can slide past each other.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 57K12 (Generalized knots (virtual knots, welded knots, quandles, etc.)), 57K45. arXiv math.GT. Level 4: research.

**Definition.** Welded equivalence is virtual equivalence plus one extra move, which swaps two consecutive overcrossings along the same overpassing strand. Satoh's Tube map thickens a diagram into a ribbon torus knot in four-space, where that swap becomes an isotopy (our own).

**Problem.** If two virtual diagrams are welded equivalent, the tube map sends them to isotopic ribbon torus knots. The knot group and knot quandle of a welded diagram equal those of its tube.

**How the definition helps.** Every virtual move and the extra overcrossing move give isotopic tubes in four-space, which is Satoh's Theorem 5. Theorem 6 shows that the tube has the same knot group and knot quandle as the diagram.

**Paper or page:** [Some generalizations of Satoh's Tube map](https://arxiv.org/abs/2103.08766), [Some generalizations of Satoh's Tube map](https://arxiv.org/abs/2103.08766). It says: “If K and K′ are w-equivalent, then Tube(K) and Tube(K′) are isotopic through a stable equivalence of ribbon links.”

**Sources:**

- [B. K. Winter, Some generalizations of Satoh's Tube map, arXiv:2103.08766 (2021)](https://arxiv.org/abs/2103.08766)
- [Satoh, Virtual knot presentation of ribbon torus-knots, J. Knot Theory Ramifications (2000)](https://doi.org/10.1142/s0218216500000293)

### A Jones polynomial for open curves agrees with the classical one

**Remember:** Closing arcs that cross nothing cannot change the polynomial.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 57K14 (Knot polynomials), 57K12. arXiv math.GT. Level 4: research.

**Definition.** A linkoid is a link diagram that may have arc components with free endpoints. It is link-type when disjoint closing arcs can join the paired endpoints without meeting the diagram elsewhere, so closing adds no crossings.

**Problem.** For a link-type linkoid, the Jones polynomial of Barkataki and Panagiotou equals the Jones polynomial of the link obtained by closing its arcs.

**How the definition helps.** Since closing adds no crossings, each smoothing of the linkoid matches one smoothing of the closed diagram, with the same writhe (our own explanation). The endpoint pairings count exactly the extra circles that closing creates. Theorem 3.1 then gives equal normalized brackets.

**Paper or page:** [The Jones polynomial of collections of open curves in 3-space](https://arxiv.org/abs/2205.03474). It says: “show that this is a well-defined single variable polynomial that is a topological invariant, which, for link-type linkoids, it coincides with that of the corresponding link.”

**Sources:**

- [K. Barkataki, E. Panagiotou, The Jones polynomial of collections of open curves in 3-space, arXiv:2205.03474 (2022)](https://arxiv.org/abs/2205.03474)
- [Panagiotou, Kauffman, Knot polynomials of open and closed curves, Proc. R. Soc. A (2020)](https://doi.org/10.1098/rspa.2020.0124)

### The normalized Markov trace gives a link invariant from braids

**Remember:** Trace handles conjugation, and the crossing-count correction handles stabilization.

*True by definition. Confidence: medium.* MSC 57K14 (Knot polynomials), 20F36. arXiv math.GT, math.QA. Level 4: research.

**Definition.** Use the normalized Temperley–Lieb trace tr, which is cyclic and has loop value δ = −A² − A⁻², and send each braid generator to A·1 + A⁻¹eᵢ. For an n-strand braid β of writhe w, set J(β) = (−A³)⁻ʷ δⁿ⁻¹ tr(ρ(β)).

**Problem.** The corrected trace is independent of the braid chosen to close to a given oriented link. After the Jones change of variable it equals the Jones polynomial.

**How the definition helps.** By Markov's theorem it is enough to check conjugation and stabilization. Cyclicity handles conjugation, and a positive or negative stabilization multiplies the scaled trace by −A³ or its inverse, which the writhe factor cancels (our own calculation). The bracket trace formula identifies J with the Jones polynomial after t = A⁻⁴.

**Wikipedia:** [Jones polynomial](https://en.wikipedia.org/wiki/Jones_polynomial). It says: “Take the braid word σ obtained previously from L and compute δⁿ⁻¹ tr ρ(σ) where tr is the Markov trace.”

**Sources:**

- [Vaughan F. R. Jones, A polynomial invariant for knots via von Neumann algebras, Bulletin of the AMS (1985)](https://doi.org/10.1090/s0273-0979-1985-15304-2)
- [Vaughan F. R. Jones, Hecke algebra representations of braid groups and link polynomials, Annals of Mathematics (1987)](https://doi.org/10.2307/1971403)

### Topologically slice knots have square determinants

**Remember:** A flat slice disk splits the Alexander polynomial as a square.

*Rules out counterexamples.* MSC 57K14 (Knot polynomials), 57K10. arXiv math.GT. Level 4: research.

**Definition.** A knot is topologically slice if it bounds a locally flat disk in the four-ball that meets the boundary sphere exactly in the knot. Locally flat means that near each point the disk looks like a flat plane in four-space, or a half-plane at the boundary.

**Problem.** The absolute value of the Alexander polynomial at −1 is a square for every topologically slice knot.

**How the definition helps.** The Fox–Milnor theorem, which needs local flatness, writes the Alexander polynomial as f(t)f(1/t) up to a signed monomial. At t = −1 both factors equal f(−1), so the absolute value is a square (our own calculation). The trefoil, of determinant 3, bounds the cone on itself, a disk that is not locally flat at the cone point (our own counterexample).

**Wikipedia:** [Slice knot](https://en.wikipedia.org/wiki/Slice_knot). It says: “It follows that the knot's determinant (= Δ(−1)) is a square number.”

**Paper or page:** [Seifert forms and slice Euler characteristic of links](https://arxiv.org/abs/2405.14076v1). It says: “If L bounds a locally flat surface in B⁴ with Euler characteristic 1, then there exists F ∈ ℤ\[t\]”

**Sources:** none listed. No primary source with a working link was found.

### Normalization cancels isolated surgery blowups

**Remember:** Each isolated unknot brings its own factor, so divide it out.

*True by definition.* MSC 57K16 (Finite-type and quantum invariants, topological quantum field theories (TQFT)), 81T45. arXiv math.QA. Level 4: research.

**Definition.** In the Reshetikhin–Turaev surgery formula, color each component of the framed link by the sum of simple labels weighted by quantum dimension. Divide the link evaluation by u for each positive and v for each negative eigenvalue of the linking matrix, where u and v are the nonzero values of isolated unknots with framing +1 and −1.

**Problem.** The normalized Reshetikhin–Turaev surgery value is unchanged by adding or removing an isolated unknot of framing +1 or −1.

**How the definition helps.** An isolated unknot of framing +1 multiplies the evaluation by u and adds one positive eigenvalue, so the normalization divides out exactly that u. Framing −1 works the same way with v. Full surgery invariance also needs the separate handle-slide identity.

**Wikipedia:** [Reshetikhin–Turaev invariant](https://en.wikipedia.org/wiki/Reshetikhin%E2%80%93Turaev_invariant). It says: “the first and second bracket ensure that RTᵣ(Mₗ) is invariant under blowing up/down”

**Sources:**

- [Reshetikhin and Turaev, Invariants of 3-manifolds via link polynomials and quantum groups](https://link.springer.com/article/10.1007/BF01239527)

### Vassiliev’s crossing difference makes top values depend on chord diagrams

**Remember:** With all double points used up, crossing changes cost nothing.

*True by definition.* MSC 57K16 (Finite-type and quantum invariants, topological quantum field theories (TQFT)). arXiv math.GT. Level 4: research.

**Definition.** Extend a knot invariant v to knots with double points by v(K×) = v(K₊) − v(K₋), the difference of the positive and negative resolutions. It has degree at most n if it vanishes on knots with n + 1 double points, so on knots with n double points v ignores crossing changes (our own). The chord diagram records which pairs of points on the circle each double point joins.

**Problem.** For an invariant of degree at most n, its value on a singular knot with n double points depends only on the chord diagram.

**How the definition helps.** Two singular knots with n double points and the same chord diagram are related by isotopy and ordinary crossing changes (our own). So v takes the same value on both. For the first claim, fix matching neighbourhoods of the double points, then move the connecting arcs, letting them cross away from those neighbourhoods (our own).

**nLab:** [Vassiliev invariant](https://ncatlab.org/nlab/show/Vassiliev+invariant). It says: “Let v be a Vassiliev invariant of degree ≤ n. Then the value of v on a singular knot with n distinct double points depends only on the chord diagram of the singular knot, and not on the knot itself.”

**Sources:**

- [Dror Bar-Natan, On the Vassiliev knot invariants, Topology (1995)](https://doi.org/10.1016/0040-9383(95)93237-2)
- [Joan S. Birman and Xiao-Song Lin, Knot polynomials and Vassiliev's invariants, Inventiones Mathematicae (1993)](https://doi.org/10.1007/BF01231287)

### Khovanov’s graded chain groups recover the Jones polynomial

**Remember:** Each circle becomes a space of graded dimension q + q⁻¹.

*True by definition.* MSC 57K18 (Homology theories in knot theory (Khovanov, Heegaard-Floer, etc.)), 57K14. arXiv math.GT. Level 4: research.

**Definition.** Khovanov's chain complex puts V⊗ᵏ at each resolution with k circles, where V has basis elements in q-degrees 1 and −1, so each circle contributes q + q⁻¹ (our own). A resolution with r one-smoothings sits in homological degree r−n₋ and has q-degree shifted by r+n₊−2n₋. Here n₊ and n₋ count positive and negative crossings.

**Problem.** The graded Euler characteristic of unreduced Khovanov homology equals the Jones state sum normalized to give q + q⁻¹ on the unknot.

**How the definition helps.** The alternating sum of the graded dimensions of these groups is the writhe-corrected Kauffman bracket state sum, which gives the Jones polynomial (our own). Each resolution contributes (q + q⁻¹)ᵏ, with the sign of its homological degree and the power of its q-shift (our own). The graded Euler characteristic does not change on passing to homology (our own).

**Wikipedia:** [Khovanov homology](https://en.wikipedia.org/wiki/Khovanov_homology). It says: “The graded Euler characteristic of H(L) turns out to be the Jones polynomial of L.”

**Paper or page:** [A quantum algorithm for Khovanov homology](https://arxiv.org/abs/2501.12378v2). It says: “The graded Euler characteristic of C(K) is the unnormalized Jones polynomial of K.”

**Sources:**

- [Mikhail Khovanov, A categorification of the Jones polynomial, Duke Mathematical Journal (2000)](https://doi.org/10.1215/S0012-7094-00-10131-7)

### Using real curves, not isotopy classes, makes graph automorphisms the homeomorphisms

**Remember:** Keep the curves themselves, and the graph's symmetries are all homeomorphisms.

*Makes the theorem clean to state or prove.* MSC 57K20 (2-dimensional topology (including mapping class groups of surfaces, Teichmüller theory, curve complexes, etc.)). arXiv math.GT. Level 4: research.

**Definition.** The fine curve graph of a surface has one vertex for each actual essential simple closed curve (one that bounds no disc), not for each isotopy class. Two vertices are joined by an edge when the curves are disjoint.

**Problem.** For a closed orientable surface of genus at least two, its homeomorphism group is naturally isomorphic to the automorphism group of its fine curve graph.

**How the definition helps.** Every homeomorphism moves actual curves to actual curves and keeps disjoint curves disjoint, so it gives a graph automorphism (our own explanation). Long, Margalit, Pham, Verberne and Yao proved the converse: each graph automorphism comes from exactly one homeomorphism.

**Paper or page:** [Automorphisms of some variants of fine graphs](https://arxiv.org/abs/2210.05460), [Automorphisms of the fine 1-curve graph](https://arxiv.org/abs/2309.16041). It says: “Later Long, Margalit, Pham, Verberne and Yao proved that for a closed surface of genus g ⩾ 2, the automorphism group of the fine graph is naturally isomorphic to the homeomorphism group of the surface.”

**Sources:**

- [F. Le Roux, M. Wolff, Automorphisms of some variants of fine graphs, Algebr. Geom. Topol. 24 (2024) 4697-4730, arXiv:2210.05460](https://arxiv.org/abs/2210.05460)
- [Long, Margalit, Pham, Verberne, Yao, Automorphisms of the fine curve graph, Trans. Amer. Math. Soc. (2025)](https://doi.org/10.1090/tran/9374)
- [Bowden, Hensel, Webb, Quasi-morphisms on surface diffeomorphism groups, J. Amer. Math. Soc. (2021)](https://doi.org/10.1090/jams/981)

### Homology cobordism turns homology cylinders into one group containing mapping classes

**Remember:** Up to homology cobordism, a cylinder stacked on its mirror vanishes.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 57K30 (General topology of 3-manifolds), 57R90, 57K20. arXiv math.GT. Level 4: research.

**Definition.** A homology cylinder over a surface Σ is a compact oriented 3-manifold whose boundary is marked by two copies of Σ, each inducing an integral homology isomorphism. When Σ has boundary, the two markings agree on it. Two cylinders are homology cobordant when a compact oriented 4-manifold, compatible with the markings, joins them by integral homology isomorphisms.

**Problem.** Homology cylinders over Σ, up to homology cobordism, form a group under stacking. Mapping cylinders give a homomorphism from the mapping class group, and string-link exteriors give one for the corresponding punctured disk.

**How the definition helps.** Up to homology cobordism, a cylinder stacked with its upside-down copy is trivial, so stacking has inverses (our own summary of Garoufalidis and Levine). Mapping cylinders of mapping classes and exteriors of string links are homology cylinders, which gives the two homomorphisms (our own remark).

**Paper or page:** [Homology cobordism group of homology cylinders and invariants related to lower central series](https://arxiv.org/abs/2012.13165). It says: “The homology cobordism group of homology cylinders is a generalization of both the mapping class group of surfaces and the string link concordance group.”

**Sources:**

- [M. Song, Homology cobordism group of homology cylinders and invariants related to lower central series, arXiv:2012.13165 (2020)](https://arxiv.org/abs/2012.13165)
- [Garoufalidis, Levine, Tree-level invariants of three-manifolds, Massey products and the Johnson homomorphism, Proc. Sympos. Pure Math. 73 (2005)](https://doi.org/10.1090/pspum/073/2131016)

### Flattened Rogers values give complex volume

**Remember:** Fix every logarithm's branch, then add Rogers values for complex volume.

*Makes the theorem clean to state or prove.* MSC 57K31 (Invariants of 3-manifolds (including skein modules, character varieties)), 33B30, 11G55. arXiv math.GT, math.NT. Level 4: research.

**Definition.** A flattening of a tetrahedron with shape z picks integers p, q and uses the edge logarithms log z + pπi, −log(1−z) + qπi and minus their sum. A strong flattening makes these signed logarithms sum to zero around each edge and along each closed normal path in a vertex link. Their parity must also sum to zero around edges and along every closed normal path.

**Problem.** Take an ordered ideal triangulation of a complete oriented cusped hyperbolic three-manifold of finite volume, with complete shapes and a strong flattening. Then the signed sum over tetrahedra of R = Li₂(z) + log(z)log(1−z)/2 + πi(p log(1−z)+q log z)/2 − π²/6 is i times volume minus the Chern–Simons invariant, modulo π²ℤ in Neumann's convention.

**How the definition helps.** With every branch fixed by the flattening, complex volume becomes one sum of R over tetrahedra (our own terms). The lifted five-term relation makes this sum independent of the triangulation. Neumann identifies the sum with the Cheeger–Chern–Simons class.

**nLab:** [Bloch group](https://ncatlab.org/nlab/show/Bloch+group). It says: “when applied to a fundamental class \[X\] of a hyperbolic 3-manifold according to the above, then it yields its complex volume”

**Sources:**

- [Walter D. Neumann, Extended Bloch group and the Cheeger–Chern–Simons class (2004)](https://msp.org/gt/2004/8-1/gt-v8-n1-p10-p.pdf)

### Transfer removes spurious two-torsion

**Remember:** Two same-shape symbols may swap their second branch integers.

*Rules out counterexamples.* MSC 57K31 (Invariants of 3-manifolds (including skein modules, character varieties)), 11G55, 33B30. arXiv math.GT, math.NT. Level 4: research.

**Definition.** The extended pre-Bloch group is generated by symbols \[z,p,q\], a shape z outside {0,1} with two integer logarithm branches, modulo Neumann's lifted five-term relations and the transfer relation \[z,p,q\]+\[z,r,s\]=\[z,p,s\]+\[z,r,q\]. The transfer relation lets two symbols with the same shape swap their second integers.

**Problem.** The map from Neumann’s group with only the lifted five-term relations to the extended pre-Bloch group has kernel cyclic of order two. Its generator is \[z,1,1\]+\[z,0,0\]−\[z,1,0\]−\[z,0,1\], independent of z.

**How the definition helps.** The transfer relation with p, q, r, s equal to 1, 1, 0, 0 sets \[z,1,1\]+\[z,0,0\]−\[z,1,0\]−\[z,0,1\] to zero (our own). Without transfer this element is nonzero of order two (our own). Neumann's Proposition 7.2 shows that all transfer relations together generate exactly that class (our own).

**nLab:** [Bloch group](https://ncatlab.org/nlab/show/Bloch+group). It says: “Accordingly H₃ᵍʳᵖ(♭ PSL(2,ℂ), ℤ) itself is also called the extended Bloch group”

**Sources:**

- [Walter D. Neumann, Extended Bloch group and the Cheeger–Chern–Simons class (2004)](https://msp.org/gt/2004/8-1/gt-v8-n1-p10-p.pdf)

### Twisted Alexander polynomials detect fibred 3-manifolds where the ordinary one fails

**Remember:** One polynomial can be fooled; all the twisted ones together cannot.

*Makes the theorem clean to state or prove.* MSC 57K31 (Invariants of 3-manifolds (including skein modules, character varieties)), 57K14. arXiv math.GT. Level 4: research.

**Definition.** Fix an integral class φ and a finite quotient α of π₁N onto G. The twisted Alexander polynomial is the order of the first homology of N with coefficients in ℤ\[G\]\[t,t⁻¹\], where a loop g acts by α(g) times t raised to φ(g). It is defined up to sign and powers of t.

**Problem.** Let N be compact, orientable and irreducible with empty or toroidal boundary, and let φ be a nonzero primitive integral first cohomology class. It fibres in direction φ exactly when every finite quotient α gives a monic twisted Alexander polynomial of the Friedl–Vidussi degree.

**How the definition helps.** Each finite quotient gives one necessary test of fibering (our own explanation), and Friedl and Vidussi prove that passing all the tests is sufficient. For quotient G, the required degree is \|G\| times the Thurston norm of φ plus (1+b₃(N)) times the divisibility of φ restricted to ker α.

**Paper or page:** [Twisted Alexander polynomials detect fibered 3-manifolds](https://arxiv.org/abs/0805.1234). It says: “In this paper we show that the conditions on twisted Alexander polynomials are not only necessary but also sufficient for a 3-manifold to be fibered.”

**Sources:**

- [S. Friedl, S. Vidussi, Twisted Alexander polynomials detect fibered 3-manifolds, Ann. of Math. (2) 173 (2011) 1587-1643, arXiv:0805.1234](https://arxiv.org/abs/0805.1234)

### Antisymmetric classes forget orientation

**Remember:** Average β with minus its conjugate, and orientation stops mattering.

*Makes the theorem clean to state or prove.* MSC 57K32 (Hyperbolic 3-manifolds), 52B45. arXiv math.GT, math.KT. Level 4: research.

**Definition.** For an oriented complete cusped hyperbolic three-manifold of finite volume, the antisymmetric Bloch class is β⁻ = (β−conj(β))/2. Here β is the rational Bloch class, the signed sum of ideal tetrahedron shapes, and conjugation acts on each shape.

**Problem.** Reversing the orientation preserves β⁻. This part of the Bloch invariant gives the class for cutting and reassembling polyhedra when reflections are allowed.

**How the definition helps.** Reversing orientation negates the fundamental class and conjugates each shape, so it sends β to −conj(β) and leaves β⁻ unchanged (our own). Identifying β⁻ with the class for cutting and reassembling with reflections uses the scissors congruence theorem of Dupont and Sah (our own).

**nLab:** [scissors congruence](https://ncatlab.org/nlab/show/scissors+congruence). It says: “The scissors congruence group 𝒫(X, G) where G is a subgroup of the group of isometries of X, is the free abelian group on symbols \[P\], for all polytopes in X modulo the relations”

**Paper or page:** [Chern-Simons invariants of hyperbolic three-manifolds, mixed Tate motives, and motivic path torsor of augmented character varieties](https://arxiv.org/abs/2502.11950v1). It says: “The element ∑ᵢ\[zᵢ\] of ℬ(ℂ) is independent of the choice of ideal triangulation of M; we denote it by β(M).”

**Sources:**

- [Walter D. Neumann, Realizing arithmetic invariants of hyperbolic 3-manifolds (2011)](https://doi.org/10.1090/conm/541/10687)
- [Walter D. Neumann and Jun Yang, Bloch invariants of hyperbolic 3-manifolds (1999)](https://doi.org/10.1215/S0012-7094-99-09602-3)

### Conjugate volumes classify scissors classes

**Remember:** One volume becomes a vector that tests scissors equivalence.

*Makes the theorem clean to state or prove.* MSC 57K32 (Hyperbolic 3-manifolds), 52B45, 19F27. arXiv math.GT, math.KT. Level 4: research.

**Definition.** The Borel regulator vector of a manifold lists the signed volumes of its rational Bloch class under one embedding K → ℂ from each conjugate pair of nonreal embeddings. Here K is a conjugation-stable number field containing both invariant trace fields, which are generated by squared holonomy traces.

**Problem.** Suppose every embedding of K ∩ ℝ into ℂ has real image. Then two complete oriented hyperbolic three-manifolds of finite volume are stably scissors congruent, meaning cut-and-reassemble equivalent after adding the same polyhedron to both, exactly when their vectors agree.

**How the definition helps.** The vector records the volume at every complex place, so Neumann's criterion becomes an equality test (our own). His theorem says stable scissors congruence holds exactly when the vector difference comes from a Bloch class over K ∩ ℝ. Borel's rank theorem gives that totally real field a rational Bloch group of rank zero, so the only such difference is zero (our own).

**nLab:** [Bloch group](https://ncatlab.org/nlab/show/Bloch+group). It says: “Now the point is that restricted to the Bloch group proper the Borel regulator is injective.”

**Sources:**

- [Walter D. Neumann, Realizing arithmetic invariants of hyperbolic 3-manifolds (2011)](https://doi.org/10.1090/conm/541/10687)

### Extended classes retain Chern–Simons torsion

**Remember:** Keep the torsion that volume forgets, because Chern–Simons sees it.

*Rules out counterexamples.* MSC 57K32 (Hyperbolic 3-manifolds), 57R20. arXiv math.GT, math.KT. Level 4: research.

**Definition.** The extended complex Bloch group is the third integral homology of PSL(2, ℂ) with the discrete topology. It keeps a subgroup ℚ/ℤ of finite-order elements that the ordinary Bloch group kills.

**Problem.** The Cheeger–Chern–Simons class assigns an additive complex value modulo π²ℤ to each extended Bloch class. This assignment cannot descend to the ordinary Bloch group.

**How the definition helps.** The Cheeger–Chern–Simons value sees the finite-order elements that the ordinary Bloch group discards (our own). Neumann's dilogarithm formula sends the element of order two to π²/2 modulo π²ℤ, but any map through the ordinary group sends it to zero (our own).

**nLab:** [Bloch group](https://ncatlab.org/nlab/show/Bloch+group). It says: “There is a group homomorphism ĉ : H₃(♭PSL(2, ℂ), ℤ) → ℂ/π²ℤ”

**Sources:**

- [Walter D. Neumann, Extended Bloch group and the Cheeger–Chern–Simons class (2004)](https://doi.org/10.2140/gt.2004.8.413)

### Finite volume gives hyperbolic rigidity

**Remember:** Finite volume leaves no room to stretch the hyperbolic metric.

*Rules out counterexamples.* MSC 57K32 (Hyperbolic 3-manifolds). arXiv math.GT. Level 4: research.

**Definition.** A finite-volume hyperbolic manifold is a complete Riemannian manifold of constant sectional curvature −1 whose total volume is finite.

**Problem.** Mostow–Prasad rigidity: complete connected hyperbolic three-manifolds of finite volume without boundary are isometric if their fundamental groups are isomorphic.

**How the definition helps.** Finite volume excludes the quotients of hyperbolic three-space by a translation along one geodesic (our own example). These all have fundamental group ℤ and infinite volume, but different translation lengths give different shortest geodesics, so they are not isometric. Mostow–Prasad rigidity proves the finite-volume statement.

**nLab:** [Mostow rigidity theorem](https://ncatlab.org/nlab/show/Mostow+rigidity+theorem). It says: “then this structure is unique up to isometry, and in fact it is uniquely determined already by the fundamental group π₁(Σ).”

**Wikipedia:** [Mostow rigidity theorem](https://en.wikipedia.org/wiki/Mostow_rigidity_theorem). It says: “There is also a rich theory of deformation spaces of hyperbolic structures on infinite volume manifolds in three dimensions.”

**Sources:**

- [Gopal Prasad, Strong rigidity of Q-rank 1 lattices (1973).](https://doi.org/10.1007/bf01418789)

### Five-term relations absorb retriangulation

**Remember:** The two-three move is exactly one five-term relation.

*True by definition.* MSC 57K32 (Hyperbolic 3-manifolds), 52B45. arXiv math.GT, math.KT. Level 4: research.

**Definition.** The rational pre-Bloch group has one generator \[z\] for each complex z outside {0,1}, the shape of an ordered ideal tetrahedron. The shape is the fourth vertex after a Möbius map sends the first three to 0, ∞, 1. The relations say that for any five distinct ordered ideal points, the alternating sum of the five tetrahedra made by deleting one point is zero.

**Problem.** A bipyramid with five distinct vertices at infinity splits into either two or three tetrahedra. With the induced vertex orders and orientation signs, both subdivisions give the same sum in this space, the rational pre-Bloch group.

**How the definition helps.** The two subdivisions of the bipyramid are the two signed halves of this alternating sum, so the relation says exactly that they agree (our own). No volume calculation is needed (our own).

**Paper or page:** [Chern-Simons invariants of hyperbolic three-manifolds, mixed Tate motives, and motivic path torsor of augmented character varieties](https://arxiv.org/abs/2502.11950v1). It says: “The element ∑ᵢ\[zᵢ\] of ℬ(ℂ) is independent of the choice of ideal triangulation of M”

**Sources:**

- [Walter D. Neumann, Extended Bloch group and the Cheeger–Chern–Simons class (2004)](https://doi.org/10.2140/gt.2004.8.413)

### Flattenings linearize local edge equations

**Remember:** Fix the shapes, and only integer shifts remain to solve.

*Makes the theorem clean to state or prove.* MSC 57K32 (Hyperbolic 3-manifolds), 19E99. arXiv math.GT, math.KT. Level 4: research.

**Definition.** A flattening of an ideal tetrahedron with shape z, the cross-ratio of its four vertices, gives its three opposite-edge pairs logarithms of z, 1/(1−z) and 1−1/z. Each is shifted by an integer multiple of πi, chosen so the three values sum to zero.

**Problem.** Five distinct ordered points at infinity give five tetrahedra by deleting one point at a time. Flatten any three so their signed logarithms sum to zero at their common edge. Exactly one choice on the remaining two gives zero signed sum at every edge.

**How the definition helps.** With the shapes fixed, each edge condition is a linear equation in the integer shifts (our own). Neumann's Lemma 3.5 solves these equations. The single condition at the common edge of the first three tetrahedra suffices, and the rest determine both missing flattenings.

**nLab:** [Bloch group](https://ncatlab.org/nlab/show/Bloch+group). It says: “Accordingly H₃ᵍʳᵖ(♭PSL(2, ℂ), ℤ) itself is also called the extended Bloch group”

**Sources:**

- [Walter D. Neumann, Extended Bloch group and the Cheeger–Chern–Simons class (2004)](https://doi.org/10.2140/gt.2004.8.413)

### Holonomy classes scale under covers

**Remember:** Push the fundamental class forward; a degree-d cover gives d copies.

*True by definition.* MSC 57K32 (Hyperbolic 3-manifolds), 19D55. arXiv math.GT, math.KT. Level 4: research.

**Definition.** The Bloch class β(M) of a closed oriented hyperbolic three-manifold pushes its fundamental class forward under holonomy, the map sending loops to isometries. It lands in the third integral homology of the discrete group PSL(2, ℂ), taken modulo elements of finite order.

**Problem.** If N → M is an orientation-preserving covering of degree d between closed oriented hyperbolic three-manifolds with the lifted metric, then β(N) = dβ(M).

**How the definition helps.** β is a pushforward of the fundamental class, so the covering formula follows from composition (our own). A degree-d covering sends \[N\] to d\[M\], and the holonomy of N factors through that of M. The Bloch–Wigner theorem identifies this quotient with the usual group of tetrahedron symbols (our own).

**nLab:** [Bloch group](https://ncatlab.org/nlab/show/Bloch+group). It says: “The fundamental class of a hyperbolic 3-manifold X canonically gives an element in the Bloch group”

**Sources:**

- [Walter D. Neumann, Extended Bloch group and the Cheeger–Chern–Simons class (2004)](https://doi.org/10.2140/gt.2004.8.413)

### Log shifts absorb Rogers monodromy

**Remember:** Let the formula carry its own logarithm branches.

*Makes the theorem clean to state or prove.* MSC 57K32 (Hyperbolic 3-manifolds), 33B30. arXiv math.GT, math.KT. Level 4: research.

**Definition.** Neumann's corrected Rogers value is R(z) + πi(p log(1−z) + q log z)/2 − π²/6, where R(z) = Li₂(z) + log(z)log(1−z)/2 and z lies outside {0, 1}. The integers p and q record which branches of log z and −log(1−z) are in use, in steps of πi.

**Problem.** The corrected value is single-valued modulo π²ℤ on Neumann’s logarithm cover of ℂ minus 0 and 1.

**How the definition helps.** Going around a loop changes p or q, and the correction terms absorb the jump of R (our own). So each point of the cover gets one value modulo π², since counterclockwise around 0 leaves −qπ² and clockwise around 1 leaves pπ². Neumann computes both changes by continuing the dilogarithm around the loops.

**nLab:** [Bloch group](https://ncatlab.org/nlab/show/Bloch+group). It says: “This is called the Cheeger-Simons class.”

**Sources:**

- [Walter D. Neumann, Extended Bloch group and the Cheeger–Chern–Simons class (2004)](https://doi.org/10.2140/gt.2004.8.413)

### Mapping tori explain mutation invariance

**Remember:** Mutation changes only torsion, and the Bloch class forgets torsion.

*True by definition.* MSC 57K32 (Hyperbolic 3-manifolds), 19D55. arXiv math.GT, math.KT. Level 4: research.

**Definition.** The ordinary Bloch class of a closed oriented hyperbolic three-manifold pushes its fundamental class forward under holonomy. It lands in the third integral homology of the discrete group PSL(2, ℂ), modulo all elements of finite order.

**Problem.** Cut along an essential embedded two-sided surface and reglue by a finite-order isometry of its neighborhood that preserves orientation and sides. This generalized mutation preserves the ordinary Bloch class.

**How the definition helps.** Mutation changes the homology class only by the class of a mapping torus of the finite-order symmetry, and the quotient discards finite-order elements (our own). A finite cover of that mapping torus is a surface times a circle, whose holonomy kills the circle, so its class vanishes. Hence the mapping torus class has finite order.

**nLab:** [Bloch group](https://ncatlab.org/nlab/show/Bloch+group). It says: “The fundamental class of a hyperbolic 3-manifold X canonically gives an element in the Bloch group”

**Sources:**

- [Walter D. Neumann, Realizing arithmetic invariants of hyperbolic 3-manifolds (2011)](https://doi.org/10.1090/conm/541/10687)

### Meridian flattenings remove filling corrections

**Remember:** Make the filled meridian sum to zero, like any contractible loop.

*Makes the theorem clean to state or prove.* MSC 57K32 (Hyperbolic 3-manifolds). arXiv math.GT. Level 4: research.

**Definition.** A flattening shifts two shape logarithms of each tetrahedron by integer multiples of πi and picks the third so the three sum to zero. For a filled manifold, signed log sums vanish around edges, along closed normal paths in unfilled vertex links, and along normal loops that contract in added solid tori. Parity sums also vanish around edges and along every closed normal path.

**Problem.** For Neumann's degree-one triangulation of a hyperbolic Dehn filling, such flattenings exist. Their signed tetrahedron sum is the filled manifold's extended Bloch class.

**How the definition helps.** A meridian bounds a disc in the added solid torus, so requiring zero sum along it absorbs the filling correction into the tetrahedron sum (our own). Old flattenings carried through the filling leave a meridian sum of 2πi and need a separate term for the core geodesic. Neumann's Theorem 14.7 builds the adjusted flattenings and identifies their sum with the manifold's class.

**nLab:** [Bloch group](https://ncatlab.org/nlab/show/Bloch+group). It says: “Accordingly H₃ᵍʳᵖ(♭PSL(2, ℂ), ℤ) itself is also called the extended Bloch group”

**Sources:**

- [Walter D. Neumann, Extended Bloch group and the Cheeger–Chern–Simons class (2004)](https://doi.org/10.2140/gt.2004.8.413)

### Pseudo-Anosov gluing gives hyperbolic bundles

**Remember:** Stretch one way, shrink the other, and no curve ever returns.

*Rules out counterexamples.* MSC 57K32 (Hyperbolic 3-manifolds), 57K20. arXiv math.GT. Level 4: research.

**Definition.** A pseudo-Anosov surface map stretches one measured foliation by a factor λ &gt; 1 and shrinks a transverse one by 1/λ, where the foliations have finitely many prong singularities. So no power of the map fixes an essential simple closed curve up to isotopy (our own remark).

**Problem.** Let the surface be closed and oriented with genus at least two. The mapping torus of an orientation-preserving pseudo-Anosov map, the surface times an interval with ends glued by the map, is hyperbolic.

**How the definition helps.** Since no curve returns, the mapping torus has no essential torus, and Thurston's hyperbolization theorem for fibered manifolds gives the metric. The identity gluing gives the surface times a circle, which is excluded (our own example). There a curve times the circle gives a subgroup ℤ², which no closed hyperbolic three-manifold group has.

**Paper or page:** [Cusp geometry of fibered 3-manifolds](https://arxiv.org/abs/1108.5748v2). It says: “For every orientation-preserving, pseudo-Anosov homeomorphism φ : F → F, the mapping torus Mφ is a hyperbolic 3–manifold”

**Sources:** none listed. No primary source with a working link was found.

### Relative classes record cusp boundaries

**Remember:** Relative homology keeps the cusp torus as a boundary.

*Rules out counterexamples.* MSC 57K32 (Hyperbolic 3-manifolds), 20J06. arXiv math.GT. Level 4: research.

**Definition.** The relative holonomy class of a one-cusped oriented complete finite-volume hyperbolic three-manifold is the image of its truncated core C, relative to its boundary torus, in H₃(G,P;ℤ). Here G = PSL(2,ℂ) is discrete, and P = (ℂ,+) is the translation group into which holonomy is conjugated to send the cusp group.

**Problem.** For an oriented basis of torus loops with translations a and b, the boundary of this class is a ∧ b. In the figure-eight knot complement this boundary is nonzero, so the class cannot come from absolute homology H₃(G).

**How the definition helps.** Relative homology keeps the boundary torus, which an absolute cycle cannot have (our own). The boundary map sends the class to the torus, which gives a ∧ b in H₂(P;ℤ). In the figure-eight knot complement a and b span a lattice in ℂ, so a ∧ b is nonzero (our own).

**nLab:** [Bloch group](https://ncatlab.org/nlab/show/Bloch+group). It says: “The fundamental class of a hyperbolic 3-manifold X canonically gives an element in the Bloch group”

**Sources:**

- [Walter D. Neumann, Extended Bloch group and the Cheeger–Chern–Simons class (2004)](https://doi.org/10.2140/gt.2004.8.413)
- [Christian K. Zickert, The volume and Chern–Simons invariant of a representation (2009)](https://doi.org/10.1215/00127094-2009-058)

### The projective modulus fits mutation

**Remember:** An order-two mutation needs an order-two jump.

*Rules out counterexamples.* MSC 57K32 (Hyperbolic 3-manifolds), 57R20. arXiv math.GT. Level 4: research.

**Definition.** The projective Chern–Simons invariant of an oriented complete cusped hyperbolic three-manifold of finite volume is a real number modulo π², not 2π². It comes from evaluating a characteristic class on the holonomy, the isometries representing loops.

**Problem.** Cut along an essential embedded thrice-punctured sphere and reglue by the mutation involution, a symmetry of order two. The invariant changes by π²/2 modulo π². Neither lift of this change modulo 2π² has order two.

**How the definition helps.** The mutation involution has order two, and modulo π² the jump π²/2 also has order two, so the modulus fits the mutation (our own). Modulo 2π², doubling either lift gives π², which is nonzero. Neumann proves the mutation formula and exhibits the jump with the two orientations of the Whitehead link complement.

**nLab:** [Bloch group](https://ncatlab.org/nlab/show/Bloch+group). It says: “This is called the Cheeger-Simons class.”

**Sources:**

- [Walter D. Neumann, Realizing arithmetic invariants of hyperbolic 3-manifolds (2011)](https://doi.org/10.1090/conm/541/10687)

### Trace fields fix conjugate volumes

**Remember:** An embedding of the smaller field already fixes the answer.

*True by definition.* MSC 57K32 (Hyperbolic 3-manifolds), 19F27. arXiv math.GT, math.KT. Level 4: research.

**Definition.** The invariant trace field k of a complete oriented cusped hyperbolic three-manifold of finite volume is generated over ℚ by squared holonomy traces, using determinant-one matrices. The rational Bloch invariant, the signed sum of tetrahedron shapes, is represented over k.

**Problem.** Fix an embedding of k into ℂ. Every extension to a field containing k and the shapes gives the same signed volume for the embedded class.

**How the definition helps.** Once the class lives over k, two extensions of an embedding of k agree on it, so they give the same volume (our own). Individual tetrahedra may need a larger field, but the descent theorem places their total over k.

**Paper or page:** [Chern-Simons invariants of hyperbolic three-manifolds, mixed Tate motives, and motivic path torsor of augmented character varieties](https://arxiv.org/abs/2502.11950v1). It says: “Moreover, the image of β(M) in ℬ(ℂ) ⊗ ℚ lies in ℬ(k(M)) ⊗ ℚ.”

**Sources:**

- [Dong Uk Lee, Chern-Simons invariants of hyperbolic three-manifolds, mixed Tate motives, and motivic path torsor of augmented character varieties (2025), Theorem 2.4.1](https://arxiv.org/abs/2502.11950v1)

### Transfer kills spurious two-torsion

**Remember:** Same shape, swap the second shifts, and the sum stays put.

*Rules out counterexamples.* MSC 57K32 (Hyperbolic 3-manifolds), 19D55. arXiv math.GT, math.KT. Level 4: research.

**Definition.** In the extended pre-Bloch group, a symbol \[z;p,q\] is a tetrahedron shape z with integers p, q that shift two shape logarithms by multiples of πi. The relations are five-term relations with matching logarithms around each edge, and transfer: two symbols with the same shape may swap their second shifts.

**Problem.** In Neumann’s projective extended pre-Bloch group, omitting transfer adds a cyclic summand of order two. Its generator is \[z;1,1\] + \[z;0,0\] − \[z;1,0\] − \[z;0,1\].

**How the definition helps.** Swapping second shifts turns \[z;1,1\] + \[z;0,0\] into \[z;1,0\] + \[z;0,1\], so transfer makes the generator zero (our own). Without transfer, the product pq modulo two detects this element. Neumann proves that it generates exactly the extra summand.

**nLab:** [Bloch group](https://ncatlab.org/nlab/show/Bloch+group). It says: “Accordingly H₃ᵍʳᵖ(♭PSL(2, ℂ), ℤ) itself is also called the extended Bloch group”

**Sources:**

- [Walter D. Neumann, Extended Bloch group and the Cheeger–Chern–Simons class (2004)](https://doi.org/10.2140/gt.2004.8.413)

### Algebra monodromy detects loops of Legendrian knots that are smoothly contractible

**Remember:** Carry the algebra around the loop and see what changed.

*Makes the theorem clean to state or prove.* MSC 57K33 (Contact structures in 3 dimensions), 53D42. arXiv math.SG, math.GT. Level 4: research.

**Definition.** A loop of Legendrian knots is a path of Legendrian knots that starts and ends at one knot K. Along each path the Chekanov–Eliashberg algebra, built on the crossings of the Lagrangian projection, changes by an explicit map. So a loop induces an automorphism of the algebra of K, its monodromy, well defined up to homotopy.

**Problem.** A loop of Legendrian knots whose monodromy is not homotopic to the identity cannot be contracted through Legendrian knots. Kálmán found such loops that can be contracted through smooth knots, and some braid loops even have monodromy of infinite order.

**How the definition helps.** A contractible loop has monodromy homotopic to the identity, so any other monodromy obstructs contraction (our own). The invariance proof already gives a map along each path, so the monodromy needs no new construction (our own). The work lies in showing that homotopic loops give homotopic maps, and in computing the map for a chosen loop (our own).

**Wikipedia:** [Legendrian knot](https://en.wikipedia.org/wiki/Legendrian_knot). It says: “This Chekanov-Eliashberg invariant yields an invariant for loops of Legendrian knots by considering the monodromy of the loops. This has yielded noncontractible loops of Legendrian knots which are contractible in the space of all knots.”

**Paper or page:** [Braid Loops with infinite monodromy on the Legendrian contact DGA](https://arxiv.org/abs/2101.02318). It says: “The purple-box Legendrian loop ϑ : S¹ → ℒ(Λ) induces a DGA map 𝒜(L\_ϑ) : 𝒜(Λ) → 𝒜(Λ) of infinite order.”

**Sources:**

- [Kálmán, Contact homology and one parameter families of Legendrian knots, Geometry &amp; Topology (2005)](https://doi.org/10.2140/gt.2005.9.2013)

### Allowing stabilization by paired generators makes the Chekanov algebra a Legendrian invariant

**Remember:** A pair of crossings born together cancels in homology.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 57K33 (Contact structures in 3 dimensions), 53D42. arXiv math.SG, math.GT. Level 4: research.

**Definition.** Two differential graded algebras are stable tame isomorphic when, after adding pairs of generators e, e′ with ∂e = e′, they become isomorphic. The isomorphism must be a composition of elementary changes, each altering one generator. The added pairs have zero homology.

**Problem.** The Chekanov–Eliashberg algebra of a Legendrian knot, built on the crossings of its Lagrangian projection, is a Legendrian isotopy invariant up to stable tame isomorphism. Its homology is therefore an invariant too.

**How the definition helps.** The Reidemeister move that creates two crossings adds two generators, which a change of generators turns into a pair with ∂e = e′ (our own). So the algebra is not invariant up to isomorphism, but it is once such pairs are allowed, and homology does not change (our own). The moves come from Theorem 2.3 of the paper: Lagrangian projections of Legendrian isotopic knots are related by Legendrian Reidemeister moves.

**Paper or page:** [Persistent Legendrian contact homology in ℝ³](https://arxiv.org/abs/2312.09144), [Persistent Legendrian contact homology in ℝ³](https://arxiv.org/abs/2312.09144). It says: “Let (𝒜\_Λ, ∂\_Λ) be a filtered Chekanov-Eliashberg DGA, and let (S<sub>k</sub>𝒜\_Λ, ∂\_Λ) be its grading-k stabilization, with additional generators denoted e<sub>k</sub> and e<sub>k−1</sub>.”

**Sources:**

- [Chekanov, Differential algebra of Legendrian links, Inventiones Mathematicae (2002)](https://doi.org/10.1007/s002220200212)

### An overtwisted complement makes classical invariants classify loose Legendrian knots

**Remember:** A loose knot sits in flexible space, so only its numbers matter.

*Rules out counterexamples. Confidence: medium.* MSC 57K33 (Contact structures in 3 dimensions), 57K10. arXiv math.GT, math.SG. Level 4: research.

**Definition.** A Legendrian knot in an overtwisted contact 3-manifold is loose when its complement is also overtwisted, that is, when the complement contains an overtwisted disk. A knot whose complement is tight is called non-loose.

**Problem.** Loose Legendrian knots in one contact 3-manifold, of one knot type and bounding surfaces, are determined up to contactomorphism by their Thurston–Bennequin and rotation numbers. This fails once non-loose knots are allowed.

**How the definition helps.** A loose knot has an overtwisted complement, where Eliashberg's classification reduces the question to homotopy data that equal invariants make match (our own). Without the condition this fails: (S³, ξ₁) holds a non-loose and a loose unknot, both with tb = 2 and rot = 1 (our own). A contactomorphism keeps the complement overtwisted or tight, so none maps one knot to the other (our own).

**Paper or page:** [Contact surgery numbers](https://arxiv.org/abs/2201.00157). It says: “U is the non-loose unknot with (tb(U), rot(U)) = (2, ±1)”

**Sources:**

- [Etnyre, On knots in overtwisted contact structures, Quantum Topology 4 (2013), 229–264](https://doi.org/10.4171/QT/39)
- [Etnyre, Kegel, Onaran, Contact surgery numbers (2023)](https://arxiv.org/abs/2201.00157)

### Augmentations linearize the Chekanov–Eliashberg algebra into finite invariants

**Remember:** An augmentation is a base point that makes the algebra linear.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 57K33 (Contact structures in 3 dimensions), 53D42. arXiv math.SG, math.GT. Level 4: research.

**Definition.** The Chekanov–Eliashberg algebra 𝒜 is a differential graded algebra over ℤ/2 generated by the crossings of a Lagrangian projection. An augmentation is an algebra map ε from 𝒜 to ℤ/2 with ε(1) = 1 and ε∘∂ = 0, usually zero in nonzero degrees. Changing each generator a to a + ε(a) and keeping only the linear part of the differential gives a finite-dimensional chain complex.

**Problem.** The set of linearized homologies, one for each augmentation, is a Legendrian isotopy invariant. Their Poincaré polynomials distinguish two Legendrian knots found by Chekanov, which have the same knot type and equal Thurston–Bennequin and rotation numbers.

**How the definition helps.** The full homology is a noncommutative algebra and is hard to compare, but each linearized homology is a finite list of dimensions (our own). The condition ε∘∂ = 0 removes the constant term of the changed differential, so its linear part squares to zero (our own). The work is Chekanov's invariance theorem, which carries augmentations and linearized homologies along (our own).

**Wikipedia:** [Relative contact homology](https://en.wikipedia.org/wiki/Relative_contact_homology). It says: “The relative contact homology has been shown to be a strictly more powerful invariant than the "classical invariants", namely Thurston-Bennequin number and rotation number (within a class of smooth knots).”

**Paper or page:** [Persistent Legendrian contact homology in ℝ³](https://arxiv.org/abs/2312.09144). It says: “The collection of linearized Legendrian contact homologies {LCH\_\*<sup>ε</sup>(Λ) \| ε: 𝒜\_Λ → ℤ₂ is an augmentation} is a Legendrian isotopy invariant of Λ.”

**Sources:**

- [Chekanov, Differential algebra of Legendrian links, Inventiones Mathematicae (2002)](https://doi.org/10.1007/s002220200212)

### Closed braids around the z-axis present every transverse link

**Remember:** Spin around the axis fast enough and you are transverse.

*Makes the theorem clean to state or prove.* MSC 57K33 (Contact structures in 3 dimensions), 57K10. arXiv math.GT, math.SG. Level 4: research.

**Definition.** Write the standard contact structure as the kernel of the symmetric form dz + r² dθ in cylindrical coordinates. A closed braid around the z-axis is a link along which the angle θ always increases. Moved far from the axis through braids, it becomes transverse, because there r² dθ outweighs dz.

**Problem.** Every transverse link in standard contact R³ is transversely isotopic to a closed braid. Two braids give the same transverse link exactly when conjugations and positive Markov stabilizations, which add one strand and one positive crossing, relate them.

**How the definition helps.** With the symmetric form, braids are a natural supply of transverse links, and Bennequin's theorem says that they give all of them (our own). The transverse Markov theorem of Orevkov–Shevchishin and Wrinkle then drops only negative stabilization from the classical Markov theorem. That move must go, because it lowers the self-linking number, writhe minus strand count, by 2 (our own).

**Paper or page:** [A Transverse Braiding Theorem with Rational Open Book Decomposition](https://arxiv.org/abs/2503.18106), [Grid Diagrams, Braids, and Contact Geometry](https://arxiv.org/abs/0812.3665). It says: “Any transverse link L in (ℝ³, ξ<sub>std</sub>) is transversely isotopic to a link braided about the z-axis.”

**Sources:**

- [Orevkov, Shevchishin, Markov theorem for transversal links, Journal of Knot Theory and Its Ramifications (2003)](https://doi.org/10.1142/S0218216503002846)
- [Ng, Thurston, Grid diagrams, braids, and contact geometry (2009)](https://arxiv.org/abs/0812.3665)

### Convex surfaces compute the Euler class from their dividing set

**Remember:** The dividing set splits a convex surface into positive and negative halves.

*True by definition. Confidence: medium.* MSC 57K33 (Contact structures in 3 dimensions), 53D10. arXiv math.SG, math.GT. Level 4: research.

**Definition.** A surface Σ is convex when a vector field preserving the contact structure is transverse to it. Then a dividing set Γ cuts Σ into parts R₊ and R₋. A Reeb field of a suitable contact form crosses R₊ positively and R₋ negatively.

**Problem.** For a closed oriented convex surface Σ, the Euler class of the contact structure evaluated on Σ equals χ(R₊) − χ(R₋).

**How the definition helps.** The Reeb definition reduces the theorem to the Poincaré–Hopf theorem (our own). Projecting along the Reeb field matches the planes with the tangent planes of Σ, keeping orientation over R₊ and reversing it over R₋ (our own). The work moves into the quoted lemma that this Reeb description is equivalent to convexity, which replaces the usual count of singular points (our own).

**Paper or page:** [Sutured contact homology, conormal stops and hyperbolic knots](https://arxiv.org/abs/2206.07782). It says: “Γ splits Σ alternating parts R±, such R+ induces on Γ the previous orientation (ie Γ = ∂R+ = −∂R−). The Reeb vector field associated to λ is positively (resp. negatively) transverse to R±.”

**Sources:**

- [E. Giroux, Convexité en topologie de contact, Comment. Math. Helv. 66 (1991) 637–677](https://doi.org/10.1007/BF02566670)
- [V. Colin, P. Ghiggini, K. Honda and M. Hutchings, Sutures and contact homology I, Geom. Topol. 15 (2011) 1749–1842](https://doi.org/10.2140/gt.2011.15.1749)

### Crossing heights make the Chekanov–Eliashberg differential strictly lower height

**Remember:** Area spent on a disk is height lost.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 57K33 (Contact structures in 3 dimensions), 53D42. arXiv math.SG, math.GT. Level 4: research.

**Definition.** The height of a crossing of the Lagrangian projection is the difference of the z-values of the two knot points above it. Because dz = y dx along the knot, a polygon bounded by the projection has area equal to a difference of corner heights. It is the height of its positive corner minus those of its negative corners.

**Problem.** The differential of the Chekanov–Eliashberg algebra counts immersed polygons with corners at crossings, and it strictly lowers height, since they have positive area. So the algebra is filtered by height, and its linearized homology becomes a persistence module.

**How the definition helps.** By Stokes' theorem a polygon's area is the integral of y dx around it, which along the knot is the change in z (our own). So each term of ∂a lies below a in height, and the generators below any height bound span a subcomplex (our own). These nested subcomplexes form the persistence module, which records how long each homology class lasts as the bound grows (our own).

**Paper or page:** [Persistent Legendrian contact homology in ℝ³](https://arxiv.org/abs/2312.09144). It says: “The Chekanov-Eliashberg DGA with a height filtration is an example of a persistence module of DGAs.”

**Sources:**

- [Chekanov, Differential algebra of Legendrian links, Inventiones Mathematicae (2002)](https://doi.org/10.1007/s002220200212)

### Defining Legendrian by vanishing integrals extends Legendrian knot theory to rough curves

**Remember:** Integrals see a corner where derivatives fail.

*Makes the theorem clean to state or prove.* MSC 57K33 (Contact structures in 3 dimensions), 53D10. arXiv math.SG, math.GT. Level 4: research.

**Definition.** A Lavrentiev curve is a rectifiable curve in which each arc is at most a fixed multiple longer than the distance between its endpoints. Such a curve is called Legendrian when the contact form integrates to zero over every subarc, a condition that needs no tangent vectors.

**Problem.** Legendrian Lavrentiev links up to Legendrian isotopy fall into exactly the same classes as smooth Legendrian links. A locally Lavrentiev curve satisfies the integral condition exactly when its derivative, which exists almost everywhere, lies in the contact plane.

**How the definition helps.** The integral condition makes sense for curves with corners, so piecewise smooth curves without cusps can be Legendrian (our own). Corollary 3.9 shows that it agrees with the tangent condition almost everywhere, and no new isotopy classes appear. So proofs may use curves with corners and still prove results about smooth Legendrian links (our own).

**Paper or page:** [Legendrian Lavrentiev links](https://arxiv.org/abs/2404.13473). It says: “We define Legendrian isotopies of such curves and prove that the equivalence classes of Legendrian Lavrentiev links with respect to Legendrian isotopies coincide with smooth classes.”

**Sources:**

- [Prasolov, Legendrian Lavrentiev links (2024)](https://arxiv.org/abs/2404.13473)

### Dividing slopes make tight solid tori paths in the Farey graph

**Remember:** Dividing slopes are rational points, and tight structures are paths between them.

*Makes the theorem clean to state or prove.* MSC 57K33 (Contact structures in 3 dimensions). arXiv math.GT, math.SG. Level 4: research.

**Definition.** A solid torus with convex boundary has two parallel dividing curves on its boundary, and their slope is a rational number. In the Farey graph two slopes are joined when curves of those slopes can meet exactly once.

**Problem.** Tight structures on a solid torus with two boundary dividing curves of given slope correspond to decorated Farey paths, up to shuffling in blocks. It is universally tight, meaning tight on the universal cover, exactly when all signs agree.

**How the definition helps.** Recording a convex torus by one rational slope turns layers of bypasses into steps along Farey edges (our own). Each step carries a sign, the side of its bypass, and these signs are the decorations (our own). Giroux and Honda proved the correspondence, and it classifies tight lens spaces by continued fractions (our own).

**Paper or page:** [Knotted solid tori in contact manifolds](https://arxiv.org/abs/2502.15165). It says: “Tight contact structure on the solid torus Sₘ with lower meridian m and convex boundary with two dividing curves of slope r are in one-to-one correspondence with partially decorated paths in the Farey graph”

**Sources:**

- [K. Honda, On the classification of tight contact structures I, Geom. Topol. 4 (2000) 309–368](https://doi.org/10.2140/gt.2000.4.309)
- [E. Giroux, Structures de contact en dimension trois et bifurcations des feuilletages de surfaces, Invent. Math. 141 (2000) 615–689](https://doi.org/10.1007/s002220000082)

### Fixing one overtwisted disk makes Eliashberg's theorem a homotopy equivalence

**Remember:** Pin one overtwisted disk down, and whole families become flexible.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 57K33 (Contact structures in 3 dimensions), 57R17. arXiv math.GT, math.SG. Level 4: research.

**Definition.** Fix an embedded disk Δ and a contact structure near Δ for which Δ is an overtwisted disk. Contact structures overtwisted along Δ are those that agree with this fixed structure near Δ.

**Problem.** On a closed oriented 3-manifold, consider the contact structures overtwisted along a fixed disk Δ. Their inclusion into the plane fields that agree with the fixed structure near Δ is a homotopy equivalence.

**How the definition helps.** Fixing the disk gives every member of a family the same overtwisted disk, so the extension argument works for whole families (our own). Without a common disk, different members could need different disks, and the argument would not run (our own). On connected components the theorem gives back the classification by homotopy classes of plane fields (our own).

**Paper or page:** [A proof of the classification theorem of overtwisted contact structures via convex surface theory](https://arxiv.org/abs/1102.5398). It says: “Let M be a closed, oriented 3-manifold. Then the inclusion j: Contᵒᵗ(M,△) → Distr(M,△) is a homotopy equivalence.”

**Sources:**

- [Y. Eliashberg, Classification of overtwisted contact structures on 3-manifolds, Invent. Math. 98 (1989) 623–637](https://doi.org/10.1007/BF01393840)

### Grid diagrams present Legendrian and transverse links by allowed stabilization types

**Remember:** Which corners you may stabilize decides which kind of knot you see.

*Makes the theorem clean to state or prove.* MSC 57K33 (Contact structures in 3 dimensions), 57K10. arXiv math.GT, math.SG. Level 4: research.

**Definition.** A grid diagram is a square grid with one X and one O in each row and column, joined by segments, verticals crossing over horizontals. Smoothing its northeast and southwest corners, turning it by 45 degrees and switching all crossings gives a Legendrian front. The other two corner types become cusps.

**Problem.** Legendrian links correspond one to one with grid diagrams up to translation, commutation and stabilizations of types X:NE and X:SW. Transverse links correspond to the further quotient by X:SE stabilization.

**How the definition helps.** X:NE and X:SW stabilizations keep the Legendrian link, so Legendrian links are grid diagrams up to these moves (our own). Proposition 3 says that an X:SE stabilization is a negative Legendrian stabilization, so allowing it too gives transverse links, as the approximation theorem predicts. One finite combinatorial object thus carries braids, Legendrian links and transverse links at once (our own).

**Wikipedia:** [Thurston–Bennequin number](https://en.wikipedia.org/wiki/Thurston%E2%80%93Bennequin_number). It says: “By smoothing the 'northeast' and 'southwest' corners and rotating the diagram and switching all crossings, one can convert a grid diagram into the associated Legendrian knot.”

**Paper or page:** [Grid Diagrams, Braids, and Contact Geometry](https://arxiv.org/abs/0812.3665), [Grid Diagrams, Braids, and Contact Geometry](https://arxiv.org/abs/0812.3665). It says: “Let 𝒢̃ denote the quotient set 𝒢/(translation, commutation). The maps 𝒢→ℬ, 𝒢→ℒ, and 𝒢→𝒯 induce bijections ℬ ⟷ 𝒢̃/(X:NE, X:SE (de)stabilization) ℒ ⟷ 𝒢̃/(X:NE, X:SW (de)stabilization) 𝒯 ⟷ 𝒢̃/(X:NE, X:SW, X:SE (de)stabilization).”

**Sources:**

- [Ng, Thurston, Grid diagrams, braids, and contact geometry (2009)](https://arxiv.org/abs/0812.3665)
- [Ozsváth, Szabó, Thurston, Legendrian knots, transverse knots and combinatorial Floer homology, Geometry &amp; Topology (2008)](https://doi.org/10.2140/gt.2008.12.941)

### Legendrian approximation turns negative-stabilization invariants into transverse knot invariants

**Remember:** A transverse knot is a Legendrian knot that forgot its negative zigzags.

*Makes the theorem clean to state or prove.* MSC 57K33 (Contact structures in 3 dimensions), 57K18. arXiv math.GT, math.SG. Level 4: research.

**Definition.** A transverse knot is a knot that crosses the contact planes at every point. A Legendrian approximation of a transverse knot T is a Legendrian knot whose positive transverse push-off is transversely isotopic to T. The push-off is a nearby copy moved slightly off the contact planes in the positive direction.

**Problem.** Transverse knots correspond one to one with Legendrian knots up to isotopy and negative stabilization, which adds a small zigzag to a front. So every Legendrian invariant unchanged by negative stabilization is a transverse invariant.

**How the definition helps.** Two Legendrian approximations of one transverse knot differ only by isotopy and negative stabilizations, so such an invariant agrees on them. The Heegaard Floer invariant 𝔏 satisfies 𝔏(L⁻) = 𝔏(L), so its value on any approximation is a transverse invariant. The grid invariant θ arises the same way, and the work sits in the approximation theorem of Epstein, Fuchs and Meyer (our own).

**Wikipedia:** [Transverse knot](https://en.wikipedia.org/wiki/Transverse_knot). It says: “This yields a bijection between the set of isomorphism classes of transverse knots and the set of isomorphism classes of Legendrian knots modulo negative Legendrian stabilization.”

**Paper or page:** [Heegaard Floer invariants of Legendrian knots in contact three--manifolds](https://arxiv.org/abs/0802.0628), [Heegaard Floer invariants of Legendrian knots in contact three--manifolds](https://arxiv.org/abs/0802.0628), [Quasi-isomorphism of grid chain complexes for a connected sum of knots](https://arxiv.org/abs/2312.02610). It says: “Let L be a (compatibly oriented) Legendrian approximation of T. Then, 𝔗(T):= 𝔏(L) and 𝔗̂(T) := 𝔏̂(L) are invariants of the transverse knot type of T.”

**Sources:**

- [Epstein, Fuchs, Meyer, Chekanov–Eliashberg invariants and transverse approximations of Legendrian knots, Pacific Journal of Mathematics (2001)](https://doi.org/10.2140/pjm.2001.201.89)
- [Lisca, Ozsváth, Stipsicz, Szabó, Heegaard Floer invariants of Legendrian knots in contact three-manifolds, Journal of the European Mathematical Society (2009)](https://doi.org/10.4171/JEMS/183)

### Ng's resolution lets fronts compute the Chekanov–Eliashberg algebra

**Remember:** Redraw the front by local rules, and it becomes a Lagrangian picture.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 57K33 (Contact structures in 3 dimensions), 53D42. arXiv math.SG, math.GT. Level 4: research.

**Definition.** The resolution of a front is a plane diagram made from it by local rules. Each left cusp is smoothed, each right cusp becomes a small loop with one crossing, and each crossing of the front stays a crossing.

**Problem.** The resolution of a front is the Lagrangian projection of a Legendrian knot isotopic to the original one. So the Chekanov–Eliashberg algebra, built on the crossings of a Lagrangian projection, can be read from the front's crossings and right cusps.

**How the definition helps.** The Chekanov–Eliashberg algebra, a differential graded algebra on the crossings of the Lagrangian projection, needs that hard-to-draw projection (our own). The crossings of the resolution are the front's crossings and right cusps, so generators and disks can be read from the front (our own). The work goes into showing that the rules give a knot Legendrian isotopic to the first one (our own).

**Paper or page:** [Bordered Legendrian Rational Symplectic Field Theory](https://arxiv.org/abs/2509.07921). It says: “The resolution of Π<sub>xz</sub>(Λ) is the Lagrangian projection Π<sub>xy</sub>(Λ′) for another Legendrian knot Λ′ Legendrian isotopic to Λ.”

**Sources:**

- [Ng, Computable Legendrian invariants, Topology (2003)](https://doi.org/10.1016/S0040-9383(02)00010-1)

### Non-isolating graphs on a page can be made Legendrian

**Remember:** Every region cut out by the graph must reach the binding.

*Rules out counterexamples.* MSC 57K33 (Contact structures in 3 dimensions), 57K10. arXiv math.GT, math.SG. Level 4: research.

**Definition.** An open book cuts a 3-manifold minus a link, the binding, into surfaces called pages. A graph G in a page is non-isolating when every component of the page minus G reaches the boundary of the page.

**Problem.** Let an open book support a contact structure, and let G be a connected non-isolating graph in a page. Then an isotopy of the open book, still supporting the structure, makes G Legendrian in its page.

**How the definition helps.** Non-isolating is exactly the condition that Stokes' theorem forces, since dα &gt; 0 on pages and α vanishes on Legendrian curves (our own). Stokes would give 0 &lt; ∫ of dα over R = ∫ of α over ∂R = 0 for a region R bounded by G (our own). That the condition suffices is Honda's Legendrian realization principle adapted to pages (our own).

**Paper or page:** [Non-looseness of boundaries of Legendrian ribbons](https://arxiv.org/abs/2307.06828). It says: “Given an open book supporting the contact 3-manifold (M,ξ) and containing a non-isolating connected graph G in the interior of a page, the open book may be isotoped so that it supports (M,ξ) with the graph G now Legendrian”

**Sources:**

- [K. Honda, On the classification of tight contact structures I, Geom. Topol. 4 (2000) 309–368](https://doi.org/10.2140/gt.2000.4.309)
- [K. L. Baker and S. Onaran, Non-looseness of boundaries of Legendrian ribbons, arXiv:2307.06828](https://arxiv.org/abs/2307.06828)

### Planar open books make every filling a Lefschetz fibration

**Remember:** Planar pages are spheres with holes.

*Makes the theorem clean to state or prove.* MSC 57K33 (Contact structures in 3 dimensions), 53D35, 57K43. arXiv math.SG, math.GT. Level 4: research.

**Definition.** An open book is planar when its pages have genus zero, so each page is a sphere with holes. A contact 3-manifold is planar when some planar open book supports it.

**Problem.** Let a contact 3-manifold be supported by a planar open book. Then every minimal strong filling of it is, up to deformation, a Lefschetz fibration inducing that open book on the boundary (Wendl).

**How the definition helps.** Genus-zero pages lift to holomorphic curves of index two, and in genus zero such curves are automatically regular (our own). Positivity of intersections then makes them foliate the whole filling, which gives the Lefschetz fibration (our own). So fillings of planar contact manifolds correspond to factorizations of the monodromy into right-handed Dehn twists (our own).

**Paper or page:** [Monodromy factorizations of Seifert fibered spaces](https://arxiv.org/abs/2208.13924). It says: “If (Y,ξ) is a contact 3-manifold supported by a planar open book 𝒪ℬ, then, up to symplectic deformation, every minimal symplectic filling (W,ω) of (Y,ξ) is supported by a Lefschetz fibration which induces 𝒪ℬ on its boundary.”

**Sources:**

- [C. Wendl, Strongly fillable contact manifolds and J-holomorphic foliations, Duke Math. J. 151 (2010) 337–384](https://doi.org/10.1215/00127094-2010-001)

### Requiring a tight complement gives non-loose transverse links the Bennequin bound

**Remember:** Tightness is needed only off the link itself.

*Rules out counterexamples. Confidence: medium.* MSC 57K33 (Contact structures in 3 dimensions), 57K10. arXiv math.GT, math.SG. Level 4: research.

**Definition.** A transverse link T in a contact 3-manifold is non-loose when its complement is tight. Tight means that it contains no overtwisted disk, a disk with Legendrian boundary along which the contact planes do not twist relative to the disk.

**Problem.** A non-loose transverse link T that bounds an oriented surface Σ satisfies sl(T, \[Σ\]) ≤ −χ(Σ). This holds even when the whole contact manifold is overtwisted.

**How the definition helps.** In a tight manifold every null-homologous transverse link satisfies this bound, and the proof needs tightness only off the link (our own). Loose links can fail: an overtwisted 3-sphere holds a loose Legendrian unknot with tb = 0 and rot = 1 (our own). One of its transverse push-offs is loose with sl = 1, which is more than −χ(disk) = −1 (our own).

**Paper or page:** [Non-looseness of boundaries of Legendrian ribbons](https://arxiv.org/abs/2307.06828), [Contact surgery numbers](https://arxiv.org/abs/2201.00157). It says: “Let T be a non-loose, null-homologous transverse link. Then for any Seifert surface Σ we have sl(T, \[Σ\]) ≤ −χ(Σ).”

**Sources:**

- [Baker, Onaran, Non-looseness of boundaries of Legendrian ribbons (2023)](https://arxiv.org/abs/2307.06828)
- [Etnyre, Kegel, Onaran, Contact surgery numbers (2023)](https://arxiv.org/abs/2201.00157)

### Right-veering monodromy characterizes tight contact structures

**Remember:** Right-veering maps never push an arc to the left.

*Makes the theorem clean to state or prove.* MSC 57K33 (Contact structures in 3 dimensions), 57K20. arXiv math.GT, math.SG. Level 4: research.

**Definition.** A boundary-fixing surface diffeomorphism φ is right-veering when it moves every properly embedded arc to the right at its starting point, or fixes it. The notion depends only on the mapping class of φ.

**Problem.** A contact 3-manifold is tight exactly when every open book supporting it has right-veering monodromy.

**How the definition helps.** Through the Giroux correspondence, the definition turns a condition on the 3-manifold into a test on arcs in a surface (our own). If some arc moves to the left, Honda, Kazez and Matić build an overtwisted disk from the arc and its image (our own). Conversely, an overtwisted structure has a supporting open book with a left-moving arc (our own).

**Paper or page:** [Floer homology and right-veering monodromy](https://arxiv.org/abs/2204.04093). It says: “A contact 3-manifold (Y,ξ) is tight if and only if every fibered link L ⊂ Y supporting (Y,ξ) has right-veering monodromy.”

**Sources:**

- [K. Honda, W. H. Kazez and G. Matić, Right-veering diffeomorphisms of compact surfaces with boundary, Invent. Math. 169 (2007) 427–449](https://doi.org/10.1007/s00222-007-0051-4)

### Tightness keeps the Euler class inside the dual Thurston norm ball

**Remember:** Without overtwisted disks, the planes cannot wrap too often around surfaces.

*Rules out counterexamples.* MSC 57K33 (Contact structures in 3 dimensions), 57K31. arXiv math.GT, math.SG. Level 4: research.

**Definition.** A contact structure on a 3-manifold is tight when it contains no overtwisted disk. An overtwisted disk is an embedded disk whose boundary is tangent to the contact planes. Along that boundary the planes do not twist relative to the disk.

**Problem.** Let ξ be tight on a closed 3-manifold, and let Σ be an embedded closed surface of positive genus. Then the Euler class e(ξ) satisfies \|e(ξ)\[Σ\]\| ≤ −χ(Σ), and e(ξ) vanishes on embedded spheres.

**How the definition helps.** Make Σ convex, so that e(ξ)\[Σ\] = χ(R₊) − χ(R₋) for the two sides of its dividing set (our own). Giroux's criterion forbids disk pieces in a tight manifold, and the other pieces have χ ≤ 0, which gives the bound (our own). Overtwisted structures occur in every homotopy class of plane fields, so they take every even Euler class and break the bound (our own).

**Paper or page:** [On the Euler class one conjecture for fillable contact structures](https://arxiv.org/abs/2409.14504). It says: “Let M be an oriented closed 3–manifold. Then, the real Euler class e(ξ) ∈ H²(M;ℝ) of any tight contact structure ξ on M is an even lattice point in the dual Thurston norm unit ball”

**Sources:**

- [Y. Eliashberg, Contact 3-manifolds twenty years since J. Martinet's work, Ann. Inst. Fourier 42 (1992) 165–192](https://doi.org/10.5802/aif.1288)

### Viewing a filling as a cobordism from nothing gives an augmentation

**Remember:** A filling is a cobordism to nothing, whose algebra is trivial.

*True by definition. Confidence: medium.* MSC 57K33 (Contact structures in 3 dimensions), 53D12, 53D42. arXiv math.SG, math.GT. Level 4: research.

**Definition.** An exact Lagrangian filling of Λ is a surface in the 4-ball, ending in the cylinder over Λ, on which the form λ is exact. Here dλ is the symplectic form. So it is an exact Lagrangian cobordism from the empty link to Λ, and such cobordisms induce maps of Chekanov–Eliashberg algebras.

**Problem.** An exact Lagrangian filling with Maslov number 0, a condition that makes gradings work, induces an augmentation of the Chekanov–Eliashberg algebra of Λ. So a Legendrian link whose algebra has no augmentation has no such filling.

**How the definition helps.** The empty link's algebra is a coefficient ring with zero differential, so any chain map to it satisfies ε∘∂ = 0 (our own). The work lies in functoriality, the theorem of Ekholm, Honda and Kálmán that exact cobordisms induce algebra maps (our own). For example, a stabilized Legendrian knot has no augmentation, so it has no such filling (our own).

**Paper or page:** [Braid Loops with infinite monodromy on the Legendrian contact DGA](https://arxiv.org/abs/2101.02318). It says: “Then L induces a DGA map ε<sub>L</sub> : (𝒜\_Λ, ∂) → (ℤ\[H₁(L)\], 0) where ℤ\[H₁(L)\] lies entirely in grading 0. (The map ε<sub>L</sub> is referred to as an augmentation.)”

**Sources:**

- [Ekholm, Honda, Kálmán, Legendrian knots and exact Lagrangian cobordisms, Journal of the European Mathematical Society (2016)](https://doi.org/10.4171/JEMS/650)

### Weak fillability is an open condition, so taut foliations give tight structures

**Remember:** Weak fillings ask the symplectic form only to be positive on planes.

*True by definition.* MSC 57K33 (Contact structures in 3 dimensions), 57R30. arXiv math.GT, math.SG. Level 4: research.

**Definition.** A contact 3-manifold (M, ξ) is weakly semi-fillable when it is one boundary part of a compact symplectic 4-manifold. The symplectic form only has to be positive on the contact planes, which is an open condition.

**Problem.** Contact structures C⁰-close to a taut foliation are weakly semi-fillable, and therefore tight. A foliation is taut when every leaf meets a closed curve transverse to all leaves.

**How the definition helps.** Positivity on planes is an open condition, so a closed 2-form positive on the leaves stays positive on nearby contact planes (our own). By Sullivan's theorem tautness gives such a form, which plus a small exact term weakly fills ξ on M × \[−1, 1\] (our own). A strong filling, which needs an outward Liouville field, does not follow from openness, and the work moves into the Eliashberg–Thurston perturbation theorem (our own).

**Wikipedia:** [Taut foliation](https://en.wikipedia.org/wiki/Taut_foliation). It says: “A taut foliation is a codimension 1 foliation of a closed manifold with the property that every leaf meets a transverse circle.”

**Paper or page:** [Transverse fibered knots and Taut Foliations](https://arxiv.org/abs/2509.04680). It says: “Contact structures, C⁰-close to a taut foliation, are symplectically semi-fillable, and therefore, tight.”

**Sources:**

- [Y. Eliashberg and W. P. Thurston, Confoliations, University Lecture Series 13, AMS (1998)](https://doi.org/10.1090/ulect/013)

### Trisections give every smooth 4-manifold a surface picture, unique up to stabilization

**Remember:** Three simple pieces and their spine hold the whole 4-manifold.

*Makes the theorem clean to state or prove.* MSC 57K40 (General topology of 4-manifolds), 57R65. arXiv math.GT. Level 4: research.

**Definition.** A trisection splits a closed 4-manifold X into three 4-dimensional 1-handlebodies, boundary connected sums of copies of S¹ × B³. Each pair meets in a 3-dimensional handlebody, and all three meet in one closed surface. The spine is the union of the three 3-dimensional handlebodies.

**Problem.** Every connected closed smooth oriented 4-manifold X has a trisection, and any two trisections of X become isotopic after enough stabilizations. The spine of any trisection determines X up to diffeomorphism.

**How the definition helps.** By Laudenbach and Poénaru, every diffeomorphism of the boundary of a 4-dimensional 1-handlebody extends over it, so the spine determines X (our own remark). Existence and uniqueness up to stabilization are the 4-dimensional versions of the Heegaard and Reidemeister–Singer theorems. Gay and Kirby proved them with Morse 2-functions (our own remark).

**Paper or page:** [Constructions of symplectic forms on 4-manifolds](https://arxiv.org/abs/2403.05512). It says: “Let X be a closed, smooth, oriented 4-manifold. Then X admits a trisection, any two trisections of X become ambient isotopic after sufficiently many stabilizations, and X is determined up to diffeomorphism by the spine of any trisection 𝒯.”

**Sources:**

- [P. Lambert-Cole, Constructions of symplectic forms on 4-manifolds, arXiv:2403.05512 (2024)](https://arxiv.org/abs/2403.05512)
- [D. Gay, R. Kirby, Trisecting 4-manifolds, Geom. Topol. 20 (2016) 3097-3132](https://doi.org/10.2140/gt.2016.20.3097)

### Perturbed Seiberg–Witten equations avoid reducible solutions

**Remember:** Perturb the equations so that solutions with zero spinor are impossible.

*Rules out counterexamples.* MSC 57K41 (Invariants of 4-manifolds (including Donaldson and Seiberg-Witten invariants)), 58J05. arXiv math.GT, math.DG. Level 4: research.

**Definition.** Fix a spinᶜ structure and metric on a closed oriented four-manifold. The reducible wall Π is the set of self-dual curvatures F⁺ of all unitary connections on the determinant line. A good perturbation is a self-dual form η outside Π, with the same imaginary-valued convention as curvature.

**Problem.** Let M be a closed oriented 4-manifold with b₊(M) ≥ 1, and choose η outside Π. Then the perturbed Seiberg–Witten equations have no reducible solutions, the solutions with zero spinor.

**How the definition helps.** A reducible solution has zero spinor, so the curvature equation reads F⁺ = η, which η outside Π forbids. Π is an affine subspace of codimension b₊, so such η exist when b₊ ≥ 1 (our own explanation).

**nLab:** [Seiberg-Witten moduli space](https://ncatlab.org/nlab/show/Seiberg-Witten+moduli+space). It says: “If b₊(M) ≥ 1, then a perturbation η ∈ Ω₊²(M) ∖ Π ≠ ∅ forces solutions of the perturbed Seiberg-Witten equations with ψ = 0 to fulfill F<sub>A</sub>⁺ = η, which is not possible due to η ∉ Π.”

**Sources:**

- [Simon Donaldson, The Seiberg-Witten equations and 4-manifold topology, Bull. Amer. Math. Soc. 33 (1996) 45–70](https://doi.org/10.1090/S0273-0979-96-00625-8)

### Signed monopole counts survive metric changes

**Remember:** Solutions are born and die in pairs of opposite sign.

*True by definition.* MSC 57K41 (Invariants of 4-manifolds (including Donaldson and Seiberg-Witten invariants)), 53C07. arXiv math.DG, math-ph. Level 4: research.

**Definition.** Take a spinᶜ structure of expected dimension zero on a closed connected oriented smooth four-manifold. The Seiberg–Witten count adds the signs of all gauge classes of solutions for generic data. The signs come from orienting first real cohomology plus a maximal positive subspace of the intersection form.

**Problem.** If the intersection form has at least two positive directions, the signed count of Seiberg–Witten solutions is the same for every generic metric and perturbation.

**How the definition helps.** Along a generic path between two choices, solutions form a compact oriented one-manifold whose boundary is the final count minus the initial count, so the counts agree (our own proof). Two positive directions let a generic path avoid solutions with extra symmetry (our own). Compactness and regularity are the other analytic inputs.

**Wikipedia:** [Seiberg–Witten invariants](https://en.wikipedia.org/wiki/Seiberg%E2%80%93Witten_invariants). It says: “the number of elements of the moduli space counted with signs.”

**Sources:**

- [Edward Witten, Monopoles and four-manifolds](https://doi.org/10.4310/mrl.1994.v1.n6.a13)

### Smoothness diagonalizes definite intersection forms

**Remember:** Smooth charts forbid E₈, so definite smooth forms are diagonal.

*Rules out counterexamples.* MSC 57K41 (Invariants of 4-manifolds (including Donaldson and Seiberg-Witten invariants)), 57R10. arXiv math.GT. Level 4: research.

**Definition.** A smooth four-manifold has an atlas with smooth transition maps, which Freedman's topological E₈ manifold lacks. Its intersection form pairs second homology classes modulo torsion by signed intersection, and is definite when all nonzero squares have one strict sign.

**Problem.** Donaldson's theorem. If a closed, oriented, simply connected smooth 4-manifold has definite intersection form, some integer basis makes the form diagonal.

**How the definition helps.** Smoothness excludes Freedman's E₈ manifold, whose definite form has determinant one but only even squares, so it is not diagonal (our own comparison). A definite diagonal form of determinant one has only ±1 on its diagonal, so it has a class of square ±1. Donaldson proves diagonalizability in the smooth case by studying differential equations on the manifold.

**Wikipedia:** [Donaldson's theorem](https://en.wikipedia.org/wiki/Donaldson%27s_theorem). It says: “a definite intersection form of a closed, oriented, smooth manifold of dimension 4 is diagonalizable”

**Sources:**

- [S. K. Donaldson, An application of gauge theory to four-dimensional topology (1983).](https://doi.org/10.4310/jdg/1214437665)

### A classifying map to moduli space makes Lefschetz signatures characteristic numbers

**Remember:** The fibration draws a surface inside the moduli of curves.

*Makes the theorem clean to state or prove.* MSC 57K43 (Symplectic structures in 4 dimensions), 14H10. arXiv math.GT, math.SG. Level 4: research.

**Definition.** A relatively minimal Lefschetz fibration with fiber genus g ≥ 2 has a classifying map to the compactified moduli space of genus-g curves. The map sends each point to its fiber as a curve. Singular fibers go to curves with one node, which this space includes.

**Problem.** The signature of the total space is four times the degree of the Hodge line bundle λ along that map, minus the singular fiber count. Over each curve, λ is the top exterior power of its space of holomorphic 1-forms.

**How the definition helps.** Lefschetz singular fibers are exactly the one-node stable curves, so the classifying map is defined at every point of the base (our own). The signature then becomes a characteristic number of that map, and the correction −δ comes from the nodes (our own). The work moves into Smith's computation on the moduli space (our own).

**Paper or page:** [Achiral Lefschetz fibrations and the moduli space of curves](https://arxiv.org/abs/2510.18593v1). It says: “Let f:X→S be a Lefschetz fibration giving rise to a classifying map φ<sub>f</sub>: S→M̄<sub>g</sub>. Then we have σ(X) = ⟨4c₁(λ), \[φ<sub>f</sub>\]⟩ − δ where δ is the number of vanishing cycles of f.”

**Sources:**

- [I. Smith, Lefschetz fibrations and the Hodge bundle, Geometry &amp; Topology 3 (1999) 211–233](https://doi.org/10.2140/gt.1999.3.211)

### Allowable vanishing cycles make Lefschetz fibrations over the disk Stein

**Remember:** Every vanishing circle must wrap something real in the fiber.

*Rules out counterexamples.* MSC 57K43 (Symplectic structures in 4 dimensions), 32Q28, 57R65. arXiv math.GT, math.SG. Level 4: research.

**Definition.** Take a Lefschetz fibration over the disk whose fibers have boundary. It is allowable when every vanishing cycle is nonzero in the homology of the fiber. A vanishing cycle is the circle in a fiber that shrinks at a critical point.

**Problem.** Every allowable Lefschetz fibration over the disk has a Stein domain as total space, a sublevel set of a strictly plurisubharmonic function on a complex surface. Conversely every 4-dimensional Stein domain has such a fibration (Loi–Piergallini, Akbulut–Ozbagci).

**How the definition helps.** An allowable cycle can be drawn tangent to the boundary's contact planes, and its 2-handle has framing one below the contact framing (our own). That is exactly Eliashberg's condition for attaching Stein 2-handles (our own). A cycle that bounds a disk gives a sphere of square −1, which the Lisca–Matić adjunction inequality rules out in a Stein domain (our own).

**Wikipedia:** [Stein manifold](https://en.wikipedia.org/wiki/Stein_manifold). It says: “when n = 2 the same holds provided the 2-handles are attached with certain framings (framing less than the Thurston–Bennequin framing).”

**Paper or page:** [The contact cut graph and a Weinstein L-invariant](https://arxiv.org/abs/2408.05340v1). It says: “Conversely, every 4-manifold W admitting an allowable Lefschetz fibration π:W→D² admits a compatible Weinstein structure which is unique up to Weinstein homotopy.”

**Sources:**

- [A. Loi and R. Piergallini, Compact Stein surfaces with boundary as branched covers of B⁴, Inventiones Mathematicae 143 (2001) 325–348](https://doi.org/10.1007/s002220000106)
- [S. Akbulut and B. Ozbagci, Lefschetz fibrations on compact Stein surfaces, Geometry &amp; Topology 5 (2001) 319–334](https://doi.org/10.2140/gt.2001.5.319)
- [P. Lisca and G. Matić, Tight contact structures and Seiberg–Witten invariants, Inventiones Mathematicae 129 (1997) 509–525](https://doi.org/10.1007/s002220050171)

### Compatible almost complex structures pick the spinᶜ structure with Seiberg–Witten invariant one

**Remember:** The symplectic form chooses the spinᶜ structure and its one solution.

*Makes the theorem clean to state or prove.* MSC 57K43 (Symplectic structures in 4 dimensions), 57K41. arXiv math.SG, math.GT. Level 4: research.

**Definition.** A compatible almost complex structure J on a symplectic 4-manifold gives a canonical spinᶜ structure, the extra data the Seiberg–Witten equations need. It does not depend on J, because the compatible J form a contractible space. Here b⁺ counts the positive directions of the intersection form.

**Problem.** A closed symplectic 4-manifold with b⁺ ≥ 2 has Seiberg–Witten invariant ±1 on its canonical spinᶜ structure. So it is never a connected sum of two manifolds that both have b⁺ ≥ 1.

**How the definition helps.** The canonical spinᶜ structure picks out one invariant, and J solves the equations perturbed by a large multiple of ω (our own). Taubes's estimates show it is the only solution, so the count is ±1, while such connected sums have zero invariants (our own). For example, CP² \# CP² \# CP² is almost complex but not symplectic (our own).

**Wikipedia:** [Seiberg–Witten invariants](https://en.wikipedia.org/wiki/Seiberg%E2%80%93Witten_invariants). It says: “symplectic and b₂⁺(M) ≥ 2 then it has a spinᶜ structure s on which the Seiberg–Witten invariant is 1. In particular it cannot be split as a connected sum of manifolds with b₂⁺ ≥ 1.”

**Sources:**

- [C. H. Taubes, The Seiberg–Witten invariants and symplectic forms, Mathematical Research Letters 1 (1994) 809–822](https://doi.org/10.4310/MRL.1994.v1.n6.a15)

### Complex normal bundles make symplectic surfaces of nonnegative square genus-minimizing

**Remember:** A symplectic surface sits exactly on the adjunction line.

*Rules out counterexamples. Confidence: medium.* MSC 57K43 (Symplectic structures in 4 dimensions), 57K41. arXiv math.GT, math.SG. Level 4: research.

**Definition.** A symplectic surface in a symplectic 4-manifold is one on which the symplectic form is an area form. Its symplectic complement is then a complex line bundle, so the tangent bundle along the surface splits into two complex lines.

**Problem.** Let the manifold have b⁺ ≥ 2 and let Σ be a symplectic surface of genus g with Σ·Σ ≥ 0. Then every embedded surface of genus at least 1 in the same class has genus at least g.

**How the definition helps.** The complex splitting gives the adjunction equality 2g − 2 = Σ·Σ + K·Σ, with K minus the first Chern class (our own). Seiberg–Witten theory gives every competitor of genus g′ ≥ 1 the bound 2g′ − 2 ≥ Σ·Σ + \|K·Σ\|, so g′ ≥ g (our own). A surface with an extra handle lies in the same class but is never symplectic, because it misses the adjunction line (our own).

**Wikipedia:** [Thom conjecture](https://en.wikipedia.org/wiki/Thom_conjecture), [Adjunction formula](https://en.wikipedia.org/wiki/Adjunction_formula). It says: “It states that a symplectic surface of a symplectic 4-manifold is genus minimizing within its homology class.”

**Sources:**

- [J. W. Morgan, Z. Szabó and C. H. Taubes, A product formula for the Seiberg–Witten invariants and the generalized Thom conjecture, Journal of Differential Geometry 44 (1996) 706–788](https://doi.org/10.4310/jdg/1214459408)
- [P. Ozsváth and Z. Szabó, The symplectic Thom conjecture, Annals of Mathematics 151 (2000) 93–124](https://doi.org/10.2307/121113)

### Defining minimality by exceptional spheres gives every symplectic 4-manifold a minimal model

**Remember:** Minimal means nothing left to blow down.

*True by definition.* MSC 57K43 (Symplectic structures in 4 dimensions), 14J26. arXiv math.SG, math.GT. Level 4: research.

**Definition.** A closed symplectic 4-manifold is minimal when it contains no exceptional sphere, that is, no symplectically embedded sphere of self-intersection −1.

**Problem.** Every closed symplectic 4-manifold arises from a minimal one by symplectic blow-ups. The minimal model is unique unless the manifold is rational or ruled, a blow-up of CP² or of a sphere bundle over a surface.

**How the definition helps.** An exceptional sphere has a standard neighborhood, so it can be blown down, and this lowers the second Betti number by one (our own). So repeated blow-downs stop at a minimal manifold, which gives existence almost by definition; the work moves into McDuff's uniqueness theorem (our own). Uniqueness does fail for rational manifolds: S² × S² blown up once is CP² blown up twice, so both are minimal models (our own).

**Wikipedia:** [Enriques–Kodaira classification](https://en.wikipedia.org/wiki/Enriques%E2%80%93Kodaira_classification). It says: “For example, P¹ × P¹ blown up at a point is isomorphic to P² blown up twice.”

**Paper or page:** [Cohomologous symplectic forms with different Gromov widths](https://arxiv.org/abs/2505.09550v1). It says: “Any symplectic 4-manifold has a minimal model. When X is not diffeomorphic to rational or ruled manifolds, the symplectomorphism type of the minimal model is unique.”

**Sources:**

- [D. McDuff, The structure of rational and ruled symplectic 4-manifolds, Journal of the American Mathematical Society 3 (1990) 679–712](https://doi.org/10.1090/S0894-0347-1990-1049697-8)

### Knot surgery with a fibered knot is a symplectic sum

**Remember:** A fibered knot complement times a circle is a surface bundle.

*True by definition. Confidence: medium.* MSC 57K43 (Symplectic structures in 4 dimensions), 57K41. arXiv math.GT, math.SG. Level 4: research.

**Definition.** Knot surgery on a square-zero torus T in a 4-manifold X removes a neighborhood of T. It glues in S¹ times the complement of a knot K in S³. Equivalently, it is the fiber sum of X with S¹ × M along tori, where M is 0-surgery on K.

**Problem.** Let X be symplectic, T a symplectic torus of square zero, and K fibered, with complement fibering over the circle. Then knot surgery gives a symplectic manifold.

**How the definition helps.** When K is fibered, S¹ × M is a surface bundle over the torus, which Thurston's construction makes symplectic (our own). S¹ times a meridian is a symplectic square-zero torus in it, so knot surgery is a Gompf symplectic sum (our own). Fintushel and Stern also showed that the Seiberg–Witten invariant gets multiplied by Δ(t²), with Δ the Alexander polynomial of K (our own).

**Wikipedia:** [4-manifold](https://en.wikipedia.org/wiki/4-manifold). It says: “Fintushel and Stern showed how to use surgery to construct large numbers of different smooth structures (indexed by arbitrary integral polynomials) on many different manifolds, using Seiberg–Witten invariants to show that the smooth structures are different.”

**Sources:**

- [R. Fintushel and R. J. Stern, Knots, links, and 4-manifolds, Inventiones Mathematicae 134 (1998) 363–400](https://doi.org/10.1007/s002220050268)

### Weighting multiply covered tori makes Taubes's Gromov invariant independent of J

**Remember:** Tori get weighted votes, so the count never changes.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 57K43 (Symplectic structures in 4 dimensions), 53D45, 57K41. arXiv math.SG, math.GT. Level 4: research.

**Definition.** For a generic compatible J, Taubes's Gromov invariant of a class A counts embedded J-holomorphic curves in A, possibly disconnected. These are surfaces whose tangent planes J preserves. Square-zero tori and their multiple covers get special weights.

**Problem.** On a closed symplectic 4-manifold with b⁺ ≥ 2, Taubes's Gromov invariant does not depend on J. It equals the Seiberg–Witten invariant of the matching spinᶜ structure.

**How the definition helps.** As J varies, multiply covered square-zero tori can appear and disappear, and Taubes's weights are chosen so that these changes cancel (our own). With a plain count of embedded curves the number can jump, so no theorem of this form holds (our own). The work moves into Taubes's analysis that turns Seiberg–Witten solutions into holomorphic curves (our own).

**Wikipedia:** [Taubes's Gromov invariant](https://en.wikipedia.org/wiki/Taubes%27s_Gromov_invariant). It says: “Much of the analytical complexity connected to this invariant comes from properly counting multiply covered pseudoholomorphic curves so that the result is invariant of the choice of almost complex structure.”

**Sources:**

- [C. H. Taubes, Counting pseudo-holomorphic submanifolds in dimension 4, Journal of Differential Geometry 44 (1996) 818–893](https://doi.org/10.4310/jdg/1214459411)
- [C. H. Taubes, SW ⇒ Gr: from the Seiberg–Witten equations to pseudo-holomorphic curves, Journal of the American Mathematical Society 9 (1996) 845–918](https://doi.org/10.1090/S0894-0347-96-00211-1)

### Every continuum has a compact universal cover

**Remember:** Take the limit of all compact covers, and every continuum gets one.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 57M10 (Covering spaces and low-dimensional topology), 54F15. arXiv math.AT, math.GN. Level 4: research.

**Definition.** Let X be a continuum, a compact connected metrizable space. Its compact universal cover is the inverse limit of all its pointed connected compact regular covers, joined by based covering maps over X.

**Problem.** Every continuum has a compact universal cover, even one such as a solenoid that has no classical universal cover. It is unique among generalized universal covers by compactly simply connected continua.

**How the definition helps.** The inverse limit exists for every continuum, so it gives a cover even for a solenoid (our own explanation). The compact universal covering theorem shows that the limit is a continuum and is unique among generalized covers by compactly simply connected continua.

**Paper or page:** [Every Continuum has a Compact Universal Cover](https://arxiv.org/abs/2109.02152). It says: “We define the compact universal cover of a compact, metrizable connected space (i.e. a continuum) X to be the inverse limit of all continua that regularly cover X.”

**Sources:**

- [Conrad Plaut, Every Continuum has a Compact Universal Cover, arXiv:2109.02152 (2022)](https://arxiv.org/abs/2109.02152)

### Semicoverings form a class closed under composition and 2-out-of-3

**Remember:** Keep unique lifting of paths; drop evenly covered neighbourhoods.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 57M10 (Covering spaces and low-dimensional topology), 55Q05. arXiv math.AT, math.GN. Level 4: research.

**Definition.** A semicovering is a local homeomorphism that lifts based paths and based path homotopies uniquely and continuously, in the compact-open topology, from every chosen lift of the basepoint. So it induces homeomorphisms between the spaces of based paths and of based path homotopies (our own gloss).

**Problem.** Let f = g ∘ h be continuous maps between nonempty spaces, with path-connected middle space and base. If two of f, g and h are semicoverings, so is the third.

**How the definition helps.** Homeomorphisms compose and cancel, so two of these lifting properties give the third, with path connectedness supplying the starting lifts (our own explanation of Brazas's theorem). Ordinary coverings fail this, because a composite of coverings need not evenly cover any neighbourhood of a point.

**nLab:** [covering space](https://ncatlab.org/nlab/show/covering+space). It says: “Semicoverings satisfy the "2 out of 3 rule". I.e,, if f=g h and two of f,g,h are semicoverings , then so is the third. This is not true for covering maps.”

**Sources:**

- [J. Brazas, Semicoverings: a generalization of covering space theory, Homology Homotopy Appl. 14 (2012) 33–63, arXiv:1108.3021](https://arxiv.org/abs/1108.3021)
- [E. Spanier, Algebraic Topology, Springer (first published 1966; DOI record of the 1981 Springer printing), Chapter 2](https://doi.org/10.1007/978-1-4684-9322-1)

### Torsion refined by spin-c structures equals the Seiberg–Witten count

**Remember:** Remove the unit ambiguity, and torsion matches the gauge theory count.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 57Q10 (Simple homotopy type, Whitehead torsion, Reidemeister-Franz torsion, etc.), 57K31, 57R15. arXiv math.GT, math.SG. Level 4: research.

**Definition.** An Euler structure on a closed oriented three-manifold is a nowhere-zero vector field, up to homotopy outside a ball. Euler structures correspond to spinᶜ structures and fix the homology translation in Turaev's refined torsion, which removes its unit ambiguity.

**Problem.** Let a closed oriented connected three-manifold have positive first Betti number, with compatible chambers when that number is one. Then Seiberg–Witten invariants and Turaev torsion agree as functions on spinᶜ structures up to overall sign.

**How the definition helps.** Euler structures remove the unit ambiguity of torsion, so torsion becomes a function on spinᶜ structures, like the Seiberg–Witten count (our own explanation). Turaev's refinement of the Meng–Taubes comparison gives equality with compatible conventions.

**Paper or page:** [Monopoles and Landau-Ginzburg Models III: A Gluing Theorem](https://arxiv.org/abs/2010.04318). It says: “is independent of the auxiliary data (gY, gΣ; ω, λ, μ) and is equal to the Minor-Turaev torsion T(Y) up to an overall sign ambiguity.”

**Sources:**

- [D. Wang, Monopoles and Landau-Ginzburg Models III: A Gluing Theorem, arXiv:2010.04318 (2023)](https://arxiv.org/abs/2010.04318)
- [G. Meng, C. H. Taubes, SW = Milnor torsion, Math. Res. Lett. 3 (1996) 661-674](https://doi.org/10.4310/mrl.1996.v3.n5.a8)

### Tree-cotree curl solvers can terminate exactly on collapsible meshes

**Remember:** A collapse order is a successful elimination order.

*Makes the theorem clean to state or prove.* MSC 57Q10 (Simple homotopy type, Whitehead torsion, Reidemeister-Franz torsion, etc.), 65N30, 05C85. arXiv math.NA, math.AT. Level 4: research.

**Definition.** A free face of a mesh lies in exactly one remaining cell of one dimension higher. A mesh is collapsible if removing free faces with their cells, one pair at a time, shrinks it to one vertex. Each removal pairs a face with a cell, like one pivot step of Gaussian elimination.

**Problem.** Let a tetrahedral mesh fill a domain in ℝ³ with no holes or cavities and a Lipschitz boundary. Some spanning tree of edges makes the tree-cotree method for a discrete vector potential terminate if and only if the mesh is collapsible.

**How the definition helps.** Both collapsibility and termination are equivalent to a complete acyclic matching of edges with faces, a pairing like the pivots of Gaussian elimination. A collapse sequence gives such a matching, and such a matching gives a tree for which the method terminates. This explains the known termination failures on meshes that are not collapsible.

**Paper or page:** [Inverting the discrete curl operator: a novel graph algorithm to find a vector potential of a given vector field](https://arxiv.org/abs/2111.04431v1). It says: “This fact gives a topological characterization of well-known termination problems of tree-cotree techniques.”

**Sources:**

- [Silvano Pitassi, Riccardo Ghiloni, Ruben Specogna, Inverting the discrete curl operator: a novel graph algorithm to find a vector potential of a given vector field, arXiv:2111.04431v1 (2021)](https://arxiv.org/abs/2111.04431v1)

### A string structure is defined as a trivialization of ½p₁

**Remember:** Spin structure plus a chosen reason why ½p₁ vanishes.

*True by definition.* MSC 57R15 (Specialized structures on manifolds (spin manifolds, framed manifolds, etc.)), 55R40, 53C27. arXiv math.AT, math.DG. Level 4: research.

**Definition.** A string structure on a spin manifold X is a homotopy lift of its spin classifying map f to BString(n), the homotopy fibre of a map λ representing ½p₁. Equivalently, it is a chosen nullhomotopy of λ ∘ f.

**Problem.** A spin manifold X has a string structure exactly when ½p₁(X) = 0. The string structures on X form the homotopy fiber of ½p₁ on X.

**How the definition helps.** A lift exists exactly when λ ∘ f is nullhomotopic, that is when ½p₁(X) = 0 (our own explanation). Mapping out of X preserves homotopy fibres, so the lifts form the homotopy fibre of ½p₁ on X.

**nLab:** [string structure](https://ncatlab.org/nlab/show/string+structure). It says: “The 2-groupoid of string structure on X is the homotopy fiber of ½𝐩₁<sup>X</sup>”

**Sources:**

- [Timothy Killingback, World-sheet anomalies and loop geometry, Nuclear Physics B 288 (1987) 578–588](https://doi.org/10.1016/0550-3213(87)90229-X)
- [Hisham Sati, Urs Schreiber, Jim Stasheff, Twisted differential String and Fivebrane structures, Comm. Math. Phys. 315 (2012), arXiv:0910.4001](https://arxiv.org/abs/0910.4001)

### Fusion recovers string structures from loops

**Remember:** Fusion remembers how loops were cut into paths.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 57R15 (Specialized structures on manifolds (spin manifolds, framed manifolds, etc.)), 53C27. arXiv math.AT, math.DG. Level 4: research.

**Definition.** A fusion spin structure on the loop space of M lifts the looped spin frame bundle through the basic central circle extension of the loop spin group. It adds fusion: smooth, associative, action-compatible isomorphisms Lₐᵦ ⊗ Lᵦ𝒸 → Lₐ𝒸, where a, b, c are paths with common endpoints. Here Lₐᵦ is the circle fibre over the loop a followed by reversed b.

**Problem.** Let M be a spin manifold of dimension three or at least five. Its free loop space admits a fusion spin structure exactly when M admits a string structure, a trivialization of half its first Pontryagin class.

**How the definition helps.** Fusion records how loops are glued from paths, which is the data needed to rebuild a string structure on M (our own). Without fusion this fails: a spin bundle with nonzero half Pontryagin class can still have a spin loop bundle. Waldorf proves the reconstruction theorem.

**nLab:** [From String structures to Spin structures on loop spaces](https://ncatlab.org/nlab/show/From+String+structures+to+Spin+structures+on+loop+spaces). It says: “what Waldorf calls a fusion extension of ℒSpin.”

**Sources:**

- [Konrad Waldorf, Spin structures on loop spaces that characterize string manifolds (2016)](https://msp.org/agt/2016/16-2/agt-v16-n2-p02-s.pdf)

### String trivializations integrate Chern–Simons holonomy

**Remember:** Trivialize the bundle globally, and holonomy is just ∫H.

*True by definition. Confidence: medium.* MSC 57R15 (Specialized structures on manifolds (spin manifolds, framed manifolds, etc.)), 53C27. arXiv math.DG, math.AT. Level 4: research.

**Definition.** A spin connection gives a higher circle bundle with connection that represents the differential class of half the first Pontryagin class. A geometric string structure identifies this bundle with the trivial bundle carrying one global 3-form H as its connection.

**Problem.** On every smooth integral 3-cycle, the differential half-Pontryagin class evaluates to the integral of H modulo integers.

**How the definition helps.** On the trivial bundle with connection H, holonomy over a closed cycle is the integral of H (our own). Comparing higher circle bundles with differential characters carries this value to the differential class (our own). A purely topological trivialization supplies no such form (our own).

**nLab:** [differential string structure](https://ncatlab.org/nlab/show/differential+string+structure). It says: “a choice of equivalence λ of the Chern-Simons circle 3-bundle with connection”

**Sources:**

- [Konrad Waldorf, String connections and Chern-Simons theory (2013)](https://doi.org/10.1090/S0002-9947-2013-05816-3)

### Inertia makes holonomy flat

**Remember:** Constant loops sweep no area, so they feel no curvature.

*True by definition.* MSC 57R18 (Topology and geometry of orbifolds), 81T30. arXiv math.DG, hep-th. Level 4: research.

**Definition.** The inertia orbifold has, in a chart U with group G, the pairs (x,g) with g·x = x, where h sends (x,g) to (h·x, hgh⁻¹). Each pair is a constant loop at x closed up by the symmetry g.

**Problem.** The holonomy line of an orbifold gerbe has flat connection on the inertia orbifold, even when the gerbe has nonzero curvature.

**How the definition helps.** On a constant loop the circle tangent is zero, so the gerbe curvature integrated around the circle vanishes (our own). This uses the curvature formula of Lupercio and Uribe for the holonomy line (our own). The closing symmetry can still act on the flat line (our own).

**nLab:** [inner local system](https://ncatlab.org/nlab/show/inner+local+system). It says: “is a family of local systems (in fact flat connections with coefficients in U(1)) on loci with non-trivial automorphisms”

**Sources:**

- [Ernesto Lupercio and Bernardo Uribe, Holonomy for gerbes over orbifolds (2006), §5](https://doi.org/10.1016/j.geomphys.2005.08.006)
- [Ernesto Lupercio and Bernardo Uribe, An introduction to gerbes on orbifolds (2004), §§3–4](https://doi.org/10.5802/ambp.190)

### Antipodes force flat Euler two-torsion

**Remember:** Antipodes negate the fiber form without changing the base cycle.

*True by definition.* MSC 57R20 (Characteristic classes and numbers in differential topology), 53C05. arXiv math.DG, math.AT. Level 4: research.

**Definition.** The flat Euler class of a flat oriented Euclidean bundle of rank r gives each integral (r−1)-cycle a value modulo integers. It integrates the normalized fibre volume form of the unit sphere bundle, extended by zero on horizontal vectors, over any homology lift of the cycle.

**Problem.** For every flat oriented Euclidean bundle of odd rank at least three, twice the flat Euler class is zero.

**How the definition helps.** In odd rank the antipodal map negates the sphere volume form but keeps the projected cycle, so the value equals its negative. The homology sequence makes the value independent of the lift. Our own summary uses this sphere integral in place of a calculation with universal characteristic classes.

**nLab:** [secondary characteristic class](https://ncatlab.org/nlab/show/secondary+characteristic+class). It says: “If that curvature form happens to vanish, the corresponding Chern-Simons form itself becomes closed, and now itself represents a cohomology class, in one degree lower.”

**Sources:**

- [Jeff Cheeger and James Simons, Differential characters and geometric invariants (1985), Proposition 8.12](https://math.mit.edu/juvitop/pastseminars/notes_2019_Fall/cheeger-simons.pdf)

### Bott characters retain normal torsion

**Remember:** Zero curvature leaves room for torsion in the integral class.

*Makes the theorem clean to state or prove.* MSC 57R20 (Characteristic classes and numbers in differential topology), 57R30. arXiv math.DG, math.AT. Level 4: research.

**Definition.** A flat degree-k differential character is a homomorphism from integral homology in degree k−1 to ℝ/ℤ. Its curvature is zero, but its integral class, up to sign the Bockstein of the corresponding cohomology class, can be nonzero torsion.

**Problem.** A smooth codimension-two foliation can have a normal plane bundle whose squared first Pontryagin class is nonzero integrally, although its adapted curvature form vanishes.

**How the definition helps.** A flat character has zero curvature but may have a nonzero torsion class (our own example). Take the total space of the flat line with generator holonomy over the nine-dimensional lens space with fundamental group ℤ/3, with its horizontal foliation. Along the zero section the normal bundle is that line, and its squared Pontryagin class restricts to c₁⁴, which generates degree-eight integral cohomology ℤ/3.

**Paper or page:** [Characteristic classes for flat Diff(M)-foliations](https://arxiv.org/abs/2311.09160). It says: “is injective for all ℓ ≥ 0.”

**Sources:**

- [Jeff Cheeger and James Simons, Differential characters and geometric invariants (1985), Theorem 7.4 and Corollary 7.5](https://math.mit.edu/juvitop/pastseminars/notes_2019_Fall/cheeger-simons.pdf)
- [Steven Hurder, Characteristic classes for flat Diff(M)-foliations](https://arxiv.org/abs/2311.09160)

### Determinants give first flat Chern classes

**Remember:** Take the determinant before taking the logarithm.

*True by definition.* MSC 57R20 (Characteristic classes and numbers in differential topology), 53C05. arXiv math.DG, math.AT. Level 4: research.

**Definition.** The first differential Chern class of a flat complex bundle is that of its determinant line, the top exterior power. On a loop it is the logarithm of parallel transport on that line, divided by 2πi, modulo integers.

**Problem.** The first differential Chern class on a loop equals the logarithm of the determinant of its transport matrix, divided by 2πi, modulo integers.

**How the definition helps.** Transport on the top exterior power is the determinant of the transport matrix, so the value is the logarithm of that determinant over 2πi (our own explanation). Proposition 4.4 identifies this with the universal differential class, with the stated sign.

**Paper or page:** [Classification of indecomposable reflexive modules on quotient singularities through Atiyah--Patodi--Singer theory](https://arxiv.org/abs/2504.21204). It says: “\\widehat{c}<sub>\\rho ,1</sub>(\\bar{\\nu })=\\widehat{c}<sub>\\det (\\rho ),1</sub>(\\bar{\\nu })=\\frac{1}{2\\pi i}\\log (\\det (\\rho )\_{\\mathrm{Ab}}(\\bar{\\nu }))”

**Sources:**

- [Jeff Cheeger and James Simons, Differential characters and geometric invariants (1985), §4 and §8](https://math.mit.edu/juvitop/pastseminars/notes_2019_Fall/cheeger-simons.pdf)
- [José Antonio Arciniega Nevárez, José Luis Cisneros-Molina and Agustín Romano Velázquez, Classification of indecomposable reflexive modules on quotient singularities through Atiyah–Patodi–Singer theory (2025)](https://arxiv.org/abs/2504.21204)

### Differential Euler classes multiply

**Remember:** Pinned down by curvature and integral class, so it multiplies like both.

*True by definition.* MSC 57R20 (Characteristic classes and numbers in differential topology), 53C08. arXiv math.DG, math.AT. Level 4: research.

**Definition.** The differential Euler class of an oriented Euclidean bundle with metric connection lives on cycles one dimension below the rank. It is the unique natural differential character whose curvature is the Euler form and whose integral class is the Euler class.

**Problem.** For two such bundles of positive even rank, the differential Euler class of their oriented direct sum with the sum connection equals the product.

**How the definition helps.** By uniqueness it is enough to check the curvature and the integral class of the product, and both multiply under direct sums. Our own summary applies uniqueness to the universal pair of bundles, which avoids a calculation on individual cycles.

**nLab:** [Cheeger-Simons homomorphism](https://ncatlab.org/nlab/show/Cheeger-Simons+homomorphism). It says: “the Cheeger-Simons homomorphism refines this to an assignment of secondary characteristic classes in ordinary differential cohomology to principal connections”

**Sources:**

- [Jeff Cheeger and James Simons, Differential characters and geometric invariants (1985), Theorem 3.6](https://math.mit.edu/juvitop/pastseminars/notes_2019_Fall/cheeger-simons.pdf)

### Differential normal classes bound conformal immersions

**Remember:** An immersion replaces the inverse tangent class with a normal class.

*Makes the theorem clean to state or prove.* MSC 57R20 (Characteristic classes and numbers in differential topology), 53C05. arXiv math.DG, math.AT. Level 4: research.

**Definition.** Invert the total differential Chern class of the complexified tangent bundle, with the Levi-Civita connection, in the ring of differential characters. The inverse differential Pontryagin class of index i is (−1)ⁱ times the degree-4i part.

**Problem.** If a Riemannian manifold admits a conformal immersion into Euclidean space of codimension k, its inverse differential Pontryagin classes vanish for 2i &gt; k.

**How the definition helps.** For an immersion with the induced metric, Cheeger and Simons identify the inverse tangent class with the normal bundle's class. The complexified normal bundle has rank k, so its Chern classes above index k vanish. Our own summary then uses conformal invariance to pass to the given metric.

**nLab:** [secondary characteristic class](https://ncatlab.org/nlab/show/secondary+characteristic+class). It says: “Using refined Chern-Weil theory the notions of curvature characteristic forms and their Chern-Simons forms are unified into the notion of cocycles in ordinary differential cohomology.”

**Sources:**

- [Jeff Cheeger and James Simons, Differential characters and geometric invariants (1985), Theorem 6.2 and §5](https://math.mit.edu/juvitop/pastseminars/notes_2019_Fall/cheeger-simons.pdf)

### Exact transgression preserves differential Chern classes

**Remember:** Exact Chern character transgression leaves all differential Chern classes unchanged.

*True by definition.* MSC 57R20 (Characteristic classes and numbers in differential topology), 53C05. arXiv math.DG, math.AT. Level 4: research.

**Definition.** In a structured Hermitian bundle, two unitary connections count as the same when their Chern character transgression is exact. This transgression is the odd form that integrates Chern character curvature along a path between the connections.

**Problem.** Over a compact smooth manifold, each differential Chern class depends only on the structured Hermitian bundle. It extends to formal differences of such bundles in differential K-theory.

**How the definition helps.** Each Chern form is a polynomial in Chern character forms, so an exact Chern character transgression makes each Chern transgression exact (our own summary). The connection-change formula then gives equal classes. Ho uses the direct sum formula to pass to formal differences.

**nLab:** [differential K-theory](https://ncatlab.org/nlab/show/differential+K-theory). It says: “two connections on a vector bundle are taken to be the same representative of a differential K-cocycle if they are related by a concordance such that the corresponding Chern-Simons form is exact.”

**Sources:**

- [Man-Ho Ho, On differential characteristic classes (2015), §3.2](https://www.cambridge.org/core/services/aop-cambridge-core/content/view/40022D852E2A3F395D25C626125F268C/S1446788714000627a.pdf/on_differential_characteristic_classes.pdf)

### Flat determinants detect trivial bundles

**Remember:** No rational first cohomology means the determinant cannot hide.

*Rules out counterexamples.* MSC 57R20 (Characteristic classes and numbers in differential topology), 53C05. arXiv math.DG, math.AT. Level 4: research.

**Definition.** The first secondary Chern class of a flat complex bundle records, on each loop, the logarithm of determinant transport divided by 2πi, modulo integers. Its coboundary is the integral first Chern class up to sign.

**Problem.** On a closed oriented rational homology three-sphere, a flat complex bundle is topologically trivial exactly when every loop has determinant transport one.

**How the definition helps.** With no rational first cohomology, the coboundary map is injective, so determinant transport detects the first Chern class. In dimension three, rank and first Chern class classify complex bundles. On S¹ × S², a flat line with nontrivial transport around the circle is still topologically trivial (our own counterexample).

**Paper or page:** [Classification of indecomposable reflexive modules on quotient singularities through Atiyah--Patodi--Singer theory](https://arxiv.org/abs/2504.21204). It says: “The representation ρ is topologically trivial if and only if cᵨ,₁ = 0, if and only if ĉᵨ,₁ = 0.”

**Sources:**

- [José Antonio Arciniega Nevárez, José Luis Cisneros-Molina and Agustín Romano Velázquez, Classification of indecomposable reflexive modules on quotient singularities through Atiyah–Patodi–Singer theory (2025)](https://arxiv.org/abs/2504.21204)

### Godbillon–Vey numbers obstruct foliated cobordism

**Remember:** Integrate the secondary form on the boundary of the cobordism.

*Makes the theorem clean to state or prove.* MSC 57R20 (Characteristic classes and numbers in differential topology), 57R30. arXiv math.DG, math.AT. Level 4: research.

**Definition.** A cooriented codimension-one foliation is the kernel of a nowhere-zero one-form α, and dα = β ∧ α for some one-form β. The Godbillon–Vey number of a closed oriented three-manifold is the integral of the closed form β ∧ dβ, which does not depend on the choice of α and β.

**Problem.** Thurston constructed foliations of the three-sphere with every real Godbillon–Vey number. Different numbers rule out a cooriented foliated cobordism, an oriented interpolating manifold whose foliation restricts to the two given foliations.

**How the definition helps.** The form β ∧ dβ is closed wherever the foliation is defined, so Stokes' theorem on a foliated cobordism makes the two boundary integrals equal. The ends keep their original orientations. Our own summary uses independence of α and β for the invariant and Thurston's construction for the range.

**Wikipedia:** [William Thurston](https://en.wikipedia.org/wiki/William_Thurston). It says: “whose Godbillon–Vey invariants (after Claude Godbillon and Jacques Vey) take every real value.”

**Sources:**

- [William Thurston, Noncobordant foliations of S³ (1972)](https://doi.org/10.1090/S0002-9904-1972-12975-6)

### Integral lifts distinguish identical curvatures

**Remember:** Curvature cannot see which torsion class you added.

*Makes the theorem clean to state or prove.* MSC 57R20 (Characteristic classes and numbers in differential topology), 53C08. arXiv math.DG, math.AT. Level 4: research.

**Definition.** A degree-2k Cheeger–Simons input for G pairs an invariant degree-k polynomial P with an integral class u ∈ H²ᵏ(BG; ℤ). The real image of u must be the Chern–Weil class of P, so u can carry torsion that P cannot see.

**Problem.** For the cyclic group of order two, the zero polynomial admits two distinct natural differential characteristic classes of degree two.

**How the definition helps.** For G of order two, H²(BG; ℤ) has order two and both its classes map to zero over ℝ, so both pair with the zero polynomial (our own example). The Cheeger–Simons theorem refines each pair to a natural differential class with that integral class, so the two refinements differ.

**nLab:** [Cheeger-Simons homomorphism](https://ncatlab.org/nlab/show/Cheeger-Simons+homomorphism). It says: “the Cheeger-Simons homomorphism refines this to an assignment of secondary characteristic classes in ordinary differential cohomology to principal connections”

**Sources:**

- [Jeff Cheeger and James Simons, Differential characters and geometric invariants (1985), Theorem 2.2](https://math.mit.edu/juvitop/pastseminars/notes_2019_Fall/cheeger-simons.pdf)

### Mapping tori give Chern–Simons holonomy

**Remember:** One loop of surfaces sweeps out one three-cycle.

*True by definition.* MSC 57R20 (Characteristic classes and numbers in differential topology), 53C08, 58J28. arXiv math.DG, math.AT. Level 4: research.

**Definition.** A degree-four differential character is a homomorphism h from smooth integral three-cycles to ℝ/ℤ. For one fixed four-form ω, h(∂c) = ∫<sub>c</sub> ω modulo integers for every smooth four-chain c. Integrating along closed oriented surface fibres gives the degree-two character of the Chern–Simons line.

**Problem.** Parallel transport around a loop in the base equals exp(2πi h), where h is the original character evaluated on the surface family over that loop.

**How the definition helps.** Fibre integration evaluates the character on the three-manifold swept out by the surfaces over the loop, which is the mapping torus of the surface family (our own explanation). This replaces building transport by gluing local trivializations of the line (our own).

**nLab:** [fiber integration in ordinary differential cohomology](https://ncatlab.org/nlab/show/fiber+integration+in+ordinary+differential+cohomology). It says: “is the partial higher holonomy operation for circle n-bundles with connection”

**Sources:**

- [Daniel Freed, Classical Chern–Simons Theory, Part 2 (2002)](https://www.ma.utexas.edu/users/dafr/cs2.pdf)

### Trivializations recover Chern–Simons integrals

**Remember:** Upstairs, every bundle has a tautological frame to compare against.

*True by definition.* MSC 57R20 (Characteristic classes and numbers in differential topology), 53C08. arXiv math.DG, math.AT. Level 4: research.

**Definition.** Over the total space of a principal bundle π:P → M, the pulled-back bundle π\*P = P ×<sub>M</sub> P has the tautological section p ↦ (p,p). This section gives a trivial reference connection, so the pulled-back connection is compared with it by a Chern–Simons form.

**Problem.** On the total space, the differential characteristic class evaluates on cycles by integrating this Chern–Simons form modulo integers. A global section gives the same formula on the base.

**How the definition helps.** The trivial connection has zero differential characteristic class in positive degree, by naturality from a point (our own argument). The connection-change formula then makes the class equal the integral of the transgression form modulo integers. Pullback along any global section gives the base formula.

**nLab:** [secondary characteristic class](https://ncatlab.org/nlab/show/secondary+characteristic+class). It says: “Using refined Chern-Weil theory the notions of curvature characteristic forms and their Chern-Simons forms are unified into the notion of cocycles in ordinary differential cohomology.”

**Wikipedia:** [Chern–Simons form](https://en.wikipedia.org/wiki/Chern%E2%80%93Simons_form). It says: “The right-hand side of this equation is proportional to the k-th Chern character of the connection A.”

**Sources:**

- [Jeff Cheeger and James Simons, Differential characters and geometric invariants (1985), Propositions 2.8–2.9](https://math.mit.edu/juvitop/pastseminars/notes_2019_Fall/cheeger-simons.pdf)

### Truncation closes mixed foliation forms

**Remember:** Curvature above degree 2q is zero, so its primitives become classes.

*True by definition.* MSC 57R20 (Characteristic classes and numbers in differential topology), 57R30. arXiv math.DG, math.AT. Level 4: research.

**Definition.** The truncated Weil algebra in codimension q is ℝ\[c₁,…,c<sub>q</sub>\] ⊗ Λ(y₁,…,y<sub>q</sub>), with deg cᵢ = 2i, deg yᵢ = 2i−1, dcᵢ = 0 and dyᵢ = cᵢ. It kills all curvature monomials of degree above 2q, so yᵢc is closed whenever cᵢc has degree above 2q.

**Problem.** For a smooth foliation with a framed normal bundle, a polynomial c of degree at most 2q gives a secondary class whenever degree(cᵢc) exceeds 2q. The class is represented in the algebra by yᵢc.

**How the definition helps.** In the truncated algebra d(yᵢc) = cᵢc is zero, so yᵢc is a cocycle (our own calculation). Bott vanishing, that normal Chern forms of a foliation vanish above degree 2q, justifies the cutoff. The characteristic map sends the class to the manifold using the chosen normal frame.

**nLab:** [Bott connection](https://ncatlab.org/nlab/show/Bott+connection). It says: “for any connection on the (co)normal bundle and defined on all vector fields on X which restricts to the above along leaves”

**Paper or page:** [Rigid secondary characteristic classes](https://arxiv.org/abs/2403.09371). It says: “of graded degree $deg(c<sub>J</sub>) &gt; 2q$, the Chern form $c<sub>J</sub>(\\Omega ({\\nabla ^{{\\mathcal F}}}))$ is identically zero.”

**Sources:**

- [Raoul Bott, On characteristic classes in the framework of Gelfand–Fuks cohomology (1976)](https://www.numdam.org/item/AST_1976__32-33__113_0/)
- [Steven Hurder, Rigid secondary characteristic classes](https://arxiv.org/abs/2403.09371)

### Universal flat classes live on discrete groups

**Remember:** Classify the locally constant transitions, not just the underlying bundle.

*Makes the theorem clean to state or prove.* MSC 57R20 (Characteristic classes and numbers in differential topology), 55R40. arXiv math.DG, math.AT. Level 4: research.

**Definition.** A flat principal G-bundle is a bundle with an atlas whose transition functions are locally constant, compatible flat atlases giving the same structure. So it is a bundle for G with the discrete topology.

**Problem.** Choose a positive-degree integral characteristic class and a curvature polynomial representing it over the reals. One universal secondary class then gives every flat bundle’s secondary class by pullback.

**How the definition helps.** A flat bundle is pulled back from the classifying space of G with the discrete topology (our own summary). So one universal class there gives every flat bundle's class by naturality. Cheeger and Simons construct that universal class with coefficients in ℝ/ℤ.

**nLab:** [Cheeger-Simons differential character](https://ncatlab.org/nlab/show/Cheeger-Simons+differential+character). It says: “in particular if the curvature characteristic form vanishes so that the corresponding Chern-Simons form becomes closed”

**Sources:**

- [Jeff Cheeger and James Simons, Differential characters and geometric invariants (1985), §8](https://math.mit.edu/juvitop/pastseminars/notes_2019_Fall/cheeger-simons.pdf)

### Universal foliation classes pull back

**Remember:** Pull back one class from the space of framed transverse data.

*Makes the theorem clean to state or prove.* MSC 57R20 (Characteristic classes and numbers in differential topology), 57R30, 55R40. arXiv math.DG, math.AT. Level 4: research.

**Definition.** A smooth codimension-q Haefliger cocycle assigns local maps to ℝᑫ, glued on overlaps by germs of local diffeomorphisms that compose on triple overlaps. A framing trivializes the rank-q bundle glued by their derivatives.

**Problem.** Every secondary class from the truncated Weil algebra of a framed foliation comes by pullback from the framed Haefliger classifying space.

**How the definition helps.** Every framed foliation is pulled back from the framed Haefliger classifying space, so its secondary classes are pulled back too. Our own summary uses the universal characteristic map of Theorem 3.2 to obtain the pullback formula.

**Paper or page:** [Rigid secondary characteristic classes](https://arxiv.org/abs/2403.09371). It says: “There is a well-defined universal characteristic map”

**Sources:**

- [Raoul Bott and André Haefliger, On characteristic classes of Γ-foliations (1972)](https://doi.org/10.1090/S0002-9904-1972-13101-X)
- [Steven Hurder, Rigid secondary characteristic classes](https://arxiv.org/abs/2403.09371)

### In cohesive higher geometry every foliation is simple

**Remember:** Let the leaf space be a stack, and every foliation becomes a submersion.

*True by definition. Confidence: low.* MSC 57R30 (Foliations in differential topology; geometric theory), 18F40, 18N60. arXiv math.DG, math.CT. Level 4: research.

**Definition.** In differential cohesion, a foliation of X is a formally smooth 1-epimorphism X → X//𝒟 onto its leaf stack, a higher stack. Its leaves are the fibres over points.

**Problem.** In differential cohesion every foliation is simple: its leaves are the fibres of a formally smooth epimorphism onto its leaf space, a higher stack. For an étale foliation groupoid, these are the traditional leaves.

**How the definition helps.** The defining map already shows each leaf as a fibre. In our own groupoid description, the fibre over a represented point projects onto its orbit, which is the traditional leaf.

**nLab:** [foliation](https://ncatlab.org/nlab/show/foliation). It says: “Because the quotient map to the leaf space of a general foliation is always a submersion/formally smooth morphism, just not always onto a manifold, but onto a higher space.”

**Sources:**

- [Urs Schreiber, Differential cohomology in a cohesive infinity-topos, 2013, arXiv:1310.7930](https://arxiv.org/abs/1310.7930)

### Flexible sheaves are defined so that the h-principle follows

**Remember:** Restrictions of sections over compact sets lift homotopies of disks.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 57R42 (Immersions in differential topology), 18F20. arXiv math.DG, math.GT. Level 4: research.

**Definition.** A continuous sheaf on a polyhedron is flexible if, for all compact K ⊂ L, restricting sections from L to K is a Serre fibration. So homotopies of sections over K lift to L, where sections over a compact set are germs on its neighbourhoods.

**Problem.** Every flexible sheaf on a polyhedron satisfies the parametric h-principle.

**How the definition helps.** Lifting homotopies through these restrictions lets one extend homotopies of sections from smaller compact sets to larger ones (our own). Gromov's flexible sheaf theorem uses this to prove the parametric h-principle.

**Paper or page:** [Fibration structure for Gromov h-principle](https://arxiv.org/abs/2102.03449), [Fibration structure for Gromov h-principle](https://arxiv.org/abs/2102.03449). It says: “Any flexible sheaf on a polyhedron satisfies the parametric h-principle.”

**Sources:**

- [K. Yamazaki, Fibration structure for Gromov h-principle, arXiv:2102.03449 (2022)](https://arxiv.org/abs/2102.03449)
- [M. Gromov, Partial Differential Relations, Springer (1986)](https://doi.org/10.1007/978-3-662-02267-2)

### Counting bundles by groupoid cardinality makes Dijkgraaf–Witten values basepoint-free

**Remember:** Weight each bundle by its symmetries, and no basepoint is needed.

*True by definition.* MSC 57R56 (Topological quantum field theories (aspects of differential topology)), 81T45. arXiv math.QA, math.GT. Level 4: research.

**Definition.** The untwisted Dijkgraaf–Witten value Z(M), for a finite group G and closed manifold M, is the groupoid cardinality of G-bundles on M. It is the sum of 1/\|Aut(P)\| over isomorphism classes of principal G-bundles P.

**Problem.** Let M be a connected closed manifold and G a finite group. The untwisted Dijkgraaf–Witten value of M does not depend on a basepoint. It equals \|Hom(π₁(M, x), G)\| / \|G\| for every basepoint x.

**How the definition helps.** The sum uses no basepoint, so neither does Z(M) (our own observation). For connected M and any basepoint x, monodromy identifies the bundle groupoid with G acting by conjugation on Hom(π₁(M,x),G) (our own explanation). That action groupoid has cardinality \|Hom(π₁(M,x),G)\| / \|G\|.

**nLab:** [Dijkgraaf-Witten theory](https://ncatlab.org/nlab/show/Dijkgraaf-Witten+theory), [groupoid cardinality](https://ncatlab.org/nlab/show/groupoid+cardinality). It says: “then the cardinality of the action groupoid X//G is \|X\|/\|G\|.”

**Sources:**

- [Robbert Dijkgraaf and Edward Witten, Topological gauge theories and group cohomology (1990)](https://doi.org/10.1007/BF02096988)
- [Daniel Freed and Frank Quinn, Chern-Simons theory with finite gauge group (1993)](https://doi.org/10.1007/BF02096860)

### Derived sewing turns circles into loops

**Remember:** Glue the diagonal to itself, derived, and get the loop space.

*True by definition.* MSC 57R56 (Topological quantum field theories (aspects of differential topology)), 81T45. arXiv math.AT. Level 4: research.

**Definition.** Derived sewing glues two correspondences along their common boundary by homotopy fiber product, which keeps the higher homology of the intersection. For affine derived schemes Spec B and Spec C over Spec R, the glued object is Spec(B ⊗ᴸ<sub>R</sub> C).

**Problem.** Take the oriented two-dimensional theory of Theorem C with point value X = Spec A and the canonical trivialization of its Serre automorphism. It assigns to the circle Spec of the Hochschild chains of A.

**How the definition helps.** The circle is two arcs glued at both ends, and each arc gives the diagonal correspondence from X to X × X (our own). Derived sewing then gives the derived self-intersection of the diagonal, Spec of A ⊗ᴸ<sub>A⊗A</sub> A, which is the Hochschild chain complex (our own). The construction of the oriented theory shows that the two arcs carry these diagonal correspondences.

**Paper or page:** [Higher categories of push-pull spans, II: Matrix factorizations](https://arxiv.org/abs/2409.00219v2). It says: “Spec HC(A)”

**Sources:**

- [Higher categories of push-pull spans, II: Matrix factorizations](https://arxiv.org/abs/2409.00219v2)

### Gauge spans compose under sewing

**Remember:** A glued bundle is two bundles plus a boundary match.

*Makes the theorem clean to state or prove.* MSC 57R56 (Topological quantum field theories (aspects of differential topology)), 81T45. arXiv math.AT. Level 4: research.

**Definition.** For a finite group G, the gauge groupoid of a manifold has principal G-bundles as objects and bundle isomorphisms as arrows. Restriction to the boundary turns a bordism into a span of gauge groupoids. A homotopy pullback over the common boundary records a bundle on each side and an isomorphism between their boundary restrictions.

**Problem.** For oriented three-dimensional bordisms, the gauge groupoid of a glued bordism is equivalent to the homotopy pullback of the gauge groupoids of the two pieces over their common boundary.

**How the definition helps.** Gluing two bundles along a collar by a boundary isomorphism inverts restriction, up to natural isomorphism (our own). Arrows glue the same way: two bundle isomorphisms that respect the boundary identification glue to one isomorphism (our own).

**Paper or page:** [A geometrical description of untwisted Dijkgraaf-Witten TQFT with defects](https://arxiv.org/abs/2410.18049v1). It says: “to a stratified surface Σ with defect data its gauge groupoid”

**Sources:**

- [A geometrical description of untwisted Dijkgraaf-Witten TQFT with defects](https://arxiv.org/abs/2410.18049v1)

### Graded Frobenius structures survive suspension

**Remember:** Suspension shifts each operation's degree by outputs minus inputs.

*Makes the theorem clean to state or prove.* MSC 57R56 (Topological quantum field theories (aspects of differential topology)). arXiv math.AT. Level 4: research.

**Definition.** In Clivio’s planar construction, a (c,d)-graded Frobenius algebra is a monoidal representation of the graded planar graph bordism category pGCob(c,d), so gluing graphs obeys that category's signs. Its product has degree c, its coproduct has degree d, and each operation's degree is fixed by its numbers of inputs and outputs.

**Problem.** Let A be a graded abelian group and let ΣA raise every degree by one. Suspension gives a bijection between Frobenius structures of degrees (c,d) on A and structures of degrees (c−1,d+1) on ΣA.

**How the definition helps.** Moving an operation from A to ΣA changes its degree by its number of outputs minus its number of inputs (our own). So the product, with two inputs and one output, drops to degree c − 1, and the coproduct rises to d + 1 (our own). The cited theorem checks that the induced sign changes preserve all the relations.

**Paper or page:** [Graded Frobenius Algebras](https://arxiv.org/abs/2412.13909v2). It says: “Giving a (c,d)-graded (commutative or symmetric) Frobenius algebra structure on A := F(∗) ∈ ℤMod• is equivalent to giving a (c−1,d+1)-graded (commutative or symmetric) Frobenius algebra structure on ΣA.”

**Sources:**

- [Graded Frobenius Algebras](https://arxiv.org/abs/2412.13909v2)

### Homotopy fixed points retain orientation choices

**Remember:** Fixed up to rotation, with the paths to each rotation recorded.

*Makes the theorem clean to state or prove.* MSC 57R56 (Topological quantum field theories (aspects of differential topology)). arXiv math.AT. Level 4: research.

**Definition.** A homotopy fixed point of an action of the rotation group SO(n) on a space X is a point with coherent chosen paths to all its rotated images. Precisely, it is an SO(n)-equivariant map from a contractible free SO(n)-space to X.

**Problem.** Let X be the space of fully dualizable objects in a symmetric monoidal (∞,n)-category, those with the duals and adjoints needed to evaluate bordisms down to points. Evaluation at a point identifies fully extended oriented n-dimensional field theories with homotopy fixed points of the SO(n) action on X that rotates framings.

**How the definition helps.** An oriented theory must be unchanged by rotating frames, and a homotopy fixed point records how it is unchanged as extra data (our own). The oriented cobordism hypothesis identifies these data with fully extended oriented theories.

**nLab:** [cobordism hypothesis](https://ncatlab.org/nlab/show/cobordism+hypothesis). It says: “a homotopy fixed point is not just a property. It is additional structure.”

**Sources:**

- [Lurie, On the Classification of Topological Field Theories](https://people.math.harvard.edu/~lurie/papers/cobordism.pdf)

### Inverting bordisms exposes partition characters

**Remember:** A theory that already inverts every bordism factors through the completion.

*True by definition.* MSC 57R56 (Topological quantum field theories (aspects of differential topology)). arXiv math.AT. Level 4: research.

**Definition.** The groupoid completion of a category is the groupoid made by formally inverting every arrow. So every functor from the category into a groupoid extends across it, uniquely up to natural isomorphism.

**Problem.** Every invertible theory, valued in lines and their isomorphisms, factors through the groupoid completion of the bordism category. On the empty manifold's component, a character of the cut-and-paste group SKK determines it up to isomorphism, for the cited structured bordism categories.

**How the definition helps.** An invertible theory sends every bordism to an isomorphism, so the universal property gives the factorization (our own). The empty manifold's component is one object with its automorphism group, and a functor on it is a line with a character (our own). The cited theorem identifies that group with SKK.

**Paper or page:** [SKK groups of manifolds and non-unitary invertible TQFTs](https://arxiv.org/abs/2504.07917v1). It says: “π₁(‖Bordξₙ₋₁,ₙ‖) ≅ π₁(‖N Cobξₙ₋₁,ₙ‖) ≅ SKK(Cobξₙ₋₁,ₙ) = SKKξₙ.”

**Sources:**

- [SKK groups of manifolds and non-unitary invertible TQFTs](https://arxiv.org/abs/2504.07917v1)

### Lines turn sewing into scalar multiplication

**Remember:** On a line, swapping partners only reorders a product of numbers.

*True by definition.* MSC 57R56 (Topological quantum field theories (aspects of differential topology)). arXiv math.AT. Level 4: research.

**Definition.** An invertible complex topological field theory is a symmetric monoidal functor from the bordism category to complex lines and linear isomorphisms. All its values are one-dimensional, so gluing only multiplies numbers, and numbers commute.

**Problem.** Let N₁, N₂ be bordisms into a closed boundary and N₁′, N₂′ bordisms out of it. Then Z(N₁ ∪ N₁′)Z(N₂ ∪ N₂′) = Z(N₁ ∪ N₂′)Z(N₂ ∪ N₁′), so closed values define a homomorphism from the cut-and-paste group to the nonzero complex numbers.

**How the definition helps.** A line has dimension one, so the exchange identity is an identity between products of scalars. In a basis, write the incoming vectors as a, b and the outgoing functionals as c, d; then (ca)(db) = (da)(cb) (our own). The cited proposition shows that these exchanges generate the relations of the cut-and-paste group.

**Paper or page:** [SKK groups of manifolds and non-unitary invertible TQFTs](https://arxiv.org/abs/2504.07917v1). It says: “N₁ ∪ N₁′ + N₂ ∪ N₂′ ∼ N₁ ∪ N₂′ + N₂ ∪ N₁′”

**Sources:**

- [SKK groups of manifolds and non-unitary invertible TQFTs](https://arxiv.org/abs/2504.07917v1)

### Maslov weights lift projective actions

**Remember:** Carry the gluing anomaly as an integer weight on each cylinder.

*True by definition.* MSC 57R56 (Topological quantum field theories (aspects of differential topology)). arXiv math.GT, math.QA. Level 4: research.

**Definition.** Fix a Lagrangian L in the real first homology of a closed oriented surface. A weighted mapping cylinder is a mapping class f with an integer weight m. Weights multiply by (f,m)(g,n) = (fg, m + n + μ(L,fL,fgL)), where μ is the Gilmer–Masbaum Maslov index.

**Problem.** For the surface theories of Gilmer and Masbaum, the operators assigned to weighted mapping cylinders form a linear representation of the extended mapping class group.

**How the definition helps.** The sewing theorem multiplies a glued operator by exactly the scalar that the Maslov term records, so the operators compose with no leftover factor (our own explanation). The Maslov index is a 2-cocycle, which makes the group law associative.

**Paper or page:** [Some remarks on the Maslov index](https://arxiv.org/abs/2105.04337v3). It says: “The Maslov index is a 2-cocycle”

**Sources:**

- [Gilmer and Masbaum, Maslov index, Lagrangians, Mapping Class Groups and TQFT](https://doi.org/10.1515/form.2011.143)
- [Some remarks on the Maslov index](https://arxiv.org/abs/2105.04337v3)

### Ordered intervals allow noncommutative products

**Remember:** Planar pants cannot swap legs, so products need not commute.

*Makes the theorem clean to state or prove.* MSC 57R56 (Topological quantum field theories (aspects of differential topology)). arXiv math.AT. Level 4: research.

**Definition.** A Frobenius algebra object in a monoidal category has a unital associative product m and a counital coassociative coproduct Δ. They satisfy Δm = (m ⊗ id)(id ⊗ Δ) = (id ⊗ m)(Δ ⊗ id). Nothing requires m to commute, which matches planar bordisms, where inputs cannot be swapped.

**Problem.** For a monoidal target C, evaluation on one interval gives an equivalence between monoidal functors from planar open bordisms and Frobenius algebras in C.

**How the definition helps.** Planar gluing keeps the order of inputs, so no bordism forces ab = ba, and noncommutative algebras appear. For example, complex 2 × 2 matrices with the pairing (a,b) ↦ trace(ab) form one (our own example). The proof matches generators and relations of planar surfaces with the Frobenius axioms.

**Paper or page:** [Graded Frobenius Algebras](https://arxiv.org/abs/2412.13909v2). It says: “Funᵐᵒⁿ(Cob₂ᵖˡᵃⁿᵃʳ,C) → Frob(C)”

**Sources:**

- [Clivio, Graded Frobenius Algebras](https://academic.oup.com/qjmath/article-abstract/76/4/1105/8258596)

### Radical quotients make sewing nondegenerate

**Remember:** Two states are equal when every closing-up gives the same number.

*True by definition.* MSC 57R56 (Topological quantum field theories (aspects of differential topology)). arXiv math.AT. Level 4: research.

**Definition.** For a boundary, form the free vector space on bordisms from the empty boundary into it, and the one on bordisms out of it to the empty boundary. Pair two basis bordisms by the scalar of the closed manifold they glue to, extended bilinearly. Quotient each space by the vectors that pair to zero with every vector of the other.

**Problem.** The induced pairing has zero left and right radicals. Gluing another bordism gives a well-defined linear map between the quotients.

**How the definition helps.** The quotient removes exactly the vectors that no test can see, so both radicals vanish. Testing a glued vector equals testing the original against the composite bordism, by associativity of gluing (our own). So gluing sends radical vectors to radical vectors and descends to the quotients (our own).

**Paper or page:** [Universal construction in monoidal and non-monoidal settings, the Brauer envelope, and pseudocharacters](https://arxiv.org/abs/2303.02696v1). It says: “is nondegenerate.”

**Sources:**

- [Universal construction in monoidal and non-monoidal settings, the Brauer envelope, and pseudocharacters](https://arxiv.org/abs/2303.02696v1)

### Pseudocycles represent exactly the integral homology classes

**Remember:** A cycle allowed to fray, but only in codimension two.

*Makes the theorem clean to state or prove.* MSC 57R95 (Realizing cycles by submanifolds), 53D45. arXiv math.GT, math.SG. Level 4: research.

**Definition.** A pseudocycle is a smooth map from an oriented manifold whose limit set is covered by images of manifolds two dimensions smaller. The limit set is what the closure adds to the image, and evaluation maps on simple J-curves are pseudocycles.

**Problem.** Equivalence classes of pseudocycles in a smooth manifold X correspond one-to-one to integral homology classes of X (Zinger). So Gromov–Witten invariants defined by pseudocycles are integral homology classes.

**How the definition helps.** A generic pseudocycle of complementary dimension misses a codimension-two limit set, so intersection numbers are well defined (our own). Zinger's theorem identifies these numbers with integral homology, so no triangulation of moduli spaces is needed (our own). A limit set of codimension one would make the counts depend on choices (our own).

**Paper or page:** [Equivalence between Gromov-Witten invariants: Domain dependent perturbation and Kuranishi structure approaches](https://arxiv.org/abs/2507.04798v1). It says: “there exist natural homomorphisms of graded Z-modules Ψ\_\*: H\_\*(X;Z) → ℋ\_\*(X) and Φ\_\*: ℋ\_\*(X) → H\_\*(X;Z), such that Ψ\_\* ∘ Φ\_\* = Id and Φ\_\* ∘ Ψ\_\* = Id.”

**Sources:**

- [A. Zinger, Pseudocycles and integral homology, Trans. Amer. Math. Soc. 360 (2008) 2741–2765](https://doi.org/10.1090/S0002-9947-07-04440-6)
