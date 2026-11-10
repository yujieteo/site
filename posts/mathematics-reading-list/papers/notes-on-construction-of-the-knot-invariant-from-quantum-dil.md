source: https://www.kurims.kyoto-u.ac.jp/~kyodo/kokyuroku/contents/pdf/1172-4.pdf
slogan: The quantum dilogarithm at |q| = 1 gives a braid operator whose classical limit glues ideal tetrahedra, so hyperbolic volume appears from a saddle point.
basis: the introduction and the main theorem statements

## Before you start

These are 26 pages of physicist's notes by Kazuhiro Hikami, with delta functions, saddle points and almost no proofs. The likely feeling is distrust: you may not know which steps are rigorous, and that can make careful reading feel pointless. The distrust is a sound instinct, and you can keep it while you read. If you want to see why a knot invariant could know a hyperbolic volume, the notes show the mechanism on the figure-eight knot. Enjoy the mechanism. Checking the analysis is a different project.

## The story

Kashaev built a knot invariant from the quantum dilogarithm at an N-th root of unity, and claimed that its growth as N → ∞ gives the hyperbolic volume of the knot complement. Why volume? A hyperbolic knot complement is glued from ideal tetrahedra, and the volume of each is a dilogarithm value. Hikami tests this with a different route. He takes |q| = 1, where the quantum dilogarithm is Faddeev's integral acting on an infinite-dimensional space, and lets q → 1. The pentagon identity gives an operator S. Four copies of S give a braid operator R. In the limit each matrix element of S becomes the exponential of a dilogarithm, so S is one tetrahedron and R is an octahedron of four. Integrating over momenta glues faces, and the saddle point returns the volume.

## Main definitions

**Quantum dilogarithm for |q| &lt; 1.** S<sub>q</sub>(w) = Π<sub>n ≥ 0</sub> (1 + q<sup>2n+1</sup>w). It satisfies S<sub>q</sub>(qw)/S<sub>q</sub>(q<sup>−1</sup>w) = 1/(1 + w), and as q → 1 its logarithm is governed by Li<sub>2</sub>(−w).

**Faddeev integral for |q| = 1.** With q = e<sup>iγ</sup> and γ real, Φ<sub>γ</sub>(φ) = exp(∫ e<sup>−iφx</sup> / (4 sh(γx) sh(πx)) dx/x), over the real line pushed just above 0.
- Limit: Φ<sub>γ</sub>(φ) behaves like exp(Li<sub>2</sub>(−e<sup>φ</sup>)/2iγ) as γ → 0.
- Duality: it factors as S<sub>q</sub>(e<sup>φ</sup>) times the same kind of function with γ replaced by π<sup>2</sup>/γ.

**S-operator.** Let p̂, q̂ satisfy [p̂, q̂] = −2iγ on a Hilbert space V. On V ⊗ V the notes set S<sub>1,2</sub> = e<sup>q̂<sub>1</sub>p̂<sub>2</sub>/2iγ</sup> Φ<sub>γ</sub>(p̂<sub>1</sub> + q̂<sub>2</sub> − p̂<sub>2</sub>).

**R-operator.** On V<sup>⊗4</sup>, R<sub>12,34</sub> is a product of four factors S<sub>1,4</sub>, S<sub>1,3</sub>, S<sub>2,4</sub>, S<sub>2,3</sub>, two of them inverted and some partially transposed (equation 4.11, after Kashaev). Composing with permutations gives the braid operator.

## Main results

**Claim (pentagon identities; equations 3.5d, 4.8 and 4.10).** If âb̂ = q<sup>2</sup>b̂â, then S<sub>q</sub>(b̂)S<sub>q</sub>(â) = S<sub>q</sub>(â)S<sub>q</sub>(q<sup>−1</sup>âb̂)S<sub>q</sub>(b̂). For |q| = 1, Φ<sub>γ</sub>(p̂)Φ<sub>γ</sub>(q̂) = Φ<sub>γ</sub>(q̂)Φ<sub>γ</sub>(p̂ + q̂)Φ<sub>γ</sub>(p̂). In terms of S this reads S<sub>2,3</sub>S<sub>1,2</sub> = S<sub>1,2</sub>S<sub>1,3</sub>S<sub>2,3</sub>.
- Step 1: the first follows from the difference equation and the q-binomial formula.
- Step 2: the second follows from the factorisation of Φ<sub>γ</sub> into two commuting Weyl algebras.

**Claim (braid relation; equations 4.12 and 4.14).** The operator R satisfies the constant Yang-Baxter equation, and the braid operator built from it satisfies (R ⊗ 1)(1 ⊗ R)(R ⊗ 1) = (1 ⊗ R)(R ⊗ 1)(1 ⊗ R). The stated proof is repeated use of the pentagon identity for S. Together with a second operator μ for the Markov moves, this gives a knot invariant as a trace over a braid whose closure is the knot.

**Claim (physics argument; tetrahedra in the limit, equations 5.9 and 5.13).** As γ → 0, a saddle-point estimate gives ⟨p<sub>1</sub>, p<sub>2</sub>| S |p<sub>1</sub>′, p<sub>2</sub>′⟩ ≈ δ(p<sub>1</sub> + p<sub>2</sub> − p<sub>1</sub>′) exp((1/2iγ)(−π<sup>2</sup>/6 + Li<sub>2</sub>(e<sup>p<sub>2</sub>′ − p<sub>2</sub></sup>) + p<sub>1</sub>(p<sub>2</sub> − p<sub>2</sub>′))). The matrix elements of R contain four such dilogarithm terms.
- Reading: S is an oriented tetrahedron with a momentum on each face, and R is an octahedron of four tetrahedra at each crossing.
- Gluing: integrating over a momentum glues two faces, and the pentagon identity is the two ways to cut one polytope into two or three tetrahedra.

**Claim (physics argument; two examples, Section 7).** For the figure-eight knot the invariant reduces in the limit to ∫ dp exp((1/2iγ)(Li<sub>2</sub>(e<sup>−p</sup>) − Li<sub>2</sub>(e<sup>p</sup>))). The imaginary part of the exponent at the saddle point is the hyperbolic volume of the complement. The notes find the same for the knot 5<sub>2</sub>.

## Note, then ignore

- Which limit. The invariant is defined from the asymptotic form of R as γ → 0, with μ = 1, and for a (1, 1)-tangle, so one strand is left open. This avoids a divergent trace. Safe to skip on a first reading.
- Not Kashaev's invariant. Kashaev uses finite matrices at a root of unity. Here the space is infinite-dimensional, and the notes do not prove the two agree. Safe to skip.
- A second braid solution. Section 3 gives a theta function Θ that also satisfies a braid relation, and says it seems unrelated to Kashaev's invariant. Safe to skip.
- Rogers dilogarithm. The classical five-term identity is stated for L(x) = Li<sub>2</sub>(x) + (1/2) log x · log(1 − x), not for Li<sub>2</sub> itself. Safe to skip.
- Meaning of momenta. The author says the three-dimensional meaning of the face momenta is unclear to him. Safe to skip.

## One next step

Open the PDF at Section 7.1, near the end, and look at the figure-eight knot example: one integral, one saddle point, one volume.
