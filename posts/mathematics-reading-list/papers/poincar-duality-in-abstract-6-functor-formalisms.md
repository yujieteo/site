source: https://arxiv.org/pdf/2301.03821
slogan: Poincaré duality for every smooth map follows from two maps and two commuting diagrams on the projective line, in any six-functor formalism.
basis: the introduction and the main theorem statements

## Before you start

Seventy pages on "abstract six-functor formalisms" can bring on boredom before the first page: it sounds like axioms about axioms. That reaction is reasonable, and there is no need to talk yourself out of it. What the paper offers is a short checklist that replaces the long, case-by-case proofs of Poincaré duality in étale cohomology and its newer relatives. If you have ever wanted to know what duality really needs, the first six pages answer it. Read them for the pleasure of seeing a hard proof shrink.

## The story

Every cohomology theory with six operations seems to satisfy Poincaré duality: for a smooth map f, the exceptional pullback f<sup>!</sup> is the ordinary pullback f<sup>\*</sup> twisted by an invertible object. Yet each theory had its own long proof. Worse, in recent formalisms the categories D(X) are defined by descent, so nobody can compute in them directly. Zavyalov's idea is to "decategorify". Proving an adjunction between functors looks like a statement about all objects. He shows it is equivalent to giving one invertible object, a trace map and a cycle class of the diagonal, with two diagrams that commute. These involve only a few specific objects. Then he shows it is enough to do this for the projective line. With first Chern classes the twist is identified as the Tate twist. Étale duality for schemes and for adic spaces follows from the cohomology of the projective line.

## Main definitions

**Six-functor formalism.** A functor D from correspondences in a category C of spaces to ∞-categories (Definition 2.3.9), giving f<sup>\*</sup>, f<sub>\*</sub>, ⊗, Hom, f<sub>!</sub>, f<sup>!</sup>, with base change and projection formula for f<sub>!</sub>. Here C is locally finitely presented schemes over a base S, or locally finite type adic spaces over a locally noetherian analytic adic S.

**Cohomologically smooth.** Roughly, f: X → Y is cohomologically smooth for D if f<sup>!</sup> ≃ f<sup>\*</sup> ⊗ ω<sub>f</sub> with ω<sub>f</sub> invertible, and this persists after every base change.

**Trace-cycle theory (Definition 3.2.4).** For f: X → Y with diagonal Δ and projections p<sub>1</sub>, p<sub>2</sub> from X ×<sub>Y</sub> X, a triple of an invertible object ω<sub>f</sub> in D(X), a trace f<sub>!</sub>ω<sub>f</sub> → 1<sub>Y</sub>, and a cycle map Δ<sub>!</sub>1<sub>X</sub> → p<sub>2</sub><sup>\*</sup>ω<sub>f</sub>.
- Condition 1: pushing the cycle map along p<sub>1</sub> and then applying the trace gives the identity of 1<sub>X</sub>.
- Condition 2: the analogous composite along p<sub>2</sub>, after tensoring with p<sub>1</sub><sup>\*</sup>ω<sub>f</sub>, gives the identity of ω<sub>f</sub>.

**Theory of first Chern classes (Definitions 5.2.4 and 5.2.8).** Fix an invertible object 1⟨1⟩ on S. A weak theory assigns to each line bundle L on X a class c<sub>1</sub>(L) in H<sup>0</sup>(X, 1<sub>X</sub>⟨1⟩), additively and functorially. It is a theory of first Chern classes if the projective bundle formula holds for the projective line over S.

## Main results

**Theorem (criterion; Theorem 3.3.1 and Remark 3.3.2).** A morphism f in C is cohomologically smooth if and only if it admits a trace-cycle theory.
- Point: only two maps and two diagrams need checking, on a few specific objects. No general knowledge of D(X) or D(Y) is used.

**Theorem (the projective line decides; Theorem 3.3.3).** The relative projective line over S admits a trace-cycle theory if and only if every smooth morphism in C is cohomologically smooth for D.

**Theorem (the twist is Tate; Theorem 5.7.7).** Let D satisfy the excision axiom and admit a theory of first Chern classes. Let f: X → Y be smooth of pure relative dimension d. Then the right adjoint of f<sub>!</sub> is f<sup>!</sup> = f<sup>\*</sup> ⊗ 1<sub>X</sub>⟨d⟩.
- Step 1: Chern classes and the projective bundle formula produce the trace-cycle theory on the projective line.
- Step 2: identify the dualizing object using deformation to the normal cone (Sections 4 and 5).

**Theorem (étale duality again; Theorem 6.1.8 and Remark 6.1.9).** Let f: X → Y be smooth of pure dimension d, for schemes or for locally noetherian analytic adic spaces, with n invertible on Y (in the adic case, in the integral structure sheaf). Then Rf<sub>!</sub> on D(X<sub>ét</sub>; ℤ/n) has right adjoint f<sup>\*</sup>(d)[2d].
- Step 1: define c<sub>1</sub> by the Kummer sequence.
- Step 2: compute the cohomology of the projective line over an algebraically closed field.

## Note, then ignore

- Homotopy category. The trace and cycle maps live in homotopy categories, not as coherent ∞-categorical data. That is why they are easy to construct. Safe to skip on a first reading.
- Without excision. Theorem 5.7.6 covers formalisms with no excision axiom, at the cost of a strong theory of Chern classes and cycle maps. It is aimed at a hoped-for prismatic formalism. Safe to skip.
- General dualizing object. Theorems 4.2.13 and 4.2.17 give f<sup>!</sup>1 as an object built from the relative tangent bundle, for "weakly motivic" or "geometric" D. The Tate case does not need this formula. Safe to skip.
- Stronger than the classics. The étale statements drop separatedness of f and boundedness of the derived categories that SGA 4 and Huber assume. Safe to skip.
- Stacks. The method uses that diagonals are locally closed immersions, so non-representable morphisms of stacks are out of reach (Remark 1.2.5). Safe to skip.

## One next step

Open the paper at Definition 1.2.6 and Theorem 1.2.7 (pages 3 and 4) and read just those two items.
