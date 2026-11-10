source: https://arxiv.org/pdf/2503.10963
slogan: Fat Delta is to categories with weak identities what Δ is to categories, and a monad proves its nerve theorem in one stroke.
basis: the introduction and the main theorem statements

## Before you start

This is a 30-page paper in pure category theory, with words like "strongly cartesian" and "dense generator" in the abstract. The likely feeling is a quiet worry that it is all machinery and no picture. You may feel that. There is a picture: strings of arrows, some painted red. If you have ever wondered why identity arrows cause trouble in higher categories, this paper shows one clean way to set them aside. Look at Figure 1 for fun. The proofs can wait.

## The story

Simplicial methods model higher categories, and the simplex category Δ bundles composition and identities together. Two groups wanted them apart. Simpson conjectured that weak n-categories can be made strictly associative with only the units weak, and Kock built fat Delta to state this precisely. Type theorists wanted an index category that is direct, with no infinite descending chains of maps, since homotopy type theory can only describe diagrams over such categories. Δ is not direct. Fat Delta is. But Kock gave two descriptions of it, and the basic tools for Δ had no proven analogue. The authors show that fat Delta arises from a monad, the free relative semicategory monad. Weber's theory of monads with arities then gives the nerve theorem, the Segal condition and a factorisation system.

## Main definitions

**Relative semicategory.** A semicategory is a category without identities: objects, arrows and associative composition. A relative semicategory is a semicategory with a chosen wide subsemicategory of marked arrows. Functors must preserve marking. The marked arrows play the role of identities.

**Fat Delta, first form.** A semiordinal is the semicategory of a finite strict total order. Fat Delta is the category of finite non-empty relative semiordinals and marking-preserving functors. Picture a string of arrows with some coloured red, and strictly increasing injections that send red to red.

**Fat Delta, second form.** Objects are epimorphisms η: [m] ↠ [n] in Δ. A morphism is a commutative square in Δ whose top arrow [m<sub>0</sub>] → [m<sub>1</sub>] is a monomorphism.
- Reading: m is the length of the string, and the marked edges are those that η collapses.
- Projection: sending η to its codomain gives a functor to Δ, and sending it to its domain gives a functor to the semisimplex category.

**Active and inert maps.** In Δ, active maps preserve endpoints and inert maps preserve distance. In fat Delta the classes are defined the same way, with the extra demand that the marking is respected.

## Main results

**Theorem (the two forms agree; Theorem 4.22).** The category of finite non-empty relative semiordinals is isomorphic to the category of epimorphisms of Δ described above.
- Step 1: show the free relative semicategory monad on relative graphs is strongly cartesian (Proposition 4.13).
- Step 2: pick a dense generator, identify the category of arities with the inert part of fat Delta (Theorem 4.20), and read off the associated theory.

**Theorem (nerve theorem; Theorem 4.23).** The nerve functor from relative semicategories to presheaves on fat Delta is fully faithful. Its essential image consists of the presheaves that satisfy the Segal condition.
- Step 1: the monad has arities, by Theorem 4.20.
- Step 2: apply the general nerve theorem for monads with arities, from Weber and from Berger, Melliès and Weber.

**Theorem (active-inert factorisation; Theorem 4.24 and Proposition 4.25).** Every map in fat Delta factors as an active map followed by an inert map, and the two classes form an orthogonal factorisation system. The paper proves this twice: once from the general theory and once directly.

## Note, then ignore

- The weak units conjecture. It motivates the paper but is not proved here. The introduction reports it open for general n, with n = 2 proved by Paoli. Safe to skip on a first reading.
- The symbols ♭, ♯, ⊔ and ♮. They name the functors that mark nothing, mark everything, forget the marking, and keep only marked arrows. They form a chain of adjoints. Safe to skip.
- Generic versus active, free versus inert. These are older and newer names for the same two classes. Safe to skip.
- Local right adjoints. Section 2.2.2 proves new lemmas about them, needed only to check the monad is strongly cartesian. Safe to skip.
- The Kraus and Sattler variant. A similar direct category from type theory is mentioned but is not the object studied here. Safe to skip.

## One next step

Open the paper at Figure 1 on the second page and compare the two diagrams. Then read Section 3.1, which is half a page.
