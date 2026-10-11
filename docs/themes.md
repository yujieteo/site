# Themes

The Theme dialog offers 19 families, Auto, Light or Dark, and 5 font set-ups. Rose Pine is the default.
A family with one scheme (marked "one") wears it in light and dark mode. `engine/src/theme.rs` holds the palettes.

The captain chose 15 themes from the appearance settings of the Codex app: Absolutely, Catppuccin, Everforest, GitHub,
Gruvbox, Linear, Notion, One, Proof, Raycast, Rose Pine, Solarized, Vercel, VS Code Plus and Xcode.
Each has a light and a dark side, except Proof, which has a light side only in the app. Four families that were here before stay:
the site's own pair, Dracula, Nord and Tokyo Night (`site`, `dracula`, `nord`, `tokyo-night`).

Token map: `bg` and `fg` from the editor background and foreground; `surface` from the side bar; `line` from a border;
`muted` from the comment or description colour; `accent`, `accent-text`, `warm` and `green` from the link, keyword, number
and string colours. Where a text colour was below 4.5:1 on `bg` or `surface`, the build keeps its hue and moves it toward
`fg` in steps of 2% until it passes (the list of shifts is in the PR). A theme with no `surface` or `line` of its own uses a mix of `bg` and `fg`.

| Theme | Source |
| --- | --- |
| Absolutely (light, dark) | Built-in values of the Codex app: its `absolutely-light` and `absolutely-dark` code themes, read from the installed app (`bg`, `fg`, `sideBar`, accent `#cc7d5e`) |
| Catppuccin | existing: [catppuccin/palette](https://github.com/catppuccin/palette) (Latte, Mocha) |
| Everforest (light, dark) | Shiki `everforest-light` and `everforest-dark`, which Codex uses; they follow [sainnhe/everforest](https://github.com/sainnhe/everforest) |
| GitHub (light, dark) | Shiki `github-light-default` and `github-dark-default`, which Codex uses; from [primer/github-vscode-theme](https://github.com/primer/github-vscode-theme) |
| Gruvbox | existing: [morhetz/gruvbox](https://github.com/morhetz/gruvbox) |
| Linear (light, dark) | [linear.app](https://linear.app) style sheet (`#08090a`, `#d0d6e0`, `#62666d`, `#8fa4ff`, `#89d196`, `#ffc47c`, `#e2e4e7`) and the brand blue `#5e6ad2`. The light surface is a mix. |
| Notion (light, dark) | [notion.com](https://www.notion.com) (`#097fe8`) and Notion's published text colours (`#37352f`, `#787774`, `#2383e2`, `#529cca`). Recalled, not checked against a file: see the PR. |
| One (light, dark) | Shiki `one-light` and `one-dark-pro`, which Codex uses; from Atom One and [Binaryify/OneDark-Pro](https://github.com/Binaryify/OneDark-Pro) |
| Proof (light only) | Built-in values of the Codex app: its `proof-light` code theme, read from the installed app (`#f5f3ed`, `#2f312d`, accent `#3d755d`) |
| Raycast (light, dark) | Accent `#ff6363` from [raycast.com](https://www.raycast.com). Neutrals are recalled, not checked against a file: see the PR. |
| Rose Pine | [official palette](https://github.com/rose-pine/palette) (`dist/css/rose-pine.css`, commit 92af52b); Moon is not added |
| Solarized | existing: [Ethan Schoonover](https://ethanschoonover.com/solarized/) |
| Vercel (light, dark) | Geist colours (`#000`, `#ededed`, `#a1a1a1`, `#0070f3`; [vercel.com/geist/colors](https://vercel.com/geist/colors)). Recalled, not checked against a file: see the PR. |
| VS Code Plus (light, dark) | Shiki `light-plus` and `dark-plus`, which Codex uses: the Light+ and Dark+ themes of VS Code |
| Xcode (light, dark) | Xcode "Default" light and dark source-editor colours. Recalled, not checked against a file: see the PR. |

## Fonts

Each file is a Latin subset made by `scripts/fonts.sh`. `fonts/fonts.txt` holds the hashes. The browser loads a font only when the reader picks it.

Each choice is a pair of a text font and a math font with an OpenType MATH table. MathML uses the math font everywhere. Exports keep Fira.

| Choice in the dialog | Text file | Math file | Licence |
| --- | --- | --- | --- |
| BaskervilleF (Libre Baskerville fork), Termes (Times-style) math. Default | `serif.otf` | `serif-math.otf` | OFL-1.1, GUST Font Licence |
| Fira Sans, Fira Math | `sans.otf` | `math.otf` | OFL-1.1 |
| Source Serif 4, Termes (Times-style) math | `source-serif.otf` | `serif-math.otf` | OFL-1.1, GUST Font Licence |
| Inter, Fira Math | `inter.ttf` | `math.otf` | OFL-1.1 |
| OpenDyslexic, Fira Math | `dyslexic.otf` | `math.otf` | OFL-1.1 |

The default files come from TeX Live (nixpkgs 26.05). BaskervilleF is a fork of Libre Baskerville. It is not Storm Baskerville. Termes Math is a Times-style font. It is not Times New Roman. The GUST Font Licence is LPPL-based and allows a modified subset. It asks for a new name, so the subset is "Serif Math". To use licensed fonts, replace `serif.*` and `serif-math.*` by file swap.

## Header and fades

The header is the theme's `bg` at 80% over a 14 px blur (`backdrop-filter`), solid where the browser lacks it.
Sections fade in as they scroll into view (CSS `animation-timeline: view()`), and pages fade on navigation
(`@view-transition`; a 0.4 s fade-in where that is missing). `prefers-reduced-motion: reduce` turns them all off.
