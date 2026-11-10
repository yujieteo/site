source: https://arxiv.org/pdf/2211.04866
slogan: Loosen the triangle inequality and one group over ℤ appears whose real points are O<sub>n</sub>(ℝ) and whose p-adic points are GL<sub>n</sub>(ℤ<sub>p</sub>).
basis: the introduction and the main theorem statements

## Before you start

Most of this paper is bookkeeping: norms, constants, modules, tensor products, each checked twice for two parallel settings. That can raise boredom, and then guilt about being bored. Both are fine to feel. You do not owe the lemmas your attention. The payoff is one statement that explains why the orthogonal group and GL<sub>n</sub>(ℤ<sub>p</sub>) behave like twins. If that analogy interests you, go to it directly and enjoy it. The foundations can wait, or be left.

## The story

Number theorists treat the real place and the p-adic places as equals. In that spirit, O<sub>n</sub>(ℝ) and GL<sub>n</sub>(ℤ<sub>p</sub>) play the same role: each is a maximal compact subgroup of GL<sub>n</sub>. Yet one is cut out by an equation and the other by integrality. The authors want one object that gives both. They also want a flow that raises a norm to the power t, as you can do p-adically. The block is the triangle inequality. The square of the usual absolute value on ℤ fails it. So they weaken the inequality, and call the resulting normed rings Banach halos. Over the halo ℤ with its usual absolute value they then define a group of "short isometries": matrices that are isometries and do not increase norms. Its real points are O<sub>n</sub>(ℝ). Its p-adic points are GL<sub>n</sub>(ℤ<sub>p</sub>).

## Main definitions

**Short and Lipschitz maps.** A normed set is a set X with any function |·| : X → [0, ∞). A map f is Lipschitz if |f(x)| ≤ C|x| for some constant C, and short if C = 1 works.

**Banach halo.** A ring R with a function |·| : R → [0, ∞) that vanishes only at 0, has |1| = 1, is complete, and satisfies a weakened triangle inequality.
- Short halo: |f − g| ≤ (|f|<sup>p</sup> + |g|<sup>p</sup>)<sup>1/p</sup> for a fixed p ∈ (0, ∞], and |fg| ≤ |f||g|. The case p = 1 gives ordinary Banach rings. The case p = ∞ is the ultrametric inequality.
- Lipschitz halo: |f − g| ≤ C max(|f|, |g|) and |fg| ≤ D|f||g|, for fixed constants C, D. This form goes back to Artin.

**The flow.** For t > 0, σ<sub>t</sub> replaces |·| by |·|<sup>t</sup> and p by p/t (or C, D by C<sup>t</sup>, D<sup>t</sup>). Halos are stable under it. Banach rings are not: σ<sub>2</sub> of (ℤ, usual absolute value, p = 1) is (ℤ, its square, p = 1/2).

**Short isometry group SIso(C, σ).** Let C be a coalgebra with involution σ over a commutative Lipschitz halo R. For a commutative R-algebra S, SIso(C, σ)(S) is the set of elements a of C<sup>∨</sup> ⊗ S with a·σ(a) = σ(a)·a = 1, such that products a(c<sub>0</sub>)⋯a(c<sub>n−1</sub>) are bounded by D|c<sub>0</sub>|⋯|c<sub>n−1</sub>| for one constant D and all n.
- Meaning: the equation says "isometry". The bound says "does not increase norms", at least when S is uniform and D<sub>R</sub> = 1 (Proposition 20).

## Main results

**Proposition (representability; Proposition 14).** Let (C, σ) be a coalgebra with involution over R. Suppose the natural map C<sup>∨</sup> ⊗<sub>R</sub> S → Hom<sub>S</sub>(C ⊗<sub>R</sub> S, S) is an isomorphism for every R-algebra S. Then SIso(C, σ) is represented by a quotient of the symmetric algebra Sym<sub>R</sub>(C), with relations that express a·σ(a) = 1.
- Step 1: the coalgebra structure makes Sym<sub>R</sub>(C) a bialgebra.
- Step 2: the quotient by the relations is a Hopf algebra, and its points are the short isometries.

**Theorem (the group K<sub>n</sub>; Theorem 1).** There is an explicit Lipschitz coalgebra with involution over ℤ with its usual absolute value, whose short isometry group K<sub>n</sub> is representable and sits inside GL<sub>n</sub>. Its points satisfy K<sub>n</sub>(ℝ) ≅ O<sub>n</sub>(ℝ), K<sub>n</sub>(ℚ<sub>p</sub>) ≅ GL<sub>n</sub>(ℤ<sub>p</sub>), and K<sub>n</sub>(ℤ) ≅ O<sub>n</sub>(ℝ) ∩ GL<sub>n</sub>(ℤ). Here ℝ carries the usual absolute value and ℚ<sub>p</sub> the p-adic one.
- Real case (Proposition 24): with the ℓ<sup>2</sup> operator norm, a matrix U with U and U<sup>−1</sup> both short is orthogonal.
- p-adic case (Proposition 25): with the max norm, U and U<sup>−1</sup> both short means both have entries in ℤ<sub>p</sub>.

## Note, then ignore

- Two settings in parallel. Every definition comes in a "short" and a "Lipschitz" version, and the paper writes Σ for either. The main theorem lives in the Lipschitz one. Safe to skip the difference on a first reading.
- The constant p<sub>R</sub> is data. A halo remembers which exponent p it uses, and morphisms must respect it. This makes categories behave. Safe to skip.
- Binary trees. Section 2.3.3 uses trees to define norms on direct sums in the Lipschitz case, because the weak inequality is not associative. Safe to skip.
- Pairs (U, U<sup>−1</sup>). The coalgebra is dual to End(V) × End(V<sup>∨</sup>), so a point is a pair of a matrix and its inverse. This is how GL<sub>n</sub> becomes an isometry group. Safe to skip.
- No initial halo. There is no initial commutative short Banach halo, since the norms |·|<sup>t</sup> on ℤ have no limit as t → ∞. The authors suggest pro-objects. Safe to skip.

## One next step

Open the paper at the table of analogies in the Introduction (page 3) and read its last row, "Symmetries". Then read Theorem 1 in Section 3.2.
