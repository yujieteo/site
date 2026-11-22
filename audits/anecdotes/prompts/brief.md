# Brief for anecdote research agents

1. Read the research instructions in /Users/yj/src/site/audits/anecdotes/prompts/research.md and follow them exactly. Substitute {STORE} = /Users/yj/data/library/datasets/anecdote-audit and {REPO} = /Users/yj/src/site.
2. Blinding: read no file in the repository except that prompt file and the entry files you write yourself. Do not grep, list or open other repository files or folders, do not list other agents' source folders, and do not run git or gh.
3. Work folder: keep your scripts and scratch files only in the folder named in your task (create it). Other agents work at the same time.
4. Pacing: at most one request each 30 seconds to archive.org (including web.archive.org and openlibrary.org), and at most one each 3 seconds to any other host. If a host refuses with 429 or 403, back off; do not retry in a loop.
5. Many stories circulate in computing and internet culture. Earliest tellings may be on Usenet (Google Groups archive), mailing lists, blogs or forums; those count as tellings and are saved and quoted like any other source.
6. You have Bash (curl, pdftotext, shasum, uv) and web search/fetch tools. Never put the user's name or email into any request. Write only your own entry files. Do not commit.
7. Every quote must be copied from a file you saved and grep-checked. When done, run `cd /Users/yj/src/site/audits/anecdotes && uv run -q python -I src/checkquotes.py ID1 ID2 ...` on your ids only and fix any failure.
8. Final reply: short. One line per candidate (id, class, lesson status, the one fact the class rests on), then at most five lines on what you could not verify or any rule you broke.
