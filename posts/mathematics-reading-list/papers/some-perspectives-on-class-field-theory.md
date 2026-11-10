source: https://math.berkeley.edu/~avizeff/notes/CFT.pdf
slogan: One reciprocity map explains how polynomials factor modulo primes, and you can learn it three times: with ideals, with adeles, then with K-theory.
basis: the introduction and the main theorem statements

## Before you start

The opening paragraph lists ∞-categories and topological cyclic homology as background for the last section. That can raise shame at not knowing enough. It is fine to feel that. The author wrote each section for a different audience on purpose, and the first two subsections need arithmetic only. If you want to see why reciprocity laws matter before you learn the machinery, these 31 pages give that. Read the part you enjoy. The end can wait.

## The story

Take x<sup>2</sup> + 1. Modulo 5 it factors as (x + 2)(x − 2). Modulo 7 it stays irreducible. People wanted a rule for which primes do which. Dedekind's theorem turns the question into one about prime ideals in a number ring. Class field theory then answers it when the Galois group is abelian. A reciprocity map sends a group built from ideals to the abelian Galois group, and the image of a prime records how it splits. For x<sup>2</sup> + 1 the rule is p ≡ 1 mod 4. The notes tell this three times. First with ideal classes. Then with adeles, where the statements become clean. Last with Clausen's K-theoretic construction, which treats finite, local and global fields in one way.

## Main definitions

**Splitting type.** Let f be a monic polynomial of degree d with integer coefficients, and p a prime. Factor f modulo p into irreducibles. The degrees of the factors form a partition of d, the splitting type of f at p.
- Extreme case: f splits completely at p if the partition is 1 + 1 + ... + 1.

**Idele class group.** For a number field K, the group C<sub>K</sub> = K<sup>×</sup> \ 𝔸<sub>K</sub><sup>×</sup> of invertible adeles modulo the invertible elements of K (§3.1).
- Link to ideals: the quotient of C<sub>K</sub> by the integral units at the finite places and all of K<sub>v</sub><sup>×</sup> at the infinite places is the ideal class group Cl(K).

**Reciprocity map.** A homomorphism Ψ from an "automorphic" group to the abelianised absolute Galois group of a field F.
- Local field: the source is F<sup>×</sup>.
- Global field: the source is C<sub>F</sub>. For a finite field the source is ℤ, and 1 goes to Frobenius.

## Main results

The theorems carry names but no numbers in the notes.

**Theorem (Dedekind; §1.3).** Let f be an irreducible monic polynomial with integer coefficients and O = ℤ[x]/(f). For a prime p, the factorisation of f modulo p into powers of distinct irreducibles matches the factorisation of the ideal (p) in O into powers of prime ideals, with the same exponents.

**Theorem (local class field theory; §3.1).** Let K be a number field and v a place. There is a canonical injective map Ψ: K<sub>v</sub><sup>×</sup> → Gal<sup>ab</sup> of K<sub>v</sub>. For each finite abelian extension L<sub>w</sub>/K<sub>v</sub> it induces a surjection onto Gal(L<sub>w</sub>/K<sub>v</sub>) with kernel the norm group N(L<sub>w</sub><sup>×</sup>).
- Unramified case: for v nonarchimedean and unramified in L, units go to the identity and a uniformiser goes to Frobenius.
- Existence: L<sub>w</sub> ↦ N(L<sub>w</sub><sup>×</sup>) is an order-reversing bijection from finite abelian extensions to open subgroups of finite index.

**Theorem (global class field theory; §3.1).** Let K be a number field. There is a canonical map Ψ<sub>K</sub>: C<sub>K</sub> → Gal<sup>ab</sup> of K with dense image. It is surjective onto Gal(L/K) for every finite abelian L/K, and it is compatible with the local maps at every place. It induces an isomorphism C<sub>K</sub>/D<sub>K</sub> ≅ Gal<sup>ab</sup>, where D<sub>K</sub> is the identity component.
- Existence: abelian extensions of K, finite or infinite, correspond to closed subgroups of C<sub>K</sub> that contain D<sub>K</sub>, with the order reversed.
- Case K = ℚ: the abelianised Galois group of ℚ is the unit group of the profinite integers. This gives Kronecker–Weber (§3.2): every finite abelian extension of ℚ lies in some ℚ(ζ<sub>n</sub>). So p ≡ 1 mod n forces p to split completely.

**Theorem (K-theoretic reciprocity, due to Clausen; §4).** For every small idempotent-complete ℤ-linear stable ∞-category P there is a natural map of spectra Ψ<sub>P</sub>: K(lc<sub>P</sub>) → dK<sup>Sel</sup>(P). The source is the K-theory of locally compact objects over P. The target is Selmer K-homology.
- Recovery: for P the perfect complexes over a finite, local or global field F, and a fixed prime p, the map on π<sub>1</sub> gives the pro-p part of the classical reciprocity map of F.

## Note, then ignore

- No proofs. The notes omit all proofs and do not build the machinery. That is their plan. Safe to accept on a first reading.
- The ring ℤ[x]/(f). It can be smaller than the full ring of integers of the number field. The notes work with it directly to keep §1 elementary. Safe to skip.
- Profinite completion. The local map is injective but not surjective, because the Galois group is profinite and K<sub>v</sub><sup>×</sup> is not. Completing the source fixes this. Safe to skip.
- One prime at a time. The K-theoretic map recovers only the pro-p part for a fixed p. Running over all p gives the full map. Safe to skip.
- A sign. The K-theoretic map differs from the usual convention by a sign. This reflects the choice between arithmetic and geometric Frobenius. Safe to skip.

## One next step

Open the PDF and read §1.2, "Splitting types" (pages 3 to 4), up to the statement that x<sup>2</sup> + 1 splits modulo p exactly when p ≡ 1 mod 4.
