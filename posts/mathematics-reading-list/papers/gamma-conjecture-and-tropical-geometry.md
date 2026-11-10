source: https://www.math.kyoto-u.ac.jp/~iritani/iritani_algsymp2021.pdf
slogan: Zeta values in mirror periods are the small areas lost when you replace a curved amoeba by its straight tropical skeleton.
basis: the full text

## Before you start

The title stacks three specialist words, and the first page mentions quantum cohomology, Hodge structures and K-theory. The likely feeling is shame at missing background. You are allowed that feeling, and you are not the only reader who has it. The article drops most of that machinery by page 3 and turns to explicit integrals. If you want to see ζ(2) fall out of a one-variable integral, this is the place. Read for that picture. The rest is optional.

## The story

Mirror symmetry pairs a symplectic manifold Y with a family of complex manifolds Z<sub>t</sub>. Periods of Z<sub>t</sub>, which are integrals of the holomorphic volume form over cycles, should be computed by characteristic classes of Y. The puzzle is the Γ-class: it brings in ζ(2), ζ(3) and Euler's constant, numbers with no obvious geometric source. Iritani explains an approach from joint work with Abouzaid, Ganatra and Sheridan. As t → 0, the map Log<sub>t</sub> flattens Z<sub>t</sub> onto a piecewise linear "tropical" shape. To first order, the period of the positive real cycle is (−log t)<sup>n</sup> times an affine volume. Near the singular points of the torus fibration the flattening is not exact. The area between the true curve and its tropical corner, rescaled, is exactly ζ(2). The zeta values are the errors of tropicalisation.

## Main definitions

**Γ-class (Section 2).** For an almost complex manifold X with Chern roots δ<sub>1</sub>, ..., δ<sub>n</sub>, the class Γ<sub>X</sub> is the product of Γ(1 + δ<sub>i</sub>) in H<sup>\*</sup>(X, ℝ). Expanding, Γ<sub>X</sub> = exp(−γ c<sub>1</sub>(X) + Σ<sub>k≥2</sub> (−1)<sup>k</sup> (k−1)! ζ(k) ch<sub>k</sub>(TX)), with γ Euler's constant.

**Period and exponential period (Section 1).** For a Calabi–Yau family (Z<sub>t</sub>, Ω<sub>t</sub>), a period is ∫ Ω<sub>t</sub> over an n-cycle C<sub>t</sub> in Z<sub>t</sub>.
- Fano case: the mirror is a Laurent polynomial W on (ℂ<sup>×</sup>)<sup>n</sup>, and the exponential period is ∫ e<sup>−tW</sup> dx<sub>1</sub>...dx<sub>n</sub>/(x<sub>1</sub>...x<sub>n</sub>) over a possibly non-compact cycle.

**Tropicalisation (Example 4.1).** The map Log<sub>t</sub> sends (X, Y) to (log<sub>t</sub>|X|, log<sub>t</sub>|Y|). The image of a variety is its amoeba. As t → 0 it shrinks to the tropical variety, the corner locus of a piecewise linear function such as min(x, y, 0).
- Log<sub>t</sub> acts as an approximate torus fibration over the tropical variety.

## Main results

**Conjecture (mirror symmetric Γ-conjecture; equations (1) and (2)).** For a Calabi–Yau mirror pair and a suitable family of cycles C<sub>t</sub>, there is a K-theory class V on Y with ∫ Ω<sub>t</sub> over C<sub>t</sub> equal to ∫<sub>Y</sub> t<sup>−ω</sup> Γ<sub>Y</sub> (2πi)<sup>deg/2</sup> ch(V) + O(t<sup>ε</sup>) as t → +0, for some ε > 0. The Fano version replaces ω by c<sub>1</sub>(F) and the period by the exponential period.
- Case V = structure sheaf: the cycle should be the positive real locus, and the right side is ∫ t<sup>−ω</sup> Γ<sub>Y</sub>.
- Status, as reported in the article: verified for weak Fano toric orbifolds and certain complete intersections in them, and proved again for Batyrev mirror pairs by the tropical method of the joint paper.

**Claim (local model; Example 4.3).** On Z = {X<sub>1</sub>X<sub>2</sub> = 1 + Y}, integrate Ω over a bounded region R of the positive real cycle. The result is (−log t)<sup>2</sup> times the affine area of the matching polytope, minus ζ(2), up to an exponentially small term. So one focus-focus singularity contributes −ζ(2).
- Step 1: on the positive cycle, x<sub>1</sub> + x<sub>2</sub> = log<sub>t</sub>(1 + t<sup>y</sup>), not min(0, y).
- Step 2: the integral of the difference over y, times (−log t)<sup>2</sup>, equals ζ(2).

**Claim (quartic K3; Example 4.4, equation (5)).** For the mirror family of a quartic K3 surface, the period of the positive real cycle is expected to be (−log t)<sup>2</sup> × (affine area of the boundary of the moment simplex of ℙ<sup>3</sup>) − 24 ζ(2) + O(t<sup>ε</sup>). The article says "we expect" here and argues by reduction to the local model.
- The affine structure on the boundary has 4 singular points on each of 6 edges, so 24 in total.
- This matches the Γ-class side: the ζ(2) term of ∫ Γ<sub>Y</sub> is −ζ(2) ∫ c<sub>2</sub>(Y), and c<sub>2</sub> of a K3 integrates to 24.

## Note, then ignore

- Two Γ-conjectures. The Galkin–Golyshev–Iritani conjecture for Fano manifolds concerns quantum cohomology alone and is a different statement (Remark 3.4). Safe to skip on a first reading.
- Γ-integral structure. The abstract mentions it, but the article says it will not define it or quantum cohomology. Skip it without loss.
- SYZ fibrations. The tropical computation needs only an approximate torus fibration, not special Lagrangian tori or Ricci-flat metrics (footnote 1). Skip the SYZ discussion at first.
- Position of singularities. Where the 24 points sit on the edges is a choice. The total error does not depend on it. Skip it at first.
- Higher-order terms. Curve counts live in terms that are exponentially small next to the polynomial in log t (Remark 3.1(C)). Skip them at first.

## One next step

Open the PDF at page 11 and read equation (4) with Figure 7: one integral, one shaded region, and ζ(2).
