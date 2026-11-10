source: https://arxiv.org/pdf/1706.10100
slogan: Primitive curve counts on a K3 surface times an elliptic curve form the reciprocal of a Siegel modular form, so one formula holds them all.
basis: the abstract and introduction

## Before you start

The introduction assumes you know virtual fundamental classes, stable maps, double ramification cycles and Siegel modular forms. Fear of being too slow is a natural response, because every page leans on a different toolkit. You can have that fear and still read. Theorem 1 can be stated with one infinite product and one generating series, and if you like the idea that geometry can produce a modular form, that statement is the prize. Enjoy the formula first. Finishing matters less.

## The story

Let S be a K3 surface and E an elliptic curve. In 1999 Katz, Klemm and Vafa predicted from string theory that the counts of curves in S × E assemble into 1/χ<sub>10</sub>, where χ<sub>10</sub> is the Igusa cusp form. The obstacle is that the counts depend on three numbers, the genus and two degrees, and no direct computation reaches all of them. Oberdieck and Pixton use symmetry from two sides. Counting sheaves gives the transformation law of a Jacobi form. Counting maps gives a holomorphic anomaly equation: a formula for the derivative of the generating series in the Eisenstein series C<sub>2</sub>. Together the two constraints fix the whole series from a single coefficient. Setting d = 0 and genus 0 recovers the Yau-Zaslow count of rational curves, 1/Δ(q).

## Main definitions

**Reduced invariants N<sub>g,h,d</sub>.** Take a primitive class β<sub>h</sub> on S with self-intersection 2h − 2, and the class (β<sub>h</sub>, d) on X = S × E. N<sub>g,h,d</sub> is the integral of one fixed insertion over the reduced virtual class of the moduli space of genus g stable maps in that class. It counts curves up to translation by E.
- The partition function is Z(u, q, q̃) = Σ N<sub>g,h,d</sub> u<sup>2g−2</sup> q<sup>h−1</sup> q̃<sup>d−1</sup>.

**Igusa cusp form.** χ<sub>10</sub>(p, q, q̃) = p q q̃ Π (1 − p<sup>k</sup> q<sup>h</sup> q̃<sup>d</sup>)<sup>c(4hd − k²)</sup>. It is a Siegel modular form of weight 10 and genus 2. The exponents c(n) are the Fourier coefficients of an explicit weight −1/2 form, starting 2q<sup>−1</sup> + 20 − 128q<sup>3</sup> + …
- The product runs over integers k and h, d ≥ 0 with h > 0 or d > 0, together with h = d = 0 and k negative.

**Quasimodular forms.** QMod = ℚ[C<sub>2</sub>, C<sub>4</sub>, C<sub>6</sub>], the polynomial ring on the Eisenstein series of weights 2, 4, 6. Setting C<sub>2</sub> to zero gives the modular forms.

**Gromov-Witten classes of E.** For classes γ<sub>1</sub>, …, γ<sub>n</sub> in H<sup>\*</sup>(E), C<sub>g</sub>(γ<sub>1</sub>, …, γ<sub>n</sub>) is the series in q whose coefficient of q<sup>d</sup> is the push-forward to the moduli space of stable curves of the virtual class of degree d maps to E, cut down by the γ<sub>i</sub>. It lies in H<sup>\*</sup>(M̄<sub>g,n</sub>) ⊗ ℚ[[q]].

## Main results

**Theorem (Igusa cusp form conjecture; Theorem 1).** Under p = e<sup>iu</sup>, the partition function of primitive reduced invariants of S × E is the Laurent expansion of Z(u, q, q̃) = −1/χ<sub>10</sub>(p, q, q̃).
- Step 1: the Gromov-Witten/Pandharipande-Thomas correspondence moves the problem to sheaf counting, where earlier work gives the elliptic transformation law of Jacobi forms.
- Step 2: the product formula splits the map side into the K3 surface and the elliptic curve. Theorems 3 and 4 below then constrain it, and one coefficient fixes the rest.

**Theorem (quasimodularity for E; Theorem 2 and Corollary 1).** For all γ<sub>i</sub> in H<sup>\*</sup>(E), C<sub>g</sub>(γ<sub>1</sub>, …, γ<sub>n</sub>) lies in H<sup>\*</sup>(M̄<sub>g,n</sub>) ⊗ QMod. For homogeneous γ<sub>i</sub> the weight is 2g − 2 + Σ deg γ<sub>i</sub>, with real cohomological degrees.
- Step 1: degenerate E to a rational nodal curve. The classes become a trace-like sum of double ramification cycles.
- Step 2: the double ramification cycle is polynomial in the ramification profiles, and this gives quasimodularity.

**Theorem (holomorphic anomaly equation for E; Theorem 3).** View C<sub>g</sub> as a polynomial in C<sub>2</sub>, C<sub>4</sub>, C<sub>6</sub>. Then dC<sub>g</sub>/dC<sub>2</sub> is a sum of three terms: the push-forward of C<sub>g−1</sub> with two extra unit insertions along the map that glues two marked points, the sum over splittings of the curve into two components, and a correction −2 Σ (∫<sub>E</sub> γ<sub>i</sub>) ψ<sub>i</sub> C<sub>g</sub> with γ<sub>i</sub> replaced by 1.
- This proves a conjecture of Milanov, Ruan and Shen.

**Theorem (K3 surfaces, numerical; Theorem 4).** For an elliptic K3 surface with a section and the primitive classes B + hF, the analogous anomaly equation holds after pairing with any tautological class on M̄<sub>g,n</sub>. The cycle-level statement is Conjecture D and stays open.

## Note, then ignore

- Reduced class. A K3 surface has a holomorphic symplectic form, so the ordinary virtual class vanishes. The reduced class is the standard repair. Safe to skip on a first reading.
- Disconnected curves. The invariants N<sub>g,h,d</sub> use maps from possibly disconnected curves. This makes the product formula clean. Safe to skip.
- Primitive only. The theorem covers classes that are primitive in the K3 factor. The paper says the general conjecture is open except for the cases d = 0 and β = 0. Note it and move on.
- The region of convergence. The product for χ<sub>10</sub> is expanded where |p<sup>k</sup> q<sup>h</sup> q̃<sup>d</sup>| is less than 1 whenever 4hd − k² ≥ −1. This fixes which Laurent expansion is meant. Safe to skip.
- Conjectures A to D. Section 0.5 conjectures the same structure for every elliptic fibration with a section. Only the product B × E is proved here (Corollary 2). Safe to skip.

## One next step

Open the paper at page 4 and read Theorem 1 and the two displayed formulas after it, the Yau-Zaslow and Katz-Klemm-Vafa specialisations.
