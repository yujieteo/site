source: https://alex-youcis.github.io/MatsushimaNotes.pdf
slogan: Cohomology of a compact Shimura variety carries both a Hecke action and a Galois action, so each automorphic representation picks out a Galois representation.
basis: the introduction and the main theorem statements

## Before you start

The word "Langlands" in a title can raise dread: the sense that adeles, reductive groups and harmonic analysis come first. That feeling is reasonable, and these notes were written with it in mind. They are 34 pages of expanded talks for algebraic geometers, and Part I omits most proofs on purpose. If you want a reason why automorphic forms might produce Galois representations, Part I gives one you can hold in your head. Enjoy it. Part II is optional.

## The story

The Langlands conjectures ask for a map from automorphic representations of a reductive group G over ℚ to Galois representations. Stated cold, this looks arbitrary. The notes use one principle: to relate representations of two groups, find a vector space on which both act and the actions commute. If the first group acts semisimply, each of its irreducible pieces comes with a multiplicity space, and the second group acts on that space. The notes then look for such a vector space. Locally symmetric spaces Γ\G(ℝ)/K, such as modular curves, have cohomology with a Hecke action of G(𝔸<sub>f</sub>). Matsushima's formula says this cohomology decomposes into automorphic representations. When the spaces are algebraic varieties over a number field, as Shimura varieties are, étale cohomology adds a commuting Galois action.

## Main definitions

**Locally symmetric space.** For a reductive group G over ℚ, a compact subgroup K<sub>∞</sub> of G(ℝ) containing the identity component of a maximal compact subgroup, and a compact open K<sub>f</sub> ⊂ G(𝔸<sub>f</sub>), set S<sub>G</sub>(K<sub>f</sub>) = G(ℚ)\G(𝔸)/(K<sub>∞</sub>K<sub>f</sub>A<sub>G</sub>(ℝ)<sup>+</sup>), where A<sub>G</sub> is the maximal ℚ-split torus in the centre (Definition 1.24).
- Concretely: a finite disjoint union of quotients Γ<sub>j</sub>\X by congruence subgroups (Fact 1.27).
- Example: for G = GL<sub>2</sub> and full level N this is the modular curve Y(N).

**Local system F<sub>ξ</sub>.** An algebraic representation ξ of G on a vector space V gives a local system F<sub>ξ</sub> on S<sub>G</sub>(K<sub>f</sub>), the sheaf of sections of G(ℚ)\(V × X × G(𝔸<sub>f</sub>)/K<sub>f</sub>) (Definition 1.35).

**Anisotropic.** A group over a field F is F-anisotropic if it contains no copy of 𝔾<sub>m</sub> over F (Definition 1.22).

**Automorphic representation (compact case).** Assume the derived group of G is ℚ-anisotropic. An automorphic representation with central character χ is an irreducible unitary representation of G(𝔸) that occurs in the decomposition of the square-integrable functions on G(ℚ)\G(𝔸) transforming by χ under A<sub>G</sub>(ℝ)<sup>+</sup> (Definition 1.49).

## Main results

**Theorem (Borel, compactness; Theorem 1.32).** For G reductive over ℚ, the space S<sub>G</sub>(K<sub>f</sub>) is compact for one, equivalently every, K<sub>f</sub> if and only if the derived group of G is ℚ-anisotropic.

**Theorem (Matsushima's formula; Theorem 1.53).** Let the derived group of G be ℚ-anisotropic and let ξ be a geometrically irreducible algebraic representation on V. Then H<sup>i</sup>(S<sub>G</sub>(K<sub>f</sub>), F<sub>ξ</sub> ⊗ ℂ) is the direct sum, over automorphic representations π with central character inverse to that of ξ, of (π<sup>∞</sup>)<sup>K<sub>f</sub></sup> ⊗ H<sup>i</sup>(𝔞<sub>G</sub>\𝔤, K<sub>∞</sub>; π<sub>∞</sub> ⊗ V<sub>ℂ</sub>), as modules over the Hecke algebra. The notes cite the proof and give only the idea.
- Step 1: compute the cohomology by a de Rham complex. Its terms are spaces of smooth functions on G(ℚ)\G(𝔸).
- Step 2: decompose those functions into automorphic representations. The finite part gives the Hecke module and the part at infinity gives the relative Lie algebra cohomology.

**Theorem (Kottwitz, Bertoloni Meli–Youcis; Theorem 2.22).** Let G have no relevant endoscopy, with derived group ℚ-anisotropic and simply connected, and let Sh<sub>G</sub> be a Shimura variety for G. Then the alternating sum of the cohomology of F<sub>ξ</sub> decomposes as a sum of π<sup>∞</sup> ⊗ σ(π<sup>∞</sup>). For almost all primes p, the trace of a Weil group element on σ(π<sup>∞</sup>) equals an integer a(π<sup>∞</sup>) times its trace on the local Langlands parameter of π<sub>p</sub> composed with a fixed representation of the dual group, up to an explicit power of p.
- Method: count points modulo p (Langlands–Kottwitz), then compare with the Arthur–Selberg trace formula (Theorem 2.4).

**Theorem (a case of Scholze–Shin; Theorem 2.19).** The Scholze–Shin conjecture (Conjecture 2.17) holds for unramified unitary groups and the trivial endoscopic triple. The conjecture characterises the local Langlands correspondence by trace identities for test functions that come from the geometry of Shimura varieties.

## Note, then ignore

- The factor A<sub>G</sub>(ℝ)<sup>+</sup>. Dividing by it simplifies the representation theory and changes the space only by a Euclidean factor. Safe to skip on a first reading.
- Neat subgroups. For large K<sub>f</sub> the quotient is an orbifold. The notes always assume K<sub>f</sub> small enough to get a manifold. Safe to skip.
- (𝔤, K)-modules. The component of π at infinity is taken as an algebraic model of a unitary representation, so that π factors as a tensor product (Theorem 1.51). Safe to skip.
- Conjecture 1.1. The notes say this is not the true global Langlands conjecture, which needs a conjectural Langlands group. Safe to skip.
- Part II. The author's disclaimer calls Part II rough and incomplete in its attributions. Treat it as a sketch. Safe to skip.

## One next step

Open the notes at page 3 and read the paragraph that begins with two friends dancing, down to equation (4) on page 4.
