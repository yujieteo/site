# Podcast focus selection

How `scripts/podcast.py` chooses an episode focus. Read only when explaining or changing the selection.

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
- `--focus <tag> [<tag> ...]` skips this selection: the episode covers exactly
  the given canonical content tags, in that order, and fails when a tag is
  unknown, a workflow tag, or has no speakable notes.
