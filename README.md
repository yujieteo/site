# Site

Posts by Yu Jie Teo. Read VISION.md and REQUIREMENTS.md first.

## Write a post

1. Make `posts/NAME/post.md`. Copy the specimen.
2. Run `bun src/build.ts --drafts --out /tmp/site`.
3. Open `/tmp/site/essays/NAME/index.html`.
4. Remove `draft: true` when it is ready.

## Check and deploy

1. `./gate` runs every check.
2. `scripts/deploy.sh` runs the gate and deploys. Turn on the VPN first.

## Measure

1. `bin/bench build` measures the build.
2. `bun src/build.ts --drafts` prints the first load of each post.
3. `bin/ab build BASE_REF` compares a change to a base.

## Expiry

EXPIRY holds a date. When it passes, rethink the blueprint or rebuild.
