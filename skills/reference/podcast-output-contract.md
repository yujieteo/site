# Podcast output contract

Stable paths and fields for a Media item. Read only when writing or validating episode metadata by hand.

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
