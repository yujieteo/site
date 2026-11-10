source: https://www.math.columbia.edu/~calebji/motivic.pdf
slogan: Motivic cohomology extends Chow groups to a full cohomology theory, and thirty-three cartoon slides show where each piece comes from.
basis: the full text

## Before you start

This is a slide deck with Elmo and Big Bird on every page. The feeling it may raise is a mild embarrassment: "this is too light to count as study", or the opposite, "even the cartoon version loses me by slide 15". Both are welcome. Slides are a map, not the territory, and a map is what you want before Mazza, Voevodsky and Weibel's lectures. Let it be fun. If half the slides stick, that is a good visit.

## The story

Chow groups have a localisation sequence, CH<sup>k</sup>(Y) → CH<sup>k</sup>(X) → CH<sup>k</sup>(U) → 0, for a closed Y in X with complement U. The sequence stops on the left. A cohomology theory would continue it. Bloch's idea starts from rational equivalence: two cycles are equivalent when a cycle on X × ℙ<sup>1</sup> joins them, which looks like a homotopy. So replace the interval by algebraic simplices and take cycles on X × Δ<sup>n</sup>. The homology of the resulting complex gives higher Chow groups, and the sequence continues. Voevodsky reaches the same groups by another road: correspondences, presheaves with transfers, and a complex ℤ(q) of sheaves. The slides end with what the theory touches: K-theory, motives, the norm residue theorem and L-values.

## Main definitions

**Higher Chow groups.** Let Δ<sup>n</sup> = Spec k[x<sub>0</sub>, …, x<sub>n</sub>]/(x<sub>0</sub> + … + x<sub>n</sub> − 1). Let z<sup>i</sup>(X, n) be the group of codimension i cycles on X × Δ<sup>n</sup> that meet all faces properly. These form a simplicial abelian group, and CH<sup>i</sup>(X, m) is its m-th homotopy group.
- By Dold–Kan this equals the m-th homology of the associated chain complex.

**Finite correspondences and Cor<sub>k</sub>.** The category Cor<sub>k</sub> has the same objects as smooth separated schemes of finite type over k. A morphism from X to Y is a cycle on X × Y whose components are finite and surjective over X. The graph of a map is an example, so smooth schemes embed in Cor<sub>k</sub>.

**Presheaf with transfers.** An additive contravariant functor from Cor<sub>k</sub> to abelian groups. Besides the usual restriction maps it has "transfer" maps F(Y) → F(X) for each correspondence.
- Examples on the slides: constant presheaves, O\*, and Chow groups. The representable one is written ℤ<sub>tr</sub>(X).

**Motivic complex and motivic cohomology.** ℤ(q) = C<sub>\*</sub>ℤ<sub>tr</sub>(𝔾<sub>m</sub><sup>∧q</sup>)[−q], where C<sub>\*</sub> is the simplicial construction that evaluates on X × Δ<sup>n</sup>. Then H<sup>p,q</sup>(X, ℤ) is the Zariski hypercohomology of X with coefficients in ℤ(q).

## Main results

**Claim (properties of higher Chow groups; slide 6).** Three facts are listed without proof.
- Homotopy invariance: CH<sup>i</sup>(X, m) ≅ CH<sup>i</sup>(X × 𝔸<sup>1</sup>, m). Localisation: the cycle complexes of Y, X and U form a distinguished triangle, so the sequence continues to the left.
- K-theory: the weight q part of K<sub>i</sub>(X) ⊗ ℚ is isomorphic to CH<sup>q</sup>(X, i) ⊗ ℚ.

**Claim (weight one; slide 22).** There is a quasi-isomorphism ℤ(1) ≃ O\*[−1]. So H<sup>1,1</sup>(X, ℤ) = O\*(X), H<sup>2,1</sup>(X, ℤ) = Pic(X), and the other groups of weight one vanish.

**Claim (five comparison results; slide 23).** The slide quotes a list from the Mazza–Voevodsky–Weibel lectures. It does not repeat the standing hypotheses on X, so check them there.
- H<sup>p,p</sup>(Spec k, A) = K<sup>M</sup><sub>p</sub>(k) ⊗ A, Milnor K-theory.
- H<sup>p,q</sup>(X, A) = CH<sup>q</sup>(X, 2q − p; A). In particular H<sup>2q,q</sup>(X, A) = CH<sup>q</sup>(X) ⊗ A, the classical Chow group.

**Claim (spectral sequence to K-theory; slide 25).** As in the Atiyah–Hirzebruch spectral sequence of topology, a spectral sequence starts from motivic cohomology groups and converges to algebraic K-theory. The slide credits Friedlander and Suslin (2002), building on Bloch and Lichtenbaum. The slide gives no hypotheses on X, so none are stated here.

## Note, then ignore

- Missing text. Many formulas on the slides are pasted images, so a text search of the PDF will not find them. Look at the pages themselves. Nothing else follows from this.
- "Meets all faces properly". This condition makes the face maps defined on cycles. It is technical and safe to skip on a first pass.
- Multiplicities. Composition of correspondences uses intersection multiplicities, and one slide points to Serre's Tor formula. You can trust that composition works and move on.
- Sheaf or presheaf. One slide remarks that the ℤ(q) "are actually sheaves". This matters for hypercohomology and for nothing else in the deck. Skip.
- The last slides. The norm residue theorem, Voevodsky's category DM and the conjecture on orders of zeros of zeta functions are name-dropped with one line each. The claim "implies BSD" is given without argument. Treat these as signposts.

## One next step

Open the PDF and look at slides 4 and 5 only: the definition of rational equivalence through X × ℙ<sup>1</sup>, then the definition of higher Chow groups through X × Δ<sup>n</sup>.
