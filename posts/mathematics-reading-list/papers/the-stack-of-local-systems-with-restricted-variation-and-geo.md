source: https://arxiv.org/pdf/2010.01906
slogan: Local systems whose semisimple part cannot move form a stack that exists in every sheaf theory, so geometric Langlands can be stated over finite fields.
basis: the introduction and the main theorem statements

## Before you start

The paper has six authors and 346 pages, and it is written in derived algebraic geometry. Overwhelm is the natural response, and perhaps a quiet shame at not knowing what IndCoh is. Both feelings are allowed. You do not have to settle them before you look. What you may want from the paper is small and clear: why the geometric theory and the function-field theory are one subject. The introduction gives that in about ten pages. Read those for interest, and leave the other 330 alone.

## The story

Beilinson and Drinfeld conjectured that D-modules on Bun<sub>G</sub> match ind-coherent sheaves on the stack of Ǧ-local systems on a curve X. That statement needs characteristic zero and D-modules. Number theory needs ℓ-adic sheaves over 𝔽<sub>q</sub>, where no algebraic stack of local systems is known. The authors build a replacement, LocSys<sup>restr</sup>, from the category of lisse sheaves alone, so it makes sense in any sheaf theory. In the Betti case it is a disjoint union of formal neighbourhoods: you may deform a local system, but its semisimplification stays fixed. On the other side they keep only sheaves with nilpotent singular support, an idea they credit to Ben-Zvi and Nadler. Then they prove that quasicoherent sheaves on LocSys<sup>restr</sup> act on that category, and they conjecture that Frobenius traces recover automorphic functions.

## Main definitions

**LocSys<sup>restr</sup><sub>G</sub>(X).** Fix a sheaf theory with coefficient field e of characteristic 0. For an affine test scheme S = Spec A, an S-point is a symmetric monoidal functor Rep(G) → A-mod ⊗ QLisse(X) that is right t-exact. Here QLisse(X) is a completion of the ind-category of finite-rank local systems.
- Betti case, G = GL<sub>n</sub>: a rank n locally free A-module with an action of π<sub>1</sub>(X) in which every element lies in a finite-dimensional e-subspace stable under π<sub>1</sub>(X).
- Shape: an S-point of the usual stack lies in the restricted one exactly when all its e-points have the same semisimplification.

**Shv<sub>Nilp</sub>(Bun<sub>G</sub>).** The full subcategory of ind-constructible sheaves on Bun<sub>G</sub> whose singular support lies in the nilpotent cone Nilp ⊂ T\*(Bun<sub>G</sub>). G is reductive here.

**Lisse Hecke action.** An action of Rep(G)<sup>⊗X-lisse</sup> on a DG category C is a compatible family of functors Rep(G)<sup>⊗I</sup> → End(C) ⊗ QLisse(X)<sup>⊗I</sup>, one for each finite set I. It says Hecke functors at moving points of X vary like local systems.

## Main results

**Theorem (spectral decomposition; Theorems 8.3.7 and 14.3.2).** An action of QCoh(LocSys<sup>restr</sup><sub>G</sub>(X)) on a DG category C is the same as a lisse Hecke action on C. As a result, Shv<sub>Nilp</sub>(Bun<sub>G</sub>) is a module category over QCoh(LocSys<sup>restr</sup><sub>Ǧ</sub>(X)), and it splits as a direct sum over isomorphism classes of semisimple Ǧ-local systems. The authors say their proof uses that X is a smooth proper curve.
- Step 1: prove it in the Betti case from an easier known statement, then pass to de Rham by Riemann-Hilbert.
- Step 2: in the étale case, realise QLisse(X) as a direct factor of the Betti version for a complex curve.

**Theorem (Hecke-lisse implies nilpotent; Theorem 14.4.4).** If the Hecke functors send a sheaf F on Bun<sub>G</sub> into Shv(Bun<sub>G</sub>) ⊗ QLisse(X), then F has nilpotent singular support.
- Case: every Hecke eigensheaf has nilpotent singular support, as Laumon conjectured (Corollary 14.4.10).
- Case: for D-modules, every Hecke eigensheaf has regular singularities (Corollary 16.5.7).

**Conjecture (restricted geometric Langlands; Conjecture 21.2.7).** Shv<sub>Nilp</sub>(Bun<sub>G</sub>) ≃ IndCoh<sub>Nilp</sub>(LocSys<sup>restr</sup><sub>Ǧ</sub>(X)), over any ground field and in any of the sheaf theories.

**Conjecture (Trace Conjecture; Conjecture 22.3.7).** Let X and G be defined over 𝔽<sub>q</sub>. The categorical trace of Frobenius pushforward on Shv<sub>Nilp</sub>(Bun<sub>G</sub>) maps isomorphically to the space of compactly supported functions on Bun<sub>G</sub>(𝔽<sub>q</sub>), that is, to unramified automorphic functions.
- With the theorem above, it gives a spectral decomposition of automorphic functions over semisimple Langlands parameters. The authors say this recovers the unramified case of V. Lafforgue's result.

## Note, then ignore

- Not an algebraic stack. LocSys<sup>restr</sup> has formal directions. Theorem 1.4.5 shows the rigidified version is a disjoint union of formal affine schemes, which is mild enough for QCoh to behave. Safe to skip on a first reading.
- Left completion. QLisse(X) is a left completion of IndLisse(X). The authors note the step is needed only for genus 0. Safe to skip.
- Derived structure. The stack is an object of derived algebraic geometry, but the difference from the usual stack already shows on classical test schemes. Safe to skip.
- Compact generation. The authors prove Shv<sub>Nilp</sub>(Bun<sub>G</sub>) is compactly generated (Theorem 16.1.1). They need it so that the trace of Frobenius is defined. Safe to skip.
- Unramified only. The proof of the spectral theorem does not cover open curves, so ramification is outside the paper. Safe to skip.

## One next step

Open the PDF at Section 0.5.2 and 0.5.3 (page 10) and read the half page that explains "restricted variation" for GL<sub>n</sub> by eigenvalues of loops.
