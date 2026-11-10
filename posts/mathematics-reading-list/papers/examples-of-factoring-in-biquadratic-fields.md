source: https://www.tildedave.com/2019/02/09/examples-of-factoring-in-biquadratic-fields.html
slogan: A prime factors in ℚ(√m, √n) in one of five shapes, and its behaviour in the three quadratic subfields tells you which.
basis: the page itself

## Before you start

This is a short blog post of worked examples with Sage output. The feeling it may raise is mild boredom, or a sense that exercises are beneath a reading list. You are allowed to find it plain. If you want decomposition and inertia groups to stop being abstract, this is a place where each one has order 1, 2 or 4 and you can see it. Play with one example for fun. You do not need to read every case.

## The story

Marcus's book Number Fields asks, in Exercises 4.6 and 4.7, how a prime p can factor in a biquadratic field K = ℚ(√m, √n). The Galois group is the Klein four-group, so K has three quadratic subfields: ℚ(√m), ℚ(√n) and ℚ(√k), with k = mn/gcd(m, n)<sup>2</sup>. Factoring in a quadratic field is easy. You check whether p divides m and whether m is a square mod p. The post uses this as the tool. For each pattern of behaviour in the subfields it finds numbers m, n, p, predicts the factorisation in K, and confirms it in Sage. One pattern cannot happen. A prime cannot stay inert in K, because that would need a cyclic Galois group of order 4.

## Main definitions

**Decomposition group D.** Let K/ℚ be Galois with group G, and Q a prime of K over p. Then D is the subgroup of σ in G with σ(Q) = Q.

**Inertia group E.** The subgroup of σ in G with σ(α) ≡ α mod Q for every algebraic integer α of K. It lies inside D, and D/E is cyclic.

**Splitting in a quadratic field.** Let m be squarefree and p a prime, in ℚ(√m).
- p odd: p ramifies if p divides m, splits if m is a non-zero square mod p, and is inert otherwise.
- p = 2: it ramifies if m ≡ 2 or 3 mod 4, and the post says it splits if m ≡ 1 mod 4.

## Main results

The post has no numbered theorems. These are its claims, each backed by a Sage computation.

**Claim (the two extreme cases).** If p ramifies in all three quadratic subfields, then p is totally ramified in K. If p splits in all three, then p splits completely in K. The second statement is cited as Marcus, Theorem 31.
- Example 1: p = 2 in ℚ(√2, √3). The subfields have discriminants 8, 12, 24. Sage gives (2) = P<sup>4</sup>, and D and E both have order 4.
- Example 2: p = 131 in ℚ(√15, √21). The numbers 15, 21 and 35 are squares mod 131, and Sage gives four distinct primes.

**Claim (inert never happens).** No prime is inert in all three subfields, so no prime stays prime in K.
- Step 1: if p were inert, D would be all of G and E would be trivial.
- Step 2: then D/E = G would be cyclic of order 4, but the Klein four-group is not cyclic.

**Claim (the three mixed cases).** Split in one subfield and inert in another gives p = P<sub>1</sub>P<sub>2</sub>. Split in one and ramified in another gives P<sub>1</sub><sup>2</sup>P<sub>2</sub><sup>2</sup>. Ramified in one and inert in another gives P<sub>1</sub><sup>2</sup>. The examples are p = 13 in ℚ(√3, √5), p = 7 in ℚ(√2, √14), and p = 13 in ℚ(√5, √13).

**Claim (two counterexamples; Marcus, Exercise 4.7 (a) and (c)).** Behaviour in two subfields does not always pass to their composite.
- Inert: 13 is inert in ℚ(√5) and in ℚ(√15), but splits into two primes in ℚ(√3, √5), which contains both.
- Totally ramified: 7 is totally ramified in ℚ(√7) and in ℚ(√14), but not in ℚ(√2, √14).

## Note, then ignore

- "Empty subgroup". The post uses this phrase for the trivial subgroup, the one with only the identity. It is a slip of wording, safe to skip.
- A typo in the list of subfields. The post writes ℚ(√m) twice where the second is ℚ(√n). Safe to skip.
- The case m ≡ 0 mod 4. The post lists it for p = 2, but a squarefree m is never 0 mod 4. Safe to skip.
- Splitting of 2 when m ≡ 1 mod 4. The post says 2 splits. The usual statement is finer: 2 splits for m ≡ 1 mod 8 and is inert for m ≡ 5 mod 8. I state this from general knowledge, not from the post. No example in the post depends on it, so it is safe to skip.
- Sage's generators. The printed ideals use generators of an absolute field, such as a root of x<sup>4</sup> − 10x<sup>2</sup> + 1. Only the exponents and the number of factors matter. Safe to skip.

## One next step

Open the post and read only the section "p inert in every subfield". It is one paragraph, and it holds the whole argument.
