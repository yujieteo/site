---
title: Singapore policy actionables, a weekly ranking of government documents
date: 2026-11-10
summary: A server job reads 14 primary sources each Saturday and ranks the new documents by fixed rules.
summary: It reads no news. It reads agency notices, the Gazette and replies to parliamentary questions.
summary: The rules favour what a resident can act on in money, work and public services.
summary: An AI model can add or remove up to 60 points for a document and leave one sentence on what to do.
summary: The ranking is at /singapore-policy-actionables.html, with an RSS feed and a plain text file.
---
News about Singapore policy arrives after an editor has chosen it. The documents behind the news are public, and most of them never become a story. This page ranks the documents themselves.

Read it here: [the ranking](/singapore-policy-actionables.html), [the RSS feed](/singapore-policy-actionables.xml) and [the plain text file](/singapore-policy-actionables.txt).

## What it reads

The job reads primary sources only. It fetches them once a week, on Saturday morning in Singapore.

| Source | What it gives |
|---|---|
| [REACH ↗](https://www.reach.gov.sg/latest-happenings/public-consultation/) | Public consultations and their status |
| [Government Gazette ↗](https://www.egazette.gov.sg/gazettes/) | New Acts, bills and subsidiary legislation |
| MOF, MTI, MOH, MHA, MDDI, MSE, MOT, PMO | Notices, speeches and replies to parliamentary questions |
| MOM, URA, ACRA | Notices and statistics |
| [gov.sg ↗](https://www.gov.sg/explainers/) | The government's own explainers |

Most of the list is replies to parliamentary questions. A reply often holds a table that the ministry publishes nowhere else.

## The rules

Each document starts with the points of its kind. Then the job adds and removes points. It reads only the title and the tags that the source gives.

| Rule | Points |
|---|---|
| Open consultation | 60 |
| Bill | 50 |
| New law in the Gazette | 35 |
| Notice | 25 |
| Reply in Parliament, or a closed consultation | 20 |
| Explainer | 15 |
| Speech, or a letter to a newspaper | 5 |
| Each lens the title matches: money, work, services | +12 |
| The title names an action, such as apply, register, launch, increase or a start date | +15 |
| A reply whose title promises numbers, such as breakdown, data or trends | +10 |
| The title is about a ceremony, a visit or an appointment | -30 |
| Each day since the date of the document | -2 |

The age of an open consultation costs 10 points at most, because it stays useful until it closes. The list holds the last 28 days. Open consultations stay for 120 days.

The three lenses are word lists. Money covers tax, property, CPF and markets. Work covers jobs, wages, work passes and training. Services covers vouchers, subsidies, housing, health care, schools and fares.

The same saved copies and the same notes always give the same ranking. The word lists and the points are at the top of [the script ↗](https://github.com/yujieteo/server/blob/main/sbin/sg-update).

## What the AI adds

Rules cannot read. A title that says "launches consultation" scores high, even when the consultation concerns a few hundred co-operatives. So the ranking takes one more input.

An AI model reads [the plain text file](/singapore-policy-actionables.txt) and opens the documents that look useful. For each one it writes a line in [a notes file](/notes/policy.tsv): the document, points from -60 to 60, and one sentence. The job adds the points and shows the sentence. The score of a noted document lists the change as "claude" in the text file.

The plain text file is made for this. It has one line per document, with the reasons for the score, and its first lines say how to write a note. I ask Claude to do this by hand for now, with the steps in [the notes guide](/api/notes.md). The job itself never calls a model.

## Limits

- The rules match words in titles. They miss a useful document with a dull title, and they reward a dull document with a busy one.
- The Monetary Authority of Singapore, HDB, IRAS, CPF and Singapore Statutes Online are not in the list. Their sites had no feed, blocked the job, or were down when I built it.
- Parliament's list of bills answers the server with a bot check, so the bills come from the Gazette. The Gazette shows a bill when it is published, not when it passes.
- A note is an AI model's reading of a document. It can be wrong. Open the document before you act on it.
- Nothing here is financial advice.
