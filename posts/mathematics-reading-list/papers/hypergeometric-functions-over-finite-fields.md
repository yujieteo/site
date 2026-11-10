source: https://arxiv.org/pdf/1510.02575
slogan: Swap the gamma function for Gauss sums and classical hypergeometric identities become point counts on curves over finite fields.
basis: the introduction and the main theorem statements

## Before you start

This is a memoir of over a hundred pages, dense with character sums. The likely feeling is overwhelm, with some dread of the bookkeeping. That is a fair response to the page count, and you can let it be there. If you want to see why hypergeometric series count points on curves, the first eight pages already show it. Read for the dictionary and enjoy how far it stretches. Nobody needs you to verify the identities.

## The story

Classical hypergeometric functions are integrals of products of powers, and they obey many transformation and evaluation formulas. Greene, Evans, Katz, McCarthy and others built analogues over a finite field 𝔽<sub>q</sub>, where a power x<sup>a</sup> becomes a multiplicative character A(x) and an integral becomes a sum over 𝔽<sub>q</sub>. The trouble was that the definitions differed, and each classical identity needed its own clever proof.

The authors fix one definition that follows the classical period integral step by step. Then a dictionary applies: the gamma function becomes the Gauss sum, the beta function becomes the Jacobi sum, and the reflection and multiplication formulas have exact counterparts. A classical proof that uses only those tools translates line by line. The translated functions are traces of Frobenius on Galois representations, and that view predicts the shape of each finite field identity.

## Main definitions

**Gauss and Jacobi sums.** For multiplicative characters A, B of 𝔽<sub>q</sub><sup>×</sup>, extended by A(0) = 0, set g(A) = Σ A(x) ζ<sub>p</sub><sup>Tr(x)</sup> over x ≠ 0, and J(A, B) = Σ A(x)B(1 − x) over x ∈ 𝔽<sub>q</sub>. Here Tr is the trace to 𝔽<sub>p</sub> and ζ<sub>p</sub> is a fixed primitive p-th root of unity.
- g(A) plays the role of the gamma function.
- J(A, B) plays the role of the beta function.

**Period function <sub>2</sub>P<sub>1</sub>.** For characters A<sub>1</sub>, A<sub>2</sub>, B<sub>1</sub> and λ ∈ 𝔽<sub>q</sub>, it is the sum over y ∈ 𝔽<sub>q</sub> of A<sub>2</sub>(y) · (Ā<sub>2</sub>B<sub>1</sub>)(1 − y) · Ā<sub>1</sub>(1 − λy), where the bar is complex conjugation. The general <sub>n+1</sub>P<sub>n</sub> is built by repeating this step n times (Definition 4.4).

**Hypergeometric function <sub>2</sub>F<sub>1</sub>.** It is <sub>2</sub>P<sub>1</sub> divided by the Jacobi sum J(A<sub>2</sub>, B<sub>1</sub>Ā<sub>2</sub>), which is its value at λ = 0. So <sub>2</sub>F<sub>1</sub> takes the value 1 at λ = 0, as in the classical case.

**The character ι<sub>𝔭</sub>(i/N).** Let K = ℚ(ζ<sub>N</sub>). For a prime ideal 𝔭 of K coprime to N, the N-th power residue symbol turns the fraction i/N into a multiplicative character of the residue field. This converts rational parameters a, b, c into characters, compatibly as 𝔭 varies.

## Main results

**Theorem (Galois representations; Theorem 1.1).** Let a, b, c ∈ ℚ have least common denominator N, with a, b, a − c, b − c not integers, and let λ ∈ ℚ, λ ≠ 0, 1. Put K = ℚ(ζ<sub>N</sub>) and let ℓ be a prime. Then there is a representation of the absolute Galois group of K into GL<sub>2</sub>(ℚ<sub>ℓ</sub>(ζ<sub>N</sub>)). It is unramified at primes 𝔭 coprime to ℓ and to the discriminant of K at which λ and 1 − λ are units. The trace of Frobenius at 𝔭 is −<sub>2</sub>P<sub>1</sub> with characters ι<sub>𝔭</sub>(a), ι<sub>𝔭</sub>(b), ι<sub>𝔭</sub>(c), evaluated at λ over the residue field.
- Step 1: realise the period as a point count on a generalised Legendre curve.
- Step 2: take the matching piece of the ℓ-adic representation on its Jacobian.

**Theorem (Ono; Theorem 4.1 in the source).** For λ ∈ 𝔽<sub>q</sub> with λ ≠ 0, 1, the Legendre curve y² = x(x − 1)(x − λ) has q + 1 + <sub>2</sub>P<sub>1</sub>[φ, φ; ε; λ] points over 𝔽<sub>q</sub>. Here φ is the quadratic character and ε the trivial one.

**Theorem (algebraic identity; Theorem 8.11).** Let q be odd and let A have order at least 3. Then <sub>2</sub>F<sub>1</sub>[A, Aφ; A²; z] is a sum of two character values, one at each of (1 ± √(1 − z))/2, and it is zero when 1 − z is not a square. The classical formula of Slater has one term. The finite field version needs two, because the Galois representation is 2-dimensional. I have not copied the exact characters here. See the statement in the source.

**Theorem (cubic transformation; Theorem 1.2).** Over 𝔽<sub>q</sub> of residue characteristic at least 3, as the source states it, <sub>2</sub>F<sub>1</sub>[A, Ā; φ; 27x(1 − x)²/4] equals <sub>2</sub>F<sub>1</sub>[A³, Ā³; φ; 3x/4] minus two correction terms, which are nonzero only at x = 1 and x = 4/3. This is the analogue of a formula of Gessel and Stanton.

## Note, then ignore

- Delta terms. Trivial characters break the clean Gauss sum formulas, so correction terms δ appear everywhere. They are where the work lies, but they do not change the story. Safe to skip on a first reading.
- ε(0) = 0. The authors set every character, even the trivial one, to 0 at 0. Other books choose 1. It is a convention. Safe to skip.
- Three other definitions. Greene, McCarthy and Katz define these functions with different normalisations, compared in §4.4. Safe to skip unless you read those papers.
- Primitive parameters. Many statements need A<sub>i</sub> ≠ ε and A<sub>i</sub> ≠ B<sub>j</sub>, which mirrors a<sub>i</sub>, a<sub>i</sub> − b<sub>j</sub> not in ℤ. Safe to skip.
- Limits of the dictionary. Proofs that use derivatives do not translate directly, and the authors say so. Safe to skip.

## One next step

Open the PDF at page 29 and read only Theorem 4.1, the point count for the Legendre curve. Then look back at formula (4.5) on page 28 to see why it holds.
