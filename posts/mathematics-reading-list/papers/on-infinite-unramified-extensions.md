source: https://msp.org/pjm/2000/192-1/pjm-v192-n1-p07-s.pdf
slogan: A number field can have trivial class group and still carry an infinite unramified extension, and Maire writes such fields down explicitly.
basis: the full text

## Before you start

The paper is eight pages, and a good part of it is long integers and degree 17 polynomials. That can raise a quiet impatience: "this is just a computer search, where is the idea?" You may feel that. The idea is there, and it fits in one paragraph. If you have ever wondered what class field theory cannot see, this paper shows you one clean case. Enjoy the trick first. Checking the numbers can wait, or never happen.

## The story

Take a number field k. Does it have an infinite unramified extension? Small discriminant says no, by Odlyzko's bounds. The Golod–Shafarevich test says yes when the class group is large enough at a prime p. Both known routes to "yes" go through the Hilbert class field tower, which is built from abelian steps. So a field with trivial class group looks hopeless: its tower stops at once. Maire's idea is to leave the tower. He takes a totally real field K of degree 7 with prime discriminant l and Galois closure group S<sub>7</sub>. Over a well-chosen quadratic field k, the compositum M = Kk is unramified but far from abelian. He then picks two more primes so that many places ramify in M/K. Golod–Shafarevich now applies to M, not to k. The result is a field with class number 1 below an infinite unramified extension.

## Main definitions

**Hilbert tower.** Let k<sup>(1)</sup> be the Hilbert field of k: the maximal unramified abelian extension, with Galois group the class group. Repeat to get k<sup>(i)</sup>, and let k<sub>H</sub> be the union. The tower is finite, or stops, when k<sub>H</sub>/k has finite degree.
- The p-tower k<sub>p</sub> is the maximal p-extension of k inside k<sub>H</sub>.

**Maximal unramified extension k<sub>∞</sub>.** The maximal unramified Galois extension of k, with no abelian or solvable condition. One has k ⊂ k<sub>p</sub> ⊂ k<sub>H</sub> ⊂ k<sub>∞</sub>, and the last inclusion can be strict.
- Example from the paper: ℚ(√(3·883)) has trivial class group and an unramified A<sub>5</sub>-extension.

**Extension of degree 2<sup>∞</sup>.** An infinite extension that is a compositum of extensions whose degrees are powers of 2. It need not be Galois.

## Main results

**Theorem (class number 2 below, infinite above; Theorem 3.1).** Let l = 17380678572159893, a prime, and q<sub>1</sub> = 16747. For each q<sub>2</sub> in {1051, 11863, 24659, 31583, 74527, 77339, 86579, 93491}, the real quadratic field k = ℚ(√(l·q<sub>1</sub>·q<sub>2</sub>)) has k<sub>H</sub>/k finite and k<sub>∞</sub>/k infinite.
- Step 1: K is a degree 7 totally real field of discriminant l. M = Kk is unramified over k, and 3n − 3 = 18 places ramify in M/K, so Golod–Shafarevich with genus theory (Proposition 2.1) gives M an infinite 2-tower.
- Step 2: k has class number 2, and the two other quadratic subfields of F = ℚ(√l, √(q<sub>1</sub>q<sub>2</sub>)) have class number 1. Proposition 2.4 then stops the Hilbert tower of k at F.

**Corollary (trivial class group, infinite unramified extension; Section 3.2 and the introduction).** The biquadratic field F above, for example ℚ(√17601097, √17380678572159893), has trivial class group and an infinite unramified Galois extension.
- Reason: F/k is unramified, so the infinite unramified extension of k stays unramified and infinite over F.

**Theorem (infinitely many quadratic fields; Theorem 5.1).** Infinitely many quadratic fields, real and imaginary, have a finite 2-Hilbert tower and an infinite unramified extension of degree 2<sup>∞</sup>.
- Step 1: start from a totally real octic field of prime discriminant l and choose q<sub>1</sub>, q<sub>2</sub> ≡ 3 mod 4 that split completely in it. Chebotarev gives infinitely many choices.
- Step 2: the 2-part of the class group of ℚ(√(l·q<sub>1</sub>·q<sub>2</sub>)) is cyclic, so the 2-tower stops at the first floor. The paper proves only the real case in detail.

## Note, then ignore

- The constant r. Proposition 2.1 needs the number ρ of ramified places to beat a bound built from unit ranks, and the paper packages this bound as r. It only explains why the degree n must be at least 7. Safe to skip on a first reading.
- "Unramified" and infinite places. Proposition 2.2 speaks of finite places, and total reality of K handles the real ones. Safe to skip.
- Which quadratic subfields. Section 3.2 names discriminants l and l·q<sub>1</sub>, while the introduction and Proposition 2.4 point to ℚ(√l) and ℚ(√(q<sub>1</sub>q<sub>2</sub>)). The second reading is the one that makes F contain k. Safe to skip.
- The group of the infinite extension. A remark says it is an extension of A<sub>7</sub> by a non-analytic pro-2 group. This is extra information, not part of the proof. Safe to skip.
- Section 4. It tries a second method with polynomials of degree 9, 11 and 17 and stops at an open class group computation. Safe to skip.

## One next step

Open the PDF and read only paragraph 3.1 on pages 137 to 138, down to the line "k<sub>∞</sub>/k is infinite".
