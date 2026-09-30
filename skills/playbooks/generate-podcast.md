# Generate and publish a podcast episode

Create one dated, roughly 30-minute audio episode from `data/notes.md` and
publish it through the site's normal build and deploy flow.

Use this playbook when the user asks for a podcast episode from their notes,
such as "make me a podcast from my notes" or "publish this week's episode".
Invoking it authorizes the complete publish workflow below: select, generate,
validate, build, commit, push, deploy, and verify.

## Inputs

- `data/notes.md` is the sole content source; `data/note-tags.json` holds the
  canonical tags. Never edit generated `site/` files by hand.
- `data/cv/cv.yaml` supplies the site name spoken in the introduction.
- Optional overrides: episode date, target minutes, and voice.

Read only when needed: [focus selection](../reference/podcast-focus-selection.md)
and the [output contract](../reference/podcast-output-contract.md).

## Local synthesis

- Speech comes from the Kokoro-82M model through the `kokoro` Python package
  on the local machine; the output is mono 24 kHz MP3 at 64 kbps encoded with
  `lameenc`. No paid or remote speech service is used.
- One-time setup from the repository root:

  ```sh
  uv venv --python 3.13 .venv
  uv pip install -r requirements.txt -r requirements-podcast.txt
  ```

  `uv` is optional; `python3.13 -m venv .venv` and `.venv/bin/pip install -r
  requirements.txt -r requirements-podcast.txt` create the same environment.
  The first synthesis downloads the Kokoro model. Stage A also needs the
  separate `visuals` checkout (see the [build section](../../README.md#build)).

## Generate

```sh
.venv/bin/python scripts/podcast.py plan --target-minutes 30
.venv/bin/python scripts/podcast.py generate --target-minutes 30
```

- `plan` selects the episode without rendering audio; review the focus and
  candidate counts before committing to a long render.
- `generate` writes the metadata and MP3. Useful flags: `--target-minutes N`
  sets the duration aim, `--date YYYY-MM-DD` sets the episode date,
  `--voice <id>` changes the Kokoro voice, and `--focus <tag> [<tag> ...]`
  covers exactly those canonical content tags instead of choosing a focus
  (use it for an episode on a subject written up as dated notes).
- Check the printed duration and listen to a sample when the result matters.

## Publish

1. Run Stage A of [verification](../verify.md#stage-a-pre-deploy). Do not
   deploy after a failure.
2. Confirm `site/media/index.html` features the new episode, the episode page,
   the copied MP3, and the `site/podcast/` redirect pages exist, and the
   generated changes listed by `scripts/site_diff.py` (see
   [Deploy generated files](deploy.md)) contain no unrelated churn.
3. Commit `data/podcasts/**`. Never commit `site/`; Git ignores it and every
   deploy builds it.
4. Push the branch requested by the user. Site publishing normally uses
   `main`; never rewrite published history.
5. Resolve the SCP destination from secure runtime configuration. Deploy the
   media index, item pages, audio, and the `site/podcast/` redirect pages using
   unique temporary names,
   checksum verification, preserved prior files, and atomic renames as in
   [Deploy generated files](deploy.md). Include the other changed pages that
   `scripts/site_diff.py` lists. Never write deployment details into the repository.
6. Run Stage B of [verification](../verify-post-deploy.md). Fetch the
   deployed media index, episode page, and MP3 over HTTPS and require HTTP
   200 responses with the expected episode. A 403 means the file is not
   web-readable. Restore every preserved file if a deployed artifact is corrupt
   or incomplete.

Principles: [No secrets in the repository](../principles/no-secrets-in-repo.md),
[Atomic safe deploy](../principles/atomic-safe-deploy.md),
[Generated files are read-only](../principles/generated-files-are-read-only.md),
and [Keep the diff scoped](../principles/minimal-diff-scope.md).
