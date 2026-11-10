source: https://user.math.uzh.ch/ayoub/PDF-Files/THESE.PDF
slogan: Six short axioms on pullback functors give Grothendieck's operations and nearby cycles, so motives over any base behave like étale sheaves.
basis: the introduction and the main theorem statements

## Before you start

This is a thesis of 571 pages, in French, in two volumes. The likely feeling is overwhelm, and perhaps a wish to close the file at the 2-categorical preliminaries. That reaction fits the size of the thing. Nobody reads this text front to back. People use it as the place where a formalism they already trust from sheaf theory is proved for motives. If you want to use f<sub>!</sub> and f<sup>!</sup> for motives with a clear conscience, one page of it is enough. Enjoy that page.

## The story

In étale cohomology, every morphism f : X → Y gives four functors f<sup>\*</sup>, f<sub>\*</sub>, f<sub>!</sub>, f<sup>!</sup> between derived categories, with base change and duality. Voevodsky announced the same for the stable homotopy categories of schemes, but no proof was written down. Deligne's notes held only the statement. Ayoub supplies a proof, and does it axiomatically. Start with one assignment X ↦ H(X) of triangulated categories with pullbacks f<sup>\*</sup>. Ask for six properties. The key ones are localisation for an open set and its closed complement, 𝔸<sup>1</sup>-invariance, and invertibility of the Tate twist. From these he builds f<sup>!</sup> first for closed immersions, then for smooth maps using Thom equivalences, and glues the two. The second half of the text builds nearby cycles functors in the same abstract setting.

## Main definitions

**Stable homotopical 2-functor (Definition 1.4.1).** A contravariant 2-functor H<sup>\*</sup> from quasi-projective S-schemes to triangulated categories, X ↦ H(X), f ↦ f<sup>\*</sup>, satisfying six axioms: H(∅) = 0, each f<sup>\*</sup> has a right adjoint f<sub>\*</sub> (with i<sup>\*</sup>i<sub>\*</sub> → Id invertible for immersions), each smooth f<sup>\*</sup> has a left adjoint f<sub>#</sub> with smooth base change, and the three axioms below.
- Localisation: for an open immersion j with closed complement i, the pair (j<sup>\*</sup>, i<sup>\*</sup>) is conservative.
- Homotopy and stability: for p : 𝔸<sup>1</sup><sub>X</sub> → X with zero section s, the unit Id → p<sub>\*</sub>p<sup>\*</sup> is invertible, and p<sub>#</sub>s<sub>\*</sub> is an equivalence.

**Crossed functor.** Four 2-functors H<sup>\*</sup>, H<sub>\*</sub>, H<sub>!</sub>, H<sup>!</sup> with the same objects, together with exchange morphisms for each of the four mixed pairs over cartesian squares, subject to compatibility conditions. It packages base change coherently.

**Thom equivalence.** For a locally free coherent sheaf M on X, an autoequivalence Th(M) of H(X), built from the vector bundle projection and its zero section. It is the abstract version of a Tate twist and shift. A short exact sequence 0 → N → M → L → 0 gives Th(M) ≅ Th(L) ∘ Th(N).

**Specialisation system (Definition 3.1.1).** Over a base B with open part η and closed part σ, a family of triangulated functors sp<sub>f</sub> : H<sub>1</sub>(X<sub>η</sub>) → H<sub>2</sub>(X<sub>σ</sub>), one for each f : X → B, with exchange maps that are invertible for smooth pullback and projective pushforward. Nearby cycles Ψ<sub>f</sub> are the main example.

## Main results

**Theorem (the four operations; Scholie 1.4.2).** Let S be quasi-compact and separated, and let H be a stable homotopical 2-functor on quasi-projective S-schemes. Then H<sup>\*</sup> extends to a crossed functor (H<sup>\*</sup>, H<sub>\*</sub>, H<sub>!</sub>, H<sup>!</sup>) with f<sub>!</sub> left adjoint to f<sup>!</sup>. There is a natural map f<sub>!</sub> → f<sub>\*</sub>, invertible for f projective. For f smooth with relative differentials Ω<sub>f</sub>, f<sup>!</sup> ≅ Th(Ω<sub>f</sub>) f<sup>\*</sup> and f<sub>!</sub> ≅ f<sub>#</sub> Th<sup>−1</sup>(Ω<sub>f</sub>). Base change holds for projective morphisms. Ayoub notes that he does not know whether the extension is unique up to unique isomorphism.
- Step 1: define i<sup>!</sup> for closed immersions from localisation, and f<sup>!</sup> for smooth f by a Thom twist.
- Step 2: glue the two along the factorisation of any morphism as an immersion followed by a projective bundle projection, using a purity isomorphism to check compatibility.

**Theorem (semi-stable computation; Theorem 3.3.10).** For a specialisation system and a semi-stable f, the restriction of sp<sub>f</sub> of the unit to a branch of the special fibre is computed by pushing forward from the part of that branch away from the other branches. In the first case, a curve with two branches D<sub>1</sub>, D<sub>2</sub>, the restriction to D<sub>1</sub> is v<sub>\*</sub> of the unit, for v : D<sub>1</sub> − (D<sub>1</sub> ∩ D<sub>2</sub>) → D<sub>1</sub>. I state this from the chapter introduction, not from the full statement.

**Claim (nearby cycles; Sections 3.4 to 3.6).** There are specialisation systems Υ (unipotent nearby cycles) and Ψ (total nearby cycles) for motives. Ψ<sub>f</sub> preserves constructible objects and commutes with duality and with exterior tensor product. With rational coefficients, Υ carries a monodromy operator N : Υ → Υ(−1) that fits in a distinguished triangle. I did not check the exact hypotheses on the base.

## Note, then ignore

- Two meanings of quasi-projective. Ayoub offers Hartshorne's definition for any S, or Grothendieck's when S has an ample family of line bundles. It only fixes the category of schemes. Safe to skip on a first reading.
- 2-categorical preliminaries. Sections 1.1 to 1.3 prove all that follows formally from adjunctions and exchange structures. They exist to shorten later proofs. Safe to skip.
- f<sup>!</sup> before f<sub>!</sub>. Ayoub builds f<sup>!</sup> and gets f<sub>!</sub> by adjunction. Voevodsky went the other way. Ayoub calls the difference inessential. Safe to skip.
- Algebraic derivators. The construction of Ψ needs more than triangulated categories, so a derivator structure enters in Chapter 3. Safe to skip.
- Chapter 4. It checks that the Morel–Voevodsky categories satisfy the axioms, so the theory is not empty. Safe to skip at first.

## One next step

Search the PDF for "Scholie 1.4.2" and read the six axioms just before it and the five points of the statement. That is one page and a half.
