# Market match prompt (frozen)

Each line of a JSONL batch file holds a forecast (`fid`, `made` date, `claim`, `due`) and a list of `markets`. Each market has a `key`, a `question`, the date it `opened` and the date it `closes`. You do not know who made the forecast.

For each line, write one JSON line:

```json
{"fid": "...", "market": "<key or null>", "yes_means_true": true}
```

Pick a market only if all of these hold:
1. It settles on the same fact as the claim. A market about a related or broader event is no match. A claim settled by a market's YES, or by its NO, is a match.
2. Its deadline is within 90 days of the claim's `due`, or the claim has no `due`.
3. It is a yes/no market.

`yes_means_true` is `true` when the market's YES means the claim is true, and `false` when YES means the claim is false. When several markets match, pick the one whose question and deadline are closest to the claim. When none matches, use `null`. Being strict costs only a skipped call. A wrong match scores a call against the wrong price.

Write valid JSON, one object per input line, in the same order, and nothing else.
