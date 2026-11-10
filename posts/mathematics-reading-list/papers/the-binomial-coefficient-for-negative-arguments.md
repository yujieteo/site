source: https://arxiv.org/pdf/1105.3689
slogan: The gamma function gives binomial coefficients at negative integers too, and with that choice the symmetry of Pascal's triangle holds for all integers.
basis: the full text

## Before you start

This note is five pages and uses nothing past the gamma function. The feeling it may raise is a quiet doubt: "this looks too easy to be worth my time, or else I am missing something." You are allowed to have that doubt and read anyway. The note settles a question that comes up whenever a sum runs past the edge of Pascal's triangle. Enjoy it as a short walk. If you finish, good. If you only keep the one formula, also good.

## The story

Everyone knows the binomial coefficient "n choose k" for 0 ≤ k ≤ n. Many also know the extension to negative n with k ≥ 0, which gives the series for (1 + x)<sup>n</sup>. But what should the coefficient be when k is negative too? The usual answer is zero. That answer breaks the symmetry between k and n − k. The gamma-function formula does not help directly, because at these points it reads ∞/∞. The author's idea is to use the reflection formula for Γ to trade two infinite gamma values for two finite ones. The result is a three-case formula for negative n. It keeps the symmetry, and its two non-zero cases match the two different power series of (x + y)<sup>n</sup>, one valid for |x| &lt; |y| and one for |x| > |y|.

## Main definitions

**Binomial coefficient by gamma functions (1.1).** For complex x and y, define C(x, y) = Γ(x + 1) / (Γ(y + 1) Γ(x − y + 1)). Here C(x, y) stands for "x choose y".
- Nonnegative integer n, integer k: this is n!/(k!(n − k)!) for 0 ≤ k ≤ n, and 0 otherwise, because one gamma value in the denominator is infinite.
- Negative integer n, integer k: the numerator and at least one denominator factor are infinite, so the formula needs an interpretation.

**Reflection formula.** Γ(s) Γ(1 − s) = π / sin(πs). It is the only analytic input.

## Main results

**Theorem (gamma symmetry; Theorem 1.1).** For integers a, b and complex s, Γ(s − a + 1) / Γ(s − b + 1) = (−1)<sup>b−a</sup> Γ(b − s) / Γ(a − s).
- Step 1: apply the reflection formula to both sides.
- Step 2: use sin(π(b − s)) = (−1)<sup>b−a</sup> sin(π(a − s)).

**Theorem (negative upper argument; Theorem 2.1).** Let n be a negative integer and k an integer. Then C(n, k) = (−1)<sup>k</sup> C(−n + k − 1, k) if k ≥ 0. C(n, k) = (−1)<sup>n−k</sup> C(−k − 1, n − k) if k ≤ n. C(n, k) = 0 if n &lt; k &lt; 0. The right-hand sides are ordinary binomial coefficients with nonnegative entries.
- Case k ≥ 0 or k ≤ n: two of the three gamma values are infinite. Theorem 1.1 with s = 0 replaces them by finite ones.
- Case n &lt; k &lt; 0: all three are infinite. After the replacement one infinite factor remains in the denominator, so the value is 0.

**Claim (symmetry; equation 2.2).** With this definition, C(n, k) = C(n, n − k) for all integers n and k. The substitution k ↦ n − k swaps the two non-zero cases of Theorem 2.1.

**Claim (binomial theorem; Section 4).** For a negative integer n, the first case gives the coefficients of the expansion of (x + y)<sup>n</sup> in powers of x, which converges for |x| &lt; |y|. The second case gives the expansion in powers of y, which converges for |x| > |y|. For nonnegative n the two expansions are the same finite sum.

## Note, then ignore

- Where identities fail. The absorption identity C(x, y) = (x/y) C(x − 1, y − 1) fails at y = 0, and Pascal's rule C(x, y) = C(x − 1, y) + C(x − 1, y − 1) fails at x = y = 0. The author traces both to 0 · ∞. Safe to skip on a first reading.
- Continuity only in some directions. Equations (2.3) and (2.4) show that the values are limits along certain directions in the (x, y) plane, not along all. Safe to skip.
- Still infinite somewhere. For negative integer x and non-integer y the coefficient stays infinite. Safe to skip.
- Not the only convention. Many books set the coefficient to 0 for all negative k. The author argues for symmetry instead, and notes that Sprugnoli proved the same formula earlier by another method. Safe to skip.
- "Non-associative" infinitesimals. The author's wording about 0/0 in Section 3 is informal. Read it as a statement about limits taken term by term. Safe to skip.

## One next step

Open the paper and read only Theorem 2.1 on page 2. Then compute C(−1, k) for k = −3, …, 3 and check the symmetry C(−1, k) = C(−1, −1 − k).
