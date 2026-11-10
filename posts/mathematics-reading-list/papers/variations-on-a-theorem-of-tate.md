source: https://arxiv.org/pdf/1207.6724
slogan: Tate showed projective Galois representations always lift, and the same lifting question for automorphic forms and motives has one answer, governed by half-integral weights.
basis: the abstract and introduction

## Before you start

This 140-page monograph assumes automorphic representations, ℓ-adic Hodge theory and motives all at once. The likely feeling is shame at not having all three. That feeling is fair, and it does not need fixing before you read. If you want to see why "lift from PGL<sub>n</sub> to GL<sub>n</sub>" is a real question about arithmetic, the first two pages of the introduction say it plainly. Read those for interest. The rest can stay closed.

## The story

Let F be a number field and Γ<sub>F</sub> its absolute Galois group. Tate proved H<sup>2</sup>(Γ<sub>F</sub>, ℚ/ℤ) = 0. So every continuous projective representation Γ<sub>F</sub> → PGL<sub>n</sub>(ℂ) lifts to GL<sub>n</sub>(ℂ). Patrikis asks the same question in three settings: ℓ-adic Galois representations, automorphic representations, and motives. Lifts exist cheaply in the first two. The block is quality: a lift of a geometric representation, or of an algebraic automorphic one, need not be geometric or algebraic. The idea that unblocks it is a weaker notion, W-algebraic, which allows half-integral weights at infinity. With it the Galois and automorphic answers match: over totally imaginary fields good lifts exist, and over totally real fields a parity condition decides. For motives he proves cases through the Kuga–Satake construction.

## Main definitions

**The lifting setup.** H′ → H is a surjection of linear algebraic groups whose kernel is a central torus. A lift of ρ : Γ<sub>F</sub> → H(ℚ̄<sub>ℓ</sub>) is a homomorphism to H′(ℚ̄<sub>ℓ</sub>) that composes to ρ.
- Model case: GL<sub>n</sub> → PGL<sub>n</sub>.
- Motivic case: GSpin → SO.

**Geometric representation.** A continuous ℓ-adic representation of Γ<sub>F</sub> that is unramified at almost all primes and de Rham at the primes above ℓ. Fontaine and Mazur conjecture that these are the ones that come from algebraic geometry.

**L-algebraic and W-algebraic (Definitions 1.1.1 and 1.1.2).** Let π be an automorphic representation of a group G with maximal torus T. At each infinite place its parameter has two weights μ, ν in X<sup>•</sup>(T) ⊗ ℂ. π is L-algebraic if all of these lie in the lattice X<sup>•</sup>(T).
- W-algebraic: they lie in ½X<sup>•</sup>(T).

**Motivic Galois group G<sub>F,E</sub>.** The pro-reductive group attached to André's category of motives for motivated cycles over F with coefficients in a number field E. It exists without assuming the standard conjectures.

## Main results

**Theorem (Tate).** For a number field F, H<sup>2</sup>(Γ<sub>F</sub>, ℚ/ℤ) = 0. Hence H<sup>2</sup>(Γ<sub>F</sub>, ℂ<sup>×</sup>) = 0 and every projective representation Γ<sub>F</sub> → PGL<sub>n</sub>(ℂ) lifts. The paper takes this as its starting point and cites Serre for it.

**Proposition (algebraic automorphic lifts; Proposition 1.1.3).** Let F be a CM field, G a split semisimple group over F, and G̃ the group got by enlarging the centre of G to a torus. Let π be a cuspidal representation of G over the adèles, tempered at infinity. If π is L-algebraic, it has an L-algebraic cuspidal lift to G̃. If π is W-algebraic, it has a W-algebraic lift.
- Totally real F (Proposition 1.1.4): an L-algebraic π has a W-algebraic lift. An L-algebraic lift exists exactly when a parity invariant is the same at every infinite place. One direction of this assumes a conjecture of Adler and Prasad.

**Theorem (geometric Galois lifts, conditional; Theorem 1.1.7).** Let F be totally imaginary and ρ : Γ<sub>F</sub> → H(ℚ̄<sub>ℓ</sub>) geometric. Assume Hypothesis 3.2.4, a symmetry of Hodge–Tate weights that would follow if ρ were automorphic or motivic. Then ρ has a geometric lift to H′.

**Theorem (motivic lift for hyperkähler varieties; Theorem 1.1.12).** Let X be a polarised hyperkähler variety over F with b<sub>2</sub>(X) > 3, and V its primitive degree 2 cohomology. Assume the transcendental lattice T has only ℚ as Hodge endomorphisms, or has odd dimension, and that det V<sub>ℓ</sub> and det T<sub>ℓ</sub> are trivial. Then after extending coefficients to some number field E, the motivic representation G<sub>F,E</sub> → SO(V<sub>E</sub>) lifts to GSpin(V<sub>E</sub>). The lifts form a weakly compatible system of λ-adic representations.
- Step 1: André's work gives the lift over a finite extension F′ of F.
- Step 2: a descent from F′ to F, in the style of Ribet's study of ℚ-curves, with Faltings's isogeny theorem as input.

**Conjecture (Conjecture 1.1.13).** For any ρ : G<sub>F,E</sub> → H, a lift exists after enlarging E if F is imaginary. If F is totally real, a lift exists exactly when a Hodge number parity obstruction vanishes.

## Note, then ignore

- C-algebraic. A third notion, due to Clozel and to Buzzard and Gee, shifts weights by half the sum of positive roots. It matters for cohomological representations. Safe to skip here.
- Split groups. The author takes G and the torus split for simplicity and expects the quasi-split case to behave the same. Safe to skip.
- Weak equivalence. For groups other than GL<sub>n</sub>, Galois and automorphic objects are matched only at almost all places. This is tied to failure of multiplicity one for SL<sub>n</sub>. Safe to skip at first.
- Why E is needed. The GSpin lift does not exist with ℚ coefficients in general. Extending to E is part of the statement. Note it and move on.
- Version. The link is arXiv v4 of 2014. A later published version may number results differently. Safe to skip.

## One next step

Open the PDF at Section 1.1 and read the first paragraph, then jump to Definitions 1.1.1 and 1.1.2 on the next page.
