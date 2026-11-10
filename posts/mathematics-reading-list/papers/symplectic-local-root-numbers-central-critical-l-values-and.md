source: https://arxiv.org/pdf/0909.2999
slogan: Signs of root numbers predict which representation of a classical group restricts to a smaller one, and central L-values predict when periods are non-zero.
basis: the introduction and the main theorem statements

## Before you start

This paper is 112 pages and most of it is conjecture. The likely feeling is overwhelm: four families of groups, two kinds of model, and a long list of sign conventions. You may feel that. Nobody holds all the cases in mind at once. The core is one clean prediction about branching, such as restricting from SO<sub>n</sub> to SO<sub>n−1</sub>. If branching laws appeal to you, enjoy the statement first. The cases can come later, or never.

## The story

Restrict an irreducible representation of SO<sub>n</sub> over a local field to SO<sub>n−1</sub>. Which representations of the small group appear as quotients? Gross and Prasad guessed an answer about twenty years earlier. Here the three authors extend the guess to all classical groups: orthogonal, symplectic, hermitian and skew-hermitian. The obstacle is that a single group gives no clean answer. The idea is to look at a whole Vogan L-packet, which collects representations of all pure inner forms that share a Langlands parameter. Inside each generic packet exactly one representation should have the wanted quotient. A character of a finite group picks it out, and that character is computed from signs of symplectic root numbers. Globally, the matching period integral should be non-zero exactly when a central L-value is non-zero.

## Main definitions

**Classical group G(V).** k is a local field with an involution σ, possibly trivial, and fixed field k<sub>0</sub>. V is a k-vector space with a non-degenerate sesquilinear form of sign ε = ±1. G(V) is the identity component of the group preserving the form.
- σ trivial: orthogonal (ε = 1) or symplectic (ε = −1).
- σ non-trivial: unitary, with hermitian and skew-hermitian V kept apart.

**The pair (H, ν).** Take a non-degenerate subspace W ⊂ V with W<sup>⊥</sup> split, of odd dimension when ε = 1 and even dimension when ε = −1. Put G = G(V) × G(W) and H = N ⋊ G(W), with N a unipotent subgroup of G(V). ν is a fixed unitary representation of H.
- Bessel case (orthogonal, hermitian): ν is one-dimensional.
- Fourier–Jacobi case (symplectic, skew-hermitian): ν comes from a Weil representation and needs an additive character ψ.

**The multiplicity d(π).** For an irreducible representation π of G, d(π) = dim Hom<sub>H</sub>(π ⊗ ν, ℂ).

**Vogan L-packet and distinguished character.** A Vogan packet Π<sub>φ</sub> is the set of representations with parameter φ on G and all its pure inner forms. Its members should be indexed by characters of the component group A<sub>φ</sub>. For φ given by a pair of representations (M, N) of the Weil–Deligne group, the character χ takes the value ε(M<sup>a</sup> ⊗ N, ψ) on a, where M<sup>a</sup> is the −1 eigenspace of a on M, and likewise with M and N exchanged.

## Main results

**Theorem (multiplicity one; Theorem 14.1 and Corollaries 15.2, 16.2, 16.3).** When dim W<sup>⊥</sup> is 0 or 1, d(π) ≤ 1 in the orthogonal and hermitian cases, and over non-archimedean k in the symplectic case. The skew-hermitian case needs an extra supercuspidality hypothesis. These basic cases are due to Aizenbud, Gourevitch, Rallis, Schiffmann, Sun and Zhu. The paper extends the bound to general W over non-archimedean fields "in almost all cases".
- Step: Theorems 15.1 and 16.1 reduce Bessel and Fourier–Jacobi models to the basic cases.

**Conjecture (local; Conjectures 17.1 and 17.3).** In each generic Vogan packet Π<sub>φ</sub> there is exactly one representation π, on a relevant pure inner form, with d(π) = 1. Every other member has d(π) = 0. The unique π is the one indexed by the distinguished character χ.
- Known case (Theorem 17.2): k = k<sub>0</sub> × k<sub>0</sub>, where G is GL(n) × GL(m) and packets are singletons, by Rankin–Selberg theory.
- Reduction (Theorem 19.1): for non-archimedean k, the conjectures follow from the cases dim W<sup>⊥</sup> = 0 or 1.

**Conjecture (global; Conjecture 24.1).** Let π be an irreducible tempered cuspidal representation of G(𝔸) of multiplicity one. The period integral over H(F)\\H(𝔸) against ν is non-zero on π if and only if Hom<sub>H(F<sub>v</sub>)</sub>(π<sub>v</sub>, ν<sub>v</sub>) is non-zero at every place v and L(π, R, 1/2) ≠ 0. Here R is a fixed symplectic representation of the L-group.

**Theorem (parameters; Theorem 8.1).** A Langlands parameter of a classical group is a representation of the Weil–Deligne group of k of fixed dimension with a duality condition: selfdual of a given sign, or conjugate-dual of a given sign for unitary groups.

## Note, then ignore

- The additive character ψ. It enters the parametrisation, the character χ and ν, in different combinations for each family. Section 18 checks that the dependence cancels. Safe to skip on a first reading.
- The metaplectic group. Symplectic cases need the double cover of Sp(W). Theorem 11.1 classifies its representations through odd orthogonal groups. Safe to skip.
- The character μ. Skew-hermitian cases need one more choice to define ν. Safe to skip.
- "Relevant" inner forms. Only pairs (V′, W′) with W′ ⊂ V′ of the right shape count. It is bookkeeping. Safe to skip.
- Later progress. The paper is from 2009 and calls its conjectures open. Much has been proved since, so do not read "conjecture" here as the present state. Safe to skip for the story.

## One next step

Open the PDF at page 2 and read the paragraph of the introduction that defines d(π), then the paragraph that ends by citing Conjectures 17.1 and 17.3.
