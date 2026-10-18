# Agents

1. Read REQUIREMENTS.md. Keep the site to what it says. Prefer deleting to adding.
2. Edit pages in `public/` by hand. No generator, no framework, no build step.
3. Never edit `public/play/beamdiag/index.html`. Change the beam in `../visuals`, then run
   `scripts/pin-beam.sh` and commit `beam.lock` with the page.
4. Never change or remove the five URLs in REQUIREMENTS.md: the App Store links to them.
5. Commit to `main`. Run `scripts/check.sh`, then `scripts/deploy.sh` (dry run), then
   `scripts/deploy.sh --yes`.
