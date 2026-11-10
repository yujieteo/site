source: https://webusers.imj-prg.fr/~michael.harris/SatoTate/notes/RiemannRoch.pdf
slogan: A Selmer group and its dual differ in size by a sum of local terms, so you can count global classes one prime at a time.
basis: the full text

## Before you start

This note is five pages, but it leans on class field theory on every line. The likely feeling is shame at not knowing Tate duality or Poitou–Tate. That feeling is allowed. The note itself quotes those theorems without proof and sends you to Milne. If you want to see how Wiles counts deformations of Galois representations, this is the counting formula. Enjoy the analogy with curves first. Finishing can wait.

## The story

On a curve, the Riemann–Roch formula computes the size of a space of sections up to an error term, which is the size of a dual space. Choose the divisor well and the error vanishes. Wiles needed the same thing for Galois cohomology. The group he cares about is a Selmer group: classes in H<sup>1</sup> of a number field that satisfy chosen local conditions. It is the cotangent space of a deformation ring, and it is hard to compute directly. The unblocking idea is that class field theory, in the form of the Tate and Poitou–Tate dualities, ties the Selmer group of M to the Selmer group of its dual M<sup>∗</sup>. The difference of their dimensions is a sum of local terms. The Taylor–Wiles method then picks the local conditions so that the dual Selmer group is zero.

## Main definitions

**Setting.** K is a number field, ℓ an odd prime, and M a finite 𝔽<sub>ℓ</sub>-vector space with an action of Γ = Gal(K̄/K). S is a finite set of places containing the archimedean places and those above ℓ. Γ<sub>S</sub> is the Galois group of the maximal extension of K unramified outside S.

**Dual module.** M<sup>∗</sup> = Hom(M, μ<sub>ℓ</sub>), with Γ acting through both M and the roots of unity μ<sub>ℓ</sub>. Tate local duality pairs H<sup>i</sup>(Γ<sub>v</sub>, M) with H<sup>2−i</sup>(Γ<sub>v</sub>, M<sup>∗</sup>) perfectly, for i = 0, 1, 2, at each place v.

**Selmer group.** Choose for each place v a subspace L<sub>v</sub> ⊂ H<sup>1</sup>(Γ<sub>v</sub>, M), equal to the unramified classes H<sup>1</sup>(Γ<sub>v</sub>/I<sub>v</sub>, M<sup>I<sub>v</sub></sup>) for finite v outside S. The Selmer group H<sup>1</sup><sub>𝒮</sub>(K, M) is the set of classes in H<sup>1</sup>(Γ<sub>S</sub>, M) whose restriction at each v ∈ S lies in L<sub>v</sub>.
- Dual conditions: L<sub>v</sub><sup>⊥</sup> is the annihilator of L<sub>v</sub> under Tate's pairing. These define the dual Selmer group H<sup>1</sup><sub>𝒮∗</sub>(K, M<sup>∗</sup>).

**Local term.** For a finite place v, χ<sub>𝒮,v</sub>(M) = dim L<sub>v</sub> − dim H<sup>0</sup>(Γ<sub>v</sub>, M). For an archimedean place it equals −dim H<sup>0</sup>(Γ<sub>v</sub>, M). A lemma shows the term is zero at every finite place outside S.

## Main results

**Theorem (global Euler characteristic formula; Section 2).** Let S contain all places above ℓ and all archimedean places. Put χ<sub>S</sub>(M) = h<sup>0</sup> − h<sup>1</sup> + h<sup>2</sup> for the cohomology of Γ<sub>S</sub> with values in M. Then χ<sub>S</sub>(M) = Σ<sub>v | ∞</sub> dim H<sup>0</sup>(Γ<sub>v</sub>, M) − dim M · [K : ℚ].
- Step 1: reduce by elementary steps to M = μ<sub>ℓ</sub>.
- Step 2: compute that case with S-units and S-ideal classes. The note only sketches this.

**Theorem (nine term exact sequence of Poitou–Tate; Section 3).** With S as above, a nine term exact sequence of finite groups links H<sup>i</sup>(Γ<sub>S</sub>, M), the sums of local groups H<sup>i</sup>(Γ<sub>v</sub>, M) over v ∈ S, and the duals of H<sup>2−i</sup>(Γ<sub>S</sub>, M<sup>∗</sup>). The note quotes it from Milne's book, Theorem 4.10, without proof.

**Theorem (Riemann–Roch formula; Section 4).** With the notation above, h<sup>1</sup><sub>𝒮</sub>(K, M) − h<sup>1</sup><sub>𝒮∗</sub>(K, M<sup>∗</sup>) = h<sup>0</sup>(Γ<sub>K</sub>, M) − h<sup>0</sup>(Γ<sub>K</sub>, M<sup>∗</sup>) + Σ<sub>v</sub> χ<sub>𝒮,v</sub>(M).
- Step 1: take the first six terms of the nine term sequence, replace the local H<sup>1</sup> by L<sub>v</sub>, and splice with the dual of the sequence that defines the dual Selmer group. The alternating sum of dimensions is zero.
- Step 2: use the Euler characteristic formula for M<sup>∗</sup> to turn the leftover global term into the archimedean local terms.

**Claim (the basic numerical coincidence; Section 5).** Let K be totally real. Assume two numerical hypotheses, with an integer n, on dim L<sub>v</sub> at places above ℓ and on dim H<sup>0</sup> at real places. Then the terms above ℓ cancel the main part of the archimedean terms. What remains is the local terms at finite places of S away from ℓ, and a sum of n·(1 + c<sub>v</sub>)/2 over real places with signs c<sub>v</sub> = ±1. The note defers the proof of the hypotheses to later lectures.

## Note, then ignore

- ℓ odd. The note takes exponent ℓ odd so that M is a vector space and the archimedean H<sup>1</sup> vanishes. The general case has a messier statement at 2. Safe to skip on a first reading.
- Not a true Euler characteristic. H<sup>3</sup>(Γ<sub>S</sub>, M) need not vanish, so χ<sub>S</sub> is not additive in short exact sequences unless K is totally imaginary. The archimedean term repairs this. Safe to skip.
- Modified H<sup>0</sup>. The nine term sequence uses a group H<sup>0,+</sup> that is zero at archimedean places. It is bookkeeping for the real places. Safe to skip.
- Extended formula. A variant works over a Galois extension K′/K of degree prime to ℓ. It is there for unitary groups later in the course. Safe to skip.
- A misprint. The last line of the proof in Section 4 writes h<sup>0</sup>(Γ<sub>S</sub>, M) twice. The second one is meant to be M<sup>∗</sup>, as in the statement. Safe to skip.

## One next step

Open the note at page 4 and read only the displayed Riemann–Roch formula and the sentence after it. Then read the last paragraph of Section 5 to see how Taylor–Wiles uses it.
