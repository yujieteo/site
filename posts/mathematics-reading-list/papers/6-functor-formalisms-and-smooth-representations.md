source: https://arxiv.org/pdf/2410.13038
slogan: Sheaves on X × Y act as kernels, and adjunctions between kernels explain smoothness, properness, admissible representations and compact representations in one stroke.
basis: the abstract and introduction

## Before you start

At 196 pages, with appendices on ∞-categories and enriched categories, this is a reference text. The likely feeling is a mix of overwhelm and boredom: too much to hold, too dry to start. Both are allowed. Nobody reads a reference from the front. If you want to know what "admissible" and "compact" representations have in common, the last four pages of the introduction say it plainly. Start there because it is fun. Coverage is not the aim.

## The story

A six-functor formalism packages a cohomology theory, but proofs inside one used to mean long diagram chases. Heyer and Mann organise the proofs around a single object: the 2-category of kernels. Its objects are spaces over a base S. A morphism from Y to X is a sheaf on X ×<sub>S</sub> Y, and it acts like an integral kernel, as in Fourier–Mukai theory. Finiteness conditions now become the question "does this kernel have an adjoint?". A sheaf that is a left adjoint is called suave. One that is a right adjoint is called prim. Facts about adjoints then give the usual theorems cheaply. Applied to the classifying stack of a p-adic group, suave means admissible and prim means compact, and prim duality yields a new anti-involution on derived Hecke algebras.

## Main definitions

**6-functor formalism.** For a geometric setup (C, E), let Corr(C, E) have the objects of C, with morphisms X ← X′ → Y whose right-hand map lies in E. A 3-functor formalism is a lax symmetric monoidal functor D : Corr(C, E) → Cat. It is a 6-functor formalism if the right adjoints Hom, f<sub>\*</sub> and f<sup>!</sup> exist (Definitions 1.2.2 to 1.2.4).

**Category of kernels.** Fix S in C. The 2-category K<sub>D,S</sub> has as objects the maps X → S in E. The category of morphisms from Y to X is D(X ×<sub>S</sub> Y). Composition is convolution: M ∘ N = π<sub>13!</sub>(π<sub>12</sub><sup>\*</sup>M ⊗ π<sub>23</sub><sup>\*</sup>N) (Definition 1.3.1).

**Suave and prim objects.** Let f : X → S be in E and P in D(X), viewed as a morphism X → S in K<sub>D,S</sub>. P is f-suave if it is a left adjoint there, and f-prim if it is a right adjoint (Definition 1.3.4).
- The other adjoint is called the suave dual SD<sub>f</sub>(P), or the prim dual PD<sub>f</sub>(P).
- With all six functors, SD<sub>f</sub>(P) = Hom(P, f<sup>!</sup>1).

**Suave, smooth and prim maps.** A map f is D-suave if the unit object 1 is f-suave. Its dualising complex is ω<sub>f</sub> = SD<sub>f</sub>(1). It is D-smooth if ω<sub>f</sub> is also invertible. It is D-prim if 1 is f-prim (Definition 1.3.5).

## Main results

**Theorem (extension to stacks; Theorem 1.2.7).** Let C be a site and D a sheafy presentable 6-functor formalism on (C, E). Then D extends uniquely to a sheafy presentable 6-functor formalism on sheaves on C, for a class E′ of maps that is \*-local on the target, !-local on source and target, and tame.
- Example: sheaves of Λ-modules on condensed anima, which include locally compact Hausdorff spaces and classifying stacks of locally profinite groups.

**Theorem (kernels are functorial; Theorem 1.3.7).** The assignment S ↦ K<sub>D,S</sub> upgrades to a lax symmetric monoidal 2-functor from Corr(C, E) to 2-categories. So the kernel categories form a 3-functor formalism one level up.
- Use: this is how the authors prove that suave and prim objects are local on the target.
- Payoff: for a D-suave map, f<sup>!</sup> = f<sup>\*</sup> ⊗ ω<sub>f</sub>. For a D-prim map, f<sub>\*</sub> = f<sub>!</sub>(δ<sub>f</sub> ⊗ −), with δ<sub>f</sub> the codualising complex.

**Proposition (representations as sheaves; Propositions 1.4.1 to 1.4.3).** Let G be a locally profinite group and Λ a commutative ring. Then D(\*/G, Λ) is the left-completed derived category of smooth G-representations on Λ-modules. Assume G has locally finite Λ-cohomological dimension, and let f : \*/G → \* be the structure map. Then:
- V is f-suave if and only if V is admissible, meaning V<sup>K</sup> is perfect for small compact open subgroups K.
- V is f-prim if and only if V is compact.

For a closed subgroup H ⊂ G (also of locally finite cohomological dimension), f<sub>!</sub> along \*/H → \*/G is compact induction.

**Theorem (anti-involution; Theorem 1.4.4).** Let Λ be a field of characteristic p > 0, G a p-adic Lie group and I ⊂ G a p-torsion-free compact open subgroup. The derived Hecke algebra, the derived endomorphism algebra of the compact induction of the trivial representation from I, has a canonical anti-involution. On cohomology it agrees with the one of Schneider–Sorensen.
- Step 1: prim duality is an anti-equivalence on compact objects.
- Step 2: it sends the compactly induced trivial representation to itself.

## Note, then ignore

- Reliance on Liu–Zheng. The main construction result uses unpublished, model-dependent work. The authors say so and announce new foundations. Safe to skip on a first reading.
- Diagonals. Their definition of a geometric setup requires E to be stable under diagonals, a change from Mann's earlier definition. Safe to skip.
- Left completion. D(\*/G, Λ) is the left-completed derived category. It equals the ordinary one when G has locally finite Λ-cohomological dimension. Safe to skip.
- Suave versus smooth. Suave drops the demand that the dualising complex be invertible. The older "cohomologically smooth" includes it. Safe to skip.
- Poincaré duality for manifolds. The paper shows the dualising complex is locally free of the right rank, but does not compare it with the orientation sheaf. Safe to skip.

## One next step

Open the PDF at Section 1.3 and read only Definition 1.3.1 and the paragraph after Proposition 1.3.2 that explains the name "category of kernels".
