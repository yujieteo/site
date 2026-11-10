source: https://arxiv.org/pdf/2107.12727
slogan: Each affine Kac-Moody group, modulo scalars, is the points of one ordinary group scheme over Laurent polynomials, so infinite-dimensional objects become finite-type ones.
basis: the introduction and the main theorem statements

## Before you start

The paper is only ten pages, but the title names SGA3, a seminar with a reputation for being endless and severe. The feeling may be intimidation by that name, and a worry that you need the whole seminar first. The worry makes sense, and it can stay while you read. The paper uses just two tools: Galois descent and dual numbers. If you would like to see an affine Kac-Moody group as a concrete thing, the main theorem gives that in five lines. Read it for that picture, and stop when you like.

## The story

Affine Kac-Moody Lie algebras and groups are infinite-dimensional over a field K. They are usually built from generators and relations read off a generalised Cartan matrix. It has long been known that the untwisted ones look like a finite-dimensional group evaluated on Laurent polynomials K[t, t<sup>-1</sup>], and the twisted ones like fixed points of a diagram automorphism on such a loop group. The authors say this in one language. Take the simply connected Chevalley group scheme G, pass to the ring extension obtained by adjoining an r-th root of t, and descend along its Galois group, letting the group act through a diagram automorphism σ of order r. The result is a group scheme of finite type over the Laurent polynomial ring. Its points are the Kac-Moody group modulo scalars, and its Lie algebra, taken with dual numbers, is the affine algebra modulo its centre.

## Main definitions

**Affine type (g, σ).** A split simple finite-dimensional Lie algebra g of type X<sub>N</sub> with a Dynkin diagram automorphism σ of order r ∈ {1, 2, 3}. In Kac's notation this is X<sub>N</sub><sup>(r)</sup>. There are sixteen families.

**Twisted loop group.** Let R<sub>K</sub> = K[t, t<sup>-1</sup>] and let S(K) be the Galois extension of R<sub>K</sub> got by adjoining t<sup>1/r</sup>, with Galois group Γ. The twisted K-loop group is the group of Γ-fixed points of G(S(K)), where Γ acts on the ring and, through σ, on the root subgroups.
- r = 1: S(K) = R<sub>K</sub>, Γ is trivial, and this is the loop group G(K[t, t<sup>-1</sup>]).
- r = 3 (type D<sub>4</sub>) with no primitive cube root of unity in K: one adjoins it as well, and Γ is the symmetric group S<sub>3</sub>.

**The group scheme G<sub>(g,σ)</sub>.** Let F be the prime field, R = F[t, t<sup>-1</sup>], S the extension above for K = F, and A the Hopf algebra of G over R. Let Γ act on A ⊗<sub>R</sub> S through σ on A and through the Galois action on S. Then G<sub>(g,σ)</sub> is the R-group scheme whose Hopf algebra is the ring of Γ-invariants.
- It becomes isomorphic to G after base change to S, so it is reductive and smooth (Remark 4.2).

## Main results

**Theorem (main theorem; Theorem 2.1).** Let (g, σ) be an affine type, F a prime field of characteristic different from r, and K any field extension of F. There is a simply connected semisimple group scheme G<sub>(g,σ)</sub> over F[t, t<sup>-1</sup>], unique up to isomorphism, such that: (1) its group of K[t, t<sup>-1</sup>]-points is isomorphic to the simply connected affine Kac-Moody group over K modulo K<sup>×</sup>. (2) If F = ℚ, its Lie algebra over K[t, t<sup>-1</sup>] is naturally isomorphic to the derived affine Kac-Moody algebra over K modulo its one-dimensional centre.
- Step 1: descent identifies the points of G<sub>(g,σ)</sub> with the Γ-fixed points of G(S) (Lemma 4.3), and a base-change argument passes from F to K (Lemma 4.4).
- Step 2: for the Lie algebra, repeat the argument over dual numbers to get (g ⊗ S)<sup>Γ</sup> ≅ Lie(G<sub>(g,σ)</sub>)(R) (Lemma 4.6), then match it with the known generators and relations.

**Theorem (Kac-Moody groups are twisted loop groups; Theorem 3.3).** The affine Kac-Moody group over K modulo K<sup>×</sup> is isomorphic to the twisted K-loop group. The paper takes this from earlier work of the same authors, which shows that the Kac-Moody group is a one-dimensional central extension of the twisted loop group.

## Note, then ignore

- Characteristic different from r. The extension by t<sup>1/r</sup> is Galois only then. So r = 2 excludes 𝔽<sub>2</sub> and r = 3 excludes 𝔽<sub>3</sub>. Safe to skip on a first reading.
- Modulo K<sup>×</sup> and modulo the centre. The group scheme sees neither the central extension nor the degree derivation of the full affine algebra. Safe to skip.
- Lie algebra only over ℚ. Part (2) of the theorem is stated in characteristic 0, where the affine algebras are defined. Safe to skip.
- Two notations. Kac's D<sub>4</sub><sup>(3)</sup> is written G<sub>2</sub><sup>(3)</sup> in the Moody-Pianzola convention, after the relative root system over ℂ(t) (Remark 1.3). Safe to skip.
- The signs k<sub>α</sub> = ±1. They appear in the action of Γ on root subgroups and come from earlier papers. Safe to skip.

## One next step

Open the paper at Section 2 on page 4 and read Theorem 2.1 and the two sentences after it.
