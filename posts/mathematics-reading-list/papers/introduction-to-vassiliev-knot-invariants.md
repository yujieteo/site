source: https://arxiv.org/pdf/1103.5628
slogan: Finite type knot invariants reduce to functions on chord diagrams, so questions about knots become finite combinatorics you can draw.
basis: the introduction and the main theorem statements

## Before you start

This is a book of about 500 pages and 15 chapters. The likely feeling is overwhelm, with a side of guilt about books left half read. You can feel that and still open it. The authors say they teach by pictures and worked examples, and they often show a proof on one instance. If you want a part of knot theory where you can compute by hand within an hour, this is one. Let the drawings be the point. The book is under no obligation to be finished.

## The story

Knot invariants such as the Jones polynomial arrived one by one, each with its own construction. People wanted a single framework that holds them all and says how many independent invariants exist. Vassiliev's idea is to treat an invariant like a function and take its derivative. A knot with a double point is the difference of its two resolutions. An invariant has order at most n if it vanishes on knots with more than n double points, the way a polynomial of degree n has zero (n+1)-th derivative. The top derivative depends only on the order in which double points meet along the circle. That data is a chord diagram. So the degree-n part of the theory is a finite-dimensional space of functions on chord diagrams. Kontsevich's integral shows that every admissible function is realised.

## Main definitions

**Vassiliev skein relation.** Extend any knot invariant v to knots with double points by v(double point) = v(positive crossing) − v(negative crossing), applied at each double point.

**Vassiliev invariant of order ≤ n.** A knot invariant whose extension vanishes on every singular knot with more than n double points. Write V<sub>n</sub> for the space of these.
- Order 0 invariants are constants.

**Chord diagram and symbol.** A chord diagram of order n is a circle with n chords joining 2n distinct points, up to orientation-preserving diffeomorphism of the circle. A singular knot with n double points gives one: join the two preimages of each double point. The symbol of v ∈ V<sub>n</sub> is its value on singular knots with n double points, which depends only on the chord diagram.

**Weight system.** A function on chord diagrams of order n that satisfies the four-term (4T) relations.
- Unframed: it also satisfies the one-term (1T) relation, vanishing on any diagram with an isolated chord.

## Main results

**Theorem (Vassiliev–Kontsevich, the Fundamental Theorem; Theorem 4.2.1).** Over ℂ, the symbol map identifies V<sub>n</sub>/V<sub>n−1</sub> with the space W<sub>n</sub> of unframed weight systems of order n.
- Step 1 (Vassiliev, easy): the symbol of any invariant satisfies 1T and 4T. Both follow from moving a strand around a double point.
- Step 2 (Kontsevich, hard): every unframed weight system is the symbol of some invariant. This needs the Kontsevich integral.

**Theorem (Kontsevich integral; Definition 8.2.1, Theorem 8.8.1).** For a Morse knot K, an iterated integral over heights t<sub>1</sub> > … > t<sub>m</sub> of products of forms d log(z<sub>j</sub> − z′<sub>j</sub>), weighted by chord diagrams, defines Z(K) in the completed algebra of chord diagrams modulo 1T and 4T. After a correction for the number of critical points it is an isotopy invariant I(K). For a weight system w of order n, the map K ↦ w(I(K)) is a Vassiliev invariant of order n with symbol w.
- Key fact: for a singular knot with chord diagram D of order n, Z equals D plus terms of order above n.

**Theorem (classical polynomials are finite type; Section 3.6).** Substitute t = e<sup>h</sup> in the Jones polynomial and expand in powers of h. The coefficient of h<sup>n</sup> is a Vassiliev invariant of order ≤ n.
- The book proves similar statements for the Conway polynomial and the two-variable polynomials in the same section.

The book then builds on these: chord diagrams modulo 4T form a Hopf algebra dual to the algebra of Vassiliev invariants, and Lie algebras produce weight systems (Chapter 6).

## Note, then ignore

- Framed versus unframed. Framed knots drop the 1T relation and use a larger algebra. The two theories run in parallel. Safe to skip on a first reading.
- The ground ring. Some results hold over any commutative ring, but the Fundamental Theorem as stated needs ℂ, or characteristic zero. Safe to skip.
- The hump correction. Z(K) changes when you add a maximum-minimum pair, so the book divides by a power of Z of a fixed unknot shape. Safe to skip.
- Vassiliev's original route. He used a spectral sequence on the space of all maps of the circle to ℝ<sup>3</sup>. The book postpones this to Chapter 15. Safe to skip.
- Chern–Simons theory. The preface names its absence as the book's main omission and points to other texts. Safe to skip.

## One next step

Open the book at Section 3.1.2 and read the half page with the skein relation picture and the definition that follows it.
