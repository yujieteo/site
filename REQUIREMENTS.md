# Site requirements

Agreed with the owner on 2026-10-18, changed on 2026-10-23 for the new home page and its look on all pages,
changed on 2026-10-28 for the log, and changed on 2026-10-29 for the home layout of emilkowal.ski.
When the site and this file disagree, change the site.
The beam tool's own requirements are in `beamdiag/REQUIREMENTS.md`.

## Purpose

1. The site does five jobs only:
   - show the identity of Yu Jie Teo through a small, hand-picked collection of explorations
   - host the privacy and support pages of Lullapixie and Marklove
   - host the beam diagram tool
   - publish the OpenPGP public key of contact@teoyujie.org at `/contact.asc`, and for WKD at
     `/.well-known/openpgpkey/` (direct method) and `/.well-known/openpgpkey/teoyujie.org/`
     (advanced method, served at openpgpkey.teoyujie.org)
   - publish the log at `/log`: the media entries from the pond app, newest first, with RSS at
     `/log/feed.xml`. The server makes both at request time from its entry store and
     `public/log/template.html`. The entries go in place of `<!-- pond:entries -->`.
     `media-plan.md` is the master copy of the media plan, and the app edits it.
   Reason: the captain approved the pond design on 2026-10-28.
2. An exploration is an experiment or an essay on this site, or a project in its own repository.
   A project is a link to its repository and one line of text: the site copies nothing from it.
   The exceptions are the experiment pages `/play/goosestrike/`, `/play/theorem-explorer/`,
   `/play/theorem-learner/`, `/play/neurons/` and `/play/marklove/`, each copied from its repository.
   `/play/neurons/` gets the model weights from huggingface.co when the visitor loads them.
   It also talks to the room relay on the server when a visitor opens or shares a room.
   The server never hosts the weights.
   Reason: the captain asked for the neuron explorer under Play on 2026-10-28.
   `/play/marklove/` imports kokoro-js 1.2.1 (pinned) from cdn.jsdelivr.net when the visitor uses
   the voice. Then it gets the Kokoro-82M model (`onnx-community/Kokoro-82M-v1.0-ONNX`, q8) from
   huggingface.co. The model has no pinned revision: it follows the main branch.
   The server never hosts the model.
   Reason: the captain asked for narrated video and podcast export with the Kokoro voice in
   `/play/marklove/` on 2026-10-29 (marklove-web PR https://github.com/yujieteo/marklove-web/pull/2).
   Reason for `/play/marklove/`: the captain asked for the Marklove web build under Play on 2026-10-29.
   Essays are optional. There is no CMS, database, GitHub API feed, automatic ranking, scheduled
   sync or publishing schedule. There are two exceptions. The first is the store of signed log
   entries on the server. The second is the room relay on `POST /play/neurons/room`. It keeps the
   views, names and notes of a room for a few days, with no accounts.
   Reason for the room relay: the captain asked for co-editing through a share link in the neuron
   explorer (server PR https://github.com/yujieteo/server/pull/8).
   The site stays complete with no new content.
   Reason: the captain approved the pond design on 2026-10-28.

## URLs

3. These URLs always work and never change:
   - `/lullapixie/privacy.html`, `/lullapixie/support.html`
   - `/marklove/privacy.html`, `/marklove/support.html`
   - `/play/beamdiag/`
4. The home page `/` has the layout of the emilkowal.ski home page. The header has the name
   "Yu Jie Teo" and the tagline "Mechanical Engineer" under it, with no nav. Then come the sections
   "Today" (one short paragraph), "Explorations" and "Log" (one link to `/log`).
   Each exploration is one `<li>` in `public/index.html`: to add or remove one, change
   only that entry. The footer links the policy and support pages, and has one line with
   contact@teoyujie.org, a link to its key and the key fingerprint, and one line with GitHub.
   Reason: on 2026-10-29 the captain asked for the owner name and a tagline that says who the owner is, for a
   Today section, and for Explorations, Log and GitHub out of the header.
   Reason for "Log": the captain approved the pond design on 2026-10-28.
5. Every other old URL returns 404.

## Look

6. The site has the look of emilkowal.ski, light only: a near-white background, one 692 px column,
   16 px Inter for all text, IBM Plex Mono for code, and quiet underlined links. Both fonts have an
   open licence and are in `public/fonts/`. The tokens and his interaction rules are in
   `/shared/kowalski.css`. This URL does not change: the tools link it when they move to the look.
   All pages use the stylesheet `public/style.css`, which imports it, and have the header and footer
   of the home page. Hover styles apply only under `(hover: hover) and (pointer: fine)`.
   Reason: the captain chose mockup A of the design board and asked for his interaction rules in one
   shared stylesheet on 2026-10-29.
   The exceptions are the tools under `/play/`. `/play/marklove/` is a full-screen editor without the
   site header and footer.
   Reason: the site header and footer take the space of the editor.
   It links `/shared/kowalski.css` and uses his interaction rules. It keeps its document themes, dark
   themes included: the rule below of no themes and no dark mode is not for its documents.
   Reason: the captain asked for his interaction rules on all pages, Marklove included, on 2026-10-29
   (marklove-web PR https://github.com/yujieteo/marklove-web/pull/3).
   The other tools keep the previous look until each moves to the new one: they use
   `public/play/style.css` with Source Serif 4 and DM Sans.
   Reason: the captain put the port of the tools out of this change on 2026-10-29.
   There are no themes and no dark mode. There is no art or animation on the home page.
   Reason: the captain asked to remove the animation from the home page on 2026-10-29.
7. Each policy and support page is plain HTML of a few KB.

## Build and deploy

8. Only the beam page has a build. There is no Nix, no CI, no line budget and no reproducibility check.
9. The beam page is built from `beamdiag/` into `public/play/beamdiag/` and committed.
10. To deploy, an agent commits to `main`, turns on the VPN and runs `scripts/deploy.sh`. It runs
    `scripts/check.sh`, replaces the site on the server with `public/` and tests the URLs. The deploy
    stops if the check fails.
