source: https://sites.math.washington.edu/~jarod/moduli.pdf
slogan: Stable curves and semistable bundles each form an algebraic stack with a projective moduli space, and the book proves both from scratch.
basis: the introduction and the main theorem statements

## Before you start

The draft has 679 pages. Overwhelm is the natural response, and you are free to feel it. The author feels it too: the preface apologises for the length and tells you not to read from start to finish. Each chapter is meant to stand alone, with the background kept in appendices. If you want to know why a space of curves can itself be a geometric object, Chapter 1 gives the answer in pictures. Wander in it for pleasure.

## The story

You want a space whose points are the isomorphism classes of some objects, such as curves of genus g. "Natural" has to mean something, so you ask that families of objects over S match maps from S to the space. Automorphisms block this. A curve with symmetries lets you build families that are locally trivial but globally twisted, and no scheme can track them. The idea is to stop forgetting the symmetries. Assign to each scheme S the groupoid of families over S, not the set. That is a stack. With the étale topology and a smooth cover by a scheme, it becomes an algebraic stack, and geometry works on it. A second step then squeezes out an honest space. The book does this for three test cases: Hilbert schemes (no automorphisms), stable curves (finite), and semistable bundles (infinite).

## Main definitions

**Algebraic stack and Deligne–Mumford stack (Definitions 4.1.4 and 4.1.6).** An algebraic stack is a stack 𝒳 over schemes with the étale topology that admits a scheme U and a surjective, smooth, representable morphism U → 𝒳. It is Deligne–Mumford if U → 𝒳 can be chosen étale.
- Deligne–Mumford: objects have finite, reduced automorphism groups, as stable curves do.
- General algebraic: automorphism groups may have positive dimension, as for vector bundles.

**Coarse and good moduli space (Definitions 5.2.1 and 7.5.5).** A map π: 𝒳 → X to an algebraic space is a coarse moduli space if it is a bijection on isomorphism classes over each algebraically closed field and is universal for maps to algebraic spaces. It is a good moduli space if π is quasi-compact and quasi-separated, 𝒪<sub>X</sub> → π<sub>\*</sub>𝒪<sub>𝒳</sub> is an isomorphism, and π<sub>\*</sub> is exact on quasi-coherent sheaves.
- Model for "good": [Spec A/G] → Spec A<sup>G</sup> for a linearly reductive group G.

**Stable curve (Definition 6.3.2, unpointed case).** A connected, nodal, projective curve of genus g ≥ 2 over an algebraically closed field in which every smooth rational component meets the rest of the curve in at least 3 points.

**Semistable bundle (Definitions 9.1.8 and 9.1.11).** On a smooth projective curve C, the slope of a sheaf F is μ(F) = deg F / rk F. A vector bundle F is semistable if μ(E) ≤ μ(F) for every nonzero subsheaf E, and stable if the inequality is strict for proper subsheaves.

## Main results

**Theorem A (stable curves; Preface).** For g ≥ 2, the moduli stack of stable curves of genus g is a smooth, proper, irreducible Deligne–Mumford stack of dimension 3g − 3. It admits a projective coarse moduli space. The book proves this in characteristic 0.
- Step 1: properness comes from Stable Reduction (Theorem 6.5.1). A family of stable curves over the fraction field of a discrete valuation ring extends after enlarging the ring.
- Step 2: the Keel–Mori theorem gives the coarse space, and a separate argument gives projectivity.

**Theorem B (semistable bundles; Preface).** Let C be a smooth, connected, projective curve of genus g. The stack of semistable vector bundles of rank r and degree d on C is a smooth, universally closed, irreducible algebraic stack of dimension r²(g − 1). It admits a projective good moduli space. The book proves this in characteristic 0.
- Step 1: Theorem 9.3.11 gets a proper good moduli space of dimension r²(g − 1) + 1 from the existence theorem below.
- Step 2: projectivity is proved twice, after Mumford and Seshadri and after Faltings.

**Theorem (Keel–Mori; Theorem 5.4.6).** Let 𝒳 be a Deligne–Mumford stack, separated and of finite type over a noetherian algebraic space S. Then a coarse moduli space π: 𝒳 → X exists, with X separated and of finite type over S and π a proper universal homeomorphism. Also X is proper if and only if 𝒳 is.

**Theorem (existence of good moduli spaces; Theorem 7.10.1).** Let 𝒳 be an algebraic stack of finite type over an algebraically closed field of characteristic 0, with affine diagonal. A good moduli space 𝒳 → X with X a separated algebraic space exists if and only if 𝒳 is Θ-complete and S-complete.
- Reading: the book presents the two completeness conditions as valuative criteria for stacks (Section 7.9).

## Note, then ignore

- Characteristic 0. Stable reduction and the bundle moduli space are proved only in characteristic 0, though Theorem 6.5.1 holds for any discrete valuation ring. Safe to skip on a first reading.
- Less general than the Stacks Project. The author adds noetherian hypotheses and treats Deligne–Mumford stacks where stacks with finite inertia would do. Safe to skip.
- Representability of the diagonal. Many texts put it in the definition of an algebraic stack. Here it is a consequence (Theorem 4.2.1). Safe to skip.
- Coarse space versus stack dimension. For bundles the good moduli space has dimension one more than the stack, since every bundle has the scalars as automorphisms. Safe to skip.
- A dated draft. The file is dated 5 January 2026, so numbering may shift later. Safe to skip.

## One next step

Open the PDF at the Preface, read Theorems A and B, and then look at the "Trichotomy of moduli" table in Chapter 1.
