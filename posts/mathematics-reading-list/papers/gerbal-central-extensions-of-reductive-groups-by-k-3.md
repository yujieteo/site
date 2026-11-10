source: https://arxiv.org/pdf/1407.4113
slogan: Central extensions of a reductive group by K₃ are counted by Weyl-invariant quadratic and cubic forms on a lattice, so double loop groups get extensions from simple data.
basis: the introduction and the main theorem statements

## Before you start

The title alone carries three words that can stop you: gerbal, K<sub>3</sub>, and central extension by a sheaf. The likely feeling is a fear of being out of your depth before the first line. That fear is fair, since the paper assumes Brylinski and Deligne's work on K<sub>2</sub>. Let it be there. What you may want is to see how a geometric classification problem collapses to forms on a lattice. The answer fits in one sentence in the introduction. Enjoy that sentence first, and treat the spectral sequences as optional.

## The story

Representation theory needs central extensions of the loop group LG = G((t)) by 𝔾<sub>m</sub>. The loop group is an ind-scheme and hard to handle. A transgression map turns a K<sub>2</sub>-torsor on the finite-dimensional group G into a 𝔾<sub>m</sub>-torsor on LG, and it respects multiplication. So one classifies central extensions of G by the sheaf K<sub>2</sub>. Brylinski and Deligne did this: the answer is Weyl-invariant quadratic forms on the cocharacter lattice. For the double loop group G((t))((s)), the natural extensions are by the stack B𝔾<sub>m</sub>, called gerbal. Transgressing twice means starting from K<sub>3</sub> on G. Safronov runs the Brylinski–Deligne machine one step higher. It still degenerates early, and cubic forms appear.

## Main definitions

**The sheaf K<sub>n</sub>.** The Zariski sheafification of the presheaf of Quillen K-groups on a scheme. K<sub>1</sub> is the sheaf of invertible functions. The paper studies the cohomology groups H<sup>i</sup>(G, K<sub>n</sub>).

**Central extension by K<sub>n</sub>.** A K<sub>n</sub>-torsor T on G with an isomorphism between the pullback of T along multiplication G × G → G and the product of the two pullbacks along the projections, associative on G × G × G. This is a multiplicative torsor.
- Classification: when every K<sub>n</sub>-gerbe on a point is trivial, these are the classes in H<sup>2</sup>(B<sub>•</sub>G, K<sub>n</sub>), where B<sub>•</sub>G is the simplicial scheme with G<sup>×n</sup> in degree n.

**Gerbal central extension.** A multiplicative K<sub>n</sub>-gerbe on G: a gerbe with a multiplicativity isomorphism on G × G and an associativity 2-isomorphism on G × G × G satisfying a condition on G<sup>×4</sup>. Equivalently, a central extension of G by the stack BK<sub>n</sub>.
- Classification: classes in H<sup>3</sup>(B<sub>•</sub>G, K<sub>n</sub>).

**Weyl-invariant forms.** Let Y be the cocharacter lattice of a split maximal torus and W the Weyl group. The answers are W-invariant quadratic forms on Y with values in ℤ or in k<sup>×</sup>, and W-invariant integral cubic forms on Y.

## Main results

**Theorem (Brylinski–Deligne, recalled; Theorem 4.1).** Let G be a split connected reductive group over a field with simply connected derived group. Then the central extensions of G by K<sub>2</sub> form a group isomorphic to the W-invariant quadratic forms on Y.

**Theorem (extensions by K<sub>3</sub>; Theorem 4.2).** Let G be a split connected reductive group over a field k with simply connected derived group. Central extensions of G by K<sub>3</sub> are classified by W-invariant quadratic forms on Y with values in k<sup>×</sup>. Gerbal central extensions of G by K<sub>3</sub> are classified by W-invariant integral cubic forms on Y.
- Step 1: compute H<sup>∗</sup>(G, K<sub>3</sub>) from the torus by the Brylinski–Deligne spectral sequence, built from the Bruhat decomposition. It degenerates at E<sub>1</sub>.
- Step 2: feed these groups into the spectral sequence for B<sub>•</sub>G with E<sub>1</sub> term H<sup>q</sup>(G<sup>×p</sup>, K<sub>3</sub>). It degenerates at E<sub>2</sub>.

**Theorem (K<sub>3</sub>-cohomology, semisimple case; Theorem 2.2).** Let G be split, connected, simply connected and semisimple over k. Then H<sup>0</sup>(G, K<sub>3</sub>) = K<sub>3</sub>(k). H<sup>1</sup> is the W-invariant quadratic forms on Y with values in k<sup>×</sup>. H<sup>2</sup> is the W-invariant cubic forms on Y. H<sup>3</sup>(G, K<sub>3</sub>) = CH<sup>3</sup>(G) is (ℤ/2)<sup>n</sup>, where n counts the subdiagrams of type G<sub>2</sub>, B<sub>3</sub> or D<sub>4</sub> in the Dynkin diagram. Higher groups vanish.
- Consequence: CH<sup>3</sup>(G) is trivial when the Dynkin diagram has only type A and C pieces.

**Claim (loop groups; §4.5).** Transgression sends H<sup>n</sup>(X, K<sub>m</sub>) to H<sup>n</sup>(LX, K<sub>m−1</sub>) and respects multiplicative structures. So each W-invariant cubic form on Y gives a B𝔾<sub>m</sub>-central extension of the double loop group, and each k<sup>×</sup>-valued invariant quadratic form gives a 𝔾<sub>m</sub>-central extension of it. The author expects, but does not prove, that the known gerbal extension of the double loop group of GL<sub>n</sub> comes from the basic cubic form.

## Note, then ignore

- Simply connected derived group. The hypothesis keeps the combinatorics simple and makes the E<sub>1</sub> degeneration immediate. The general case is left open. Safe to skip on a first reading.
- Split groups only. The results extend to split groups over regular bases over a field. The non-split case is unclear, the author says. Safe to skip.
- Refinements on tori. For a torus, K<sub>3</sub>-classes are antisymmetric 3-forms with two correction terms q<sub>1</sub> and q<sub>2</sub> (Proposition 1.3). The signs there are bookkeeping. Safe to skip.
- The relation x.x = x.{−1}. In K-cohomology of a torus a character squares to itself times the symbol {−1}, which is why forms need quadratic refinements. Safe to skip.
- Multiplicative gerbe versus extension by BK<sub>3</sub>. The paper states the two notions are equivalent and works only with the first. Safe to skip.

## One next step

Open the paper and read the two displayed theorems in the introduction, on pages 1 and 2, side by side: Brylinski–Deligne for K<sub>2</sub> and Safronov for K<sub>3</sub>.
