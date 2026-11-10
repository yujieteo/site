source: https://math.mit.edu/~poonen/papers/curves.pdf
slogan: To find every rational point on a curve, pass to its Jacobian or a cover, where group theory and local checks make the search finite.
basis: the introduction and the main theorem statements

## Before you start

These are 118 pages of unfinished notes from 2006. The warning on page 1 says "read them at your own risk", gaps are flagged throughout, and the last two chapters are titles only. The likely feeling is frustration, or a sense of being cheated of the ending. You may feel that, and it does not need fixing. The notes set out to explain how to answer a question like "what are the rational solutions of x<sup>4</sup> + y<sup>4</sup> = 17?". The route there is laid out with unusual care for the reader. Enjoy one worked example first. Coverage is a lesser goal.

## The story

Given a curve over ℚ, you want all its rational points. For genus at least 2, Faltings' theorem says there are finitely many, but it gives no way to list them. The notes build the working tools. First they set up varieties over a field that is not algebraically closed, where a variety and its set of points are different things. Then they attach to a curve X its Jacobian J, an abelian variety whose rational points form a finitely generated group. The size of J(k)/2J(k) can be bounded by a finite Selmer group, cut out by conditions at each place. A second tool replaces X by finitely many twisted covers and finds the points there. In Section 7.4 this turns the genus 2 curve y<sup>2</sup> = (x<sup>2</sup> + 1)(x<sup>4</sup> + 1) into two elliptic curves of rank 0 and yields exactly six affine solutions.

## Main definitions

**Nice variety (Definition 1.7.8).** A variety over a field k that is smooth, projective and geometrically integral. "Geometrically" means after base extension to an algebraic closure of k.

**Jacobian (Theorem 5.1.1).** Let X be a nice curve over k with a k-point, or at least a divisor of degree 1. Its Jacobian J is a k-variety with J(L) in natural bijection with Pic<sup>0</sup> of X over L, for every field extension L of k, compatibly with base extension.

**n-Selmer group (Definition 4.6.4).** Let A be an abelian variety over a number field k and n ≥ 2. The descent map sends A(k)/nA(k) injectively into H<sup>1</sup>(k, A[n]). The Selmer group Sel(k, A[n]) is the set of classes in H<sup>1</sup>(k, A[n]) whose restriction to each completion k<sub>v</sub> lies in the image of the local descent map.
- Point: Sel contains the image of A(k)/nA(k), and it is finite.

**Geometrically Galois étale cover (Definition 7.3.4).** An étale morphism X′ → X of nice k-varieties that, over the algebraic closure, is Galois étale with a finite group G.

## Main results

**Theorem (Mordell-Weil; Theorem 4.6.1).** Let A be an abelian variety over a number field k. Then A(k) is a finitely generated abelian group.
- Step 1: prove that A(k)/nA(k) is finite for some n ≥ 2, by showing the Selmer group is finite.
- Step 2: use a height function whose square root behaves like a norm with finitely many points below any bound.

**Theorem (explicit 2-descent; Theorems 6.2.1 and 6.3.1).** Let X be the hyperelliptic curve y<sup>2</sup> = f(x) with f squarefree of degree 2g + 1, let J be its Jacobian, and let L = k[T]/(f(T)). Then H<sup>1</sup>(k, J[2]) is isomorphic to the kernel of the norm map from L<sup>×</sup>/L<sup>×2</sup> to k<sup>×</sup>/k<sup>×2</sup>. Under this isomorphism the descent map on J(k)/2J(k) becomes the "x − T map", which sends a point (a, b) to the class of a − T. I did not check the hypotheses on k beyond what Chapter 6 displays. The notes mark the proof of Theorem 6.3.1 as skipped.
- Use: over a number field, the 2-Selmer group becomes a subgroup of an explicit group built from L, defined by local conditions.

**Theorem (Chevalley-Weil, weak form; Theorem 7.6.1).** Let k be a number field and π : X′ → X an étale morphism of nice k-varieties. There is an effectively computable finite extension L of k such that every point of X′ over the algebraic closure that maps to a point of X(k) is defined over L.

**Claim (worked example; Section 7.4).** The rational solutions of y<sup>2</sup> = (x<sup>2</sup> + 1)(x<sup>4</sup> + 1) are (0, ±1), (1, ±2) and (−1, ±2).
- Step 1: a common-factor argument forces x<sup>4</sup> + 1 = cw<sup>2</sup> with c = 1 or c = 2.
- Step 2: each of these two curves is an elliptic curve of rank 0 with four rational points.

## Note, then ignore

- Perfect fields. Chapter 1 assumes k is perfect and adds remarks on what changes otherwise, mostly "separable closure" in place of "algebraic closure". Safe to skip on a first reading.
- Scheme language. The notes define a variety as a separated scheme of finite type and then say you may think of its points in affine or projective space. Take the offer. Safe to skip.
- Flagged gaps. A club symbol followed by "Bjorn:" marks a missing proof or reference. These are notes to the author. Safe to skip.
- Empty chapters. Chapter 8 on Chabauty and Coleman and Chapter 9 on the Mordell-Weil sieve have titles and no text. Look elsewhere for those methods. Safe to skip.
- Even degree. Chapter 6 treats f of odd degree 2g + 1, which gives a rational point at infinity. The case of degree 2g + 2 appears only as an exercise. Safe to skip.

## One next step

Open the notes at Section 7.4.1 (page 98) and read the example down to the list of six solutions. It is under two pages.
