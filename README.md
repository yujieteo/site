# Personal site

A small static site generated from YAML and Markdown: an About page, searchable
resource and paper-link collections, dated notes, a filterable blog, Media
(podcast episodes and explainer videos), slide decks, and data visualizations.
It is published at <https://teoyujie.org/>.

## Project layout

```text
.github/             CI workflow and pull-request template
data/                Canonical content (edit here)
  about/ blog/ cv/ decks/ notes.md note-tags.json
  paper-links/ podcasts/ resources/ visuals/
docs/                Architecture notes (build, corpus, WebMCP, media)
schema/              JSON Schemas for the YAML data
scripts/             build.py, validate.py, notes.py, podcast.py, ...
skills/              Agent playbooks, principles, and reference notes
static/              Source CSS and browser JavaScript
templates/           Shared HTML templates
tests/               Python (unittest) and Node tests
site/                Generated site (never edit by hand)
CONTEXT.md           Domain vocabulary (Published Corpus, Corpus Record, ...)
SKILLS.md            Router from a task to the playbook that owns it
llms.txt             Public guidance for LLM readers
```

`site/corpus.json` is the generated Published Corpus, the explicit public
projection consumed by the search interface and the read-only WebMCP tools. See
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
node --test tests/corpus.test.mjs
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
| Blog posts | `data/blog/*.md` with YAML frontmatter |
| Slide decks | `data/decks/<slug>/index.html` |
| Media items | `data/podcasts/<id>.yaml` plus audio or video assets |
| Visualizations | `data/visuals/<slug>.yaml` (assets come from the visuals repo) |
| Papers and resources | `data/paper-links/*.yaml`, `data/resources/*.yaml` |

`.venv/bin/python scripts/parse_notes.py notes.txt <out.yaml>` converts
blank-line-separated URL notes to YAML. The site build never needs the speech
dependencies in `requirements-podcast.txt`; they are only for rendering podcast
audio.

See [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.
