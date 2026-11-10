source: https://arxiv.org/pdf/math/0302055
slogan: Multiple logarithms fill the first column of an explicit matrix whose monodromy and limits you can read off entry by entry.
basis: the introduction and the main theorem statements

## Before you start

This paper is 27 pages of explicit matrices, index sets and case-by-case limits. The likely feeling is boredom, or a tired dread of bookkeeping: orderings on index sets, position functions, 8 × 8 matrices. That is a natural response to a computational paper, and you do not have to enjoy every index. What the paper gives in return is rare: mixed Hodge structures you can see written out as matrices, with nothing hidden. If the abstract definition has never felt real to you, look at one matrix here. Enjoy that one matrix first. The general case can wait.

## The story

Deligne observed that the dilogarithm sits in a 3 × 3 matrix of functions whose columns span a family of mixed Hodge structures over the punctured plane. The same holds for the classical polylogarithms. Experts knew that multiple polylogarithms, in several variables, should give such families too, but nobody had written them down, and it was not even clear where "infinity" is for these functions. Zhao does the explicit work for the multiple logarithm Li<sub>1,...,1</sub>(x<sub>1</sub>, ..., x<sub>n</sub>). He builds a 2<sup>n</sup> × 2<sup>n</sup> matrix of iterated integrals, shows its columns solve a system with logarithmic poles, and computes the monodromy around each divisor. From the matrix he reads off limit structures on the boundary and single-valued versions of the functions.

## Main definitions

**Multiple polylogarithm.** For positive integers m<sub>1</sub>, ..., m<sub>n</sub> and |x<sub>i</sub>| &lt; 1, Li<sub>m<sub>1</sub>,...,m<sub>n</sub></sub>(x<sub>1</sub>, ..., x<sub>n</sub>) = Σ x<sub>1</sub><sup>k<sub>1</sub></sup> ... x<sub>n</sub><sup>k<sub>n</sub></sup> / (k<sub>1</sub><sup>m<sub>1</sub></sup> ... k<sub>n</sub><sup>m<sub>n</sub></sup>) over 0 &lt; k<sub>1</sub> &lt; ... &lt; k<sub>n</sub>. The depth is n and the weight is m<sub>1</sub> + ... + m<sub>n</sub>.
- Multiple logarithm: the case where every m<sub>i</sub> = 1, written L<sub>n</sub>(x).

**The base S<sub>n</sub>.** The space ℂ<sup>n</sup> minus the divisor D<sub>n</sub> where some x<sub>j</sub> = 0, some x<sub>j</sub> = 1, or some product x<sub>i</sub> ... x<sub>j</sub> = 1 with i &lt; j. This divisor does not have normal crossings.

**Variation of mixed Hodge structure.** A local system of ℚ-vector spaces on S with an increasing weight filtration by sub-local systems and a decreasing Hodge filtration by holomorphic subbundles, such that each fibre is a mixed Hodge structure and the connection moves F<sup>p</sup> into F<sup>p−1</sup> (Griffiths transversality).
- Unipotent: the monodromy representation is unipotent. Equivalently, each weight-graded piece is a constant variation.
- Good: the Hodge bundles extend to Deligne's canonical extension over a compactification, and relative weight filtrations exist for the local monodromy logarithms.

**Variation matrix M<sub>[n]</sub>(x).** A 2<sup>n</sup> × 2<sup>n</sup> matrix of many-valued functions on S<sub>n</sub>, indexed by 0-1 vectors of length n. The first column holds multiple logarithms of depth up to n, and the other entries are powers of 2πi times iterated integrals.

## Main results

**Theorem (multiple logarithms; Theorem 4.1).** The n-tuple logarithm underlies a good unipotent graded-polarisable variation of mixed Hodge-Tate structures over S<sub>n</sub>. The graded piece gr<sup>W</sup><sub>−2k</sub> consists of (n choose k) copies of the Tate structure ℤ(k).
- Step 1: the columns of M<sub>[n]</sub> are fundamental solutions of a linear system built from d log forms (Proposition 3.14). This gives transversality and logarithmic poles.
- Step 2: the monodromy around each component of D<sub>n</sub> is computed explicitly and is unipotent with integer entries (Theorem 3.16, Corollary 3.17).

**Theorem (weight three; Theorem 5.1).** Li<sub>1,2</sub> and Li<sub>2,1</sub> each underlie a good variation of mixed Hodge-Tate structures over S<sub>2</sub>. For Li<sub>2,1</sub> the graded pieces are ℤ(0), ℤ(1)<sup>2</sup>, ℤ(2)<sup>2</sup>, ℤ(3). For Li<sub>1,2</sub> they are ℤ(0), ℤ(1)<sup>2</sup>, ℤ(2)<sup>3</sup>, ℤ(3).

**Theorem (double polylogarithms; Theorem 5.4).** The double polylogarithm Li<sub>r,s</sub> underlies a good unipotent graded-polarisable variation of mixed Hodge-Tate structures. The paper gives a formula for the number of copies of ℤ(k) in each graded piece. I did not check that formula, so I do not state it.

**Conjecture (Conjecture 1.1).** The variation attached to any multiple polylogarithm arises as a variation of limit mixed Hodge-Tate structures of a suitable multiple logarithm.

**Claim (single-valued double logarithm; Section 6).** Following Beilinson and Deligne, the paper extracts single-valued real analytic versions from the matrices. In weight 2 the single-valued double logarithm equals L<sub>2</sub>((xy − y)/(1 − y)) − L<sub>2</sub>(y/(y − 1)) − L<sub>2</sub>(xy), where L<sub>2</sub> is the single-valued dilogarithm.

## Note, then ignore

- Two orderings on indices. The paper uses a total order and a partial order on 0-1 vectors to organise the matrix entries. Needed for the proofs only. Safe to skip on a first reading.
- Non-normal crossings. Deligne's extension theorem is usually stated for normal crossing divisors. The paper argues it still applies because all forms are of type df/f. Safe to skip.
- The component x<sub>n</sub> = 0. Multiple logarithms do not need it, but general multiple polylogarithms can be singular there (Remark 3.1). Safe to skip.
- Typo in an earlier paper. Zhao notes that a term 2πi log x in Goncharov's double logarithm matrix should read 2πi log(1 − x). Safe to skip.
- Transpose in the monodromy. The representation uses the transpose so that it is a homomorphism for the paper's path convention. Safe to skip.
- Analytic continuation. The definition of the functions off the unit polydisc comes from a companion paper by the same author. Safe to skip.

## One next step

Open the paper at Section 3.2 (page 6) and read the 4 × 4 matrix M<sub>1,1</sub>(x, y) for the double logarithm, entry by entry.
