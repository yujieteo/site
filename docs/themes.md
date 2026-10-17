# Themes

The site offers 2 themes, Penumbra Light and Penumbra Dark ++.
Penumbra Light is the default on every device. The browser stores an explicit choice for all pages.
Unsupported theme choices reset to Light. Notebook PDFs use `theme: penumbra-light` by default.
A source can request any preset ID from `engine/src/theme.rs` for its exports.

The palettes use the official sRGB values from [Penumbra](https://github.com/nealmckee/penumbra/blob/b2a4b15c10b14fdd990d0bdc29e7b044afc718af/penumbra.tsv).
Penumbra Light uses the balanced set. Dark ++ uses the contrast++ set. Accents use the six-colour palette.
`engine/src/theme.rs` defines the colours and names of the themes for pages, diagrams, plots and PDFs.

| Penumbra token | Light | Dark ++ |
| --- | --- | --- |
| `bg` | sun | shade |
| `surface`, `chrome` | sun- | shade- |
| `fg` | shade | sky+ |
| `fg2`, `muted`, `accent-text` | sky- | sky |
| `line` | sky+ | shade+ |
| `accent` | blue | blue |
| `warm` | red | red |
| `green` | green | green |

Text uses the stronger base colours to keep at least 4.5:1 contrast on the background and surface.

The pages and PDFs set prose as a manuscript does. Headings are rubrics: `warm` (Penumbra red), at 24 px
and larger, where 3:1 is enough. Red also marks pilcrows, sigla and initials; `accent` (Penumbra blue)
takes every other initial. Prose uses `fg`, glosses and asides `fg2`. On Penumbra Light the red is 3.2:1,
so small red marks only repeat what the text already says; on Dark ++ it is 7.4:1.

Six embedded subsets (`fonts/fonts.txt`) set the type: EB Garamond for text, Bodoni Moda for headings,
Libre Franklin for the interface, News Cycle for small text and the name in the header, Courier Prime
for code, and STIX Two Math for maths. They stand in for Bembo or Garamond, Didot, Akzidenz-Grotesk,
News Gothic and MathTime Pro II or Times New Roman: each is the oldest design still in continuous use
with a free version.
`fonts/fonts.txt` records their sources, licences and hashes, and why each was chosen.
Embedded artifacts receive the same fonts and theme variables from their parent page, in the interface
face. Theme changes apply to both at once.

The page follows the Van de Graaf canon: the leaf is nine units wide, with margins of one unit inside,
one and a half above, two outside (where the glosses go) and three below. A phone halves the unit.
Faint ruling marks the text block's edges. On a wide screen, every chapter takes two columns:
the gutter (1.2 units) and the outer margin hold its glosses, its long notes stand above and below it,
and its number hangs in the inner margin. Slides and the handout use the full width.

The site has no decorative dot drawings or animation loop. Data diagrams and plots remain.
The header uses the theme background at 80% over a 14 px blur. Pages and sections retain their CSS fades.
The device's reduced-motion preference disables these fades.
