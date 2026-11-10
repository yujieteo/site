source: https://swc-math.github.io/aws/2023/2023DeMarcoNotes.pdf
slogan: Torsion points on an elliptic curve are the preperiodic points of a map on the line, so complex dynamics can bound how torsion points intersect.
basis: the introduction and the main theorem statements

## Before you start

These are 23 pages of lecture notes that move fast across three fields: complex dynamics, currents, and adelic line bundles. The likely feeling is fear of being too slow, because each lecture assumes a different background. You can feel that and still open the notes. The author says she is describing tools, not giving full proofs. If you would like to see the Mandelbrot set and elliptic curves in one argument, it is here. Read Lecture 1 for fun. Nothing depends on reaching Lecture 4.

## The story

Take an elliptic curve E and the map P ↦ 2P. Identify P with −P and E becomes the projective line, and doubling becomes a rational map f of degree 4, a Lattès map. A point is torsion on E exactly when its image has a finite orbit under f. So questions about torsion become questions about preperiodic points, and these make sense for any rational map. Now vary the map in a family. Complex dynamics has a notion of stability for a moving point: its iterates form a normal family. The key fact is that a point which is stable everywhere is preperiodic, unless the family is constant in disguise. Instability then forces intersections with preperiodic curves, and it produces a positive measure. That positivity is the hypothesis needed by an arithmetic equidistribution theorem of Yuan and Zhang, which gives uniform bounds.

## Main definitions

**Lattès map.** A map f : ℙ<sup>1</sup> → ℙ<sup>1</sup> that is a quotient of a morphism φ : E → E of an elliptic curve, through a finite map π : E → ℙ<sup>1</sup> with π ∘ φ = f ∘ π.
- Example: on y<sup>2</sup> = x(x − 1)(x − t), doubling gives f<sub>t</sub>(x) = (x<sup>2</sup> − t)<sup>2</sup> / (4x(x − 1)(x − t)).

**Canonical height.** For f of degree d > 1 over a number field, ĥ<sub>f</sub>(α) = lim h(f<sup>n</sup>(α))/d<sup>n</sup>, where h is the Weil height. It satisfies ĥ<sub>f</sub>(f(α)) = d·ĥ<sub>f</sub>(α) and vanishes exactly on preperiodic points.
- Lattès case with π of degree 2: ĥ<sub>f</sub>(π(P)) = 2ĥ<sub>E</sub>(P), twice the Néron-Tate height.

**Stability of a marked point.** Let f<sub>t</sub> be a family of maps over a base S and a : S → ℙ<sup>1</sup> a holomorphic map. The pair (f, a) is stable at t<sub>0</sub> if the functions t ↦ f<sub>t</sub><sup>n</sup>(a(t)) form a normal family near t<sub>0</sub>.
- The bifurcation current of the pair is a positive (1,1)-current on S that measures the failure of stability.

## Main results

**Theorem (McMullen; Theorem 3.2).** Let S be a smooth irreducible quasi-projective curve over ℂ and f an algebraic family of maps of ℙ<sup>1</sup> of degree d > 1 over S. Then f is J-stable on all of S if and only if it is isotrivial or a Lattès family.
- Step 1: stability on all of S forces every critical orbit to be finite, persistently.
- Step 2: Thurston's rigidity theorem then shows a non-isotrivial such family is Lattès.

**Theorem (DeMarco, Dujardin-Favre; Theorem 3.3).** With S and f as above and a marked point a ∈ ℙ<sup>1</sup>(ℂ(S)), the pair (f, a) is stable on all of S if and only if it is isotrivial or persistently preperiodic.
- Corollary 3.4: if f is not isotrivial, every algebraic curve C in S × ℙ<sup>1</sup> contains infinitely many preperiodic points.
- Lattès case: on an elliptic surface, the only algebraic leaves of the Betti foliation are the torsion sections.

**Theorem (Yuan-Zhang equidistribution; Theorem 4.2).** Let X be a quasi-projective variety over a number field K and L a nef adelic line bundle whose degree on X is positive. If x<sub>m</sub> is a generic sequence of algebraic points whose heights tend to the height of X, then at each place v the Galois orbits of x<sub>m</sub> equidistribute to the measure of L on the Berkovich space of X.
- The positivity of the degree can be checked at one archimedean place, where it is the positivity of a wedge power of a bifurcation current.

**Theorem (uniform bound for pairs of elliptic curves; reported in Section 4.5).** For elliptic curves E<sub>1</sub>, E<sub>2</sub> over ℂ with degree two projections π<sub>i</sub> to ℙ<sup>1</sup> satisfying π<sub>i</sub>(P) = π<sub>i</sub>(−P), either the images of the torsion points coincide or their intersection has size at most a constant independent of the pair. The notes credit Poineau and outline the proof of DeMarco and Mavraki.
- Step 1: show that a bifurcation measure on the 5-dimensional parameter space is nonzero, so Theorem 4.2 applies.
- Step 2: if there were no bound, equidistribution would force the canonical measures of the two Lattès maps to agree on a large set of parameters, which the branch points of π<sub>i</sub> rule out.

## Note, then ignore

- Isotrivial families. A family is isotrivial if all its members are conjugate by Möbius maps. It is the trivial exception in every theorem. Safe to skip on a first reading.
- Passing to a branched cover. Critical points are only defined after a finite cover of the base. This is bookkeeping and does not change the story.
- Higher-dimensional Lattès maps. The quotient construction rarely gives projective space in dimension above 1, so polarised endomorphisms replace it. Skip unless you need abelian varieties.
- Products of currents. Wedge powers of positive currents need continuous potentials, which Lecture 2 sets up. You can take them on trust.
- Why five points. The positivity argument works on the fifth power of the diagonal and fails for fewer points. Safe to ignore.

## One next step

Open the notes at Section 1.1 and read the paragraph around diagram (1.1), which shows why torsion points become preperiodic points.
