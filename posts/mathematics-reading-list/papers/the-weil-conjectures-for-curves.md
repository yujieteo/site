source: https://www.math.columbia.edu/~calebji/RH-curves.pdf
slogan: For a curve over a finite field, Riemann–Roch gives the shape of the zeta function and one intersection inequality on a surface gives its Riemann hypothesis.
basis: the full text

## Before you start

These notes are ten pages and prove a theorem with "Riemann hypothesis" in its name. The likely feeling is suspicion that you have missed something, or that the real proof is hidden elsewhere. That reaction makes sense when a famous result arrives in so few pages, and you can keep it while you read. If you want to see one case of the Weil conjectures proved from start to finish with tools from Hartshorne, this is it. Read for the pleasure of watching Frobenius become a curve on a surface. Checking every computation can wait.

## The story

Weil conjectured that the zeta function of a smooth projective variety over 𝔽<sub>q</sub> is rational, satisfies a functional equation, and has zeros of a fixed absolute value. For a curve the first two parts are bookkeeping. The zeta function is the generating function for effective divisors by degree, and Riemann–Roch counts those exactly once the degree passes 2g − 2. The hard part is the size of the zeros. It reduces to a point count: the number N of 𝔽<sub>q</sub>-points differs from q + 1 by at most 2g√q. The idea that unlocks it, due to Weil and simplified by Grothendieck after Mattuck and Tate, is to move to the surface C × C. There the 𝔽<sub>q</sub>-points are the intersections of the diagonal with the graph of Frobenius, and the Hodge index theorem bounds such intersection numbers.

## Main definitions

**Zeta function.** For a smooth projective variety X over 𝔽<sub>q</sub>, Z(X, t) = exp(Σ<sub>r≥1</sub> N<sub>r</sub> t<sup>r</sup>/r), where N<sub>r</sub> is the number of points of X over 𝔽<sub>q<sup>r</sup></sub>.
- For a curve: Z(X, t) = Σ A<sub>r</sub> t<sup>r</sup>, where A<sub>r</sub> is the number of effective divisors of degree r.

**Intersection pairing.** On a smooth projective surface X over an algebraically closed field there is a unique symmetric bilinear pairing Div X × Div X → ℤ that depends only on linear equivalence classes and gives C · D = d when nonsingular curves C and D meet transversely in d points.
- Self-intersection: C<sup>2</sup> is the degree of the normal sheaf of C (Proposition 3.3). For the diagonal Δ in C × C this gives Δ<sup>2</sup> = 2 − 2g.

**Graph of Frobenius.** Let C be a curve over 𝔽<sub>q</sub>, base-changed to the algebraic closure. Γ ⊂ C × C is the graph of the q-power Frobenius. Its intersection points with Δ are the 𝔽<sub>q</sub>-points of C.

## Main results

**Theorem (rationality and functional equation; Sections 2.1 and 2.2).** Let X be a smooth projective curve of genus g over 𝔽<sub>q</sub>. Then Z(X, t) = Π<sub>i=1..2g</sub>(1 − α<sub>i</sub>t) / ((1 − t)(1 − qt)), where the numerator has integer coefficients and the α<sub>i</sub> have product q<sup>g</sup>. Also Z(X, 1/(qt)) = q<sup>1−g</sup> t<sup>2−2g</sup> Z(X, t).
- Step 1: a divisor class D has (q<sup>l(D)</sup> − 1)/(q − 1) effective members, and Riemann–Roch gives l(D) = deg D − g + 1 for deg D > 2g − 2. The tail of the series is then geometric.
- Step 2: for the functional equation, pair D with K − D in degrees 0 to 2g − 2.

**Theorem (Hodge index theorem; Theorem 3.9).** Let H be an ample divisor on a surface X and D a divisor, not numerically trivial, with D · H = 0. Then D<sup>2</sup> &lt; 0.
- Step 1: if D<sup>2</sup> > 0, Riemann–Roch for surfaces makes a multiple of D effective, which contradicts D · H = 0.
- Step 2: the case D<sup>2</sup> = 0 reduces to the first by perturbing D.

**Theorem (inequality on a product; Theorem 4.1).** Let X = C × C′, l = C × pt and m = pt × C′. If a divisor D has D · l = a and D · m = b, then D<sup>2</sup> ≤ 2ab.
- Step 1: the Hodge index theorem gives (D<sup>2</sup>)(H<sup>2</sup>) ≤ (D · H)<sup>2</sup> for ample H.
- Step 2: apply this with H = l + m, which is ample by Nakai–Moishezon, after removing the l − m component of D.

**Theorem (Hasse–Weil bound and Riemann hypothesis; Section 4).** For a smooth projective curve C of genus g over 𝔽<sub>q</sub>, |N − q − 1| ≤ 2g√q. Hence every α<sub>i</sub> has absolute value √q.
- Step 1: use Δ<sup>2</sup> = 2 − 2g, Δ · Γ = N and Γ<sup>2</sup> = q(2 − 2g). Apply Theorem 4.1 to D = rΓ + sΔ to get |N − q − 1| ≤ g|rq/s + s/r|, and let s/r approach √q.
- Step 2: the bound over every 𝔽<sub>q<sup>r</sup></sub> says |Σ α<sub>i</sub><sup>r</sup>| ≤ 2g q<sup>r/2</sup>. A pole argument on Σ α<sub>i</sub>t/(1 − α<sub>i</sub>t) gives |α<sub>i</sub>| ≤ √q, and the product q<sup>g</sup> forces equality.

## Note, then ignore

- Genus zero. A footnote says the divisor count assumes g > 0. The genus 0 case is easy and changes nothing. Safe to skip.
- "Unreduced". Where the notes check that Δ · Γ = N, the word should be "reduced": each fixed point of Frobenius counts once because x<sup>q</sup> − x has no repeated roots. Safe to skip.
- Nonzero D in Hodge index. The statement says "nonzero divisor". The proof uses that some E has D · E ≠ 0, so read it as "not numerically trivial". Safe to skip on a first reading.
- No Frobenius on cohomology. This proof never uses the action of Frobenius on étale cohomology, which is how the higher-dimensional case goes. The notes say so in Section 1.2. Safe to skip here.
- Last computation left out. The end of the functional equation proof is left to the reader. Nothing later depends on the details. Safe to skip.

## One next step

Open the notes at Section 4.1 and read the first paragraph plus the three intersection numbers Δ<sup>2</sup>, Δ · Γ and Γ<sup>2</sup>.
