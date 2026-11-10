source: https://wstein.org/projects/168/kevin_mcgown/bernproj.pdf
slogan: One zeta value, a known denominator and a rounding step give a single Bernoulli number exactly, with no need for the earlier ones.
basis: the full text

## Before you start

This one is five pages, and the feeling it may raise is doubt: "this is too easy to count as real mathematics". You are allowed to feel that, and to enjoy an easy paper anyway. If you want to see the link between ζ and the Bernoulli numbers do actual work, here it turns into six lines of algorithm. Enjoy the example first. Finishing is a side effect.

## The story

The Bernoulli numbers B<sub>m</sub> obey a recurrence. It gives B<sub>m</sub> from all of B<sub>0</sub>, …, B<sub>m−1</sub>. That is fine for a table, but slow for one large m. It sums about m(m+1)/2 terms and stores every earlier value.

Euler's formula offers another route. It writes |B<sub>m</sub>| as an explicit constant times ζ(m), and ζ(m) is easy to approximate for large m because the Euler product converges fast. An approximation is still only a decimal. The unblocking idea is that the denominator of B<sub>m</sub> is known in advance, by the theorem of Clausen and von Staudt. So you multiply by the denominator, compute to an error below 1, and round up. The paper credits the method to the PARI source code, written by Henri Cohen and refined by Karim Belabas.

## Main definitions

**Bernoulli numbers.** The numbers B<sub>m</sub> are defined by t/(e<sup>t</sup> − 1) = Σ B<sub>m</sub> t<sup>m</sup>/m!, summed over m ≥ 0. Write B<sub>m</sub> = a/d in lowest terms with d ≥ 1.
- Recurrence: B<sub>0</sub> = 1 and (m+1)B<sub>m</sub> = −Σ<sub>k&lt;m</sub> C(m+1, k) B<sub>k</sub>, where C is the binomial coefficient.
- Sign and vanishing: B<sub>m</sub> = 0 for odd m ≥ 3, and for even m ≥ 2 the sign of B<sub>m</sub> is (−1)<sup>m/2+1</sup>.

**Zeta function and Euler product.** For real s > 1, ζ(s) = Σ n<sup>−s</sup> = Π (1 − p<sup>−s</sup>)<sup>−1</sup>, with the product over all primes p.

**The constant K.** For even m, set K = 2·m!/(2π)<sup>m</sup>. Then Euler's formula reads |B<sub>m</sub>| = K ζ(m).

## Main results

**Theorem (Euler; quoted from Ireland and Rosen).** For every integer m ≥ 1, 2ζ(2m) = (−1)<sup>m+1</sup> (2π)<sup>2m</sup> B<sub>2m</sub>/(2m)!. The paper quotes this and does not prove it.

**Theorem (Clausen and von Staudt; quoted).** For even m ≥ 2, the denominator d of B<sub>m</sub> is the product of all primes p such that p − 1 divides m. The paper quotes this as well.

**Claim (rounding lemma).** Let z be a number with 0 ≤ ζ(m) − z &lt; 1/(Kd). Then |a| is the ceiling of zKd, so B<sub>m</sub> = (−1)<sup>m/2+1</sup> ⌈zKd⌉/d.
- Step 1: multiply the inequality by Kd to get 0 ≤ |a| − zKd &lt; 1.
- Step 2: |a| is an integer, so it is the ceiling of zKd.

**Claim (how many primes).** Let z be the Euler product over primes p ≤ N. Then 0 ≤ ζ(s) − z ≤ 1/((s−1)N<sup>s−1</sup>). So for s = m, any integer N above (Kd)<sup>1/(m−1)</sup> gives the accuracy that the rounding lemma needs.
- Step 1: the truncated product is at least the partial sum of n<sup>−s</sup> over n ≤ N, so the error is at most the tail of the series.
- Step 2: bound the tail by the integral of x<sup>−s</sup> from N to ∞.

## Note, then ignore

- Precision of K. You must compute K (and so π) to enough digits for the ceiling in the last step to come out right. The paper flags this and gives no explicit bound. Safe to skip on a first reading.
- Range of m. The paper states the formula |B<sub>m</sub>| = Kζ(m) for even m ≥ 4, then runs the algorithm for even m ≥ 2. This changes nothing in the method. Safe to skip.
- No running time. The title says "quickly", but the paper proves no complexity bound. It only compares with the m(m+1)/2 terms of the recurrence. Safe to skip.
- Choice of N. Any integer at least as large as the stated bound works, so you need not compute the (m−1)-th root with care. Safe to skip.
- Sieving. The primes up to N, and the primes p with p − 1 dividing m, can both come from a sieve. This is an implementation remark. Safe to skip.

## One next step

Open the PDF at the last page and follow the worked example m = 50: check that the divisors of 50 give d = 2·3·11 = 66, and see that N = 4 is enough.
