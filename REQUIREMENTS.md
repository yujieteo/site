# Site requirements

Agreed with the owner on 2026-10-18, and changed on 2026-10-23 for the new home page and its look on all pages.
When the site and this file disagree, change the site.
The beam tool's own requirements are in `beamdiag/REQUIREMENTS.md`.

## Purpose

1. The site does four jobs only:
   - show the identity of Yu Jie Teo through a small, hand-picked collection of explorations
   - host the privacy and support pages of Lullapixie and Marklove
   - host the beam diagram tool
   - publish the OpenPGP public key of contact@teoyujie.org at `/contact.asc`, and for WKD at
     `/.well-known/openpgpkey/` (direct method) and `/.well-known/openpgpkey/teoyujie.org/`
     (advanced method, served at openpgpkey.teoyujie.org)
2. An exploration is an experiment or an essay on this site, or a project in its own repository.
   A project is a link to its repository and one line of text: the site copies nothing from it.
   Essays are optional. There is no CMS, database, GitHub API feed, automatic ranking, scheduled
   sync or publishing schedule. The site stays complete with no new content.

## URLs

3. These URLs always work and never change:
   - `/lullapixie/privacy.html`, `/lullapixie/support.html`
   - `/marklove/privacy.html`, `/marklove/support.html`
   - `/play/beamdiag/`
4. The home page `/` has the site name, the links "Explorations" and "GitHub ↗", the heading
   "Ideas, experiments, and things built along the way.", the art, and "Selected explorations".
   Each selected exploration is one `<li>` in `public/index.html`: to add or remove one, change
   only that entry. The footer links the policy and support pages, and has one line with
   contact@teoyujie.org, a link to its key and the key fingerprint.
5. Every other old URL returns 404.

## Look

6. The site has an editorial look: a warm neutral background, large serif headings and a calm
   grid. Its fonts are Source Serif 4 and DM Sans, open licence, in `public/fonts/`. All pages
   use the one stylesheet `public/style.css`, and have the header and footer of the home page.
   There are no themes and no dark mode. The art on the home page is random walks and the
   normal density on a canvas, with slow motion. Under `prefers-reduced-motion` it is a still
   frame.
7. Each policy and support page is plain HTML of a few KB.

## Build and deploy

8. Only the beam page has a build. There is no Nix, no CI, no line budget and no reproducibility check.
9. The beam page is built from `beamdiag/` into `public/play/beamdiag/` and committed.
10. To deploy, an agent commits to `main`, turns on the VPN and runs `scripts/deploy.sh`. It runs
    `scripts/check.sh`, replaces the site on the server with `public/` and tests the URLs. The deploy
    stops if the check fails.
