source: https://people.mpim-bonn.mpg.de/scholze/RealLocalLanglands.pdf
slogan: Over ℝ, the twistor line plays the Fargues–Fontaine curve, so representations of real groups become sheaves on a stack of bundles.
basis: the introduction and the main theorem statements

## Before you start

This is a 90-page draft whose introduction says "to be written", and it leans on analytic stacks from start to finish. The likely feeling is disorientation: no map, and a foundation you may not have. That is a fair reaction to an unfinished text. If you want to see how one mind sets up a whole subject before the conjecture is even stated, this is a rare view. Enjoy single chapters. Finishing can wait.

## The story

Fargues and Scholze turned the local Langlands correspondence for p-adic groups into geometry on the Fargues–Fontaine curve. People wanted the same picture for real groups such as GL<sub>2</sub>(ℝ). The block is that every ingredient is missing over ℝ: there is no perfectoid geometry, representations of real Lie groups live on topological vector spaces, and the Weil group W<sub>ℝ</sub> behaves badly in cohomology. The unblocking idea is to use analytic stacks, from the author's work with Clausen, as the single language. The curve becomes the twistor line, a twisted form of the projective line over ℝ with no real points. Representations become quasicoherent sheaves on a classifying stack. L-parameters become vector bundles on a stack of degree 1 divisors. The draft does not state the final conjecture. It builds the pieces and proves one test case for GL<sub>2</sub>(ℝ).

## Main definitions

**Analytic de Rham stack.** For a complex manifold X, the stack X<sub>dR</sub><sup>an</sup> is the quotient of X by the overconvergent neighbourhood of the diagonal in X × X (Definition II.2.1). Sheaves on it are D-modules with a strong convergence property.
- Compare: the algebraic de Rham stack divides by the formal neighbourhood of the diagonal only.

**Locally analytic representations.** For a real Lie group G, let G<sup>la</sup> be G as a group in analytic stacks, using its real-analytic structure. The derived category of locally analytic G-representations is D<sub>qc</sub>(∗/G<sup>la</sup>), the quasicoherent sheaves on the classifying stack (Definition III.1.1).

**Twistor-ℙ<sup>1</sup>.** The projective ℝ-scheme obtained by descending the complex projective line along z ↦ −1/z̄ (Definition V.1.1). All its closed points have residue field ℂ. It stands in for the Fargues–Fontaine curve.

**Bun<sub>G</sub> and Div<sup>1</sup>.** Both are stacks on "totally disconnected" ℂ-algebras A, which replace perfectoid test objects.
- Bun<sub>G</sub> sends A to the G-bundles on the family of twistor lines over A (Definition IX.1.1).
- Div<sup>1</sup> sends A to pairs of a degree 1 line bundle and a section that is nowhere zero on fibres (Definition VI.3.1).

## Main results

**Theorem (analytic Riemann–Hilbert; Theorem II.3.1).** For a complex manifold X, the map from X to its Betti stack factors uniquely through X<sub>dR</sub><sup>an</sup>, and the induced map X<sub>dR</sub><sup>an</sup> → X<sub>Betti</sub> is an isomorphism of analytic stacks.
- Step 1: X → X<sub>Betti</sub> is surjective.
- Step 2: the two equivalence relations on X agree, almost by definition of the overconvergent neighbourhood.

**Theorem (stratification of Bun<sub>G</sub>; Theorem IX.1.5).** For G reductive over ℝ, Bun<sub>G</sub> has a locally finite stratification by strata indexed by Kottwitz' set B(G), pulled back from the Betti stack of Bun<sub>G</sub>. Unlike the p-adic case, a connected component can have several semistable strata or none.

**Theorem (L-parameters as bundles; Theorems VII.0.1 and VII.3.1).** Div<sup>1</sup> is the quotient of the punctured analytic plane by W<sub>ℝ</sub>. Semisimple vector bundles on it match semisimple representations of W<sub>ℝ</sub> up to isomorphism. The map from Div<sup>1</sup> to a point is proper and cohomologically smooth, with dualising object the norm character in degree −2. So Div<sup>1</sup> has the duality that W<sub>ℝ</sub> lacks.

**Theorem (Lubin–Tate theory over ℝ; Theorem X.1.3).** Let π be a discrete series irreducible representation of GL<sub>2</sub>(ℝ). The functor JLL, a pushforward from sheaves on ∗/GL<sub>2</sub>(ℝ)<sup>la</sup> to sheaves on ∗/ℍ<sup>×,la</sup> × Div<sup>1</sup>, sends π to JL(π) ⊗ LLC(π), up to a shift by 1 and a half twist by the norm character.
- Step 1: an "isomorphism of two towers" identifies the upper and lower half planes modulo GL<sub>2</sub>(ℝ) with a Brauer–Severi curve modulo ℍ<sup>×</sup>.
- Step 2: the draft gives one proof by local-global compatibility on the modular curve and one local proof.

## Note, then ignore

- Gaseous coefficients. The base rings are ℂ<sub>gas</sub> and ℝ<sub>gas</sub>, a choice of analytic ring structure that makes the six functors work. Safe to skip on a first reading.
- Light profinite sets and !-covers. These fix the topology in which stacks are glued. They matter for proofs, not for statements. Safe to skip.
- Bounded part of the centre. The comparison with (𝔤, K)-modules (Theorem III.4.1) holds only after base change to the analytic locus of the Harish-Chandra centre. Safe to skip at first.
- Regular infinitesimal character. The draft says an earlier Ben-Zvi–Nadler proposal is the specialisation of this picture to that case. A side remark. Safe to skip.
- Draft status. Several proofs are sketches and the author says one proposition has no clean proof yet. Read statements as provisional, then move on.

## One next step

Open the PDF at Chapter I, page 5, and read the half page of introduction. Then read only the statement of Theorem X.1.3 on page 86.
