source: https://people.math.ethz.ch/~rahul/DP-notes1.pdf
slogan: Weights in mixed Hodge theory force the cohomology of stable pointed genus 0 curves to be spanned by boundary strata, with only WDVV relations.
basis: the full text

## Before you start

Mixed Hodge theory has a reputation for heavy machinery, and you may feel some shame at not knowing it. The author expects that. He says the theory is used here as a black box, and that his motivating examples may not help someone new. So not following every line is the normal state for this text, and you can feel uneasy and carry on. If you want one honest worked use of weights, these 10 pages of text give it. Read for the trick. Completeness can come later.

## The story

Keel computed the cohomology ring of M̄<sub>0,n</sub>, the space of stable n-pointed genus 0 curves, by blow-ups. Kontsevich and Manin sharpened it: boundary strata span the cohomology additively, and all linear relations come from one relation on M̄<sub>0,4</sub>. Petersen reproves this with one idea, weights. Every cohomology group of a variety carries a weight filtration. Smooth compact varieties have H<sup>k</sup> pure of weight k. Natural maps cannot mix different weights. The open part M<sub>0,n</sub> is a complement of hyperplanes, so its H<sup>k</sup> is pure of the "wrong" weight 2k. Then almost nothing from the interior can survive in the compactification. Everything must come from the boundary, and induction on n finishes. The notes follow Getzler's 1995 paper, with a more direct argument for the relations.

## Main definitions

All varieties are complex and cohomology is rational.

**Weight filtration.** For any variety X, H<sup>k</sup>(X) has an increasing filtration W<sub>i</sub> with W<sub>−1</sub> = 0 and W<sub>2k</sub> = H<sup>k</sup>(X). The group is pure of weight r if only the graded piece r is non-zero.
- Smooth X: weights of H<sup>k</sup> lie in [k, 2k].
- Compact X: weights lie in [0, k]. So smooth and compact gives pure of weight k.

**Strata of M̄<sub>0,n</sub>.** The space is stratified by the topological type of the curve, recorded by a dual graph Γ. The open stratum M(Γ) is a product of spaces M<sub>0,n(v)</sub> over the vertices v. Boundary divisors are products M̄<sub>0,j+1</sub> × M̄<sub>0,n−j+1</sub>.

**WDVV relation.** The basic linear relation among boundary classes on M̄<sub>0,4</sub>. This space is a projective line with three boundary points, one for each way to split four marks into two pairs, and the relation says these points have the same class. (The picture of M̄<sub>0,4</sub> is standard background, not spelled out in the pages summarised.)

## Main results

**Theorem (weights and surjectivity; Theorem 2.2, quoted from Deligne's theory).** For a variety X, the Borel–Moore homology H<sub>k</sub>(X) has weights in [−k, 0]. Cycle classes land in the lowest weight. For an open immersion U ⊂ X, and for a proper surjection X → Y, the induced map on the lowest weight part W<sub>−k</sub>H<sub>k</sub> is surjective.
- Case used most: for U open in a smooth proper X, the pure part W<sub>k</sub>H<sup>k</sup>(U) is exactly the image of H<sup>k</sup>(X).
- Lemma 2.3 adds an exact sequence that says which pure classes on X die on U: those pushed forward from a resolution of the complement.

**Theorem (strata span; Theorem 4.1).** H<sup>•</sup>(M̄<sub>0,n</sub>) is spanned by the cycle classes of strata.
- Step 1: M<sub>0,n</sub> is open in ℂ<sup>n−3</sup>, so its only pure cohomology is H<sup>0</sup>. By Lemma 2.3, each class of positive degree on M̄<sub>0,n</sub> is pushed forward from boundary divisors.
- Step 2: the divisors are products of smaller M̄<sub>0,m</sub>. Induct on n.

**Theorem (relations; Theorem 4.3).** All additive relations between strata classes in M̄<sub>0,n</sub> are pullbacks of the WDVV relation on M̄<sub>0,4</sub>.
- Step 1: run the spectral sequence of the filtration by strata dimension. By Arnol'd and Brieskorn, H<sup>k</sup> of a hyperplane complement is pure of weight 2k, so the sequence degenerates after the first differential.
- Step 2: strata classes sit on the diagonal, and H<sup>1</sup> of the open strata surjects onto the relations. By Arnol'd's description, every class in H<sup>1</sup>(M<sub>0,n</sub>) is pulled back from M<sub>0,4</sub>.

## Note, then ignore

- Two meanings of q. The letter is both the size of a finite field and a spectral sequence index. The author notes this and keeps it. Safe to skip on a first reading.
- Tate twists (−k). They shift weights by 2k and keep the bookkeeping honest. Safe to skip.
- Filtration, not grading. Weights give a filtration because they come from a spectral sequence. Remark 2.1 explains it. Safe to skip.
- Hodge types (p, q). The notes mention types such as (k, k) without defining them. Only weights are used. Safe to skip.
- Operads. The last section rephrases the result in the language of operads, after Getzler. Safe to skip at first.
- "Low genus". This first part treats genus 0 only.

## One next step

Open the PDF at Section 4 (page 7) and read Theorem 4.1 with its ten-line proof.
