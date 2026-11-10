source: https://www.math.uni-hamburg.de/home/schreiber/Brylinski-McLaughlin-Duke-II.pdf
slogan: A degree-4 class is the class of a 2-gerbe, and pushing that 2-gerbe along a family of curves gives Weil reciprocity and the Quillen metric.
basis: the introduction and the main theorem statements

## Before you start

This is Part II of a pair, it assumes Part I from its first paragraph, and it speaks of sheaves of bicategories. The likely feeling is shame at arriving without the background. That feeling makes sense, and it does not need fixing before you read. If you want to see why anyone builds gerbes at all, this paper has two concrete payoffs that fit on one page each. Go to them for interest. Understanding every construction on the way is optional.

## The story

A line bundle is a geometric object whose class is the first Chern class in H<sup>2</sup>. Part I asked for the same in degree 4: a geometric object whose class is, for example, a second Chern class. The answer is a 2-gerbe, a sheaf of bicategories. Part II shows that these objects do work. First, for two line bundles L and L′ the authors build an explicit 2-gerbe whose class is the cup product of the two Chern classes. It extends Deligne's line bundle (f, g] made from two invertible functions. Second, they push 2-gerbes down to loop spaces and along families of Riemann surfaces. Over the circle group this gives the classical Weil reciprocity law. Over the moduli space of stable bundles on a curve it gives a power of the determinant line bundle with its Quillen metric, with no Laplace operator in sight.

## Main definitions

**Deligne cohomology.** For a complex manifold X, the group H<sup>p</sup>(X; ℤ(q)<sub>D</sub>) is the hypercohomology of the complex ℤ(q) → 𝒪 → Ω<sup>1</sup> → ... → Ω<sup>q−1</sup>.
- H<sup>2</sup>(X; ℤ(2)<sub>D</sub>) is the group of holomorphic line bundles with connection up to isomorphism.
- H<sup>3</sup>(X; ℤ(2)<sub>D</sub>) classifies gerbes with connective structure, by Theorem 3.5 of Part I.

**The line bundle (f, g].** For invertible holomorphic functions f and g on X, the cup product in Deligne cohomology gives a holomorphic line bundle with connection (f, g]. Each branch of log f gives a section {log f, g}, and changing the branch by 2πi n multiplies the section by g<sup>n</sup>.

**2-gerbe.** A sheaf of bicategories on X in which the 1-arrows between two local objects form a gerbe and the 2-arrows between two 1-arrows form a torsor under the invertible holomorphic functions. A "concept of connectivity" gives each gerbe of 1-arrows a connective structure. A 2-gerbe with this structure has a class in H<sup>4</sup>(X; ℤ(2)<sub>D</sub>).

## Main results

**Theorem (2-gerbe of a cup product; Theorem 2.4).** For holomorphic line bundles L and L′ on a complex manifold X there is an explicit 2-gerbe with concept of connectivity whose class is the cup product (L, L′] in H<sup>4</sup>(X; ℤ(2)<sub>D</sub>). For L = L′ it represents the square of the first Chern class.
- Step 1: objects are local non-vanishing sections s of L. The 1-arrows from s to gs form the gerbe (g, L′], built in Theorem 2.3.
- Step 2: sheafify, then compute the Čech cocycle and compare.

**Corollary (Weil reciprocity; Corollary 3.5).** Let f and g be meromorphic functions on a compact Riemann surface with disjoint zeros and poles. Then the product of f(x) to the power ord<sub>x</sub>(g) over all points x equals the product of g(x) to the power ord<sub>x</sub>(f).
- Step 1: the holonomy of (f, g] around a small circle at a zero or pole is the Tate symbol there.
- Step 2: the Segal-Witten reciprocity law of Part I, applied to the group ℂ<sup>×</sup> × ℂ<sup>×</sup>, forces the product of these symbols to be 1.

**Theorem (reciprocity for finite groups; Theorem 4.3).** Let G be a finite group. The central extensions that lie in the image of the transgression H<sup>4</sup>(BG; ℤ) → H<sup>3</sup>(LBG; ℤ) have the reciprocity property: over any compact oriented surface with boundary circles, the product of the extensions on the boundary splits. The paper credits the observation to Segal.

**Theorem (Quillen metric; Corollaries 6.2 and 7.3, Remark 7.4).** Let Σ be a compact Riemann surface of genus at least 2 and let the rank r and degree d be coprime. On the moduli space of stable bundles with fixed determinant, the bundle P ⊗ P\* built from a Poincaré family P, with the Hermitian metric from the Narasimhan-Seshadri theorem, pushes forward along Σ to a Hermitian holomorphic line bundle. It is the r-th power of the determinant line bundle with its Quillen metric.
- Step 1: integrate over the fibre in Hermitian holomorphic Deligne cohomology (Theorem 6.1).
- Step 2: compare curvatures, then use that the moduli space is simply connected.

## Note, then ignore

- The square in Corollary 3.3. With ℂ<sup>×</sup> alone the method gives only the square of Weil's law, because transgression sends c<sub>1</sub><sup>2</sup> to twice a generator (Proposition 3.4). The authors pass to ℂ<sup>×</sup> × ℂ<sup>×</sup> to remove it. Safe to skip on a first reading.
- Deligne's shortcut. Remark 3.6 says Weil reciprocity follows at once from the holonomy reading of the Tate symbol. The long route is there to show the general mechanism. Safe to skip.
- Hermitian holomorphic Deligne cohomology. Section 5 defines a variant that holds both the holomorphic class and the Cheeger-Simons differential character (Theorem 5.5). It is needed only for the metric. Safe to skip.
- An r-th power. The method gives the r-th power of the determinant bundle. The authors say the bundle itself would need an extension to GL<sub>r</sub>, which they do not carry out. Safe to skip.
- Scan quality. The linked file is a scan and several formulas are hard to read. Use the journal version to check a formula. Safe to skip.

## One next step

Open the paper at Section 2 and read Proposition 2.1 and the paragraph after it, which builds (f, g] from a branch of log f.
