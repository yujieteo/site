# site

A minimal, single-page personal site: a short bio plus a searchable,
tag-filterable list of resource links, driven entirely from YAML data.

## Layout

```
data/cv/*.yaml          # name, title, bio
data/resources/*.yaml   # resource links: title, url, category, note
schema/*.schema.json    # what each type's YAML must contain
scripts/validate.py     # checks data against schemas
scripts/build.py        # renders YAML -> static site/index.html
templates/base.html     # the page template
static/css/style.css    # the look and feel
```

## Usage

```
pip3 install -r requirements.txt
python3 scripts/validate.py
python3 scripts/build.py
python3 scripts/parse_notes.py annotbib.txt data/paper-links/paper-links.yaml
python3 scripts/parse_exercise.py exercises.txt /data/exercises/exercises.yaml
python3 scripts/clean_notes.py
open site/index.html
```

## Features

- Live search across title, note, and category
- Click a category tag (top bar or on any entry) to filter
- Result counter shows how many entries match the current filters
