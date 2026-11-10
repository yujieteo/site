source: https://vallethiele.github.io/assets/pdf/msc_thesis.pdf
slogan: Formally completing the polynomial ring ℂ[q] in the gaseous sense gives exactly the holomorphic functions on the disc with polynomial growth at the boundary.
basis: the introduction and the main theorem statements

## Before you start

A master's thesis of about 50 pages can still raise a quiet fear of being slow, because two of its three sections rebuild light condensed mathematics and analytic rings from the ground up. If that fear comes, it is welcome. Nothing here is a race. The thesis offers something you may want: a worked example where the abstract machine of Clausen and Scholze outputs a classical object from complex analysis. The introduction is two pages and states everything. Enjoy those first, and see afterwards whether you want more.

## The story

Hilbert's 21st problem asks to match differential equations with the monodromy of their solutions. The operators z<sup>2</sup>∂ + z and z<sup>2</sup>∂ + 1 on ℂ show an obstruction: their holomorphic solutions, spanned by 1/z and exp(1/z) away from 0, are isomorphic sheaves, yet the equations differ. The classical cure is to allow only tempered functions, those that grow at most like a power of 1/distance to the boundary. Then 1/z counts and exp(1/z) does not. This definition is pure analysis. The thesis recovers it with no analysis. In condensed mathematics a module is called q-gaseous when every null sequence can be summed against powers of q. Start with the polynomial ring ℂ[q], force that condition in the universal derived way, and the result is the ring of tempered holomorphic functions on the open unit disc.

## Main definitions

**Tempered holomorphic function (Definition 3.1).** For a bounded open U ⊂ ℂ, a holomorphic f: U → ℂ is tempered if for some integer N ≥ 0 the function dist(z, ∂U)<sup>N</sup> |f(z)| is bounded on U.
- On the unit disc: equivalent to Taylor coefficients of polynomial growth, |a<sub>n</sub>| = O(n<sup>k</sup>) for some k.

**Analytic ring (Definition 2.1).** A light condensed ring A together with a full subcategory of "complete" A-modules that is closed under limits, colimits, extensions and Ext out of any module, and that contains A itself. Without the last condition it is a pre-analytic ring. The inclusion has a left adjoint, called completion.

**f-gaseous module (Definition 2.9).** Let P = ℤ[ℕ ∪ ∞]/ℤ[∞] be the free condensed abelian group on a null sequence, with shift induced by n ↦ n + 1. For f in A, an A-module M is f-gaseous if id − f·shift induces an isomorphism on Hom<sub>A</sub>(A ⊗ P, M).
- Meaning: (m<sub>0</sub>, m<sub>1</sub>, …) ↦ (m<sub>0</sub> − f m<sub>1</sub>, m<sub>1</sub> − f m<sub>2</sub>, …) is invertible on null sequences, so the sums Σ m<sub>i</sub> f<sup>i</sup> exist.
- Derived version: a complex is derived f-gaseous if all its cohomology modules are f-gaseous. The left adjoint to that inclusion is derived f-gaseous completion.

**Tempered power series (Definition 3.12).** ℂ[[q]]<sup>temp</sup> is the union over k and N of the sets of power series Σ a<sub>m</sub> q<sup>m</sup> with |a<sub>m</sub>| ≤ N(m + 1)<sup>k</sup>. Each set is a compact metrisable subspace of a product of copies of ℂ, which gives the condensed structure.

## Main results

**Theorem A (Section 3.2).** The natural map ℂ[q] → ℂ[[q]]<sup>temp</sup> induces an isomorphism from the derived q-gaseous completion of ℂ[q] to ℂ[[q]]<sup>temp</sup>. So the completion sits in degree 0, and its underlying ring is the ring of tempered holomorphic functions on the open unit disc.
- Step 1: compute the completion of ℝ[q̂] = ℝ ⊗ P, the free real vector space on a null sequence, and find the tempered real power series.
- Step 2: show ℝ[q] → ℝ[q̂] becomes an isomorphism after completion, then extend scalars to ℂ.

**Theorem B (Theorem 2.41(1), new proof).** Let ℤ[q̂] be the free abelian group on a null sequence, with its ring structure. The derived q-gaseous completion of ℤ[q̂] is concentrated in degree 0 and equals the ring of integer power series whose coefficients have polynomial growth.
- Step: compare the real case from Theorem A with the completion of (ℝ/ℤ)[q̂]. The result is from Clausen and Scholze's lectures, and this proof avoids their abstract completion formula.

**Proposition (independence of f; Corollary 2.34).** For K = ℝ or ℂ with the usual topology, the f-gaseous analytic ring structure on K is the same for every f with 0 &lt; |f| &lt; 1. Banach spaces over K are gaseous (Lemma 2.12).

## Note, then ignore

- "Light". Test spaces are metrisable profinite sets only. This keeps the category small and makes P internally projective. Safe to skip on a first reading.
- Two definitions of tempered. The standard one (Definition 3.5) asks polynomial growth of all derivatives of a smooth function. For holomorphic functions on a bounded open it agrees with the simple one (Lemma 3.6). Safe to skip.
- Subanalytic site. Tempered functions form a sheaf only for finite covers by subanalytic opens. This matters for the classical Riemann–Hilbert story, not for Theorem A. Safe to skip.
- q̂ versus q. ℤ[q̂] is the null-sequence ring, not the discrete polynomial ring ℤ[q]. Theorem A is about discrete ℂ[q], and Theorem B is about ℤ[q̂]. Safe to skip.
- Section 3.1. The author says it is motivation only and not needed for the proofs. Safe to skip.

## One next step

Open the thesis at the Introduction (page 1) and read the Example with P and Q and the definition right after it.
