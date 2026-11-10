source: https://arxiv.org/pdf/1712.03708
slogan: Hodge theory, period maps and shtukas all work over p-adic fields, and together they sketch one cohomology theory that specialises to all the others.
basis: the introduction and the main theorem statements

## Before you start

This survey names a new object on almost every page: perfectoid spaces, diamonds, the Fargues-Fontaine curve, shtukas. The likely feeling is shame at not knowing the background. That feeling is allowed. The survey was written for a general audience at a congress, and nobody in that audience knew all of it either. You may want a map of modern p-adic geometry more than any single proof. Read it as a map, enjoy the view, and let finishing come second.

## The story

Over ℂ, a compact Kähler manifold has a Hodge decomposition, and the way it varies gives period maps. People wanted the same over a p-adic field. The obstacle is that p-adic spaces have no metric and no harmonic forms. Scholze's answer is to pass to very large coverings, called perfectoid spaces, where characteristic 0 and characteristic p can be compared. This gives Hodge theory for every proper smooth rigid space, with no Kähler condition. It also gives a new period map on moduli of elliptic curves with full p-power level structure, and that map feeds results on Galois representations. The same data then reappears as vector bundles on a curve, and finally as a "shtuka", an object borrowed from function fields. The survey ends by asking for shtukas over Spec ℤ.

## Main definitions

**Proper smooth rigid-analytic variety over C.** Here C is a complete algebraically closed extension of ℚ<sub>p</sub>. Such a variety X is the p-adic stand-in for a compact complex manifold. It has étale, de Rham and Hodge cohomology groups.
- Case: the analytification of a proper smooth algebraic variety over C.
- Case: a Hopf surface, the quotient of the punctured plane by multiplication by q with 0 &lt; |q| &lt; 1, which comes from no algebraic variety.

**Fargues-Fontaine curve FF<sub>C</sub>.** A regular noetherian scheme over ℚ<sub>p</sub> of Krull dimension 1, attached to C, with a marked point ∞. The completed local ring at ∞ is Fontaine's ring B<sub>dR</sub><sup>+</sup>, a complete discrete valuation ring with residue field C.

**Diamond.** A pro-étale sheaf on perfectoid spaces of characteristic p that is a quotient of a perfectoid space by a pro-étale equivalence relation. The example Spd ℚ<sub>p</sub> sends a perfectoid space S to the set of its untilts over ℚ<sub>p</sub>.

**p-adic shtuka with one leg.** Let C now have characteristic p, and fix an untilt of C. The shtuka is a vector bundle on the adic space "Spa C × Spa ℤ<sub>p</sub>", an open part of Spa W(O<sub>C</sub>), with an isomorphism to its Frobenius pullback away from the point given by the untilt, meromorphic there.

## Main results

**Theorem (Hodge-to-de Rham degeneration; Theorem 2.1).** Let X be a proper smooth rigid-analytic space over C. The Hodge-to-de Rham spectral sequence degenerates at E<sub>1</sub>. For each i, the sum of the Hodge numbers of total degree i, the dimension of H<sup>i</sup><sub>dR</sub>(X/C) over C, and the dimension of H<sup>i</sup><sub>ét</sub>(X, ℚ<sub>p</sub>) over ℚ<sub>p</sub> are all equal.
- Step 1: no Kähler-type condition is assumed, unlike over ℂ.
- Step 2: a second spectral sequence (Hodge-Tate, Theorem 2.2) runs from Hodge cohomology with Tate twists to étale cohomology tensored with C, and degenerates at E<sub>2</sub>.

**Theorem (perfectoid Shimura varieties and the Hodge-Tate period map; Theorem 4.3).** For a Shimura variety of Hodge type and a fixed level away from p, the inverse limit over all levels at p is, in a suitable sense, a perfectoid space. It has a G(ℚ<sub>p</sub>)-equivariant map π<sub>HT</sub> to a flag variety, viewed as an adic space.
- Case: for elliptic curves the target is the projective line, and the map records the Hodge-Tate filtration inside the trivialised étale H<sup>1</sup> tensored with C.
- Use: this geometry gives Galois representations for torsion classes in the cohomology of locally symmetric spaces for GL<sub>n</sub> over totally real or CM fields (Theorem 5.1).

**Theorem (classification of vector bundles, Fargues-Fontaine; Theorem 6.2).** Every vector bundle on FF<sub>C</sub> is a direct sum of stable bundles. For each rational slope λ = s/r in lowest terms with r > 0, there is exactly one stable bundle O(λ), of rank r and degree s.

**Theorem (A<sub>inf</sub>-cohomology, Bhatt-Morrow-Scholze; Theorem 8.1).** Let 𝔛 be a proper smooth formal scheme over Spf O<sub>C</sub>, with C of characteristic 0. There is a perfect complex of modules over A<sub>inf</sub> = W(O<sub>C♭</sub>), with a Frobenius-semilinear map that becomes an isomorphism after inverting ξ, respectively φ(ξ).
- Step 1: base change to W(k) gives crystalline cohomology of the special fibre, and base change to O<sub>C</sub> gives de Rham cohomology.
- Step 2: base change to W(C♭) gives étale cohomology of the generic fibre, tensored with W(C♭).

## Note, then ignore

- Choice of foundations. Scholze treats schemes, formal schemes and rigid spaces as Huber's adic spaces, because that category contains all three. It is safe to skip on a first reading.
- Tate twists. The symbol (−j) records how the Galois group acts when X comes from a smaller field. It does not change dimensions, so it is safe to skip.
- Inverse limits. Inverse limits of adic spaces do not exist in general, so "limit over all levels" is read with a ∼ sign or inside diamonds. Safe to skip at first.
- Two flag varieties. A footnote says there are two possible choices of flag variety for π<sub>HT</sub>. The choice is a convention and is safe to skip.
- Sections 9 and 10. The material on shtukas over Spec ℤ and q-de Rham cohomology is labelled as speculation and conjecture. Treat it as a programme, and skip it on a first pass.

## One next step

Open the PDF at Section 2 and read only Theorem 2.1 and the paragraph before it about the Hopf surface.
