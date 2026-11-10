source: https://www.jmilne.org/math/Books/ADTnot.pdf
slogan: Galois cohomology obeys a Poincaré-style duality, with a local field acting like a surface and a ring of integers like a 3-manifold.
basis: the introduction and the main theorem statements

## Before you start

This is a 339-page reference book with three chapters, each on a harder cohomology theory than the last. The feeling it tends to raise is dread of a wall: you may think you must own Galois, étale and flat cohomology before page one. Let that feeling sit. You do not have to climb it. The whole book repeats one statement in wider settings, and you can see that statement in an afternoon. If you want to know why Selmer groups and Tate–Shafarevich groups come with pairings, the answer lives here. Browse for interest. Nobody reads this book straight through.

## The story

Class field theory says that the Brauer group of a local field is ℚ/ℤ. Tate saw, around 1960, that this single fact acts like a fundamental class. It turns cup product into a perfect pairing between H<sup>r</sup> of a Galois module and H<sup>2−r</sup> of its dual, just as Poincaré duality pairs degrees r and n − r on a manifold. Local fields then look 2-dimensional. For a global field the local dualities do not simply add up. The obstruction is measured by the classes that vanish at every place, and Tate and Poitou packaged it in a nine-term exact sequence. Artin and Verdier rephrased it geometrically: the spectrum of a ring of integers behaves like a 3-dimensional space, with the multiplicative group as dualising sheaf. Chapter III pushes on to flat cohomology, to reach p-torsion in characteristic p.

## Main definitions

**The dual module M<sup>D</sup>.** For a module M over the Galois group G of a field K, M<sup>D</sup> = Hom(M, K<sup>s×</sup>), with K<sup>s</sup> a separable closure. For a finite group scheme it is the Cartier dual.
- Example: the dual of ℤ/n is μ<sub>n</sub>.

**G<sub>S</sub> and the restricted product P<sub>S</sub><sup>r</sup>.** For a global field K and a set S of primes, G<sub>S</sub> is the Galois group of the maximal extension unramified outside S. P<sub>S</sub><sup>r</sup>(K, M) is the restricted product over v in S of the local groups H<sup>r</sup>(K<sub>v</sub>, M), relative to the unramified classes.
- At archimedean places the book uses Tate's modified cohomology.

**Tate–Shafarevich group Ш<sup>r</sup><sub>S</sub>(K, M).** The kernel of the localisation map β<sup>r</sup> from H<sup>r</sup>(G<sub>S</sub>, M) to P<sub>S</sub><sup>r</sup>(K, M). It holds the classes that are trivial at every place of S.

**Cohomology with compact support.** For an open subscheme U of X, where X is the spectrum of a ring of integers or a complete smooth curve over a finite field, the groups H<sub>c</sub><sup>r</sup>(U, F) sit in a long exact sequence with H<sup>r</sup>(U, F) and the local cohomology at the places outside U, real places included.

## Main results

**Theorem (local Tate duality; Chapter I, Corollary 2.3).** Let K be a non-archimedean local field with absolute Galois group G, and M a finite G-module of order prime to char K. Then cup product gives a perfect pairing of finite groups H<sup>r</sup>(G, M<sup>D</sup>) × H<sup>2−r</sup>(G, M) → H<sup>2</sup>(G, K<sup>s×</sup>) ≅ ℚ/ℤ. The book states it for finitely generated M, with a completion in degree 0.
- Step 1: prove a general duality for any class formation (Section 1), with Ext groups in place of H<sup>r</sup>(M<sup>D</sup>).
- Step 2: K<sup>s×</sup> is divisible by primes other than char K, so the Ext groups reduce to H<sup>r</sup>(G, M<sup>D</sup>).

**Theorem (Poitou–Tate; Chapter I, Theorem 4.10).** Let M be a finite G<sub>S</sub>-module whose order is a unit in the ring of S-integers. Then Ш<sup>1</sup><sub>S</sub>(K, M) and Ш<sup>2</sup><sub>S</sub>(K, M<sup>D</sup>) are finite and dual to each other. For r ≥ 3, H<sup>r</sup>(G<sub>S</sub>, M) maps isomorphically to the product of H<sup>r</sup>(K<sub>v</sub>, M) over real v.
- Consequence: a nine-term exact sequence joins H<sup>r</sup>(G<sub>S</sub>, M), P<sub>S</sub><sup>r</sup>(K, M) and the duals of H<sup>2−r</sup>(G<sub>S</sub>, M<sup>D</sup>) for r = 0, 1, 2.

**Theorem (Artin–Verdier; Chapter II, Theorem 3.1).** Let F be a constructible sheaf on an open U in X. Then Ext<sup>r</sup><sub>U</sub>(F, 𝔾<sub>m</sub>) × H<sub>c</sub><sup>3−r</sup>(U, F) → H<sub>c</sub><sup>3</sup>(U, 𝔾<sub>m</sub>) ≅ ℚ/ℤ is a non-degenerate pairing of finite groups for all r.
- For ℤ-constructible F the statement holds after completing Ext in degrees 0 and 1.

**Theorem (abelian varieties over local fields; Chapter I, Corollary 3.4).** If K is local of characteristic 0 and A is an abelian variety with dual A<sup>t</sup>, there is a canonical pairing H<sup>r</sup>(K, A<sup>t</sup>) × H<sup>1−r</sup>(K, A) → ℚ/ℤ. It makes A<sup>t</sup>(K) the dual of H<sup>1</sup>(K, A), and the groups vanish for r ≠ 0, 1.

## Note, then ignore

- Signs. Milne warns that diagrams said to commute may commute only up to sign. The signs do not affect the statements. Safe to skip on a first reading.
- Many duals. M<sup>\*</sup> is the Pontryagin-style dual Hom<sub>cts</sub>(M, ℚ/ℤ), M<sup>D</sup> the Cartier-style dual, A<sup>t</sup> the dual abelian variety. Keep a note of the three. Safe to skip the rest of the notation page.
- Completions. The hat on a group means completion for subgroups of finite index. It appears because H<sup>0</sup> can be infinite. For finite M it disappears. Safe to skip.
- Characteristic p. The p-part in characteristic p breaks Chapters I and II and is the reason for Chapter III. Safe to skip at first.
- Second edition. The numbering matches the 1986 edition except II 3.18, and footnotes record corrections. Safe to skip.

## One next step

Open the PDF at Chapter I, Section 2, and read only Corollary 2.3 and its three-line proof.
