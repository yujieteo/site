source: https://arxiv.org/pdf/1207.5449
slogan: The Chern-Simons action is a cup product of gauge fields, and one map of stacks gives the action in every dimension at once.
basis: the introduction and the main theorem statements

## Before you start

The word "stack" appears in the first paragraph, with "∞" in front of it soon after. That can raise a quiet shame: the sense that everyone else learned this language somewhere and you did not. Let that feeling be there. If you want to see why the formula A ∧ dA keeps turning up in physics, this paper gives one clean reason. Read for the pictures in the introduction first. Finishing can wait.

## The story

Abelian Chern-Simons theory in dimension 3 has the local Lagrangian A ∧ dA, where A is a 1-form. On a non-trivial circle bundle A is not a global form, so the formula has no meaning. The known fix says: a U(1) gauge field is a class in differential cohomology, so take its cup product with itself and integrate over the manifold. That works only on gauge equivalence classes, and only in top dimension. The authors lift the recipe to smooth higher stacks, which remember gauge transformations and smooth families. The cup product and fibre integration both become maps of stacks. Composing them gives the action on a closed 3-manifold, a line bundle with connection on fields over a surface, a gerbe over a circle, and so on down to a point.

## Main definitions

**Moduli stack of circle n-bundles with connection.** B<sup>n</sup>U(1)<sub>conn</sub> is the smooth higher stack that sends a test manifold U to the n-groupoid of circle n-bundles with connection on U. The paper builds it from the Deligne complex by the Dold-Kan correspondence and stackification.
- n = 1: ordinary circle bundles with connection, and gauge transformations between them.
- Maps X → B<sup>n</sup>U(1)<sub>conn</sub>, up to equivalence, form the differential cohomology group of X in degree n + 1.

**Differential cup product (Definition 2.7.3).** A map of stacks ∪<sub>conn</sub> : B<sup>p</sup>U(1)<sub>conn</sub> × B<sup>q</sup>U(1)<sub>conn</sub> → B<sup>p+q+1</sup>U(1)<sub>conn</sub>, induced by the Beilinson-Deligne cup product on Deligne complexes.
- On underlying classes it is the usual cup product K(ℤ, p+1) × K(ℤ, q+1) → K(ℤ, p+q+2).
- On the diagonal with p = q it sends a local p-form α to α ∧ dα.

**Holonomy along Σ (Section 2.8).** For a closed oriented manifold Σ of dimension k ≤ n, fibre integration is a map of stacks [Σ, B<sup>n</sup>U(1)<sub>conn</sub>] → B<sup>n−k</sup>U(1)<sub>conn</sub>. Here [Σ, −] is the mapping stack. The construction refines the fibre integration of Gomi and Terashima in Deligne cohomology.

**Off-shell prequantum (n−k)-bundle (Definition 2.9.1).** Given a map ∇ : Fields → B<sup>n</sup>U(1)<sub>conn</sub>, apply [Σ, −] and then holonomy along Σ. The result is a map [Σ, Fields] → B<sup>n−k</sup>U(1)<sub>conn</sub>. For k = n it lands in U(1) and is called the action functional.

## Main results

The paper states its results as constructions and examples, not as numbered theorems. The items below are its main claims.

**Claim (action for all bundles; Sections 1 and 3.2.2).** The cup square BU(1)<sub>conn</sub> → B<sup>3</sup>U(1)<sub>conn</sub>, followed by holonomy along a closed oriented 3-manifold Σ, gives a map [Σ, BU(1)<sub>conn</sub>] → U(1). It is the action of 3d U(1) Chern-Simons theory, including fields with non-zero first Chern class.
- Step 1: when the bundle is trivial, the field is a global 1-form A and the value is the exponential of the integral of A ∧ dA.
- Step 2: because the target U(1) has no non-trivial gauge transformations, the map is gauge invariant and smooth for free (Remark 2.9.2).

**Claim (dimension 4k + 3; Section 3.2.3).** For every k ≥ 0 the cup square B<sup>2k+1</sup>U(1)<sub>conn</sub> → B<sup>4k+3</sup>U(1)<sub>conn</sub> defines an extended theory. On gauge equivalence classes in top dimension it reduces to the known action: the fibre integral of the cup square of a class in differential cohomology of degree 2k + 2.
- In codimension 1 it gives a circle bundle with connection on the fields over a (4k+2)-manifold. The paper relates it to the self-dual form field in dimension 4k + 2.

**Claim (two species and T-duality; Section 3.2.1).** Take the cup product BU(1)<sub>conn</sub> × BU(1)<sub>conn</sub> → B<sup>3</sup>U(1) on two circle bundles. The total space of the resulting 3-bundle is the stack of pairs of circle bundles with connection together with a trivialisation of the cup product of their Chern classes. The authors identify this with a differential T-duality pair, as defined in their reference [37].

**Claim (anomaly line bundle; Section 1).** For p + q = dim X, the cup product followed by holonomy along X is a circle bundle with connection on the stack of pairs of p-form and q-form gauge fields. The paper identifies it with the anomaly line bundle of charge-quantised electric and magnetic currents.

## Note, then ignore

- Stackification. The Deligne complex gives a presheaf, and a formal step turns it into a stack. Safe to skip on a first reading.
- Index shift. A circle n-bundle has a class in degree n + 1, so B<sup>n</sup>U(1) plays the role of K(ℤ, n+1). The shift explains why p and q add to p + q + 1. Note it once and move on.
- Concretification. The mapping stack [Σ, BG<sub>conn</sub>] contains slightly more than honest families of fields. Safe to skip.
- Dividing by 2. The best normalisation of the (4k+3)-dimensional action needs a quadratic refinement, treated in Section 2.10. It does not change the plot. Skip it at first.
- Prequantum only. The paper builds the bundles and stops before choosing polarisations, so no Hilbert spaces appear. Safe to leave aside.

## One next step

Open the PDF at page 5 and look only at the table with rows k = 0, 1, 2, 3. Read each row as "fields on a k-manifold get a circle (3−k)-bundle".
