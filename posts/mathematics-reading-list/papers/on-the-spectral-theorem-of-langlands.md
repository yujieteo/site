source: https://arxiv.org/pdf/2006.12893
slogan: Wave packets of Eisenstein series built from discrete series fill the whole automorphic L² space, completing a new proof of Langlands' spectral theorem.
basis: the introduction and the main theorem statements

## Before you start

The notation section alone runs three pages: parabolics, Weyl chambers, Siegel sets, heights. The paper also leans on Lapid, Bernstein and Lapid, Franke, Arthur, and Mœglin and Waldspurger. The likely feeling is dread at the bookkeeping, and a sense of arriving late to a long conversation. You may feel that and still read. If you want to know what "the spectral decomposition of automorphic forms" says, the statement fits in a few lines. Savour the statement. The estimates are for another day.

## The story

Langlands described L<sup>2</sup>(G(F)\\G(𝔸)) for a reductive group G over a number field F: it is built from Eisenstein series, which are induced from discrete spectrum on Levi subgroups and integrated over unitary parameters. His proof gets the spectrum as residues of Eisenstein series from cuspidal data. Bernstein and Lapid gave a new proof of the meromorphic continuation of Eisenstein series built from discrete data. From this Lapid built an isometry E into L<sup>2</sup>, whose image is spanned by wave packets. What remained was to show that E is onto. Delorme does this by contradiction. If the image were not everything, a tempered automorphic form would be orthogonal to all wave packets. He computes its inner product with a wave packet by truncation and finds the form must vanish.

## Main definitions

**Wave packet.** Let P be a standard parabolic subgroup with Levi M, and let φ be a compactly supported smooth function on the unitary parameters i𝔞<sub>P</sub><sup>\*</sup>, with values in a finite-dimensional space of square-integrable automorphic forms for P. The wave packet Θ<sub>P,φ</sub>(g) is the integral over λ of the Eisenstein series E<sub>P</sub>(g, φ(λ), λ).

**The space 𝓛 and the map E.** 𝓛 is the Hilbert space of families (F<sub>P</sub>), one for each standard P. Each F<sub>P</sub> is a square-integrable function on i𝔞<sub>P</sub><sup>\*</sup> with values in the representation induced from the discrete spectrum of M, and the family satisfies F<sub>Q</sub>(wλ) = M(w, λ)F<sub>P</sub>(λ) for the intertwining operators M(w, λ).
- E sends a family of compactly supported smooth F<sub>P</sub> to the weighted sum of the wave packets Θ<sub>P,F<sub>P</sub></sub>.

**Tempered automorphic form (Definition 3.2).** An automorphic form is tempered if it, and its derivatives, are bounded by the function Ξ times a power of a logarithmic height. On a Siegel set this means growth at most e<sup>ρ(H)</sup> times a polynomial. The notion is due to Franke.
- Proposition 3.5: a form is tempered exactly when the exponents of all its constant terms are subunitary, that is, have non-positive real part on the positive chamber.

**Weak constant term (Definition 3.6).** For a tempered form and a parabolic P, the part of the constant term along P whose exponents are unitary.

## Main results

**Theorem (Lapid's isometry; Theorem 6.1, quoted from Lapid).** The map E extends to an isometry from 𝓛 into L<sup>2</sup>(G(F)\\G(𝔸)). Delorme recalls this and does not reprove it.

**Theorem (surjectivity; Theorem 7.8).** The image of E is all of L<sup>2</sup>(G(F)\\G(𝔸)). The paper calls this its main result. With Lapid's theorem it gives a proof of the spectral theorem of Langlands.
- Step 1: Show that some wave packets lie in the Harish-Chandra Schwartz space (Proposition 5.4), and that a non-surjective E would leave a non-zero tempered automorphic form orthogonal to them.
- Step 2: Compute the inner product of that form with a wave packet as a limit of truncated inner products, and deduce the form is zero.

**Theorem (truncated inner product; Theorem 7.1).** Let Φ be a tempered automorphic form and E(λ) an Eisenstein series from a square-integrable form on P. The integral of E(λ) against the conjugate of Φ over a truncated compact region, with truncation parameter T, differs from an explicit sum over parabolics of terms in the weak constant terms by an error that decays exponentially in ‖T‖. The bound is uniform for λ in a bounded set of unitary parameters and T away from the walls. The explicit term extends analytically in λ.
- Step 1: Induct on the dimension of 𝔞<sub>0</sub><sup>G</sup>, using the theorem for proper Levi subgroups.

## Note, then ignore

- "True truncation". Delorme cuts off on compact sets, as Arthur did for the local trace formula, not with Arthur's alternating-sum operator. This is a choice of tool. Safe to skip on a first reading.
- Two notions of tempered. Franke's notion is shown to be weaker than Bernstein's. The comparison is not needed for the main line. Skip it.
- The measure factor. The sum defining E weights each P by the inverse of the number of parabolics with Levi M<sub>P</sub>. It only makes E an isometry. Skip it.
- K-finiteness. Automorphic forms here are K-finite with uniform moderate growth, following Mœglin and Waldspurger. Skip it.
- Residues. Langlands' own proof reaches the discrete spectrum through residues of cuspidal Eisenstein series. This proof takes the discrete spectrum of Levi subgroups as given and avoids that.

## One next step

Open the paper and read Section 1, one page, then find Theorem 6.1 and Theorem 7.8 and read the two statements side by side.
