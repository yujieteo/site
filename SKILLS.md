---
name: publish-site-notes
description: Append notes to this static site, rebuild it, push the requested Git branch, and deploy only the changed generated site files over SCP.
---

# Publish site notes

Use this workflow when the user asks to add entries to `data/notes.md` and publish them.

## Privacy and scope

- Never write credentials, usernames, hostnames, IP addresses, private local paths, SSH configuration, or deployment secrets into the repository.
- Obtain the Git branch and SCP destination from the current request or secure local configuration at execution time.
- Preserve the user's note text unless they explicitly request editing.
- Do not change unrelated source files. If pre-existing changes are present, inspect them and follow the user's requested commit scope.
- Deploy only generated files relevant to the change. Never use deletion or mirroring flags, and never remove remote files.

## Workflow

1. Inspect `git status` and the end of `data/notes.md` before editing.
2. Add the notes as separate Markdown paragraphs under the requested `## YYYY-MM-DD` heading. Add the heading if it does not exist.
3. Preserve trailing hashtags as tags. The generator accepts letters, numbers, underscores, hyphens, and dots in tag names.
4. Validate and rebuild from the repository root:

   ```sh
   .venv/bin/python scripts/validate.py
   .venv/bin/python scripts/build.py
   ```

5. Verify that `site/notes.html` contains the new date, text, links, and tags. Run `git diff --check` and review the diff before committing.
6. Commit the intended changes and push the branch requested by the user. Do not silently substitute another branch name.
7. Deploy only the changed generated notes page:

   ```sh
   scp site/notes.html <ssh-target>:<document-root>/notes.html
   ```

   Replace the placeholders at runtime. Do not commit their resolved values.

8. Verify deployment through a read-only SSH command. Compare the local and remote checksums and confirm that the new dated section appears in the remote `notes.html`.
9. Report the commit, pushed branch, deployed files, and verification result. Mention any remaining working-tree changes.

Stop and ask for direction if the requested branch or deployment destination cannot be resolved safely.
