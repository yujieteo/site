source: https://www.its.caltech.edu/~matilde/FzetaGeomIJNT.pdf
slogan: Counting points "over 𝔽<sub>1</sub>" means setting q = 1, and the Habiro ring lets you set q to any root of unity instead.
basis: the introduction and the main theorem statements

## Before you start

This paper by Lo and Marcolli proposes several definitions and settles on none. The likely feeling is unease: you may wait for the one true notion of 𝔽<sub>ζ</sub> and it never comes. That unease is a fair reading of an exploratory paper, and you can let it sit there. If you want to see why the Habiro ring keeps turning up next to the field with one element, this is a gentle place to see it. Enjoy the counting examples in the first four pages. Whether you reach the end matters less.

## The story

Tits noticed that point counts over 𝔽<sub>q</sub> still mean something at q = 1. Projective space P<sup>n−1</sup> has 1 + q + ... + q<sup>n−1</sup> points, and at q = 1 this is n, the size of a finite set. So people speak of geometry over 𝔽<sub>1</sub>. Zagier asked Marcolli whether a root of unity ζ could replace 1. The obstacle is that plugging ζ into a counting polynomial gives a complex number, not a count. The paper tries two naive fixes, then moves the question into the Grothendieck ring of varieties. There the class L of the affine line plays the role of q. Completing that ring in Habiro's way gives a ring where every class can be evaluated at all roots of unity at once. The targets of these evaluations turn out to be Grothendieck rings of motives in which a Tate twist is forgotten.

## Main definitions

**Torification (motivic 𝔽<sub>1</sub>-structure; Condition 1.2).** Let X be a variety over ℤ and T = L − 1 the class of the multiplicative group. X has a motivic 𝔽<sub>1</sub>-structure if its class is [X] = Σ a<sub>k</sub> T<sup>k</sup> with all a<sub>k</sub> ≥ 0.
- Consequence: the count N<sub>X</sub>(q) is a polynomial, N<sub>X</sub>(1) = a<sub>0</sub> counts the 𝔽<sub>1</sub>-points, and N<sub>X</sub>(n + 1) counts points over the extension 𝔽<sub>1<sup>n</sup></sub>.
- Geometric version (Condition 1.4): X is a disjoint union of tori, in the sense of Lopez-Peña and Lorscheid.

**Evaluation 𝔽<sub>ζ</sub>-points (Condition 2.1).** Let ζ be a root of unity of order n. X has evaluation 𝔽<sub>ζ</sub>-points if N<sub>X</sub>(q) = Σ b<sub>k</sub> q<sup>k</sup> is a polynomial whose non-zero coefficients are positive and occur only in degrees divisible by n. Then N<sub>X</sub>(ζ) is a non-negative integer.
- Geometric version (Condition 2.3): X has a cell decomposition into affine spaces whose dimensions are all divisible by n.

**Interpolation 𝔽<sub>ζ</sub>-points (Condition 2.8).** X has interpolation 𝔽<sub>ζ</sub>-points if N<sub>X</sub> is a polynomial with N<sub>X</sub>(m + 1) ≥ 0 for all m ≥ 0 and also for m = −n. Here negative integers stand in for roots of unity.

**Habiro–Grothendieck ring (Definition 3.1).** Let K<sub>0</sub>(V<sub>ℤ</sub>) be the Grothendieck ring of varieties over ℤ. The Habiro–Grothendieck ring is the inverse limit over n of the quotients K<sub>0</sub>(V<sub>ℤ</sub>)/((L − 1)(L<sup>2</sup> − 1)...(L<sup>n</sup> − 1)).
- Tate part: replacing K<sub>0</sub>(V<sub>ℤ</sub>) by ℤ[L] gives Habiro's ring, the same limit for ℤ[q].

## Main results

**Lemma (the conditions are nested; Lemmas 1.3, 1.5 and 2.4).** A geometric torification gives a motivic 𝔽<sub>1</sub>-structure, which gives 𝔽<sub>1<sup>n</sup></sub>-points for all n. An evaluation 𝔽<sub>ζ</sub>-structure, at the level of counts, classes or cells, implies the matching 𝔽<sub>1</sub>-structure.
- Step 1: point counting is additive on closed pieces and multiplicative, so it factors through the Grothendieck ring.
- Step 2: L<sup>k</sup> = (T + 1)<sup>k</sup> expands with non-negative coefficients, so cells give tori.

**Lemma (the Lefschetz class becomes invertible; Lemma 3.3).** In the Habiro–Grothendieck ring L has an inverse, given by an explicit convergent series in the products (L − 1)...(L<sup>n</sup> − 1). So the Tate motive L<sup>−1</sup> is already there and need not be adjoined.
- Why: the argument is the one Habiro uses for q in his ring.

**Proposition (what evaluation lands in; Lemma 3.5 and Proposition 3.6).** For each n ≥ 1 there is a surjective ring map from the Habiro–Grothendieck ring to K<sub>0</sub>(V<sub>ℤ</sub>)/(L<sup>n</sup> − 1). On the motivic side, the Grothendieck ring of the orbit category of rational Chow motives by the twist − ⊗ ℚ(n) is K<sub>0</sub>(Chow<sub>ℚ</sub>)/(L<sup>n</sup> − 1).
- Step 1: the product (L − 1)...(L<sup>n</sup> − 1) lies in the ideal (L<sup>n</sup> − 1), so the limit maps to the quotient.
- Step 2: in the orbit category M and M ⊗ ℚ(nk) become isomorphic, which is exactly the relation [M] = [M]L<sup>nk</sup>.

**Claim (Habiro functions are counting functions; Section 3.4).** Point counting identifies the Tate part of the Habiro–Grothendieck ring with the Habiro ring in q. Under evaluation, counts are only defined modulo q<sup>n</sup> − 1. The paper then reads elements of the Habiro ring as counting functions of certain ind-varieties. I did not read those later sections in detail.

## Note, then ignore

- Two notions that disagree. Evaluation and interpolation give different answers about which varieties have 𝔽<sub>ζ</sub>-points. The Habiro–Grothendieck ring is the paper's attempt to reconcile them. Safe to skip the comparison on a first reading.
- Partial structures (Condition 2.6). A weaker version allows an extra term divisible by q<sup>n</sup> − 1. It is there for the later examples. Safe to skip.
- Integer coefficients. A counting polynomial with rational coefficients automatically has integer ones, so nothing is lost by assuming ℤ. Safe to skip.
- Roots of Tate motives (Section 4). The maps L ↦ L<sup>n</sup> on the Habiro ring lead to formal objects ℚ(r) with r rational. This is a formal construction, not a geometric one. Safe to skip at first.
- "Structure" versus "points". The paper uses "points" for conditions on counts and "structure" for conditions on classes or decompositions. Safe to skip the distinction at first.

## One next step

Open the paper at Section 1.1 and read the two displayed formulas for the point counts of projective space and the Grassmannian, with the sentence on what they become at q = 1.
