source: https://arxiv.org/pdf/0805.0564
slogan: After orientation, Spin and String comes Fivebrane, a lift of the tangent bundle whose only obstruction is one sixth of the second Pontrjagin class.
basis: the introduction and the main theorem statements

## Before you start

This paper mixes string theory words (anomaly, NS fivebrane, Green-Schwarz) with homotopy theory (connected covers, Eilenberg-MacLane spaces). You may feel caught between two fields and at home in neither. That is an honest response to a paper written across a border. If you like the idea that a Spin structure is the first rung of a ladder, here is the next rung but one. Enjoy the pattern in the table of homotopy groups. Whether you reach the end matters less.

## The story

A spinning particle needs spacetime to have a Spin structure. A string needs more: a String structure, which exists when half the first Pontrjagin class vanishes. Topologically each step kills the lowest homotopy group of the orthogonal group. Those groups are ℤ/2, ℤ/2, 0, ℤ, 0, 0, 0, ℤ in degrees 0 to 7. Orientation kills the first, Spin the second, String the one in degree 3. The authors ask what kills the ℤ in degree 7 and what physics wants it. Their answer is the fivebrane, the magnetic dual of the string in ten dimensions. The dual form of the Green-Schwarz anomaly formula involves the second Pontrjagin class, and they read it as the obstruction to the next lift.

## Main definitions

**Connected covers.** O(n)⟨k⟩ is the cover of O(n) with all homotopy groups below degree k killed. In order they are SO(n), Spin(n), String(n) and Fivebrane(n).
- String(n) is the 3-connected cover of Spin(n).
- Fivebrane(n) is the 7-connected cover, an extension of String(n) by K(ℤ, 6) (Definition 2).

**Fivebrane structure (Definition 1).** An n-dimensional manifold X has a Fivebrane structure if the classifying map X → BO(n) of its tangent bundle lifts to BFivebrane = BO⟨9⟩. Such a lift passes through an orientation, a Spin structure and a String structure.

**Fractional Pontrjagin classes.** On a Spin manifold p<sub>1</sub> is divisible by 2, and ½p<sub>1</sub> is the chosen half. On BString the group H<sup>8</sup> is ℤ with a generator ν, and p<sub>2</sub> pulls back to 6ν. So on a String manifold ⅙p<sub>2</sub> is defined as the pullback of ν.

## Main results

**Theorem (the obstruction; Theorem 1, proved as Proposition 1).** The obstruction to lifting a String structure on X to a Fivebrane structure is the fractional class ⅙p<sub>2</sub>(TX) in H<sup>8</sup>(X; ℤ).
- Step 1: compare BString with the complex side. The map to the matching cover of BU is an isomorphism on π<sub>8</sub>.
- Step 2: the Chern class c<sub>k</sub> takes the value (k−1)! on the generator of π<sub>2k</sub>(BU). For k = 4 this is 6.

**Proposition (counting lifts; Proposition 3).** For a fixed String structure, the set of Fivebrane structures is a torsor for a quotient of H<sup>7</sup>(X; ℤ). The same holds on the complex side for lifts from BU⟨7⟩ to BU⟨9⟩. The authors call elements of this group fivebrane classes.

**Claim (physics argument; Section 3 and Table 1).** The dual Green-Schwarz anomaly cancellation in heterotic string theory can be read as a Fivebrane condition on a pair: spacetime X and a complex gauge bundle E. The condition is that E has String structure and ⅙p<sub>2</sub>(TX) = 8 ch<sub>4</sub>(E) plus decomposable classes.
- For type IIA there is no gauge bundle and the condition is on TX alone.
- The mixed case meets a mismatch of coefficients, which the authors only partly resolve (Sections 4.6 and 4.7).

## Note, then ignore

- Off-by-one in the brackets. At the group level Fivebrane is O⟨8⟩, and its classifying space is BO⟨9⟩. Both are right, because taking B shifts connectivity by one. Safe to skip on a first reading.
- Stable range. The table of homotopy groups holds for n > k + 1. Small n behaves differently. Safe to skip.
- Pfaffian line bundle (Section 3.1, about page 12). The fermionic path integral is a section of a Pfaffian line bundle. The anomaly is that bundle tensored with a second "charge" line bundle, and cancellation means trivialising the product. This motivates the paper but the topology does not use it. Safe to skip at first.
- Decomposable classes. Products of lower classes appear in the physical formula. The authors say these affect the connection and not the integral class. Safe to skip.
- The factor 48. Proposition 2 treats a variant where the relevant class is p<sub>2</sub>/48. It is needed only for the heterotic coefficients. Safe to skip.

## One next step

Open the paper at page 3 and look at Figure 1, the table of homotopy groups of O(n) with the covers drawn under it. Then read Theorem 1 on page 4.
