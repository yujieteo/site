source: https://terrytao.wordpress.com/2014/12/09/254a-notes-2-complex-analytic-multiplicative-number-theory/
slogan: Primes are counted by the zeros of ζ, so every region with no zeros becomes an error bound in the prime number theorem.
basis: the page itself

## Before you start

These notes run to roughly twenty thousand words with over sixty exercises, and the likely feeling is "I am too slow for this". That feeling makes sense for a text paced for a graduate class. Let it sit beside you. If you want to see why zeros of ζ control primes, the opening section already gives the whole picture in heuristic form. Read that part for pleasure. The rest can wait, or never happen.

## The story

Elementary methods estimate sums such as Σ<sub>n≤x</sub> Λ(n) directly, and they stall before the prime number theorem. The complex method studies the Dirichlet series instead, and lets s leave the real line. For Λ the series is −ζ′/ζ. It has a pole at s = 1 and a pole at every zero ρ of ζ. A contour integral (Perron's formula) turns each pole into a term of the sum. The pole at 1 gives the main term x, and each zero gives a wave x<sup>ρ</sup>/ρ. So the primes are a main term minus oscillations, one per zero. The further left the zeros sit, the smaller the error. The same plan works for Dirichlet L-functions and primes in arithmetic progressions, except for one possible real zero close to 1.

## Main definitions

**Dirichlet series.** For an arithmetic function f of size n<sup>o(1)</sup>, set 𝒟f(s) = Σ f(n)/n<sup>s</sup>. It converges absolutely for Re(s) > 1.
- ζ = 𝒟1, and L(s, χ) = 𝒟χ(s) for a Dirichlet character χ.
- 𝒟Λ = −ζ′/ζ, where Λ is the von Mangoldt function.

**von Mangoldt function.** Λ(n) = log p if n is a power of a prime p, and 0 otherwise. The prime number theorem is the statement Σ<sub>n≤x</sub> Λ(n) = x + o(x).

**Critical strip and zeros.** The strip is 0 ≤ Re(s) ≤ 1. The function ζ extends meromorphically into it, with a simple pole at s = 1 of residue 1. "Zeros" means zeros ρ of this extension, counted with multiplicity.

**Exceptional (Siegel) zero.** A real zero β of L(s, χ) with 1 − c/log(2q) &lt; β &lt; 1, where q is the period of χ and c is a small absolute constant. It can occur only for a non-principal real character.

## Main results

**Theorem (truncated explicit formula; Theorem 21).** For 0 &lt; ε &lt; 1 and x, T ≥ 2, Σ<sub>n≤x</sub> Λ(n) = x − Σ x<sup>ρ</sup>/ρ + O<sub>ε</sub>(x<sup>ε</sup> log² T + (x/T) log² x). The sum is over zeros ρ with Re(ρ) ≥ ε and |Im(ρ)| ≤ T.
- Step 1: the truncated Perron formula (Proposition 12) writes the left side as a contour integral of −ζ′/ζ times x<sup>s</sup>/s.
- Step 2: shift the contour left to Re(s) = ε and collect residues at s = 1 and at each ρ.

**Proposition (zeros and error terms; Propositions 24 and 31).** For 0 &lt; δ ≤ 1/2, the bound Σ<sub>n≤x</sub> Λ(n) = x + O(x<sup>1−δ</sup> log² x) holds for all x ≥ 2 if and only if every zero has real part at most 1 − δ. The prime number theorem holds if and only if every zero has real part strictly less than 1.

**Theorem (classical zero-free region; Proposition 38 and Corollary 39).** There is an absolute constant c > 0 such that ζ has no zero β + it with β > 1 − c/log(2 + |t|). Hence Σ<sub>n≤x</sub> Λ(n) = x + O(x exp(−c√(log x))) for some absolute c > 0.
- Step 1: a zero at or near 1 + it would mean that Λ(n) "conspires" with n<sup>it</sup>, and that would force pole-like behaviour of ζ near 1 + 2it, where there is none.
- Step 2: feed the region into the explicit formula with T = exp(c<sub>1</sub>√(log x)).

**Theorem (Siegel; Theorem 62).** For every ε > 0 there is c<sub>ε</sub> > 0 with L(1, χ) ≥ c<sub>ε</sub> q<sup>−ε</sup>, and with no zero of L(s, χ) in the interval [1 − c<sub>ε</sub> q<sup>−ε</sup>, 1], for all real primitive characters χ of conductor q except at most one. The constant is effective in this form. Covering the one exception as well makes the constant ineffective.

## Note, then ignore

- Functional equation not used. The notes prove all of this without the functional equation of ζ, which they leave to a supplement. Safe to skip on a first reading.
- Form of the Riemann hypothesis. Conjecture 28 says all zeros have real part at most 1/2. With the functional equation this equals the usual statement. Safe to skip.
- Truncations. The parameters T and ε cut the sum over zeros to a finite one. They are tools, and the heuristic formula Λ(n) ≈ 1 − Σ n<sup>ρ−1</sup> is the thing to keep. Safe to skip.
- Ineffective constants. In Siegel's theorem, and in the Siegel–Walfisz theorem (Exercise 64), a constant exists but cannot be computed. This matters for explicit bounds only. Safe to skip.
- Supplements. Proofs lean on Supplement 2 for local factorisation of meromorphic functions and for Fourier inversion. You can take those as black boxes. Safe to skip.

## One next step

Open the page and read only the opening section down to the numbered list of five regions of the complex plane, stopping at formula (4). That is the whole story in heuristic form.
