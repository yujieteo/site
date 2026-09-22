# site

A minimal, single-page personal site: a short bio plus a searchable,
tag-filterable list of resource links, driven entirely from YAML data.

## Layout

```
data/cv/*.yaml          # name, title, bio
data/resources/*.yaml   # resource links: title, url, category, note
data/ratings/ratings.txt # editable rating blocks
data/ratings/*.yaml      # generated ratings consumed by the site
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
python3 scripts/parse_ratings.py data/ratings/ratings.txt data/ratings/ratings.yaml
python3 scripts/parse_exercise.py exercises.txt /data/exercises/exercises.yaml
python3 scripts/clean_notes.py
open site/index.html
```

## Features

- Live search across title, note, and category
- Click a category tag (top bar or on any entry) to filter
- Result counter shows how many entries match the current filters

## Ratings

Write ratings as blank-line-separated blocks, then run the `parse_ratings.py`
command above. The first word is the filter type, the second line is the verdict,
and the remaining text is the review:

```text
movie Perfect Days
Keep
Quiet and observant without feeling slight.

album Blue
Revisit
Beautiful songwriting that rewards returning.

tv Severance
Revisit
Precise production with a strong central mystery.

video-game Outer Wilds
Keep
Discovery is the mechanic and the reward.

food Chicken rice @ Maxwell Food Centre
Once
Good texture but not worth a queue.
```

The type is unrestricted: `movie`, `album`, `single`, `tv`, `video-game`, `food`,
`book`, or any new first-word tag you choose. Reviews may contain commas and may
span multiple lines. The allowed verdicts are `Avoid`, `Once`, `Revisit`, and
`Keep`; type and verdict both become filters on the generated Ratings page.
