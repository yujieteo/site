# Source of the Kun Chen advice deck

- `deck.md`: the beamdswitch deck, the one source. Every slide is narrated; quotes are short and credited, each with timestamps into https://youtu.be/q3ca41YIZjc.
- `make_index.py` and `page.css`: write `../index.html`, which embeds `deck.md` verbatim, lists its slides and opens the deck in the site's beamdswitch (`python3 make_index.py` here after any edit). `page.css` is the house style tokens from the canonical visual spec's `assets/style-tokens.css`, then the page's own rules.
- `../talk-handout.pdf` and `../talk-article.pdf`: beamdswitch's own print views of `deck.md`, `?src=<deck.md>&theme=light&print=handout` and `&print=article&narration`, saved to PDF from headless Chrome. For the handout, each thumbnail's `transform: scale(k)` was swapped for `zoom: k` before printing: Chrome otherwise clips the part of a thumbnail's unscaled box that crosses the page end. Reprint both after editing the deck.

Only `index.html` and the PDFs are published; this folder is not.
