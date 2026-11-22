# Stage 2 extraction prompt (one agent per batch of Hacker News items)

Each line of `{BATCH}` is one Hacker News story title or comment excerpt. It was found because it contains a phrase such as "myth", "apocryphal" or "urban legend".

For each item, name the **anecdote** it calls false, doubtful, a myth, a legend or apocryphal, if there is one. An anecdote is a short story told as a real event, with people, a place, a company or a study in it. Examples: "the Stanford prison experiment guards became cruel on their own", "NASA's space pen versus the Russian pencil".

Not anecdotes (write `-`):
- a general claim with no told event ("10x engineers are a myth", "the myth of meritocracy");
- a quotation with no told occasion ("Ford said 'faster horses'");
- a claim about a word, a statistic, a product or a technology with no story;
- items that only use the word in passing, or name no story.

Write `{OUT}` as a TSV file with the header `id	anecdote`, one row per item, in the order given. In `anecdote`, write a short neutral name of 4 to 12 words that names the people or place and the event, for example `Wald armour on returning bombers' unhit areas`. Use the same name each time the same story appears. Do not search the web. Reply with the number of items that name an anecdote.
