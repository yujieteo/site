source: https://arxiv.org/pdf/2606.06008
slogan: Wu's formula from topology works for schemes over rings of integers, and it turns Hecke's theorem on the different into one of many congruences.
basis: the introduction and the main theorem statements

## Before you start

The paper is 93 pages and its engine room uses étale homotopy types, spectra and Tate constructions. The feeling it is likely to raise is fear of being out of your depth before page 10. That fear makes sense given the toolkit, and you need not fight it. The paper ties together five results you may have met separately, from Hecke on the different to Atiyah on theta characteristics, and the tie is a formula from a first course on characteristic classes. The introduction tells that story with a worked example. Enjoy those seven pages and count the rest as a bonus.

## The story

Hecke proved that the ideal class of the different of a number field is a square. Atiyah proved that the canonical bundle of a compact Riemann surface has a square root. These look unrelated. In topology, the second follows from Wu's formula. The Wu class v of a closed manifold records how Steenrod squares pair with the fundamental class. It equals Sq<sup>−1</sup> of the Stiefel–Whitney class, and it vanishes above half the dimension. Comparing the two facts gives mod 2 congruences among characteristic classes. For a Riemann surface the congruence is c<sub>1</sub> = 0 mod 2. Feng proved an étale Wu formula over finite fields. The block over rings of integers is the real places, where duality needs a modified cohomology with no Steenrod squares yet defined. The authors build the squares and prove the formula. Three extra trivial line bundles appear, which account for the base.

## Main definitions

**Wu class (topology).** For a closed n-manifold M, the total Wu class v<sub>M</sub> is the unique mod 2 class with ∫ Sq(x) = ∫ x · v<sub>M</sub> for all x. Its components v<sub>M,i</sub> vanish for i > n/2, by instability of Steenrod squares and Poincaré duality.

**Modified compactly supported cohomology.** For X separated of finite type over ℤ, it is the fibre of the map from compactly supported étale cochains to the Tate construction of complex conjugation acting on the compactly supported cochains of X<sub>ℂ</sub>. Its groups are written Ĥ<sup>q</sup><sub>c</sub>(X; 𝔽<sub>2</sub>).
- Why: Artin–Verdier duality over a ring of integers pairs ordinary étale cohomology with this theory, in total degree 2d + 3.

**Étale 2-Todd class.** For a virtual bundle ξ on X, 2td(ξ) = Sq<sup>−1</sup>(w<sub>ét</sub>(ξ)), where w<sub>ét</sub> is the total étale Stiefel–Whitney class and Sq<sup>−1</sup> is the inverse of the total Steenrod square.
- The series: T(t) = 1 + Σ<sub>s≥0</sub> t<sup>2<sup>s</sup></sup>, the mod 2 reduction of 2t/(1 − e<sup>−2t</sup>).

**The class β.** β<sub>X</sub> ∈ H<sup>1</sup><sub>ét</sub>(X; 𝔽<sub>2</sub>) is the Kummer class of −1. It vanishes when −1 is a square on X.

## Main results

**Theorem (Wu, 1952; Theorem 1.1).** For a closed connected smooth manifold M, Sq(v<sub>M</sub>) = w<sub>M</sub>, the total Stiefel–Whitney class.

**Theorem (arithmetic Wu formula; Theorem 1.2).** Let B = Spec O<sub>K,S</sub> for a number field K, with 2 invertible. Let f : X → B be flat and projective of pure relative dimension d, with X regular. Then Ĥ<sub>c</sub> carries canonical stable Steenrod operations. They define, through Artin–Verdier duality, a total Wu class v<sub>X</sub>, and v<sub>X</sub> = Sq<sup>−1</sup>(w<sub>ét</sub>(τ<sub>f</sub> + O<sub>X</sub><sup>⊕3</sup>)), with τ<sub>f</sub> the virtual relative tangent bundle. Over a finite field of odd characteristic the formula holds without the three trivial summands.
- Step 1: prove a relative Wu formula for pushforwards on Ĥ<sub>c</sub> (Theorem 4.18), by factoring a map into a regular closed immersion and a projective bundle, following Benoist.
- Step 2: compute the Wu class of the base, v<sub>B</sub> = T(β<sub>B</sub>)<sup>3</sup>, from the Tate cohomology rings at the real places (Theorem 4.13).

**Theorem (generalised Hecke theorem; Theorem 1.5).** Let B be as above, or the spectrum of a finite field of odd characteristic, and set N<sub>X</sub> = 2(d + dim B) + 1. There are universal polynomials P<sub>m,r</sub> over 𝔽<sub>2</sub> in β and Chern classes with 2td(ξ)<sub>m</sub> = P<sub>m,r</sub>(β<sub>X</sub>, c<sub>1</sub>(ξ), …) for ξ of rank r. For every m with 2m > N<sub>X</sub>, the component v<sub>X,m</sub> is congruent to 0 modulo an explicit ideal J<sub>∞</sub>(X) determined by the real places.
- Case of vanishing: v<sub>X,m</sub> = 0 on the nose over finite fields, when K is totally imaginary, or when β<sub>X</sub> = 0.
- Case of real points: if X has a real point at some real place, then v<sub>X,2<sup>s</sup></sub> ≠ 0 whenever 2<sup>s</sup> ≥ d + 3 (Corollary 5.15).

**Example (Example 1.6).** For X regular, flat and projective of relative dimension 4 over ℤ[i, 1/2], the Chern classes c<sub>i</sub> of τ<sub>f</sub> satisfy c<sub>1</sub>c<sub>2</sub> = 0 and c<sub>1</sub><sup>4</sup> + c<sub>1</sub>c<sub>3</sub> + c<sub>2</sub><sup>2</sup> + c<sub>4</sub> = 0 in mod 2 étale cohomology.

## Note, then ignore

- 2 is inverted. Every base has 2 invertible, so Hecke's theorem is recovered only "away from 2". Characteristic 2 needs syntomic methods from other work. Safe to skip on a first reading.
- Completed cohomology. Total classes live in a product over all degrees, since arithmetic bases have cohomology in infinitely many degrees at real places. Identities are read degree by degree. Safe to skip.
- Instability can fail. On the modified theory, Sq<sup>i</sup> need not vanish above the degree, and the defects come from the Tate boundary (Theorem 3.21). This is why the ideal J<sub>∞</sub> appears. Safe to skip.
- No shortcut from finite fields. Appendix A shows that knowing the formula on every closed fibre does not imply it globally. Safe to skip.
- Tate twists. Mod 2 twists are identified with 𝔽<sub>2</sub> by a fixed convention. Safe to skip.

## One next step

Open the paper at page 4 and read Theorem 1.1 and the paragraph after it, where Wu's formula gives χ(M) even for a Riemann surface.
