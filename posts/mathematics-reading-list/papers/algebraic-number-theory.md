source: https://www.jmilne.org/math/CourseNotes/ANT.pdf
slogan: Numbers in a number field may factor in several ways, but ideals factor uniquely, and a finite group measures the gap.
basis: the introduction and the main theorem statements

## Before you start

This is a 166-page course text, and its first chapter is a review of commutative algebra. The likely feeling is boredom, with a little dread of a long march before anything happens. Both are fine to feel. Milne's Introduction gives the whole subject in six pages with worked examples in ℤ[√−5], and it asks for no preparation. If you want class field theory later, this is the ground it stands on. Read the parts you enjoy. Nobody needs you to finish.

## The story

In ℤ every integer factors into primes in one way. People hoped the same held in rings such as ℤ[√−5], partly to attack Fermat's last theorem. It fails: 6 = 2·3 = (1+√−5)(1−√−5), and all four factors are irreducible. Kummer and Dedekind found the repair. Replace numbers by ideals, which behave like "ideal factors". Then (6) = 𝔭<sub>1</sub><sup>2</sup>𝔭<sub>2</sub>𝔭<sub>3</sub> with prime ideals, and the two factorisations of 6 are two ways of grouping these. Three questions organise the book. What is the right ring of integers? How badly does unique factorisation of elements fail? What are the units? The answers are: the integral closure of ℤ, a finite class group, and a finitely generated unit group of known rank.

## Main definitions

**Ring of integers.** For a number field K (a finite extension of ℚ), the ring 𝒪<sub>K</sub> is the set of elements of K that are roots of monic polynomials with coefficients in ℤ. It is a ring, and it is a free ℤ-module of rank [K : ℚ].
- K = ℚ[√d], d square-free, d ≡ 2, 3 mod 4: 𝒪<sub>K</sub> = ℤ[√d].
- d ≡ 1 mod 4: 𝒪<sub>K</sub> = ℤ[(1+√d)/2].

**Dedekind domain.** An integral domain that is noetherian, integrally closed, and in which every nonzero prime ideal is maximal. The ring 𝒪<sub>K</sub> is one, and so is the integral closure of a Dedekind domain in a finite separable extension of its fraction field (Theorem 3.29).

**Ideal class group.** The group of fractional ideals of a Dedekind domain modulo the principal ones. Its order for 𝒪<sub>K</sub> is the class number of K. The class number is 1 exactly when 𝒪<sub>K</sub> is a principal ideal domain, and then elements factor uniquely.

**Ramification index and residue degree.** Let 𝔭 be a nonzero prime of 𝒪<sub>K</sub> and L a finite extension of K. Write 𝔭𝒪<sub>L</sub> = ∏ 𝔓<sub>i</sub><sup>e<sub>i</sub></sup>. The number e<sub>i</sub> is the ramification index of 𝔓<sub>i</sub>, and f<sub>i</sub> is the degree of the residue field of 𝔓<sub>i</sub> over that of 𝔭. The prime 𝔭 ramifies if some e<sub>i</sub> > 1.

## Main results

**Theorem (unique factorisation of ideals; Theorem 3.7).** Let A be a Dedekind domain. Every proper nonzero ideal of A is a product of powers of distinct prime ideals, and the primes and exponents are uniquely determined.
- Step 1: in a noetherian ring every nonzero ideal contains a product of nonzero primes.
- Step 2: localise at each prime, where the ring is a discrete valuation ring, and compare.

**Theorem (finiteness of the class number; Theorems 4.3 and 4.4).** Let K have degree n over ℚ, discriminant Δ<sub>K</sub> and 2s nonreal complex embeddings. Every ideal class contains an integral ideal 𝔞 with norm at most (n!/n<sup>n</sup>)(4/π)<sup>s</sup>|Δ<sub>K</sub>|<sup>1/2</sup>. So the class group is finite.
- Step 1: embed 𝒪<sub>K</sub> as a lattice in ℝ<sup>n</sup> and use Minkowski's theorem to find a small element in each ideal.
- Step 2: only finitely many integral ideals have norm below a given bound.

**Theorem (Dirichlet unit theorem; Theorem 5.1).** Let K have r real embeddings and 2s nonreal complex embeddings. The unit group of 𝒪<sub>K</sub> is finitely generated of rank r + s − 1. Its torsion subgroup is the finite group of roots of unity in K.
- Case 1: real quadratic fields have rank 1, which is the theory of the Pell equation.
- Case 2: imaginary quadratic fields have rank 0.

**Theorem (how primes split; Theorems 3.34, 3.35 and 3.41).** For L over K of degree m, Σ e<sub>i</sub>f<sub>i</sub> = m for each prime 𝔭. If L is Galois over K, all the e<sub>i</sub> are equal and all the f<sub>i</sub> are equal. A prime ramifies if and only if it divides the discriminant, stated when 𝒪<sub>L</sub> is free over the base ring. So only finitely many primes ramify.
- Step 1: if 𝒪<sub>L</sub> = 𝒪<sub>K</sub>[α], factor the minimal polynomial of α modulo 𝔭.
- Step 2: the irreducible factors and their exponents give the primes 𝔓<sub>i</sub> and the numbers f<sub>i</sub> and e<sub>i</sub>.

## Note, then ignore

- Chapter 1. It reviews noetherian rings, localisation, the Chinese remainder theorem and tensor products. It is there for reference. Skip it and return when a proof cites it.
- Generality of the base ring. Many results are stated for a Dedekind domain A with integral closure B, not only for ℤ and 𝒪<sub>K</sub>. This serves later local arguments. On a first reading take A = ℤ.
- When 𝒪<sub>L</sub> ≠ 𝒪<sub>K</sub>[α]. The factoring recipe of Theorem 3.41 needs the ring to be generated by one element. It can fail for finitely many primes. Safe to skip at first.
- Algorithms. Chapter 2 has sections on computing rings of integers. They matter for practice, not for the story. Skip them.
- Chebotarev density. Theorem 8.31 is stated, and its proof is deferred to Milne's class field theory notes. Note it and move on.

## One next step

Open the PDF at the Introduction and read the section headed "Factorization", about a page and a half. It works the example 6 = 2·3 = (1+√−5)(1−√−5) by hand.
