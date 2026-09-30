# Source of the indeterminate beams deck

The one LaTeX source the deck, the handout and article PDFs, and the video
were built from, with [beamsuperswitch](https://github.com/yujieteo/beamsuperswitch)
at commit `25c892b8b79045f7f6c18ce0c1c2ebd70cf475c1`. This folder is not
published; only `../index.html`, `../*.pdf` and `../slides/` are.

- `talk.tex`: slides, presenter notes and video narration.
- `derive.py`: the worked-example inputs; it computes every number and chart
  in exact arithmetic and writes `data/numbers.tex`, `data/propped.csv` and
  `data/twospan.csv` (generated; do not edit).

To regenerate, copy this folder to `talks/indeterminate-beams/` in a
beamsuperswitch checkout, then:

```sh
python3 talks/indeterminate-beams/derive.py
make check TALK=indeterminate-beams     # seven PDFs, verified and reproducible
make web TALK=indeterminate-beams       # build/web: index.html + slides/ -> ../
make video TALK=indeterminate-beams Q=m # after synthesizing the narration
```

Copy `build/web/index.html` and `build/web/slides/` (never `notes.md`), and
`build/talk-handout.pdf` and `build/talk-article.pdf`, into
`data/decks/indeterminate-beams/`. `tests/test_indeterminate_beams.py`
re-solves both examples with the beam visualizer's solvers.
