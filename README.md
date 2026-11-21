# Site

Posts by Yu Jie Teo.

## Write a post

1. Make `posts/NAME/post.md`. Start it with front matter: `title`, `date`, `draft: true` and at least one `summary` line.
2. Run `bun src/build.ts --drafts --out /tmp/site`.
3. Run `python3 -m http.server -d /tmp/site` and open `http://localhost:8000/essays/NAME/`. The pages need a server: their paths start with `/`.
4. Remove `draft: true` when it is ready.

Use a dedicated output directory. The build replaces its contents after rendering succeeds. It accepts an empty directory or a previous build of this site.

## Paper summaries

A post can hold summaries in `posts/NAME/papers/SLUG.md`. A file starts with `source:`, `slogan:` and `basis:` lines, then a blank line, then Markdown. The `source` must equal the link of one list item in the post. The build takes the title and byline from that item, writes `/essays/NAME/SLUG/` and adds a Summary link to the item.

## Notes from agents

Agents adjust nine parts of the site by adding lines to `notes/PART.tsv`: `policy`, `reading`, `forecasts`, `prices`, `products`, `checks`, `advice`, `calls` and `outcomes`. Git is the only way to write. The build checks every line and stops on a bad one. `src/notes.ts` holds the rules, and the build writes them to `/api/notes.txt`. The prompt is in `prompts/notes.md`.

The build publishes each file as `/notes/PART.txt`, because the server sends `.tsv` and `.md` files as binary. The server jobs read the policy and reading notes from there. The forecasts notes are the bet ledger: `scripts/bets/bets.py` writes their lines from raw APIs, the build checks and scores them into `/api/bets.txt`, and the server's `feed-update` turns that into `/forecasters.html` each hour. `research/bets/` holds the limits for the Fermi check and the archive.org snapshot list. The build makes `/deals/` from the prices notes. It draws the Singapore prices post from the products, checks and advice notes, and it writes the list for each of those three to `/api/PART.txt`.

## Agent API

`/llms.txt` lists every post and table. `src/api.ts` cuts each post into one file per `##` and `###` heading, never by length, and gives sizes in bytes. `src/tables.ts` defines every table once: the same definition writes the TSV, checks every cell's type, and writes its entry in `/api/datapackage.json` (Frictionless Table Schema). Every row has `as_of` and a source. `src/blame.ts` dates rows that have no date of their own by the day their line last changed in git, so a build needs the git history. `/api/manifest.json` gives every file's bytes, SHA-256 and as-of date.

- Columns are only added, at the end of a table. `tests/schema.test.ts` holds the tables to `tests/schema-frozen.json`. To add a column, append it, raise `SCHEMA_VERSION`, add a `CHANGELOG` entry in `src/api.ts`, and append it to the frozen file.
- `bun test` runs that check and the bad notes lines in `tests/notes/bad.txt`, each of which must stop the build. `tests/notes/gaps.txt` lists bad lines the rules do not catch yet. It also builds the whole site and checks it before a release: every page has one `h1`, a `lang` and a `title`, every link inside the site and every `#` target resolves, and the served `style.css` is no larger than its limit in `tests/build.test.ts`.
- After a deploy, run `bun scripts/api/verify.ts` and `uvx --from 'frictionless==5.18.0' frictionless validate https://teoyujie.org/api/datapackage.json`.
- `tests/questions/`: `derive.ts` writes 30 questions with answers taken from the source data, `run.py` records a model answering them from `/llms.txt` alone, and `score.py` scores exact match, tokens fetched and date cited.

## Deploy

1. Install Bun 1.4.4.
2. Commit to `main`.
3. Turn on the VPN.
4. Run `scripts/deploy.sh`. It builds the site, sends it, and checks the key pages: each must answer 200 with its security and cache headers, a repeat request must get 304, and the live manifest must name the commit.

To roll back, run `scripts/deploy.sh COMMIT` with the last good commit. It builds that commit in a fresh clone and sends it with the same checks.
