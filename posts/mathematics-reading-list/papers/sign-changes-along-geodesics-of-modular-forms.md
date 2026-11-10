source: https://arxiv.org/pdf/2409.17248
slogan: Eisenstein series change sign about t times along a geodesic segment, and a fourth moment of ζ replaces the Lindelöf hypothesis in the proof.
basis: the introduction and the main theorem statements

## Before you start

This is a short analytic paper, and the likely feeling is impatience, or a small worry that the estimates will blur into a wall of ≪ signs. That is a fair reaction to this kind of mathematics, and you can let it be there. If you like the idea of counting how often a wave crosses zero along a line, the paper gives a clean case with a picture on page 2. Enjoy the picture and the one lemma first. Whether you read the estimates is a later question.

## The story

A Laplace eigenfunction on the modular surface cuts the surface into nodal domains, the regions where it keeps one sign. A heuristic of Bogomolny and Schmit predicts that the number of domains grows like the eigenvalue, but even "tends to infinity" is hard to prove. Ghosh, Reznikov and Sarnak found a way in. The surface has a reflection x + iy ↦ −x + iy, and each sign change of an even form along the fixed line produces nodal domains. So count sign changes on a segment β of the imaginary axis. Ki proved the sharp lower bound t<sup>1−ε</sup>, assuming sup norm bounds and the Lindelöf hypothesis. Kelmer, Kontorovich and Lutsko notice that a mean square bound for the L-function is enough. For Eisenstein series that bound is the fourth moment of ζ, which Heath-Brown proved.

## Main definitions

**Eisenstein series E<sub>t</sub>.** For Γ = SL<sub>2</sub>(ℤ), E(z, s) = Σ Im(γz)<sup>s</sup> over γ in Γ<sub>∞</sub>∖Γ, continued meromorphically in s. Set E<sub>t</sub>(z) = E(z, 1/2 + it). It is a Laplace eigenfunction with eigenvalue 1/4 + t<sup>2</sup>.

**Maass cusp form.** A real function ϕ on the upper half-plane that is Γ-invariant, satisfies Δϕ + λϕ = 0 with λ = 1/4 + t<sub>ϕ</sub><sup>2</sup> > 0, and has L<sup>2</sup> norm 1 on Γ∖ℍ. It is even if ϕ(−x + iy) = ϕ(x + iy).

**Sign changes K<sup>β</sup>(f).** For a compact segment β, the number of times f changes sign along β.
- Link to nodal domains: for an even cusp form and β on the fixed line of the reflection, 1 + K<sup>β</sup>(ϕ)/2 is at most the number of inert nodal domains meeting β (inequality (1.1), from Ghosh, Reznikov and Sarnak).
- Upper bound: the number of zeros on β is at most of order t.

## Main results

**Theorem (Eisenstein series; Theorem 1.3).** Let β = i[a, b] be a compact segment of the imaginary axis and let t<sub>j</sub> → ∞. Suppose that for some p > 2 the L<sup>p</sup> norm of E<sub>t<sub>j</sub></sub> on β, with measure dy/y, is ≪ t<sub>j</sub><sup>ε</sup> for every ε > 0. Then K<sup>β</sup>(E<sub>t<sub>j</sub></sub>) ≫ t<sub>j</sub><sup>1−ε</sup> for every ε > 0. The Lindelöf hypothesis is not assumed.
- Step 1: a general lemma (Lemma 2.1) says that if integrals of f over short windows are small on average, while the mean square of f is large compared with them, then f changes sign in many windows.
- Step 2: the short-window integrals are bounded through the L-function of E<sub>t</sub>, whose mean square is a fourth moment of ζ on the critical line (Heath-Brown). Young's lower bound for the L<sup>2</sup> norm of E<sub>t</sub> on β supplies the other half.

**Theorem (cusp forms, conditional; Theorem 1.7).** Let ϕ<sub>j</sub> be even Hecke cusp forms with the same L<sup>p</sup> hypothesis on β = i[a, b] for some p > 2. Assume also Conjecture 2.7, a mean square bound for L<sub>ϕ</sub>(1/2 + it) over t in [T, 2T] in the range 2T ≤ t<sub>ϕ</sub> ≤ T<sup>1+δ</sup>. Then K<sup>β</sup>(ϕ<sub>j</sub>) ≫ t<sub>ϕ<sub>j</sub></sub><sup>1−ε</sup>.
- Step 1: the same lemma, with the L<sup>2</sup> lower bound on β from Ghosh, Reznikov and Sarnak.
- Step 2: Conjecture 2.7 replaces the fourth moment of ζ. It follows from Lindelöf but is weaker. The authors could not prove it in this range.

## Note, then ignore

- The L<sup>p</sup> hypothesis. Theorem 1.3 still assumes an L<sup>p</sup> bound with p > 2 along β, so the abstract's "without Lindelöf" does not mean fully unconditional. Note this once, then read on.
- Remark 1.6. A sup norm bound t<sup>ν</sup> with ν &lt; 1/8 would already give a non-trivial result, but the best known exponent is above 1/3. Safe to skip.
- Other geodesics. The proof works for cuspidal geodesics x = p/q, with twisted L-series split by Dirichlet characters (Remark 1.10). Safe to skip on a first reading.
- The rescaling f<sub>t</sub> = E<sub>t</sub>/√y. The proof works with this function because y is bounded on β, so zeros are unchanged. Safe to skip.
- Sign changes versus zeros. Ki's bound is stated for zeros, and the paper works with sign changes, which is the stronger count. Skip the distinction at first.

## One next step

Look at Figure 1 on page 2 and find the sign changes along the imaginary axis. Then read the statement of Theorem 1.3 on page 3.
