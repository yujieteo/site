source: https://kconrad.math.uconn.edu/blurbs/gradnumthy/integersradical.pdf
slogan: ℤ[ⁿ√a] is the ring of integers of ℚ(ⁿ√a) exactly when a is squarefree and no prime factor of n is a Wieferich prime for a.
basis: the full text

## Before you start

Seven pages, and every tool is from a first course: discriminants, Eisenstein polynomials, ramification. The likely feeling is mild embarrassment if those tools have gone rusty. That is fine. Let it be there. The proofs are short enough that you can relearn each tool where it is used. If you have ever wanted one clean, complete answer to "what is the ring of integers?" for a whole family of fields, this is it. Read it for the surprise at n = 1093. Finishing comes second.

## The story

The cyclotomic field ℚ(ζ<sub>n</sub>) has ring of integers ℤ[ζ<sub>n</sub>] for every n. It is natural to hope the same for ℚ(ⁿ√2) and ℤ[ⁿ√2]. A computer confirms it for all n ≤ 1000. The hope is false, and the first failure is at n = 1093. The note finds out why. First it splits n into prime powers. For a prime p dividing a, Eisenstein's criterion settles the matter at once. For p not dividing a, the polynomial T<sup>p</sup> − a is not Eisenstein at p. The one idea is to shift the variable: (T + a)<sup>p<sup>r</sup></sup> − a is Eisenstein at p unless a<sup>p−1</sup> ≡ 1 mod p². That congruence is the one Wieferich met in 1909 while working on Fermat's last theorem. For a = 2 only two such primes are known, 1093 and 3511.

## Main definitions

**Radical extension.** The field ℚ(ⁿ√a), where n ≥ 2, a ∈ ℤ and T<sup>n</sup> − a is irreducible over ℚ. Its degree over ℚ is n. The question is when its ring of integers equals ℤ[ⁿ√a].
- If a is squarefree and a ≠ ±1, then T<sup>n</sup> − a is Eisenstein at each prime factor of a, so it is irreducible for every n.

**Eisenstein at p.** A monic polynomial in ℤ[T] is Eisenstein at p if p divides every lower coefficient and p² does not divide the constant term. For a root α of such a polynomial, p does not divide the index of ℤ[α] in the ring of integers of ℚ(α).

**Wieferich prime to base a (Definition 4.1).** A prime p with a<sup>p−1</sup> ≡ 1 mod p². Fermat's little theorem gives the congruence mod p for free when p does not divide a. The condition asks for one more power of p.
- Base 2: the known ones are 1093 and 3511.

## Main results

**Theorem (the full answer; Theorem 5.3).** Let a ≠ ±1 and n ≥ 2, with T<sup>n</sup> − a irreducible in ℤ[T]. The ring of integers of ℚ(ⁿ√a) is ℤ[ⁿ√a] if and only if (i) a is squarefree and (ii) no prime factor of n is a Wieferich prime to base a.
- "If": Theorems 3.1 and 3.2 handle each prime power dividing n, and Corollary 2.4 glues them.
- "Only if": Theorem 2.1 handles non-squarefree a, and Theorem 5.1 with Lemma 2.2 handles a Wieferich prime factor.

**Theorem (reduction to prime powers; Theorem 2.3).** Let a be squarefree and not ±1, and let m and n be coprime. Then ℚ(<sup>mn</sup>√a) has integers ℤ[<sup>mn</sup>√a] if and only if the same holds for both m and n.
- Step 1: the index of ℤ[<sup>mn</sup>√a] in the full ring of integers is killed by d, the greatest common divisor of the two discriminants, and every prime factor of d divides a.
- Step 2: Eisenstein at each prime factor of a shows the index is coprime to a. So the index is 1.

**Theorem (prime powers; Theorems 3.1 and 3.2).** Let a be squarefree and not ±1, let p be a prime and r ≥ 1. If p divides a, or if p does not divide a and a<sup>p−1</sup> is not ≡ 1 mod p², then the ring of integers of ℚ(<sup>p<sup>r</sup></sup>√a) is ℤ[<sup>p<sup>r</sup></sup>√a].
- Step 1: the index divides the discriminant ±(p<sup>r</sup>)<sup>p<sup>r</sup></sup> a<sup>p<sup>r</sup>−1</sup>, and Eisenstein removes every prime factor of a.
- Step 2: for p not dividing a, the shifted polynomial (T + a)<sup>p<sup>r</sup></sup> − a is Eisenstein at p, which removes p as well.

**Theorem (the Wieferich case fails; Theorem 5.1).** If a<sup>p−1</sup> ≡ 1 mod p² and T<sup>p</sup> − a is irreducible over ℚ, then p is not totally ramified in ℚ(<sup>p</sup>√a), and (<sup>p</sup>√a − a)<sup>p−1</sup>/p is an algebraic integer outside ℤ[<sup>p</sup>√a]. Here a need not be squarefree.
- Step 1: every prime above p divides α = <sup>p</sup>√a − a. A count of valuations in the expansion of (α + a)<sup>p</sup> = a shows that total ramification would force p to divide a<sup>p</sup> − a exactly once.
- Step 2: without total ramification, each prime above p appears in (p) with multiplicity at most p − 1, so (p) divides (α)<sup>p−1</sup>.

## Note, then ignore

- The case a = −1. Then T<sup>n</sup> + 1 is irreducible only for n a power of 2, and the field is cyclotomic. Safe to skip on a first reading.
- Choice of roots. The mth, nth and mnth roots of a are fixed so that they are powers of one another. Safe to skip.
- Proofs left as exercises. Theorem 2.1 is proved "by example" and Lemma 2.2 is an exercise. Both are routine. Safe to skip.
- The case p = 2 in Theorem 5.1. The valuation count needs p odd, and the note says p = 2 can be checked directly. It is the familiar fact that (1 + √a)/2 is an integer when a ≡ 1 mod 4. Safe to skip.

## One next step

Open the note at Example 3.6 and check by hand that 10² ≡ 1 mod 9. Then read the one line showing that (1 + ∛10 + ∛100)/3 is an algebraic integer.
