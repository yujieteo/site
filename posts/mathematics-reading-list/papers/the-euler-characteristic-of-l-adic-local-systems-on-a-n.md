source: https://otaibi.perso.math.cnrs.fr/ecAn.pdf
slogan: The cohomology of the moduli of abelian varieties in level one is written in spin Galois representations, so point counts become explicit formulas.
basis: the introduction and the main theorem statements

## Before you start

This paper has 288 pages and leans on Arthur's endoscopic classification, the stable trace formula and Morel's work on intersection cohomology. The likely feeling is overwhelm, mixed with a sense that the paper is not written for you. Both are fair responses to a paper of this size. Still, page 6 holds something anyone can enjoy: polynomials that count principally polarised abelian varieties over 𝔽<sub>q</sub>. If you like the thought that a count of objects knows about modular forms, start there. Enjoy the formulas. Finishing is not the point.

## The story

Let A<sub>n</sub> be the moduli stack of principally polarised abelian varieties of dimension n. Each algebraic representation V of GSp<sub>2n</sub> gives an ℓ-adic local system F(V) on A<sub>n</sub>. People want the alternating sum of its compactly supported cohomology, as a virtual representation of the Galois group of ℚ and of the unramified Hecke algebra. For n = 1 this is Deligne's formula with modular forms. For n = 3, Bergström, Faber and van der Geer guessed a formula from point counts. The route to a proof is the Ihara-Langlands-Kottwitz method. Kottwitz and Morel had done the geometric steps. The missing step was spectral: a trace formula expansion for groups that are only isogenous to classical groups, such as GSp<sub>2n</sub>. Taïbi supplies it in level one, where the parameters have canonical lifts to spin groups. He then converts intersection cohomology into compactly supported cohomology.

## Main definitions

**The Euler characteristic e<sub>c</sub>(A<sub>n</sub>, F(V)).** The alternating sum Σ (−1)<sup>i</sup> [H<sup>i</sup><sub>c</sub>(A<sub>n</sub> over an algebraic closure of ℚ, F(V))], taken in the Grothendieck group of continuous ℓ-adic representations of Gal<sub>ℚ</sub> with a commuting action of the unramified Hecke algebra of GSp<sub>2n</sub>.
- V trivial: by the Grothendieck-Lefschetz trace formula, knowing it amounts to knowing the weighted counts |A<sub>n</sub>(𝔽<sub>q</sub>)|, where each abelian variety counts 1/|Aut|.

**Intersection cohomology IH.** The cohomology of the minimal compactification A<sub>n</sub>\* with coefficients in the intermediate extension of F(V). It is pure, so its Euler characteristic determines each group. Compactly supported cohomology lacks this property.

**Spin Galois representation.** For a Siegel eigenform f of level Sp<sub>2n</sub>(ℤ), the Satake parameters are conjugacy classes in GSpin<sub>2n+1</sub>(ℂ). A spin Galois representation is a continuous map ρ : Gal<sub>ℚ</sub> → GSpin<sub>2n+1</sub> over an algebraic closure of ℚ<sub>ℓ</sub> whose Frobenius classes match these parameters. Composing with the 2<sup>n</sup>-dimensional spin representation gives a linear representation.
- Small cases: GSpin<sub>3</sub> ≅ GL<sub>2</sub> and GSpin<sub>5</sub> ≅ GSp<sub>4</sub>.

## Main results

**Theorem (point counts; Theorem 1).** For 1 ≤ n ≤ 6 there is a polynomial P<sub>n</sub> with integer coefficients such that |A<sub>n</sub>(𝔽<sub>q</sub>)| = P<sub>n</sub>(q) for every prime power q. For example |A<sub>2</sub>(𝔽<sub>q</sub>)| = q<sup>3</sup> + q<sup>2</sup> and |A<sub>3</sub>(𝔽<sub>q</sub>)| = q<sup>6</sup> + q<sup>5</sup> + q<sup>4</sup> + q<sup>3</sup> + 1. For n = 7 the count is not a polynomial in q: it has an extra term built from values τ(p<sup>2</sup>) of Ramanujan's function. The author says the formulas seem new for n &gt; 3.

**Theorem (spin Galois representations; Theorem 2, proved as Corollary 7.2.2).** Let f be a Siegel cusp eigenform of level Sp<sub>2n</sub>(ℤ) and weight k<sub>1</sub> ≥ … ≥ k<sub>n</sub> ≥ n + 1. Then the known SO<sub>2n+1</sub>-valued Galois representation of f has a unique continuous lift to GSpin<sub>2n+1</sub> that is unramified away from ℓ, crystalline at ℓ and has the prescribed similitude character. At every prime p ≠ ℓ the semisimplified Frobenius lies in the Satake class of f.
- Step 1: existence and uniqueness of the lift follow from results of Patrikis and Conrad.
- Step 2: the Frobenius statement is the new part. It comes from comparing with representations found in intersection cohomology. It was known for n = 1 (Deligne) and n = 2 (Weissauer).

**Theorem (intersection cohomology in level one; Theorem 4.7.2, stated loosely as Theorem 4).** For V an irreducible representation of PGSp<sub>2n</sub>, the level one intersection cohomology of A<sub>n</sub>\* is, up to semisimplification, a sum over unramified Arthur parameters ψ = ψ<sub>0</sub> ⊕ … ⊕ ψ<sub>r</sub> with infinitesimal character fixed by V. Each ψ contributes a Hecke character tensored with a Galois representation of dimension 2<sup>n−r</sup>, whose Frobenius classes are products of spin and half-spin values of the ψ<sub>i</sub>. This is an unconditional form of Kottwitz's conjecture in this case.

**Theorem (genus three; Theorem 3, proved as Theorem 9.1.1).** Conjecture 7.1 of Bergström, Faber and van der Geer, on e<sub>c</sub>(A<sub>3</sub>, F(V)), holds for ℓ-adic Galois representations.
- Step 1: Theorem 8.3.1 writes e<sub>c</sub> in terms of intersection Euler characteristics for smaller n and terms from GL<sub>1</sub> and GL<sub>2</sub>, using Morel's work and Franke's filtration.
- Step 2: specialise to n = 3 and level one.

## Note, then ignore

- The Langlands group. Section 1.3 explains the conjecture with a hypothetical group L<sub>ℚ</sub>. The proofs use Arthur's substitute parameters and never need it. Safe to skip on a first reading.
- Even orthogonal groups. Arthur's results for SO<sub>4n</sub> hold only up to an outer automorphism, so the paper refines them. Theorem 6 needs an extra regularity condition for some odd n. Safe to skip.
- Normalisations. The arithmetic Satake class is the usual one times a power of p with exponent n(n+1)/4, chosen for rationality. Safe to skip.
- Motives. The genus three conjecture was stated for motives. The theorem covers ℓ-adic realisations only. Safe to skip.
- Genus above three. The author shows that no formula of the same shape, with only lower-dimensional spin representations in the error term, can hold for n &gt; 3. Safe to skip.

## One next step

Open the PDF at page 5 and read Theorem 1 with its list of polynomials on page 6. Check the first one against what you know: |A<sub>1</sub>(𝔽<sub>q</sub>)| = q.
