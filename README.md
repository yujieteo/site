# Personal site

A small static site generated from YAML and Markdown: an About page, searchable
resource and paper-link collections, dated notes, a filterable blog, Media
(podcast episodes and explainer videos), slide decks, and data visualizations.
It is published at <https://teoyujie.org/>.

## Project layout

```text
.github/             CI workflow and pull-request template
data/                Canonical content (edit here)
  about/ blog/ cv/ decks/ notes.md note-tags.json tag-facets.yaml colophon.md
  paper-links/ podcasts/ resources/ visuals/
docs/                Architecture notes (build, corpus, WebMCP, media)
exports/             Generated paper-link exports: paper-links.bib, paper-links.toon
schema/              JSON Schemas for the YAML data
scripts/             build.py, validate.py, notes.py, podcast.py, ...
skills/              Agent playbooks, principles, and reference notes
static/              Source CSS and browser JavaScript
templates/           Shared HTML templates
tests/               Python (unittest) and Node tests
visuals/             Visualizations built in this repo before publication (sources, data, build scripts)
site/                Generated site (never edit by hand)
CONTEXT.md           Domain vocabulary (Published Corpus, Corpus Record, ...)
SKILLS.md            Router from a task to the playbook that owns it
llms.txt             Public guidance for LLM readers
```

`site/corpus.json` is the generated Published Corpus, the explicit public
projection consumed by the search interface (the per-page filters and the
global Search popup in every page header, Cmd/Ctrl+K) and the read-only WebMCP tools. See
[docs/architecture.md](docs/architecture.md).

## Build

The build needs two checkouts: this repository and the public
[`visuals`](https://github.com/yujieteo/visuals) repository that holds the
HTML and data for each visualization. `scripts/build.py` looks for the visuals
checkout at `../visuals`, `../../visuals`, then `../../tmp/visuals`; set
`VISUALS_REPO` to its path when it lives anywhere else. Without it the build
and the Python tests fail with `Visuals repository not found`.

```sh
python3 -m venv .venv
.venv/bin/pip install -r requirements.txt
export VISUALS_REPO=../visuals   # omit when the sibling checkout already exists
.venv/bin/python scripts/validate.py
.venv/bin/python scripts/build.py
open site/index.html
```

The build recreates the generated `site/` directory from the sources, so a
successful run leaves no Git diff. Keep source files outside `site/`.

## Test

```sh
.venv/bin/python -m unittest discover -s tests -p 'test_*.py'
node --test tests/corpus.test.mjs tests/vgc-turn-lab.test.mjs tests/convexity-action-engine.test.mjs tests/beamdiag.test.mjs
```

Python 3.13 and Node 22 are the versions CI uses; the Node tests need no
`package.json` or installed packages. The Python tests copy the repository to a
temporary directory and rebuild the site there, so they also read
`VISUALS_REPO`.

## Continuous integration

`.github/workflows/ci.yml` runs on pushes to `main` and on every pull request:
validation, the build, a check that the committed `site/` matches its sources,
and the Python and Node tests. It checks out a pinned `visuals` revision; update
the `ref` in the workflow when a visualization is republished.

## Adding and changing content

Follow the playbook for the task; [SKILLS.md](SKILLS.md) lists them all:

| Content | Source of truth |
| --- | --- |
| Daily notes | `data/notes.md` (dated `## YYYY-MM-DD` sections, newest first) |
| Blog posts | `data/blog/*.md` with YAML frontmatter (each is also published as `site/blog/<slug>.md`) |
| Slide decks | `data/decks/<slug>/index.html` |
| Media items | `data/podcasts/<id>.yaml` plus audio or video assets |
| Visualizations | `data/visuals/<slug>.yaml` (assets come from the visuals repo, or from `visuals/<slug>/` when the paths start with `visuals/`) |
| Papers and resources | `data/paper-links/*.yaml`, `data/resources/*.yaml` (every resource tag needs a facet in `data/tag-facets.yaml`) |
| Homepage pinned card | `pinned` (a Corpus Record id) in `data/cv/cv.yaml` |
| Links between items | `links` on visuals, media items and blog posts; see [skills/reference/links.md](skills/reference/links.md) |
| How the site is built | `data/colophon.md` (published as `colophon.html`) |

`.venv/bin/python scripts/parse_notes.py notes.txt <out.yaml>` converts
blank-line-separated URL notes to YAML. The site build never needs the speech
dependencies in `requirements-podcast.txt`; they are only for rendering podcast
audio.

## Paper-link tags and exports

Every record in `data/paper-links/*.yaml` carries `tags`: arXiv subject classes
first (`math.NT`, `hep-th`, `cs.LG`, ...; the first one is the primary class),
then the archive (`mathematics`, `physics`, ...), topic tags (`modular-forms`,
`langlands-program`, ...), and form and source tags (`lecture-notes`, `slides`,
`arxiv`, ...). The tags come from the keyword rules in `scripts/paper_tags.py`.
Records may also carry `authors` and `year` for citation.

```sh
.venv/bin/python scripts/paper_tags.py --write        # (re)tag every record
.venv/bin/python scripts/paper_links_bib.py           # write exports/paper-links.bib
.venv/bin/python scripts/papers.py export             # write exports/paper-links.toon
```

`exports/paper-links.bib` has one `@misc` entry per link, with `eprint`,
`archivePrefix` and `primaryClass` for arXiv links, `keywords` from the tags and
`abstract` from the note. It compiles with BibTeX and with biblatex/biber
(`\nocite{*}` over all entries). With network access to `export.arxiv.org`,
`scripts/paper_links_bib.py --fetch-arxiv` caches official arXiv metadata in
`data/arxiv-cache.json`. The bib export and `paper_tags.py` then prefer the
official authors, titles and categories.

`scripts/papers.py` is an [AXI](https://github.com/kunchenguid/axi) CLI over
the same data. It prints [TOON](https://toonformat.dev/) on stdout. Run it
without arguments for an overview, then use `list`, `search`, `view`, `tags`,
and `export`, each with `--help`. `exports/paper-links.toon` is the
lossless TOON version of the YAML with aggregate counts. Tests fail when either
export is out of date.

See [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.
