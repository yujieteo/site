source: https://www.preschema.com/papers/virtual.pdf
slogan: Every quasi-smooth map of derived Artin stacks carries a fundamental class, so virtual classes come from the geometry and need no extra choices.
basis: the introduction and the main theorem statements

## Before you start

The introduction alone names derived stacks, motivic spectra, six operations and ∞-categories. The likely feeling is shame at not owning the background. That feeling is allowed, and it says nothing about you. Almost nobody owns all of it. You may want to know why curve counts need a "virtual" class at all, and Sections 0.1 to 0.3 answer that with one vector bundle. Read those for the pleasure of the picture. The remaining 50 pages can wait.

## The story

Enumerative geometry counts points on moduli spaces. These spaces are often singular and of the wrong dimension, so they have no fundamental class. Behrend and Fantechi repaired this with a perfect obstruction theory, an extra piece of data, and only for Deligne-Mumford stacks. Kontsevich had suggested that the moduli space is the shadow of a derived space that behaves as if smooth. Khan carries this out. He defines Chow homology for derived Artin stacks as Borel-Moore homology with motivic coefficients. Then he deforms a quasi-smooth map to its normal bundle, as Verdier and Fulton did for schemes, and reads off a class. The picture: the zero locus of a section s of a rank r bundle on a smooth m-fold has virtual dimension m − r, whatever its true dimension.

## Main definitions

**Quasi-smooth.** A derived Artin stack over a field k is quasi-smooth if, smooth-locally, it is the derived zero locus Z(s) of a section s of a vector bundle on a smooth scheme. The structure sheaf of Z(s) is the Koszul complex of s. A morphism is quasi-smooth if this holds relative to the target.
- Virtual dimension: the rank of the relative cotangent complex, m − r in the local model.
- Classical case: a classical scheme is quasi-smooth exactly when it is lci of dimension equal to its virtual dimension.

**Chow homology.** For a : X → S locally of finite type, z<sub>n</sub>(X/S) is the mapping spectrum from the unit to a<sup>!</sup> of the motivic cohomology spectrum, twisted by ⟨−n⟩, in the motivic stable homotopy category of X. A<sub>n</sub>(X/S) is its zeroth homology. The theory is bivariant in the sense of Fulton and MacPherson.

**Normal bundle.** For a quasi-smooth f : X → Y, the normal bundle N<sub>X/Y</sub> is the vector bundle stack over X attached to the shifted cotangent complex L<sub>X/Y</sub>[−1] (Definition 1.1).
- Closed immersion: an ordinary vector bundle.
- Smooth morphism: the classifying stack of the relative tangent bundle.

**Bivariant fundamental class.** For f : X → Y quasi-smooth of relative virtual dimension d, the class [X/Y] in A<sub>d</sub>(X/Y) is the image of the unit of Y under the Gysin map f<sup>!</sup> (Construction 3.6). The virtual class is the same class viewed on the classical truncations.

## Main results

**Theorem (functoriality; Theorem 3.12).** Let f : X → Y and g : Y → Z be quasi-smooth morphisms of derived Artin stacks. Then [X/Y] ∘ [Y/Z] ≃ [X/Z], by a canonical homotopy.
- Step 1: build [X/Y] by specialising the unit along the deformation of Y to N<sub>X/Y</sub>, then use homotopy invariance for vector bundle stacks.
- Step 2: for a composite, use a double deformation to the normal bundle.

**Theorem (base change; Theorem 3.13).** In a cartesian square of derived Artin stacks with f : X → Y quasi-smooth and q : Y′ → Y arbitrary, q<sup>\*</sup>[X/Y] ≃ [X′/Y′]. So the class [X/Y] restricts to the virtual class of every derived fibre, which gives deformation invariance.

**Theorem (Bézout without transversality; Theorem 3.22).** Let f : Y → X and g : Z → X be representable, proper and quasi-smooth, of relative virtual dimensions −d and −e. Then [Y] ∪ [Z] ≃ [Y ×<sub>X</sub> Z] in the cohomology of X, where the fibre product is derived.
- Case: if Y and Z meet transversely, the derived fibre product is the classical one and this is the usual product formula.

**Theorem (comparison with Kresch; Theorem B.1).** Let k be a perfect field and X a classical 1-Artin stack of finite type over k with quasi-compact separated diagonal and affine stabilisers. Then Kresch's cycle-theoretic Chow group maps isomorphically to A<sub>n</sub>(X) for every n, with integral coefficients.

## Note, then ignore

- Homotopies, not equalities. The results give canonical homotopies between points of spectra, because the paper works in ∞-categories. On Chow groups they are plain equalities. Safe to skip at first.
- Thom twists ⟨v⟩. General coefficients need a twist by a K-theory class. For oriented theories such as motivic cohomology the twist reduces to a shift by the rank. Safe to skip.
- Two versions. The 2019 arXiv version had rational coefficients and an unproved comparison with Kresch. Section 0.11 lists the changes. Safe to skip.
- Riemann-Roch. Section 3.5 extends Baum-Fulton-MacPherson and gives a formula for the virtual class with a Todd class. It is an application, not part of the construction. Safe to skip on a first reading.
- Chow-Witt classes. The construction also gives classes in non-oriented theories. Safe to skip.

## One next step

Open the PDF and read only Sections 0.1 to 0.3 of the introduction, about one page, which go from Z(s) to the virtual fundamental class.
