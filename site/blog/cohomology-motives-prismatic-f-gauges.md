---
title: "One cohomology computation through motives and prismatic F-gauges"
date: "2026-09-26"
summary: "A mental ladder from the cohomology of the projective line to pure and mixed motives, then to the prismatic F-gauge that retains Frobenius and Hodge data."
category: Mathematics
tags: mental-computation, algebraic-geometry, cohomology, pure-motives, mixed-motives, prismatic-cohomology, f-gauges
slug: cohomology-motives-prismatic-f-gauges
---

The target is to reconstruct, without writing,

$$
h(\mathbf P^1)=\mathbf1\oplus\mathbf1(-1),\qquad
M(\mathbf G_m)=\mathbf1\oplus\mathbf1(1)[1],
$$

and the corresponding cohomological shadows. Over a finite field, the same two
pieces explain

$$\lvert\mathbf P^1(\mathbf F_{q^n})\rvert=1+q^n.$$

For a smooth proper lift of $\mathbf P^1$ in mixed characteristic, prismatic
cohomology promotes those pieces to the unit and Tate prismatic $F$-gauges: its
Hodge--Tate shadow has one class in bidegrees $(0,0)$ and $(1,1)$, while its
crystalline shadow has Frobenius eigenvalues $1$ and $p$.

Route:

$$
\text{two cells}\to\text{two projectors}\to\text{pure motive}
\to\text{realizations}\to\text{localization}\to\text{mixed motive}
\to\text{prism}\to F\text{-gauge}.
$$

Conventions vary: some authors write the Lefschetz summand as $\mathbf L$ or
$\mathbf1(-1)$; Voevodsky's cohomological Tate object is $\mathbf1(1)[2]$.
Keep the formulas internally consistent rather than translating signs by memory.

## 1. Shadow: cohomology of the projective line

**Prompt.** Compute $H^*(\mathbf P^1(\mathbf C),\mathbf Q)$.

<details>
<summary>Mental route</summary>

Topologically $\mathbf P^1(\mathbf C)$ is a sphere. Give it one $0$-cell and one
$2$-cell. The cellular complex has $\mathbf Q$ in degrees $0$ and $2$ and no
possible nonzero differential. Hence

$$H^0=\mathbf Q,\qquad H^1=0,\qquad H^2=\mathbf Q(-1).$$

The Tate label records that the top class has Hodge type $(1,1)$; it is not an
extra vector-space dimension.

Check one: $1-0+1=2=\chi(S^2)$. Check two: Poincare duality pairs $H^0$ with
$H^2$. Check three: the hyperplane class generates the top group.

Permanent memory: **point plus hyperplane**. Everything later refines these two
classes.

**Status:** elementary topology plus the Hodge type of an algebraic divisor.

</details>

## 2. Pure motive: split by correspondences

**Prompt.** Recover the Chow motive of $\mathbf P^1$.

<details>
<summary>Mental route</summary>

Choose a rational point $x$. In $\mathbf P^1\times\mathbf P^1$, the
correspondences

$$\pi_0=[x\times\mathbf P^1],\qquad
\pi_2=[\mathbf P^1\times x]$$

are orthogonal projectors whose sum is the diagonal. Splitting them gives

$$\boxed{h(\mathbf P^1)=\mathbf1\oplus\mathbf1(-1).}$$

The first piece is detected by constants; the second is the Lefschetz motive,
detected by the point or hyperplane class. This is the rank-two case of the
[projective bundle formula](https://stacks.math.columbia.edu/tag/0FGQ).

Check: applying any Weil cohomology sends the two projectors to degree $0$ and
degree $2$, reproducing Unit 1. Tensoring the formula generates the familiar
cellular decomposition of projective spaces.

Pure motives apply naturally to smooth projective varieties because duality and
algebraic correspondences preserve weight. They are the higher object whose
realization functors produce several cohomology theories at once.

**Status:** theorem-backed Chow-motive decomposition.

</details>

## 3. Realization: one source, several shadows

**Prompt.** What does the pure decomposition predict in each Weil cohomology?

<details>
<summary>Mental route</summary>

A realization is additive and sends the unit to the coefficient field. It sends
the Lefschetz piece to one Tate-twisted class in degree $2$. Therefore the same
two-term pattern appears as

$$
H^*_{B}:\ \mathbf Q\oplus\mathbf Q(-1)[-2],\qquad
H^*_{\mathrm{et}}:\ \mathbf Q_\ell\oplus\mathbf Q_\ell(-1)[-2],
$$

and in de Rham cohomology as a unit in $H^0$ plus the hyperplane class in
$F^1H^2$. Over $\mathbf F_q$, geometric Frobenius has traces $1$ and $q^n$ on
the two pieces in the convention used by the trace formula, so

$$\boxed{\lvert\mathbf P^1(\mathbf F_{q^n})\rvert=1+q^n.}$$

Check directly: the points are the $q^n$ affine coordinates plus infinity.

Governing idea: a motive is not another numerical invariant. It is a universal
package on which different cohomology theories are functors.

**Status:** theorem-backed realization formalism; Frobenius conventions must be
kept fixed.

</details>

## 4. Why pure motives are insufficient

**Prompt.** What changes when two points are removed from $\mathbf P^1$?

<details>
<summary>Mental route</summary>

The open curve is $\mathbf G_m$. Topologically $\mathbf C^\times$ retracts to a
circle, so

$$H^0(\mathbf C^\times,\mathbf Q)=\mathbf Q,\qquad
H^1(\mathbf C^\times,\mathbf Q)=\mathbf Q(-1).$$

The degree-one class is $d\log t$: it records winding around the missing divisor.
Smooth but nonproper geometry therefore puts a Tate class in an odd degree. A
category containing only direct summands of smooth projective varieties cannot
encode all localization cones naturally.

Check: integrate $dt/t$ once around the unit circle to get $2\pi i$; there is
one loop, not two, because the loops around $0$ and $\infty$ sum to zero.

This is the first mixed habit: remember the boundary as part of the object, not
as an afterthought. The word “mixed” refers to allowing extensions and complexes
of pure pieces; this particular example splits into Tate pieces, but its degree
shift already forces the triangulated setting.

**Status:** elementary topology and algebraic de Rham theory.

</details>

## 5. Mixed motive: localization computes $\mathbf G_m$

**Prompt.** Compute $M(\mathbf G_m)$ from the missing point in $\mathbf A^1$.

<details>
<summary>Mental route</summary>

Use the Gysin triangle for $\{0\}\subset\mathbf A^1$:

$$
M(\mathbf G_m)\longrightarrow M(\mathbf A^1)
\longrightarrow M(\{0\})(1)[2]\longrightarrow.
$$

Homotopy invariance gives $M(\mathbf A^1)=\mathbf1$, and the rational point
$1\in\mathbf G_m$ splits off the unit. The reduced remainder is the shifted Tate
piece:

$$\boxed{M(\mathbf G_m)=\mathbf1\oplus\mathbf1(1)[1].}$$

Under cohomological realization, the shifted Tate summand becomes the
$\mathbf Q(-1)$ in $H^1$ from Unit 4. This is the smallest localization
calculation in Voevodsky's triangulated category; the
[Gysin triangle](https://www-fourier.ujf-grenoble.fr/~peters/Books/Motieven/PureMotives-final.pdf)
is the governing mechanism.

Check by compactifying instead: $\mathbf G_m=\mathbf P^1-\{0,\infty\}$; the two
boundary classes have one relation, leaving one reduced class.

**Status:** theorem-backed mixed-motive localization. Tate-sign conventions vary
between homological and cohomological realizations.

</details>

## 6. Prism: the arithmetic base object

**Prompt.** What minimum structure lets one see de Rham and crystalline shadows
together?

<details>
<summary>Mental route</summary>

A bounded prism is a pair $(A,I)$: $A$ is a $p$-complete $\delta$-ring, $I$ is a
Cartier divisor, and $p\in I+\varphi(I)A$. The $\delta$-structure supplies a
Frobenius lift

$$\varphi(a)=a^p+p\delta(a).$$

For a smooth $p$-adic formal scheme $X$ over $A/I$, prismatic cohomology
$R\Gamma_\Delta(X/A)$ is an $A$-complex with Frobenius. Base changes recover
Hodge--Tate, de Rham, and crystalline information; this unification is the main
comparison package of [Bhatt--Scholze](https://arxiv.org/abs/1905.08229).

Check the crystalline prism: $(W(k),(p))$. Modulo $p$ it sees differential-form
data; over $W(k)$ it carries the Frobenius used by crystalline cohomology.

Governing idea: do not compare cohomologies only after computing them. Build one
object whose specializations are the comparisons.

**Status:** theorem-backed definition and comparison philosophy. Constructing the
prismatic site is a genuine prerequisite gap, not a mental calculation.

</details>

## 7. Why an $F$-gauge is richer than a Frobenius module

**Prompt.** What information does a prismatic $F$-gauge retain?

<details>
<summary>Mental route</summary>

“Cohomology plus Frobenius” forgets which integral lattice and filtration make
the comparison maps compatible. A prismatic $F$-gauge packages the prismatic
object, its Frobenius, and the Nygaard/Hodge--Tate filtration in one coefficient
object. Its specializations produce the filtered de Rham/Hodge--Tate and
Frobenius-crystalline shadows.

The useful slogan is

$$\boxed{F\text{-gauge}=\text{integral lattice}+\text{filtration}+\text{Frobenius}.}$$

This is a slogan, not a definition: formally the object lives as a suitable
quasicoherent complex on the syntomic/prismatic stack. Relative prismatic
cohomology is naturally valued in $F$-gauges, and syntomic cohomology can be
expressed as maps from the unit gauge; see Tang's
[Definitions 1.3 and Example 3.12](https://www.cambridge.org/core/journals/compositio-mathematica/article/syntomic-cycle-classes-and-prismatic-poincare-duality/DBC3345FBD68DF30EE65E8859B059F5D).

Check: forgetting the filtration should recover a Frobenius-bearing prismatic
complex; taking Hodge--Tate specialization should recover graded differential
forms. If either shadow is absent, the package is too small.

**Status:** theorem-backed structural summary; the stacky definition is the
noncompressible prerequisite.

</details>

## 8. Target: the $F$-gauge of $\mathbf P^1$

**Prompt.** Reconstruct the two pieces of prismatic cohomology of $\mathbf P^1$.

<details>
<summary>One-shot solution</summary>

The projective bundle formula and the prismatic first Chern class lift “point
plus hyperplane” into the category of $F$-gauges. Thus the prismatic realization
of $\mathbf P^1$ is the direct sum of the unit gauge in degree $0$ and the Tate
gauge in degree $2$.

Read its two decisive shadows:

- Hodge--Tate: $H^0(\mathcal O)=1$ and $H^1(\Omega^1)=1$, giving types $(0,0)$
  and $(1,1)$.
- Crystalline over a perfect field: $H^0_{\mathrm{crys}}=W(k)$ with Frobenius
  $1$, while $H^2_{\mathrm{crys}}=W(k)$ on the hyperplane class with Frobenius
  $p$ (semilinearly).

Therefore over $\mathbf F_q$, the $n$th Frobenius traces are $1$ and $q^n$;
the trace formula returns $1+q^n$.

Check one: the Hodge numbers agree with Unit 1. Check two: the crystalline slopes
are $0$ and $1$, matching the two Hodge degrees. Check three: forgetting to any
classical realization reproduces Unit 3.

Permanent memory: the $F$-gauge does not add a third cohomology group. It keeps
the same two motivic pieces integral while remembering how filtration and
Frobenius meet.

**Status:** theorem-backed projective bundle and prismatic comparison results.

</details>

## 9. The complete mental run

1. Sphere: $(b_0,b_1,b_2)=(1,0,1)$.
2. Point plus hyperplane: $h(\mathbf P^1)=\mathbf1\oplus\mathbf1(-1)$.
3. Realize: unit in degree $0$, Tate class in degree $2$.
4. Remove a divisor: $\mathbf G_m$ has one $d\log t$ class in degree $1$.
5. Localize: $M(\mathbf G_m)=\mathbf1\oplus\mathbf1(1)[1]$.
6. Prism: one complex specializes to Hodge and crystalline shadows.
7. Gauge: remember lattice, filtration, and Frobenius together.
8. For $\mathbf P^1$: Hodge types $(0,0),(1,1)$; Frobenius $1,p$.
9. Trace: $1+q^n$.

## Spaced recall

- Tomorrow: derive both motive decompositions from “point plus hyperplane” and
  “open complement.”
- In three days: translate the two $\mathbf P^1$ pieces into Betti, de Rham,
  etale, crystalline, and Hodge--Tate language.
- In one week: replace $\mathbf P^1$ by a smooth projective curve and name which
  middle piece is no longer Tate.
- Recombine: explain in one sentence why motives unify realizations while an
  $F$-gauge refines the $p$-adic realization integrally.

## References

- The Stacks Project, [Chow motives and the projective bundle
  formula](https://stacks.math.columbia.edu/tag/0FGQ).
- V. Voevodsky, [*Triangulated Categories of Motives over a
  Field*](https://www.math.ias.edu/Voevodsky/files/files-original/Dropbox/Published_papers/Motives/Collection/s5.pdf).
- B. Bhatt and P. Scholze, [*Prisms and Prismatic
  Cohomology*](https://arxiv.org/abs/1905.08229).
- B. Bhatt and J. Lurie, [*Absolute Prismatic
  Cohomology*](https://arxiv.org/abs/2201.06120).
- L. Tang, [*Syntomic cycle classes and prismatic Poincare
  duality*](https://www.cambridge.org/core/journals/compositio-mathematica/article/syntomic-cycle-classes-and-prismatic-poincare-duality/DBC3345FBD68DF30EE65E8859B059F5D).
