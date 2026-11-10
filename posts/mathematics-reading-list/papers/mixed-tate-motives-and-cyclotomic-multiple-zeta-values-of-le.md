source: https://arxiv.org/pdf/2408.15975
slogan: When N is a power of 2 or 3, iterated integrals at N-th roots of unity give every period of mixed Tate motives over ℤ[μ<sub>N</sub>, 1/N].
basis: the introduction and the main theorem statements

## Before you start

The statement uses motivic periods, a motivic Galois group and a coradical filtration before page 3. The likely feeling is fear of being lost in the vocabulary. That is a fair response to a research paper written for specialists. If you want to see what a complete answer to "which numbers are periods here?" looks like, this paper gives one in a single line. Enjoy the statement first. The proof is combinatorics that can wait.

## The story

Periods of mixed Tate motives are a basic class of numbers. Nobody knows how to construct all of them. Goncharov conjectured that iterated integrals on the projective line with singularities in a number field K are enough. That is open for every K. A sharper version restricts the singular points to 0 and the N-th roots of unity, and asks for the periods of the matching category of motives. Call this P(N). It fails for primes N ≥ 5 (Goncharov). It holds for N = 1 (Brown) and N = 2, 3, 4, 8 (Deligne). Hirose proves it for every power of 2 or 3. The method grades the Hopf algebra of periods by depth, and shows that a short explicit list of integrals is a basis of each graded piece.

## Main definitions

**Iterated integral.** For points a<sub>0</sub>, ..., a<sub>k+1</sub> and a path γ from a<sub>0</sub> to a<sub>k+1</sub>, I<sub>γ</sub>(a<sub>0</sub>; a<sub>1</sub>, ..., a<sub>k</sub>; a<sub>k+1</sub>) is the integral over 0 &lt; t<sub>1</sub> &lt; ... &lt; t<sub>k</sub> &lt; 1 of the product of dγ(t<sub>j</sub>)/(γ(t<sub>j</sub>) − a<sub>j</sub>). The weight is k. The depth is the number of non-zero a<sub>j</sub> with 1 ≤ j ≤ k.
- Motivic lift: when the a<sub>j</sub> lie in K there is an element I<sup>m</sup> in the ring H(K) of motivic periods that the period map sends to I.

**The category MT(K, Γ).** MT(K) is the category of mixed Tate motives over a number field K, and Ext<sup>1</sup>(ℚ(n), ℚ(n+1)) = K<sup>×</sup> ⊗ ℚ. For a subspace Γ of K<sup>×</sup> ⊗ ℚ, MT(K, Γ) keeps the motives whose two-step subquotients have extension class in Γ. Its ring of effective motivic periods is H(K, Γ).
- Case used: K = ℚ(ζ<sub>N</sub>) and Γ<sub>N</sub> spanned by 1 − v for N-th roots of unity v ≠ 1.
- For N a power of 2 or 3 this category is MT(ℤ[μ<sub>N</sub>, 1/N]) (Remark 8).

**Statement P(N).** The ring H(ℚ(ζ<sub>N</sub>), Γ<sub>N</sub>) is spanned over ℚ by motivic iterated integrals with all a<sub>j</sub> in {0} ∪ μ<sub>N</sub> (Definition 2).

**Coradical filtration.** Put A = H modulo the motivic 2πi. A is a Hopf algebra. C<sub>0</sub>A = ℚ, and C<sub>d</sub>A is the set of u with Δ(u) − 1 ⊗ u in A ⊗ C<sub>d−1</sub>A. Integrals of depth at most d lie in C<sub>d</sub>A.

## Main results

**Theorem (spanning; Theorem 6).** P(N) holds if N is a power of 2 or 3.
- Step 1: it is enough to prove the graded statement P(N, k, d) for every weight k and depth d. That is Theorem 10.
- Step 2: by Remark 7, P(N) is the same as saying the motivic Galois group acts faithfully on the motivic fundamental group of 𝔾<sub>m</sub> minus μ<sub>N</sub>.

**Theorem (explicit basis; Theorem 11).** Let N = q p<sup>M</sup> with p in {2, 3}, q = 6 − p and M ≥ 0. So N = 4 · 2<sup>M</sup> or N = 3 · 3<sup>M</sup>. Fix a primitive N-th root ζ<sub>N</sub> and let ν<sub>N</sub> be the set of powers ζ<sub>N</sub><sup>m</sup> with m ≡ 1 mod q. Then for k ≥ d ≥ 0 a ℚ-basis of the depth-d graded piece of A in weight k is the set of classes of I(0; ε<sub>1</sub>, 0, ..., 0, ε<sub>2</sub>, 0, ..., 0, ..., ε<sub>d</sub>, 0, ..., 0; 1) with all ε<sub>i</sub> in ν<sub>N</sub>, where l<sub>i</sub> zeros follow ε<sub>i</sub> and l<sub>1</sub> + ... + l<sub>d</sub> = k − d.
- Step 1: Goncharov's coproduct formula computes the coproduct on depth-graded integrals.
- Step 2: the coproduct identifies gr<sub>d</sub>A with gr<sub>1</sub>A ⊗ gr<sub>d−1</sub>A, so the claim becomes a statement in linear algebra, proved by showing a certain map is unipotent.

**Corollary (numbers; Corollary 12).** With N as above, every cyclotomic multiple zeta value of level N, weight k and depth d is a ℚ-linear combination of powers of 2πi times cyclotomic multiple zeta values from an explicit short list of depth at most d.

**Theorem (earlier limits; Theorems 3, 4, 5).** P(N) fails for every prime N ≥ 5 (Goncharov). P(N) holds for N in {2, 3, 4, 8} (Deligne) and for N = 1 (Brown).

## Note, then ignore

- N = 1 and N = 2. The paper does not reprove these cases. A footnote says Brown and Deligne cover them. Safe to skip on a first reading.
- Depth and N = 1. The graded statement P(1, 12, 2) is false, because of the weight 12 cusp form. So the graded statement is stronger than P(N), and Brown's case needs another method. Safe to skip.
- Conjectural injectivity. The period map from motivic periods to ℂ is only conjecturally injective. The theorems are about motivic periods, and Corollary 12 follows by applying the map. Safe to skip.
- N ≤ 8 versus N ≥ 9. Remark 26 explains that two terms vanish for N = 3, 4, 8 and not beyond. That is where the new work lies. Safe to skip.
- Tangential base points. They allow a<sub>0</sub> = a<sub>1</sub> or a<sub>k</sub> = a<sub>k+1</sub>. This is regularisation. Safe to skip.

## One next step

Open the paper and read page 2 only: Conjecture 1, Definition 2 and Theorems 3 to 6.
