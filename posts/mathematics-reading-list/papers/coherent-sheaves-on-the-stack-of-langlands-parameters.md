source: https://arxiv.org/pdf/2008.02998
slogan: Langlands parameters form a geometric stack, and coherent sheaves on it should encode representations, so number theory can borrow tools from geometry.
basis: the introduction and the main theorem statements

## Before you start

Eighty-plus pages, derived algebraic geometry from page 3, and most of the headline statements are conjectures. The likely feeling is overwhelm, mixed with doubt about what is proved. That is a fair reaction, and you need not fix it before reading. If you want a map of where the Langlands programme is heading, the two-page introduction is that map. Enjoy the outline first. The proofs in Sections 2 and 3 can wait as long as you like.

## The story

The local Langlands correspondence matches representations of a p-adic group G(F) with Galois-type data called Langlands parameters. Classically this is a matching of sets. Work of Emerton, Helm, V. Lafforgue, Genestier and others suggested more: the parameters should be points of a geometric space, and each representation should give a sheaf on it. To say this precisely one first needs the space. Galois groups are profinite, and the equations for homomorphisms are not a regular sequence, so a naive moduli space is badly behaved. Zhu builds the stack of parameters with care, using derived geometry and a discrete model of the tame Galois group. He then states conjectures: Hecke algebras are endomorphism algebras of explicit coherent sheaves, and the whole category of representations embeds in coherent sheaves.

## Main definitions

**Derived representation space (Definition 2.8).** For a group Γ and an affine group scheme M over a ring Λ, R<sub>Γ,M</sub> sends an animated Λ-algebra A to the space of homomorphisms Γ → M(A). It is a derived affine scheme, a limit of copies of M<sup>I</sup> over free groups mapping to Γ.
- For Γ free on a finite set I, it is just M<sup>I</sup> with no derived structure.

**Stack of local Langlands parameters.** Let F be a non-archimedean local field with residue characteristic p. The framed space Loc<sup>□</sup> parametrises suitable homomorphisms from a discrete form of the Weil group of F to the C-group <sup>c</sup>G, with a fixed composite to the multiplier. The stack is the quotient Loc = Loc<sup>□</sup>/Ĝ, defined over ℤ[1/p].
- The construction uses a choice ι of two generators τ, σ of the tame quotient. Different choices give canonically isomorphic stacks (Proposition 3.12).

**Coherent Springer sheaf.** The derived pushforward of the structure sheaf along Loc<sub><sup>c</sup>B</sub> → Loc<sub><sup>c</sup>G</sub>, in a tame or a unipotent version. It is a complex of coherent sheaves on the tame part of the stack. The name follows Ben-Zvi.

## Main results

**Theorem (geometry of the local stack; Proposition 3.7).** The framed space of local parameters is a disjoint union of classical affine schemes of finite type, flat over ℤ[1/p], equidimensional of dimension dim Ĝ, and a local complete intersection with trivial dualising complex.
- Step 1: Write the Galois quotient as a finite p-group extended by the two-generator group, and apply a general result on representation spaces (Proposition 2.35).

**Theorem (global stack; Theorem 3.29).** For a global function field, a finite set S of places and ℓ > 2, the stack of global parameters unramified outside S is a quasi-smooth algebraic stack over ℤ<sub>ℓ</sub>. It is a disjoint union of open and closed pieces indexed by closed points Θ of a coarse quotient of a representation space.

**Conjecture (categorical local Langlands; Conjecture 4.37).** For G quasi-split with a pinning, there is an equivalence from a category Shv(B(G), Λ) of sheaves attached to the Kottwitz set B(G) to ind-coherent sheaves on Loc with a nilpotent singular support condition. It sends the Whittaker object to the structure sheaf.

**Conjecture and theorem (Hecke algebras; Conjecture 4.19, Theorem 4.21).** Conjecturally the Iwahori Hecke algebra is the opposite endomorphism algebra of the unipotent coherent Springer sheaf, so Hecke modules embed fully faithfully in ind-coherent sheaves. With ℓ-adic coefficients in characteristic zero and for unramified pinned G, Zhu states this as a theorem, with proof deferred to work with Hemo. Ben-Zvi, Chen, Helm and Nadler proved the isomorphism for split G.
- Case K hyperspecial: a derived Satake isomorphism, Conjecture 4.11, which holds in the setting of Theorem 4.21.

## Note, then ignore

- C-group versus L-group. Zhu uses <sup>c</sup>G, a variant of the L-group that avoids choosing a square root of q. It is there for canonical normalisations. Safe to skip on a first reading.
- Derived structure. The spaces are defined as derived schemes, but the local one turns out to be classical. Skip the derived language until Section 4.
- The choice of ι. It is needed to work over ℤ[1/p] and does not affect the stack up to canonical isomorphism. Skip it.
- ℓ ≠ p only. The local stack is built for coefficients away from p. A footnote points to similar sheaves in the p-adic programme, which this article does not treat. Skip it.
- Relation to Fargues and Scholze. Their category on Bun<sub>G</sub> should match Zhu's sheaves on B(G), with the partial order reversed (Remark 4.35). Note it and move on.

## One next step

Open the paper and read only the abstract and the first two paragraphs of Section 1, then look at the statement of Conjecture 4.37.
