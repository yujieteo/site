source: https://personal.math.ubc.ca/~behrend/ladic.pdf
slogan: Behrend builds ℓ-adic derived categories for stacks, so counting points with automorphism weights becomes a trace of Frobenius on cohomology.
basis: the introduction and the main theorem statements

## Before you start

This paper is 75 pages, and about 55 of them are scaffolding: t-categories, fibred topoi, structures with one-letter names. The likely feeling is overwhelm, with some dread of topos language on top. That is a fair reaction to a long foundations paper. You do not need the scaffolding to understand what it is for. If you have ever wanted to count bundles or curves over a finite field by cohomology, the first three pages give you the whole reason. Enjoy the B𝔾<sub>m</sub> example. Stop there if you like.

## The story

For a variety over 𝔽<sub>q</sub>, the Lefschetz trace formula counts points by the trace of Frobenius on cohomology. Behrend wanted the same for a smooth algebraic stack, where each point counts as 1 over the size of its automorphism group. Two things blocked it. First, the étale topology sees too little: BG for a connected group G looks like a point, yet B𝔾<sub>m</sub> should have the cohomology of infinite projective space. Second, that cohomology is unbounded, and the usual ℓ-adic limit construction needs bounded complexes. Behrend uses the smooth topology for cohomology, a simplicial presentation for pullbacks, and builds the ℓ-adic category as a limit over stratifications. Over a finite field he adds a convergence condition. The trace formula follows.

## Main definitions

**Constructible derived category D<sup>+</sup><sub>c</sub>(X, ℚ<sub>ℓ</sub>).** For a locally noetherian algebraic stack X, a triangulated category with a t-structure whose heart is constructible ℓ-adic sheaves. Complexes are bounded below only. It comes with Rf<sub>∗</sub>, f<sup>∗</sup>, and Rf<sup>!</sup> for certain representable morphisms.
- Smooth approach: complexes of sheaves on the smooth site of X whose cohomology sheaves are étale. This defines Rf<sub>∗</sub>.
- Simplicial approach: complexes on the simplicial scheme of a presentation with cartesian cohomology. This defines f<sup>∗</sup>.

**Mixed complex (Definition 6.3.4).** A constructible complex M over a finite field is mixed if each cohomology sheaf h<sup>i</sup>M has a filtration with punctually pure factors. These form D<sup>+</sup><sub>m</sub>.

**Convergent complex.** A mixed complex M is absolutely convergent if, for every point x: Spec 𝔽<sub>q<sup>n</sup></sub> → X, the alternating sum of traces of arithmetic Frobenius on the cohomology of Rx<sup>!</sup>M converges absolutely, for every embedding of ℚ<sub>ℓ</sub> into ℂ. These form D<sup>+</sup><sub>a</sub>. This is the introduction's rough version.

**Local term (Definition 6.4.4).** For X of finite type over 𝔽<sub>q</sub> and M convergent, L(M) is the sum over isomorphism classes x of 𝔽<sub>q</sub>-points of (1/#Aut(x)) · trace of Frobenius on Rx<sup>!</sup>M.

## Main results

**Theorem (trace formula, relative form; Theorem 6.4.9).** Let f: X → Y be a morphism of finite type algebraic stacks over 𝔽<sub>q</sub>. For every convergent complex M on X, L(Rf<sub>∗</sub>M) = L(M).
- Step 1: base change to each 𝔽<sub>q</sub>-point of Y, so that the target is a point.
- Step 2: stratify and reduce to basic cases such as classifying stacks. The introduction says this dévissage is the reason for general coefficients.

**Corollary (Lefschetz trace formula for stacks; Theorem 1.0.1, Corollary 6.4.10).** Let X be a smooth algebraic stack of finite type over 𝔽<sub>q</sub>. Then q<sup>dim X</sup> · tr(Φ<sub>q</sub> | H<sup>∗</sup>(X, ℚ<sub>ℓ</sub>)) = #X(𝔽<sub>q</sub>), with Φ<sub>q</sub> the arithmetic Frobenius and points counted with weight 1/#Aut. The same holds with a lisse convergent complex as coefficients.
- Example: for B𝔾<sub>m</sub> the dimension is −1 and Frobenius has trace q<sup>−i</sup> on H<sup>2i</sup>. The left side is (1/q)·Σ q<sup>−i</sup> = 1/(q − 1). The right side is one line bundle with q − 1 automorphisms.

**Proposition (two descriptions agree; Proposition 4.6.4).** The bounded-below category of the smooth approach and that of the simplicial approach are equivalent. The functors Rf<sub>∗</sub> and f<sup>∗</sup> built from them are adjoint.

**Claim (example due to Deligne; Proposition 6.4.11).** Applied to the stack of genus one curves, the trace formula becomes a kind of Selberg trace formula. It expresses a sum over k of traces of the Hecke operator T<sub>p</sub> on cusp forms of weight k + 2 through elliptic curves over 𝔽<sub>p</sub>. I did not check the exact constants.

## Note, then ignore

- Arithmetic Frobenius. Behrend uses the arithmetic Frobenius, so the formula has q<sup>dim X</sup> in front and traces like q<sup>−i</sup>. Other sources use the geometric one. Safe to skip on a first reading.
- The c-, d-, cd- and e-structures. These axiomatise pairs of topoi and stratifications so that one argument serves several settings. Safe to skip.
- Choice of smooth site. Objects are smooth over X but morphisms are arbitrary. The price is that f<sup>∗</sup> is not exact there, which is why the simplicial approach exists. Safe to skip.
- Only three operations. The paper builds Rf<sub>∗</sub>, f<sup>∗</sup> and a restricted Rf<sup>!</sup>, not all six. Safe to skip.
- An open point. Convergent complexes are stable under Rf<sub>∗</sub> and Rf<sup>!</sup>. The paper leaves stability under f<sup>∗</sup> open. Safe to skip.

## One next step

Open the PDF at page 2 and read Theorem 1.0.1 and the B𝔾<sub>m</sub> example that follows it, down to "also".
