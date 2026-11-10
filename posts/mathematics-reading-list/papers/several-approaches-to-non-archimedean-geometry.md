source: https://math.stanford.edu/~conrad/papers/aws.pdf
slogan: Tate, Raynaud and Berkovich each repair the totally disconnected p-adic disc in a different way, and all three repairs give the same coherent sheaves.
basis: the introduction and the main theorem statements

## Before you start

Rigid geometry has a reputation for fussy foundations: admissible opens, G-topologies, three competing theories. At 55 pages of lectures with exercises, the likely feeling is tedium, plus a doubt about which theory is the "right" one to learn. You can hold that doubt and read anyway. Conrad leaves out most proofs in favour of examples. You may want p-adic spaces you can picture. Read for the examples and the pleasure of the pictures, and let coverage come second.

## The story

Over ℂ, convergent power series give analytic spaces with good sheaf theory. Over a non-archimedean field k, the same recipe gives totally disconnected spaces. The closed unit disc splits into the open disc |t| &lt; 1 and the circle |t| = 1, both open, so "analytic continuation" means nothing. Grothendieck doubted in 1959 that a global theory could exist. Tate's idea was to keep the points and restrict the coverings. Only certain "admissible" coverings count, and the disc-plus-circle splitting is not one of them. With that rule the disc is connected and coherent sheaves behave. Raynaud later recast the same spaces as generic fibres of formal schemes. Berkovich instead added points, and got honest compact Hausdorff spaces that are locally path-connected.

## Main definitions

**Tate algebra and affinoid algebra.** The Tate algebra T<sub>n</sub> is the ring of power series in n variables over k whose coefficients tend to 0. These are the series that converge on the closed unit ball. A k-affinoid algebra is a quotient T<sub>n</sub>/I, and its space M(A) is the set of maximal ideals.

**Admissible open and admissible cover.** A subset U of M(A) is admissible open if it has a covering by affinoid subdomains such that, for every map of affinoids landing in U, finitely many members cover the image. Coverings are admissible under the matching finiteness rule.
- Case: {|t| &lt; 1} is admissible open in the unit disc, by the Maximum Modulus Principle.
- Case: the pair {|t| &lt; 1}, {|t| = 1} is not an admissible cover of the disc.

**Formal model.** An admissible formal scheme 𝔛 over the valuation ring R of k, with Raynaud's generic fibre functor sending 𝔛 to a rigid space 𝔛<sub>k</sub>. A formal model of X is such an 𝔛 with generic fibre X.

**Berkovich spectrum.** For a commutative Banach algebra A, the set of bounded multiplicative seminorms on A, with the weakest topology that makes each evaluation |·| ↦ |f| continuous.
- Case: the Gauss norm on k⟨T⟩ is a point of the Berkovich disc that is no classical point.

## Main results

**Theorem (Tate acyclicity; Theorem 2.3.3).** Let A be a k-affinoid algebra. Assigning to each affinoid subdomain U its coordinate ring A<sub>U</sub> extends uniquely to a sheaf for the Tate topology on M(A).
- Step 1: Čech arguments reduce to a Laurent covering by {|a| ≤ 1} and {|a| ≥ 1}.
- Step 2: for that covering one computes directly with convergent Laurent series.

**Theorem (coherence of direct images, Kiehl; Theorem 3.2.7).** If f: X → Y is a proper map of rigid spaces and F is a coherent sheaf on X, then every higher direct image of F is coherent on Y. So a proper rigid space over k has finite-dimensional coherent cohomology.
- Use: the GAGA theorems follow for proper k-schemes. Analytification is fully faithful on proper schemes, and is an equivalence on coherent sheaves that preserves cohomology (Example 3.2.9).

**Theorem (formal models, Raynaud and Bosch-Lütkebohmert; end of Section 3.3).** Stated without proof. The category of quasi-compact, quasi-separated rigid spaces over k is equivalent to the category of quasi-compact admissible formal R-schemes, localised at admissible formal blow-ups.
- Step 1: every such rigid space has a formal model.
- Step 2: two models are dominated by a common admissible blow-up.

**Theorem (Berkovich spectrum; Theorem 4.3.4).** For a commutative Banach algebra A, the spectrum M(A) is empty only when A = 0, and it is compact and Hausdorff. A bounded map of Banach algebras induces a continuous map of spectra.
- Use: for quasi-compact separated rigid spaces over a non-trivially valued k, a map is proper in the rigid sense exactly when its Berkovich version is proper (Theorem 5.3.2).

## Note, then ignore

- Two meanings of "affinoid". Berkovich allows radii outside the value group, so his k-affinoid algebras form a wider class. Tate's are then called strict. Safe to skip on a first reading.
- Canonical topology. M(A) also has a totally disconnected metric topology. It is used to state that affinoid subdomains are open, and for little else. Safe to skip.
- Properness. The rigid definition uses pairs of nested affinoid coverings and looks ad hoc. It exists to make Kiehl's theorem work. Skip the details.
- "Good" spaces. Some Berkovich spaces have points with no affinoid neighbourhood (Example 5.2.4). This complicates the global definitions only, so skip it.
- Adic spaces. Conrad mentions Huber's theory briefly, as the inverse limit of all formal models, and says little more. Safe to skip here.

## One next step

Open the PDF at Example 2.2.8 and read its two paragraphs on why the open disc and the unit circle do not admissibly cover the closed disc.
