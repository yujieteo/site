source: https://people.maths.ox.ac.uk/rossler/mypage/pdf-files/pol-def.pdf
slogan: Two constructions of special K-theory classes on an abelian scheme, one motivic and one from Arakelov theory, give the same class up to a factor.
basis: the introduction and the main theorem statements

## Before you start

This paper is likely to raise shame at missing background. It uses motivic cohomology, Deligne cohomology, Arakelov theory and analytic torsion on its first two pages. Few people hold all four at once, and you are allowed to feel lost among them. What you may want from it is one clean example of how an analytic object and an algebraic object turn out to be the same thing. Read for that pleasure first. Finishing the 27 pages can wait.

## The story

For cyclotomic fields and elliptic curves, number theorists have families of units that are compatible under norm maps. These units feed Iwasawa theory and Euler systems, and they come from polylogarithms and Eisenstein series. For abelian schemes of higher dimension the search stalled, because people looked only for units. The fix was to look for classes in K<sub>1</sub> instead. Two constructions then appeared. Kings built classes from the motivic polylogarithm. Maillot and Rössler built a current from the arithmetic Riemann-Roch theorem applied to the Poincaré bundle, and that current is a piece of the Bismut-Köhler higher analytic torsion form. Everyone guessed the two agree. This paper proves it: the regulator of the degree 0 polylogarithm equals the Maillot-Rössler current, up to the factor −2.

## Main definitions

**Trace operator and weight 0 part.** Let π : A → S be an abelian scheme of relative dimension g, and let a > 1 be an integer. On an open W ⊂ A with [a]<sup>−1</sup>(W) ⊂ W, the trace tr<sub>[a]</sub> is restriction to [a]<sup>−1</sup>(W) followed by push-forward along multiplication by a. The weight 0 part H(W)<sup>(0)</sup> is the generalised eigenspace of tr<sub>[a]</sub> for the eigenvalue 1.
- A class fixed by tr<sub>[a]</sub> is what "norm compatible" means here.

**Degree 0 polylogarithm.** Fix N > 1. The residue map along the N-torsion gives an isomorphism from H<sub>M</sub><sup>2g−1</sup>(A∖A[N], g)<sup>(0)</sup> to H<sub>M</sub><sup>0</sup>(A[N]∖ε(S), 0)<sup>(0)</sup>, where ε is the zero section. The class pol<sup>0</sup> is the unique element that maps to the fundamental class of A[N]∖ε(S).
- Here H<sub>M</sub><sup>i</sup>(X, j) is the j-th graded piece of K<sub>2j−i</sub>(X) ⊗ ℚ for the γ-filtration, so pol<sup>0</sup> lives in K<sub>1</sub> ⊗ ℚ.

**The current g<sub>A∨</sub>.** Maillot and Rössler show there is a unique class of currents g<sub>A∨</sub> of type (g−1, g−1) on A with three properties. It is a Green current for the zero section. With the zero section it gives, in the arithmetic Chow group, (−1)<sup>g</sup> times the degree g part of the push-forward of the arithmetic Chern character of the metrised Poincaré bundle. And [n]<sub>\*</sub> g<sub>A∨</sub> = g<sub>A∨</sub> for all n ≥ 2.
- Away from the zero section, (−1)<sup>g+1</sup> g<sub>A∨</sub> is the degree (g−1, g−1) part of the Bismut-Köhler higher analytic torsion form of the Poincaré bundle.

## Main results

**Theorem (axiomatic description; Corollary 2.2.2).** For N ≥ 2 the residue map is an isomorphism between the weight 0 parts of H<sub>M</sub><sup>2g−1</sup>(A∖A[N], g) and H<sub>M</sub><sup>0</sup>(A[N]∖ε(S), 0). So pol<sup>0</sup> is pinned down by two axioms: it has weight 0 and its residue is the fundamental class. Here S is irreducible, smooth and quasi-projective over a field.
- Step 1: the Deninger-Murre decomposition of the Chow motive of A splits motivic cohomology of A into tr<sub>[a]</sub>-eigenspaces.
- Step 2: the localisation sequence for A[N] ⊂ A is equivariant for tr<sub>[a]</sub>, so one can take weight 0 parts.

**Theorem (comparison; Theorem 1, which is Theorem 4.1.2).** Let S be smooth over a subfield k of ℂ. Then −2 · cyc<sub>an</sub>(pol<sup>0</sup>) = ([N]<sup>\*</sup> g<sub>A∨</sub> − N<sup>2g</sup> · g<sub>A∨</sub>) restricted to A∖A[N]. Here cyc<sub>an</sub> is the regulator into analytic Deligne cohomology with ℝ(g) coefficients. Also, cyc<sub>an</sub> is injective on the weight 0 part of H<sub>M</sub><sup>2g−1</sup>(A∖A[N], g).
- Step 1: the statement holds for A if it holds for one closed fibre. Both sides respect base change, so it is enough to treat a universal abelian scheme over a moduli space.
- Step 2: that moduli space has a fibre which is a product of elliptic curves, and there a direct computation checks the identity.

**Proposition (norm compatibility; Proposition 3.4.1).** In the sheaf-theoretic setting, for (a, N) = 1 the trace sends pol<sub>φ</sub> to pol<sub>[a]φ</sub>. For a ≡ 1 mod N the class pol<sub>φ</sub> is fixed, so it is norm compatible.

## Note, then ignore

- Why the obvious proof fails. Analytic Deligne cohomology has no residue maps, so one cannot check the two axioms on the analytic side. This explains the detour through moduli, and is safe to skip on a first reading.
- Rational coefficients. Motivic cohomology is defined here by Soulé's graded pieces of K-theory tensored with ℚ, so torsion information is lost. Safe to skip on a first reading.
- The base hypotheses. S must be irreducible, smooth and quasi-projective over a field so that the Deninger-Murre results apply. Safe to skip on a first reading.
- Wave-front sets. Section 4.1 uses currents with a controlled wave-front set so that pull-back along transverse maps is defined. Safe to skip on a first reading.
- The higher steps pol<sup>n</sup>. Section 3 builds the full polylogarithm with values in the logarithm sheaf, but the comparison theorem concerns only degree 0. Safe to skip on a first reading.

## One next step

Open the PDF and read only the Introduction on page 2, from the first line to the statement of Theorem 1.
