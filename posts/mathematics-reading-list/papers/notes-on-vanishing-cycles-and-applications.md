source: https://people.math.wisc.edu/~lmaxim/vanishing.pdf
slogan: Vanishing cycles measure how a smooth fibre differs from a singular one, so sphere counts at singular points give global Euler characteristics.
basis: the introduction and the main theorem statements

## Before you start

These notes run to 40 pages and, from Section 4 on, assume derived categories and perverse sheaves. That can raise a quiet shame: "I do not know enough to be here." It is fine to feel that. Sections 2 and 3 need only topology and a little complex analysis, and they hold the pictures. If you want to see why a polynomial like x<sup>2</sup> + y<sup>3</sup> hides a trefoil knot, this is the place. Read for the pictures first. Finishing can wait.

## The story

Take a polynomial f on ℂ<sup>n+1</sup> with a singular fibre X<sub>0</sub> = f<sup>−1</sup>(0) and smooth nearby fibres X<sub>s</sub>. People wanted to read the topology of X<sub>0</sub> from the smooth fibres. Milnor solved the local problem. Near a singular point, the smooth fibre inside a small ball is the Milnor fibre, and for an isolated singularity it is a bouquet of n-spheres. Those spheres shrink to the point as s → 0, so they are called vanishing cycles. The simplest picture is a torus pinching to a nodal curve: the meridian dies and the longitude survives. The blockage was global: how do you glue the local data along a whole singular fibre? Grothendieck and Deligne answered with two sheaf functors on X<sub>0</sub>, the nearby cycles ψ and the vanishing cycles ϕ. Maxim builds both and then uses them to compute.

## Main definitions

**Milnor fibre and monodromy.** For a point x of X<sub>0</sub>, intersect a small ball around x with a nearby fibre X<sub>s</sub>. The result F<sub>x</sub> is the Milnor fibre of f at x. Moving s once around 0 gives a homeomorphism h of F<sub>x</sub>, the monodromy.
- Smooth point: F<sub>x</sub> is contractible.
- Isolated singular point: F<sub>x</sub> is a bouquet of μ<sub>x</sub> spheres of dimension n. Each sphere is a vanishing cycle.

**Nearby cycle functor ψ<sub>f</sub>.** For a constructible complex F on X, the complex ψ<sub>f</sub>F lives on X<sub>0</sub>. You pull F back to the universal cover of the punctured family, push forward to X, and restrict to X<sub>0</sub> (Definition 4.11).
- Stalks: the cohomology of ψ<sub>f</sub> of the constant sheaf at x is the cohomology of the Milnor fibre F<sub>x</sub>.
- Global, f proper: the hypercohomology of X<sub>0</sub> with values in ψ<sub>f</sub>F is the cohomology of the smooth fibre X<sub>s</sub> (Theorem 4.14).

**Vanishing cycle functor ϕ<sub>f</sub>.** There is a specialisation map from the restriction of F to X<sub>0</sub> into ψ<sub>f</sub>F. The cone of this map is ϕ<sub>f</sub>F. Its stalks for the constant sheaf are the reduced cohomology of the Milnor fibre. For X nonsingular it is supported on the singular locus of X<sub>0</sub>.

## Main results

**Theorem (Milnor fibre of an isolated singularity; Proposition 2.3).** If f has an isolated singularity at x, then F<sub>x</sub> is homotopy equivalent to a bouquet of μ<sub>x</sub> spheres of dimension n. The Milnor number μ<sub>x</sub> is the dimension over ℂ of the ring of convergent power series at x modulo the partial derivatives of f.
- Example: x<sup>2</sup> + y<sup>2</sup> has μ = 1 and Milnor fibre a circle.
- Example: x<sup>3</sup> + y<sup>2</sup> has μ = 2, and its link is the trefoil knot.

**Theorem (Monodromy theorem; Theorem 2.7).** All eigenvalues of the monodromy acting on H<sup>i</sup>(F<sub>x</sub>; ℂ) are roots of unity. Some power of it, minus the identity, is nilpotent of order at most i + 1. Milnor conjectured this. The notes credit the proof to Grothendieck, Landman and others.

**Theorem (Perversity; Theorem 4.21).** For a non-constant regular or analytic function f on X, the shifted functors ψ<sub>f</sub>[−1] and ϕ<sub>f</sub>[−1] commute with Verdier duality and are t-exact for the perverse t-structure. So they send perverse sheaves on X to perverse sheaves on X<sub>0</sub>.
- Step 1: reduce to unipotent monodromy by a ramified cover of the disc.
- Step 2: use the triangle relating ψ<sub>f</sub> to h − 1, where h − 1 is nilpotent.

**Theorem (Euler characteristic of a singular hypersurface; Theorem 5.4).** Let V be a reduced hypersurface of degree d in ℂℙ<sup>n+1</sup> with a Whitney stratification S. Let W be a smooth hypersurface of degree d transverse to S. Then χ(V) = χ(W) − Σ χ(S ∖ W) · μ<sub>S</sub>, summed over strata S, where μ<sub>S</sub> is the Euler characteristic of the reduced cohomology of the Milnor fibre at a point of S.
- Step 1: put V in the pencil f − sg and apply χ(X<sub>s</sub>) = χ(X<sub>0</sub>) + χ(X<sub>0</sub>, ϕ).
- Step 2: compute the ϕ term stratum by stratum.

## Note, then ignore

- Two Milnor fibrations. One lives on a sphere minus the link, the other (Milnor-Lê) over a punctured disc. They are equivalent, and the notes do not distinguish them. Safe to skip on a first reading.
- The shift by −1. The perverse versions of ψ and ϕ carry a shift so that they preserve perverse sheaves. It only moves degrees. Safe to skip.
- Cones are not functorial. Defining ϕ as a cone does not by itself give a functor, and the notes point to references for the repair. Safe to skip.
- Constructibility of ψ. The definition uses a non-algebraic covering map, so constructibility needs a separate argument, which the notes cite. Safe to skip.
- Coefficient ring. The ring A is commutative, noetherian and of finite global dimension, and often a field. This keeps duality and Euler characteristics well behaved. Safe to skip.

## One next step

Open the notes at Example 2.21 on page 9. It shows one equation, x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> + t<sup>3</sup> + u<sup>6k−1</sup> = 0 for k from 1 to 28, whose links give the 28 smooth 7-spheres that bound parallelisable manifolds.
