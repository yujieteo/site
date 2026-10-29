# Site requirements

Agreed with the owner on 2026-10-18, changed on 2026-10-23 for the new home page and its look on all pages,
and changed on 2026-10-28 for the log.
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
4. The home page `/` has the site name, the links "Explorations", "Log" and "GitHub ↗", the heading
   "Ideas, experiments, and things built along the way.", the art, and "Selected explorations".
   Each selected exploration is one `<li>` in `public/index.html`: to add or remove one, change
   only that entry. The footer links the policy and support pages, and has one line with
   contact@teoyujie.org, a link to its key and the key fingerprint.
   Reason for "Log": the captain approved the pond design on 2026-10-28.
5. Every other old URL returns 404.

## Look

6. The site has an editorial look: a warm neutral background, large serif headings and a calm
   grid. Its fonts are Source Serif 4 and DM Sans, open licence, in `public/fonts/`. All pages
   use the one stylesheet `public/style.css`, and have the header and footer of the home page.
   The exception is `/play/marklove/`, a full-screen editor with its own look from its repository.
   Reason: the site header and footer take the space of the editor.
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
