#!/usr/bin/env python3
"""Infer arXiv subject classes and topic tags for paper links.

Each record gets three kinds of tags, in this order:

1. arXiv subject classes (``math.NT``, ``hep-th``, ``cs.LG`` ...), strongest
   match first. The first one is used as ``primaryClass`` in the BibTeX export.
2. Topic tags (``modular-forms``, ``langlands-program`` ...).
3. Form and source tags (``lecture-notes``, ``survey``, ``arxiv`` ...).

Classes are inferred from the title and note with the keyword rules below, so
they describe the topic of every link, arXiv-hosted or not. For arXiv links,
``scripts/paper_links_bib.py --fetch-arxiv`` can pull the official categories
into ``data/arxiv-cache.json``; ``tag_record`` then puts those first.

Usage:
    python scripts/paper_tags.py            # report tag coverage, change nothing
    python scripts/paper_tags.py --write    # add or refresh tags in the YAML
"""

import argparse
import json
import re
import sys
from collections import Counter
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent.parent
PAPERS = ROOT / "data" / "paper-links" / "paper-links.yaml"
ARXIV_CACHE = ROOT / "data" / "arxiv-cache.json"

ARXIV_ID = re.compile(
    r"arxiv\.org/(?:abs|pdf|html|format)/"
    r"(?P<id>\d{4}\.\d{4,5}|[a-z][a-z\-]*(?:\.[A-Z]{2})?/\d{7})",
    re.IGNORECASE,
)

# (topic tag, arXiv classes, pattern). Patterns are case-insensitive regexes
# matched against "title. note". Order does not matter; scores decide ranking.
TOPICS = [
    # --- Number theory ---------------------------------------------------
    ("number-theory", ["math.NT"], r"number theor|arithmetic of|\bprimes?\b|diophantine"),
    ("algebraic-number-theory", ["math.NT"], r"number fields?|algebraic integers|quaternion algebras?|hilbert symbols?|singular series|unit groups?|herbrand|stark (?:units|conjecture)|cubic fields?|quadratic fields?|ring of integers|dedekind domain|ideal class|class numbers?|unit theorem|\bideles?\b|idele class"),
    ("analytic-number-theory", ["math.NT"], r"analytic number|prime number theorem|dirichlet (?:l-|series|polynomial|character)|sieve|zero[-– ]density|exponential sums?|circle method|major arcs|minor arcs|large sieve|short intervals"),
    ("riemann-zeta", ["math.NT"], r"riemann (?:zeta|hypothesis)|zeta function|\\zeta\(s\)|zeros of the riemann"),
    ("l-functions", ["math.NT"], r"l-functions?|l-series|l-values|\$l\(|selberg class|functional equation"),
    ("class-field-theory", ["math.NT"], r"class field|artin reciprocity|artin map|kronecker[-– ]weber|ray class|reciprocity law|hilbert class field|class formation|local class field|lubin[-– ]tate"),
    ("adeles", ["math.NT"], r"ad[eè]les?|ad[eè]lic|\\mathbb\{a\}_|tate'?s thesis"),
    ("galois-theory", ["math.NT", "math.RA"], r"galois (?:theory|group|extension|correspondence)|inverse galois|field extensions?"),
    ("galois-representations", ["math.NT"], r"galois representations?|symmetric powers?|automorphy|\\ell-adic representation|p-adic representation|modularity lifting|taylor[-– ]wiles|deformations? of galois"),
    ("galois-cohomology", ["math.NT"], r"galois cohomology|poitou[-– ]tate|tate[-– ]nakayama|local duality|arithmetic duality"),
    ("modular-forms", ["math.NT"], r"modular forms?|cusp forms?|eisenstein series|hecke (?:operator|eigenform)|modular curves?|theta (?:series|functions?)|siegel modular|hida famil|coleman famil|q-expansion"),
    ("automorphic-forms", ["math.NT", "math.RT"], r"automorphic|trace formula|endoscop|theta correspondence|siegel[-– ]weil|periods? of automorphic"),
    ("langlands-program", ["math.NT", "math.RT"], r"langlands|reciprocity conjecture|functoriality|satake|gan[-– ]gross[-– ]prasad|gross[-– ]prasad|\bggp\b|shtuka|chtouca"),
    ("geometric-langlands", ["math.AG", "math.RT"], r"geometric langlands|bun_?\{?g|\bbun ?g\b|hecke eigensheaf|betti geometric|local systems? on (?:a )?curves?|kapustin[-– ]witten"),
    ("p-adic-langlands", ["math.NT"], r"p-adic langlands|categorical p-adic|\(\\varphi, ?\\gamma\)|phi,gamma|\(φ,\s?γ\)"),
    ("relative-langlands", ["math.RT", "math.NT"], r"relative langlands|spherical variet|hyperspherical|toric periods|sakellaridis"),
    ("elliptic-curves", ["math.NT", "math.AG"], r"elliptic curves?|weierstrass (?:equation|form)|mordell[-– ]weil|birch and swinnerton|\bbsd\b|tate[-– ]shafarevich|complex multiplication|selmer groups?"),
    ("abelian-varieties", ["math.AG", "math.NT"], r"abelian variet|abelian surfaces?|jacobian variet|polarization|p-divisible|dieudonn[eé]"),
    ("shimura-varieties", ["math.NT", "math.AG"], r"shimura variet|shimura curves?|siegel modular variet|andr[eé][-– ]oort|special points"),
    ("arithmetic-geometry", ["math.NT", "math.AG"], r"arithmetic geometry|arithmetic (?:surfaces?|schemes?|variet)|rational points|integral points|mordell|faltings|chabauty|arakelov|heights?\b|bogomolov|equidistribution|\\operatorname\{spec\} ?\\mathbb\{z\}|spec ?z\b"),
    ("anabelian-geometry", ["math.NT", "math.AG"], r"anabelian|grothendieck[-– ]teichm|deligne[-– ]ihara|dessins? d'enfants|belyi|minus three points|section conjecture|\\pi_1\^\{?\\text\{[eé]t"),
    ("arithmetic-statistics", ["math.NT"], r"arithmetic statistics|cohen[-– ]lenstra|distribution of (?:class groups|ranks|selmer)|bhargava|counting number fields|malle"),
    ("p-adic-numbers", ["math.NT"], r"p-adic (?:numbers|integers|fields?|analysis)|\\mathbb\{q\}_p|\\mathbb\{z\}_p|hensel"),
    ("p-adic-hodge-theory", ["math.NT", "math.AG"], r"p-adic hodge|fontaine|period domains?|weakly admissible|fargues[-– ]rapoport|period rings?|b_\{?dr|crystalline (?:representation|cohomology|comparison)|de rham representation|hodge[-– ]tate|fargues[-– ]fontaine|perfectoid|tilting equivalence|breuil|kisin"),
    ("prismatic-cohomology", ["math.AG", "math.NT"], r"prism|q-de rham|q-crystalline|habiro|f-gauge|syntomic"),
    ("perfectoid-spaces", ["math.AG", "math.NT"], r"perfectoid|diamonds?\b|v-stacks?|pro-[eé]tale|adic spaces?|huber"),
    ("iwasawa-theory", ["math.NT"], r"iwasawa|main conjecture|p-adic l-function|cyclotomic \\mathbb\{z\}_p"),
    ("cyclotomic-fields", ["math.NT"], r"cyclotomic (?:field|extension|integer)|roots of unity|\\zeta_m|\\zeta_n|kummer theory"),
    ("quadratic-forms", ["math.NT"], r"quadratic forms?|sums of (?:two|three|four) squares|genus theory|binary quartic|ternary cubic"),
    ("function-fields", ["math.NT", "math.AG"], r"function fields?|curves over finite fields|\\mathbb\{f\}_q\(t\)|drinfeld modules?"),
    ("field-with-one-element", ["math.AG", "math.NT"], r"field with one element|\\mathbb\{f\}_1|\bf1\b|\bf_1\b|absolute (?:geometry|cyclotomy)|arithmetic site|scaling site"),
    ("motives", ["math.AG", "math.NT"], r"\bmotiv(?:e|es|ic)\b|periods and|polylogarithm|regulators?|beilinson|bloch[-– ]kato|mixed tate"),
    ("zeta-functions", ["math.NT", "math.AG"], r"zeta functions?|weil conjectures?|hasse[-– ]weil|congruence zeta"),

    # --- Algebraic geometry ---------------------------------------------
    ("algebraic-geometry", ["math.AG"], r"algebraic geometry|algebraic variet|kodaira vanishing|ample (?:line )?bundles?|torelli|formal patching|rigid analytic|\bvariet(?:y|ies)\b|projective (?:geometry|space|plane|line)|k3 surfaces?|brill[-– ]noether|surfaces? of general type|del pezzo|\bschemes?\b|projective variet|affine variet|nullstellensatz|zariski"),
    ("schemes", ["math.AG"], r"\bschemes?\b|spec ?\(|\\operatorname\{spec\}|locally ringed|structure sheaf|fpqc|fppf|flatness|flat morphism|faithfully flat"),
    ("sheaf-theory", ["math.AG", "math.AT"], r"sheaf|sheaves|presheaf|presheaves|cosheaf|cosheaves|stalk"),
    ("sheaf-cohomology", ["math.AG", "math.AT"], r"sheaf cohomology|[čc]ech cohomology|injective resolution|derived functor cohomology|serre duality|gaga|coherent cohomology"),
    ("etale-cohomology", ["math.AG", "math.NT"], r"[eé]tale|\\ell-adic|weil ii|l-adic sheaves|lefschetz trace|proper base change|smooth base change"),
    ("perverse-sheaves", ["math.AG", "math.RT"], r"perverse|intersection cohomology|decomposition theorem|hard lefschetz|parity sheaves|character sheaves|t-structures?"),
    ("six-functor-formalism", ["math.AG", "math.CT"], r"six[-– ]functor|six operations|verdier duality|proper pushforward|exceptional (?:pullback|inverse)|projection formula|base change formula|f_!|f\^!"),
    ("derived-categories", ["math.AG", "math.CT"], r"derived categor|triangulated|distinguished triangles?|fourier[-– ]mukai|semiorthogonal|exceptional collections?|t-structures?|weight structures?|dg[-– ]categor"),
    ("stacks", ["math.AG"], r"\bstacks?\b|algebraic stacks?|moduli stacks?|gerbes?|groupoids? fibered|categories fibered|fibered categor|descent data"),
    ("derived-algebraic-geometry", ["math.AG", "math.AT"], r"derived (?:algebraic )?geometry|derived stacks?|derived schemes?|shifted symplectic|ind-coherent|indcoh|quasi-coherent sheaves on (?:derived|stacks)|dag\b|simplicial commutative|animated rings?|anima\b"),
    ("moduli-spaces", ["math.AG"], r"moduli|hilbert schemes?|quot schemes?|stable curves|\\overline\{\\mathcal\{m\}\}|\\mathcal\{m\}_\{g|parameter spaces?"),
    ("enumerative-geometry", ["math.AG"], r"enumerative|gromov[-– ]witten|donaldson[-– ]thomas|virtual (?:class|fundamental)|counting curves|curve counting|intersection numbers|witten'?s conjecture|vafa[-– ]witten|pandharipande"),
    ("birational-geometry", ["math.AG"], r"birational|minimal model|\bmmp\b|canonical ring|flips?\b|log general type|fano variet|k-stab|kodaira dimension|blow-?ups? along|blow-?up squares?|blowing up|geometry of blow-?ups"),
    ("hodge-theory", ["math.AG"], r"hodge (?:theory|structure|decomposition|numbers|conjecture|star|filtration)|variations? of hodge|period maps?|mixed hodge|hodge[-– ]helmholtz"),
    ("intersection-theory", ["math.AG"], r"intersection theory|chow groups?|chern class|segre class|cycle class|todd class|grothendieck[-– ]riemann[-– ]roch|riemann[-– ]roch"),
    ("toric-geometry", ["math.AG", "math.CO"], r"toric variet|toric geometry|fans?\b and|moment polytope|newton polytope"),
    ("tropical-geometry", ["math.AG", "math.CO"], r"tropical|semifields?|max-plus|valuated matroid"),
    ("mirror-symmetry", ["math.AG", "math.SG", "hep-th"], r"mirror symmetry|homological mirror|\bhms\b|syz|calabi[-– ]yau|landau[-– ]ginzburg"),
    ("complex-geometry", ["math.CV", "math.AG"], r"complex (?:manifold|geometry|analytic|variet)|k[aä]hler|holomorphic|riemann surfaces?|compact complex"),
    ("curves", ["math.AG"], r"algebraic curves?|riemann surfaces?|genus[-– ]?\$?g|jacobian of|plane curves?|curves over"),
    ("singularities", ["math.AG"], r"singularit|ordinary double point|milnor fib|resolution of singular|vanishing cycles|nearby cycles|monodromy"),
    ("algebraic-groups", ["math.AG", "math.RT", "math.GR"], r"algebraic groups?|reductive groups?|group schemes?|sga ?3|borel subgroup|parabolic subgroup|tori\b|weyl group|root datum|root data|bruhat[-– ]tits|affine grassmannian|flag variet"),
    ("formal-groups", ["math.AT", "math.NT"], r"formal groups?|formal group laws?|lazard|lubin[-– ]tate|height[-– ]n|morava"),
    ("commutative-algebra", ["math.AC"], r"commutative algebra|noetherian|local rings?|regular rings?|cohen[-– ]macaulay|localization of rings|primary decomposition|valuation rings?|krull|flatness|completion|henselian|almost (?:ring|mathematics)|dedekind domains?|integral closure"),
    ("model-theory-in-geometry", ["math.LO", "math.AG"], r"o-minimal|tame topology|pila[-– ]wilkie|ax[-– ]grothendieck|spreading out"),

    ("condensed-mathematics", ["math.AG", "math.FA", "math.CT"], r"condensed|solid (?:modules?|abelian)|analytic rings?|liquid"),
    ("deformation-theory", ["math.AG"], r"deformation theor|deformations? of|formal moduli|obstruction theor|kodaira[-– ]spencer|formal deformation"),
    ("descriptive-set-theory", ["math.LO"], r"descriptive set|borel equivalence|polish (?:spaces?|groups?)|treeab|analytic sets?|set-theoretic saturation|ultrapowers?"),
    ("surgery-and-l-theory", ["math.GT", "math.KT"], r"surgery theory|surgery exact|(?<!with )surgery on manifolds|l-theory|\$l\$-theory|wall groups?|novikov conjecture"),
    ("toric-topology", ["math.AT", "math.CO"], r"toric topology|moment-angle|quasitoric"),
    ("spectral-geometry", ["math.DG", "math.SP"], r"spectral geometry|heat kernels?|laplace[-– ]beltrami|weyl law|isospectral|eigenvalues of the laplacian"),
    ("automata-and-formal-languages", ["cs.FL"], r"automata|regular (?:languages?|expressions?)|formal languages?|kleene|context-free"),
    ("groupoids", ["math.CT", "math.OA"], r"groupoids?"),
    ("general-mathematics", ["math.GM"], r"tripos|undergraduate (?:mathematics|pure)|module guides?|notes archive|comprehensive .*reference|mathematical notes|course archive"),
    # --- Topology -------------------------------------------------------
    ("algebraic-topology", ["math.AT"], r"algebraic topology|\bhomotopy|\bhomology|cw[-– ]complex|fundamental group|covering spaces?|fibrations?|cofibrations?"),
    ("homotopy-theory", ["math.AT"], r"homotopy theor|homotopy types?|gamma-spaces?|\\gamma-spaces?|infinite loop spaces?|model categor|quillen|simplicial sets?|kan complex|weak equivalence|localization of spaces"),
    ("stable-homotopy-theory", ["math.AT"], r"stable homotopy|j-homomorphism|image of \$?j|hopf invariant|\bspectra\b|ring spectra|e_\\infty|e-infinity|symmetric spectra|brown representab|adams spectral|steenrod|dyer[-– ]lashof|stable homotopy groups of spheres|kervaire"),
    ("chromatic-homotopy-theory", ["math.AT"], r"chromatic|morava|telescope conjecture|redshift|\bk\(n\)|lubin[-– ]tate spectr|nilpotence|periodicity theorem|complex cobordism|brown[-– ]peterson"),
    ("k-theory", ["math.KT", "math.AT"], r"k-theor|\bk_0\b|\bk_1\b|grothendieck group|bott periodicity|twisted k|efimov"),
    ("algebraic-k-theory", ["math.KT", "math.AG"], r"algebraic k-theor|quillen'?s? q-construction|plus construction|waldhausen|selmer k-theory|k-theory of rings|redshift"),
    ("topological-hochschild-homology", ["math.AT", "math.KT"], r"hochschild|\bthh\b|\btc\b|topological cyclic|cyclotomic spectr|cyclic homology|trace methods"),
    ("cobordism", ["math.AT", "math.GT"], r"cobordism|thom spectrum|pontryagin[-– ]thom|bordism"),
    ("characteristic-classes", ["math.AT", "math.DG"], r"characteristic class|chern class|stiefel[-– ]whitney|pontryagin class|euler class|splitting principle|chern[-– ]weil"),
    ("differential-cohomology", ["math.AT", "math.DG", "hep-th"], r"differential cohomology|differential k|deligne cohomology|cheeger[-– ]simons|gerbes? with connection|higher gauge"),
    ("equivariant-topology", ["math.AT"], r"equivariant (?:cohomology|homotopy|k-theory|topology)|atiyah[-– ]bott|localization theorem|borel construction"),
    ("motivic-homotopy-theory", ["math.AG", "math.AT"], r"a\^?1[-– ]homotopy|\\mathbb\{a\}\^1-homotopy|motivic homotopy|motivic spectr|morel[-– ]voevodsky"),
    ("homological-stability", ["math.AT", "math.GT"], r"homological stability|stable homology|mumford conjecture|madsen[-– ]weiss|representation stability|fi-modules?|steinberg modules?"),
    ("geometric-topology", ["math.GT"], r"manifolds? topology|surgery theory|smoothing theory|h-cobordism|exotic spheres?|diffeomorphism groups?|mapping class groups?|3-manifolds?|4-manifolds?|heegaard|lefschetz pencil"),
    ("knot-theory", ["math.GT"], r"\bknots?\b|link invariants?|jones polynomial|khovanov|concordance|braid"),
    ("floer-homology", ["math.SG", "math.GT"], r"floer|heegaard floer|knot floer|instanton homology|monopole"),
    ("morse-theory", ["math.GT", "math.DG"], r"morse theory|morse function|critical points|handle decomposition"),
    ("persistent-homology", ["math.AT", "cs.CG"], r"persisten(?:t|ce) homology|persistence|topological data analysis|\btda\b|barcodes?"),
    ("fixed-point-theorems", ["math.AT", "math.GN"], r"fixed point"),
    ("point-set-topology", ["math.GN"], r"point-set|partial functions|projective limits|general topology|compactification|stone[-– ][cč]ech|ultrafilters?|separation axioms?|compact hausdorff"),

    # --- Category theory, logic, foundations ----------------------------
    ("category-theory", ["math.CT"], r"categor(?:y|ies|ical)|functors?|natural transformations?|adjunctions?|adjoint functors?|yoneda|monads?|limits and colimits|kan extensions?"),
    ("higher-category-theory", ["math.CT", "math.AT"], r"infinity-categor|\\infty-categor|∞-categor|\(\\infty, ?1\)|quasi-?categor|higher categor|straightening|unstraightening|kerodon|higher algebra|stable infinity|stable \\infty|2-categor|bicategor"),
    ("topos-theory", ["math.CT", "math.LO"], r"topos|toposes|topoi|grothendieck topolog|(?<!web )(?<!internet )(?<!web-)(?<!mobile )(?<!static )(?<!cross-)(?<!multi-)(?<!remote )(?<!construction )(?<!job )(?<!field )(?<!test )(?<!active )(?<!binding )(?<!building )(?<!\w)sites?\b(?! (?:map|visit|admin|search|engine|content|builder|design|traffic|hosting|reliability|generat))|internal language|geometric morphism|subobject classifier"),
    ("operads", ["math.AT", "math.CT"], r"operads?|e_n[-– ]algebras?|e_k[-– ]algebras?|little disks?|factorization (?:algebra|homology)"),
    ("monoidal-categories", ["math.CT", "math.QA"], r"monoidal|tensor categor|fusion categor|braided|drinfeld cent|tannak|modular tensor"),
    ("enriched-and-formal-category-theory", ["math.CT"], r"enriched|codensity|chu construction|double categor|profunctor|formal category|fibrations? of categor|grothendieck construction|pseudofunctor"),
    ("descent-theory", ["math.CT", "math.AG"], r"(?<!gradient )(?<!double )(?<!mirror )(?<!coordinate )descent|hypercover|cohomological descent|[čc]ech nerve|effective epimorphism"),
    ("homological-algebra", ["math.CT", "math.RA"], r"homological algebra|abelian categor|derived functors?|\bext\b|\btor\b|chain complex|spectral sequences?|(?:projective|injective|free|flat) resolutions?|diagram chas|snake lemma|five lemma|mayer[-– ]vietoris"),
    ("mathematical-logic", ["math.LO"], r"\blogic\b|model theory|skolem|formal mathematics|set theory|proof theory|axiom|g[oö]del|incompleteness|forcing|large cardinals?|vop[eě]nka|ultrafilter|decidab|computab|turing"),
    ("type-theory", ["cs.LO", "math.LO"], r"type theory|homotopy type|univalen|curry[-– ]howard|dependent types?|lambda calculus|\bhott\b|cubical"),
    ("constructive-mathematics", ["math.LO", "cs.LO"], r"constructive|intuitionistic|synthetic|internal logic|modal operators?"),
    ("formalization", ["cs.LO", "math.HO"], r"\blean\b|mathlib|\bcoq\b|\bagda\b|isabelle|proof assistant|formaliz|formalis"),
    ("computability", ["cs.LO", "math.LO", "cs.CC"], r"turing machines?|computab|halting|kolmogorov complexity|effective complexity|algorithmic information"),
    ("nonstandard-analysis", ["math.LO", "math.FA"], r"nonstandard|non-standard analysis|loeb measure|hyperreal|infinitesimal"),

    # --- Representation theory, algebra ---------------------------------
    ("representation-theory", ["math.RT"], r"representation theor|representations? of|irreducible representations?|characters? of|induction and restriction|induced representation|highest weight|verma"),
    ("lie-theory", ["math.RT", "math.RA"], r"lie (?:algebras?|groups?|theory|cohomology)|\\mathfrak\{g\}|\\mathfrak\{gl\}|\\mathfrak\{sl\}|root systems?|dynkin|cartan|killing form|octonion|exceptional lie|g_2\b|e_8"),
    ("p-adic-groups", ["math.RT", "math.NT"], r"p-adic (?:groups?|lie groups?|reductive)|bruhat[-– ]tits|smooth representations|supercuspidal|jacquet|bernstein center|hecke algebras?"),
    ("geometric-representation-theory", ["math.RT", "math.AG"], r"geometric representation|slodowy|nilpotent orbits?|w-algebras?|howe duality|springer (?:correspondence|fiber|resolution)|kazhdan[-– ]lusztig|lusztig|soergel|category o\b|d-modules?|beilinson[-– ]bernstein|flag variet|geometric satake|affine grassmannian|nilpotent cone"),
    ("quantum-groups", ["math.QA", "math.RT"], r"quantum groups?|hopf algebras?|quantum enveloping|r-matri|yang[-– ]baxter|quasi-triangular|quantum dilogarithm"),
    ("vertex-algebras", ["math.QA", "hep-th"], r"vertex (?:operator )?algebras?|chiral algebras?|virasoro|conformal field|affine kac[-– ]moody|kac[-– ]moody"),
    ("quiver-representations", ["math.RT", "math.RA"], r"quiver|bernstein[-– ]gelfand[-– ]ponomarev|reflection functors|cluster algebras?|mutations?"),
    ("group-theory", ["math.GR"], r"group theory|finite groups?|quotient groups?|cosets?|normal subgroups?|isomorphism theorems?|sylow|simple groups?|fusion systems?|p-groups?|group actions?|coxeter|artin groups?|heisenberg groups?|classical groups?|arithmetic groups?"),
    ("geometric-group-theory", ["math.GR", "math.GT"], r"geometric group|outer space|culler[-– ]vogtmann|higman[-– ]thompson|cat\(0\)|hyperbolic groups?|right-angled artin|cubulat|quasi-isometr|coxeter groups?|virtual cohomological dimension"),
    ("group-cohomology", ["math.GR", "math.AT"], r"group cohomology|cohomology of groups|h\^\*\(g|lie algebra cohomology|continuous cohomology|condensed group cohomology"),
    ("noncommutative-algebra", ["math.RA"], r"noncommutative (?:algebra|rings?)|division algebras?|azumaya|brauer groups?|central simple|morita|semisimple"),
    ("linear-algebra", ["math.RA", "math.NA"], r"linear algebra|matri(?:x|ces)|eigenvalues?|singular value|determinant|matrix analysis|matrix computations"),
    ("abstract-algebra", ["math.RA", "math.GR"], r"abstract algebra|rings? and fields|modules over|galois theory|group theory|advanced algebra"),
    ("symmetric-functions", ["math.CO", "math.RT"], r"symmetric functions?|whittaker polynomials|q-whittaker|hall[-– ]littlewood|schur (?:functions|polynomials)|young tableaux|littlewood[-– ]richardson|macdonald polynomials"),

    # --- Analysis --------------------------------------------------------
    ("harmonic-analysis", ["math.CA"], r"harmonic analysis|fourier|maximal (?:functions?|inequalit|operators?)|weighted (?:norm|inequalit)|\bt\(1\)|riesz potentials?|hardy[-– ]littlewood maximal|hilbert transform|calder[oó]n[-– ]zygmund|singular integrals?|multipliers?|paraproduct|littlewood[-– ]paley|restriction (?:conjecture|estimate|theorem)|bochner[-– ]riesz|kakeya|decoupling|interpolation"),
    ("functional-analysis", ["math.FA"], r"functional analysis|banach|hilbert spaces?|normed spaces?|operators? on|bounded operators?|compact operators?|spectral theor|semigroups?|sobolev|distributions?\b|topological vector"),
    ("real-analysis", ["math.CA"], r"real analysis|h[oö]lder'?s inequality|young'?s inequality|measure theory|lebesgue|integration|limsup|liminf|convergence|continuity|differentiab|calculus"),
    ("complex-analysis", ["math.CV"], r"complex analysis|holomorphic functions?|analytic continuation|meromorphic|conformal maps?|bloch space|hardy space|bergman|riemann mapping|several complex"),
    ("pde", ["math.AP"], r"\bpdes?\b|partial differential|nonlocal (?:differential )?operators?|elliptic (?:equations?|operators?|regularity)|parabolic|hyperbolic equations?|wave equations?|schr[oö]dinger equation|heat equation|navier[-– ]stokes|euler equations?|dispersive|hypoellipt|fractional laplacian|regularity theory"),
    ("ode-and-dynamical-systems", ["math.DS", "math.CA"], r"ordinary differential|differential (?:equations?|modules?|galois)|\bodes?\b|picard[-– ]lindel|dynamical systems?|ergodic|flows?\b on|horocycle|mixing\b|chaos|complex dynamics|attractors?|shabat"),
    ("ergodic-theory", ["math.DS"], r"ergodic|invariant measures?|equidistribution|unique ergodicity|horocycle|homogeneous dynamics"),
    ("microlocal-analysis", ["math.AP", "math.SG"], r"microlocal|wave front|pseudodifferential|fourier integral operators?|singular support"),
    ("geometric-analysis", ["math.DG", "math.AP"], r"geometric analysis|ricci flow|mean curvature flow|minimal surfaces?|harmonic maps?|kähler[-– ]einstein|yamabe|bamler|perelman"),
    ("convex-analysis", ["math.OC", "math.MG"], r"convex(?:ity| analysis| sets?| functions?| optimization| geometry)|convex bodies"),
    ("special-functions", ["math.CA"], r"special functions?|hypergeometric|gamma functions?|bessel|elliptic integrals?|dilogarithm"),
    ("asymptotics-and-resummation", ["math.CA", "math-ph"], r"resurgen|borel (?:resummation|summation)|asymptotic series|divergent series|summation methods?|fourier summation"),

    # --- Operator algebras, noncommutative geometry ---------------------
    ("operator-algebras", ["math.OA"], r"operator algebras?|c\^?\*\$?[-– ]algebras?|c\*-algebras?|crossed products?|quantum (?:super)?channels?|operator[-– ]systems?|composition operators?|beurling|von neumann|factors? of type|type iii|type ii|subfactors?|planar algebras?|tomita|modular theory|kms states?|cartan subalgebras?"),
    ("noncommutative-geometry", ["math.OA", "math.QA", "math-ph"], r"noncommutative geometry|non-commutative geometry|spectral triples?|fredholm modules?|cyclic cohomology|connes|spectral action|bost[-– ]connes|dixmier trace|noncommutative space"),
    ("free-probability", ["math.OA", "math.PR"], r"free probability|free cumulants?|non-crossing partitions|voiculescu|freeness"),
    ("index-theory", ["math.DG", "math.KT"], r"index theor|atiyah[-– ]singer|dirac operators?|eta invariant|analytic torsion|quillen metric|hypoelliptic laplacian|kk-theory|baum[-– ]connes"),

    # --- Differential and symplectic geometry ---------------------------
    ("differential-geometry", ["math.DG"], r"differential geometry|riemannian|curvature|geodesics?|holonomy|principal bundles?|spin structures?|riemannian metrics?|differential forms?|de rham"),
    ("differential-topology", ["math.GT", "math.DG"], r"differential topology|differentiable viewpoint|transversality|smooth manifolds?|tubular neighbou?rhood|whitney|sard"),
    ("symplectic-geometry", ["math.SG"], r"symplectic|metaplectic|maslov|hamiltonian|moment maps?|lagrangian submanifold|fukaya|pseudoholomorphic|j-holomorphic|poisson"),
    ("diffeology-and-generalized-smooth-spaces", ["math.DG", "math.CT"], r"diffeolog|smooth sets?|c\^\\infty[-– ]rings?|derived differential|derived manifolds?|d-manifolds?|kuranishi|lie groupoids?|stacky"),
    ("geometric-invariant-theory", ["math.AG", "math.SG"], r"geometric invariant theory|\bgit\b|stability conditions?|bridgeland|semistab|kempf[-– ]ness|hilbert[-– ]mumford"),

    # --- Combinatorics, discrete math -----------------------------------
    ("combinatorics", ["math.CO"], r"combinatori|enumerat|pigeonhole|polya|generating functions?|partitions? of|bijective"),
    ("graph-theory", ["math.CO"], r"graph theory|\bgraphs?\b|chromatic polynomial|(?<!score )\bmatchings?\b|network flows?|expanders?|spectral graph|ramsey"),
    ("extremal-combinatorics", ["math.CO"], r"extremal|tree packings?|subgraphs?|tur[aá]n|ramsey|regularity lemma|dependent random choice|sunflower|hypergraph|removal lemma|graph limits|graphons?|homomorphism (?:density|domination)"),
    ("additive-combinatorics", ["math.CO", "math.NT"], r"additive combinatori|roth'?s theorem|szemer[eé]di|arithmetic progressions?|gowers norms?|pl[uü]nnecke|ruzsa|freiman|sum[-– ]?set|sumsets?|sum-product|polynomial freiman|marton|higher order fourier"),
    ("probabilistic-combinatorics", ["math.CO", "math.PR"], r"probabilistic method|janson|lov[aá]sz local lemma|\blll\b|random graphs?|erd[oő]s[-– ]r[eé]nyi|second moment|threshold|achlioptas|bounded differences"),
    ("algebraic-combinatorics", ["math.CO", "math.RT"], r"algebraic combinatori|f-vectors?|\$f\$-vectors?|face vectors?|posets?|partially ordered|linear extensions?|contingency tables|matroids?|log-concav|lorentzian polynomials?|coxeter|bruhat (?:order|graph)|simplicial complex|chromatic polynomials?|hyperplane arrangements?|christoffel|combinatorics on words"),
    ("discrete-geometry", ["math.CO", "math.MG"], r"discrete geometry|polytopes?|cayley trick|mixed subdivisions?|lattice points|triangulations"),

    # --- Probability and statistics -------------------------------------
    ("probability", ["math.PR"], r"probabilit|random (?:variable|walk|process)|stochastic|martingale|markov|brownian|concentration|large deviations?|central limit|chernoff|sub-gaussian"),
    ("stochastic-analysis", ["math.PR", "math.AP"], r"stochastic (?:calculus|pdes?|differential|analysis|odes?)|itô|ito calculus|malliavin|regularity structures|rough paths?|paracontrolled|spdes?|kpz"),
    ("statistical-mechanics", ["math.PR", "math-ph", "cond-mat.stat-mech"], r"statistical mechanics|percolation|\bising\b|\bpotts\b|random[-– ]cluster|fortuin[-– ]kasteleyn|phase transitions?|\bgibbs\b|lattice models?|dimers?|self-avoiding|\bsle\b|critical exponents?"),
    ("random-matrix-theory", ["math.PR", "math-ph"], r"random matri|gue\b|goe\b|wigner|eigenvalue statistics|tracy[-– ]widom|circular ensemble"),
    ("concentration-of-measure", ["math.PR", "cs.DS"], r"concentration (?:inequalit|of measure)|chernoff|hoeffding|azuma|mcdiarmid|sub-gaussian|talagrand|bounded differences"),
    ("markov-chains", ["math.PR", "cs.DS"], r"markov chains?|mixing times?|random walks?|coupling from|metropolis|glauber|mcmc|monte carlo"),
    ("statistics", ["math.ST", "stat.ME"], r"statisti(?:cs|cal inference)|estimat(?:or|ion)|hypothesis test|bayesian|regression|monte carlo|bootstrap|statistical computing"),

    # --- Mathematical physics -------------------------------------------
    ("mathematical-physics", ["math-ph", "hep-th"], r"mathematical physics|physics|physical heuristics|quantum mechanics|classical mechanics"),
    ("quantum-field-theory", ["hep-th", "math-ph"], r"quantum field|\bqft\b|feynman|path integral|renormali[sz]|effective field|gauge theor|yang[-– ]mills|batalin[-– ]vilkovisky|\bbv\b|wilsonian|perturbative"),
    ("topological-field-theory", ["hep-th", "math.QA", "math.AT"], r"topological (?:quantum )?field|\btqft\b|\btft\b|cobordism hypothesis|chern[-– ]simons|extended field theor|invertible (?:field )?theor|anomal"),
    ("string-theory", ["hep-th"], r"string theor|d-branes?|\bbranes?\b|supersymmetr|superalgebra|m-theory|seiberg|holograph|ads/cft|dualities|duality in physics|electromagnetic duality|s-duality"),
    ("quantum-information", ["quant-ph"], r"quantum (?:information|computing|computation|error|codes?|entanglement|channels?)|qubits?|entanglement|error-correcting codes|stabili[sz]er codes"),
    ("quantum-mechanics", ["quant-ph", "math-ph"], r"quantum mechanics|schr[oö]dinger|uncertainty principle|observables?|hilbert space of states|quantization|adelic quantum"),
    ("general-relativity", ["gr-qc"], r"general relativity|spacetime|einstein equations?|black holes?|lorentzian manifolds?|cosmolog"),
    ("condensed-matter", ["cond-mat.str-el", "math-ph"], r"topological (?:insulators?|phases?|order)|tenfold way|anyons?|quantum hall|superconduct|condensed matter"),
    ("fluid-dynamics", ["physics.flu-dyn", "math.AP"], r"fluid|navier[-– ]stokes|euler equations?|turbulen|vortic|incompressible"),
    ("twistor-theory", ["math.DG", "hep-th"], r"twistor"),

    # --- Computer science, ML, systems ----------------------------------
    ("algorithms", ["cs.DS"], r"algorithms?|data structures?|complexity of|approximation algorithms?|randomi[sz]ed algorithms?|dijkstra|sorting|dynamic programming|linear programming|network flows?"),
    ("complexity-theory", ["cs.CC"], r"complexity theory|np-hard|np-complete|p vs np|circuit complexity|boolean functions?|pseudorandom|derandomi|pcp\b|computational complexity"),
    ("online-learning-and-bandits", ["cs.LG", "stat.ML"], r"bandits?|regret|online learning|exploration[-– ]exploitation|thompson sampling"),
    ("machine-learning", ["cs.LG", "stat.ML"], r"machine learning|deep learning|neural (?:net|ordinary|tangent)|deep networks?|generative (?:model|adversarial)|adversarial training|diffusion models?|denoising|score matching|variational (?:autoencoder|bayes|inference)|autoencod|double descent|graph (?:convolutional|neural)|residual (?:networks?|learning)|kernel regression|self-play|q-networks?|state[-– ]space models?|sequence modeling|training|gradient descent|\bsgd\b|learning theory|generalization|overfitting|reinforcement learning|word embeddings?|embedding models?"),
    ("large-language-models", ["cs.CL", "cs.LG", "cs.AI"], r"language models?|\bllms?\b|transformers?\b|attention mechanism|gpt|prompt|chain-of-thought|in-context|agent(?:s|ic)\b|fine-tun|instruction tun|attention|harmless|ai feedback|assistants?\b|rlhf|retrieval-augmented|\brag\b|tokens?\b"),
    ("ai-agents", ["cs.AI", "cs.SE", "cs.MA"], r"agents?\b|agentic|tool use|autonomous|multi-agent"),
    ("reinforcement-learning", ["cs.LG", "cs.AI"], r"reinforcement learning|\brl\b|policy gradient|q-learning|markov decision|rllib"),
    ("computer-vision", ["cs.CV"], r"computer vision|image classification|image recognition|video analytics|object detection|over video|from pixels"),
    ("distributed-systems", ["cs.DC"], r"distributed|cluster (?:computing|manager|scheduling)|mapreduce|spark\b|hadoop|mesos|\bray\b|fault[-– ]toleran|resource sharing|datacenter|cloud computing|serverless|streaming (?:computation|systems?)|scheduling"),
    ("databases", ["cs.DB"], r"databases?|\bsql\b|query (?:optimi|processing|engine)|data (?:lake|warehouse|lakehouse)|lakehouse|transactions?|delta lake|dataframes?|structured streaming|analytics at scale|olap"),
    ("ml-systems", ["cs.DC", "cs.LG"], r"benchmark|dawnbench|training time|inference (?:serving|systems?)|model serving|gpu|accelerat|mlops|mlflow|noscope|feature stores?"),
    ("networking", ["cs.NI"], r"cellular network|networking|\bnetworks? analytics|tcp\b|packet|wireless|computer networks?|internet protocols?|\brouting\b|network layer|transport layer|link layer"),
    ("information-retrieval", ["cs.IR", "cs.CL"], r"retrieval|search engines?|ranking|colbert|dense retrieval|information retrieval"),
    ("security-and-privacy", ["cs.CR"], r"security|privacy|cryptograph|encryption|differential privacy|adversarial (?:attacks?|examples|robustness)"),
    ("programming-languages", ["cs.PL"], r"programming languages?|compilers?|functional programming|haskell|semantics of|type systems?|dsl\b"),
    ("software-engineering", ["cs.SE"], r"software engineering|production framework|code generation|swe-bench|testing|devops|developer"),
    ("concurrency", ["cs.DC", "cs.LO"], r"concurren|directed homotopy|parallel computation|process calcul"),
    ("information-theory", ["cs.IT", "math.IT"], r"information theory|shannon|entropic|channel capacity|coding theory|error-correcting"),
    ("fuzzy-logic", ["cs.LO", "math.LO"], r"fuzzy"),
    ("numerical-analysis", ["math.NA", "cs.NA"], r"numerical|finite elements?|discreti[sz]ation|matrix computations|floating point|iterative methods"),
    ("optimization", ["math.OC", "cs.LG"], r"optimi[sz]ation|convex optimization|linear programming|gradient methods?|duality gap|lagrangian dual"),
    ("computer-architecture", ["cs.AR"], r"\b(?:computer architecture|computer organi[sz]ation|micro-?architectur\w*|instruction[- ]set|isa|risc-?v|mips|superscalar|out-of-order (?:execution|processors?)|branch predict\w*|cache (?:coherence|memor\w*|hierarch\w*|misses)|memory hierarch\w*|multicore processors?|multiprocessors?|vliw|simd|processor design|datapaths?|assembly (?:language|programming)|verilog|vhdl|fpgas?|hardware description languages?|digital (?:logic|design|circuits?|systems design)|logic gates|flip-flops?|register files?|cpu|gpu architecture|pipelin(?:ed|ing) (?:processors?|cpus?|datapath)|pipeline hazards?)\b"),
    ("operating-systems", ["cs.OS"], r"\b(?:operating systems?|operating system kernels?|linux kernel|kernel (?:mode|space)|virtual memory|page tables?|process scheduling|cpu scheduling|file systems?|system calls?|processes and threads|multithreading|deadlocks?|semaphores?|mutex(?:es)?|unix|linux|device drivers?|real-time operating)\b"),
    ("high-performance-computing", ["cs.DC", "cs.PF"], r"\b(?:high[- ]performance computing|hpc|parallel (?:computing|programming|architectures?)|mpi (?:programming|parallel\w*)|message passing interface|openmp|cuda|gpu (?:programming|computing)|supercomput\w*|vectori[sz]ation|performance engineering|roofline)\b"),
    ("computer-graphics", ["cs.GR"], r"\b(?:computer graphics|rendering|ray[- ]tracing|rasteri[sz]\w*|shaders?|opengl|vulkan|geometric modell?ing|mesh processing|computer animation)\b"),
    ("formal-methods", ["cs.LO", "cs.SE"], r"\b(?:formal (?:methods|verification|specification)|model checking|hoare logic|temporal logic|sat solv\w*|smt solv\w*|separation logic|program verification)\b"),
    ("robotics", ["cs.RO"], r"\b(?:robot\w*|manipulators?|slam|motion planning|path planning|inverse kinematics|legged locomotion|autonomous vehicles?|ros)\b"),
    ("control-theory", ["eess.SY", "math.OC"], r"\b(?:control (?:theory|systems?|engineering|design)|feedback control|optimal control|pid control\w*|state[- ]space representation|controllability|kalman filter\w*|lqr|lqg|model predictive control|mpc|transfer functions?|bode (?:plots?|diagrams?)|nyquist (?:plot|criterion)|root locus|robust control|system identification)\b"),
    ("signal-processing", ["eess.SP"], r"\b(?:signal processing|signals and systems|z-transforms?|sampling theorem|filter design|digital filters?|dsp|image processing)\b"),

    # --- Applied and other sciences -------------------------------------
    ("bioinformatics", ["q-bio.GN", "q-bio.QM"], r"bioinformatic|genom|sequencing|pathogen|protein|systems biology|biolog"),
    ("computational-biology", ["q-bio.QM", "q-bio.PE"], r"computational biology|mathematical biology|phylogen|sequence alignment|population genetics|coalescent|evolutionary (?:biology|dynamics|models?)|gene (?:expression|regulatory)|rna-seq|single-cell|metagenom|protein (?:structure|folding)|molecular (?:dynamics|evolution)|epidemi(?:c|olog)|\bsir model|biostatistic|computational neuroscience|systems biology|biological networks?|hidden markov models? for|dna sequenc"),
    # --- Mechanical and aerospace engineering ---------------------------
    ("solid-mechanics", ["physics.class-ph", "cond-mat.mtrl-sci"], r"\b(?:solid mechanics|continuum mechanics|mechanics of (?:materials|solids)|strength of materials|linear elasticity|elasticity theory|theory of elasticity|plasticity|stress(?:es)? and strains?|stress tensors?|strain tensors?|beam (?:theory|bending|deflection)|bending moments?|buckling|fracture mechanics|fatigue|structural (?:analysis|mechanics|dynamics)|finite element (?:analysis|method)s?|fem|composite materials?|constitutive (?:models?|laws?))\b"),
    ("dynamics-and-vibrations", ["physics.class-ph", "math.DS"], r"\b(?:mechanical vibrations?|vibrations|oscillators?|rigid[- ]body|kinematics|multibody|mechanisms and machines|machine (?:design|elements|dynamics)|statics|engineering mechanics|lagrangian mechanics|lagrange'?s equations|hamiltonian mechanics|classical mechanics|newtonian mechanics|gyroscop\w*|modal analysis|natural frequenc\w*)\b"),
    ("thermodynamics-and-heat-transfer", ["physics.class-ph", "physics.flu-dyn"], r"\b(?:engineering thermodynamics|applied thermodynamics|laws of thermodynamics|heat transfer|heat conduction|heat exchangers?|convective heat|radiative heat|combustion|internal combustion|power cycles?|rankine cycles?|brayton cycles?|otto cycles?|refrigeration|hvac|energy conversion)\b"),
    ("computational-fluid-dynamics", ["physics.flu-dyn", "physics.comp-ph"], r"\b(?:computational fluid\w*|cfd|openfoam|finite[- ]volume\w*|turbulence model\w*|rans|large[- ]eddy|lattice boltzmann|shock[- ]capturing|riemann solvers?)\b"),
    ("aerospace-engineering", ["physics.flu-dyn", "eess.SY"], r"\b(?:aerospace|aeronautic\w*|astronautic\w*|aerodynamic\w*|aircraft|airfoils?|aerofoils?|flight (?:dynamics|mechanics|control|tests?)|propulsion|rockets?|orbital mechanics|orbit determination|spacecraft|satellite (?:orbits?|dynamics|navigation|systems?)|astrodynamics|gas turbines?|jet engines?|compressible flows?|supersonic|hypersonic|avionics|guidance,? navigation|attitude (?:dynamics|control|determination)|launch vehicles?|helicopters?|rotorcraft|drones?|uavs?)\b"),
    ("economics-and-finance", ["q-fin.RM", "econ.GN"], r"econom|risk management|copulas?|extreme value|finance|financial|market|pricing|auction"),
    ("cognitive-science", ["q-bio.NC"], r"mental imagery|cognit|neuroscien|brain|perception|intuition and"),

    # --- History, exposition, philosophy --------------------------------
    ("history-of-mathematics", ["math.HO"], r"history|historical|origins? of|the work of|obituar|memorial|biograph|life and work|creator in solitude|recollections"),
    ("mathematical-writing-and-practice", ["math.HO"], r"mathematical writing|mathematical thinking|mathematics and language|language and thought|what is\.\.\.|writing clearly|advice|how to (?:write|read|do|learn|think)|research (?:advice|career)|young mathematicians|mathematical practice|scientific method|problem solving"),
    ("philosophy-of-mathematics", ["math.HO", "physics.hist-ph"], r"philosoph|metaphysic|foundations of mathematics|imagination|\binfinity\b(?!-)|platon"),
]

FORMS = [
    ("lecture-notes", r"lecture notes?|lectures? on|course notes?|notes on|class notes|\blecture \d|seminar notes|study notes|mini[-– ]?course|primer|crash course|\bcourse\b"),
    ("survey", r"survey|overview|review of|introduction to|an introduction|a guide|guide to|panorama|state of the art|expository|exposition"),
    ("book", r"\bbook\b|textbook|monograph|treatise|graduate texts?|volume [ivx\d]|\bchapters?\b"),
    ("slides", r"\bslides\b|\bpresentation\b|beamer"),
    ("talk", r"\btalk\b|abstract of|joint (?:work )?with|seminar talk|colloquium|conference talk|workshop"),
    ("interview", r"interview|conversation with|in conversation"),
    ("problem-list", r"open problems|problem lists?|exercises|problem sets?|conjectures list"),
    ("thesis", r"\bthesis\b|dissertation"),
    ("historical-paper", r"original paper|classic paper|seminal|foundational paper|tohoku|faisceaux alg[eé]briques|sga\s?\d|\bega\b"),
    ("video", r"video|youtube|recorded lecture|lecture recording"),
    ("q-and-a", r"stackexchange|mathoverflow|question and answer|discussion and"),
]

SOURCE_TAGS = [
    ("arxiv", r"arxiv\.org"),
    ("mathoverflow", r"mathoverflow\.net"),
    ("stackexchange", r"stackexchange\.com"),
    ("nlab", r"ncatlab\.org"),
    ("wikipedia", r"wikipedia\.org"),
    ("github", r"github\.(?:com|io)"),
    ("gitlab", r"gitlab\.com"),
    ("youtube", r"youtube\.com|youtu\.be"),
    ("blog", r"wordpress\.com|blogspot\.|substack\.com|medium\.com|/blog/"),
    ("stacks-project", r"stacks\.math\.columbia\.edu"),
    ("kerodon", r"kerodon\.net"),
]

# Domain fallbacks used when the text gives no topic match.
DOMAIN_CLASSES = {
    "databricks.com": "cs.DB",
    "ncatlab.org": "math.CT",
    "jmilne.org": "math.NT",
    "alainconnes.org": "math.OA",
    "kskedlaya.org": "math.NT",
    "kerodon.net": "math.CT",
}

ARCHIVE_NAMES = {
    "math": "mathematics", "cs": "computer-science", "stat": "statistics",
    "hep-th": "physics", "math-ph": "physics", "quant-ph": "physics",
    "gr-qc": "physics", "cond-mat": "physics", "physics": "physics",
    "q-bio": "quantitative-biology", "q-fin": "quantitative-finance",
    "econ": "economics",
    "eess": "electrical-engineering",
}

MAX_CLASSES = 4
MAX_TOPICS = 10
MIN_TOPICS = 4
CLASS_SHARE = 0.25

# Pre-2007 arXiv identifiers name their archive; map retired archives to
# their current subject classes.
LEGACY_ARCHIVES = {
    "alg-geom": "math.AG", "dg-ga": "math.DG", "funct-an": "math.FA",
    "q-alg": "math.QA", "chao-dyn": "nlin.CD", "solv-int": "nlin.SI",
    "patt-sol": "nlin.PS", "adap-org": "nlin.AO", "comp-gas": "nlin.CG",
    "mtrl-th": "cond-mat.mtrl-sci", "supr-con": "cond-mat.supr-con",
    "acc-phys": "physics.acc-ph", "ao-sci": "physics.ao-ph",
    "atom-ph": "physics.atom-ph", "bayes-an": "stat.ME",
    "chem-ph": "physics.chem-ph", "plasm-ph": "physics.plasm-ph",
    "cmp-lg": "cs.CL",
}

_COMPILED_TOPICS = [(tag, classes, re.compile(pattern, re.IGNORECASE)) for tag, classes, pattern in TOPICS]
_COMPILED_FORMS = [(tag, re.compile(pattern, re.IGNORECASE)) for tag, pattern in FORMS]
_COMPILED_SOURCES = [(tag, re.compile(pattern, re.IGNORECASE)) for tag, pattern in SOURCE_TAGS]
_CLASS_PATTERN = re.compile(r"^(?:[a-z\-]+(?:\.[A-Za-z\-]+)?)$")


def arxiv_id(url):
    """Return the arXiv identifier in a URL, without version, or None."""
    match = ARXIV_ID.search(url or "")
    if not match:
        return None
    return re.sub(r"v\d+$", "", match.group("id"))


def load_arxiv_cache(path=ARXIV_CACHE):
    if not path.exists():
        return {}
    return json.loads(path.read_text(encoding="utf-8"))


STANDALONE_ARCHIVES = {"hep-th", "hep-ph", "hep-lat", "hep-ex", "math-ph", "quant-ph", "gr-qc", "nucl-th"}


def is_arxiv_class(tag):
    if tag in STANDALONE_ARCHIVES:
        return True
    if "." not in tag or not _CLASS_PATTERN.match(tag):
        return False
    archive = tag.split(".", 1)[0]
    return archive in ARCHIVE_NAMES or archive in {"cond-mat", "q-bio", "q-fin"}


def archive_of(arxiv_class):
    archive = arxiv_class.split(".", 1)[0]
    if archive in ARCHIVE_NAMES:
        return ARCHIVE_NAMES[archive]
    return ARCHIVE_NAMES.get(archive.split("-")[0], archive)


def score_topics(title, note):
    """Return ([(topic, score)], Counter of arXiv classes)."""
    title_text = title or ""
    body_text = note or ""
    topic_scores = []
    class_scores = Counter()
    for tag, classes, pattern in _COMPILED_TOPICS:
        title_hits = len(pattern.findall(title_text))
        body_hits = len(pattern.findall(body_text))
        if not title_hits and not body_hits:
            continue
        score = 3 * title_hits + min(body_hits, 5)
        topic_scores.append((tag, score))
        for rank, arxiv_class in enumerate(classes):
            # The first class listed for a topic is its home; later ones are cross-lists.
            class_scores[arxiv_class] += score if rank == 0 else score / 2
    topic_scores.sort(key=lambda item: (-item[1], item[0]))
    return topic_scores, class_scores


def tag_record(record, cache=None):
    """Return the inferred tag list for one paper-link record."""
    title = record.get("title", "")
    note = record.get("note", "")
    url = record.get("url", "")
    category = record.get("category", "")

    topic_scores, class_scores = score_topics(title, note)

    official = []
    identifier = arxiv_id(url)
    if cache and identifier and identifier in cache:
        official = list(cache[identifier].get("categories") or [])
    elif identifier and "/" in identifier:
        archive = identifier.split("/", 1)[0]
        legacy = LEGACY_ARCHIVES.get(archive, archive)
        if "." in legacy or legacy in STANDALONE_ARCHIVES:
            official = [legacy]
        elif legacy in {"math", "cs", "physics", "nlin", "q-bio", "cond-mat", "stat"}:
            # Old ids like math/0401222 name only the archive: take the best inferred class in it.
            official = [c for c, _ in sorted(class_scores.items(), key=lambda item: (-item[1], item[0]))
                        if c.split(".", 1)[0] == legacy][:1]

    classes = list(official)
    top_score = max(class_scores.values(), default=0)
    for arxiv_class, score in sorted(class_scores.items(), key=lambda item: (-item[1], item[0])):
        if arxiv_class not in classes and score >= CLASS_SHARE * top_score:
            classes.append(arxiv_class)
    if not classes:
        classes = [DOMAIN_CLASSES.get(category, "math.GM")]
    # Keep all official classes, plus inferred ones up to the cap.
    classes = classes[:max(MAX_CLASSES, len(official))]

    topics = [tag for rank, (tag, score) in enumerate(topic_scores[:MAX_TOPICS])
              if rank < MIN_TOPICS or score >= 2]

    text = f"{title}. {note}"
    forms = [tag for tag, pattern in _COMPILED_FORMS if pattern.search(text)]
    sources = [tag for tag, pattern in _COMPILED_SOURCES if pattern.search(url)]

    archives = []
    for arxiv_class in classes:
        name = archive_of(arxiv_class)
        if name not in archives:
            archives.append(name)

    tags = []
    for tag in [*classes, *archives, *topics, *forms, *sources]:
        if tag not in tags:
            tags.append(tag)
    return tags


def primary_class(tags):
    """Return the first arXiv class in a tag list, or None."""
    for tag in tags or []:
        if is_arxiv_class(tag):
            return tag
    return None


def _record_starts(lines):
    return [index for index, line in enumerate(lines) if line.startswith("- ")]


def write_tags(path=PAPERS, cache=None):
    """Insert or replace a one-line ``tags:`` field in every record.

    The file is edited line by line so titles, URLs, and notes keep their
    exact formatting.
    """
    text = path.read_text(encoding="utf-8")
    records = yaml.safe_load(text) or []
    lines = text.split("\n")
    starts = _record_starts(lines)
    if len(starts) != len(records):
        raise RuntimeError(f"found {len(starts)} record starts but {len(records)} records")

    output = []
    bounds = [*starts, len(lines)]
    output.extend(lines[:starts[0]])
    for record, begin, end in zip(records, bounds, bounds[1:]):
        block = lines[begin:end]
        # Drop an existing tags field (one line, or a block list below it).
        kept = []
        skipping = False
        for line in block:
            if line.startswith("  tags:"):
                skipping = line.rstrip() == "  tags:"
                continue
            if skipping and line.startswith("  - "):
                continue
            skipping = False
            kept.append(line)
        tags = tag_record(record, cache)
        flow = yaml.safe_dump(tags, default_flow_style=True, width=10**6, allow_unicode=True).strip()
        insert_at = next(
            (i + 1 for i, line in enumerate(kept) if line.startswith("  category:")),
            1,
        )
        kept.insert(insert_at, f"  tags: {flow}")
        output.extend(kept)

    new_text = "\n".join(output)
    if yaml.safe_load(new_text) is None or len(yaml.safe_load(new_text)) != len(records):
        raise RuntimeError("tag insertion changed the record count")
    path.write_text(new_text, encoding="utf-8")
    return len(records)


def report(path=PAPERS, cache=None):
    records = yaml.safe_load(path.read_text(encoding="utf-8")) or []
    classes = Counter()
    topics = Counter()
    fallback = 0
    for record in records:
        tags = tag_record(record, cache)
        classes.update(tag for tag in tags if is_arxiv_class(tag))
        topics.update(tag for tag in tags if not is_arxiv_class(tag))
        if not score_topics(record.get("title", ""), record.get("note", ""))[0]:
            fallback += 1
    print(f"records: {len(records)}")
    print(f"records with no topic match (domain fallback): {fallback}")
    print("top arXiv classes: " + ", ".join(f"{k} {v}" for k, v in classes.most_common(25)))
    print("top topics: " + ", ".join(f"{k} {v}" for k, v in topics.most_common(40)))


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--write", action="store_true", help="write tags into the YAML file")
    parser.add_argument("--file", type=Path, default=PAPERS, help="paper-links YAML file")
    args = parser.parse_args(argv)
    cache = load_arxiv_cache()
    if args.write:
        count = write_tags(args.file, cache)
        print(f"tagged {count} records in {args.file.relative_to(ROOT)}")
    report(args.file, cache)
    return 0


if __name__ == "__main__":
    sys.exit(main())
