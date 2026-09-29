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

## Focus selection

- The seed is the most common content tag that has not led a previous episode.
  Content tags use the `topic`, `project`, or `arxiv-math` class. Workflow tags
  (`action`, `status`, for example `todo`, `read`, `focus`) never lead or join
  an episode focus.
- The focus expands with tags that co-occur with the seed and the growing
  focus, then with the most common remaining content tags until the focus can
  supply the target duration. This keeps the opening sections on-theme while
  guaranteeing enough material when a subject is small.
- Notes are grouped under the first focus tag they match, with notes not used
  by an earlier episode first and then newest first.
- The target duration is an aim, not a minimum. Rendering reserves the ending
  from measured speech rates so it never exceeds the target; a focus with little
  material publishes shorter rather than adding filler.

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

## Output contract

This contract is stable and must be mirrored exactly into the skills
repository; the dependent task copies these paths and fields rather than
inventing new ones.

- Metadata lives at `data/podcasts/<episode-id>.yaml`, where `<episode-id>` is
  `<YYYY-MM-DD>-<focus-slug>` dated in `Asia/Singapore`. It is validated by
  `schema/podcasts.schema.json` and contains exactly:
  - `id`: the episode id, equal to the file stem;
  - `date`: ISO date;
  - `title`: human title derived from the leading focus tags;
  - `summary`: one sentence naming the focus and source-note span;
  - `focus_tags`: ordered canonical tags that define the episode focus;
  - `notes`: the `note:<sha256>` ids of the notes actually rendered;
  - `duration_seconds`: measured MP3 duration;
  - `voice`: Kokoro voice id;
  - `audio`: `audio/<episode-id>.mp3`, relative to `data/podcasts/`.
- Audio lives at `data/podcasts/audio/<episode-id>.mp3`.
- The normal build generates `site/media/index.html` (latest item featured
  with a player, then the dated list), `site/media/<episode-id>.html` (player,
  summary, focus tags, and links to the source note dates), and
  `site/media/audio/<episode-id>.mp3` (byte copy). A legacy copy of the audio
  and a redirect page are written under `site/podcast/` so existing
  `/podcast/...` URLs keep resolving.
- The build also adds a `podcast:<episode-id>` record to `site/corpus.json`
  with `url` (`media/<episode-id>.html`), `date`, `tags` (the focus tags),
  `summary`, `audioUrl` (`media/audio/<episode-id>.mp3`), and
  `durationSeconds`.

## Generate

```sh
.venv/bin/python scripts/podcast.py plan --target-minutes 30
.venv/bin/python scripts/podcast.py generate --target-minutes 30
```

- `plan` selects the episode without rendering audio; review the focus and
  candidate counts before committing to a long render.
- `generate` writes the metadata and MP3. Useful flags: `--target-minutes N`
  sets the duration aim, `--date YYYY-MM-DD` sets the episode date, and
  `--voice <id>` changes the Kokoro voice.
- Check the printed duration and listen to a sample when the result matters.

## Publish

1. Run Stage A of [verification](../verify.md#stage-a-pre-deploy). Do not
   deploy after a failure.
2. Confirm `site/media/index.html` features the new episode, the episode page,
   the copied MP3, and the `site/podcast/` redirect pages exist, and the
   post-build diff contains no unrelated churn.
3. Commit `data/podcasts/**`, the changed `site/media/**` and `site/podcast/**`
   files, and any other demonstrably required generated file (navigation and
   `site/llms.txt` change only when the build changed them).
4. Push the branch requested by the user. Site publishing normally uses
   `main`; never rewrite published history.
5. Resolve the SCP destination from secure runtime configuration. Deploy the
   media index, item pages, audio, and the `site/podcast/` redirect pages using
   unique temporary names,
   checksum verification, preserved prior files, and atomic renames as in
   [Deploy generated files](deploy.md). Include the other changed pages from
   the reviewed diff. Never write deployment details into the repository.
6. Run Stage B of [verification](../verify.md#stage-b-post-deploy). Fetch the
   deployed media index, episode page, and MP3 over HTTPS and require HTTP
   200 responses with the expected episode. A 403 means the file is not
   web-readable. Restore every preserved file if a deployed artifact is corrupt
   or incomplete.

Principles: [No secrets in the repository](../principles/no-secrets-in-repo.md),
[Atomic safe deploy](../principles/atomic-safe-deploy.md),
[Generated files are read-only](../principles/generated-files-are-read-only.md),
and [Keep the diff scoped](../principles/minimal-diff-scope.md).
