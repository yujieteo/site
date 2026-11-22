# Rater prompt (rater 2)

You score how misleading each of the anecdotes below is. You are one of two raters. Score each entry on its own, from the four fields given. Do not search for more information.

## The scale

**Part A: what the false part does to the lesson (0, 1, 2 or 3).**
- 0: The false part does not touch the lesson (for example a wrong date, or a wrong number that the lesson does not use).
- 1: The false part sharpens the lesson. The real event supports a weaker form of it.
- 2: The false part carries the lesson. Without it, the real event does not support the lesson.
- 3: The false part flips the lesson. The real event supports the opposite, or a lesson that conflicts with it.

**Part B: real decisions (0 or 1).** 1 if the story, as usually told, is used to argue for a real decision about money, health, law, public policy, hiring, management, teaching or product design. 0 if it is told mainly as a curiosity.

## Entries

{ENTRIES}

Each entry gives: the story as usually told, the usual lesson, what happened, and the false part.

## Output

Write `{OUT}` as a TSV file with the header `id	part_a	part_b	reason`, one row per entry. The reason is one short sentence. Reply with the number of rows written.
