# Verdict prompt (frozen)

You read texts from Hacker News and LessWrong, one per line of a JSONL batch file. Each line has `token`, `site`, `posted` (UTC date), `thread` (the thread or post title, sometimes empty) and `text`. The text may be a window cut from a longer comment, so it can start or end mid-sentence. You do not know who wrote it. Do not try to find out, and do not look it up.

For every line, write one JSON line to the output file:

```json
{"token": "...", "forecasts": [ ... ]}
```

`forecasts` lists every **checkable forecast about the world** the author makes in this text. Use an empty list when there is none. A forecast is the author's own claim, made in their own voice, about a future event or a future state of the world that public records could later settle. These do not count:
- claims about the reader or other commenters ("I bet you've never used Lisp"),
- hypotheticals and thought experiments, and conditionals whose condition never happened,
- claims already settled when they were posted,
- quotes of someone else's forecast,
- vague claims nobody could settle ("AI will change everything"),
- bets about the site itself (karma, votes, who replies).

Each forecast is an object:

| Field | Meaning |
|---|---|
| `claim` | One plain sentence, phrased so it is either true or false, with the deadline in it if there is one. Phrase it as the author expects it to come out. |
| `stated_p` | The probability the author gives **this claim**, as a number from 0 to 1, only if the text states a number or odds for it ("70%", "3:1", "p=0.2", "even odds", "1 in 10"). Words such as "likely", "almost certainly" or "I'd bet" without odds give `null`. When the stated number is for the opposite of `claim`, convert it. |
| `p_text` | The exact words of the text that give `stated_p`, or `null`. |
| `asserted` | `true` if the author expects `claim` to come true. With `stated_p` this is `stated_p > 0.5`. |
| `due` | The date by which the claim is settled, `YYYY-MM-DD`. Use the stated deadline. "By 2015" means `2015-12-31`. "Next year" counts from the posted date. If there is no deadline, `null`. |
| `outcome` | `"true"`, `"false"`, `"partly"` (the main part came true and a stated part did not), `"open"` (not settled by 2026-05-31), or `"unclear"` (you cannot tell what happened, or the claim cannot be pinned down). Judge only from what happened, never from how reasonable the forecast was. |
| `settled_on` | The date the outcome became known, `YYYY-MM-DD`. For a claim with a deadline that failed, use the deadline. `null` when `open` or `unclear`. |
| `source` | Where the outcome can be checked: a URL you are confident exists, or a precise citation (publication, date, figure). `null` when `open` or `unclear`. |
| `search` | 2 to 6 words to search prediction markets for the same question, such as `"ethereum proof of stake 2022"`. |
| `fred` | Only if the claim is about the level of a US data series published by FRED (unemployment rate, CPI, GDP, fed funds rate, 10-year Treasury yield): `{"series": "UNRATE", "level": 8.0, "above": true, "date": "YYYY-MM-DD"}`. Otherwise `null`. |

Rules:
- Be strict about what counts as a forecast and about `stated_p`. When in doubt, leave it out or use `null`.
- Judge outcomes as of 2026-11-15, from what you know. Where your knowledge is thin or you are not sure, say `"unclear"`. A wrong verdict is worse than an `"unclear"` one.
- A text can hold many forecasts, as in yearly prediction threads. List each one separately.
- Keep `claim` under 200 characters. Do not quote more of the text than `p_text` needs.
- Write valid JSON, one object per input line, in the same order, and nothing else.
