source: https://arxiv.org/pdf/2012.07673
slogan: Counting points on the curves y³ = f(x) over finite fields predicts Hecke traces of Picard modular forms, by a conjectural Eichler-Shimura formula.
basis: the introduction and the main theorem statements

## Before you start

The main statement of this 67-page paper is a conjecture, and its correction term takes seven definitions to write down. The likely feeling is doubt: why work through a formula that is not proved, with so many pieces? That doubt is sensible, and you can keep it. The paper is also a worked example of how to find modular forms by experiment, with nothing harder than counting points on curves. If that way of doing mathematics appeals to you, read for the method and enjoy it. The full correction term can stay unread.

## The story

For SL(2, ℤ) there is a formula, essentially due to Deligne: the compactly supported cohomology of the local system V<sub>k</sub> on the moduli of elliptic curves is −S[k + 2] − 1, where S[k + 2] is the motive of cusp forms of weight k + 2. So counting elliptic curves over finite fields gives Hecke traces. The authors want the same for the unitary group in three variables over ℚ(√−3). Its modular surface is a quotient of the complex 2-ball that Picard studied in the 1880s. Explicit Picard modular forms are rare. The surface parametrises genus 3 curves y<sup>3</sup> = f(x), which are cyclic triple covers of the projective line. So the authors count these curves over 𝔽<sub>q</sub>, record Frobenius, and read off the cohomology of local systems. The price is a long correction term for forms lifted from smaller groups, and this they can only conjecture.

## Main definitions

**Picard modular surface.** Let F = ℚ(√−3) = ℚ(ρ) with ρ a cube root of unity, and h a hermitian form of signature (2, 1) on F<sup>3</sup>. Let Γ be the unitary group of h over ℤ[ρ], Γ<sub>1</sub> its elements of determinant 1, and Γ<sub>1</sub>[√−3] those congruent to 1 modulo √−3. These act on the 2-ball B of negative lines. The surface is X = Γ<sub>1</sub>[√−3]\B.
- Symmetry: Γ<sub>1</sub>/Γ<sub>1</sub>[√−3] ≅ S<sub>4</sub>, which permutes the four cusps.

**Picard modular form of weight (j, k).** A holomorphic map f : B → Sym<sup>j</sup>(ℂ<sup>2</sup>) that transforms under the group by two automorphy factors, a scalar one to the power k and a 2 × 2 one through Sym<sup>j</sup>. The cusp forms are S<sub>j,k</sub>.

**The local systems W<sub>λ</sub>.** The universal family has an ℓ-adic local system V = R<sup>1</sup>π<sub>\*</sub>ℚ<sub>ℓ</sub> of rank 6. The order 3 automorphism splits it over F into rank 3 pieces W and W′, the ρ and ρ<sup>2</sup> eigenspaces. W<sub>λ</sub> comes from W by the representation of GL(3) × 𝔾<sub>m</sub> with highest weight λ = (n<sub>1</sub>, n<sub>2</sub>, n<sub>3</sub>).

**Euler characteristic e<sub>c</sub>(X, W<sub>λ</sub>).** The alternating sum of the compactly supported cohomology groups of W<sub>λ</sub>, as a virtual representation of Gal(F̄/F) with an action of S<sub>4</sub>.

## Main results

**Conjecture (Eichler-Shimura type formula; Main Conjecture 12.9).** For λ ≠ (0, 0, 0), e<sub>c</sub>(X, W<sub>λ</sub>) = S̆[n(λ)] + e<sub>extr</sub>(λ). Here S̆[n(λ)] is the part from genuine Picard modular forms of weight n(λ), those with 3-dimensional Galois representations. The term e<sub>extr</sub>(λ) is an explicit sum of Eisenstein and endoscopic pieces. In trace form: the trace of the Hecke operator T(ν) on genuine cusp forms equals the trace of Frobenius at ν on e<sub>c</sub> − e<sub>extr</sub>, for each S<sub>4</sub>-isotypic part. The source adds a parity condition on the weight that I did not check.
- Source of e<sub>extr</sub>: the Eisenstein part rests on Harder's work. The endoscopic part was fitted to the data.
- Evidence: counts for q ≡ 1 mod 3 with q ≤ 67 and Deligne weight at most 40, zero traces wherever the space of cusp forms is zero, agreement with forms built by Cléry and van der Geer, and congruences of Harder type.

**Theorem (dimension formula; Theorem 4.1).** Let Γ′ be a finite index subgroup of Γ<sub>1</sub>[√−3] acting freely on B, and D the divisor of disjoint elliptic curves that compactifies Γ′\B. For j ≥ 0 and k &gt; 0, dim S<sub>j,3+k</sub>(Γ′) = (1/6)(j+1)(k+1)(j+k+2) vol(Γ′\B) + (1/12)(j+1) D<sup>2</sup>.
- Method: Riemann-Roch. The holomorphic Lefschetz formula then gives the dimensions for Γ[√−3] with their S<sub>4</sub>-action (Theorem 4.7).

**Theorem (determinant of Frobenius; Theorem 6.5).** Let C be the curve y<sup>3</sup> = f(x) over 𝔽<sub>q</sub> with q ≡ 1 mod 3, f = f<sub>1</sub>f<sub>2</sub><sup>2</sup> and 3 dividing deg f. The product of the Frobenius eigenvalues on the ρ-eigenspace of H<sup>1</sup>, divided by an explicit product of generators of the primes above p, equals a sign times χ(D(f<sub>1</sub>))χ(D(f<sub>2</sub>)). Here D is the discriminant and χ is the cubic character. The sign is (−1) to the power g plus the numbers of irreducible factors of f<sub>1</sub> and f<sub>2</sub>. The authors say this generalises a theorem of Gauss for genus 1.

## Note, then ignore

- Two groups. The paper moves between Γ[√−3] and Γ<sub>1</sub>[√−3]. Their quotient is μ<sub>3</sub>, and it splits forms by a power of the determinant character. Safe to skip on a first reading.
- Primes 2 mod 3. Such primes stay inert in ℤ[ρ], so the counts use even powers of p and a separate convention for generators. Safe to skip.
- Stacky points. The group has three orbits of isolated fixed points on B, which give quotient singularities. They matter only for exact dimension counts. Safe to skip.
- The word "motive". The pieces S̆ and L<sub>i,j</sub> are treated as motives, but only their Galois and Hodge realisations are used. Safe to skip.
- Vanishing. S<sub>j,k</sub> on Γ<sub>1</sub>[√−3] is zero unless j ≡ k mod 3 (Remark 2.1). Safe to skip.

## One next step

Open the PDF at page 2 and read the two displayed formulas: the one for e<sub>c</sub>(A<sub>1</sub>, V<sub>k</sub>) and its conjectural analogue just below it.
