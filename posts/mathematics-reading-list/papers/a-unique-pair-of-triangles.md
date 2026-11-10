source: https://arxiv.org/pdf/1809.09936
slogan: Exactly one rational right triangle and one rational isosceles triangle share perimeter and area, and counting points on a genus 2 curve proves it.
basis: the full text

## Before you start

The paper is five pages, and the question fits on a postcard. The feeling it may raise comes halfway through, when the proof hands two steps to a computer algebra system and to a cited theorem. That can leave a flat sense of being shut out of the real work. It is fine to feel a little cheated. What the paper offers is a complete, small model of how modern arithmetic geometry settles a Diophantine question, start to end. Enjoy the reduction from triangles to a curve first. The black boxes can stay closed for now.

## The story

A rational triangle has rational side lengths. People have built infinite families of pairs of rational triangles with equal perimeter and equal area. Hirakawa and Matsumura ask about one fixed shape pairing: a right triangle and an isosceles triangle. For integer triangles with coprime sides, an elementary parity argument shows no such pair exists. Over ℚ the parity trick is gone. The idea is to parametrise both triangles, turn "same perimeter, same area" into a quadratic equation in one unknown k, and demand that its discriminant be a rational square. That condition is a curve y<sup>2</sup> = (polynomial of degree 6), of genus 2. Such a curve has finitely many rational points, and the Chabauty-Coleman bound caps the number at ten. Ten points are visible. Two of them give the triangles (377, 135, 352) and (366, 366, 132).

## Main definitions

**Rational triangle.** A triangle whose three side lengths are rational numbers. Every rational right triangle has sides (k(1 + x<sup>2</sup>), k(1 − x<sup>2</sup>), 2kx) with rational k, x > 0.
- Isosceles case: a rational isosceles triangle with rational area has rational height, so it is two copies of a rational right triangle glued along a leg.

**The curves C<sub>1</sub> and C<sub>2</sub>.** C<sub>1</sub> is the smooth projective model of r<sup>2</sup> = (−3w<sup>3</sup> + 2w<sup>2</sup> − 6w + 4)<sup>2</sup> − 8w<sup>6</sup>. C<sub>2</sub> is the smooth projective model of s<sup>2</sup> = (u<sup>3</sup> − u + 6)<sup>2</sup> − 32. Both are hyperelliptic of genus 2.
- They arise from the two ways to glue: along one leg or along the other.

**Mordell-Weil rank.** For a curve C over ℚ with Jacobian J, the group J(ℚ) is finitely generated. Its rank is the number of independent points of infinite order.

## Main results

**Theorem (the unique pair; Theorem 1.1).** Up to similarity, there is exactly one pair of a rational right triangle and a rational isosceles triangle with the same perimeter and the same area. It is the right triangle (377, 135, 352) and the isosceles triangle (366, 366, 132). Both have perimeter 864 and area 23760.
- Step 1: reduce to rational points on C<sub>1</sub> and C<sub>2</sub> by the discriminant condition.
- Step 2: show each curve has exactly ten rational points. On C<sub>2</sub>, only the two points with u = 5/6 give triangles, and both give the same pair. On C<sub>1</sub>, none of the ten gives a triangle.

**Theorem (Chabauty and Coleman; Theorem 1.2, quoted from the literature).** Let C be a smooth projective geometrically integral curve of genus g ≥ 2 over ℚ with Jacobian J. Let p be a prime with p > 2g at which C has good reduction. If the rank of J(ℚ) is less than g, then #C(ℚ) ≤ #C(𝔽<sub>p</sub>) + (2g − 2).
- Here: g = 2, p = 5, the rank bound is 1, and #C<sub>1</sub>(𝔽<sub>5</sub>) = 8. So #C<sub>1</sub>(ℚ) ≤ 8 + 2 = 10.

**Theorem (no primitive pair; Theorem 1.3).** No primitive right triangle and primitive isosceles triangle have the same perimeter and the same area. Primitive means integer sides with greatest common divisor 1.
- Step: the equations force (u − v)/(u + v) to be a positive integer for positive integers u, v, which cannot happen.

## Note, then ignore

- The rank bound comes from Magma. The authors run a 2-descent routine on the Jacobian and get "at most 1". A footnote says the rank is exactly 1. Safe to skip on a first reading.
- C<sub>1</sub> and C<sub>2</sub> are isomorphic. A footnote gives the map (u, s) = (1 − 2/w, 2r/w<sup>3</sup>). So the second count is the first count again. Safe to skip.
- Points at infinity. Each curve has two rational points at infinity, and they are among the ten. They give no triangle. Safe to skip.
- Degenerate points. The eight affine points on C<sub>1</sub> and six of those on C<sub>2</sub> correspond to triangles with a side or a height that is zero or negative. Footnotes list which. Safe to skip.
- Why the bound is sharp here. Chabauty-Coleman gives an upper bound, and in general it can overshoot. In this example the bound equals the number of known points, which is what makes the proof so short. Safe to skip.

## One next step

Open the paper at page 2 and read only the four lines that set up case (1): the two triples of side lengths and the system of two equations below them.
