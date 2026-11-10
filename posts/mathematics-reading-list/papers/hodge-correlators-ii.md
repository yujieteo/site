source: https://arxiv.org/pdf/0807.4855
slogan: Integrals of Green currents over plane trees give numbers that carry the real mixed Hodge structure on the rational homotopy type of a Kähler manifold.
basis: the introduction and the main theorem statements

## Before you start

The contents page lists DG Lie algebras, cyclic words, Green currents, a Feynman integral and motives, all in 40-odd pages. The likely feeling is shame at meeting five kinds of background at once and owning perhaps two. That feeling is a fair reading of the page, and it can stay. If you want to see periods computed as honest integrals over a manifold, the introduction gives the recipe with one picture of a tree. Enjoy the recipe first. Whether you reach Section 5 is a separate matter.

## The story

A compact Kähler manifold X has a rational homotopy type, and that homotopy type carries a real mixed Hodge structure. Morgan and Hain built it, but by indirect means, so its numbers are hard to see. Goncharov wants a formula. He takes a cyclic word of harmonic forms, draws every plane trivalent tree with those forms on the leaves, puts a Green current on each edge, and integrates over one copy of X per internal vertex. The sum over trees is a complex number, a Hodge correlator. These are the correlators of a Feynman integral attached to X. Dualised, the numbers become one derivation of a free Lie algebra built from the cohomology of X. That derivation is the mixed Hodge structure, written as an action of the Hodge Galois group.

## Main definitions

**Green current.** Fix a base point a in X and a splitting of the de Rham complex into "harmonic forms" and a complement. A Green current G<sub>a</sub>(x, y) on X × X solves (2πi)<sup>−1</sup>∂∂̄G<sub>a</sub> = δ<sub>Δ</sub> − P<sub>Har</sub>, where δ<sub>Δ</sub> is the delta current of the diagonal and P<sub>Har</sub> is the kernel of the projector onto harmonic forms. A solution exists by the ∂∂̄-lemma.

**Hodge correlator.** Take a cyclic word W = (α<sub>0</sub> ⊗ … ⊗ α<sub>m</sub>) of harmonic forms of degrees other than 0 and 2n. The correlator of W is a sum over plane trivalent trees T decorated by W.
- Step 1: put each α<sub>i</sub> on the copy of X at the inner end of its external edge, and a Green current on each edge of T.
- Step 2: apply the operator ξ, which sends φ<sub>0</sub>·…·φ<sub>m</sub> to the symmetrisation of φ<sub>0</sub> ∧ d<sup>ℂ</sup>φ<sub>1</sub> ∧ … ∧ d<sup>ℂ</sup>φ<sub>m</sub>, and integrate over X<sup>{internal vertices of T}</sup>.

**Special derivation.** Let H<sub>∗</sub> be the reduced homology of X shifted by one, and Lie<sub>H</sub> the free graded Lie algebra on it, with the differential δ dual to the cup product. The fundamental class gives an element S of Lie<sub>H</sub>. A derivation of Lie<sub>H</sub> is special if it kills S (Definition 1.2).

**Hodge Galois group.** Real mixed Hodge structures form a Tannakian category with fibre functor gr<sup>W</sup>. Its group G<sub>Hod</sub> is a semidirect product of ℂ<sup>×</sup>, viewed as a real group, and a prounipotent group with Lie algebra L<sub>Hod</sub>. Deligne showed L<sub>Hod</sub> has generators g<sub>p,q</sub> for p, q ≥ 1 with one relation, that the conjugate of g<sub>p,q</sub> is −g<sub>q,p</sub>.

## Main results

**Theorem (the correlator map is well defined; Theorem 1.1).** For a compact Kähler manifold X, the tree sums induce a linear map from H<sup>0</sup><sub>δ</sub> of the cyclic Lie words in the cohomology of X (cyclic words modulo shuffle relations, tensored with the dual of the fundamental class) to ℂ. The map does not depend on the splitting or on the Green current.
- Step 1: dualise to get a class in H<sup>0</sup><sub>δ</sub> of the special derivations, using the isomorphism of DG Lie algebras in Proposition 1.3.
- Step 2: show that two sets of choices give homotopic derivations (Section 5.2).

**Theorem (functoriality; Theorem 1.4).** For any map f : X → Y of Kähler manifolds, the Hodge correlator derivation of (Y, f(a)) preserves the image of the free Lie algebra of X, and its restriction there is homotopic to the push-forward of the derivation of (X, a).
- Case f = identity with two different splittings: this is Theorem 1.1.

**Theorem (Hodge Galois action; Theorem-Construction 1.7).** Sending the generating operator G\* of L<sub>Hod</sub> to the Hodge correlator class gives a canonical map from L<sub>Hod</sub> to H<sup>0</sup><sub>δ</sub> of the special derivations of Lie<sub>H</sub>. With formality (Theorem 1.6, from Deligne, Griffiths, Morgan and Sullivan), this defines a real mixed Hodge structure on the rational homotopy type DG Lie algebra L(X, a).

**Theorem (comparison on π<sub>1</sub>; Theorem 1.9).** For a complex regular projective variety X, the real mixed Hodge structure on the pronilpotent completion of π<sub>1</sub>(X, a) given by Hodge correlators equals the classical one.
- Step 1: the statement holds for smooth curves, by the first Hodge correlators paper.
- Step 2: functoriality and a Lefschetz argument reduce X to a section of lower dimension.

## Note, then ignore

- Two normalisations. The generators come in two versions, G and G\*, that differ by binomial coefficients, and objects built with G\* carry a star. It keeps formulas tidy in families. Safe to skip on a first reading.
- Signs. Cyclic shifts and the differential carry signs from the grading, set in Sections 2.3 and 3.2. Safe to skip.
- Motivic correlators. Section 1.5 assumes the motivic formalism, which is conjectural, so those statements are conditional. Safe to skip on a first reading.
- Comparison with Morgan and Hain. The paper says its structure "should" agree with theirs on the whole homotopy type, and proves it only for π<sub>1</sub>. Safe to skip.

## One next step

Open the paper at Section 1.2 and look only at Figure 1 and the paragraph after it, which builds the number attached to one tree.
