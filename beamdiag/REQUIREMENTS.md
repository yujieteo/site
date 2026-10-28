# Beam diagram creator: requirements

Agreed with the owner on 2026-10-18, and changed on 2026-10-23 for the site look. When the code and this file disagree, change the code.

## The job

An engineer enters a straight beam (supports, loads, section, material) and gets its reactions,
shear force, bending moment and deflection, the hand calculation, and a clean A4 PDF report.

**Test for ease of use:** a new user opens the page, adds a load and saves the PDF in less than
1 minute, with no instructions.

## The page

1. The page opens on one solved example beam.
2. These controls stay, and no others:
   - the end buttons: Pin–pin, Fixed–fixed, Fixed–pin, Cantilever
   - Units
   - Length
   - Origin of x: centre (the default) or left end
   - the supports table and "+ Support"
   - the loads table and "+ Point force", "+ Distributed", "+ Couple"
   - Section: shape and its dimensions
   - Material, with E and ν folded behind it (a `<details>`)
3. The figure keeps its drag handles and its cursor on the diagrams. On a phone, the tables are
   the main input, and the page works fully: build a beam and save the PDF.
4. The page shows the reactions, the largest values and the hand calculation. All maths in HTML text uses KaTeX. Input values stay plain. The figure and PDF keep Unicode maths.
5. Two export buttons only: **Save PDF** and **Save PNG**.
6. Removed: the example preset select, the image format select, SVG export, Divisions, the
   NASTRAN deck and `bdf.rs`, the beamdswitch deck and `deck.rs` / `report.rs` (unless the PDF
   reuses its numbers), the Markdown and clipboard exports, the WebMCP tools and `tools.json`, and
   all explanation text (method, signs, assumptions, sources) on the page.
7. Look: the site look, with the site stylesheet `/style.css`, header and footer. The page adds
   only the styles of the tool. No themes, no dark mode, no fades.
8. Speed: the solved example draws in less than 1 s on a 4G phone. Less than 400 KB loads before the
   first draw, with the two site fonts. KaTeX loads after the first draw. Plain text appears first, then KaTeX replaces it. The PDF fonts load on the
   first "Save PDF".
9. Typing in a field never lags: solve on input, draw at most once per animation frame, and build
   the hand calculation only when it is visible.

## The PDF

10. The PDF writer (`pdf.goose`, in WebAssembly) makes one A4 PDF: vector, black on white, page
    numbers, nothing from the web page (no buttons, handles, cursor or colours).
11. Contents, in this order:
    1. heading: the beam, the date, the units
    2. input: the beam sketch, supports, loads, section, material
    3. reactions
    4. the V, M and v diagrams
    5. largest values and where they occur
    6. the hand calculation (Macaulay's method)
    7. method and assumptions (the text removed from the page)
12. The hand calculation uses Unicode maths with superscripts and subscripts (for example
    `EI·v″ = M(x)`, `⟨x − 2⟩²`), fractions inline. No TeX in the program.
13. One list of steps from `hand.goose` feeds both the page (LaTeX for KaTeX) and the PDF (Unicode), so
    the two always show the same numbers.
14. The diagrams in the PDF are the same drawing as the PNG.
15. Fonts: any that are clear and have every glyph used. The embedded Fira subsets are fine.
