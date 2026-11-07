# Site

Posts by Yu Jie Teo. Read VISION.md and REQUIREMENTS.md first.

## Write a post

1. Make `posts/NAME/post.md`. Copy the specimen.
2. Run `bun src/build.ts --drafts --out /tmp/site`.
3. Open `/tmp/site/essays/NAME/index.html`.
4. Remove `draft: true` when it is ready.

## Check and deploy

1. Run `nix develop`. The shell supports Arm and Intel Linux, and Arm Macs.
   The pinned Nixpkgs no longer supports Intel Macs.
2. On a Mac, run `bun install --frozen-lockfile`, then
   `bunx playwright-core install chromium` once. Run it again when the lock file
   changes the browser build. Linux gets Chromium from Nix.
3. `./gate` runs every check. All browser checks use `CHROMIUM` if set, then
   `chromium` on the path, then the Playwright browser cache. Set `CHROMIUM` to
   a browser path to use your own build. A bad path fails the gate.
4. `scripts/deploy.sh` runs the gate and deploys. Turn on the VPN first.

## Measure

1. `bin/bench build` measures the build.
2. `bun src/build.ts --drafts` prints the first load of each post.
3. `bin/ab build BASE_REF` compares a change to a base.

## Expiry

EXPIRY holds a date. When it passes, rethink the blueprint or rebuild.
