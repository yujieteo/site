source: https://arxiv.org/pdf/math/0509646
slogan: The determinantal gerbe of a bundle of Laurent series is computed by the second Chern character, pushed down by a symbol map.
basis: the introduction and the main theorem statements

## Before you start

This paper can raise the fear of being too slow. The introduction ties together vertex algebras, the Sato Grassmannian and Deligne's Riemann-Roch in five pages, and then come ind-schemes and K-theory sheaves. You can feel slow here. Most readers do. The pay-off is one clean formula that explains why chiral differential operators exist only when a certain Chern class vanishes. Let yourself enjoy the introduction as a story before you decide whether to go further.

## The story

Riemann-Roch computes the Chern classes of a direct image. Deligne asked for more in degree one: identify the determinant line bundle itself, not just its class. Kapranov and Vasserot go one level further down. Take a family of circles instead of a family of curves. Sections of a bundle along a circle form an infinite-dimensional space of Laurent series type. It has no determinant line. It has only a determinantal gerbe, because the determinant of one lattice relative to another is defined, and no absolute determinant is. The gerbe has a class in H<sup>2</sup> of the base with coefficients in invertible functions. The paper computes it. The class is the second Chern character ch<sub>2</sub> = ½c<sub>1</sub><sup>2</sup> − c<sub>2</sub>, integrated along the circle by a symbol map. Applied to the formal loop space LX, this gives the known obstruction to chiral differential operators on X.

## Main definitions

**Lattice.** Let S be a scheme and E a locally free O<sub>S</sub>((t))-module of rank N. A lattice in E is a sheaf of O<sub>S</sub>[[t]]-submodules F ⊂ E such that, Zariski locally on S, the pair (F, E) looks like (O<sub>S</sub>[[t]]<sup>N</sup>, O<sub>S</sub>((t))<sup>N</sup>).
- Key fact: if F<sub>1</sub> ⊂ F<sub>2</sub> are lattices, then F<sub>2</sub>/F<sub>1</sub> is locally free of finite rank over O<sub>S</sub>.

**Determinantal gerbe Det(E).** For two lattices set (F<sub>1</sub>|F<sub>2</sub>) = det(F<sub>1</sub>/F′) ⊗ det(F<sub>2</sub>/F′)<sup>−1</sup>, where F′ is a lattice inside both. This line bundle does not depend on F′, and (F<sub>1</sub>|F<sub>2</sub>) ⊗ (F<sub>2</sub>|F<sub>3</sub>) ≅ (F<sub>1</sub>|F<sub>3</sub>). Lattices are the objects, and the torsors of these line bundles are the morphisms. The result is a gerbe with band O<sub>S</sub><sup>×</sup> and a class [Det(E)] ∈ H<sup>2</sup>(S, O<sub>S</sub><sup>×</sup>).

**Contou-Carrère symbol ∂.** For a commutative ring A (here a ℂ-algebra), a homomorphism ∂ : K<sub>2</sub>(A((t))) → A<sup>×</sup>. It extends the tame symbol from fields to families. It induces ∂ : H<sup>2</sup>(S, K<sub>2</sub>(O<sub>S</sub>((t)))) → H<sup>2</sup>(S, O<sub>S</sub><sup>×</sup>).
- Role: it is the algebraic stand-in for integration along the circle.

**Chern classes with values in K-theory.** Goncharov's universal classes c<sub>i</sub> on the classifying space of GL<sub>N</sub>, with values in Milnor K-theory sheaves, pull back to classes c<sub>i</sub><sup>((t))</sup>(E) ∈ H<sup>i</sup>(S, K<sub>i</sub>(O<sub>S</sub>((t)))). Set ch<sub>2</sub><sup>((t))</sup>(E) = ½c<sub>1</sub><sup>((t))</sup>(E)<sup>2</sup> − c<sub>2</sub><sup>((t))</sup>(E).

## Main results

**Theorem (local Riemann-Roch; Theorem 5.3.1).** Let S be a scheme over ℂ and E a locally free sheaf of O<sub>S</sub>((t))-modules of rank N. Then [Det(E)] = ∂(ch<sub>2</sub><sup>((t))</sup>(E)) in H<sup>2</sup>(S, O<sub>S</sub><sup>×</sup>) ⊗ ℤ[½].
- Step 1: both sides come from universal classes on the classifying space of the group ind-scheme GL<sub>N</sub>((t)). Such classes are central extensions of GL<sub>N</sub>((t)) by ℂ<sup>×</sup>, so the theorem compares two extensions.
- Step 2: the difference is trivial on the diagonal torus T((t)), by a GL<sub>1</sub> computation with the tame symbol, and on SL<sub>N</sub>((t)), by a line-bundle argument on the affine Grassmannian.

**Theorem (loop spaces; Theorem 6.4.1).** Let X be a smooth variety over ℂ, LX its ind-scheme of formal loops and E a bundle on X, with E<sub>L</sub> its pull-back along the evaluation map. Then the class [Det(E<sub>L</sub>)] ∈ H<sup>2</sup>(LX, O<sup>×</sup>) is ∂ applied to the pull-back of the second Chern character of E.
- Proof: apply Theorem 5.3.1 to every map S → LX.
- Use: for E the cotangent bundle, a trivialisation of this gerbe produces a sheaf of chiral differential operators. The construction is in the sequel paper, not here.

**Claim (smooth version, stated without proof; formula 0.3.3).** For a smooth oriented circle fibration p : Σ → B and a vector bundle E on Σ, the image of [Det(p<sub>\*</sub>E)] in H<sup>3</sup>(B, ℤ) ⊗ ℤ[½] is the fibre integral of ½c<sub>1</sub>(E)<sup>2</sup> − c<sub>2</sub>(E). The authors defer the proof to a later paper.

## Note, then ignore

- Inverting 2. The class ch<sub>2</sub> contains a half, so the theorem holds only after tensoring with ℤ[½]. Safe to skip on a first reading.
- A factor of 2. Theorem 5.3.1 is written with ch<sub>2</sub> and Theorem 6.4.1 with 2ch<sub>2</sub>. This looks like a normalisation slip between sections. Safe to skip.
- Milnor against Quillen K-theory. Goncharov's classes live in Milnor K-theory. For K<sub>1</sub> and K<sub>2</sub> of local ℂ-algebras the two agree, so nothing changes. Safe to skip.
- Ind-schemes and sites. Sections 1 and 2 set up gerbes on ind-schemes with care. You need only the idea that a gerbe has a class in H<sup>2</sup>. Safe to skip.
- Group ind-scheme, not discrete group. Older results identify these extensions for the discrete group. The paper needs the algebraic version, which is why the proof is redone. Safe to skip.

## One next step

Read paragraph (0.3) of the introduction, about one page, and stop at formula (0.3.3). It states the theorem in the smooth setting, where the picture is clearest.
