source: https://arxiv.org/pdf/2502.13882
slogan: Maps from a hidden small avatar of an elliptic curve give a loop space, and its functions are a first form of equivariant elliptic cohomology.
basis: the introduction and the main theorem statements

## Before you start

This paper opens with derived stacks, tensor categories and ∞-categories all at once. The likely feeling is a fear of being too slow, of needing an hour per page. That fear is welcome to sit beside you. The introduction is 12 pages and carries the whole idea with examples you can compute. If you want to see why elliptic cohomology belongs on bundles over an elliptic curve, it is here. Read for the trichotomy and the examples. Whether you reach Section 5 is secondary.

## The story

One-dimensional group schemes come in three kinds: the additive group 𝔾<sub>a</sub>, the multiplicative group 𝔾<sub>m</sub>, and elliptic curves E. The first two have loop spaces. Maps from the circle S<sup>1</sup> = Bℤ into X give Hochschild homology. Maps from the classifying stack of the formal additive group give the shifted tangent bundle T[−1]X and Hodge cohomology. People wanted a third, elliptic, loop space. The obvious guess Maps(E, Y) is too big and is not Zariski-local in Y. The idea: both known cases map out of a space whose coherent sheaves are the sheaves with 0-dimensional support on the group, under convolution. So skip the space. Define the elliptic loop space as tensor functors from QCoh(Y) into that convolution category on E. For BGL<sub>r</sub> this gives semistable bundles of rank r and degree 0 on E.

## Main definitions

**Convolution category H<sub>E</sub> (Definitions 3.4 and 3.5).** Let E be an elliptic curve with multiplication m. The convolution of sheaves is F ⋆ G := m<sub>∗</sub>(F ⊠ G). H<sub>E</sub> is the category of ind-objects of perfect complexes on E with 0-dimensional support, with ⋆ as tensor product.
- The unit is the skyscraper sheaf O<sub>e</sub> at the neutral point. Skyscrapers satisfy O<sub>x</sub> ⋆ O<sub>y</sub> = O<sub>x+y</sub>.

**Elliptic loop space (Definition 4.1).** For a tensor category C, L<sub>E</sub>(C) is the stack Fun<sup>⊗</sup>(C, H<sub>E</sub>) of tensor functors. For a stack Y, L<sub>E</sub>(Y) := L<sub>E</sub>(QCoh(Y)). The curve E acts on it through its action on H<sub>E</sub>.

**Pluperfect stack (Definition 4.4).** A stack Y is pluperfect if it is Tannakian and finitely many perfect complexes generate its derived category under colimits, finite limits and tensor products.
- Example: X/G with X quasi-projective and G an affine algebraic group acting linearly (Lemma 4.5).
- Tannakian means that maps into Y are the same as tensor functors out of QCoh(Y).

## Main results

All results are over a base containing ℚ. The introduction takes a field of characteristic zero.

**Theorem (loops as maps; Theorem 4.2, Corollary 4.3).** If Y is pluperfect, the canonical morphism L<sub>E</sub>(Y) → Maps(E, Y) is an open immersion. So for a pluperfect Artin stack Y, L<sub>E</sub>(Y) is an Artin stack.
- In words: L<sub>E</sub>(Y) consists of the maps f: E → Y such that, for every perfect complex F on Y, the Fourier–Mukai transform of f<sup>∗</sup>F has 0-dimensional support.

**Theorem (schemes; Theorem 4.7).** For a quasi-compact quasi-separated scheme S, L<sub>E</sub>(S) ≅ T[−1]S. The E-action factors through the affinisation B𝔾<sub>a</sub> of E.
- Step 1: reduce to S = Spec R. A tensor functor is then fixed by a ring map from R to End(O<sub>e</sub>) = k[ε], with ε of degree 1.
- Step 2: such maps are the points of T[−1]S. The isomorphism depends on a trivialisation of H<sup>1</sup>(E, O).

**Theorem (Mayer–Vietoris and Künneth; Theorems 4.9 and 4.10, Corollary 4.11).** A finite cover of a Tannakian stack Y by Tannakian quasi-compact opens U<sub>i</sub> gives an open cover of L<sub>E</sub>(Y) by the L<sub>E</sub>(U<sub>i</sub>). L<sub>E</sub> sends fibre squares of perfect stacks to fibre squares. So U ↦ L<sub>E</sub>(U) is a Zariski cosheaf on a quasi-compact pluperfect stack.
- Step 1: H<sub>E</sub> is an "integral domain": the product of two non-zero objects is non-zero (Lemma 3.12).
- Step 2: so a tensor functor into H<sub>E</sub> factors through one piece of a finite cover (Lemma 2.8).

**Theorem (tangent complex; Theorem 4.14).** If Y is pluperfect with tangent complex T<sub>Y</sub>, then L<sub>E</sub>(Y) has tangent complex Θ<sub>Y</sub>(T<sub>Y</sub>), where Θ<sub>Y</sub> is the paper's twist functor from sheaves on Y to E-equivariant sheaves on L<sub>E</sub>(Y).

## Note, then ignore

- Everything is derived. Even for an affine scheme the answer T[−1]S is a derived scheme, so the paper drops the words "derived" and "∞" throughout. Safe to skip on a first reading.
- Rational versus unipotent loops. The paper uses maps from the classifying stack of the formal additive group, where other authors use B𝔾<sub>a</sub>. The two differ for stacks. Safe to skip.
- The space S<sub>E</sub> is never built. The authors work only with its would-be category of sheaves. Nothing later needs the space itself. Safe to skip.
- Hodge, not yet elliptic cohomology. The structure sheaf gives "equivariant elliptic Hodge cohomology". The Tate construction needed for elliptic cohomology proper is left to a sequel. Safe to skip.
- Characteristic zero. A footnote says this is used in only a few places, such as linear reductivity of GL<sub>r</sub>. Safe to skip.

## One next step

Open the paper at Section 1.3.5 (page 8) and read the example of BGL<sub>r</sub>, starting with the case r = 1 where L<sub>E</sub>(B𝔾<sub>m</sub>) ≅ E × B𝔾<sub>m</sub>.
