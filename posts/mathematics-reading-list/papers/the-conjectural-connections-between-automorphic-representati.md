source: https://arxiv.org/pdf/1009.0785
slogan: Two notions of algebraic, half the sum of the positive roots apart, decide which automorphic representations get Galois representations, and into which group.
basis: the introduction and the main theorem statements

## Before you start

This paper has about 40 pages and its second section is a long run of conventions about L-groups, Satake parameters and Weil groups. The likely feeling is impatience, mixed with a worry that you have to know all of Langlands' formalism first. That feeling is fine and you can keep it. If you want to know what the Langlands programme predicts outside GL<sub>n</sub>, this is the place where it is written down. Enjoy the PGL<sub>2</sub> puzzle in the introduction first. Finishing can wait.

## The story

Weil attached 1-dimensional ℓ-adic Galois representations to algebraic Hecke characters. Deligne attached 2-dimensional ones to modular eigenforms. Clozel conjectured the same for "algebraic" automorphic representations of GL<sub>n</sub>. People wanted the statement for every connected reductive group G over a number field. The naive guess is a Galois representation into the L-group of G. It fails. An elliptic curve over ℚ gives an automorphic representation of PGL<sub>2</sub>, whose L-group is SL<sub>2</sub>. The Tate module cannot be twisted into SL<sub>2</sub>, because the cyclotomic character has no square root. Buzzard and Gee find the cause: there are two notions of algebraic, and they differ by half the sum of the positive roots. One kind gets a representation into the L-group. The other kind gets one into a slightly larger group, the C-group.

## Main definitions

**L-algebraic and C-algebraic.** Let π be an automorphic representation of G over a number field F. At each infinite place v, the Langlands parameter of π<sub>v</sub> restricted to ℂ<sup>×</sup> gives a weight λ in X\*(T) ⊗ ℂ, defined up to the Weyl group. Let δ be half the sum of the positive roots.
- L-algebraic: λ ∈ X\*(T) at every infinite place.
- C-algebraic: λ − δ ∈ X\*(T) at every infinite place.

**L-arithmetic and C-arithmetic.** These look at the unramified finite places instead. There must be one number field E ⊂ ℂ that works for all places outside a finite set S.
- L-arithmetic: the Satake parameter of π<sub>v</sub> is defined over E.
- C-arithmetic: the representation π<sub>v</sub> itself is defined over E.

**Twisting element.** A Galois-stable character θ ∈ X\* that pairs to 1 with every simple coroot. GL<sub>n</sub> has one. PGL<sub>2</sub> has none.

**C-group.** Every G has a canonical central extension G̃ of G by GL<sub>1</sub>, and G̃ has a canonical twisting element (Proposition 5.3.1). The C-group of G is the L-group of G̃ (Definition 5.3.2). For G = PGL<sub>2</sub> over ℚ, G̃ is GL<sub>2</sub>.

## Main results

**Conjecture (algebraic equals arithmetic; Conjectures 3.1.5 and 3.1.6).** π is L-arithmetic if and only if it is L-algebraic. π is C-arithmetic if and only if it is C-algebraic.
- Proved in the paper for tori (Section 4), mostly by reduction to GL<sub>1</sub>, where one direction is a transcendence theorem of Waldschmidt.
- Open even for GL<sub>2</sub> over ℚ when π is principal series at infinity.

**Conjecture (Galois representations for L-algebraic π; Conjecture 3.2.1).** Fix a prime p and an isomorphism ι: ℂ → ℚ̄<sub>p</sub>. If π is L-algebraic, there is a continuous representation ρ from the absolute Galois group of F to the ℚ̄<sub>p</sub>-points of the L-group of G. Outside a finite set S of places, ρ restricted to the local Weil group matches the unramified Langlands parameter of π<sub>v</sub>.
- At places above p, ρ is de Rham, with Hodge–Tate cocharacter read off from λ.
- At real places, the conjecture names the conjugacy class of complex conjugation.

**Proposition (twisting; Proposition 5.2.2).** If θ is a twisting element, then π is C-algebraic if and only if π ⊗ |·|<sup>θ−δ</sup> is L-algebraic.
- This is Clozel's twist for GL<sub>n</sub>, stated for any group with a twisting element.

**Conjecture (Galois representations for C-algebraic π; Conjecture 5.3.4).** If π is C-algebraic, there is a Galois representation into the C-group of G, and its composite with a natural character d of the C-group is the cyclotomic character. The paper deduces this from Conjecture 3.2.1 applied to G̃.
- Example: the elliptic curve representation of PGL<sub>2</sub> is C-algebraic, and the predicted representation into GL<sub>2</sub> is the Tate module.

## Note, then ignore

- L-groups over ℚ̄. The authors define the L-group over ℚ̄ and not over ℂ, so that it has p-adic points. Safe to skip on a first reading.
- Geometric Frobenius. Class field theory is normalised so that uniformisers match geometric Frobenius. The other choice changes the conjecture by an involution (Remark 3.2.5). Safe to skip.
- The choice of ι. The conjectured ρ depends on the isomorphism ℂ → ℚ̄<sub>p</sub>. This is the usual price of comparing complex and p-adic objects. Safe to skip.
- Non-uniqueness. The representation ρ need not be unique up to conjugation, even for tori (Remark 3.2.4). Safe to skip.
- Versions. The arXiv version corrects the recipe for the Hodge–Tate cocharacter in the published version (Remark 3.2.3). Safe to skip unless you need that recipe.

## One next step

Open the paper at page 2 and read only the paragraph of Section 1.1 about the elliptic curve and PGL<sub>2</sub>, down to "What is going on?".
