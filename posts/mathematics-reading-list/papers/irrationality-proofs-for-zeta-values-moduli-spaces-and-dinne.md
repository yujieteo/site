source: https://arxiv.org/pdf/1412.6508
slogan: Reseat dinner guests so no old neighbours meet, and the seating plan gives an integral on a moduli space that reproduces Apéry's approximations.
basis: the introduction and the main theorem statements

## Before you start

The title promises dinner parties, and then page 3 brings relative cohomology of moduli spaces and mixed Tate motives. The likely feeling is a small sense of being tricked, and under it the worry that you lack the algebraic geometry. You can let that worry be there. The construction itself is a product of differences of points on a line, and needs none of it. If you have ever wanted to see where Apéry's strange integrals come from, this paper gives one source for them. Read the dinner table section for fun, and stop when it stops being fun.

## The story

Every known irrationality proof for a zeta value builds a sequence of small linear forms, such as a<sub>N</sub>ζ(3) + b<sub>N</sub>, from an integral. The integrals looked unrelated. Brown observes that after a change of variables they are all period integrals on M<sub>0,n</sub>, the space of n marked points on a sphere. That space supplies far too many candidates. A typical one mixes multiple zeta values of every weight, and an unwanted ζ(2) ruins a proof for ζ(3). So the real problem is to force coefficients to vanish. The idea is to take two cyclic seatings of n guests with no shared neighbours, and build the integrand from them. Its poles lie far from the domain of integration, the integral converges, and the middle weights drop out. For n = 5 and n = 6 the result is exactly Apéry's sequences for ζ(2) and ζ(3).

## Main definitions

**M<sub>0,n</sub> and its cell.** M<sub>0,n</sub> is the space of n distinct ordered points on the projective line up to Möbius maps. Put three points at 0, 1, ∞. Then it is the set of (t<sub>1</sub>, …, t<sub>ℓ</sub>), ℓ = n − 3, with t<sub>i</sub> ≠ 0, 1 and t<sub>i</sub> ≠ t<sub>j</sub>. The cell S<sub>n</sub> is the simplex 0 &lt; t<sub>1</sub> &lt; ⋯ &lt; t<sub>ℓ</sub> &lt; 1.

**Convergent permutation.** Let δ<sup>0</sup> be the standard cyclic order on {1, …, n}. A permutation σ is convergent if, for every k with 2 ≤ k ≤ n − 2, no set of k elements is consecutive for both δ<sup>0</sup> and σδ<sup>0</sup>.
- Case n ≤ 7: this is the classical dinner table condition, that no two old neighbours sit together again.
- Case n ≥ 8: it is strictly stronger.

**Basic cellular integral.** For a permutation σ, let f<sub>σ</sub> be the product over i mod n of (z<sub>i</sub> − z<sub>i+1</sub>)/(z<sub>σ(i)</sub> − z<sub>σ(i+1)</sub>), and let ω<sub>σ</sub> be the form dz<sub>1</sub> ⋯ dz<sub>n</sub> divided by the product of the (z<sub>σ(i)</sub> − z<sub>σ(i+1)</sub>), brought down to M<sub>0,n</sub>. Then I<sub>σ</sub>(N) = ∫<sub>S<sub>n</sub></sub> f<sub>σ</sub><sup>N</sup> ω<sub>σ</sub>.

## Main results

**Theorem (periods are multiple zeta values; Theorem 1.1, quoted from earlier work).** Every convergent period integral on M<sub>0,n</sub> is a linear combination, with coefficients in ℚ[2πi], of multiple zeta values of total weight at most ℓ.

**Theorem (convergence; Lemma 3.6).** The integral I<sub>σ</sub>(N) is finite if and only if σ is convergent. In that case the integrand vanishes to order at least N along every boundary face of the cell, which is why I<sub>σ</sub>(N) is small for large N.

**Theorem (vanishing in two weights; Theorem 11.2).** Let A and B be cellular boundary divisors of the compactified M<sub>0,n</sub> with no common component, and let m(A, B) be the relative cohomology motive whose periods are the integrals with poles on A over a cell bounded by B. Then its weight-graded pieces in degrees 2 and 2ℓ − 2 are zero, and those in degrees 0 and 2ℓ are one-dimensional.
- Consequence (Theorem 8.1): a vanishing graded piece in degree 2m removes all multiple zeta values of weight m from the linear form. So weights 1 and ℓ − 1 never appear.

**Theorem (Apéry recovered; Corollary 11.3).** For n = 5 the basic cellular integrals are linear forms in 1 and ζ(2) only. For n = 6 they are linear forms in 1 and ζ(3) only. These are Apéry's approximations.
- Larger n: one family of convergent configurations gives a one-parameter subfamily of the Ball-Rivoal linear forms in odd zeta values (Proposition 7.2).

## Note, then ignore

- No new irrationality result. The paper is a framework. It says plainly that new Diophantine consequences remain to be seen. Good to know, then safe to set aside.
- Configurations. Two permutations related by dihedral symmetries give the same integrals, so the paper counts equivalence classes called configurations. Safe to skip on a first reading.
- Denominators. An irrationality proof also needs bounds on the denominators of the coefficients. The paper only sketches how such bounds should follow. Safe to skip.
- Generalised cellular integrals. Extra integer exponents give an n-parameter family that contains the Rhin-Viola integrals. That is for a second reading.
- Zudilin's theorem. The result that one of ζ(5), ζ(7), ζ(9), ζ(11) is irrational is the one construction that may not fit the framework. Safe to skip.

## One next step

Open the paper at Section 1.5 (page 4) and look at Figure 1, the reseating of five guests. Then read the definition of f<sub>σ</sub> and ω<sub>σ</sub> just below Figure 2.
