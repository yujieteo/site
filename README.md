# Site

Posts by Yu Jie Teo.

## Write a post

1. Make `posts/NAME/post.md`. Start it with front matter: `title`, `date`, `draft: true` and at least one `summary` line.
2. Run `bun src/build.ts --drafts --out /tmp/site`.
3. Open `/tmp/site/essays/NAME/index.html`.
4. Remove `draft: true` when it is ready.

## Deploy

1. Install Bun 1.4.4.
2. Commit to `main`.
3. Turn on the VPN.
4. Run `scripts/deploy.sh`. It builds the site and sends it.

## Versions

Tags named `vYYYY.MM.DD` mark the state of `main` on that date. They do not show the live version.
