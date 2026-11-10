source: https://arxiv.org/pdf/2504.15767
slogan: No known vector space has dimension equal to the vanishing order of a Dedekind zeta function at 1/2, but its required shape is now fixed.
basis: the introduction and the main theorem statements

## Before you start

Most of this 18-page note reasons from a cohomology theory that does not exist yet. The likely feeling is distrust, or a worry that you cannot tell solid ground from speculation. That worry is reasonable, and you can keep it with you while you read. The author marks the line himself: Section 2 is speculative up to Prediction 2.13, and the two theorems after it are proved. If you want to see how a conjecture gets designed before anyone can state it, this is a rare open view. Read it as a detective story. Completing it is optional.

## The story

For an elliptic curve E over ℚ, Birch and Swinnerton-Dyer say that the rank of E(ℚ) equals the order of vanishing of L(E, s) at the central point s = 1. The Dedekind zeta function ζ<sub>K</sub>(s) of a number field K has central point s = 1/2, and it can vanish there. Yet nobody has proposed a group or vector space V<sub>K</sub> whose dimension is that order of vanishing. Deninger does not find V<sub>K</sub>. He asks what properties a natural V<sub>K</sub> must have. He combines his conjectural cohomology of the compactified Spec of the ring of integers with a conjecture of Serre on which Artin L-functions vanish at 1/2. Out comes a precise list of requirements. He then proves that an abstract functor with those properties exists and is essentially unique.

## Main definitions

**Root number and symplectic representation.** Let K/ℚ be Galois with group G. Then ζ<sub>K</sub>(s) is the product of the Artin L-functions L(π, s)<sup>deg π</sup> over irreducible complex representations π of G. A self-dual π is symplectic if it preserves a non-degenerate alternating form, and orthogonal if it preserves a symmetric one. The root number W(π) is the sign in the functional equation of a self-dual π.
- If π is symplectic with W(π) = −1, the functional equation forces L(π, 1/2) = 0.

**Star operator.** An antilinear endomorphism ∗ of a complex vector space with ∗<sup>2</sup> = −1.

**The category Vec♯.** Objects are finite-dimensional complex vector spaces W with a symplectic pairing ∪ and a star operator ∗ such that ⟨w, w′⟩ = w ∪ ∗w′ is a Hermitian scalar product. Morphisms are linear maps that respect ∪ and commute with ∗.
- Consequence: every morphism is injective and isometric, so it has an adjoint.

## Main results

**Conjecture (Serre, as recalled in the introduction).** An irreducible Artin L-function L(π, s) vanishes at s = 1/2 only when the functional equation forces it, that is, when π is symplectic with W(π) = −1. In that case the order of vanishing is 1.
- Consequence: ζ<sub>K</sub>(1/2) ≠ 0 for every abelian extension K/ℚ.

**Conjecture (the shape of the answer; Prediction 2.13).** There is a functor from number fields to finite-dimensional complex vector spaces, written H<sup>1</sup><sub>M</sub>(Y<sub>K</sub>, ℂ(1/2)), both covariant and contravariant, with a symplectic pairing and a star operator. For an embedding α : K → L, the pullback followed by the pushforward is multiplication by [L : K]. If L/K is Galois, the pushforward followed by the pullback is the sum over the Galois group.
- For K/ℚ Galois with group G, the space is the direct sum, over symplectic irreducible π with W(π) = −1, of one copy of π.
- So its dimension is the sum of deg π over those π, which is the order of vanishing of ζ<sub>K</sub> at 1/2 if Serre's conjecture holds.

**Theorem (existence; Theorem 2.15).** There is a covariant functor V from the category of number fields to Vec♯ with the three properties above, after rescaling the pairing by [K : ℚ]<sup>−1</sup>. In particular, for K/ℚ Galois, each symplectic irreducible π with W(π) = −1 occurs in V<sub>K</sub> exactly once and no other representation occurs.
- Step 1: take the direct sum V of all such representations π of the absolute Galois group of ℚ, each with an invariant symplectic form.
- Step 2: for K inside a fixed algebraic closure, let V<sub>K</sub> be the vectors of V fixed by the Galois group of K.

**Theorem (uniqueness; Theorem 2.16).** Any two functors as in Theorem 2.15 are isomorphic. The automorphism group of such a functor is the group of all maps from Π to {±1}, where Π is the set of isomorphism classes of the representations π used above.

## Note, then ignore

- The operator θ. The conjectural cohomology carries an operator θ, and its eigenvalues on H<sup>1</sup> are expected to be the zeros of the completed zeta function. You need only its eigenspace for the eigenvalue 1/2. Safe to skip on a first reading.
- Two candidate theories. The text names an infinite-dimensional cohomology and a "motivic" one with half-integer twists, and expects a regulator isomorphism between the relevant pieces. Neither is defined. Safe to skip.
- The existence proof makes choices. The construction picks a model and a symplectic form for each π. The author says plainly that this is formal and that a natural construction is still missing. Safe to skip.
- Exponential motives. Section 4 reports a result of Fresán and Jossen (Theorem 4.1): the extension group of ℚ(0) by ℚ(1/2) in exponential motives over a subfield of ℂ is zero. So that natural candidate fails. Safe to skip.
- The function field case. The introduction says the analogous problem over function fields has been solved, and cites a paper for it. Safe to skip.

## One next step

Open the paper and read the first paragraph of the introduction, down to equation (1). It states the missing object in six lines.
