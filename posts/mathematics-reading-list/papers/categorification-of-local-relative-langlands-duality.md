source: https://arxiv.org/pdf/2601.02258
slogan: Periods and L-functions of a p-adic group become two sheaves, and in two classical cases a conjectural Langlands equivalence matches them.
basis: the abstract and introduction

## Before you start

This paper stands on two tall stacks at once: Fargues–Scholze geometrisation and the Ben-Zvi–Sakellaridis–Venkatesh duality programme. The likely feeling is shame at not knowing either. You are allowed to feel that. Most readers know at most one of them. If you want to see Tate's thesis, which you may already like, restated as an equality of two sheaves, that is here. Read for that one pleasure first. Whether you finish matters less.

## The story

Number theorists have long seen that period integrals of automorphic forms give special values of L-functions. Locally, the same link shows up as a question: which representations π of G(F) admit a nonzero map from functions on a G-space X? Ben-Zvi, Sakellaridis and Venkatesh proposed that both facts come from one duality, which pairs a G-space X with a space X̂ for the dual group. The block for p-adic fields was the lack of a geometric home. This paper uses the Fargues–Scholze setting. On the automorphic side it builds a period sheaf on Bun<sub>G</sub> that contains the Schwartz space of X(F). On the spectral side it builds an L-sheaf on the stack of L-parameters. The conjecture says the categorical Langlands equivalence carries one to the other. The authors check it for Tate's case and for Hecke's case on GL<sub>2</sub>.

## Main definitions

Throughout, F is a non-archimedean local field of residue characteristic p, G is connected, quasi-split and reductive over F, and coefficients are ℚ̄<sub>ℓ</sub> with ℓ ≠ p and a fixed square root of q.

**Relative stack Bun<sub>G</sub><sup>X</sup>.** For a normal quasi-projective G-variety X, this stack sends a test space S to maps from the Fargues–Fontaine curve over S to the quotient X/G. It classifies G-bundles on the curve with a section of the associated X-bundle.
- Over the trivial bundle it contains X(F)/G(F), and equals it when X is quasi-affine (Proposition 1).

**Normalised period sheaf.** Let π<sub>X</sub> be the map from Bun<sub>G</sub><sup>X</sup> to Bun<sub>G</sub>. The unnormalised period sheaf is the pushforward with compact supports of the constant sheaf. For smooth X, the normalised version first pulls back a "degree sheaf" from Bun of the multiplicative group along the canonical bundle of X, then pushes forward (Definition 2).
- Think of it as a geometric form of half-densities on X.

**Normalised L-sheaf.** For a space X̂ with an action of the L-group and a grading, the relative spectral stack classifies L-parameters together with a fixed point in X̂, in a derived sense. The L-sheaf is the pushforward of its dualising complex to the stack of L-parameters. Normalising twists by the unramified character that sends Frobenius to q<sup>−1/2</sup>, then shears by the grading (Definition 4).

## Main results

**Conjecture (normalised period conjecture; Conjecture 5, Conjecture 6.19 in the body).** Fix a Whittaker datum. Suppose the categorical local Langlands equivalence of Fargues–Scholze exists for G, from sheaves on Bun<sub>G</sub> to ind-coherent sheaves on the stack of L-parameters. Then for every dual pair (G, X) ↔ (<sup>L</sup>G, X̂) it sends the normalised period sheaf of X to the normalised L-sheaf of X̂. The notion of dual pair has no general definition yet.

**Theorem (Iwasawa–Tate period; Theorem 6).** For G the multiplicative group acting on the affine line by the standard character, the conjecture holds. The equivalence is known here, so this is unconditional. The period sheaf also satisfies a functional equation between the standard character and its dual.
- Step 1: the automorphic side is compactly supported cohomology of Banach–Colmez spaces.
- Step 2: the spectral side is a derived vector bundle built from Weil–Deligne cohomology.

**Theorem (Hecke period; Theorem 7).** Take G = GL<sub>2</sub> and X = GL<sub>2</sub>/A, with A a one-dimensional torus of diagonal matrices. Assume the equivalence for GL<sub>2</sub> exists and is compatible with Eisenstein series. Both sheaves split into pieces indexed by an integer n. For n ≠ 0 the pieces match. For n = 0 each piece sits in a fibre sequence, and the first and last terms match.
- Step 1: for n = 0 the automorphic side unfolds into a Whittaker part and an Eisenstein part.
- Step 2: the spectral side uses an open-closed splitting of the spectral stack, plus the functional equation for n > 0.

**Proposition (distinction; Propositions 8 and 9).** Assume the conjecture and an expectation on Hecke eigensheaves. If π is X-distinguished, its Fargues–Scholze parameter lies in the image of the relative spectral stack. For Galois symmetric varieties, under further conditions, this recovers the multiplicity formula of Prasad's conjecture.

## Note, then ignore

- A different sheaf theory. Lisse-étale sheaves lack compactly supported pushforward, so Section 1 builds an ℓ-adic six functor formalism from motivic sheaves. Safe to skip on a first reading.
- Square root of q. It is needed to define half twists on both sides. A normalisation only. Safe to skip.
- Weil–Deligne parameters. The spectral stack uses Weil–Deligne parameters because coefficients have characteristic 0. Safe to skip.
- Derived structure. Relative spectral stacks carry derived structure, which is why Appendix A exists. Safe to skip at first.
- Polarised case only. The paper treats cotangent bundles T<sup>∗</sup>X, not general hyperspherical varieties. Safe to skip.

## One next step

Open the PDF at page 5 and read only Conjecture 5 and the sentence after it.
