source: https://www.claymath.org/library/cw/arthur/pdf/62.pdf
slogan: Cut off the divergent part of the kernel in a controlled way, and the trace formula survives for every reductive group.
basis: the introduction and the main theorem statements

## Before you start

These notes run to about 260 pages, and Part II is harder than Part I. The likely feeling is overwhelm, with a little dread at the adelic notation. That is a fair response to the size of the thing. Arthur himself tells readers to bypass the demanding passages at first. If you want to know what "the trace formula" means when people cite it, the first six sections already answer that. Read those for pleasure. Finishing the rest is optional.

## The story

For a discrete subgroup Γ of a group H, people want to split L<sup>2</sup>(Γ\H) into irreducible representations. When Γ\H is compact, Selberg gave a tool. Integrate a test function f against the action, get an operator R(f) with kernel K(x, y) = Σ f(x<sup>-1</sup>γy), and compute its trace in two ways. One way sums over conjugacy classes, the other over representations. For H = ℝ and Γ = ℤ this is Poisson summation. The block: for G(ℚ)\G(𝔸) with G = GL(n) or SL(n), the quotient is not compact, R(f) has no trace, and the integral of K(x, x) diverges. Arthur's idea is truncation. Subtract correction terms, one for each parabolic subgroup, supported near infinity. The corrected kernel is integrable. What comes out is the coarse trace formula, which Part II then refines three times.

## Main definitions

**Kernel.** For f in C<sub>c</sub><sup>∞</sup>(G(𝔸)), the operator R(f) on L<sup>2</sup>(G(ℚ)\G(𝔸)) is an integral operator with kernel K(x, y) = Σ f(x<sup>-1</sup>γy), summed over γ in G(ℚ).
- Compact quotient: R(f) is of trace class and its trace is the integral of K(x, x).
- Non-compact quotient: that integral diverges in general.

**Orbital integral.** For γ in H, the orbital integral of f is the integral of f(x<sup>-1</sup>γx) over x in H<sub>γ</sub>\H, where H<sub>γ</sub> is the centraliser of γ. These are the terms on the geometric side.

**Truncated kernel k<sup>T</sup>(x).** A signed sum over standard parabolic subgroups P. The term for P is the sum, over δ in P(ℚ)\G(ℚ), of an analogous kernel K<sub>P</sub>(δx, δx), cut off by a characteristic function that depends on a point T in a cone. The sign is (−1) to the power dim(A<sub>P</sub>/A<sub>G</sub>).
- The term P = G is K(x, x) itself.
- The other terms live near infinity, so k<sup>T</sup> equals K(x, x) on a large compact set.

## Main results

**Theorem (Selberg trace formula for compact quotient; formula (1.3)).** If Γ\H is compact and f is such that R(f) is of trace class, then Σ vol(Γ<sub>γ</sub>\H<sub>γ</sub>) · (orbital integral of f at γ) = Σ m(π) · tr π(f). The left sum runs over conjugacy classes in Γ. The right sum runs over irreducible unitary representations π of H, with m(π) the multiplicity in L<sup>2</sup>(Γ\H).
- Step 1: write tr R(f) as the integral of K(x, x) and group the sum over γ by conjugacy class.
- Step 2: decompose L<sup>2</sup>(Γ\H) discretely and take the trace on each piece.

**Theorem (convergence of the truncated integral; Theorem 6.1).** For G connected reductive over ℚ and T suitably regular, the integral J<sup>T</sup>(f) of k<sup>T</sup>(x, f) over G(ℚ)\G(𝔸)<sup>1</sup> converges absolutely.
- Step 1: use reduction theory to split the quotient into pieces attached to parabolic subgroups.
- Step 2: on each piece, an alternating sum cancels the divergent terms. The cancellation rests on the binomial identity Σ (−1)<sup>|F|</sup> = 0 over subsets F of a non-empty finite set.

**Theorem (polynomial in T; Theorem 9.1).** For T sufficiently regular, T ↦ J<sup>T</sup>(f) is a polynomial in T. Its degree is at most the dimension of the space where T lives modulo the centre. Evaluating at a special point T<sub>0</sub> defines the linear form J(f) (Proposition 9.3).

**Theorem (coarse expansions; Corollary 10.1 and Theorem 14.1).** J<sup>T</sup>(f) is an absolutely convergent sum of terms indexed by classes 𝔬 on the geometric side, and also of terms indexed by cuspidal data χ on the spectral side. Equating the two sums gives the coarse trace formula. I state only this shape. The exact terms are in §10 and §14.

## Note, then ignore

- Working over ℚ. Part I uses ℚ instead of a general number field to keep notation light. Safe to skip on a first reading.
- G(𝔸)<sup>1</sup> versus G(𝔸). The superscript removes a central factor so that volumes are finite. Safe to skip at first.
- Dependence on choices. J(f) depends on a maximal compact subgroup and is not invariant under conjugation of f. Sections 22 and 23 repair this. Safe to skip at first.
- No "Proof" headings. Arthur gives sketches and marks their end with a small box. Complete proofs are in the cited papers. Safe to skip at first.
- The fundamental lemma. In 2005 the stable trace formula of §29 was conditional on it. This only affects the last sections. Safe to skip at first.

## One next step

Open the notes at §1 and read the half page that derives formula (1.3), then the remark that H = ℝ, Γ = ℤ gives Poisson summation.
