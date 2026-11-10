source: https://www.konradwaldorf.de/docs/pittsburgh.pdf
slogan: The Chern-Simons invariant is the holonomy of a 2-gerbe, so it makes sense for every bundle, with no global section needed.
basis: the full text

## Before you start

These are 35 pages of lecture notes with many commuting diagrams and many results left as problems. The likely feeling is fear of being too slow, since each diagram seems to ask for a check. You may feel that and still read on without checking anything. The notes show how a gerbe is just "a bundle, one level up", and that picture is useful well beyond Chern-Simons theory. Enjoy the pattern first. The exercises are optional.

## The story

The usual Chern-Simons invariant of a G-bundle P with connection A over a closed oriented 3-manifold M integrates the Chern-Simons 3-form along a section of P. Two problems: P may have no section, and the answer might depend on the section. Circle bundles solve the same problem one dimension down: holonomy around a loop needs no global section. So Waldorf climbs the ladder. A gerbe is like a bundle but with circle bundles on double overlaps, and it has holonomy around surfaces. A 2-gerbe has gerbes on double overlaps and holonomy around 3-manifolds. From (P, A) and one extra piece of data, a multiplicative gerbe on G, he builds a Chern-Simons 2-gerbe on M. Its holonomy is the invariant. The same 2-gerbe then defines string structures.

## Main definitions

**Gerbe with connection.** Over a manifold M: an open cover, a 2-form B<sub>α</sub> on each open set, a circle bundle with connection on each double overlap with curvature B<sub>β</sub> − B<sub>α</sub>, and isomorphisms on triple overlaps that are associative on fourfold overlaps. Its curvature is the closed 3-form given locally by dB<sub>α</sub>. Its Dixmier-Douady class lives in H<sup>3</sup>(M, ℤ).
- Trivialisation: a circle bundle on each open set, compatible with the gerbe data on overlaps. It exists exactly when the Dixmier-Douady class vanishes.
- Holonomy: for a map from a closed oriented surface Σ, trivialise the pullback and take exp(2πi ∫<sub>Σ</sub> ω), where ω is the curvature of the trivialisation.

**Transgression.** A gerbe with connection on M gives a circle bundle on the loop space LM. The fibre over a loop τ is the set of isomorphism classes of trivialisations of the pulled-back gerbe on S<sup>1</sup>, which is a torsor for the circle.

**Multiplicative gerbe.** A gerbe 𝒢 on a Lie group G with an isomorphism between pr<sub>1</sub>\*𝒢 ⊗ pr<sub>2</sub>\*𝒢 and m\*𝒢 over G × G, where m is multiplication, plus an associativity condition over G × G × G. For connected G it has a class in H<sup>4</sup>(BG, ℤ) that maps to the Dixmier-Douady class in H<sup>3</sup>(G, ℤ).

**Chern-Simons theory (gerbe definition).** A pair K: an invariant symmetric bilinear form on the Lie algebra of G, and a multiplicative gerbe with connection on G whose curvature is the canonical 3-form H and whose multiplicative structure has curvature the canonical 2-form ρ, both built from that form.

## Main results

The notes number sections, not theorems. Some statements below are set as problems.

**Claim (loop group extensions; Section 1.5).** A multiplicative gerbe with connection on G transgresses to a multiplicative circle bundle on the loop group LG. That is a central extension of LG by the circle.

**Claim (Chern-Simons 2-gerbe; Sections 2.2 and 2.4).** Let K be a Chern-Simons theory for G and (P, A) a principal G-bundle with connection on M. There is a 2-gerbe with connection on M, built over the submersion P → M, with 3-form CS(A) on P. Its class in H<sup>4</sup>(M, ℤ) is the pullback of the class of the multiplicative gerbe along the classifying map M → BG. Over a closed oriented 3-manifold M its holonomy is a number in the circle. When P has a section s, it equals exp(2πi ∫<sub>M</sub> s\*CS(A)) (Problem 2.4.1).
- Step 1: on P ×<sub>M</sub> P the two pullbacks of CS(A) differ by g\*H, up to sign and an exact form, where g : P ×<sub>M</sub> P → G is the difference map.
- Step 2: so pulling the gerbe on G back along g, and correcting by a 2-form, gives the gerbe on double overlaps.

**Claim (how many theories; Sections 2.4 and 2.5).** For a fixed bilinear form, multiplicative gerbes with the required curvatures form either the empty set or a torsor over H<sup>3</sup>(BG, U(1)).
- Case 1: G discrete. Theories correspond to H<sup>4</sup>(BG, ℤ), the Dijkgraaf-Witten classification.
- Case 2: G compact, simple and simply connected. The only parameter is an integer k, the level. For SO(3) the gerbe at level k descends from SU(2) if and only if k is even, and its multiplicative structure descends if and only if 4 divides k.

**Claim (string structures; Section 3.4).** Let M be a spin manifold of dimension n > 4 with spin bundle P and Levi-Civita connection A. The basic Chern-Simons 2-gerbe of (P, A) has class ½p<sub>1</sub>(M). A geometric string structure is defined as a trivialisation of this 2-gerbe. One exists exactly when ½p<sub>1</sub>(M) = 0 (Problem 3.4.3).

## Note, then ignore

- Covers versus submersions. Lecture II replaces the open cover by any surjective submersion Y → M, so that P → M can serve as the "cover". Same idea. Safe to skip at first.
- The associativity diagrams. Each definition ends with a diagram over a higher overlap, for coherence. Take them on trust at first.
- The target is not a manifold. The true target of Chern-Simons theory is a stack of G-bundles with connection. Lecture III fixes a manifold M with a bundle and pretends. Safe to skip.
- Extended bordisms. Section 3.3 assumes a presheaf of extended bordisms that the author says he cannot yet define. It is a sketch. Skip it.

## One next step

Read Section 1.1, the half page that states the usual Chern-Simons invariant and its two problems. Then jump to the last paragraph of Section 2.4 to see them solved.
