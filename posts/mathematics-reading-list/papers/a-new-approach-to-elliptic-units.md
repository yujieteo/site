source: https://people.maths.ox.ac.uk/rossler/mypage/pdf-files/beamer-kyoto.pdf
slogan: A refined height vanishes on torsion points, and that vanishing forces certain values of sigma and theta functions to be units.
basis: the full text

## Before you start

These are 23 slides from a 2006 talk by Damian Rössler on joint work with Vincent Maillot. Slides leave out the proofs, so the likely feeling is frustration: each formula appears, and the reason for it stays off the page. That is a fair reaction to the format. What the slides give is a short route from a height formula to a unit, worth having if Arakelov theory interests you. Read them like a trailer. Enjoy the plot and let the details go.

## The story

Cyclotomic units 1 − e<sup>2πik/m</sup> come from torsion points of the multiplicative group. Elliptic units come from torsion points of an elliptic curve, as special values of the Weierstrass sigma function. People want the same for higher-dimensional abelian varieties. The talk finds a route through heights. Mazur and Tate refined the Néron–Tate height so that it takes values in an Arakelov class group, not in ℝ. The refined height is quadratic, so it is killed by m<sup>2</sup> on an m-torsion point. Its formula has an archimedean term built from sigma. Vanishing in the class group then says this term comes from a unit. Arakelov theory extends the formula to abelian schemes with a theta divisor, and the same argument gives units from theta values on a genus 2 Jacobian.

## Main definitions

**Elliptic unit.** Let E = ℂ/[1, τ] have potential good reduction over a number field, and let z be a torsion point of composite order m. The elliptic unit attached to z is e<sup>−z·η(z)/2</sup> σ(z) Δ(τ)<sup>1/12</sup>, where η(z) is the quasi-period of z.

**Arakelov class group.** For a number field K, Ĉl(O<sub>K</sub>) is the sum of a copy of ℤ for each finite place and a copy of ℝ for each archimedean place, modulo the vectors (v(k), −log|k|<sub>v</sub><sup>2</sup>) for k ∈ K<sup>×</sup>.
- It sits in an exact sequence O<sub>K</sub><sup>×</sup> → ℝ<sup>#archimedean places</sup> → Ĉl(O<sub>K</sub>) → Cl(O<sub>K</sub>) → 0, where the first map is −2 times the Dirichlet regulator.

**Refined height MT.** A function on points of E with values in Ĉl(O<sub>K</sub>), due to Mazur and Tate. It satisfies MT(mP) = m<sup>2</sup> MT(P) and MT(0) = 0, and the degree map Ĉl(O<sub>K</sub>) → Ĉl(ℤ) = ℝ sends it to [K:ℚ] times the Néron–Tate height.

**Cubist hermitian line bundle.** A hermitian line bundle on an abelian scheme A → U for which the theorem of the cube holds with an isometry.
- Criterion (Moret-Bailly, Breen): the bundle is trivial along the zero section and its first Chern form is translation invariant.

## Main results

**Theorem (Mazur–Tate formula).** Let E be y<sup>2</sup> = x<sup>3</sup> + Ax + B over O<sub>K</sub>, and let P = (x, y) be a K-point that reduces into the smooth locus. Then MT(P) has finite components built from v(16(4A<sup>3</sup> + 27B<sup>2</sup>)) and −½ v(denominator of x(P)), and archimedean components −log|e<sup>−zη(z)/2</sup> σ(z) Δ(τ<sub>v</sub>)<sup>1/12</sup>|<sup>2</sup> at z = z(P<sub>v</sub>).
- The first term comes from bad reduction, the second is the intersection of P with the zero section.
- The third is an archimedean intersection number.

**Proposition (units from torsion).** Let E have good reduction everywhere over K and let P be a K-rational torsion point of composite order m. Then m<sup>2</sup> times the archimedean vector above lies in the image of the regulator. So |e<sup>−zη(z)/2</sup> σ(z) Δ(τ<sub>v</sub>)<sup>1/12</sup>|, raised to the power −2m<sup>2</sup>, is a unit for each archimedean v.

**Theorem (generalised formula; from Moret-Bailly and Chai–Faltings).** Let A → U be an abelian scheme with a symmetric effective divisor Θ giving a principal polarisation on each fibre. Then 8·MT(P, O(Θ)) = 8·ĉ<sub>1</sub>(s<sub>P</sub>\*O(Θ)) − 4·ĉ<sub>1</sub>(ω), where ω is the Hodge bundle with its L<sup>2</sup> metric.
- Step 1 (Moret-Bailly): for a cubist bundle L, MT(P, L) = ĉ<sub>1</sub>(s<sub>P</sub>\*L).
- Step 2 (the "formule clé"): the pullback of O(Θ)<sup>⊗8</sup> along the zero section is isometric to ω<sup>⊗4</sup>.

**Proposition (genus 2 units).** Let C be a genus 2 curve with potential good reduction outside a set S of primes, and let P ≠ Q be non-trivial 3-torsion points on its Jacobian. Write q(P) = y(P)<sup>t</sup> (Im Ω)<sup>−1</sup> y(P), where y(P) is the imaginary part of z(P). Then the ratio of |θ(z(P))| e<sup>−π q(P)</sup> to the same expression for Q is a unit outside S ∪ {3}.
- Input (Boxall, Grant): C, embedded by a Weierstrass point, meets no non-trivial 3-torsion point. This replaces "m composite".
- Example: for y<sup>2</sup> = x<sup>5</sup> − 1, a single such theta value, squared and combined with an explicit product of powers of Γ(1/5), Γ(2/5) and Γ(3/5), is a unit outside {3, 5}.

## Note, then ignore

- "Partial answer". The slides say the question for abelian varieties gets only a partial answer. The stated results are for genus 2 and 3-torsion. Safe to skip on a first reading.
- Composite order. Both the cyclotomic and the elliptic statements ask for m composite. The slides state this condition and do not say why. Safe to skip.
- Factors 8 and 4. They come from the key formula, which compares the eighth power of O(Θ) with the fourth power of ω. Safe to skip.
- Normalised metric. O(Θ) carries the unique metric with translation-invariant curvature and a fixed L<sup>2</sup> norm of 2<sup>−g/2</sup> for its section. This pins down the constant. Safe to skip.
- No theorem numbers. The slides number nothing, and the names in brackets above are my labels.

## One next step

Open the slides at the one titled "The refined height and elliptic units" (slide 11) and read its single proposition.
