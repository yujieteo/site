# Themes

The site offers 2 themes, Penumbra Light and Penumbra Dark ++.
Penumbra Light is the default on every device. The browser stores an explicit choice for all pages.
Unsupported theme choices reset to Light. Notebook PDFs use `theme: penumbra-light` by default.
A source can request any preset ID from `engine/src/theme.rs` for its exports.

The palettes use the official sRGB values from [Penumbra](https://github.com/nealmckee/penumbra/blob/b2a4b15c10b14fdd990d0bdc29e7b044afc718af/penumbra.tsv).
Penumbra Light uses the balanced set. Dark ++ uses the contrast++ set. Accents use the six-colour palette.
`engine/src/theme.rs` defines the colours and menu labels for pages, diagrams, plots and PDFs.

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

[Liga Courier Prime Sans](https://github.com/nanxstats/courier-prime-sans-ligaturized) supplies text and code, including inline code and embedded HTML artifacts.
Pages enable `calt` and `liga`. The code ligatures retain the width of their original character sequences.
TeX Gyre Pagella Math supplies Palatino-style math in pages, embedded artifacts and PDFs.
Both fonts are local subsets. `fonts/fonts.txt` records their sources, licences and hashes.
Embedded artifacts receive the same fonts and theme variables from their parent page. Theme changes apply to both at once.

The site has no decorative dot drawings or animation loop. Data diagrams and plots remain.
The header uses the theme background at 80% over a 14 px blur. Pages and sections retain their CSS fades.
The device's reduced-motion preference disables these fades.
