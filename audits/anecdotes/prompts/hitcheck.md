# Hit-check prompt

Each line of `{SAMPLE}` is one search hit: a book or Wikipedia article snippet, found by a search for one anecdote. The anecdotes are:

{ANECDOTES}

Label each hit with one letter:

- **T**: the snippet tells this anecdote as a true event.
- **N**: the snippet tells this anecdote as an example or story, without saying whether it is true.
- **D**: the snippet tells this anecdote in order to doubt or correct it.
- **X**: the snippet is not about this anecdote, or there is too little text to tell.

Judge only from the snippet. Do not search. When unsure between T and N, choose N. When the snippet does not show the anecdote, choose X.

Write `{OUT}` as a TSV file with the header `collection	id	key	label`, one row per hit, in the order given. Reply with the count of each label.
