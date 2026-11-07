---
name: site-design
description: Apply the exact design principles of the author's site to any screen, page or figure. Use for every interface or figure in a project from this starter. Use it with the Emil Kowalski skills.
user-invocable: true
---

# Site design

The principles are in `source`. They are copies of the real files. Do not rewrite them from memory.
They come from the author's site repository, commit f91dd42e194192662c0bffa95a5a77954eaeeada.
Treat the copies as read-only. If the site changes, copy the new files again.

1. Read `source/kowalski.css`. Its top comment lists ten interaction rules, each with its source. Its tokens are the colours, type, column and timing.
2. Read the Look section of `source/REQUIREMENTS.md`. It says the site is light only, with no themes and no dark mode.
3. Read `source/style.css` and use `source/fonts` for the fonts.
4. Import or copy `source/kowalski.css` into the new project. Do not invent new tokens.
5. For motion, use the Emil Kowalski skills in this folder first: `emil-design-eng`, `animate`, `review-animations`, `animation-performance`, `mobile-native` and the others.
6. For a figure, use `schematic-emil`. It runs `schematic-figure` in the Emil Kowalski style. For a plain figure, use `schematic-figure`.

If a rule in a copied file and a new idea disagree, ask the author. Do not pick one alone.

## Charts

A chart uses the site look and these rules.

- **Palette.** Use four series colours in this order: blue, orange, violet, green. They are the Radix step 11 of each hue (blue `#0d74ce`, orange `#cc4e00`, violet `#6550b9`, grass `#2a7e3b`). The dataviz check passes them. Do not put green next to orange: red-blind readers cannot tell them apart. Define them as tokens in the site CSS. Do not write the hex in a figure.
- **Phones.** Draw the chart again at the width it gets. One unit is one pixel, and labels stay 12 px. Never shrink a wide drawing. When panels sit side by side, drop to one column when narrow.
- **Wide figures.** A figure may be wider than the text column, up to 960 px. On a screen that is narrower, it is as wide as the screen.
- **Tooltips.** The tooltip sits above the mark. On a mouse, it opens after a short delay, so a pass of the pointer does not open it. Once one is open, its neighbours open at once, with no animation. It grows from the mark, from 0.97 scale and no opacity, in 125 ms. Show hover only under `(hover: hover) and (pointer: fine)`. On a phone, a tap shows the tooltip and a tap elsewhere hides it. Rules for time and origin are in `emil-design-eng`.
- **Schematic or chart.** Use a chart when the figure shows numbers. Use a schematic when it shows parts and how they relate. A schematic has a Next button that shows its labelled parts one at a time. Only motion on a press is allowed, as the vision says a figure is not a loop.

Sources: the tooltip rules come from `emil-design-eng` (tooltip delay, instant neighbours, origin, 125 ms). That skill says nothing on palette or wide figures. Those two use the plan's choice, which the captain left to it.
