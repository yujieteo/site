# Frozen method: widely told anecdotes that are false or misleading

This file, the candidate list, the planted cases, the search queries, the prompts and the code in `src/` were committed before any anecdote was researched, scored or counted. The commit hash is in `FROZEN`. After that commit the rules do not change. Every later change goes in `DEVIATIONS.md` with its commit, the reason, and whether any score or count had been seen.

What was seen before the freeze: one Open Library query on the pottery story (`"quantity group" "quality group" pot`, 44 hits, no hit read beyond the first), and test queries about a lighthouse keeper, which is not a candidate. No other count was run.

## 1. What is checked

- **Candidates.** The 53 anecdotes in `data/candidates.tsv`, written from memory before the freeze. Nobody is added after the freeze, except by a logged deviation. The page holds at most 100 entries. If more than 100 entries qualify, the 100 with the highest score (section 7) are shown and the rest are listed as checked.
- **Anecdote.** A short story told as a real event, with people, a place or a study in it. A quotation with no told occasion, a parable told as a parable, and a claim about a word are out of scope. `data/rejected_scope.tsv` lists the ones set aside for this reason before the freeze.
- **Order of work.** The planted cases (section 8) are researched first, end to end. Then the other candidates, in the order of the file. A candidate that is not finished is listed as "not checked", never guessed.

## 2. Verdict classes

Each candidate gets exactly one class. A note can say that a second class also applies.

| Class | Meaning | Where it goes |
|---|---|---|
| `invented` | There is positive evidence that the event did not happen: the teller admitted it; a record that would show the event shows otherwise; the earliest telling is fiction, a joke or a hypothetical; or the event is impossible. | Ranked |
| `changed` | The event happened, but a detail that the lesson needs is false. | Ranked |
| `misattributed` | The event happened, but to other people, in another place or in another field. | Ranked |
| `true` | The event happened as told, in every detail the lesson needs. | Rejected list |
| `unsupported` | After the search steps of section 3, no record shows the event and none rules it out. | Shown unranked, in its own section, and in the rejected list |

A missing record alone is not enough for `invented`. It gives `unsupported`, unless a record that should show the event exists and does not show it.

## 3. Sources

For each candidate the research finds two things.

1. **The earliest telling found.** Search steps, in this order: the Open Library full-text search sorted by year; the sources cited in the English Wikipedia article on the story, if one exists; Google Books and HathiTrust full-text search; free newspaper archives (Chronicling America, Trove, Papers Past, Google News Archive); then each telling's own cited source, followed back until it stops. The page labels this "earliest telling found", not "earliest telling".
2. **The original record**: the event, study, document or person the story claims to report. For example the study itself, a court record, a contemporary newspaper report, or the person's own published words.

Rules for both:

- Each is quoted word for word from a copy the research saved. `src/checkquotes.py` checks that every quote appears in the saved text, after case, spaces, quote marks, dashes and line-end hyphens are made the same. An entry ships only if every quote passes. The saved copies stay outside git (`AA_DATA`); the repository keeps each file's SHA-256.
- Each source has an archived link: a Wayback Machine snapshot, or an archive.org item for a scanned book. Requests to archive.org are at most one each 5 seconds.
- A correction by the original teller is searched for and quoted if found.
- **Leads only.** Retellings, debunking articles, encyclopedias, Snopes and Quote Investigator are leads. They point to sources. They are never evidence for a verdict.
- **Relayed words.** A person's words count as their own only if published under their name, or in an interview or letter published as theirs. Words that a third party says the person told them are a lead. A verdict that rests only on relayed words is `unsupported`.

## 4. Does the lesson hold?

Each entry states the usual lesson in one sentence, then one of: **holds**, **does not hold**, **not established**. "Holds" and "does not hold" each need a source that is evidence for the lesson itself, such as a study, a review or an official record. The anecdote's own truth does not decide it. This is separate from the verdict.

## 5. How common (factor 1)

Two fixed collections, searched through public interfaces that anyone can rerun:

| Collection | Interface | Unit counted |
|---|---|---|
| Books | Open Library "search inside" (`openlibrary.org/search/inside.json`), the full text of the Internet Archive's scanned books | Distinct works: editions with the same creator surname and title (before any subtitle) are one |
| Wikipedia | English Wikipedia search API, articles only (namespace 0) | Distinct articles |

- **Queries.** `data/queries.json`, written before any count was seen, except the one books query in the header. Each anecdote has one or more queries. Its hits in a collection are the union over its queries. `src/count.py count` runs them, saves every raw response in `AA_DATA`, and writes `data/counts_raw.tsv` and `data/hits.tsv` (every hit's identifier) with the date. Both indexes change over time, so a rerun on another day can differ. The stored responses are the record.
- At most 2,000 hits are read per query. If a query reports more, the distinct units are multiplied by hits reported / hits read.
- **Hand check.** `src/count.py sample` draws up to 10 units per anecdote and collection, from seed 20261122. A fresh AI agent with `prompts/hitcheck.md` labels each snippet: **T** tells the story as true, **N** tells it as an example or story without saying whether it is true, **D** tells it to doubt or correct it, **X** is not this story. The checker sees no scores. A telling is T or N. The share of tellings in the sample is reported with the D share.
- **Estimate.** *n* = scaled distinct units × share of tellings in the sample (0 if the sample is empty).
- **Factor 1.** For each collection, *s* = log₁₀(1 + *n*) / log₁₀(1 + the largest *n* among the ranked entries). *F1* is the mean of *s* over the two collections. It runs from 0 to 1.

## 6. How misleading (factor 2)

The scale, fixed now:

**Part A, what the false part does to the lesson (0–3).**
- 0: The false part does not touch the lesson (a wrong date, a wrong number that the lesson does not use).
- 1: The false part sharpens the lesson. The real event supports a weaker form of it.
- 2: The false part carries the lesson. Without it, the real event does not support the lesson.
- 3: The false part flips the lesson. The real event supports the opposite, or a lesson that conflicts with it.

**Part B, real decisions (0 or 1).** 1 if the story, as usually told, is used to argue for a real decision about money, health, law, public policy, hiring, management, teaching or product design. 0 if it is told mainly as a curiosity.

*F2* = A + B, from 0 to 4.

- **Rater 1** is the AI model that did the research. It scores every ranked entry from the fields in section 9 and commits the scores before any count is run.
- **Rater 2** is a fresh AI agent, not a copy of rater 1's session. It gets `prompts/rater.md` and the same fields, in an order shuffled with seed 20261122. It sees no scores, no counts and no ranks.
- **Agreement.** Reported: the share of entries where the two F2 scores are equal, the share within 1 point, the quadratic-weighted kappa on F2, and Cohen's kappa on Part B.
- **Combined F2** is the mean of the two raters' scores.
- Both raters are AI models of the same family. That makes agreement higher than two independent people would give. The page says so.

## 7. Ranking

- **Rule.** Score *S* = √(*F1* × *F2*/4). Entries are ordered by *S*, highest first.
- **Both scores** are shown for every entry: F1 with its two collection counts, and F2 from each rater.
- **Ties.** Each entry has a low and a high score: *S* with the lower and with the higher of the two raters' F2. An entry's rank is 1 + the number of entries whose low score is above its high score. Entries that share a rank are shown as tied (for example "=4").
- **Changing the weights.** The page reports the order under *S_w* = *F1*^*w* × (*F2*/4)^(1−*w*) for *w* = 0.25 and 0.75 (the rule above is *w* = 0.5), and under the plain mean (*F1* + *F2*/4)/2. For each it gives Kendall's τ against the main order and every entry that moves 3 places or more.

## 8. Planted cases

`data/plants.tsv` lists 11 cases chosen before the freeze: 4 believed false, 6 surprising but believed true, and the pottery class story, which is open. The research agents are not told which candidates are planted.

- **Pass rule.** Each "ranked" plant must end in `invented`, `changed` or `misattributed`. Each "rejected-true" plant must end in `true`. The pottery story has no expected class. Its verdict, and whether the photography class version is confirmed, are reported from primary sources only.
- **If a plant fails**, the work stops. Nothing is ranked or published, and the failure goes to the owner with the evidence. A plant whose research cannot finish counts as a failure.

## 9. Entry record

Each candidate has one file `data/entries/ID.json` with: the story as usually told; the usual lesson; what happened; the false part (one sentence, empty for `true`); the class; the earliest telling found (date, who, where, quote, link, archived link, saved file's SHA-256); the original record or records (same fields); the teller's correction if any; the lesson verdict with its source and quote; and the search steps tried. The raters see only: the story as usually told, the usual lesson, what happened and the false part.

## 10. Outputs

- `data/entries/`, `data/scores_rater1.tsv`, `data/scores_rater2.tsv`, `data/counts_raw.tsv`, `data/hits.tsv`, `data/hitcheck.tsv`, `data/ranking.tsv`, `data/sensitivity.tsv`, `data/rejected.tsv` (every checked and rejected anecdote, with the reason).
- The page `posts/false-anecdotes/post.md`, written by `src/page.py`. For each entry it shows the story as usually told, what happened, the quoted sources with archived links, both scores and whether the lesson holds. Page layout may change after the freeze without a deviation. Rules may not.
