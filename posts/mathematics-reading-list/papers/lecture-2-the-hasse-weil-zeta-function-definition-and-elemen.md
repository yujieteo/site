source: https://dept.math.lsa.umich.edu/~mmustata/lecture2.pdf
slogan: Pack all the point counts of a variety over finite fields into one power series, and it factors over closed points like Euler's product.
basis: the full text

## Before you start

This is seven pages, and half of them review finite fields and the two meanings of "point". The likely feeling is impatience: you may think you know this already and want to skip to the real Weil conjectures. That impatience is fine. Let it sit there. The payoff is that you will be able to compute a zeta function by hand, for affine and projective space, in a few lines. Enjoy those two computations first. Reading every remark can wait.

## The story

Take equations with coefficients in the finite field 𝔽<sub>q</sub>. You can count their solutions in 𝔽<sub>q</sub>, then in 𝔽<sub>q<sup>2</sup></sub>, then in 𝔽<sub>q<sup>3</sup></sub>, and so on. That gives an infinite list of numbers N<sub>1</sub>, N<sub>2</sub>, N<sub>3</sub>, ... and no obvious pattern. The idea is to store the list in one generating function, Z(X, t) = exp(Σ N<sub>m</sub> t<sup>m</sup>/m). The odd-looking exp and the division by m are there for a reason: with them, the series becomes a product over the closed points of X, just as the Riemann zeta function is a product over primes. The product makes Z behave well. Cut X into a closed piece and its complement and Z multiplies. For affine space the answer is 1/(1 − q<sup>n</sup>t), a rational function. Projective space follows by induction.

## Main definitions

**Variety over 𝔽<sub>q</sub>.** A reduced scheme of finite type over 𝔽<sub>q</sub>. It may be reducible.

**Closed point and its degree.** A closed point x of X has a residue field k(x), which is a finite extension of 𝔽<sub>q</sub>. Its degree is deg(x) = [k(x) : 𝔽<sub>q</sub>].
- Example: on the affine line, closed points are monic irreducible polynomials, and the degree is the degree of the polynomial.

**K-valued point.** For a finite extension K of 𝔽<sub>q</sub>, X(K) is the set of maps Spec K → X over 𝔽<sub>q</sub>. For an affine X cut out by equations, X(K) is the set of solutions with coordinates in K.
- One closed point of degree e gives exactly e points in X(K) when e divides [K : 𝔽<sub>q</sub>], and none otherwise.

**Hasse-Weil zeta function.** Put N<sub>m</sub> = |X(𝔽<sub>q<sup>m</sup></sub>)|. Then Z(X, t) = exp(Σ<sub>m ≥ 1</sub> N<sub>m</sub> t<sup>m</sup>/m), a formal power series with rational coefficients.

## Main results

**Proposition (counting points by degree; Proposition 2.1).** Let X be a variety over 𝔽<sub>q</sub> and K an extension of degree r. Then |X(K)| = Σ<sub>e | r</sub> e · #{closed points of degree e}.
- Step 1: a K-valued point lands on a closed point x with deg(x) dividing r.
- Step 2: the Galois group of K over 𝔽<sub>q</sub> acts transitively on the embeddings k(x) → K, and there are deg(x) of them.

**Proposition (Euler product; Proposition 3.2).** For every variety X over 𝔽<sub>q</sub>, Z(X, t) = Π (1 − t<sup>deg(x)</sup>)<sup>−1</sup>, the product over all closed points x. In particular Z(X, t) has integer coefficients.
- Step 1: take the logarithm of Z and replace N<sub>m</sub> by the sum from Proposition 2.1.
- Step 2: swap the order of summation and recognise the series for −log(1 − t<sup>r</sup>).

**Proposition (cut and multiply; Proposition 3.7).** If Y is a closed subvariety of X and U = X ∖ Y, then Z(X, t) = Z(Y, t) · Z(U, t).
- Step 1: point counts add, N<sub>m</sub>(X) = N<sub>m</sub>(Y) + N<sub>m</sub>(U).
- Step 2: exp turns the sum into a product.

**Corollary (affine and projective space; Example 3.5 and Corollary 3.8).** Z(𝔸<sup>n</sup>, t) = 1/(1 − q<sup>n</sup>t), and Z(ℙ<sup>n</sup>, t) = 1/((1 − t)(1 − qt) ··· (1 − q<sup>n</sup>t)).
- Step 1: 𝔸<sup>n</sup> has q<sup>mn</sup> points over 𝔽<sub>q<sup>m</sup></sub>, and the series sums to −log(1 − q<sup>n</sup>t).
- Step 2: ℙ<sup>n</sup> is ℙ<sup>n−1</sup> plus a copy of 𝔸<sup>n</sup>, so use Proposition 3.7 and induct.

## Note, then ignore

- Formal power series. Everything happens in ℚ[[t]], and Proposition 3.1 lists the rules for exp and log there. No convergence is needed. Safe to skip on a first reading.
- Arithmetic and geometric Frobenius. Section 1 names the map x ↦ x<sup>q</sup> and its inverse. The names matter in later lectures, not here. Safe to skip.
- Transverse fixed points (Proposition 2.4). For smooth X, the graph of the r-th power of Frobenius meets the diagonal in reduced points. This prepares the fixed-point formula of later lectures. Safe to skip.
- The footnote on N<sub>m</sub>. The set X(K) depends on the chosen extension K, but its size depends only on the degree. Safe to skip.
- Change of base field (Remark 3.3 and Proposition 3.9). These formulas say how Z changes when you shrink or enlarge the ground field. They are bookkeeping for later. The printed text has a few typing slips in these formulas. Safe to skip.

## One next step

Open the PDF at page 6 and read only Example 3.5, the three-line computation of Z(𝔸<sup>n</sup>, t).
