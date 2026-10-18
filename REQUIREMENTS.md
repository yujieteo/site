# Site requirements

Agreed with the owner on 2026-10-18. When the site and this file disagree, change the site.
The beam tool's own requirements are in `beamdiag/REQUIREMENTS.md`.

## Purpose

1. The site does two jobs only:
   - host the privacy and support pages of Lullapixie and Marklove
   - host the beam diagram tool
2. The site has no stories, blog, notebooks, other tools or experiments.

## URLs

3. These URLs always work and never change:
   - `/lullapixie/privacy.html`, `/lullapixie/support.html`
   - `/marklove/privacy.html`, `/marklove/support.html`
   - `/play/beamdiag/`
4. The home page `/` is a list of links to these pages and nothing else.
5. Every other old URL returns 404.

## Look

6. One plain stylesheet: black on white, system fonts. No themes, no dark mode, no decoration,
   no fades.
7. Each policy and support page is plain HTML of a few KB.

## Build and deploy

8. Only the beam page has a build. There is no Nix, no CI, no line budget and no reproducibility check.
9. The beam page is built from `beamdiag/` into `public/play/beamdiag/` and committed.
10. To deploy, an agent commits to `main`, runs `scripts/check.sh`, then copies `public/` to the
    VPS with `scripts/deploy.sh`. The deploy stops if the check fails.
