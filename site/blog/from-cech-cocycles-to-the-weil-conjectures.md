---
title: "From Čech cocycles to the Weil conjectures"
date: "2026-09-26"
summary: "A mental computation ladder from étale gluing data to Frobenius point counts, with one elliptic curve worked completely and the exact deep input in Deligne's proof exposed."
category: Mathematics
tags: mental-computation, etale-cohomology, cech-cohomology, weil-conjectures, frobenius, elliptic-curves
slug: from-cech-cocycles-to-the-weil-conjectures
---

The concrete target is

$$
E/\mathbf F_5:y^2=x^3+x+1,\qquad
\lvert E(\mathbf F_5)\rvert=9,\quad \lvert E(\mathbf F_{25})\rvert=27,\quad
\lvert E(\mathbf F_{125})\rvert=108.
$$

We will reconstruct these numbers from Frobenius on $\ell$-adic étale cohomology,
starting with gluing cocycles. Then we will isolate the same three mechanisms that prove
the Weil conjectures for every smooth projective variety.

This is an execution manual, not a compressed claim to reprove Deligne mentally. Its
honest deep gap is named in Unit 9.

Dependency route:

$$
\text{overlap data}\to\text{étale covers}\to\text{Kummer}\to H^1(E)
\to F\to\text{trace}\to Z(E,t)\to\text{purity}.
$$

## 1. The shadow: a Čech class

**Prompt.** What does a degree-one cohomology class compute?

<details>
<summary>Mental route</summary>

Choose local objects on a cover $(U_i)$. On an overlap, compare them by
$g_{ij}$. Compatibility on triple overlaps says

$$g_{jk}-g_{ik}+g_{ij}=0.$$

Changing the local choices by $h_i$ changes $g_{ij}$ by $h_j-h_i$.
Therefore

$$H^1=\frac{\text{compatible overlap data}}{\text{changes of local trivialisation}}.$$

Governing idea: cohomology measures the failure of compatible local choices to become
one global choice.

Check: if one global choice exists, every comparison is a coboundary. Milne gives the
étale Čech complex and its comparison with derived cohomology in
[§10](https://www.jmilne.org/math/CourseNotes/LEC.pdf#page=80).

</details>

## 2. Why the cover must be étale

**Prompt.** Why can étale cohomology see roots that Zariski cohomology misses?

<details>
<summary>Mental route</summary>

The equation $T^\ell=a$ need not have a Zariski-local solution. If $\ell\ne p$ and
$a$ is invertible, adjoining a root produces an étale cover because
$\ell T^{\ell-1}$ is invertible at that root. Thus the map

$$\mathbf G_m\xrightarrow{(-)^\ell}\mathbf G_m$$

is locally surjective in the étale topology. Its kernel is $\mu_\ell$, giving the
Kummer sequence

$$1\to\mu_\ell\to\mathbf G_m\xrightarrow{(-)^\ell}\mathbf G_m\to1.$$

Check: when $\ell=p$, the derivative vanishes; this is exactly why étale
$\ell$-adic cohomology requires $\ell\ne p$. See Milne
[§7.9](https://www.jmilne.org/math/CourseNotes/LEC.pdf#page=63).

</details>

## 3. Turn root-gluing into a computable group

**Prompt.** Compute $H^1(E,\mu_\ell)$ for an elliptic curve over an algebraically
closed field, with $\ell\ne p$.

<details>
<summary>Mental route</summary>

The Kummer long exact sequence contains

$$
k^*\xrightarrow{(-)^\ell}k^*\to H^1(E,\mu_\ell)
\to\operatorname{Pic}(E)\xrightarrow{\ell}\operatorname{Pic}(E).
$$

Because $k$ is algebraically closed, $k^*$ is $\ell$-divisible. Hence

$$H^1(E,\mu_\ell)\cong\operatorname{Pic}(E)[\ell].$$

Torsion has degree zero, and $\operatorname{Pic}^0(E)\cong E$, so

$$H^1(E,\mu_\ell)\cong E[\ell]\cong(\mathbf Z/\ell)^2.$$

Passing through $\ell^r$ and tensoring gives a two-dimensional
$H^1_{\mathrm{et}}(E,\mathbf Q_\ell)$ (up to the Kummer twist convention).

Check: its rank $2$ matches the two loops of a complex torus; duality supplies ranks
$(1,2,1)$.

</details>

## 4. The observable: count one fibre by hand

**Prompt.** Count $E(\mathbf F_5)$ for $y^2=x^3+x+1$.

<details>
<summary>Mental route</summary>

The squares mod $5$ are $0,1,4$. For $x=0,1,2,3,4$, the right side is

$$1,3,1,1,4.$$

These give $2,0,2,2,2$ choices of $y$. Add the point at infinity:

$$\boxed{\lvert E(\mathbf F_5)\rvert=9}.$$

For a smooth projective curve, the trace formula reads

$$\lvert E(\mathbf F_5)\rvert=1-\operatorname{Tr}(F\mid H^1)+5.$$

Therefore $a_5=\operatorname{Tr}(F\mid H^1)=5+1-9=-3$.

Check: Hasse's bound gives $|-3|\le2\sqrt5$.

</details>

## 5. One trace generates every extension count

**Prompt.** Compute the next two point counts without enumerating étale
points.

<details>
<summary>Mental route</summary>

Frobenius on the two-dimensional $H^1$ has trace $-3$ and determinant $5$, hence

$$P_1(T)=T^2+3T+5=(T-\alpha)(T-\beta).$$

Let $s_n=\alpha^n+\beta^n$. The characteristic equation gives

$$s_0=2,\quad s_1=-3,\quad s_n=-3s_{n-1}-5s_{n-2}.$$

Thus $s_2=-1$ and $s_3=18$. Since

$$\lvert E(\mathbf F_{5^n})\rvert=5^n+1-s_n,$$

we obtain

$$\boxed{\lvert E(\mathbf F_{25})\rvert=27,\qquad\lvert E(\mathbf F_{125})\rvert=108}.$$

Check: $\alpha\beta=5$, so the recurrence's constant coefficient must be $5$.

</details>

## 6. Compress all counts into one function

**Prompt.** Recover the zeta function.

<details>
<summary>Mental route</summary>

Use

$$-\log\det(1-tF)=\sum_{n\ge1}\operatorname{Tr}(F^n)\frac{t^n}{n}.$$

Exponentiating the alternating trace formula yields

$$
Z(E,t)=\exp\!\left(\sum_{n\ge1}\lvert E(\mathbf F_{5^n})\rvert\frac{t^n}{n}\right)
=\frac{1+3t+5t^2}{(1-t)(1-5t)}.
$$

Check: the logarithmic derivative's $t^0$ coefficient is
$1-(-3)+5=9$, the first point count. Deligne writes the general determinant formula
as [(1.5.4)](https://www.numdam.org/item/PMIHES_1974__43__273_0.pdf#page=4).

</details>

## 7. General mechanism I: rationality

**Prompt.** Why is $Z(X,t)$ rational for smooth projective $X/\mathbf F_q$?

<details>
<summary>Mental route</summary>

Grothendieck--Lefschetz says

$$
\lvert X(\mathbf F_{q^n})\rvert=
\sum_i(-1)^i\operatorname{Tr}(F^n\mid H^i_{\mathrm{et}}(\bar X,\mathbf Q_\ell)).
$$

Apply the logarithm identity from Unit 6 degree by degree:

$$
Z(X,t)=\prod_i
\det(1-tF\mid H^i)^{(-1)^{i+1}}.
$$

Each $H^i$ is finite-dimensional, so every determinant is a polynomial: the product is
rational.

Check: odd degrees occur upstairs and even degrees downstairs. The trace formula and
determinant expression appear in Deligne
[(1.5.1)--(1.5.4)](https://www.numdam.org/item/PMIHES_1974__43__273_0.pdf#page=3).

</details>

## 8. General mechanism II: the functional equation

**Prompt.** Where does the symmetry of $Z(X,t)$ come from?

<details>
<summary>Mental route</summary>

If $d=\dim X$, Poincaré duality gives a perfect Frobenius-compatible pairing

$$H^i\times H^{2d-i}\longrightarrow\mathbf Q_\ell(-d).$$

Consequently, if $\alpha$ occurs in degree $i$, its paired eigenvalue in degree
$2d-i$ is $q^d/\alpha$. Pair the corresponding determinant factors. Their reciprocal
symmetry produces the functional equation, with the Euler characteristic controlling
the power of $t$ and $q$.

Check: applying the pairing twice returns the original eigenvalue, and the paired
product is $q^d$. This is the cohomological source of the zeta symmetry, not a formal
accident.

</details>

## 9. General mechanism III: purity

**Prompt.** What is the exact deep theorem needed for the Riemann hypothesis?

<details>
<summary>Mental route</summary>

Deligne proves that for smooth projective $X/\mathbf F_q$, every eigenvalue $\alpha$
of Frobenius on $H^i$ is algebraic and, under every complex embedding,

$$\boxed{|\alpha|=q^{i/2}}.$$

This is purity of weight $i$. For our curve, $i=1$, so $|\alpha|=|\beta|=\sqrt5$;
indeed the roots of $T^2+3T+5$ are $(-3\pm i\sqrt{11})/2$.

Check: their squared magnitude is $(9+11)/4=5$.

Theorem-backed, not a mental derivation: Deligne's proof reduces dimension with weak
Lefschetz and Lefschetz pencils, controls vanishing cycles by Picard--Lefschetz
monodromy, and applies the fundamental estimate/main lemma to the remaining middle
cohomology. The precise purity statement is
[Theorem 1.6](https://www.numdam.org/item/PMIHES_1974__43__273_0.pdf#page=4); the
proof closes in §7. This machinery is the prerequisite gap one must study to prove,
rather than merely use, the theorem.

</details>

## 10. Reassemble the Weil conjectures

**Prompt.** Give the proof architecture in one breath.

<details>
<summary>Mental route</summary>

For smooth projective $X/\mathbf F_q$:

1. étale descent and derived cohomology produce finite-dimensional $H^i$ with
   Frobenius;
2. the trace formula turns fixed points of $F^n$ into alternating traces;
3. the logarithm-of-determinant identity makes $Z(X,t)$ rational;
4. Poincaré duality pairs degrees $i$ and $2d-i$, giving the functional equation;
5. Deligne purity puts degree-$i$ eigenvalues on $|\alpha|=q^{i/2}$;
6. comparison/base-change identifies the determinant degrees with Betti numbers.

Independent checks: dual eigenvalue magnitudes multiply to $q^d$; the alternating
sum of determinant degrees is the Euler characteristic; for a curve the formula reduces
to $1-\operatorname{Tr}(F^n\mid H^1)+q^n$.

</details>

## Compressed run

1. $H^1=$ overlap cocycles modulo retrivialisation.
2. $\ell\ne p$ makes $T^\ell=a$ an étale-local equation.
3. Kummer on $E$: $H^1(E,\mu_\ell)=E[\ell]$, rank $2$.
4. Squares mod $5$: $0,1,4$; fibre contributions $2,0,2,2,2,+1=9$.
5. $a_5=6-9=-3$; $P_1(T)=T^2+3T+5$.
6. $s_n=-3s_{n-1}-5s_{n-2}$: $s_2=-1$, $s_3=18$.
7. Counts: $27,108$; zeta: $(1+3t+5t^2)/((1-t)(1-5t))$.
8. Trace gives rationality; duality gives symmetry; purity gives root sizes.
9. Deep gap: pencils, vanishing cycles, monodromy, main lemma.

Recall tomorrow: reconstruct $9,-3,T^2+3T+5,27,108$.
After one week: derive the determinant formula from $-\log\det(1-tF)$.
After one month: explain exactly why Čech/Kummer constructs the cohomology but does
not by itself prove purity.

## References

- Pierre Deligne, [*La conjecture de Weil I*](https://www.numdam.org/item/PMIHES_1974__43__273_0/), especially §§1, 3, 5--7.
- J. S. Milne, [*Lectures on Étale Cohomology*](https://www.jmilne.org/math/CourseNotes/LEC.pdf), especially §§7, 10, 14, 24--33.
