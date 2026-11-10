source: https://arxiv.org/pdf/2604.25288
slogan: The sign in quadratic reciprocity is a phase from three lines in a plane, and the phases at all places multiply to 1.
basis: the introduction and the main theorem statements

## Before you start

The words "metaplectic", "adelic" and "Bruhat word" appear in the abstract. That can raise a quiet shame at not knowing the Weil representation. You may feel that and still read on. The paper is eleven pages, and its second section redoes everything on the real line with Gauss sums and Fourier transforms. If you ever wanted the reciprocity sign to come from geometry and not from a trick, this is one answer. Read the warm-up for fun first.

## The story

Quadratic reciprocity relates whether p is a square mod q to whether q is a square mod p, up to the sign (−1)<sup>(p−1)(q−1)/4</sup>. Standard proofs get the sign from a clever count or a Gauss sum, and it looks like an accident. Holland gives the sign a source. Take three lines through the origin in a symplectic plane over ℚ<sub>v</sub>. Moving the Schrödinger model of the Heisenberg representation around the triple returns a scalar, the Kashiwara–Maslov phase. For the lines of slope ∞, a and 0 that scalar is the Weil index γ<sub>v</sub>(a). These phases fail to be multiplicative in a, and the failure is the Hilbert symbol (a, b)<sub>v</sub>. Over the adeles, with rational a and b, the failure cancels. That is Hilbert reciprocity. The classical sign is the term at the place 2.

## Main definitions

**Kashiwara form.** Let V = K<sup>2</sup> with ω((x, y), (x′, y′)) = xy′ − yx′, and L<sub>1</sub>, L<sub>2</sub>, L<sub>3</sub> three lines in V. On the space of triples (x<sub>1</sub>, x<sub>2</sub>, x<sub>3</sub>) with x<sub>i</sub> ∈ L<sub>i</sub> and x<sub>1</sub> + x<sub>2</sub> + x<sub>3</sub> = 0, the Kashiwara form is q(x<sub>1</sub>, x<sub>2</sub>, x<sub>3</sub>) = ω(x<sub>1</sub>, x<sub>2</sub>).
- Example: for L<sub>∞</sub> = K(0, 1), L<sub>a</sub> = K(1, a), L<sub>0</sub>, in that order, the form is one-dimensional and equal to ⟨a⟩ (Proposition 3.3).

**Weil index.** For a ∈ ℚ<sub>v</sub><sup>×</sup>, γ<sub>v</sub>(a) is the unique scalar in the formula for the Fourier transform of the quadratic exponential ψ<sub>v</sub>(ax<sup>2</sup>). It has absolute value 1 and depends only on a modulo squares.

**Local defect.** μ<sub>v</sub>(a, b) = γ<sub>v</sub>(a) γ<sub>v</sub>(b) / (γ<sub>v</sub>(1) γ<sub>v</sub>(ab)). It measures how far the lifted diagonal torus operators are from a true representation.

## Main results

**Theorem (Maslov cocycle is the Weil index; Theorem 4.1, Corollary 4.3).** Let F be a local field of characteristic not 2 and L<sub>1</sub>, L<sub>2</sub>, L<sub>3</sub> pairwise transverse lines in a symplectic plane over F. The composite of the three normalised intertwiners between Schrödinger models is the scalar γ<sub>ψ</sub>(q), the Weil index of the Kashiwara form q. For the ordered triple (L<sub>∞</sub>, L<sub>a</sub>, L<sub>0</sub>) the scalar is γ<sub>ψ</sub>(a). The paper cites Rao and Lion–Vergne for the proof.

**Theorem (local defect is the Hilbert symbol; Theorem 5.2).** For every place v of ℚ and all a, b ∈ ℚ<sub>v</sub><sup>×</sup>, γ<sub>v</sub>(a) γ<sub>v</sub>(b) = γ<sub>v</sub>(1) γ<sub>v</sub>(ab) (a, b)<sub>v</sub>. The proof, in Appendix A, reduces to the Hasse invariant formula for Weil indices of diagonal forms.

**Theorem (product formula for defects; Corollary 6.5).** For all a, b ∈ ℚ<sup>×</sup>, the product of μ<sub>v</sub>(a, b) over all places v equals 1.
- Step 1: the matrix identity m(a) = n(a) n̄(−a<sup>−1</sup>) n(a) w<sup>−1</sup> in SL<sub>2</sub>(ℚ) gives an adelic operator B(a). It equals the plain dilation M(a), because both fix the theta functional Θ, by Poisson summation.
- Step 2: B(a) is the restricted tensor product of local operators B<sub>v</sub>(a), each carrying a Weil index factor. Compare the multiplication laws.

**Theorem (Hilbert reciprocity; Theorem 7.1).** For all a, b ∈ ℚ<sup>×</sup>, the product of (a, b)<sub>v</sub> over all places v, including the real place, equals 1.
- Step 1: multiply Theorem 5.2 over all v and apply Corollary 6.5.
- Step 2: for distinct odd primes p, q only the places p, q, 2 can contribute. The places p and q give the two Legendre symbols, and the place 2 gives the sign. This is quadratic reciprocity.

## Note, then ignore

- Order of the triple. (L<sub>∞</sub>, L<sub>a</sub>, L<sub>0</sub>) gives ⟨a⟩, but (L<sub>∞</sub>, L<sub>0</sub>, L<sub>a</sub>) gives ⟨−a⟩. The paper fixes one order. Safe to skip on a first reading.
- The factor 2. In the warm-up the phase is e<sup>πitx²</sup>, so the line has slope 2a/c, not a/c. Locally the Bruhat word carries γ<sub>v</sub>(2a). This is a convention. Safe to skip.
- Normalisations. The local characters and self-dual measures are fixed in Section 5.1 so that the global character is trivial on ℚ. Safe to skip.
- Only ℚ. The paper works over ℚ and its completions, not over a general number field. Safe to skip.
- Version. This is the first arXiv version, from April 2026. Details may change. Safe to skip.

## One next step

Open the paper at Section 2 and read from "Combining the two laws" to the end of the section. It is one page and derives the reciprocity sign from three metaplectic phases.
