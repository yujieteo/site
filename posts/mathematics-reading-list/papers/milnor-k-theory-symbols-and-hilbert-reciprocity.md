source: https://people.reed.edu/~ormsbyk/kgroup/July6.pdf
slogan: Milnor K-theory is the universal home for symbols on a field, and over ℚ it turns Hilbert reciprocity into one product formula.
basis: the full text

## Before you start

These are six pages of seminar notes, so length is not the obstacle. The feeling more likely to appear is suspicion: the Steinberg relation [a][1 − a] = 0 looks arbitrary, and the 2-adic symbol looks like a trick. You are allowed to find it ad hoc. The author says so himself. If you want to see quadratic reciprocity come out of a ring defined by two relations, this is a short route. Enjoy the computations first. Understanding where the relation comes from can wait.

## The story

Start with a field F. People wanted one algebraic object that records every "symbol" on F: a pairing of two nonzero elements that is multiplicative in each slot and vanishes when the two entries add to 1. Number theory is full of such pairings, each defined by its own formula. Milnor K-theory solves this by brute force. Take words in the nonzero elements of F and impose exactly those two rules. Then every symbol factors through K<sup>M</sup><sub>2</sub>(F). For F = ℚ, Tate computed this group. It splits into one piece for each prime. So any symbol on ℚ, including the sign symbol at the real place, is a product of the prime pieces. Working out which product gives Hilbert reciprocity.

## Main definitions

**Milnor K-theory.** K<sup>M</sup><sub>∗</sub>(F) is the free associative ring on symbols [a], one for each a ∈ F<sup>×</sup>, modulo [ab] = [a] + [b] and the Steinberg relation [a][1 − a] = 0 for a ≠ 1. It is graded by word length.
- Degree 0 and 1: K<sup>M</sup><sub>0</sub>(F) = ℤ and a ↦ [a] is an isomorphism F<sup>×</sup> → K<sup>M</sup><sub>1</sub>(F).
- Degree 2: K<sup>M</sup><sub>2</sub>(F) is F<sup>×</sup> ⊗ F<sup>×</sup> modulo the elements a ⊗ (1 − a).

**Steinberg symbol.** A map ( , ) : F<sup>×</sup> × F<sup>×</sup> → G to an abelian group that is multiplicative in each variable and satisfies (a, b) = 1 whenever a + b = 1.

**Tame symbol.** For a discrete valuation v on F with residue field k, set (a, b)<sub>v</sub> = (−1)<sup>v(a)v(b)</sup> a<sup>v(b)</sup> / b<sup>v(a)</sup>, reduced to k<sup>×</sup>. It is a Steinberg symbol (Lemma 13).
- Over ℚ with the p-adic valuation it takes values in 𝔽<sub>p</sub><sup>×</sup>.
- For p = 2 this is trivial, so the notes replace it by a hand-made symbol with values in {±1}.

**Hilbert symbol.** For p = 2 or ∞ it is the symbol ( , )<sub>p</sub> itself, where ( , )<sub>∞</sub> is −1 exactly when both entries are negative. For odd p it is the unique sign congruent to (a, b)<sub>p</sub><sup>(p−1)/2</sup> modulo p.

## Main results

**Proposition (universal property; Proposition 12).** Every Steinberg symbol F<sup>×</sup> × F<sup>×</sup> → G factors uniquely through a homomorphism K<sup>M</sup><sub>2</sub>(F) → G, via (a, b) ↦ [a, b].

**Theorem (Tate; Theorem 14).** The map [a, b] ↦ ((a, b)<sub>2</sub>, (a, b)<sub>3</sub>, (a, b)<sub>5</sub>, …) is an isomorphism from K<sup>M</sup><sub>2</sub>(ℚ) to {±1} ⊕ 𝔽<sub>3</sub><sup>×</sup> ⊕ 𝔽<sub>5</sub><sup>×</sup> ⊕ 𝔽<sub>7</sub><sup>×</sup> ⊕ …. The notes do not prove it. They cite Milnor's book, pages 101 to 103.

**Theorem (Hilbert reciprocity; Theorem 16).** For all a, b ∈ ℚ<sup>×</sup>, the product of the Hilbert symbols of (a, b) over all primes p and ∞ equals 1.
- Step 1: by Tate's theorem, the real symbol is a product of powers ε<sub>p</sub> ∈ {0, 1} of the Hilbert symbols at the primes.
- Step 2: a case analysis by p modulo 8 shows every ε<sub>p</sub> = 1. The case p ≡ 1 mod 8 needs a theorem of Gauss. The proof is cited, not given.

**Claim (meaning of the symbol; closing section).** Over ℚ<sub>p</sub> or ℝ, the Hilbert symbol of (a, b) is 1 exactly when the quadratic form ax² + by² − z² has a nonzero zero. So reciprocity says this form is solvable at almost every place, and the answers at all places but one fix the answer at the last.

## Note, then ignore

- Free algebra versus tensor algebra. The notes start from the free associative algebra, where Milnor starts from the tensor algebra on F<sup>×</sup>. The author does this to match the later Milnor–Witt definition. Safe to skip.
- Additive versus multiplicative notation. K<sup>M</sup><sub>2</sub> is written additively here. Some references, such as Lam's book, write it multiplicatively. Safe to skip.
- The 2-adic symbol. Its definition uses the unique form ±2<sup>j</sup>5<sup>k</sup>c/d with c, d ≡ 1 mod 8. This is a device to get a nontrivial symbol at 2. Safe to skip on a first reading.
- Finite fields. K<sup>M</sup><sub>∗</sub>(𝔽<sub>q</sub>) lives only in degrees 0 and 1. That is a useful sanity check and an exercise, but it plays no part in reciprocity. Safe to skip.
- Bimultiplicativity of the quadratic-form symbol. The notes say it takes work for local fields and do not prove it. Safe to skip.

## One next step

Open the notes at page 3 and compute the tame symbol (2, 3)<sub>3</sub> from the displayed formula for the p-adic valuation on ℚ.
