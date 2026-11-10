source: https://arxiv.org/pdf/2203.03486
slogan: The spectrum of unramified Borel Eisenstein series splits into pieces indexed by nilpotent classes of the dual group, found by topology and not by residues.
basis: the abstract and introduction

## Before you start

Seventy-five pages that mix automorphic forms with equivariant K-theory, cobordism and derived stacks can bring plain overwhelm: two hard subjects at once. There is nothing wrong with feeling that. The first five pages treat only SL(2) over ℚ, where the answer is "the constant function plus a continuous line", and they do it twice, once by contours and once by geometry. If you want to see a residue computation turn into a statement about the cotangent bundle of ℙ<sup>1</sup>, read those pages for enjoyment. The rest can wait.

## The story

Langlands split the study of L<sup>2</sup> of an adelic quotient into cusp forms and the span of Eisenstein series. He gave a formula for inner products of Eisenstein wave packets. It is an integral over a shifted contour of a sum over the Weyl group, with ratios of completed zeta functions. To read off the spectrum one moves the contour and collects residues. In rank 2 this is already hard: his treatment of G<sub>2</sub> takes fifteen pages. Kazhdan and Okounkov read the integrand differently. It is a characteristic class on the stack T = T\*(B∖G/B) for the complex dual group G, computed by equivariant localisation. The Springer map sends T to nilpotent elements modulo G. Pushing the class forward splits it into one term per nilpotent class. Those terms are the spectral pieces.

## Main definitions

**Setting.** F is a global field with adeles 𝔸. <sup>L</sup>G is a split reductive group over F, and G is its complex Langlands dual, with maximal torus A, Borel B and Weyl group W. K is the standard maximal compact subgroup of <sup>L</sup>G(𝔸).

**Pseudo-Eisenstein series and H<sub>Eis</sub>.** For a compactly supported function ϕ on the torus norms, sum ϕ(‖a(gγ)‖) over γ in <sup>L</sup>G(F)/<sup>L</sup>B(F), where a(g) is the torus part in the Iwasawa decomposition. H<sub>Eis</sub> is the closed span of these functions in L<sup>2</sup> of the adelic quotient.
- The algebra acting: the spherical Hecke algebra, realised as W-invariant functions on 𝒜, where 𝒜 is A in positive characteristic and Lie A for number fields.

**The set S<sub>e</sub>.** For a nilpotent e in Lie G, choose an sl<sub>2</sub>-triple with semisimple element h, and let C<sub>ϕ,cmp</sub> be a maximal compact subgroup of the centraliser of the triple. Then S<sub>e</sub> is the image in 𝒜/W of the following set.
- Number fields: h/2 + Lie C<sub>ϕ,cmp</sub>.
- Function fields over 𝔽<sub>q</sub>: q<sup>h/2</sup> · C<sub>ϕ,cmp</sub>.

## Main results

**Theorem (Langlands inner product; Theorem 1, quoted from Langlands).** The inner product of two pseudo-Eisenstein series with Mellin transforms f<sub>1</sub>, f<sub>2</sub> is an integral over Re λ = λ<sub>0</sub>, far in the positive cone, of Σ<sub>w∈W</sub> f<sub>1</sub>(λ) f̄<sub>2</sub>(−w·λ) times the product of ξ<sub>F</sub>(α(λ)) / ξ<sub>F</sub>(1 + α(λ)) over positive roots α with w·α negative. Here ξ<sub>F</sub> is the completed zeta function of F.

**Theorem (spectral decomposition; Theorem 2).** For <sup>L</sup>G split reductive over a global field F, H<sub>Eis</sub> is the direct sum, over conjugacy classes of nilpotent elements e in Lie G, of the spaces L<sup>2</sup>(S<sub>e</sub>, μ<sub>e</sub>). The decomposition is consistent with S<sub>e</sub> lying in the spectrum of the spherical Hecke algebra, and μ<sub>e</sub> has a density with respect to the pushed-forward Haar measure. Theorem 5 gives explicit spectral projectors and the measure.
- Step 1: rewrite the Langlands formula as the integral of a characteristic class of T = T\*(B∖G/B).
- Step 2: stratify T by the Springer map to nilpotent elements modulo G. The abstract describes this as a decomposition in a cobordism group of cohomologically proper derived quotient stacks.

**Example (SL(2) over ℚ; equation (8)).** The norm of a wave packet is (3/π)|f(1)|<sup>2</sup> plus an integral over the imaginary axis of a projected f. The two terms match the two nilpotent classes in sl<sub>2</sub>: the regular one gives the constant function, and e = 0 gives the continuous spectrum [1/4, ∞) of the Laplacian.

## Note, then ignore

- Which group is G. The paper calls the complex dual group G and the automorphic group <sup>L</sup>G, the reverse of common usage. Note it once so the statements parse, then move on.
- The variable q. In the number field case q is read as an infinitesimal generator and formulas are evaluated at a special point. This keeps one notation for both kinds of field. Safe to skip.
- Function field case. For F = k(t) the results follow from earlier work of Prasad on Iwahori-ramified representations. Safe to skip.
- Measure normalisation. Appendix A.4 fixes the Lebesgue measure in the Langlands formula. Safe to skip on a first reading.
- Scope. Only the torus, the trivial character and K-invariant vectors are treated. Generalisations are left to other papers.

## One next step

Read section 1.1.3 on page 4, from equation (6) to equation (9). It is the SL(2) contour shift that the whole paper reinterprets.
