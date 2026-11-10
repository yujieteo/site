source: https://arxiv.org/pdf/2001.04511
slogan: A motivic deformation turns part of the Adams spectral sequence into machine algebra, which pushes the 2-primary stable stems from dimension 61 to 90.
basis: the introduction and the main theorem statements

## Before you start

This is 144 pages, most of them tables with names like Δh<sub>2</sub><sup>2</sup> and x<sub>s,f</sub>. The honest feeling is overwhelm, with a little "I will never check this". Let that be true. Nobody reads this manuscript front to back, and the authors say so. If you want to see what a present-day frontier computation looks like, the first nine pages show it. Read those for pleasure and leave the tables as scenery.

## The story

The stable homotopy groups of spheres have a short definition and resist computation. Every known method works through a range and then stalls. At the prime 2, the hardest prime, the Adams spectral sequence had been pushed carefully to the 59-stem, and then to stems 60 and 61. The blocker is always the same: differentials and hidden extensions that no formal rule decides.

The new idea is to work with ℂ-motivic spectra, which deform classical stable homotopy theory. There is a map τ. Inverting τ gives back classical homotopy. Its cofibre Cτ is entirely algebraic: the motivic Adams spectral sequence for Cτ equals the algebraic Novikov spectral sequence, and a computer can run that in full. Naturality then carries differentials from Cτ to the sphere. Ad hoc arguments finish the job, up to a listed handful of unknowns.

## Main definitions

**Stable stem.** The group π<sub>k</sub> is the k-th stable homotopy group of the sphere spectrum. It is a finite abelian group for k > 0. The manuscript works throughout with 2-completed groups.

**Adams spectral sequence.** A spectral sequence that starts from the cohomology of the Steenrod algebra (Ext) and converges to the 2-completed stable stems. The work lies in its differentials and in hidden extensions.
- Classical: Ext has two gradings, the stem s and the Adams filtration f.
- ℂ-motivic: Ext has a third grading, the weight w, and a new element τ.

**The cofibre Cτ.** After 2-completion there is a motivic map τ : S<sup>0,−1</sup> → S<sup>0,0</sup>. Its cofibre Cτ sits in a cofibre sequence S<sup>0,0</sup> → Cτ → S<sup>1,−1</sup>, with a bottom cell and a top cell.

**Algebraic Novikov spectral sequence.** A purely algebraic spectral sequence that converges to the cohomology of the Hopf algebroid (BP<sub>\*</sub>, BP<sub>\*</sub>BP). That cohomology is the E<sub>2</sub>-page of the Adams–Novikov spectral sequence.

## Main results

**Theorem (motivic Adams spectral sequence to stem 90; Theorem 1.1).** The ℂ-motivic Adams spectral sequence for the ℂ-motivic sphere is as shown in the authors' charts up to the 90-stem. The exceptions are the undetermined differentials listed in their Table 9. All of these are d<sub>r</sub> with r ≥ 9.
- Step 1: compute by machine the motivic Ext groups and the whole algebraic Novikov spectral sequence, and identify the latter with the Adams spectral sequence for Cτ (a theorem of Gheorghe, Wang and Xu).
- Step 2: move differentials from Cτ to the sphere along the bottom and top cells. Settle the rest with Toda brackets and comparison with the motivic modular forms spectrum mmf.

**Corollary (classical version; Corollary 1.2).** The classical Adams spectral sequence for the sphere is known in the same range. One inverts τ, which means ignoring τ-torsion.

**Corollary (the groups; Corollary 1.3, Table 1).** Table 1 lists π<sub>k</sub> for all k ≤ 90. The information beyond dimension 61 is new. From dimension 84 on, some 2-primary groups are known only up to factors of 2 in their order, and in a few cases the group structure is open.

**Theorem (smooth structures on spheres; Theorem 1.6).** The last column of Table 1 gives the Kervaire–Milnor group Θ<sub>n</sub> of homotopy n-spheres for n ≤ 90, except n = 4. This uses the Kervaire–Milnor exact sequences that relate Θ<sub>n</sub> to π<sub>n</sub> modulo the image of J (Theorem 1.5, for n ≥ 5).

## Note, then ignore

- Two conjectures, not theorems. Conjecture 1.4 concerns the growth rate of the orders of the 2-primary stems. Conjecture 1.7 says that above dimension 4 only S<sup>5</sup>, S<sup>6</sup>, S<sup>12</sup>, S<sup>56</sup> and S<sup>61</sup> have a unique smooth structure. Read them as open. Safe to skip at first.
- Dependence on Voevodsky. The authors say their results do not logically need his computation of the motivic Steenrod algebra, because topological models of the same category now exist. Safe to skip.
- Naming of elements. Symbols such as Δx, Mx, gx and x<sub>s,f</sub> are bookkeeping for classes in Ext. Remark 1.8 warns that τQ<sub>3</sub> differs from the element of that name in Isaksen's earlier work. Safe to skip unless you read the tables.
- The three-way split in Table 1. Each group appears as 2-primary v<sub>1</sub>-torsion, odd-primary v<sub>1</sub>-torsion and a v<sub>1</sub>-periodic part. This is a display choice. Safe to skip.
- Companion charts. The authors treat their separate charts and spreadsheets as essential, and the PDF does not contain them. Safe to skip on a first reading of the introduction.

## One next step

Open the PDF at page 2 of the Introduction and read only the seven-step summary of the method, items (1) to (7).
