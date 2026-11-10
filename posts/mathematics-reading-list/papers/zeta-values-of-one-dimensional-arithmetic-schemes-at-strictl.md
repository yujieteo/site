source: https://arxiv.org/pdf/2111.13398
slogan: At negative integers, the zeta value of any abelian one-dimensional arithmetic scheme is a ratio of sizes of cohomology groups times a regulator.
basis: the introduction and the main theorem statements

## Before you start

The abstract mentions étale motivic cohomology, Weil-étale cohomology and regulators in its first four lines. The likely feeling is shame at not knowing the background, as if you had walked into the third lecture of a course. You can let that be there. The paper is in fact kind: it gives two proofs, and the first one is elementary given known results. If you like the class number formula and want to see what it looks like at s = −1, −2, …, this is a direct answer. Read the introduction for pleasure and stop when you like.

## The story

Dirichlet's class number formula reads the leading term of the Dedekind zeta function at s = 0 as −hR/w: class number, regulator, roots of unity. People want the same at other integers, and for schemes more general than rings of integers. Lichtenbaum proposed cohomological formulas. Flach and Morin gave a precise one for proper regular schemes, and proved the case of abelian number fields at n ≤ 0. The block is that a general one-dimensional scheme can be singular, non-reduced, or missing points. Beshenov's idea is a dévissage: zeta functions and motivic cohomology both behave well when you pass to the reduced scheme, split into components, or remove finitely many closed points. So a formula known for number rings and for curves over finite fields spreads to every one-dimensional arithmetic scheme.

## Main definitions

**One-dimensional arithmetic scheme, and "abelian".** An arithmetic scheme is separated and of finite type over Spec ℤ. Here X has Krull dimension 1. Its zeta function ζ(X, s) is the product over closed points x of 1/(1 − N(x)<sup>−s</sup>), with N(x) the size of the residue field. X is called abelian if each generic point of characteristic 0 has residue field an abelian extension of ℚ (Definition 1.1).
- Examples: Spec O<sub>F</sub> for an abelian number field F, and every curve over 𝔽<sub>q</sub>.

**Special value.** ζ\*(X, n) is the leading non-zero Taylor coefficient of ζ(X, s) at s = n. Write r<sub>1</sub> for the number of real points of X and 2r<sub>2</sub> for the number of non-real complex points.

**Étale motivic cohomology H<sup>i</sup>(X<sub>ét</sub>, ℤ<sup>c</sup>(n)).** The hypercohomology of the complex of étale sheaves ℤ<sup>c</sup>(n) built from Bloch's cycle complex, for n &lt; 0. It has a localisation long exact sequence for a closed subscheme and its open complement, so it behaves like Borel-Moore homology.
- For Spec 𝔽<sub>q</sub>: the only non-zero group is H<sup>1</sup> = ℤ/(q<sup>−n</sup> − 1).

**Regulator R<sub>X,n</sub>.** The regulator map sends H<sup>−1</sup>(X<sub>ét</sub>, ℤ<sup>c</sup>(n)) to a real vector space built from the complex points X(ℂ) with their conjugation action. R<sub>X,n</sub> is the volume of its cokernel for the canonical integral structure (Definition 6.5). It is 1 when the target is zero, for example for curves over 𝔽<sub>q</sub>.

## Main results

**Proposition (vanishing order; Proposition 3.2).** For a one-dimensional arithmetic scheme X and n &lt; 0, the order of vanishing of ζ(X, s) at s = n is r<sub>1</sub> + r<sub>2</sub> for n even and r<sub>2</sub> for n odd.

**Proposition (shape of motivic cohomology; Proposition 5.1).** For such X and n &lt; 0: H<sup>i</sup>(X<sub>ét</sub>, ℤ<sup>c</sup>(n)) vanishes for i &lt; −1, is finitely generated of rank equal to the vanishing order for i = −1, and is finite for i = 0, 1. For i ≥ 2 it is (ℤ/2)<sup>r<sub>1</sub></sup> when i and n have different parity, and zero otherwise.

**Theorem (special value formula; Theorem 1.2).** Let X be an abelian one-dimensional arithmetic scheme and n &lt; 0. Then

ζ\*(X, n) = ± 2<sup>δ</sup> · |H<sup>0</sup>| / ( |(H<sup>−1</sup>)<sub>tors</sub>| · |H<sup>1</sup>| ) · R<sub>X,n</sub>,

where H<sup>i</sup> = H<sup>i</sup>(X<sub>ét</sub>, ℤ<sup>c</sup>(n)), and δ = r<sub>1</sub> for n even, δ = 0 for n odd.
- Step 1: the formula holds for finite fields, for curves over 𝔽<sub>q</sub>, and for Spec O<sub>F</sub> with F abelian (Lemma 7.1). The last case rests on the Tamagawa number conjecture, which is known for abelian F.
- Step 2: the formula for X is equivalent to the formula for a dense open U (Lemma 7.3). The dévissage Lemma 2.1 then covers all X.

**Conjecture (non-abelian case).** The same formula holds for every one-dimensional arithmetic scheme. The author notes this is equivalent to the Tamagawa number conjecture for non-abelian number fields (Remark 7.4).

## Note, then ignore

- The sign. The formula is only up to ±. Removing a closed point flips the sign, and the author gives no general expression for it (Remark 7.5). Safe to skip.
- ℤ<sup>c</sup>(n) versus ℤ(m). For proper regular X of pure dimension d, ℤ<sup>c</sup>(n) ≅ ℤ(d − n)[2d]. The paper uses only ℤ<sup>c</sup>(n), so you can ignore the other indexing.
- Why n = 0 is excluded. At s = 0 the value for Spec 𝔽<sub>q</sub> is 1/log q, which is not rational, and the cohomology is no longer finite (Remark 7.2). The paper stays at n &lt; 0 to avoid this.
- Weil-étale cohomology (sections 8 and 9). It gives a second, more conceptual proof and explains where the formula came from. The first proof does not need it.
- The word "abelian". It is an ad hoc term here and has nothing to do with abelian schemes in the sense of abelian varieties.
- The factor 2<sup>δ</sup>. It compensates for 2-torsion coming from real places. For Spec O<sub>F</sub> it equals |H<sup>1</sup>|, so the two cancel in that case.

## One next step

Open the paper at page 4 and read only Theorem 1.2 and the three bullet points under it.
