source: https://arxiv.org/pdf/2504.16935
slogan: Chains on an iterated loop space and cochains on the space have equivalent higher module categories, once cochains are read as functions on a coaffine stack.
basis: the introduction and the main theorem statements

## Before you start

This paper works with (∞, n)-categories of categories of categories. The likely feeling is vertigo, and under it a worry that you lack the right to read it. Feel that if it comes. The case n = 1 is already new, the authors say, and it speaks only of modules over two algebras attached to a space. If you want to know what Koszul duality "really" says for a topological space, the introduction answers in eight pages. Enjoy the n = 1 story first. The higher levels are optional.

## The story

Take a simply connected finite CW complex X and a field k of characteristic zero. Chains on the based loop space, C<sub>•</sub>(ΩX), and cochains C<sup>•</sup>(X) are Koszul dual algebras. People expected their module categories to match. They almost do: modules over C<sub>•</sub>(ΩX) are local systems on X, but taking global sections to C<sup>•</sup>(X)-modules is not an equivalence. In geometric words, the Betti stack of X is not affine. Old fixes impose boundedness or change the notion of module by hand. The idea here: treat C<sup>•</sup>(X) as functions on a geometric object, its cospectrum. Quasi-coherent sheaves on the cospectrum are the right modules, and the equivalence is pullback along one map from the Betti stack. Stated this way, it categorifies to every level n.

## Main definitions

**Betti stack (Definition 2.1.2).** For a space X, X<sub>B</sub> is the sheafification of the constant prestack with value X on affine schemes over k. Quasi-coherent sheaves on X<sub>B</sub> are local systems on X.

**Coaffine stack and cospectrum (Definition 3.1.2).** A commutative k-algebra A is coconnective if k ≅ π<sub>0</sub>A and π<sub>i</sub>A = 0 for i ≥ 1. Its cospectrum cSpec(A) is the stack that sends a connective algebra R to the space of maps A → R.
- For any stack Y, maps Y → cSpec(A) are the same as algebra maps from A to the global functions on Y.
- So each X<sub>B</sub> has an affinisation map to cSpec(C<sup>•</sup>(X; k)).

**n-affine (Definition 1.2.10).** A prestack 𝒳 is n-affine if the global sections functor, from quasi-coherent sheaves of n-categories on 𝒳 to k-linear presentable n-categories, is monadic.
- For n = 0 this is ordinary affineness: sheaves are recovered as modules over global functions.

**n-Koszul space (Definition 3.2.1).** A space X that is n-connected, nilpotent, and rationally of finite type: π<sub>i</sub>(X) ⊗ ℚ is finitely generated for i ≥ n + 1.

## Main results

**Theorem (criterion for n-affineness; Theorem 2.2.4).** Let n ≥ 1 and let X be a connected pointed space. Then X<sub>B</sub> is n-affine if and only if the global sections n-functor on local systems of (n−1)-categories on the loop space ΩX is monadic.
- Iterating (Theorem A in the introduction): X<sub>B</sub> is n-affine if and only if global sections from LocSys(Ω<sup>n</sup>X; k) to k-modules is monadic, given base points on the components of the iterated loop spaces.

**Theorem (a sufficient and a necessary condition; Corollary 2.3.4, Proposition 2.3.6).** Let n ≥ 1 and let k be a field of characteristic zero.
- If X is pointed and n-truncated, then X<sub>B</sub> is n-affine.
- If π<sub>n+1</sub>(X, x) ≠ 0 for some base point x, then X<sub>B</sub> is not n-affine.

**Theorem (higher Koszul duality; Theorem 3.2.9).** Let n ≥ 1, let k be a field of characteristic zero, and let X be a pointed (n+1)-Koszul space. Then pullback along the affinisation map is an equivalence of (∞, n+1)-categories from sheaves of n-categories on cSpec(C<sup>•</sup>(X; k)) to local systems of n-categories on X.
- Step 1: by the companion paper, these local systems are iterated modules over chains on Ω<sup>n+1</sup>X.
- Step 2: a key input (Proposition 3.2.14) uses rational homotopy theory and the structure of rational H-spaces.

**Theorem (examples; Corollary 3.4.1).** Let k be a field of characteristic zero, n ≥ 1 and j ≥ 1. The stack B<sup>n+2j</sup>𝔾<sub>a</sub> is n-affine. The stack B<sup>n+2j+1</sup>𝔾<sub>a</sub> is not. For n = 1 this extends a result of Gaitsgory on B𝔾<sub>a</sub> up to B<sup>4</sup>𝔾<sub>a</sub>.

## Note, then ignore

- Index shift. The introduction writes k = n + 1 for the level of the algebras and also uses a similar symbol for the field. Read slowly once, then move on.
- Size of categories. The paper fixes nested universes and uses hats and capitals for larger categories of categories. Safe to skip on a first reading.
- Ind-coherent modules. For n = 0, sheaves on the cospectrum equal ind-coherent C<sup>•</sup>(X)-modules, and the paper warns that its meaning of "ind-coherent" follows Lurie, not Gaitsgory and Rozenblyum. Safe to skip.
- Characteristic p. The authors leave it open. Their proof fails at one level because it uses rational homotopy theory. Safe to skip.
- Presentable n-categories. The whole framework rests on Stefanich's theory, recalled in Section 1. You can take it as a black box on a first pass.

## One next step

Open the paper and read Section I.1 from statement (1) to equivalence (I.1.6), on pages 3 to 5.
