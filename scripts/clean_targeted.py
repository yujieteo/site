#!/usr/bin/env python3
"""clean_notes.py — repair notes.txt so every block parses with parse_notes.py.

Usage: python3 clean_notes.py notes.txt notes.txt
"""

import re
import sys

EXACT_FIXES = [
    # --- URLs broken by autocorrect (spaces / ". Pdf" / raw commas) ---
    ("https://math.uchicago.edu/~may/REU2019/REUPapers/Lee, JaeHee. Pdf compute",
     "https://math.uchicago.edu/~may/REU2019/REUPapers/Lee%2CJaeHee.pdf, Compute"),
    ("https://math.uchicago.edu/~shmuel/AAT-readings/Combinatorial%20Geometry, "
     "%20Concentration, %20Real%20Algebraic%20Geometry/ball. Pdf ball convex geometry.",
     "https://math.uchicago.edu/~shmuel/AAT-readings/Combinatorial%20Geometry%2C"
     "%20Concentration%2C%20Real%20Algebraic%20Geometry/ball.pdf, Ball, convex geometry."),
    ("https://www.imo.universite-paris-saclay.fr/~matthew.morrow/Morrow, %20M. , "
     "%20Introduction%20to%20HLF. Pdf local fields by Morrow.",
     "https://www.imo.universite-paris-saclay.fr/~matthew.morrow/"
     "Morrow%2C%20M.%2C%20Introduction%20to%20HLF.pdf, Local fields by Morrow."),
    ("https://www.math.utoronto.ca/ivrii/Victor_Ivrii_Microlocal_Analysis, "
     "_Sharp_Spectral_Asymptotics_and_Applications. Pdf microlocal analysis treatise.",
     "https://www.math.utoronto.ca/ivrii/Victor_Ivrii_Microlocal_Analysis%2C"
     "_Sharp_Spectral_Asymptotics_and_Applications.pdf, Microlocal analysis treatise."),
    ("https://personal.sc, Ience. Psu. Edu/rcv4/INTAN. Pdf Vaughan analysis notes.",
     "https://personal.science.psu.edu/rcv4/INTAN.pdf, Vaughan analysis notes."),
    ("https://app.icerm.brown.edu/materials/Slides/sp-s15-w1/Aperiodic_tilings_%5D_"
     "Boris_Solomyak, _University_of_Washington. Pdf Aperiodic tiling",
     "https://app.icerm.brown.edu/materials/Slides/sp-s15-w1/Aperiodic_tilings_%5D_"
     "Boris_Solomyak%2C_University_of_Washington.pdf, Aperiodic tiling"),
    ("UPL9140953003901187132_14___Lectures_on_N_X.pdfm",
     "UPL9140953003901187132_14___Lectures_on_N_X.pdf"),

    # --- two URLs glued into one block ---
    ("https://burttotaro.wordpress.com/2010/10/19/books-for-beginning-research/"
     "https://janschuetz.perso.math.cnrs.fr/skripte/lecture_notes_arithlang.pdf, "
     "Arithmetic langlands notes in 103 pages.",
     "https://burttotaro.wordpress.com/2010/10/19/books-for-beginning-research/, "
     "Totaro, books for beginning research.\n\n"
     "https://janschuetz.perso.math.cnrs.fr/skripte/lecture_notes_arithlang.pdf, "
     "Arithmetic Langlands notes in 103 pages."),

    # --- corrupted inline pastes ---
    ("Cotangent complex formali``https://www.math.utoronto.ca/~ila/"
     "Cox-Primes_of_the_form_x2+ny2.pdfsm`` Classification",
     "Cotangent complex formalism. Classification"),
    ("https://www.math.stonybrook.edu/~cschnell/mat552/l, "
     "``https://www.sas.rochester.edu/mth/sites/doug-ravenel/Talks/CU2018-talk.pdf`` "
     "chromatic conjectures.",
     "https://www.math.stonybrook.edu/~cschnell/mat552/, "
     "Schnell's Lie algebra course page.\n\n"
     "https://www.sas.rochester.edu/mth/sites/doug-ravenel/Talks/CU2018-talk.pdf, "
     "Chromatic conjectures."),

    # --- stray typos ---
    (r"coming o\ut", "coming out"),
    ("Galois extnesions.", "Galois extensions."),
]


def clean(text: str) -> str:
    for old, new in EXACT_FIXES:
        if old not in text:
            print(f"warning: fix not found, skipped: {old[:70]}...", file=sys.stderr)
        text = text.replace(old, new)

    # Promote remaining inline ``https://...`` references to their own blocks,
    # keeping the trailing sentence as that entry's note.
    text = re.sub(r"\s*``(https?://[^`\s]+)``[,;:]?\s*", r"\n\n\1, ", text)

    # Sentence-casing artefacts from autocorrect.
    text = re.sub(r"\b[iI]\. E\.", "i.e.", text)
    text = re.sub(r"\b[eE]\. G\.", "e.g.", text)

    # Dangling ", ." / "; ." at block ends.
    text = re.sub(r"\s*[;,]\s*\.(\n|$)", r".\1", text)

    # Normalise block separation, drop empties.
    blocks = [b.strip() for b in text.split("\n\n") if b.strip()]

    # Sanity check with the same regex parse_notes.py uses.
    url_re = re.compile(r"^(https?://\S+?)(?:,\s*|\s+)(.*)$", re.DOTALL)
    bad = []
    for b in blocks:
        m = url_re.match(b)
        if not m or not m.group(2).strip():
            bad.append(b[:80])
    if bad:
        print("Blocks still misparsing:", *bad, sep="\n  ", file=sys.stderr)
    print(f"{len(blocks)} blocks, {len(bad)} problems remaining.", file=sys.stderr)

    return "\n\n".join(blocks) + "\n"


if __name__ == "__main__":
    src = sys.argv[1] if len(sys.argv) > 1 else "notes.txt"
    dst = sys.argv[2] if len(sys.argv) > 2 else "notes.txt"
    with open(src) as f:
        cleaned = clean(f.read())
    with open(dst, "w") as f:
        f.write(cleaned)