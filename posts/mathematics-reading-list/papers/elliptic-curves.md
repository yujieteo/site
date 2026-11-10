source: https://www.jmilne.org/math/Books/ectext6.pdf
slogan: Chords and tangents turn a cubic curve into a finitely generated group, and counting its points modulo primes ties that group to modular forms.
basis: the introduction and the main theorem statements

## Before you start

This is a 240-page book that ends at Fermat's Last Theorem, so the likely feeling is overwhelm: so much stands between page 1 and the famous ending. That feeling is reasonable, and you can let it sit there. The book came from a course built for students with only first-year graduate courses. If you want to see how a curve becomes a modular form, the last chapter shows it. Read the parts you enjoy. Finishing is optional.

## The story

People have looked for rational points on cubic curves since antiquity. A line through two rational points on a cubic meets it in a third, so points can be added. The first question is whether finitely many points generate all the others by this chord and tangent process. Mordell proved in 1922 that they do. The rank of the group is still not computable by any proven algorithm. Birch and Swinnerton-Dyer found by computer that the rank seems to be visible in the numbers N<sub>p</sub> of points on the curve modulo each prime p. Later, Taniyama suggested that the N<sub>p</sub> come from a modular form. Wiles proved this for a large class of curves, and Fermat's Last Theorem followed. Chapters I to III build the basic theory, Chapter IV proves Mordell's theorem, and Chapter V explains modularity.

## Main definitions

**Elliptic curve.** An elliptic curve over a field k is a nonsingular complete curve of genus 1 with a chosen point O. The chosen point is the zero of the group law.
- Characteristic not 2 or 3: it is a plane curve Y<sup>2</sup>Z = X<sup>3</sup> + aXZ<sup>2</sup> + bZ<sup>3</sup> with 4a<sup>3</sup> + 27b<sup>2</sup> ≠ 0 and O = (0 : 1 : 0).
- Over ℂ: it is a torus ℂ/Λ for a lattice Λ.

**Néron-Tate height.** A function ĥ on E(ℚ) with ĥ(2P) = 4ĥ(P) that differs from the logarithm of the naive height by a bounded amount. It gives a bilinear pairing ⟨P, Q⟩ on E(ℚ).

**L-series.** For an elliptic curve E over ℚ, set a<sub>p</sub> = p + 1 − N<sub>p</sub>(E) at primes of good reduction. The L-series L(E, s) is the Euler product built from the a<sub>p</sub>, with modified factors at the bad primes.

**Newform.** A cusp form f = Σ c(n)q<sup>n</sup> of weight 2 for Γ<sub>0</sub>(N), with c(1) = 1, that is new at level N and is an eigenvector of all Hecke operators T(n).

## Main results

**Theorem (finite basis, or Mordell-Weil; stated at the start of Chapter IV).** For any elliptic curve E over a number field K, the group E(K) is finitely generated. The book gives the argument in detail for K = ℚ.
- Step 1: E(K)/nE(K) is finite (weak finite basis), proved through the Selmer group.
- Step 2: heights give a descent. Each point is a representative plus twice a point of smaller height, until the height drops below a fixed bound.

**Theorem (congruence Riemann hypothesis; Chapter IV, Theorem 9.4).** For an elliptic curve E over 𝔽<sub>p</sub>, the number of points satisfies |#E(𝔽<sub>p</sub>) − (p + 1)| ≤ 2√p.
- Step 1: the points over 𝔽<sub>p</sub> are the kernel of 1 − φ, where φ is the Frobenius map, so #E(𝔽<sub>p</sub>) = deg(1 − φ).
- Step 2: Frobenius on the Tate module has characteristic polynomial X<sup>2</sup> + cX + p with c<sup>2</sup> ≤ 4p, and deg(1 − φ) = 1 + c + p.

**Conjecture (Birch and Swinnerton-Dyer; Chapter IV, Conjecture 10.5).** Let r be the rank of E(ℚ). Then L(E, s) vanishes to order r at s = 1. Its leading coefficient is a product of the real period, the local factors c<sub>p</sub> at bad primes, the order of the Tate-Shafarevich group and the determinant of the height pairing, divided by the square of an index.

**Theorem (Eichler-Shimura; Chapter V, Theorems 5.2, 6.3 and 7.10).** Let f = Σ c(n)q<sup>n</sup> be a normalised newform for Γ<sub>0</sub>(N) with all c(n) ∈ ℤ. Then there is an elliptic curve E<sub>f</sub> over ℚ of conductor N with L(E<sub>f</sub>, s) = L(f, s).
- Step 1: E<sub>f</sub> is the largest quotient of the Jacobian of X<sub>0</sub>(N) on which each Hecke operator T(n) acts as the integer c(n).
- Step 2: modulo p, the Hecke correspondence T(p) is Frobenius plus its transpose, which gives c(p) = p + 1 − N<sub>p</sub>(E<sub>f</sub>) for p not dividing N.

## Note, then ignore

- Characteristic 2 and 3. The short Weierstrass equation fails there, so the book also gives a longer general equation. Safe to skip on a first reading.
- Non-perfect fields. Chapter I takes care that a polynomial does not gain repeated factors over the algebraic closure. This matters only for fields you will not meet in Chapters IV and V. Skip it.
- ℚ versus number fields. The finite basis theorem is stated over any number field, but the proof is written out over ℚ to keep the algebraic number theory light. Safe to ignore.
- Finiteness of the Tate-Shafarevich group. The conjecture of Birch and Swinnerton-Dyer needs this group to be finite, and that is itself a conjecture (Conjecture 5.3). Note it and move on.
- Wiles's class of curves. The book says Wiles proved modularity for a large class of curves, which is enough for Fermat. The exact class does not change the story.

## One next step

Open the book at printed page 210 (Chapter V, Section 6) and read only the statement of Theorem 6.3, which builds the curve E<sub>f</sub> from a cusp form.
