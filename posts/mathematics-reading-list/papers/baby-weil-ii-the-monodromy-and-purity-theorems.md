source: https://shmakov.us/docs/Weil/Weil_II.pdf
slogan: Put one L-function into a family with large monodromy, square it as Rankin did, and the weight bound of Weil II on curves follows.
basis: the introduction and the main theorem statements

## Before you start

This note is 27 pages and opens with π<sub>1</sub>, lisse sheaves, Swan conductors and Frobenius classes all at once. The likely feeling is shame at not having étale cohomology at your fingertips. That feeling is allowed. You can treat the six standard facts as a black box and still follow the plot. If you want to see why the Riemann hypothesis over finite fields is true beyond curves, this is one of the shortest routes. Enjoy the strategy. Finishing can wait.

## The story

Deligne's Weil II says that pushing a sheaf forward raises Frobenius weights by at most the cohomological degree. Its proof is long. Laumon shortened it with a Fourier transform, and Katz shortened it again. This note retells Katz's version for a curve. Reductions bring you to a lisse sheaf E on the affine line, pure of weight 0. Twist E by the Artin–Schreier sheaf of a polynomial f(t) + at + bt<sup>2</sup> and let (a, b) vary. The groups H<sup>1</sup><sub>c</sub> then form a lisse sheaf G on the plane. A moment computation shows G has large monodromy. Rankin's squaring trick then forces G to be pure of weight 1. Let the twist degenerate to zero. Weights can only drop, so H<sup>1</sup><sub>c</sub> of E has weights ≤ 1.

## Main definitions

**Lisse sheaf.** On a connected normal scheme X, a lisse ℚ̄<sub>ℓ</sub>-sheaf of rank r is a continuous representation π<sub>1</sub>(X) → GL<sub>r</sub>(ℚ̄<sub>ℓ</sub>) of the étale fundamental group. Each point x with values in a finite field gives a Frobenius conjugacy class.

**ι-pure, ι-mixed.** Fix an embedding ι: ℚ̄<sub>ℓ</sub> → ℂ. A lisse sheaf E over a finite field k is ι-pure of weight w if, at every point x over an extension with q<sup>n</sup> elements, every Frobenius eigenvalue α satisfies |ι(α)|<sup>2</sup> = (q<sup>n</sup>)<sup>w</sup>.
- Mixed of weights ≤ w: replace the equality by ≤.
- For a Galois representation, such as a cohomology group, test the eigenvalues of geometric Frobenius.

**Artin–Schreier sheaf L(χ(f)).** Fix a non-trivial additive character χ of k. For a function f on X, this rank 1 lisse sheaf has Frobenius at x acting by χ(trace of f(x)). It is pure of weight 0.

**Auxiliary sheaf G.** Take E on the affine line, geometrically irreducible, geometrically non-trivial, pure of weight 0. Pick N prime to p with N > Swan<sub>∞</sub>(E), and f of degree N. Then G is the sheaf on the plane whose stalk at (a, b) is H<sup>1</sup><sub>c</sub>(𝔸<sup>1</sup>, E ⊗ L(χ(f(t) + at + bt<sup>2</sup>))).
- In characteristic 2, use bt<sup>3</sup> in place of bt<sup>2</sup>.
- N ≥ 3 for odd p, and N ≥ 5 for p = 2.

## Main results

**Theorem (target theorem; Theorem 6).** Let X<sub>0</sub> be a smooth, geometrically connected curve over a finite field k, and let E be a lisse sheaf on it, ι-pure of weight w. Then H<sup>1</sup><sub>c</sub> of the base change to the algebraic closure, with coefficients in E, is ι-mixed of weights ≤ w + 1.
- Step 1: reduce to the affine line and to E geometrically irreducible of weight 0.
- Step 2: get purity for the twisted sheaf, then let the twist degenerate. The Degeneration and Weight Drop lemmas show weights only fall.

**Theorem (monodromy theorem; Theorem 3).** G is geometrically irreducible, and det G has finite order geometrically. If p is odd, or p = 2 and E is not geometrically self-dual, the geometric monodromy group is either finite and irreducible or contains SL(V) with finite index. In the two self-dual cases for p = 2, it is Sp(V), SO(V), O(V) or finite irreducible.
- Step 1: compute the fourth moment as the dimension of a top cohomology group. The answer is 2 or 3 (Theorem 2).
- Step 2: apply Larsen's criterion, which reads the group off the fourth moment.

**Theorem (purity; Theorem 4).** G is lisse of rank (N − 1)·rank(E) and ι-pure of weight 1.
- Step 1: the monodromy theorem makes the L-functions of tensor powers of G and its dual have controlled poles.
- Step 2: the traces of those powers are non-negative, so Rankin's method bounds each single Frobenius eigenvalue.

**Corollary (Corollary 4).** With j the inclusion of X<sub>0</sub> into its smooth proper model, H<sup>i</sup> of the proper curve with coefficients in j<sub>∗</sub>E is ι-pure of weight w + i for i = 0, 1, 2.

## Note, then ignore

- Weaker than Deligne. The full theorem treats any morphism of finite type schemes and mixed constructible sheaves. The note says the general case follows by dévissage plus Deligne's study of local monodromy in families. Safe to skip on a first reading.
- The embedding ι. Weights depend on a chosen ι: ℚ̄<sub>ℓ</sub> → ℂ. It is there because the statement is about complex absolute values. Safe to skip.
- Characteristic 2. The family uses bt<sup>3</sup> and the monodromy group may be symplectic or orthogonal. It only changes the bookkeeping. Safe to skip.
- Generalised Tate twist. Tensoring with a character of the degree shifts any pure sheaf to weight 0. It is a normalisation. Safe to skip.
- Typing slips. The definition of weights for a Galois representation writes (q<sup>n</sup>)<sup>w</sup> where q<sup>w</sup> is meant. Safe to skip.

## One next step

Open the PDF at page 2 and read only the paragraph that begins "Our target theorem is weaker", then the three-line target theorem in section 1.2.
