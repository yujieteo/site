source: https://arxiv.org/pdf/1910.11207
slogan: Modular units pushed forward from a smaller Shimura variety give motivic classes on Siegel varieties, and their regulator is an integral you can write down.
basis: the introduction and the main theorem statements

## Before you start

This paper assumes motivic cohomology, Deligne–Beilinson cohomology, Shimura varieties and automorphic representations all at once. The likely feeling is shame at not knowing the background. That feeling is allowed, and nobody holds all four fields comfortably. If you want to see how a special value of an L-function could come from geometry, the introduction shows the whole mechanism in three pages. Read for the pleasure of the construction. Finishing can wait.

## The story

Beilinson's conjectures say that special values of L-functions are governed by motivic cohomology, through a regulator map into Deligne–Beilinson cohomology. To test this you first need classes in motivic cohomology, and these are hard to find. For the Siegel threefold (GSp<sub>4</sub>) and the Siegel sixfold (GSp<sub>6</sub>) earlier work built such classes. The authors want them for the Siegel variety of GSp<sub>2n</sub> for almost all n. The idea is simple to state. Modular curves carry modular units, which are classes in H<sup>1</sup>. Find a subgroup H of GSp<sub>2n</sub> that maps onto GL<sub>2</sub> and whose Shimura variety sits inside the Siegel variety in exactly the right codimension. Pull a unit back to Sh<sub>H</sub>, then push it forward. The regulator of the result becomes an integral over Sh<sub>H</sub> of an Eisenstein series against a cusp form.

## Main definitions

**Siegel variety.** Let G = GSp<sub>2n</sub>, the group of symplectic similitudes of a 2n-dimensional space. Its Shimura variety Sh<sub>G</sub> is a moduli space of principally polarised abelian varieties of dimension n with level structure. Its dimension is d = n(n+1)/2.
- Set η = 0 if d is even and η = 1 if d is odd. The parity of d decides the shape of every later formula.
- d is even exactly when n ≡ 0 or 3 mod 4.

**The subgroup H.** H is a fibre product over GL<sub>1</sub> of smaller symplectic similitude groups, possibly over totally real fields, with all similitude factors equal. It embeds in G, and Sh<sub>H</sub> → Sh<sub>G</sub> is a closed embedding of codimension (d − η)/2.
- Examples: GSp<sub>2</sub> ⊠ GSp<sub>2</sub> in GSp<sub>4</sub>, and GSp<sub>2</sub> ⊠ GSp<sub>2</sub> ⊠ GSp<sub>4</sub> in GSp<sub>8</sub>.
- H projects to H′ = GL<sub>2</sub> when η = 0, and to GL<sub>2</sub> ×<sub>GL<sub>1</sub></sub> GL<sub>2</sub> when η = 1.

**Modular unit.** An invertible function on a modular curve. It gives a class in the motivic cohomology group H<sup>1</sup><sub>M</sub>(Sh<sub>GL<sub>2</sub></sub>, ℚ(1)), which is the group of units tensored with ℚ. By the second Kronecker limit formula, log|u| is a limiting value of a weight 0 real analytic Eisenstein series.

**The class Eis<sub>M,n</sub>.** Let u be one modular unit (η = 0) or a cup product of two (η = 1). With ι : Sh<sub>H</sub> → Sh<sub>G</sub> and pr : Sh<sub>H</sub> → Sh<sub>H′</sub>, define Eis<sub>M,n</sub> = ι<sub>\*</sub> pr<sup>\*</sup>(u). It lies in H<sup>d+1</sup><sub>M</sub>(Sh<sub>G</sub>, ℚ(t)) with t = (d + η + 2)/2.

## Main results

**Lemma (existence of H; Lemma 2.2).** For almost all n there is a partition n = n<sub>1</sub> + … + n<sub>k</sub> whose parts satisfy a quadratic identity. That identity is what makes the codimension of Sh<sub>H</sub> equal to (d − η)/2.
- Case n ≡ 0 or 3 mod 4: n<sub>1</sub> = 1, so H has one GL<sub>2</sub> factor.
- Case n ≡ 1 or 2 mod 4: n<sub>1</sub> = n<sub>2</sub> = 1, so H has two.

**Theorem (regulator as an integral over Sh<sub>H</sub>; Theorem 1.1).** Let π be a cuspidal automorphic representation of G with trivial central character and discrete series at infinity. Let Ψ be a cusp form in π whose archimedean part is a highest weight vector of a minimal K-type, and let ω<sub>Ψ</sub> be the attached harmonic form. Then pairing the regulator of Eis<sub>M,n</sub> with ω<sub>Ψ</sub> gives ∫ over Sh<sub>H</sub> of ξ ∧ ι<sup>\*</sup>ω<sub>Ψ</sub>, where ξ = pr<sup>\*</sup> log|u| if η = 0.
- Step 1: describe Deligne–Beilinson cohomology by tempered currents, so the push-forward can be computed on the open variety.
- Step 2: use Poincaré duality to turn the pairing into an integral over the cycle.

**Theorem (Rankin–Selberg form; Theorem 1.2).** For n ≡ 0 or 3 mod 4, the same pairing equals a volume constant times the adelic integral over H(ℚ)Z<sub>G</sub>(𝔸)\H(𝔸) of E(h<sub>1</sub>, 0)·(A·Ψ)(h), where E is the Eisenstein series of the Kronecker limit formula and A is an explicit element of the enveloping algebra. For n ≡ 1 or 2 mod 4, Theorem 3.15 gives a linear combination of such integrals.

**Theorem (unfolding; Theorem 1.3).** For n = 4, 5, 7 the integral unfolds to an adelic integral over a Fourier coefficient attached to a unipotent orbit, of type (4 2 1<sup>2</sup>), (2<sup>2</sup> 1<sup>6</sup>) and (4 2 1<sup>8</sup>) respectively. The paper does not relate these integrals to an L-function for n ≥ 4. That link is known only for n = 2 and n = 3.

## Note, then ignore

- "Almost all n": the combinatorial lemma is stated for almost all n, not all. It only limits where the construction runs. Safe to skip on a first reading.
- Tempered currents: these replace ordinary currents on a compactification, because the authors say ordinary currents do not suffice here. This is a technical device for the proof of Theorem 1.1. Safe to skip.
- The element A of the enveloping algebra: it moves the highest weight vector to the vector that the restriction to H sees. It is defined in §3.8. Safe to skip.
- The introduction says "function field" where it means number field in its first sentence. It is a slip. Safe to skip.

## One next step

Open the paper at page 2 and read only the displayed list of embeddings of H into GSp<sub>4</sub>, GSp<sub>6</sub>, GSp<sub>8</sub>, GSp<sub>10</sub>, GSp<sub>14</sub>, then the line Eis<sub>M,n</sub> = ι<sub>\*</sub> pr<sup>\*</sup>(u) on page 3.
