source: https://arxiv.org/pdf/2506.20028
slogan: Add free fermions to a string moving on a Lie group, and its torus partition function collapses to a sum over simple classical solutions.
basis: the abstract and introduction

## Before you start

This is a physics paper of over 50 pages with Witten's name on it, full of path integrals and fermion measures. You may feel shame at not knowing conformal field theory well enough. That feeling is allowed, and it can sit next to you while you read. If you want to see localisation work on an example small enough to check by hand, the circle case in section 2 gives you that. Read for the pleasure of the trick. Finishing is optional.

## The story

Physicists want the torus partition function of the WZW model, a two-dimensional field theory whose field is a map from a surface into a compact Lie group G. The standard answer sums over quantum states. A sum over classical solutions should also exist, but a path integral over maps into a curved group looks hopeless. Choi and Takhtajan found a way in for a particle on G: add fermions to make the model supersymmetric. On a group manifold these fermions are free and do not talk to the bosons. So you can localise the supersymmetric model, then divide by the known fermion factor. Murthy and Witten do the same for strings. The surviving solutions are straight windings inside a maximal torus, labelled by two integers and a Weyl group element.

## Main definitions

**WZW model at level k.** A two-dimensional sigma model whose field g maps a surface to a compact Lie group G. Its action includes a Wess-Zumino term, and the overall coefficient is a positive integer k.

**Twisted torus partition function.** The trace of g<sub>L</sub> g<sub>R</sub><sup>−1</sup> exp(−2πτ<sub>2</sub>H + 2πiτ<sub>1</sub>P) over the Hilbert space of the bosonic model. Here τ = τ<sub>1</sub> + iτ<sub>2</sub> lies in the upper half plane, H and P are the Hamiltonian and momentum, and g<sub>L</sub>, g<sub>R</sub> act on G on the left and right.
- As a path integral: the WZW model on a torus, coupled to flat background gauge fields with parameters α<sub>L</sub>, α<sub>R</sub>.

**Supersymmetric WZW model.** The WZW model with N = 1 supersymmetry. Its fermions are free fields, decoupled from the bosons, so its partition function is the bosonic one times a free fermion one.

**Reduced partition function.** Free periodic fermions have zero-modes that do not appear in the action, so the plain supersymmetric index is zero. Insert the product of the zero-modes into the path integral and you get a nonzero quantity Z.
- For the circle and for SU(2): the insertion is i ψ<sub>0</sub> ψ̃<sub>0</sub>, one pair of zero-modes.

## Main results

All results here are physics-level path integral computations. The paper does not label theorems.

**Claim (physics argument; localisation with zero-modes; eqns. (1.4) to (1.9)).** Let δ be a supersymmetry that closes off-shell, and let V be a fermionic functional with δ<sup>2</sup>V = 0. Suppose V and δV do not depend on the zero-modes, and the variation of the product of zero-modes contains no multiple of that product. Then Z does not change when you add λδV to the action, and Z = Σ exp(−S[X<sub>α</sub>]) Z<sub>1-loop</sub>, summed over critical points of δV.
- Step 1: differentiate in λ. The usual two terms vanish, and the new third term vanishes by the two zero-mode conditions.
- Step 2: send λ → ∞, so only quadratic fluctuations around critical points survive.

**Claim (physics argument; the circle; eqn. (2.23)).** For a boson on a circle of circumference 2πR, the torus partition function is R / (√(2τ<sub>2</sub>) |η(τ)|<sup>2</sup>) times Σ exp(−πR<sup>2</sup>|m − wτ|<sup>2</sup> / 2τ<sub>2</sub>), summed over integers m and w.
- Step 1: the classical solutions wind m and w times around the two cycles, and the one-loop factor is the same for each.
- Step 2: Poisson summation on one integer turns this into the sum over momentum and winding states.

**Claim (physics argument; SU(2); section 3.5).** The localising solutions are the circle solutions, placed in SU(2) through one of two circles that the non-trivial Weyl element exchanges. The partition function is a sum over two Weyl elements and integers (m, w), with a sign sgn(ω) in the supersymmetric model. After Poisson summation it agrees with the sum over states, built from Weyl-Kac characters of affine su(2) at level k − 2.

**Claim (physics argument; general G; eqn. (4.2)).** For G compact, simple and simply connected, the same formula holds with a sum over the Weyl group and over integers m<sub>i</sub>, w<sub>i</sub>, one pair for each direction in a maximal torus, and with an extra sign (−1)<sup>ζ</sup>. The authors do not prove agreement with the sum over states. They cite later work of Zhao and Lü for that.

## Note, then ignore

- Level shift. With the regularisation used here, the bosonic model inside the supersymmetric model at level k has effective level k − h, which is k − 2 for SU(2). It is a bookkeeping point, safe to skip on a first reading.
- The sign (−1)<sup>ζ</sup>. The first arXiv version left it out. It is trivial for even k and for SU(2). Safe to skip unless you want general G at odd k.
- Factors of i in the fermion measure. They handle an anomaly of the zero-mode Clifford algebra. Safe to skip.
- Overall sign of the fermion measure. It is an arbitrary choice that cancels when you divide by the fermion partition function. Safe to skip.
- Section 5. It extends the method to SL(2, ℝ) and hyperbolic three-space by analytic continuation. It is a separate story, safe to skip at first.

## One next step

Open the paper at section 2.1 and read from eqn. (2.21) to eqn. (2.23). Watch the boson and fermion determinants cancel and the circle answer appear.
