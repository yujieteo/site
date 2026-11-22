# Takeaway prompt (DEVIATIONS.md 9)

You write one field, `takeaway`, for each anecdote entry you are given. Do no new research. Use only the fields in the entry file: as_told, lesson, what_happened, false_part, class, lesson_verdict and confidence_note.

The takeaway is the lesson a reader should actually take from the story, now that the facts are known. It must rest on what the entry shows happened, or on the entry's lesson evidence. It is not a summary of the verdict.

Rules:
1. One sentence, at most 30 words, in plain words. Active voice. No jargon that the entry does not explain.
2. If the usual lesson holds, say the narrower or truer form of it that the evidence supports, for example "Long-term index holders beat frequent traders, but the dead-investor study does not exist."
3. If the usual lesson does not hold, say what the record teaches instead, for example "Courts held Schmeiser liable because he knowingly planted saved resistant seed, not because pollen blew in."
4. If the event is unsupported or the lesson is not established, say what a careful reader can rely on, and say plainly that the rest is unproven. Do not invent a moral.
5. Do not add facts that are not in the entry. Do not praise or mock anyone.

Output: write a TSV file at the path you are given, with the header `id\ttakeaway` and one row per entry, in the order given. No tabs or newlines inside a takeaway.
