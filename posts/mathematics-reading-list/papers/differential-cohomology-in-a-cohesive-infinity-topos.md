source: https://arxiv.org/pdf/1310.7930
slogan: Four adjoint functors on a higher topos are enough to define connections, curvature and gauge fields, so the definitions come once and work everywhere.
basis: the introduction and the main theorem statements

## Before you start

This text is 797 pages long, and its contents list alone fills ten of them. Overwhelm is the plain response to that, and maybe some boredom, since much of it is a reference catalogue. Both are fine to feel. If you want a single definition of "bundle with connection" that covers circle bundles, gerbes and beyond, it sits in a few pages of Section 3. Go there for the pleasure of it. The rest is for looking things up.

## The story

Gauge fields in physics are connections on bundles. Higher gauge fields, such as the B-field of string theory, are connections on gerbes and beyond. Each case was built by hand, with cocycle data that grows worse in every degree. Schreiber wants one definition that produces them all. His idea follows Lawvere: do not describe smooth spaces directly. Instead ask for a higher topos H whose map to bare homotopy types has extra adjoints. One adjoint forgets the geometry, one makes a space discrete, one takes the homotopy type of the geometric paths. From these alone you can say "flat", "de Rham" and "curvature". Differential cohomology is then a homotopy pullback. In the model built from smooth manifolds, it returns the classical answer, Deligne cohomology.

## Main definitions

**Cohesive ∞-topos (Definition 3.4.1).** An ∞-topos H with a quadruple of adjoint ∞-functors Π ⊣ Disc ⊣ Γ ⊣ coDisc between H and ∞-groupoids, such that Π preserves finite products. Π and Γ go from H to ∞Grpd. Disc and coDisc go back.
- Γ(X) is the underlying ∞-groupoid of points. Π(X) is the fundamental ∞-groupoid of geometric paths.
- Disc(S) and coDisc(S) give an ∞-groupoid S the discrete and the indiscrete geometric structure.

**The modalities.** Composing the adjoints gives three endofunctors of H with Π ⊣ ♭ ⊣ ♯. Here ♭ = Disc Γ, and a map X → ♭A is a flat A-valued cocycle on X. The de Rham coefficient object ♭<sub>dR</sub>A is the homotopy fibre of ♭A → A. It classifies flat cocycles whose underlying bundle is trivialised, which is what differential forms are.

**Differential cohomology (Definition 3.9.37).** For an object X, an abelian coefficient group A and n ≥ 1, there is a canonical curvature map curv : B<sup>n</sup>A → ♭<sub>dR</sub>B<sup>n+1</sup>A. The ∞-groupoid H<sub>diff</sub>(X, B<sup>n</sup>A) is the homotopy pullback of H(X, B<sup>n</sup>A) along curv against a choice of one cocycle for each class in H<sub>dR</sub><sup>n+1</sup>(X, A). Its set of components is the differential cohomology H<sup>n</sup><sub>diff</sub>(X, A).
- A cocycle has an underlying class in H<sup>n</sup>(X, A) and a curvature class in H<sub>dR</sub><sup>n+1</sup>(X, A).

## Main results

**Proposition (models exist; Propositions 3.4.18 and 4.4.8).** The ∞-topos of ∞-sheaves on an ∞-cohesive site is cohesive. The site of Cartesian spaces ℝ<sup>n</sup> with smooth maps and good open covers is ∞-cohesive. So Smooth∞Grpd, the ∞-sheaves on it, is a cohesive ∞-topos.
- Step 1: Π sends a simplicial presheaf to its colimit. It preserves products because the site has finite products.
- Step 2: Γ evaluates on the point, and its right adjoint is written down directly.

**Proposition (characteristic class sequence; Proposition 3.9.41).** In any cohesive ∞-topos there is a short exact sequence of abelian groups 0 → H<sub>dR</sub><sup>n</sup>(X, A)/H<sup>n−1</sup>(X, A) → H<sup>n</sup><sub>diff</sub>(X, A) → H<sup>n</sup>(X, A) → 0. It says that connections on a fixed bundle differ by forms.

**Proposition (flat case; Proposition 3.9.39).** The part of differential cohomology with vanishing curvature class is flat cohomology, the cohomology of X with coefficients in ♭B<sup>n</sup>A.

**Theorem (Deligne cohomology recovered; Theorem 4.4.87).** Let X be a paracompact smooth manifold, viewed in Smooth∞Grpd. Then the variant H′<sub>diff</sub>(X, B<sup>n</sup>U(1)), which keeps all curvature forms, has as its set of components the ordinary Deligne cohomology of X in degree n + 1. The pullback H<sub>diff</sub> itself gives the subset with one curvature form for each integral de Rham class.
- Step 1: replace X by the Čech nerve of a good open cover.
- Step 2: the fibre over a closed form F consists of cocycles in the Deligne complex whose last term has differential F.

## Note, then ignore

- H<sub>diff</sub> versus H′<sub>diff</sub>. The abstract pullback picks one curvature representative for each class. The primed version, modelled by the object B<sup>n</sup>U(1)<sub>conn</sub>, keeps all forms and is the one that matches the classical theory. Safe to skip on a first reading.
- Degree shift. B<sup>n</sup>U(1) corresponds to Deligne cohomology in degree n + 1, since a circle bundle has a class in H<sup>2</sup>(X, ℤ). Note it and move on.
- Hypercompletion. Smooth∞Grpd is the hypercompletion of ∞-sheaves on all smooth manifolds (Proposition 4.4.9). This is a size and descent point. Safe to skip.
- Chapter 2. It reviews ∞-categories, ∞-toposes and homotopy type theory, and collects lemmas for later. Skip it unless a later proof sends you back.
- Versions. This is arXiv version 1 from 2013. The first page says the text is kept up to date on the author's nLab page, so section numbers there may differ. Safe to skip.

## One next step

Open the PDF at Section 3.4.1.1 (around page 250) and read Definition 3.4.1 and Remark 3.4.2, the four adjoints and what each one means.
