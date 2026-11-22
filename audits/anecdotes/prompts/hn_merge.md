# Stage 2 merge prompt

`{NAMES}` lists anecdote names extracted from Hacker News items, with how many items gave each name. Different names can be the same story.

Group the names that are the same story (the same event, told about the same people, place or study). Give each group one short canonical name of 4 to 12 words. Keep stories apart when they are different events, even if similar. Drop names that are not anecdotes told as real events (general claims, quotations with no occasion, claims about words or products).

Write `{OUT}` as a TSV file with the header `name	canonical`, one row per input name; `canonical` is `-` for a dropped name. Do not search the web. Reply with the number of groups.
