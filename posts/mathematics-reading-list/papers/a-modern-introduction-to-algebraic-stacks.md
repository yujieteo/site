source: https://www.preschema.com/lecture-notes/2022-stacks/stacksncts.pdf
slogan: A stack is a sheaf of groupoids on schemes, so quotients and moduli problems keep their symmetries and still admit geometry.
basis: the introduction and the main theorem statements

## Before you start

These notes open with ∞-categories on page 5, before any stack appears. That can raise a quiet shame: "I should already know simplicial sets." You may feel that. It is a fair reaction to 73 dense pages. What you may want from them is one clean definition of a moduli stack that works for vector bundles on a curve. Read for the pleasure of seeing quotients done properly. Finishing can wait.

## The story

Moduli theory wants a space whose points are "gadgets up to equivalence": lines in ℂ<sup>n+1</sup>, vector bundles on a variety, coherent sheaves. Two things block the naive version. First, a set of points is not enough. Grothendieck's remedy is the functor of points, which records the A-valued points for every ring A. Second, a quotient by an equivalence relation forgets how two objects are isomorphic, and automorphisms then break gluing. The fix is to let the functor take values in groupoids instead of sets, and to ask for descent. Khan sets this up in the language of ∞-categories from the start. The payoff comes late: the same language handles derived categories, the cotangent complex and derived stacks, and so gives the deformation theory of moduli of bundles and sheaves with little extra work.

## Main definitions

**Stack (Definition 2.10).** A stack is a sheaf of groupoids on the category of schemes with the étale topology. So it is a functor X from schemes (reversed) to groupoids that satisfies descent along jointly surjective étale families.
- By Theorem 2.11 you may define it on affine schemes only.

**Quotient stack (Definition 4.25).** For a group stack G acting on a stack U over a base S, the quotient [U/G] is the colimit in stacks of the action groupoid, whose levels are G × ... × G × U.
- Points: by Theorem 4.28, a map T → [U/G] is a G-torsor Y → T with a G-equivariant map Y → U.

**Algebraic stack (Definition 5.9).** A stack X is algebraic if its diagonal X → X × X is representable by algebraic spaces and there is a scheme U with a smooth surjection U → X, called an atlas.
- Deligne–Mumford: the same with an étale atlas.
- Algebraic space (Definition 5.7): the diagonal is schematic and a monomorphism, and there is an étale atlas.

**Resolution property (Definition 6.2).** An algebraic stack has it when every quasi-coherent sheaf is a quotient of a direct sum of locally free sheaves of finite rank taken from a fixed collection.

## Main results

**Theorem (quotients are algebraic; Theorem 5.11).** Let G be a smooth group algebraic space over a scheme S, acting on a stack U. If U is algebraic, then [U/G] is algebraic.
- Step 1: the diagonal is representable, checked after an étale cover on which the two points lift to U.
- Step 2: an atlas of U composed with U → [U/G] is an atlas, since U → [U/G] is a G-torsor and G is smooth.

**Theorem (recognising smaller classes; Theorem 5.13).** An algebraic stack is Deligne–Mumford if and only if its diagonal is unramified. It is an algebraic space if and only if its diagonal is a monomorphism. The notes cite Laumon and Moret-Bailly for the proof.

**Theorem (Totaro, Gross; Theorem 6.10).** An algebraic stack has the resolution property if and only if it is a global quotient stack, that is, of the form [U/GL<sub>n</sub>] with U a quasi-affine scheme.
- One direction is Thomason's: equivariant sheaves on a quasi-affine U are quotients of equivariant vector bundles.
- The other uses a quasi-affineness criterion proved in Section 6.4.

**Theorem (moduli of bundles and sheaves; Theorem 10.20).** Let k be a G-ring and X an algebraic space, proper and of finite Tor-amplitude over k. Then the derived moduli stacks of vector bundles on X and of G-bundles on X (G a smooth group scheme) are algebraic, and so is the stack of coherent sheaves when X is smooth. They are smooth when X is a relative curve and quasi-smooth when X is a relative surface.
- Step 1: compute the cotangent complex of the stack of perfect complexes (Theorem 9.5).
- Step 2: apply the Artin–Lurie representability criterion (Theorem 10.18).

## Note, then ignore

- Two versions. A later revision, titled "Lectures on algebraic stacks", has the same content with three-level numbering. Theorem 6.10 here is Theorem 6.2.5 there. Safe to skip on a first reading.
- ∞-categories as weak Kan complexes. Section 1 fixes this model so that later statements are precise. You can read "category with invertible 2-cells" and skip the horn-filling on a first reading.
- Étale versus fpqc. Quasi-coherent sheaves satisfy descent for the finer fpqc topology (after Theorem 3.9), which is more than the definition of a stack needs. Skip it at first.
- Straightening. Theorem 3.5 turns a fibred category into a functor to categories. It is there so that "the stack of quasi-coherent sheaves" is a functor on the nose. Skip it at first.
- G-rings. The excellence-type hypothesis in Theorems 10.18 and 10.20 is needed for Artin approximation only. It holds for fields and for ℤ. Skip it at first.

## One next step

Open the notes at Section 0 and read Examples 0.2 to 0.5 and Theorem 0.6. That is two pages and no ∞-categories.
