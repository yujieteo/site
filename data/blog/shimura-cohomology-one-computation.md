---
title: "One computation behind the cohomology of Shimura varieties"
date: "2026-09-26"
summary: "A mental ladder from the cohomology of a circle to the automorphic decomposition of intersection cohomology, with the discriminant form as the smallest nontrivial example."
category: Mathematics
tags: mental-computation, shimura-varieties, automorphic-forms, cohomology, modular-curves
slug: shimura-cohomology-one-computation
---

There is no single table containing the cohomology of every Shimura variety. There
is, however, one remarkably stable computation:

> decompose functions into representations, then keep exactly the representations
> whose archimedean part contributes differential forms.

The smallest nontrivial instance is the level-one modular curve with the local
system $\mathcal V_{10}=\operatorname{Sym}^{10}\mathbf C^2$. Our checkable target is

$$
H^1_!(Y(1),\mathcal V_{10})
\cong \mathbf C\Delta\oplus\mathbf C\overline\Delta,
\qquad \dim_{\mathbf C}=2.
$$

This is not the whole cohomology of every Shimura variety. It is the smallest
calculation in which the general mechanism is already visible.

Route: loop $\to$ surface $\to$ modular curve $\to$ varying coefficients $\to$
automorphic decomposition $\to$ intersection cohomology.

## 1. The shadow: one loop

**Prompt.** Compute $H^*(S^1,\mathbf C)$ from one vertex and one edge.

<details>
<summary>Mental route</summary>

The cellular cochain groups are $C^0=C^1=\mathbf C$. The coboundary is zero:
the edge ends where it begins. Therefore

$$H^0(S^1,\mathbf C)=\mathbf C,\qquad H^1(S^1,\mathbf C)=\mathbf C.$$

Governing idea: cohomology keeps closed data after quotienting exact data. Here
every cochain is closed and none is a nonzero boundary.

Check: $1-1=0=\chi(S^1)$, and Poincaré duality pairs the two lines.

</details>

## 2. The natural family: genus $g$

**Prompt.** Compute the Betti numbers of a compact connected genus-$g$ Riemann
surface $X$.

<details>
<summary>Mental route</summary>

Use one $0$-cell, $2g$ loop edges, and one $2$-cell. The attaching word is a
product of commutators, so its abelianised boundary is zero. Thus

$$
(b_0,b_1,b_2)=(1,2g,1).
$$

Remember only **one, twice the handles, one**.

Two checks are independent: the alternating sum is $2-2g$, the known Euler
characteristic; Poincaré duality pairs degrees $0$ and $2$ and makes the middle
dimension even.

</details>

## 3. The first Shimura shadow: $X(1)$

**Prompt.** Compute the ordinary cohomology of the compactified level-one modular
curve.

<details>
<summary>Mental route</summary>

The compactification

$$X(1)=\mathrm{SL}_2(\mathbf Z)\backslash(\mathfrak H\cup\{\infty\})$$

has genus zero and is isomorphic to $\mathbf P^1$; Milne gives several proofs in
[Proposition 2.21](https://www.jmilne.org/math/CourseNotes/MF.pdf). Insert $g=0$
into the preceding computation:

$$
H^0=\mathbf C,\qquad H^1=0,\qquad H^2=\mathbf C.
$$

Check: this is the cohomology of a sphere and has Euler characteristic $2$.

Important boundary: this is the coarse compactified curve with constant
coefficients. The open curve, its orbifold structure, and nonconstant local systems
contain more arithmetic.

</details>

## 4. Make the coefficient system vary

**Prompt.** Which coefficient system corresponds to modular forms of weight $k$?

<details>
<summary>Mental route</summary>

Let the standard rank-two local system remember the first cohomology of the
universal elliptic curve. Take

$$\mathcal V_{k-2}=\operatorname{Sym}^{k-2}\mathbf C^2.$$

The shift is the whole mnemonic: **symmetric-power exponent plus two equals
modular weight**. Eichler--Shimura identifies the interior (equivalently here,
parabolic) degree-one cohomology with

$$
H^1_!(Y(1),\mathcal V_{k-2})
\cong S_k\oplus\overline{S_k}.
$$

Why two copies? A holomorphic cusp form gives a differential class; complex
conjugation gives its antiholomorphic partner. This is the curve-level Hodge
decomposition. Youcis makes the link with Matsushima explicit in
[§1, Example 1.56](https://alex-youcis.github.io/MatsushimaNotes.pdf).

Check: conjugation exchanges the two summands, so the complex dimension is
$2\dim S_k$.

</details>

## 5. Target: the discriminant form

**Prompt.** Compute $H^1_!(Y(1),\mathcal V_{10})$.

<details>
<summary>One-shot solution</summary>

Exponent $10$ means weight $12$. The level-one cusp-form space is one-dimensional:

$$S_{12}=\mathbf C\Delta,\qquad
\Delta(q)=q\prod_{n\ge1}(1-q^n)^{24}.$$

Apply Eichler--Shimura:

$$
\boxed{
H^1_!(Y(1),\mathcal V_{10})
\cong \mathbf C\Delta\oplus\mathbf C\overline\Delta
}
$$

and therefore the dimension is $2$.

Check one: the two Hodge types are $(11,0)$ and $(0,11)$. Check two: complex
conjugation exchanges the two lines. Check three: the same representation-theoretic
calculation says that the cohomological discrete series at infinity contributes a
two-dimensional relative Lie-algebra cohomology factor.

</details>

## 6. Compress the mechanism: Matsushima

**Prompt.** What replaces Eichler--Shimura for a compact Shimura variety?

<details>
<summary>Mental route</summary>

For algebraic coefficients $V$, the fixed-level form of Matsushima's formula is

$$
H^i(\mathrm{Sh}_K,\mathcal V)
\cong\bigoplus_\pi
m(\pi)\,\pi_f^K\otimes
H^i(\mathfrak g,K_\infty;\pi_\infty\otimes V).
$$

Run every automorphic representation $\pi$ through three gates:

1. **global:** does it occur, with multiplicity $m(\pi)$?
2. **finite level:** does $\pi_f$ have $K$-fixed vectors?
3. **infinity:** is its relative Lie-algebra cohomology nonzero in degree $i$?

If it survives, multiply the dimensions of the three factors; then add over
$\pi$. Morel states the constant-coefficient theorem and its fixed-level corollary
in [Theorem 3.1 and Corollary 3.2](https://arxiv.org/pdf/2310.16184).

Check: for $G=\mathrm{GL}_2$, the infinity gate is exactly what packages the
holomorphic and antiholomorphic Eichler--Shimura classes.

</details>

## 7. The general noncompact correction

**Prompt.** What changes when the Shimura variety is noncompact?

<details>
<summary>Mental route</summary>

Ordinary cohomology now sees the boundary, so the compact Matsushima formula
does not transfer unchanged. The clean pure object is

$$IH^*(\mathrm{Sh}_K^*),$$

the intersection cohomology of the Baily--Borel compactification. Zucker's theorem
identifies this with $L^2$ cohomology. Borel--Casselman decomposes that $L^2$
cohomology, restoring the same three-gate formula. Morel records the resulting
statement as [Theorem 3.20](https://arxiv.org/pdf/2310.16184).

So first choose the question:

- compact Shimura variety: ordinary cohomology;
- noncompact, pure interior part: intersection/$L^2$ cohomology;
- full ordinary cohomology: also analyse Eisenstein and boundary terms.

Check: the modular curve already warns us. Compactification makes constant
$H^1$ depend only on genus, while local systems and the cusp/interior condition
recover modular forms.

</details>

## Compressed run

1. One loop: $(b_0,b_1)=(1,1)$.
2. Genus $g$: $(b_0,b_1,b_2)=(1,2g,1)$.
3. $X(1)\cong\mathbf P^1$: $(1,0,1)$.
4. $\mathcal V_{k-2}$ means weight $k$.
5. Eichler--Shimura: $H^1_!=S_k\oplus\overline{S_k}$.
6. $k=12$: $S_{12}=\mathbf C\Delta$, so the target dimension is $2$.
7. General case: occurrence $\times$ level invariants $\times$ infinity cohomology.
8. Noncompact case: replace the pure interior calculation by $IH=L^2$ before
   applying the automorphic decomposition.

Recall tomorrow: reconstruct the target from “ten plus two, Delta, conjugate.”
After one week: run the three gates for a hypothetical $\pi$. After one month:
explain why ordinary, compactly supported, interior, and intersection cohomology
answer different questions.

## References

- J. S. Milne, [*Modular Functions and Modular Forms*](https://www.jmilne.org/math/CourseNotes/MF.pdf), §2.21 and §4.
- Alex Youcis, [*The Cohomology of Shimura Varieties and the Langlands Correspondence*](https://alex-youcis.github.io/MatsushimaNotes.pdf), Theorem 1.53 and Example 1.56.
- Sophie Morel, [*Shimura Varieties*](https://arxiv.org/abs/2310.16184), Theorems 3.1 and 3.20.
