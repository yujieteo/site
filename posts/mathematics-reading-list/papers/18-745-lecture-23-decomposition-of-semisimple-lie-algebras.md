source: https://math.mit.edu/classes/18.745/Notes/Lecture_23_Notes.pdf
slogan: One vanishing statement, H¹ of a semisimple Lie algebra is zero, splits every finite-dimensional module and every Lie algebra into simple parts.
basis: the full text

## Before you start

These are five pages of scribed lecture notes with typos, and they open by recalling Lecture 22. The likely feeling is a small worry that you missed the earlier lecture and have no right to start here. You can let that worry sit. Everything recalled fits in four bullet points on page 1. The notes give a single reason behind two classical theorems. Read for the pleasure of seeing one trick work twice. The exercises can wait.

## The story

Two facts sit at the base of Lie theory. Weyl: every finite-dimensional representation of a semisimple Lie algebra is a direct sum of irreducible ones. Levi: every finite-dimensional Lie algebra is a semisimple part acting on its solvable radical. Both ask for a complement. A complement is the kernel of a projection that commutes with the action. Pick any projection P₀. Its failure to commute, a ↦ [a, P₀], is a 1-cocycle. If every 1-cocycle is trivial, you can correct P₀ to a projection that does commute. So both theorems reduce to H<sup>1</sup>(𝔤, V) = 0. The Casimir operator proves that. It commutes with 𝔤, so V splits into a part where Casimir is nilpotent and a part where it is invertible.

## Main definitions

**1-cocycle and H<sup>1</sup>.** Let 𝔤 be a Lie algebra and V a 𝔤-module. A 1-cocycle is a linear map f : 𝔤 → V with f([a, b]) = a f(b) − b f(a). For v ∈ V the map f<sub>v</sub>(a) = av is a trivial 1-cocycle. H<sup>1</sup>(𝔤, V) is the space of 1-cocycles modulo the trivial ones.

**Casimir operator.** Let 𝔤 have a non-degenerate invariant bilinear form, with dual bases a<sub>j</sub> and b<sub>j</sub>. The Casimir operator is Ω = Σ a<sub>j</sub> b<sub>j</sub>, acting on any 𝔤-module.
- Key property (Corollary 23.2): Ω commutes with the action of 𝔤 on every module.

**Radical and Levi factor.** The radical R(𝔤) is the largest solvable ideal of 𝔤. A Levi factor is a subalgebra 𝔰 with 𝔤 = 𝔰 ⊕ R(𝔤) as vector spaces. Then 𝔰 is semisimple and 𝔤 is the semidirect product of 𝔰 and R(𝔤).

## Main results

Throughout, 𝔤 is finite-dimensional over a field F of characteristic 0. For the vanishing theorem the notes also take 𝔤 semisimple and F algebraically closed.

**Theorem (vanishing; Theorem 23.3).** If 𝔤 is semisimple and V is a finite-dimensional 𝔤-module, then H<sup>1</sup>(𝔤, V) = 0.
- Step 1: on the part V′ where Ω is invertible, set m = Σ a<sub>j</sub> f(b<sub>j</sub>). Lemma 23.1 gives am = Ω f(a), so f = f<sub>v</sub> with v = Ω<sup>−1</sup>m.
- Step 2: on the part V₀ where Ω is nilpotent, pass to the quotient of 𝔤 that acts faithfully and use the trace form of V₀. Then trace(Ω) equals the dimension of that quotient and also equals 0. So the quotient is zero and every cocycle vanishes.

**Theorem (Weyl complete reducibility; Theorem 23.4).** If 𝔤 is semisimple and V is a finite-dimensional 𝔤-module, every submodule U has a complementary submodule U′ with V = U ⊕ U′. So V is a direct sum of irreducible modules.
- Step 1: let 𝔤 act on End V by commutator. For a projection P₀ onto U, the cocycle a ↦ [π(a), P₀] takes values in the submodule M of maps that send V into U and kill U.
- Step 2: vanishing gives A ∈ M with P₀ − A commuting with 𝔤. Its kernel is U′.

**Theorem (Levi; Theorem 23.5).** Every finite-dimensional Lie algebra 𝔤 over a field of characteristic 0 contains a subalgebra 𝔰 complementary to R(𝔤), and 𝔤 is the semidirect product of 𝔰 and R(𝔤).
- Case R(𝔤) not abelian: divide by [R(𝔤), R(𝔤)] and use induction on the dimension.
- Case R(𝔤) abelian: repeat the projection argument with End 𝔤, for a projection of 𝔤 onto R(𝔤).

**Theorem (Mal'cev; Theorem 23.6).** Any two Levi factors of 𝔤 are conjugate by an automorphism of 𝔤. The notes state this without proof.

## Note, then ignore

- Algebraically closed field. The notes assume it at the start, then Remark 23.1 says the splitting V = V₀ ⊕ V′ needs no such assumption. Safe to skip on a first reading.
- Spelling. "Casamir" is the Casimir operator, and there are several missing brackets in the proofs. Safe to skip.
- The quotient M in Levi's theorem. In the abelian case the module is a quotient of a space of endomorphisms by the image of the radical, so that the radical acts trivially and the semisimple quotient acts. This is bookkeeping. Safe to skip.
- Two "Case 1" labels. The proof of Levi's theorem nests a second case split, on whether the corrected projection commutes with ad 𝔤, inside the abelian case. Safe to skip.
- The open question. Remark 23.1 asks whether vanishing of H<sup>1</sup> forces 𝔤 to be semisimple and leaves it unanswered. Safe to skip.

## One next step

Open the notes at page 3 and read the proof of Theorem 23.4 only, from "Consider the space End V" to "U and U′ are our complementary submodules".
