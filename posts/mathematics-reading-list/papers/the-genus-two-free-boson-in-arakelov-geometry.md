source: https://arxiv.org/pdf/1902.02420
slogan: The free boson on a genus two surface has a closed formula in modular forms, just like the torus formula with the eta function.
basis: the introduction and the main theorem statements

## Before you start

This is a physics paper of 24 pages, and it opens with a path integral and "zeta function-regularised determinant" before any geometry appears. The likely feeling is the unease of an outsider: a worry that you lack the physics to judge any step. You are allowed to feel that, and it need not be settled. If you would like to see Faltings' delta invariant do a concrete job, this is a short place to watch it. Read for the one formula and enjoy the family resemblance to genus one. Completeness can come later, or never.

## The story

The free boson is the simplest conformal field theory. Its partition function on a surface X is a Gaussian integral, so it equals a power of the determinant of the Laplacian divided by the area. On a torus this becomes a clean formula: |η(τ)|<sup>−2</sup> divided by the square root of Im τ. For genus above one, known formulas mix theta functions, Green's functions and determinants of one-forms. The author wants a genus two formula as clean as the torus one. The way in is a known link: the partition function is an exponential of Faltings' delta invariant from Arakelov geometry. Mathematicians, de Jong among them, had already written delta for genus two in terms of simpler modular invariants. Substituting gives Z<sub>2</sub> as a product of Igusa's cusp form χ<sub>10</sub> and one non-holomorphic factor Φ.

## Main definitions

**Arakelov form and Green's function.** On a genus g surface X with period matrix τ and normalised one-forms ω<sub>i</sub>, μ = (i/2g) Σ (Im τ)<sup>−1</sup><sub>ij</sub> ω<sub>i</sub> ∧ ω̄<sub>j</sub>. It has total integral 1. The Arakelov Green's function G(z, w) is the symmetric function with a simple zero on the diagonal, with ∂∂̄ log G proportional to μ away from it, and with ∫ log G(z, w) μ(w) = 0.

**Faltings' delta invariant δ(X).** A real number attached to X, invariant under change of homology basis. The paper uses it through its relation to the Laplacian: with the Arakelov metric, the partition function is a constant times exp(δ(X)/12) (equation 4.1).

**Igusa's cusp form χ<sub>10</sub>.** The product of the squares of the ten even theta constants at genus two. It is a modular form of weight 10. Its invariant norm is ‖χ<sub>10</sub>‖ = 2<sup>−12</sup> (det Im τ)<sup>5</sup> |χ<sub>10</sub>|.

**The invariants H and Φ.** log H(X) is the integral of log ‖θ(Z|τ)‖ over the Jacobian against its Haar measure. At genus two, Φ(τ) = H(X)<sup>2</sup> / √(det Im τ). It has modular weight (1/2, 1/2).

## Main results

**Claim (physics argument; equations 4.5 to 4.7).** For a genus two surface with the Arakelov metric, δ(X) = −16 log 2π + 12 log 2 − log ‖χ<sub>10</sub>‖ − 4 log H(X). Hence the non-compact free boson partition function is Z<sub>2</sub>(τ) = 2 |χ<sub>10</sub>(τ)|<sup>−1/12</sup> Φ(τ)<sup>−1/6</sup> / √(det Im τ).
- Step 1: write exp(δ/4) through de Jong's invariants S and T, and use that T is proportional to a power of ‖χ<sub>10</sub>‖ at genus two.
- Step 2: trade S for H using S = ‖χ<sub>10</sub>‖<sup>−1/4</sup> H<sup>4</sup>.

**Claim (failure of holomorphic factorisation; Section 4.2, equation 4.16).** Φ is not the squared modulus of a holomorphic function on moduli space. The paper rewrites Z<sub>2</sub> as the exponential of a Liouville action times other invariants, which is the form the conformal anomaly predicts.

**Claim (degeneration check; Section 4.3, equation 4.20).** When the genus two surface pinches along a separating cycle into two tori with parameter t, Z<sub>2</sub>(τ) → ‖t‖<sup>−1/6</sup> Z<sub>1</sub>(τ<sub>1</sub>) Z<sub>1</sub>(τ<sub>2</sub>) at leading order. This fixes the overall constant 2. The paper also compares subleading terms with conformal field theory predictions for the compact boson.

## Note, then ignore

- The constant c(g). Relation 4.1 holds up to a constant that depends only on the genus. The degeneration limit fixes it. Safe to skip on a first reading.
- Double-bar norms. ‖·‖ means different things for different objects: make it periodic, make it weight zero, perhaps rescale. A footnote in Section 2.1 gives the recipe. Safe to skip.
- Hyperelliptic only. Several identities hold because every genus two surface is hyperelliptic. That is why the method stops at genus two. Safe to skip.
- Compact versus non-compact. The main formula is for the non-compact boson. The compact one multiplies it by a lattice sum over momentum and winding. Safe to skip.
- Only the separating degeneration. The other way to pinch, leaving a torus with a handle, is not treated. Safe to skip.

## One next step

Open the paper at Section 5 (Conclusion) and read equation 5.1 and the paragraph after it. Then compare it with equation 1.4 on the first page.
