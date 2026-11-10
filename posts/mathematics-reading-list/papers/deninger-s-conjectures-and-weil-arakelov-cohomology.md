source: https://www.uni-muenster.de/FB10/mjm/vol_13/mjm_vol_13_14.pdf
slogan: One conjectural exact sequence ties Deninger's dream cohomology to a cohomology that already exists, and linear algebra then yields the order of vanishing of zeta.
basis: the introduction and the main theorem statements

## Before you start

This note is 22 pages, yet half of its objects do not exist yet. Deninger's cohomology is a wish list, and reading about one conjectural thing mapped to another can raise unease: what may I believe here? That unease is a sound reaction, and you may keep it while you read. If you want to see why zeta functions over ℤ might behave like those over finite fields, this is a short way in. Read it for the fun of the picture.

## The story

For a variety over a finite field, the zeta function is a characteristic polynomial of Frobenius on cohomology. Deninger asked for the same over ℤ: spaces H<sub>dyn</sub> of infinite dimension with a flow, whose generator Θ has the zeros of ζ as eigenvalues. Nobody can build these spaces. Flach and Morin had built something smaller that does exist: Weil-Arakelov cohomology, made from motivic and Deligne cohomology. This note conjectures the bridge. The Weil-Arakelov groups at the integer n should measure the kernel and cokernel of Θ − n on Deninger's spaces, through a long exact sequence. Over a finite field the bridge is a theorem, under a finite generation hypothesis. Granting the bridge, linear algebra gives the vanishing order of ζ at s = n and several classical conjectures.

## Main definitions

**Zeta function and its completion.** For an arithmetic scheme X (separated, of finite type over ℤ), ζ(X, s) is the product of (1 − N(x)<sup>−s</sup>)<sup>−1</sup> over closed points x. If X is projective, flat and regular over ℤ, an Arakelov compactification adds a Kähler metric on X(ℂ), and the completed zeta function multiplies by Gamma factors read from the Hodge numbers.

**Deninger's cohomology (Conjecture 2.3).** Conjectural complex vector spaces H<sup>i</sup><sub>dyn,c</sub>(X), possibly of infinite dimension, with an action of ℝ whose generator is Θ. They vanish outside 0 ≤ i ≤ 2 dim X. The zeta function is the alternating product of regularised determinants of (s − Θ)/2π on them.
- Also asked for: a Poincaré duality pairing, and a Hodge star giving a positive definite form.

**Weil-Arakelov cohomology with real coefficients.** For X proper and regular over ℤ, let RΓ<sub>c</sub>(X, ℝ(n)) be the mapping fibre of the Beilinson regulator from motivic cohomology (Bloch's cycle complex, tensored with ℝ) to real Deligne cohomology. Then RΓ<sub>ar,c</sub>(X, ℝ̃(n)) is RΓ<sub>c</sub>(X, ℝ(n)) ⊕ RΓ<sub>c</sub>(X, ℝ(n))[−1]. It is defined without any conjecture.
- Over a finite field: the regulator target is zero, so this is two copies of motivic cohomology with real coefficients.

**The map ∪θ.** The map from H<sup>i</sup><sub>ar,c</sub> to H<sup>i+1</sup><sub>ar,c</sub> that projects to the first summand and includes it as the second. The resulting complex of cohomology groups is acyclic, by construction.

## Main results

**Conjecture (the long exact sequence; Conjecture 4.1).** Assume Deninger's cohomology exists. For every X and every integer n there is a long exact sequence ... → H<sup>i</sup><sub>ar,c</sub>(X, ℂ̃(n)) → H<sup>i</sup><sub>dyn,c</sub>(X) → H<sup>i</sup><sub>dyn,c</sub>(X) → H<sup>i+1</sup><sub>ar,c</sub>(X, ℂ̃(n)) → ..., where the middle map is Θ − n. The composite H<sup>i</sup><sub>ar,c</sub> → H<sup>i</sup><sub>dyn,c</sub> → H<sup>i+1</sup><sub>ar,c</sub> equals ∪θ. The same is asked without compact supports.

**Theorem (finite fields; Theorem 4.3).** Let X be a smooth projective connected variety over 𝔽<sub>q</sub>. Assume the Weil-étale motivic cohomology groups H<sup>i</sup>(X<sub>W</sub>, ℤ(n)) are finitely generated for all i. Then Conjecture 4.1 holds for X and n, with Deninger's own construction of H<sub>dyn</sub> from l-adic cohomology.
- Step 1: a lemma on a representation V of the Weil group turns the sequence for Frobenius, with the map q<sup>−n</sup>φ − 1, into a sequence for Θ − n.
- Step 2: finite generation identifies Weil-étale cohomology tensored with ℂ with l-adic cohomology, and ∪θ with log(q) times cup product with the Frobenius class.

**Proposition (vanishing order; Propositions 4.6 and 4.7).** Assume Conjecture 4.1. Then Θ is semisimple at n, the groups H<sup>i</sup><sub>ar,c</sub>(X, ℂ̃(n)) have finite dimension, and the order of ζ(X, s) at s = n equals Σ (−1)<sup>i</sup> · i · dim H<sup>i</sup><sub>ar,c</sub>(X, ℂ̃(n)).
- Step 1: acyclicity of ∪θ forces the kernel of Θ − n to map isomorphically to the cokernel.
- Step 2: the order of the regularised determinant at n is the dimension of the generalised eigenspace.

**Proposition (Arakelov-Chow groups; Proposition 4.14).** Assume Conjecture 4.1 and let X be the Arakelov compactification of a projective regular scheme of pure dimension d. Then the Arakelov-Chow group CH<sup>n</sup> with complex coefficients is the n-eigenspace of Θ on H<sup>2n</sup><sub>dyn</sub>. The completed zeta function has order −dim CH<sup>n</sup> at s = n. The intersection pairing between CH<sup>n</sup> and CH<sup>d−n</sup> is perfect.

## Note, then ignore

- Regularised determinants. Definition 2.1 makes sense of a determinant on a space of infinite dimension through a zeta function of the eigenvalues. It is needed to state Deninger's formula, and safe to skip on a first reading.
- The factor log(q). Cup product with the Frobenius class depends on the base field 𝔽<sub>q</sub>. Multiplying by log(q) removes the dependence. This is why the authors write a map ι over "𝔽<sub>1</sub>". Safe to skip.
- Two notions of X. The same letter denotes a scheme or its Arakelov compactification (Notation 2.2). The statements hold for both, so you can read with the scheme in mind.
- Section 5. It restates the authors' special value conjecture, equivalent to the Bloch-Kato conjecture for X smooth projective over a number ring. It uses derived de Rham cohomology and a correction factor C(X, n). Safe to leave for a second reading.

## One next step

Open the PDF at page 527 of the journal (page 9 of the file) and read only Conjecture 4.1 and the statement of Theorem 4.3.
