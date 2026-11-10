source: https://otaibi.perso.math.cnrs.fr/levelone/mot23.pdf
slogan: Proving that many level 1 cusp forms cannot exist turns the trace formula into a linear system, which then counts the ones that do.
basis: the introduction and the main theorem statements

## Before you start

The paper runs past 60 pages and leans on Arthur's endoscopic classification, the trace formula and Weil's explicit formula. The likely feeling is shame at not owning that background. You can feel it and still read. The introduction is self-contained and has a worked example for SO<sub>3</sub> that needs only classical modular forms. If you ever wanted to see why dim S<sub>2k</sub>(SL<sub>2</sub>(ℤ)) has the formula it has, from an unexpected direction, that example is for you. Read it for the pleasure of the trick. The rest is optional.

## The story

People want the dimension of the space of Siegel cusp forms for Sp<sub>2g</sub>(ℤ) in each weight. Arthur's trace formula gives it, but the geometric side contains rational numbers called masses, built from orbital integrals. Taïbi computed them for g ≤ 7 with heavy case-by-case algorithms. Chenevier and Taïbi turn the problem around. Weil's explicit formula can show that no level 1 algebraic cusp form on GL<sub>m</sub> exists with certain weights. Each such vanishing fixes the spectral side of the trace formula for one weight. That gives one linear equation in the unknown masses. Enough vanishings give an invertible system. Solve it, and the trace formula now computes every dimension. So the forms that exist are counted by first proving that many others do not.

## Main definitions

**Level 1 algebraic cusp form on GL<sub>m</sub>.** A cuspidal automorphic representation π of PGL<sub>m</sub> over ℚ, unramified at every prime, whose infinitesimal character at the real place has eigenvalues w<sub>1</sub> ≥ … ≥ w<sub>m</sub> in ½ℤ with all differences in ℤ.
- The w<sub>i</sub> are the weights of π. The motivic weight is 2w<sub>1</sub>.
- N(w) counts such π with weights w. N<sup>⊥</sup>(w) counts the self-dual ones.

**Split classical group over ℤ.** The group scheme Sp<sub>2g</sub>, or the special orthogonal group SO<sub>n</sub> of a standard split quadratic form over ℤ.

**Euler–Poincaré characteristic EP(G; λ).** For a dominant weight λ of G, the alternating sum of the dimensions of the (𝔤, K)-cohomology of square-integrable level 1 automorphic forms on G, twisted by the dual of the representation V<sub>λ</sub>. It is the spectral side of Arthur's L<sup>2</sup>-Lefschetz trace formula.

**Mass.** The elliptic part of the geometric side is Σ m<sub>c</sub> · tr(c | V<sub>λ</sub>), a sum over classes c of finite order elements of G(ℚ). The rational number m<sub>c</sub> is the mass of c. It is a sum of volumes times orbital integrals and does not depend on λ.

## Main results

**Theorem (dimensions of Siegel cusp forms; Theorem 1).** There is an explicit, implemented formula for dim S<sub>k</sub>(Sp<sub>2g</sub>(ℤ)) for every g ≤ 8 and every vector-valued weight k = (k<sub>1</sub> ≥ … ≥ k<sub>g</sub>) with k<sub>g</sub> > g.
- Step 1: the dimension is an explicit function of finitely many N<sup>⊥</sup>(w), by Arthur's classification (Key fact 1).
- Step 2: the masses, hence the N<sup>⊥</sup>(w), come from the linear system (Theorems 6 and 7).

**Theorem ("effortless" masses; Theorem 6).** For G = SO<sub>n</sub> with n ≤ 17 and G = Sp<sub>2n</sub> with 2n ≤ 14, the vanishing method alone determines all masses m<sub>c</sub>. Theorem 7 adds Sp<sub>16</sub>, but needs Taïbi's earlier algorithms as well.
- Step 1: find a finite set Λ of weights λ with N<sup>⊥</sup>(w(λ)) = 0, using the explicit formula for Rankin–Selberg L-functions.
- Step 2: check that the matrix of traces tr(c | V<sub>λ</sub>) has full rank, and solve.

**Theorem (motivic weight 23; Theorem 3).** There are exactly 13 level 1 cuspidal algebraic automorphic representations of GL<sub>m</sub> over ℚ, m varying, of motivic weight 23 in which the weight 23/2 has multiplicity 1. They live on PGL<sub>2</sub> (2 of them), PGL<sub>4</sub> (3), PGL<sub>6</sub> (7) and PGL<sub>10</sub> (1). All are self-dual symplectic and determined by their weights.

**Theorem (motivic weight 24; Theorem 5).** There are exactly 3 level 1 cuspidal algebraic self-dual representations of PGL<sub>m</sub>, m varying, with motivic weight 24 and regular weight. Their weights are {±12, ±8, ±4, 0}, {±12, ±9, ±5, ±2} and {±12, ±10, ±7, ±1}.
- The existence was known. The new part is that there are no others.

## Note, then ignore

- Weights of small size. Theorem 2 treats scalar weights k ≤ 13 in every genus, including k ≤ g, where the lowest-weight module is not a discrete series. This needs extra results of Moeglin and Renard. Safe to skip on a first reading.
- GRH. Theorem 4 and some finiteness statements in weight 24 assume a form of the generalised Riemann hypothesis. The theorems listed above do not. Safe to skip.
- Regular weights. "Regular" allows one repeated weight 0 when m is divisible by 4. This matches even orthogonal groups. Safe to skip.
- Reduced class sets. Some classes c have mass 0 for a structural reason, so the paper solves a smaller system (Remark 1.1). Safe to skip.
- Multiplicity above 1. The authors could not classify weight 23 forms in which 23/2 occurs twice. They only bound the possible weights. Safe to skip.

## One next step

Open the paper at page 11 and read only "A simple example" in Section 1.4: the 5 × 5 linear system for SO<sub>3</sub> that recovers the dimension of S<sub>2k</sub>(SL<sub>2</sub>(ℤ)).
