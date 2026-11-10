source: https://adebray.github.io/lecture_notes/s17_geometric_Langlands.pdf
slogan: For GL<sub>1</sub>, geometric Langlands is a Fourier transform between sheaves on a group and sheaves on its dual, so you can see every step.
basis: the introduction and the main theorem statements

## Before you start

These are 29 pages of live-typed notes from eight seminar talks by David Ben-Zvi. They start in the middle of a year-long seminar and refer back to talks you did not hear. The feeling this raises is the unease of walking in late, with a suspicion that everyone else knows the context. You can let that unease be there. It does not need fixing. If you want one case of the Langlands correspondence that you can hold whole, the abelian case is here. Enjoy lecture 1 on its own. The rest is optional.

## The story

The Fourier transform turns functions on a locally compact abelian group into functions on its Pontrjagin dual, and swaps multiplication with convolution. The seminar asks for the same thing one level up, with sheaves in place of functions. The algebraic stand-in for the dual is the Cartier dual, the group of characters G → 𝔾<sub>m</sub>. A tautological line bundle on G × G<sup>∨</sup> plays the role of the exponential e<sup>xt</sup>, and pull, tensor, push along it gives a transform of sheaves. Apply this to the Picard variety of a curve, which is dual to itself. A skyscraper sheaf on one side becomes a line bundle on the other, and that line bundle is an eigensheaf for translation. This is geometric class field theory, which is geometric Langlands for GL<sub>1</sub>. The last lecture deforms the picture to get the quantum version.

## Main definitions

**Cartier dual.** For an abelian algebraic group G, the dual is the group of homomorphisms G → 𝔾<sub>m</sub>. In the sheaf version (lecture 2), G<sup>∨</sup> is the space of multiplicative line bundles on G, which is Hom(G, B𝔾<sub>m</sub>).
- Examples from the notes: ℤ/n ↔ μ<sub>n</sub>, 𝔾<sub>m</sub> ↔ ℤ (or Bℤ in the sheaf version), a vector space ↔ the formal completion of the dual vector space at 0.

**Multiplicative line bundle.** A line bundle L on an abelian group G with a coherent isomorphism L<sub>x</sub> ⊗ L<sub>y</sub> ≅ L<sub>x+y</sub>. The isomorphism is extra data. It is not a property.

**Kernel transform.** Given a sheaf K on X × Y, send a sheaf F on X to the pushforward to Y of K ⊗ (pullback of F). With the tautological line bundle P on G × G<sup>∨</sup> as kernel, this is the Fourier-Mukai transform.

**Hecke eigensheaf (rank one).** A sheaf F on Pic X whose translate by each point z of X is L<sub>z</sub> ⊗ F, for a fixed line bundle or local system L on X. It is equivariance against a character.

## Main results

**Theorem (Laumon-Fourier-Mukai; Theorem 2.1).** The kernel transform given by P is an equivalence that exchanges tensor product with convolution "in many situations". The notes do not state exact hypotheses. They give examples in place of them. I state no more than that.
- Example: Pic of a curve is dual to itself, and the Jacobian is a self-dual abelian variety.

**Theorem (geometric class field theory, three forms; lecture 6, unnumbered).** For a smooth projective complex curve X there are equivalences:
- Betti: QC(Loc<sub>GL<sub>1</sub></sub> X) ≅ Loc(Pic X), an equivalence of abelian categories. de Rham: QC(Conn<sub>GL<sub>1</sub></sub> X) ≅ D-modules on Pic X.
- Dolbeault: a non-identity self-equivalence of the derived category of the moduli space of rank-one Higgs bundles, Higgs<sub>GL<sub>1</sub></sub> X = T\*Pic X.

**Theorem (quantum de Rham version; Theorem 8.1).** Let Θ be the determinant line bundle on Pic C. Modules over differential operators twisted by Θ<sup>k</sup> are equivalent to modules over differential operators twisted by Θ<sup>−1/k</sup>.

**Theorem (one family; Theorem 8.2).** There is a flat family of categories over the plane with coordinates (ε<sub>1</sub>, ε<sub>2</sub>), and a Fourier self-equivalence sending ε<sub>1</sub> ↦ ε<sub>2</sub> and ε<sub>2</sub> ↦ −ε<sub>1</sub>.
- At the origin it gives the Dolbeault form. On the axes it gives the de Rham form.
- Off the axes, with k = ε<sub>2</sub>/ε<sub>1</sub>, it gives the quantum form.

## Note, then ignore

- Completion versus dual. In lecture 1 a hat means Cartier dual on groups and formal completion on 𝔾<sub>a</sub>. The notes flag the clash. Safe to skip on a first reading.
- Characteristic. μ<sub>n</sub> and ℤ/n agree over ℂ but not when the characteristic divides n. The notes choose not to worry about it. Safe to skip.
- Stacky factors. Pic X ≅ Jac X × ℤ × pt/𝔾<sub>m</sub>, and duality swaps the last two factors. The notes often drop them. Safe to skip.
- Lectures 3 to 5. These cover 3D field theories, Rozansky-Witten theory and categorical representations, including a theorem of Ben-Zvi, Gunningham and Nadler (Theorem 5.6). The class field theory lectures do not depend on them. Safe to skip.
- Derived or not. The Betti equivalence holds for abelian categories. The others need derived categories. Safe to skip.

## One next step

Open the PDF at page 1 and read lecture 1 up to Example 1.1, which is about one page: the Fourier dictionary and the definition of the Cartier dual.
