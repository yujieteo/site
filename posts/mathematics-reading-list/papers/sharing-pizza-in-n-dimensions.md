source: https://arxiv.org/pdf/2102.06649
slogan: Cut a symmetric body by the mirrors of a reflection group through any inside point, and the alternating slices share the volume equally.
basis: the introduction and the main theorem statements

## Before you start

The title promises pizza, and then page one says "Coxeter arrangement". You may feel a small drop: the worry that a friendly puzzle hides a wall of root-system notation. That feeling is fair, and you can let it sit. The paper stays close to cutting solids with planes and adding volumes, which is home ground for anyone who has done a flux integral. Read for the pleasure of the picture. Finishing can come later.

## The story

Cut a round pizza with four equally spaced lines through any point inside it. Two people who take alternate slices get the same area. This is the classical Pizza Theorem, and it holds for any even number 2k ≥ 4 of equally spaced cuts. People wanted the same statement for a ball in ℝ<sup>n</sup> cut by hyperplanes, but the plane proofs do not extend. The authors notice that equally spaced lines are the mirrors of a dihedral reflection group. So they replace the lines by the mirrors of any finite reflection group. Their one tool is a formula for how the alternating sum changes when you slide the body. The change is a sum of the same kind of quantity, one dimension lower, on the mirrors themselves. Induction on dimension then gives vanishing for many reflection groups and many symmetric bodies.

## Main definitions

**Coxeter arrangement.** A finite set H of hyperplanes through the origin of a real inner product space V, such that reflecting H in any one of its hyperplanes gives H back. The reflections generate a finite group W, the Coxeter group.
- In the plane: m equally spaced lines through 0, called type I<sub>2</sub>(m).
- Product case: the n coordinate hyperplanes of ℝ<sup>n</sup>, called type A<sub>1</sub><sup>n</sup>.

**Sign of a chamber.** A chamber is a connected piece of V minus the hyperplanes. Fix a base chamber T<sub>0</sub>. The sign (−1)<sup>T</sup> of a chamber T is +1 or −1 according to the parity of the number of hyperplanes that separate T from T<sub>0</sub>.

**Pizza quantity.** For a measurable set K of finite volume, P(H, K) = Σ<sub>T</sub> (−1)<sup>T</sup> Vol(K ∩ T), the sum over all chambers. "Fair sharing between two people" means P(H, K) = 0.

**Even restricted arrangement.** For a hyperplane H<sub>e</sub> of H, a chosen part of the arrangement that the other hyperplanes cut out on H<sub>e</sub>. It is the lower-dimensional arrangement that appears in the sliding formula. An arrangement is called even when this restriction can be repeated all the way down to dimension 0.

## Main results

**Theorem (pizza theorem for balls; Theorem 1.1).** Let H be a Coxeter arrangement in V with |H| ≥ dim V, and let B(a, R) be a ball that contains the origin, so R ≥ ‖a‖. If |H| > dim V and |H| − dim V is even, then P(H, B(a, R)) = 0. If |H| > dim V and |H| − dim V is odd, then P(H, B(a, R)) → 0 as R → ∞ with a fixed. If |H| = dim V, then P(H, B(a, R)) does not depend on R.
- Step 1: the sliding formula (Theorem 3.4) and induction on dim V show that, in the even case, P is a polynomial in (a, R), homogeneous of degree dim V.
- Step 2: the symmetries of H force the terms of that polynomial to vanish.

**Theorem (pizza theorem for symmetric convex bodies; Theorem 1.2).** Let H be a Coxeter arrangement whose group W contains −id. Let K be a compact convex set stable under W, and let a be a point such that K + a contains the origin. Then P(H, K + a) = 0, unless H has type A<sub>1</sub><sup>n</sup>. In that case, with the coordinate hyperplanes and the positive orthant as base chamber, P(H, K + a) = 2<sup>n</sup> a<sub>1</sub>⋯a<sub>n</sub>.
- Step 1: a Coxeter arrangement is even exactly when −id lies in W (Corollary 4.7).
- Step 2: a W-stable set is "sufficiently symmetric", so P(H, K + a) depends only on a, through a polynomial attached to H (Theorems 6.3 and 6.9).

**Theorem (crust version; Theorem 8.2).** Let H be a Coxeter arrangement with |H| − n a nonnegative even integer. For an n-dimensional ball, the alternating sum of the (n − 1)-dimensional surface volumes of the pieces is zero. I read this statement in the abstract and introduction only, so check the position of the centre in Section 8.

## Note, then ignore

- Which groups contain −id. The paper lists them: products of types A<sub>1</sub>, B<sub>n</sub>, D<sub>2m</sub>, E<sub>7</sub>, E<sub>8</sub>, F<sub>4</sub>, H<sub>3</sub>, H<sub>4</sub> and I<sub>2</sub>(2k). The list only tells you where Theorem 1.2 applies. Safe to skip on a first reading.
- Dependence on the base chamber. A different base chamber can only flip the sign of P, so vanishing is not affected. Safe to skip.
- Unit normal vectors. The authors fix unit normals to avoid scale factors in the sliding formula. Safe to skip.
- Functions in place of sets. P(H, f) is also defined for an integrable function f, because the proof of the sliding formula starts with smooth f. Safe to skip.
- The Calzone Theorem. The case A<sub>1</sub> × I<sub>2</sub>(2k) in ℝ<sup>3</sup> is an older result that Theorem 1.1 recovers. Safe to skip.

## One next step

Open the paper and read only the first paragraph of the Introduction and Theorem 1.2. Then draw the two coordinate axes, a shifted square, and check the value 4a<sub>1</sub>a<sub>2</sub> by hand.
