# Site

Posts by Yu Jie Teo.

## Write a post

1. Make `posts/NAME/post.md`. Start it with front matter: `title`, `date`, `draft: true` and at least one `summary` line.
2. Run `bun src/build.ts --drafts --out /tmp/site`.
3. Run `python3 -m http.server -d /tmp/site` and open `http://localhost:8000/essays/NAME/`. The pages need a server: their paths start with `/`.
4. Remove `draft: true` when it is ready.

## Deploy

1. Install Bun 1.4.4.
2. Commit to `main`.
3. Turn on the VPN.
4. Run `scripts/deploy.sh`. It builds the site and sends it.
