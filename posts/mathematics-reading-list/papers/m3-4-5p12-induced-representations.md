source: https://rmbellovin.github.io/teaching/induced.pdf
slogan: A representation of a subgroup H becomes one of G as H-equivariant functions on G, which gives induction without tensor products.
basis: the full text

## Before you start

This is a seven-page course handout on finite groups. Nothing in it is hard to reach, so the feeling to expect is closer to impatience: you may think you know this already and want to skim. That is fine, and it may even be true. What the handout offers is one concrete model of induction that you can compute with by hand, and the same model returns later for Lie groups and p-adic groups. Enjoy the dihedral example first. Reading to the end matters less.

## The story

Restricting a representation from a group G to a subgroup H is easy. Going the other way is the useful direction, because it builds representations of G from smaller ones. The textbook construction is a tensor product over the non-commutative ring ℂ[H], which a first course may not have. The handout avoids it. It defines the induced representation as the space of functions f : G → V with f(hg) = ρ<sub>V</sub>(h)f(g), with G acting by right translation. Such a function is fixed by its values on coset representatives, so the space breaks into one copy of V for each coset, and G permutes the copies. From this picture the dimension, the character formula, Frobenius reciprocity and an irreducibility test all follow by short arguments. For the dihedral group and its rotation subgroup the result is an explicit pair of 2 × 2 matrices.

## Main definitions

**Induced representation.** Let H ⊂ G be finite groups and (V, ρ<sub>V</sub>) a representation of H. Then Ind V is the space of functions f : G → V with f(hg) = ρ<sub>V</sub>(h)f(g) for all h ∈ H and g ∈ G. The group G acts by (g·f)(g′) = f(g′g) (Definition 1.1).
- Module form: Ind M ≅ Hom<sub>ℂ[H]</sub>(ℂ[G], M) as ℂ[G]-modules, with (a·f)(b) = f(ba) (Lemma 1.13).

**The pieces V<sub>g</sub>.** For g ∈ G, V<sub>g</sub> is the subspace of Ind V of functions supported on the coset Hg. Evaluation at the identity gives an H-linear isomorphism V<sub>e</sub> → V (Lemma 1.6).
- Translation: the action of g carries V<sub>g′</sub> isomorphically onto V<sub>g′g<sup>-1</sup></sub> (Lemma 1.7).

## Main results

**Theorem (structure and dimension; Corollary 1.9).** Choose representatives g<sub>1</sub>, …, g<sub>s</sub> of the cosets Hg. Then Ind V is the direct sum of the V<sub>g<sub>i</sub></sub>, each isomorphic to V as a vector space. So dim Ind V = [G : H] dim V.

**Theorem (character formula; Proposition 2.1 and Corollary 2.2).** The character of Ind V at g is the sum of χ<sub>V</sub>(g<sub>i</sub>gg<sub>i</sub><sup>-1</sup>) over those i with g<sub>i</sub>gg<sub>i</sub><sup>-1</sup> ∈ H. Equivalently it is 1/|H| times the sum of χ<sub>V</sub>(g′gg′<sup>-1</sup>) over all g′ ∈ G with g′gg′<sup>-1</sup> ∈ H.
- Step 1: g permutes the pieces V<sub>g<sub>i</sub></sub>, so only the pieces it fixes contribute to the trace.
- Step 2: on a fixed piece, transport to V<sub>e</sub> ≅ V shows that g acts as g<sub>i</sub>gg<sub>i</sub><sup>-1</sup> acts on V.

**Theorem (Frobenius reciprocity; Theorem 3.1).** For a representation V of H and a representation W of G, the G-linear maps W → Ind V correspond to the H-linear maps Res W → V.
- Step 1: send φ to w ↦ φ(w)(e), using evaluation at the identity.
- Step 2: send ψ back to w ↦ (g ↦ ψ(ρ<sub>W</sub>(g)w)).

**Theorem (irreducibility test; Proposition 3.7).** Let H be normal in G and V an irreducible representation of H. Then Ind V is irreducible if and only if none of the twisted representations h ↦ ρ<sub>V</sub>(g<sub>i</sub>hg<sub>i</sub><sup>-1</sup>), for Hg<sub>i</sub> ≠ H, is isomorphic to V.
- Step 1: by reciprocity, the inner product of the character of Ind V with itself equals the multiplicity of V in Res Ind V.
- Step 2: for H normal, Res Ind V is the direct sum of these twists (Proposition 3.5), so the multiplicity is 1 exactly when no non-trivial twist is V.

## Note, then ignore

- Tensor products (Remark 1.14). The function model is the same as a tensor product over ℂ[H], with the dual of ℂ[G] as a right ℂ[H]-module. The handout mentions this only for readers who know such tensor products. Safe to skip.
- Which side Ind sits on (Remark 3.2). Reciprocity is usually stated with Ind V on the left of Hom. The handout puts it on the right and says the two versions agree because the groups are finite. Safe to skip on a first reading.
- Right cosets. The handout uses cosets Hg and right translation. Many books use gH, and the formulas change by inverses. Safe to skip.
- Corollary 3.8. As printed it says that inducing the trivial representation gives copies of the trivial representation "of G". The proof shows only that H acts trivially on each piece, for H normal. Safe to skip.
- Small typos. The proof of Lemma 1.2 writes g = g<sub>i</sub>h where hg<sub>i</sub> is meant, and Corollary 3.4 calls W a representation of H where G is meant. Safe to skip.

## One next step

Open the handout at Example 1.11 on page 3 and check the two matrices for the dihedral group by applying s and t to a function supported on one coset.
