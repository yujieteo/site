# Research prompt (one agent per batch of candidates)

You check whether widely told anecdotes are true. For each candidate in your batch, find what really happened from primary sources, and write one JSON file.

Candidates: {CANDIDATES}  (each: id and the story in one line)

## Rules

1. Find **the earliest telling** you can. Search in this order: Open Library full-text search (`https://openlibrary.org/search/inside.json?q=...`, look at `meta_year`); the sources cited by the English Wikipedia article on the story, if any; Google Books and HathiTrust full-text search; free newspaper archives (Chronicling America, Trove, Papers Past, Google News Archive); then follow each telling's own cited source back until it stops. Write down every step you tried in `search_steps`.
2. Find **the original record**: the event, study, document or person that the story claims to report. For a study, the paper. For an event, a record made at the time, or the person's own published words.
3. Search for a **correction by the original teller** and record it if found.
4. **Leads are not evidence.** Retellings, debunking articles, Wikipedia, Snopes and Quote Investigator only point you to sources. Read the source they point to. Never quote a debunker as the evidence.
5. **Relayed words.** A person's words count only if published under their name, or in an interview or letter published as theirs. "X told me that…" in someone else's text is a lead only.
6. **Save every source you quote.** Download it with `curl -L -A "anecdote-audit/1.0" -o FILE URL` into `{STORE}/sources/ID/`. For a PDF, also run `pdftotext -layout FILE FILE.txt`. For a scanned archive.org book, save its full text (`https://archive.org/download/IDENT/IDENT_djvu.txt`). Put at most one request each 5 seconds to archive.org and each 2 seconds to any other host.
7. **Quote word for word** from the saved file. Copy, do not retype from memory. Check with `grep -F` that a distinctive part of each quote is in the saved file. If a source is not online in full text, say so in `search_steps` and do not quote it.
8. **Archived link.** For each source give a Wayback Machine link. Look for one with `https://archive.org/wayback/available?url=URL`. If none exists, request one with `https://web.archive.org/save/URL` and wait for it. For an archive.org book, its `https://archive.org/details/IDENT` page is the archived link.
9. **Class.** Choose exactly one:
   - `invented`: positive evidence that it did not happen (the teller admitted it; a record that would show it shows otherwise; the earliest telling is fiction, a joke or a hypothetical; or it is impossible).
   - `changed`: it happened, but a detail that the lesson needs is false.
   - `misattributed`: it happened, but to other people, in another place or another field.
   - `true`: it happened as told, in every detail the lesson needs.
   - `unsupported`: no record shows it and none rules it out. A missing record alone gives `unsupported`, not `invented`.
10. **Lesson.** State the usual lesson in one sentence. Then say whether it **holds**, **does not hold** or is **not established**, with a source that is evidence for the lesson itself (a study, review or official record), not for the anecdote. Save and quote that source too.
11. Write in plain, short sentences. Be exact about dates, names and numbers. Do not guess. If you cannot find something, write that you could not.

## Output

Write `{REPO}/audits/anecdotes/data/entries/ID.json`:

```json
{
  "id": "ID",
  "as_told": "the story as usually told, 2-4 sentences",
  "lesson": "the usual lesson, one sentence",
  "what_happened": "what really happened, 2-5 sentences",
  "false_part": "the false part in one sentence, empty if class is true",
  "class": "invented | changed | misattributed | true | unsupported",
  "also": "a second class that also applies, or empty",
  "earliest_telling": {"date": "YYYY or YYYY-MM-DD", "who": "", "where": "title of the work", "quote": "", "url": "", "archive": "", "file": "sources/ID/FILENAME", "sha256": ""},
  "original": [{"what": "what this record is", "date": "", "who": "", "quote": "", "url": "", "archive": "", "file": "", "sha256": ""}],
  "teller_correction": null,
  "lesson_verdict": {"status": "holds | does not hold | not established", "why": "one or two sentences", "source": {"what": "", "quote": "", "url": "", "archive": "", "file": "", "sha256": ""}},
  "search_steps": ["what you searched and what you found, one line each"],
  "confidence_note": "what remains uncertain"
}
```

`teller_correction`, when found, has the same fields as one `original` item. `file` paths are relative to `{STORE}`. `sha256` is the file's SHA-256 (`shasum -a 256`). When you finish, reply with one line per candidate: id, class, lesson status.
