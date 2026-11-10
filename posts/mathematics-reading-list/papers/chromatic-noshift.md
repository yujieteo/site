source: https://arxiv.org/pdf/2604.01863
slogan: Redshift holds for commutative ring spectra but fails for rigid tensor categories, so the height jump comes from rings and not from K-theory alone.
basis: the introduction and the main theorem statements

## Before you start

This paper is 47 pages and speaks in 2-rings, motives and the cobordism hypothesis from the first page. The likely feeling is shame at not owning the background: redshift, T(n)-localisation, rigid categories. That feeling makes sense, and you can let it sit there. If you want to know what chromatic redshift really depends on, the introduction tells you in plain statements. Enjoy the counterexample as a story first. Following the proofs is optional and can wait.

## The story

Ausoni and Rognes guessed that algebraic K-theory raises chromatic height by one. For commutative ring spectra this is now a theorem: height n goes to height exactly n + 1. The upper bound was proved for all stable categories. The lower bound was proved only with ring-level tools. So a question stayed open. Does the lower bound hold for rigid symmetric monoidal stable categories, which behave much like perfect modules over a ring? Ramzi shows it does not. A rigid category has a dimension map from K-theory to the endomorphisms of the unit. He refines it to remember a circle action, and shows that by enlarging the category you can add or kill K-theory classes until this refined map is an equivalence. Then K-theory has the same height as the unit. No shift.

## Main definitions

**Rigid and locally rigid 2-ring (Definition 1.2).** A 2-ring is a commutative algebra in presentable stable ∞-categories. A compactly generated 2-ring is locally rigid if every compact object is dualisable. It is rigid if the unit is also compact.
- Rigid example: modules over a commutative ring spectrum R.
- Locally rigid but not rigid: p-complete spectra, and T(n)-local spectra.

**Dimension morphism Dim.** For a rigid C there is a map K(C) → End(1<sub>C</sub>), where 1<sub>C</sub> is the unit. The paper refines it to Dim: K(C) → End(1<sub>C</sub>)<sup>BS¹</sup>, the homotopy fixed points of a circle action on dimensions. The circle action comes from the one-dimensional cobordism hypothesis.

**Rigid extension.** A fully faithful, exact, symmetric monoidal functor C → D between rigid categories. Write D<sup>dbl</sup> for the dualisable objects of D.

**Nullstellensatzian object.** A notion of Burklund, Schlank and Yuan that abstracts algebraically closed fields. Every object maps to a non-zero Nullstellensatzian one. Among T(n)-local commutative ring spectra, these are the Lubin–Tate theories over algebraically closed fields.

## Main results

**Theorem (maximal no-shift; Theorem 2.1).** Let C be a locally rigid 2-ring. There is a rigid extension C → D such that Dim: K(D<sup>dbl</sup>) → End(1<sub>D</sub>)<sup>BS¹</sup> ≃ End(1<sub>C</sub>)<sup>BS¹</sup> is an equivalence.
- Step 1: lift any class in the target to K-theory of a small rigid extension, using the description of free rigid categories.
- Step 2: kill any K-theory class on which Dim vanishes in a further small extension, using the cited result [RSW25] that categorifies K-theory classes.

**Theorem (Noshift; Corollary 2.2).** Let C be a non-zero rigid T(n)-local symmetric monoidal ∞-category. There is a non-zero rigid T(n)-local D and a symmetric monoidal functor C → D, which can be chosen fully faithful, with L<sub>T(n+1)</sub>K(D<sup>dbl</sup>) = 0. Corollary 2.3 gives countably generated examples.

**Theorem (K-theoretic Nullstellensatz; Theorem 3.18).** Let C be a locally rigid 2-ring with κ-compact unit, for example T(n)-local spectra. Let D be a max(κ, ℵ<sub>1</sub>)-Nullstellensatzian rigid commutative C-algebra. Then Dim: K(D<sup>dbl</sup>) → End(1<sub>D</sub>)<sup>BS¹</sup> is an equivalence of commutative ring spectra.
- Case T(n)-local: End(1<sub>D</sub>) is a Lubin–Tate theory of height n, so this computes K(D<sup>dbl</sup>) completely, and it vanishes T(n+1)-locally.

**Theorem (Levy's conjecture; Corollary 2.19).** For every ordinary ring R there is a small rigid idempotent-complete commutative Perf(R)-algebra C with K<sub>0</sub>(C) ≅ R.

## Note, then ignore

- "Dimension" against "dimension". The capital letter means the version that records the circle action. It is a naming convention. Safe to skip on a first reading.
- Which K-theory. A T(n)-local D has several small categories attached to it. Lemma 1.36 says all reasonable choices agree T(n+1)-locally. Safe to skip.
- Cardinals κ and ℵ<sub>1</sub>. They control the size of the extensions and force arguments through homotopy classes. They do not change the statement you remember. Safe to skip.
- Existence of Nullstellensatzian objects. It needs a "quasi-compact" hypothesis (Definition 3.12, Corollary 3.15), which holds for T(n)-local spectra. Safe to skip.
- Height 0 by hand. Section 4 uses the semisimplicity of Deligne's Rep(GL<sub>t</sub>) to give a simpler rational proof, and even an ordinary additive 1-category example (Corollary 4.28). Safe to skip, though it is the easiest example.

## One next step

Open the paper at the Introduction (page 2) and read from the start to the Noshift theorem on page 3, including the example about spectra with countable homotopy groups.
