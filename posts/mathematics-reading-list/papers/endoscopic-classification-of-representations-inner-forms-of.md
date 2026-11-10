source: https://arxiv.org/pdf/1409.3731
slogan: Representations of every unitary group, quasi-split or not, sort into packets labelled by representations of general linear groups, once the inner twist is rigidified.
basis: the introduction and the main theorem statements

## Before you start

This is more than 200 pages, the first of three planned papers, and it rests on books by Arthur and Mok that are longer still. The likely feeling is overwhelm, with some shame at how much background is assumed. Both are reasonable, and the authors themselves take Mok's main theorems on faith. If you want to know what a pure inner form is and why people care, Chapter 0 answers that with examples. Read that part for interest. Nothing requires you to follow the long induction.

## The story

Arthur classified automorphic representations of quasi-split symplectic and orthogonal groups by comparing trace formulas with GL<sub>N</sub>. Mok did the same for quasi-split unitary groups. Most unitary groups are not quasi-split. U(p, q) over ℝ with p and q far apart is an example. For these, a basic tool breaks. To label the members of a packet you need normalised transfer factors, and without a Whittaker datum on the group there is no natural normalisation. The idea that unblocks this is to remember more than the group. One fixes an inner twist from the quasi-split form together with a cocycle that rigidifies it, called an extended pure inner twist, built on Kottwitz's isocrystals. With that datum the packets get canonical labels, and the classification goes through for tempered parameters.

## Main definitions

**Inner twist.** A pair (G, ξ), where ξ : G\* → G is an isomorphism over the algebraic closure of F, from the quasi-split group G\* = U<sub>E/F</sub>(N), such that ξ<sup>−1</sup>σ(ξ) is an inner automorphism for every Galois element σ.
- Classes of inner twists: elements of H<sup>1</sup>(F, G\*<sub>ad</sub>).

**Pure inner twist.** A pair (ξ, z), where z is a 1-cocycle with values in G\* itself and ξ<sup>−1</sup>σ(ξ) = Ad(z<sub>σ</sub>). Classes correspond to H<sup>1</sup>(F, G\*).
- For unitary groups: the inner forms that arise this way are exactly those built from Hermitian spaces over the field E, not over a division algebra.
- Over ℝ: H<sup>1</sup> is the set of signatures (p, q) with p + q = N, and (p, q) and (q, p) give the same inner twist.

**Extended pure inner twist.** The same, with z a cocycle in Kottwitz's set of isocrystals with G\*-structure. Because a quasi-split unitary group has connected centre, every inner twist can be rigidified this way.

**Packet and pairing.** For a parameter ψ of G\*, a finite set Π<sub>ψ</sub>(G, ξ) of unitary representations of G(F), with a map π ↦ ⟨π, −⟩ to characters of a centraliser group S<sub>ψ</sub><sup>♮</sup> that restrict to a fixed character χ<sub>z</sub> determined by z.

## Main results

**Theorem (local classification; Theorem\* 1.6.1).** Let F be a local field of characteristic zero and (G, ξ, z) an extended pure inner twist of U<sub>E/F</sub>(N). For tempered ψ the packet Π<sub>ψ</sub>(G, ξ) consists of tempered representations and is empty exactly when ψ is not relevant for (G, ξ). For non-archimedean F the map from the packet to the characters of S<sub>ψ</sub><sup>♮</sup> extending χ<sub>z</sub> is a bijection. The packets for tempered ψ are disjoint and exhaust the tempered representations of G(F). They satisfy the endoscopic character identities. The star means the paper proves this only for tempered (generic) ψ and defers the rest to the sequels.
- Step 1: globalise the local group and parameter, allowing one auxiliary non-quasi-split place, and compare trace formulas.
- Step 2: prove the local intertwining relation (Theorem 2.6.2) by reduction to explicit cases on the real group U(3, 1).

**Theorem (global classification; Theorem\* 1.7.1).** Let E/F be a quadratic extension of global fields and (G, ξ) an inner twist of U<sub>E/F</sub>(N). Then the discrete spectrum L<sup>2</sup><sub>disc</sub>(G(F)\G(𝔸<sub>F</sub>)) is the direct sum, over discrete global parameters ψ, of the π in the global packet whose character ⟨·, π⟩ equals Arthur's sign character ε<sub>ψ</sub>. In this paper the proof is complete only for generic ψ on pure inner twists.

**Theorem (GL<sub>N</sub>; Theorem 1.6.4).** The corresponding local statement for inner twists of general linear groups, which are groups GL<sub>M</sub> over division algebras, is established in the paper. I did not read its statement in detail.

## Note, then ignore

- Starred statements. A star marks a result proved only in part here and finished in two sequels. This tells you the logical status. Safe to skip on a first reading.
- Conditionality. The paper imports Mok's theorems, which depended at the time on the stabilisation of the twisted trace formula, and on the weighted fundamental lemma in general. Safe to skip.
- Dependence on z. Changing the cocycle z twists the pairing by an explicit character and leaves the packet unchanged. Safe to skip.
- Archimedean case. Over ℝ the bijection with characters holds only after taking a union over several pure inner twists. Safe to skip.
- Ramanujan caveat. A generic global parameter need not give everywhere tempered representations, because Ramanujan for GL<sub>N</sub> is open. Safe to skip.

## One next step

Open the paper at Section 0.3.3 and read the paragraph that lists H<sup>1</sup> for unitary groups over a real field as the set of pairs (p, q).
