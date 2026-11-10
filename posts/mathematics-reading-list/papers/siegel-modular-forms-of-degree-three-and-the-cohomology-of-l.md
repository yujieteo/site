source: https://arxiv.org/pdf/1108.3731
slogan: Counting genus 3 curves over small finite fields predicts dimensions and Hecke eigenvalues of Siegel modular forms of degree three.
basis: the introduction and the main theorem statements

## Before you start

The main statement here is a conjecture, written in the language of motives, Grothendieck groups and vector-valued Siegel modular forms. The likely feeling is doubt: why work through notation for something unproved, when you may not know the background either. That doubt is reasonable, and it can stay. The paper offers something you may want: a way to get numbers about modular forms by counting curves. Section 2 does this for elliptic curves in three pages. Read it for the pleasure of the trick, and let the rest wait.

## The story

For elliptic curves, Eichler, Shimura and Deligne showed that cusp forms of weight a + 2 live in the cohomology of a local system on the moduli space A<sub>1</sub>. So the trace of the Hecke operator T(p) equals a trace of Frobenius, and you can find it by listing elliptic curves over 𝔽<sub>p</sub> with their point counts. People wanted the same for abelian surfaces and threefolds. The obstacle is that the cohomology also contains pieces that are not cusp forms of the right degree: Eisenstein and endoscopic terms. Nobody knew their shape in genus 3. The authors counted curves of genus 3 over 𝔽<sub>q</sub> for q ≤ 17, looked at the numbers, and guessed the extra terms. The guess uses only genus 1 and genus 2 data. What remains after subtracting it should be the Siegel cusp forms of degree 3.

## Main definitions

**Local system V<sub>λ</sub>.** Let π: X<sub>g</sub> → A<sub>g</sub> be the universal principally polarised abelian variety and V = R<sup>1</sup>π<sub>\*</sub>ℚ, of rank 2g with a symplectic pairing. For a partition λ = (λ<sub>1</sub> ≥ … ≥ λ<sub>g</sub> ≥ 0), V<sub>λ</sub> is the local system built from V by the irreducible representation of GSp<sub>2g</sub> with highest weight λ.
- Genus 1: V<sub>a</sub> = Sym<sup>a</sup>(V).
- Parity: the cohomology vanishes when |λ| = λ<sub>1</sub> + … + λ<sub>g</sub> is odd, because −1 acts as −1 on V.

**Motivic Euler characteristic.** e<sub>c</sub>(A<sub>g</sub>, V<sub>λ</sub>) = Σ (−1)<sup>i</sup> [H<sub>c</sub><sup>i</sup>(A<sub>g</sub>, V<sub>λ</sub>)]. The sum lives in a Grothendieck group, either of mixed Hodge structures or of ℓ-adic representations of Gal(ℚ̄/ℚ). The integer version E<sub>c</sub> replaces each class by its dimension.

**Siegel cusp forms of weight n(λ).** For g = 3 and λ = (a, b, c), put n(λ) = (a − b, b − c, c + 4). S<sub>n(λ)</sub> is the space of vector-valued Siegel cusp forms of degree 3 and that weight for Sp(6, ℤ), and s<sub>n(λ)</sub> is its dimension. Scalar-valued forms are the case a = b = c.

**The motive S[n(λ)].** A conjectural element of the Grothendieck group of motives, of rank 8·s<sub>n(λ)</sub> for g = 3, whose trace of Frobenius F<sub>p</sub> equals the trace of T(p) on S<sub>n(λ)</sub>. L denotes the Lefschetz motive, with trace of F<sub>q</sub> equal to q.

## Main results

**Theorem (genus one; Theorem 2.3).** For every even a > 0, e<sub>c</sub>(A<sub>1</sub> ⊗ ℚ, V<sub>a</sub>) = −S[a + 2] − 1. Here S[a + 2] is Scholl's motive of the cusp forms of weight a + 2 on SL(2, ℤ), and −1 is the Eisenstein contribution.
- Step 1: Eichler and Shimura identify the inner cohomology H<sub>!</sub><sup>1</sup> with cusp forms and their conjugates.
- Step 2: Deligne matches the trace of F<sub>p</sub> on it with the trace of T(p).

**Conjecture (genus three; Conjecture 7.1).** For every λ = (a, b, c) ≠ (0, 0, 0), e<sub>c</sub>(A<sub>3</sub>, V<sub>a,b,c</sub>) = S[a − b, b − c, c + 4] + e<sub>3,extr</sub>(a, b, c). The extra term is an explicit combination of six genus 2 terms: −e<sub>c</sub>(A<sub>2</sub>, V<sub>a+1,b+1</sub>) + e<sub>c</sub>(A<sub>2</sub>, V<sub>a+1,c</sub>) − e<sub>c</sub>(A<sub>2</sub>, V<sub>b,c</sub>), and three products of genus 2 extra terms with S[c + 2], S[b + 3] and S[a + 4].
- Evidence 1: traces of Frobenius from counts of curves for all q ≤ 17 and all |λ| ≤ 60.
- Evidence 2: in the 317 cases with |λ| ≤ 60 where the predicted dimension is 0, the counted trace equals the trace of the extra term for all q ≤ 17 (Example 7.4).

**Conjecture (dimension formula; Conjecture 7.3).** For λ = (a, b, c) ≠ (0, 0, 0), s<sub>a−b,b−c,c+4</sub> = (E<sub>c</sub>(A<sub>3</sub>, V<sub>a,b,c</sub>) − E<sub>3,extr</sub>(a, b, c)) / 8. The authors check that the right side is a non-negative integer for |λ| ≤ 60. For scalar-valued forms it agrees with Tsuyumine's known dimensions for 0 ≤ a ≤ 20.

**Conjecture (lifts from genus one; Conjecture 7.7 (i)).** For eigenforms f, g, h on SL(2, ℤ) of weights b + 3, a + c + 5 and a − c + 3, there is an eigenform F of weight (a − b, b − c, c + 4) with spinor L-function L(F, s) = L(f ⊗ g, s) L(f ⊗ h, s − c − 1).

## Note, then ignore

- Stacky counting. A point of A<sub>g</sub> over 𝔽<sub>q</sub> counts with weight 1/|Aut|, because the moduli spaces are stacks. Safe to skip on a first reading.
- Two motives. The paper also uses a second motive, written S with a hat, that keeps only the "exhaustive" part. It is bookkeeping for lifts. Safe to skip.
- Weight zero. The paper defines S[2] = −L − 1 and S[0, 0, 4] by hand so the formulas hold for trivial coefficients. Safe to skip.
- Regular or not. In genus 2 the matching conjecture is proved for regular λ in the Galois Grothendieck group, by work of Weissauer and of van der Geer. The non-regular case is open. Safe to skip.

## One next step

Open the paper at Remark 2.4 (page 7) and read that one paragraph: it tells you how to get Hecke traces from a list of elliptic curves over 𝔽<sub>p</sub>.
