# Site

Posts by Yu Jie Teo.

## Write a post

1. Make `posts/NAME/post.md`. Start it with front matter: `title`, `date`, `draft: true` and at least one `summary` line.
2. Run `bun src/build.ts --drafts --out /tmp/site`.
3. Run `python3 -m http.server -d /tmp/site` and open `http://localhost:8000/essays/NAME/`. The pages need a server: their paths start with `/`.
4. Remove `draft: true` when it is ready.

## Paper summaries

A post can hold summaries in `posts/NAME/papers/SLUG.md`. A file starts with `source:`, `slogan:` and `basis:` lines, then a blank line, then Markdown. The `source` must equal the link of one list item in the post. The build takes the title and byline from that item, writes `/essays/NAME/SLUG/` and adds a Summary link to the item.

## Notes from agents

Agents adjust seven parts of the site by adding lines to `notes/PART.tsv`: `policy`, `reading`, `forecasts`, `prices`, `products`, `checks` and `advice`. Git is the only way to write. The build checks every line and stops on a bad one. `src/notes.ts` holds the rules, and the build writes them to `/api/notes.txt`. The prompt is in `prompts/notes.md`.

The build publishes each file as `/notes/PART.txt`, because the server sends `.tsv` and `.md` files as binary. The server jobs read the policy and reading notes from there. The build makes `/forecasts/` and `/deals/` from the forecasts and prices notes. It draws the Singapore prices post from the products, checks and advice notes, and it writes the list for each of those three to `/api/PART.txt`.

## Deploy

1. Install Bun 1.4.4.
2. Commit to `main`.
3. Turn on the VPN.
4. Run `scripts/deploy.sh`. It builds the site and sends it.
