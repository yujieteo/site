source: https://arxiv.org/pdf/2609.33043
slogan: Turn each zeta zero into a unit vector, and a matrix inequality shows that at least 83.69% of the zeros are distinct.
basis: the full text

## Before you start

This paper is six pages, but it rests on a stack of 2026 preprints, repositories and computer certificates, most of them not refereed. The likely feeling is distrust, or unease at not knowing which parts are solid. That is a reasonable thing to feel, and the author shares it openly in Section 4. If you want to see how linear algebra can count zeros of ζ, the idea fits on one page. Enjoy that page. You do not owe the constants anything.

## The story

It is conjectured that every nontrivial zero of ζ is simple. Nobody can prove it. A weaker goal is a lower bound for the share of distinct zeros. Montgomery's pair-correlation method gives one. Attach to each zero a unit vector, a wave packet whose overlap with another packet is near 1 when the zeros are close. Sum the projections to get an operator A with trace N, the number of zeros. Pair correlation computes the energy tr A² as about C·N with C &lt; 2. A double zero adds 4 to the energy, and two far-apart simple zeros add about 2. So low energy forces many distinct zeros. That gave 0.83625. This paper keeps a correction term from nearby zeros, even when some are double, and reaches 0.83699.

## Main definitions

**Counting functions.** N(T) counts the nontrivial zeros ρ = σ + iγ with 0 &lt; γ ≤ T, with multiplicity. N<sub>d</sub>(T) counts the distinct ones.

**Wave packets and overlap.** Fix an even probability density f = η² on [−½, ½]. A critical-line zero with rescaled height y gets the unit vector F<sub>y</sub>(u) = η(u)e<sup>2πiuy</sup>. The inner product of F<sub>y</sub> and F<sub>y′</sub> is f̂(y − y′).
- Zeros off the line come in symmetric pairs. Each pair adds a Hermitian term with at most one positive eigenvalue.

**Energy.** A is the sum of these terms with multiplicity. It has tr A = N. The energy is E = tr A², a sum over pairs of zeros.

**Clipped squares.** For real c, φ<sub>c</sub>(x) = x² for x ≤ c and 2cx − c² for x > c. For τ ≥ 0, Ψ<sub>τ</sub>(x) = (x − 1)² for x ≤ 1 + τ and 2τ(x − 1) − τ² beyond. Both are convex.

## Main results

**Theorem (distinct zeros; Theorem 1).** lim inf N<sub>d</sub>(T)/N(T) ≥ 16260119298029/19426831050000 = 0.83699288… as T → ∞. No hypothesis on the location of zeros is used. The constant depends on a computer-assisted inequality from unrefereed work (Proposition 6).
- Step 1: The unconditional Montgomery theorem gives E = (C + o(1))N with C ≤ 2 − H (Proposition 5).
- Step 2: Linear algebra gives E ≥ 3N − 2N<sub>d</sub> plus a nonnegative defect. The local inequality bounds the defect below by a fixed amount per zero.

**Theorem (mixed-multiplicity Gram inequality; Theorem 2).** Let U be a Hermitian matrix with unit diagonal, D = diag(d<sub>i</sub>) with 1 ≤ d<sub>i</sub> ≤ 2, and G = D<sup>1/2</sup>UD<sup>1/2</sup>. If τ ≥ 0 and c ≥ max(1 + τ, 2 + τ/2), then tr φ<sub>c</sub>(G) − tr D² ≥ tr Ψ<sub>τ</sub>(U). This is proved in the paper and formally in Lean 4.
- Step 1: For Hermitian B with 2cI − B positive semidefinite, tr φ<sub>c</sub>(G) ≥ tr(BG) − ¼ tr B² (Lemma 3).
- Step 2: Choose B = 2D + 2M, where M is built from U − I with eigenvalues clipped at τ.

**Claim (local defect; Proposition 6, imported).** For any seven real points in increasing order, a fixed weighted sum of squared overlaps plus 1/2736 of their spread is at least 891/200000. The paper takes this from a public repository. It re-ran the interval-arithmetic search but did not audit the code.

## Note, then ignore

- Smoothing. The density f jumps at ±½, so the paper replaces it by smooth f<sub>ε</sub> and lets ε → 0 at the end. This is needed for the pair-correlation input only. Safe to skip on a first reading.
- The weight 4/(4 − (ρ − ρ′)²). The unconditional Montgomery theorem carries this weight, and a second test function removes it exactly. Safe to skip.
- The window. The seven-term cosine window has nine-digit coefficients found by search. Only its certified constants matter. Safe to skip.
- What Lean checks. The matrix inequalities, the counting and the exact arithmetic are formalised. The operator construction, the energy asymptotic and the certificate enter as hypotheses. Safe to skip, but remember it when you quote the result.
- Other numbers. The introduction cites unverified reports of 0.83672 and even 0.8981. The proof does not use them. Safe to skip.

## One next step

Open the PDF and read only the paragraph headed "The idea" on pages 1 and 2. It contains the whole mechanism.
