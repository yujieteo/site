# Deviations from the frozen method

Each change after the freeze commit (see `FROZEN`), with the reason and whether any score or count had been seen.

| # | Commit | File | Change | Why | Scores or counts seen? |
|---|---|---|---|---|---|
| 1 | this commit | `data/plants.tsv` exposure | Two research agents (batch A: pottery-class, five-monkeys, van-halen, written-goals; batch C: nordstrom-tire, atari-et, wald-bombers) read `data/plants.tsv` by a grep of the data folder, so they saw the expected classes. Both say they chose each class from saved quotes only, and each affected entry records the exposure. Section 8 says agents are not told which candidates are planted; the file was readable in the repository they worked in. Later agents will work without access to it | Not a rule change: a breach of the blinding, reported | No |
| 2 | this commit | `src/checkquotes.py` input | The Atari quotes come from `clip-*.ocr.txt` files that the agent extracted by script from newspapers.com pages, where the OCR text sits inside a script block that the checker removes | The checker could not read the text otherwise | No |
| 3 | this commit | Section 8 stop | The planted case `nordstrom-tire` (expected `true`) came out `unsupported`. Under section 8 the work stopped: nothing is ranked, counted or published, and the result went to the owner | Stop rule | No |
