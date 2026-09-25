---
name: publish-site-notes
description: Append notes to this static site, rebuild it, push the requested Git branch, and deploy only the changed generated site files over SCP.
---

# Publish site notes

Use this workflow when the user asks to add entries to `data/notes.md` and publish them.

## Privacy and scope

- Never write credentials, usernames, hostnames, IP addresses, private local paths, SSH configuration, or deployment secrets into the repository.
- Obtain the Git branch and SCP destination from the current request or secure local configuration at execution time.
- Treat `data/notes.md` as the sole source of truth. Never hand-edit the generated
  `site/notes.html`.
- Preserve the user's note text unless they explicitly request editing or invoke
  a skill whose stated purpose includes sharpening it.
- Do not change unrelated source files. If pre-existing changes are present, inspect them and follow the user's requested commit scope.
- Deploy only generated files relevant to the change, including `site/corpus.json`
  whenever public content changes. Never use deletion or mirroring flags, and
  never remove remote files.

## Workflow

1. Inspect `git status`, the beginning/current-date section, and all dated headings
   in `data/notes.md` before editing.
2. Add notes as separate Markdown paragraphs at the top of the requested
   `## YYYY-MM-DD` section. Add the heading in descending date order if it does
   not exist; never create a second heading for the same date.
3. Preserve trailing hashtags as tags. The generator accepts letters, numbers, underscores, hyphens, and dots in tag names.
4. Validate and rebuild from the repository root:

   ```sh
   .venv/bin/python scripts/validate.py
   .venv/bin/python scripts/build.py
   ```

5. Verify that `site/notes.html` contains the new date, text, links, and tags,
   and that `site/corpus.json` contains matching note records. Run
   `git diff --check` and review the diff before committing.
6. Commit the intended changes and push the branch requested by the user. Do not silently substitute another branch name.
7. Deploy `site/corpus.json` first and the changed generated notes page second.
   Upload each to a unique temporary file in the same remote directory, verify
   its checksum, preserve the current file temporarily, and atomically rename
   the verified upload into place:

   ```sh
   scp site/corpus.json <ssh-target>:<document-root>/<unique-corpus-temp-name>
   scp site/notes.html <ssh-target>:<document-root>/<unique-notes-temp-name>
   ssh <ssh-target> '<verify both; preserve current files; rename corpus, then notes>'
   ```

   Replace the placeholders at runtime. Do not commit their resolved values.

8. Compare local and remote checksums, then fetch the public HTTPS page and
   corpus and confirm that the new dated section and records are served. Restore
   the preserved prior files if either deployed artifact is corrupt or incomplete.
9. Report the commit, pushed branch, deployed files, and verification result. Mention any remaining working-tree changes.

Stop and ask for direction if the requested branch or deployment destination cannot be resolved safely.
