source: https://www.math.ias.edu/~goresky/pdf/zucker.pdf
slogan: Square-integrable forms on a locally symmetric variety compute the intersection cohomology of its Baily–Borel compactification, and a cone computation shows why.
basis: the introduction and the main theorem statements

## Before you start

This survey is 17 pages and names Hermitian symmetric domains, arithmetic groups, parabolic subgroups and intersection cohomology on page one. The likely feeling is shame at meeting four subjects you have not studied, all in one paragraph. You can have that feeling and still read on. Sections 2 to 4 need only differential forms and one integral of an exponential. If you want to see analysis and topology give the same answer for a concrete reason, those sections show it. Enjoy the integral first.

## The story

Take a locally symmetric variety Γ\X. It is non-compact, with a complete metric. Analysts study its L<sup>2</sup> cohomology. It also has a singular projective compactification, and topologists study that through intersection cohomology. Zucker conjectured that the two agree. Near an isolated singular point the space is a cone on a link, with the point infinitely far away. If the metric shrinks the link at one exponential rate, a form of degree k pulled back from the link is square-integrable exactly when k &lt; d. That is the same cut-off as for intersection cohomology of a cone. Real metrics shrink different directions at different rates, and then the count goes wrong. Looijenga's proof repairs this with the topology of the link and a weight argument.

## Main definitions

**L<sup>2</sup> cohomology.** Let X = G/K be a Hermitian symmetric domain and Γ a torsion-free arithmetic subgroup of G. The L<sup>2</sup> cohomology of Γ\X is the cohomology of the complex of smooth forms ω such that both ω and dω are square-integrable for the invariant metric.

**Baily–Borel compactification.** A projective algebraic variety containing Γ\X as a dense open set. Its boundary strata are indexed by rational parabolic subgroups, and each stratum is a smaller locally symmetric space.

**Link and good neighbourhood.** A point on a stratum S of a stratified variety has neighbourhoods of the form D<sup>2s</sup> × cone(L), with s the complex dimension of S and L a compact stratified set, the link.
- For an isolated singular point, L is the intersection with a small sphere.

**Intersection cohomology (middle perversity).** A cohomology theory for singular varieties, characterised by its local behaviour: on a good neighbourhood U it equals IH<sup>k</sup>(L) for k &lt; c and vanishes for k ≥ c, with c the complex codimension of S.

## Main results

**Theorem (Zucker's conjecture; proved by Looijenga and by Saper–Stern; stated in §1).** Integration of L<sup>2</sup> forms induces an isomorphism between the L<sup>2</sup> cohomology of Γ\X and the middle perversity intersection cohomology of its Baily–Borel compactification. The same holds with coefficients in a local system coming from a finite-dimensional representation of G. The two proofs are independent and different.
- Step 1 (Looijenga, as outlined in §4): reduce to a local statement at each singular point, then split IH of the link by the growth rate of forms, using local Hecke correspondences.
- Step 2: resolve the singularities, embed IH in the cohomology of the resolution by the decomposition theorem, and use a bound on weights to kill the unwanted classes.

**Proposition (axiomatic characterisation, Goresky–MacPherson; §3).** Let F be a complex of fine sheaves on a stratified complex variety Y. Suppose F is quasi-isomorphic to the constant sheaf on the non-singular part, and on each good neighbourhood its cohomology is that of the link below the codimension and zero from the codimension up. Then F is quasi-isomorphic to the intersection complex, so its hypercohomology is IH<sup>∗</sup>(Y).
- Use: it suffices to check Zucker's conjecture locally. The sheaf of locally L<sup>2</sup> forms is fine, a fact credited to Zucker.

**Claim (horn computation; §2).** Let U be a cone neighbourhood of an isolated singular point in complex dimension d, with metric (e<sup>−at</sup>)<sup>2</sup>·ds<sup>2</sup><sub>L</sub> + dt<sup>2</sup>. Then the L<sup>2</sup> cohomology of U is H<sup>k</sup>(L) for k &lt; d and zero for k ≥ d. This matches intersection cohomology of the cone.
- Step 1: the pulled-back k-form has squared norm growing like e<sup>2akt</sup> and the volume shrinks like e<sup>−a(2d−1)t</sup>. The integral converges iff k &lt; d.

**Theorem (structure of the link for Sp(2n, ℝ); §5).** The stratum for a parabolic P fixing a rational isotropic subspace F is a locally symmetric space for Sp(F<sup>⊥</sup>/F). The link, intersected with the open stratum, fibres over a locally symmetric space for SL(F), and the fibre is a two-step nilmanifold.

## Note, then ignore

- Warped products. In §4 two factors of the link shrink at different rates and the naive count fails. The link is a non-trivial bundle, and that rescues the result. Safe to skip on a first reading.
- "Locally L<sup>2</sup>". The sheaf on the compactification is not the pushforward of L<sup>2</sup> forms. The distinction is needed for the sheaf to be correct at the cusps. Safe to skip.
- Trivial coefficients. Goresky treats only the trivial local system and says the general case is not much harder. Safe to skip.
- Rank 1. From §6 on he restricts to ℚ-rank 1, where the link lies wholly in the open stratum. Safe to skip.
- A misprint. One sentence in §4 swaps "k &gt; d" and "k &lt; d". The displayed formulas in §2 are right. Safe to skip.

## One next step

Open the PDF at page 2 and read §2 up to the displayed integral on page 3. Check the exponent yourself.
