source: https://arxiv.org/pdf/0910.4001
slogan: The Green-Schwarz anomaly condition says spacetime carries a twisted String structure, so a physics recipe becomes a homotopy pullback.
basis: the introduction and the main theorem statements

## Before you start

The paper speaks string theory and homotopy theory at once, and its diagrams are dense. The likely feeling is dread of the vocabulary: heterotic, Fivebrane, L<sub>∞</sub>, 2-group, all on the first two pages. That dread makes sense. It needs no fixing before you begin. If you know what a Spin structure is, you already hold the pattern the whole paper repeats. You may want to watch it climb two more steps. Enjoy Figure 1 first. Completion is optional.

## The story

An orientation lifts the frame bundle from O(n) to SO(n). A Spin structure lifts it again. Each lift kills an obstruction class and cancels an anomaly. The next steps of the Whitehead tower are String(n) and Fivebrane(n), with obstructions ½p<sub>1</sub> and ⅙p<sub>2</sub>. But the heterotic string does not ask for ½p<sub>1</sub>(TX) = 0. Green and Schwarz ask only that it equal a class of the gauge bundle. The authors read this as a twisted lift: the obstruction need not vanish, it must match a prescribed twist, and the B-field is the homotopy that witnesses the match. They define the space of such lifts as a homotopy pullback. Then they repeat the definition in smooth stacks with connections, and the local form data turn out to be the Green-Schwarz equations.

## Main definitions

**String and Fivebrane (Definitions 2.4, 2.15).** BString is the homotopy fibre of ½p<sub>1</sub> : BSpin → B<sup>3</sup>U(1) ≃ K(ℤ, 4). BFivebrane is the homotopy fibre of ⅙p<sub>2</sub> : BString → B<sup>7</sup>U(1) ≃ K(ℤ, 8). The groups are the loop spaces.
- p<sub>1</sub> becomes divisible by exactly 2 on BSpin, and p<sub>2</sub> by exactly 6 on BString (Facts 2.3, 2.14).

**Twisted String structure (Definition 2.5).** For a class [c] in H<sup>4</sup>(X, ℤ), the space of c-twisted String structures on X is the homotopy pullback of Maps(X, BSpin) → Maps(X, B<sup>3</sup>U(1)), induced by ½p<sub>1</sub>, along the point c. A point of it is a Spin bundle together with a homotopy from ½p<sub>1</sub> of that bundle to c.
- c = 0 gives ordinary String structures.

**Twisted Fivebrane structure (Definition 2.16).** The same with BString in place of BSpin, ⅙p<sub>2</sub> in place of ½p<sub>1</sub>, and [c] in H<sup>8</sup>(X, ℤ).

**Twisted differential String structures (Definition 3.2).** The 2-groupoid given by the homotopy pullback of the differential refinement of ½p<sub>1</sub>, a map from Spin bundles with connection on X to circle 3-bundles with connection on X, along the choice of a differential twist. The Fivebrane version is a 6-groupoid defined the same way with ⅙p<sub>2</sub>.

## Main results

**Claim (Green-Schwarz is a twisted String structure; Observation 2.6).** Let X be a Spin manifold with a fixed gauge bundle E. The condition ½p<sub>1</sub>(TX) − ch<sub>2</sub>(E) = 0 in H<sup>4</sup>(X; ℤ) is exactly the condition that the Spin structure lifts to a c<sub>2</sub>(E)-twisted String structure. In the cases the paper treats, ch<sub>2</sub>(E) reduces to c<sub>2</sub>(E).
- Step 1: the two classes are maps X → K(ℤ, 4), one through BSpin and one through BSU.
- Step 2: a homotopy between them is a point of the pullback. That homotopy is the topological part of the B-field, with field strength H<sub>3</sub>.

**Claim (dual Green-Schwarz is a twisted Fivebrane structure; Observation 2.17).** Let X carry a String structure and a gauge bundle E with 8 ch<sub>4</sub>(E) integral. The NS5-brane condition ⅙p<sub>2</sub>(TX) = 8 ch<sub>4</sub>(E), which the paper writes in H<sup>8</sup>(X, ℚ), is exactly the condition for an 8 ch<sub>4</sub>(E)-twisted Fivebrane structure to exist.

**Theorem (local data; Theorem 3.3).** The local differential form data of a twisted String(n) bundle with connection is that of the Green-Schwarz mechanism. For twisted Fivebrane(n) it is that of the dual mechanism. The paper refers to a companion article for details.
- String case: a twisted string(n)-valued L<sub>∞</sub> connection has a 3-form curvature H<sub>3</sub> with Bianchi identity dH<sub>3</sub> = G<sub>4</sub> − P(F<sub>A</sub>). Here G<sub>4</sub> is the curvature of the twist and P the invariant polynomial for ½p<sub>1</sub>.
- Fivebrane case: dH<sub>7</sub> = G<sub>8</sub> − P<sub>8</sub>(F<sub>A</sub>).

## Note, then ignore

- Why not a Lie group. String(n) cannot be a finite-dimensional Lie group, so the paper uses a smooth 2-group, and a smooth 6-group for Fivebrane(n). You can treat these as black boxes on a first reading.
- Later sources. Section 3 surveys results proved in later papers by the authors and collaborators. The article was revised after those appeared. Safe to take the citations on trust.
- Warm-up case. Section 2.1 treats twisted Spin<sup>c</sup> structures and the Freed-Witten condition W<sub>3</sub>(Q) + [H<sub>3</sub>] = 0 on a D-brane. It is the same pattern one step lower. Read it or skip it.
- M-theory variants. Sections 2.2 and 2.3 also cover the C-field and the M5-brane, with a twist by an E<sub>8</sub> class. They are further examples. Skip them at first.
- A small slip. Fact 2.14 says ⅙p<sub>2</sub> generates H<sup>8</sup>(BSpin, ℤ). From context this appears to mean BString. It changes nothing.

## One next step

Open the PDF at page 2 and study Figure 1, the Whitehead tower of BO(n). Then read Definition 2.5 on page 9 and nothing else.
