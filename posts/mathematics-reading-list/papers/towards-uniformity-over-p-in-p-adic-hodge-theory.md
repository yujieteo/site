source: https://kskedlaya.org/slides/lyon2011.pdf
slogan: Rewrite the field of norms equivalence step by step until the prime p enters only through an absolute value on ℚ.
basis: the full text

## Before you start

This is a 33-slide talk with no proofs, heavy notation and a last section headed "Some wild speculations". You may feel uneasy that you cannot check anything, or lost among the decorated Witt rings. That is a fair response to slides, and you can let it be there. If you have wondered why p-adic Hodge theory treats each prime separately, this talk shows one attempt to stop doing so. Enjoy the chain of rewrites. Finishing is optional.

## The story

Fontaine and Wintenberger showed that finite étale algebras over ℚ<sub>p</sub>(μ<sub>p<sup>∞</sup></sub>) match those over the Laurent series field 𝔽<sub>p</sub>((π)). With Galois descent, finite étale algebras over ℚ<sub>p</sub> become finite étale 𝔽<sub>p</sub>((π))-algebras with an action of ℤ<sub>p</sub><sup>×</sup>. The right side mentions p everywhere: the characteristic, the Frobenius, the group. Kedlaya, reporting joint work with Chris Davis, rewrites that side one piece at a time. Perfect and complete the field. Lift to Witt vectors. Add all roots of unity. Swap p-typical Witt vectors for big Witt vectors. Swap the characteristic p ring for a characteristic 0 one. At the end the group acting is the finite idèles and p appears only in a norm. The resulting objects carry an action of an enlarged Bost-Connes algebra, the algebra whose partition function is the Riemann zeta function.

## Main definitions

**FÉt.** For a ring R, FÉt(R) is the category of finite étale R-algebras. Every equivalence in the talk is between such categories, with group actions added.

**The field E.** E<sub>ℚ<sub>p</sub></sub> is the completed perfect closure of 𝔽<sub>p</sub>((π)). Passing to it does not change finite étale algebras.
- Frobenius φ is bijective on any finite étale algebra over it, so the ℤ<sub>p</sub><sup>×</sup>-action extends to ℚ<sub>p</sub><sup>×</sup>, with p acting as φ.

**Big Witt vectors.** W is the functor from rings to rings whose underlying set is sequences (x<sub>n</sub>) indexed by n ≥ 1, with ring structure fixed by requiring the ghost maps w<sub>n</sub>(x) = Σ<sub>d|n</sub> d·x<sub>d</sub><sup>n/d</sup> to be natural ring maps. Frobenius maps F<sub>n</sub> satisfy w<sub>m</sub>(F<sub>n</sub>(x)) = w<sub>mn</sub>(x).
- Projecting onto p-power components recovers the p-typical Witt vectors W<sub>p</sub> and F<sub>p</sub>.

**The Banach algebra A.** The uniform completion of ℚ<sub>p</sub> ⊗ ℤ[μ<sub>∞</sub>], using the spectral seminorm and the trivial norm on ℤ[μ<sub>∞</sub>]. It holds all roots of unity at once, not only those of p-power order.

## Main results

**Claim (starting point, Fontaine-Wintenberger; slides 4 to 5).** FÉt(ℚ<sub>p</sub>) is equivalent to the category of finite étale 𝔽<sub>p</sub>((π))-algebras with ℤ<sub>p</sub><sup>×</sup>-action, where γ sends 1 + π to (1 + π)<sup>γ</sup>.
- The action is automatically continuous.

**Claim (Witt vector form; slide 17).** FÉt(ℚ<sub>p</sub>) is equivalent to finite étale algebras over an overconvergent, inverse-limit version of W<sub>p</sub>(E<sub>ℚ<sub>p</sub></sub>), with continuous ℚ<sub>p</sub><sup>×</sup>-action.
- Step 1: W<sub>p</sub>(E) is a Cohen ring, so base extension from E does not change finite étale algebras.
- Step 2: this last equivalence can be proved directly through the map θ, and reading the slides backwards then reproves Fontaine-Wintenberger with no higher ramification theory (slides 10 and 18).

**Claim (p removed; slides 25 and 28).** FÉt(ℚ<sub>p</sub>) is equivalent to finite étale algebras over an overconvergent big Witt ring W<sup>†</sup>(A) with a continuous étale action of the monoid ℕ<sup>+</sup>·Ẑ<sup>×</sup> inside the finite idèles. The slides present this as work in preparation and give no proof.
- Step 1: adjoin all roots of unity, using a relative field of norms equivalence (Kedlaya-Liu, Scholze).
- Step 2: pass to big Witt vectors, then replace E<sub>A</sub> by A itself.

**Claim (Bost-Connes; slide 29).** The integral Bost-Connes algebra, enlarged by the group ring of Ẑ<sup>×</sup>, acts on the objects in the last equivalence.

**Conjecture (globalisation; slides 31 to 33).** The talk asks, as open questions, whether the local equivalences glue to one for FÉt(ℚ), and whether motives over ℚ give modules over a completed Bost-Connes algebra.

## Note, then ignore

- Colour changes: each slide appears twice, with one phrase altered, to show a single rewrite. Text extraction loses the colours. Safe to skip.
- The normalisation |π| = p<sup>−p/(p−1)</sup>: it makes later norms match. Safe to skip on a first reading.
- Weak and LF topologies: they define what "continuous action" means on each ring. The story does not change. Safe to skip.
- ℕ<sup>+</sup> as a monoid: the slides warn that ℕ<sup>+</sup> means {1, 2, ...} under multiplication. Safe to skip once noted.
- Archimedean trouble: the inverse-limit norm fails for archimedean absolute values, which is why the global question uses W<sup>†</sup> without the limit. Safe to skip.

## One next step

Open the slides and read only slide 5, "The goal", then slide 20, "Next steps", which lists the three changes still to make.
