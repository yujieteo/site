source: https://arxiv.org/pdf/1512.06410
slogan: A period becomes an algebraic symbol with a Galois group acting on it, so linear algebra can prove that numbers are independent.
basis: the abstract and introduction

## Before you start

These notes run to 66 pages and open with Tannakian categories, Hopf algebras and coactions. That can raise shame at not knowing the background. The feeling is allowed. Brown himself calls Section 2 one of the most technical parts and says to consult it only when needed. If you have ever wanted to know why π and ζ(3) are expected to be unrelated, the machinery starts here. Read for the examples you enjoy. Finishing can wait.

## The story

A period is a number such as π or ζ(3), written as the integral of an algebraic form over an algebraic domain. People want a Galois theory for such numbers. But a number keeps no memory of the integral that made it, so relations between periods are hard to prove or exclude. Brown keeps the memory. He replaces the number by a symbol: a piece of cohomology M, a cycle class σ and a form class ω. These symbols span a ring with a period map to ℂ, and a group acts on the ring. Linear algebra then gives invariants such as weight and rank, and cuts any symbol into primitive pieces. One payoff: the symbols for 2πi and for log p, p prime, are algebraically independent over ℚ.

## Main definitions

**The category H.** An object is a triple (V<sub>B</sub>, V<sub>dR</sub>, c). Here V<sub>B</sub> and V<sub>dR</sub> are finite-dimensional ℚ-vector spaces and c : V<sub>dR</sub> ⊗ ℂ → V<sub>B</sub> ⊗ ℂ is an isomorphism. The spaces carry weight and Hodge filtrations that form a graded-polarisable mixed Hodge structure, and V<sub>B</sub> carries a real Frobenius involution.
- Example: the Tate object ℚ(n) is (ℚ, ℚ, c) with c(1) = (2πi)<sup>−n</sup>. It has weight −2n.
- Deligne proved that H is a Tannakian category, with fibre functors ω<sub>B</sub> and ω<sub>dR</sub>.

**H-period.** A symbol [M, σ, ω] with M in H, σ in the dual of M<sub>B</sub> and ω in M<sub>dR</sub>. Symbols are linear in σ and in ω, and a morphism M → M′ identifies the symbols it matches up. They form a ring P<sup>m</sup><sub>H</sub>. The period map sends [M, σ, ω] to σ(c(ω)) ∈ ℂ.
- A period is called motivic when M comes from the cohomology of an algebraic variety.

**Galois action.** The group G<sup>dR</sup> of tensor automorphisms of ω<sub>dR</sub> acts on P<sup>m</sup><sub>H</sub> by g[M, σ, ω] = [M, σ, gω]. It is an extension of a group S, attached to the semi-simple objects, by a pro-unipotent group U.

**Coradical filtration.** The increasing filtration C on P<sup>m</sup><sub>H</sub> that grows as fast as possible while U acts trivially on each graded piece. C<sub>0</sub> is the U-invariants. The index measures how unipotent a period is.

## Main results

**Theorem (Tannaka; Theorems 2.1 and 2.3).** A fibre functor ω on a Tannakian category T gives an equivalence between T and the representations of the group of tensor automorphisms of ω. Brown quotes this from Saavedra and Deligne. Everything else rests on it.

**Lemma (minimal object; Lemma 2.4 and Corollary 2.5).** Every period ξ is a matrix coefficient of a smallest object M(ξ), unique up to isomorphism. The de Rham realisation of M(ξ) is the representation of G<sup>dR</sup> that ξ generates.
- Step 1: shrink M to the smallest subobject that still contains ω.
- Step 2: pass to the smallest quotient on which σ is still defined.

**Theorem (decomposition into primitives; Theorem 6.3).** The map Φ : gr<sup>C</sup> P<sup>m</sup><sub>H</sub> → P<sup>m</sup><sub>H<sup>ss</sup></sub> ⊗ T<sup>c</sup>(gr<sup>C</sup><sub>1</sub> O(U)) is an isomorphism of S-modules. The first factor is the ring of semi-simple periods. The second is the tensor coalgebra on the primitive elements of O(U), with the shuffle product.
- Step 1: Φ is injective by construction. It iterates a map δ that peels off one primitive at a time.
- Step 2: U has cohomological dimension 1, and this gives surjectivity (Corollary 2.13).

**Theorem (mixed Tate periods over ℚ; Theorem 6.9).** For effective periods of mixed Tate motives over ℚ, Φ gives an isomorphism from gr<sup>C</sup> onto ℚ[L<sup>m</sup>] ⊗ ℚ⟨ν<sub>p</sub>, f<sub>3</sub>, f<sub>5</sub>, f<sub>7</sub>, …⟩. Here L<sup>m</sup> is the symbol for 2πi, ν<sub>p</sub> stands for log p and f<sub>2n+1</sub> stands for ζ(2n+1).
- Example: Φ(ζ<sup>m</sup>(3, 5)) = −5 ⊗ (f<sub>5</sub> ⊗ f<sub>3</sub>).
- Consequence: such periods behave like formal words in odd zeta values and logarithms of primes.

## Note, then ignore

- Two Galois groups. There is one for each fibre functor, Betti and de Rham, and they act on opposite sides. The notes mostly use the de Rham one. Safe to skip on a first reading.
- H is not a category of motives. Brown works in H because it is unconditional, and every reasonable category of mixed motives maps to it. Safe to skip.
- The period conjecture. Grothendieck's conjecture says that the period map is injective. Nothing here proves it or needs it. Safe to skip.
- The rings B<sub>1</sub>, B<sub>2</sub>, k in Section 2.3. They are there for families of periods. For periods over ℚ, set all three equal to ℚ and move on.
- Order of the fibre functors. Brown's earlier papers write the pair the other way round and put the coaction on the left. The rings are the same. Safe to skip.

## One next step

Open the paper at page 3 and read only Example 1.1, the four displayed values of Φ on motivic zeta values.
