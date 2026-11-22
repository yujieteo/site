"""Write the page posts/false-anecdotes/post.md from the audit data (METHOD.md section 10).

Usage: uv run python -I src/page.py
Before the ranking exists, it writes a draft that lists the researched entries without scores.
"""
import json
from pathlib import Path

HERE = Path(__file__).resolve().parent.parent
DATA = HERE / "data"
SITE = HERE.parent.parent
OUT = SITE / "posts/false-anecdotes/post.md"
AUDIT = "https://github.com/yujieteo/site/tree/main/audits/anecdotes"
RANKED = ("invented", "changed", "misattributed")
CLASS_TEXT = {
    "invented": "Invented: it did not happen",
    "changed": "Changed: it happened, but a detail the lesson needs is false",
    "misattributed": "Told about the wrong people, place or field",
    "unsupported": "No record shows it happened, and none rules it out",
    "true": "True as told",
}
LESSON_TEXT = {"holds": "Holds", "does not hold": "Does not hold", "not established": "Not established"}
SHORT = {"invented": "Invented", "changed": "Changed", "misattributed": "Wrong people or place",
         "unsupported": "Not established", "true": "True"}
GROUPS = [("False or misleading", RANKED), ("Not established either way", ("unsupported",)), ("True as told", ("true",))]


def read_tsv(path):
    if not Path(path).exists():
        return []
    lines = Path(path).read_text().splitlines()
    cols = lines[0].split("\t")
    return [dict(zip(cols, ln.split("\t"))) for ln in lines[1:] if ln.strip()]


def esc(t):
    return (t or "").replace("|", "\\|").strip()


def quote_block(q):
    return "\n".join("> " + ln for ln in esc(q).split("\n"))


def links(src):
    out = []
    if src.get("url"):
        out.append(f"[Source ↗]({src['url']})")
    if src.get("archive") and src.get("archive") != src.get("url"):
        out.append(f"[Archived copy ↗]({src['archive']})")
    return " · ".join(out)


def source(label, src):
    if not src:
        return []
    head = ", ".join(x for x in (src.get("what") or src.get("where"), src.get("who"), src.get("date")) if x)
    lines = [f"**{label}:** {esc(head)}. {links(src)}".rstrip(), ""]
    if src.get("quote"):
        lines += [quote_block(src["quote"]), ""]
    else:
        lines += ["*Not quoted: no saved full text of this source could be checked.*", ""]
    return lines


def entry(e, names, takeaways, score=None):
    lines = [f'<div id="{e["id"]}"></div>', "", f"### {esc(names.get(e['id'], e['id']))}", ""]
    lines += [f"**As usually told:** {esc(e['as_told'])}", ""]
    lines += [f"**The usual lesson:** {esc(e['lesson'])}", ""]
    lines += [f"**What happened:** {esc(e['what_happened'])}", ""]
    lines += [f"**Verdict:** {CLASS_TEXT.get(e['class'], e['class'])}."]
    if e.get("false_part"):
        lines[-1] += f" {esc(e['false_part'])}"
    lines += [""]
    lv = e.get("lesson_verdict") or {}
    lines += [f"**Does the lesson hold?** {LESSON_TEXT.get(lv.get('status'), lv.get('status', ''))}. {esc(lv.get('why'))}", ""]
    if takeaways.get(e["id"]):
        lines += [f"**What to take away:** {esc(takeaways[e['id']])}", ""]
    if score:
        lines += [f"**Scores:** how common {score['f1']} (books {score['n_books']}, Wikipedia {score['n_wikipedia']}); "
                  f"how misleading {score['f2_rater1']} and {score['f2_rater2']} of 4 from the two raters.", ""]
    lines += ["<details>", "<summary>Sources and quotes</summary>", ""]
    lines += source("Earliest telling found", e.get("earliest_telling"))
    for o in e.get("original") or []:
        lines += source("Original record", o)
    if e.get("teller_correction"):
        lines += source("Correction by the teller", e["teller_correction"])
    if lv.get("source"):
        lines += source("Evidence on the lesson", lv["source"])
    if e.get("confidence_note"):
        lines += [f"*Still uncertain:* {esc(e['confidence_note'])}", ""]
    lines += ["</details>", ""]
    return lines


def overview(es, takeaways, names):
    """The summary at the top: counts, patterns, and one row per story."""
    n = len(es)
    cls = {c: sum(e["class"] == c for e in es) for c in SHORT}
    false = [e for e in es if e["class"] in RANKED]
    st = lambda group, s: sum((e.get("lesson_verdict") or {}).get("status") == s for e in group)  # noqa: E731
    lines = ["## At a glance", "",
             f"Of the {n} stories checked so far, {len(false)} are false or misleading: {cls['invented']} were invented, "
             f"{cls['changed']} were changed in a way that carries the lesson, and {cls['misattributed']} are told about the wrong "
             f"people, place or field. For {cls['unsupported']} more, no record shows the event happened and none rules it out. "
             f"Only {cls['true']} are true as told.", "",
             f"A false story does not always carry a false lesson. Of the {len(false)} false or misleading stories, the usual lesson "
             f"still holds for {st(false, 'holds')}, does not hold for {st(false, 'does not hold')}, and is not established for "
             f"{st(false, 'not established')}. So the useful question is usually not \"did it happen?\" but \"what does the real "
             "event, or the real study, actually show?\" The last column of the table answers that for each story.", "",
             "Some patterns repeat. Many stories trace back to one unnamed source, such as a former employee "
             "([the iPod in the fish tank](#jobs-fish-tank)) or \"corporate lore\" ([the Battle Chess duck](#battle-chess-duck)). "
             "Real studies get stretched past what they measured ([Mehrabian's 7-38-55 rule](#mehrabian)). Sayings move to more "
             "famous people ([\"Let them eat cake\"](#let-them-eat-cake)). And harm grows as the story is retold: dozens of eye "
             "injuries at one festival became [a blinded audience](#rave-laser-blinding).", ""]
    rows = ["| Story | What the record shows | Does the usual lesson hold? | What to take away |", "|---|---|---|---|"]
    for _, group in GROUPS:
        for e in sorted((e for e in es if e["class"] in group), key=lambda e: names.get(e["id"], e["id"]).lower()):
            lv = (e.get("lesson_verdict") or {}).get("status", "")
            rows.append(f"| [{esc(names.get(e['id'], e['id']))}](#{e['id']}) | {SHORT[e['class']]} | "
                        f"{LESSON_TEXT.get(lv, lv)} | {esc(takeaways.get(e['id'], ''))} |")
    return lines + rows + [""]


def main():
    names = {r["id"]: r["name"] for r in read_tsv(DATA / "candidates.tsv")}
    takeaways = {r["id"]: r["takeaway"] for r in read_tsv(DATA / "takeaways.tsv")}
    es = [json.loads(p.read_text()) for p in sorted((DATA / "entries").glob("*.json"))]
    by_id = {e["id"]: e for e in es}
    ranking = read_tsv(DATA / "ranking.tsv")
    ranked = [e for e in es if e["class"] in RANKED]
    unsupported = [e for e in es if e["class"] == "unsupported"]
    true = [e for e in es if e["class"] == "true"]
    done, total = len(es), len(names)

    lines = ["---", "title: Widely told anecdotes that are false or misleading", "date: 2026-11-22", "draft: false",
             f"summary: {done} of {total} anecdotes checked so far against their earliest telling and the record they claim to report.",
             "summary: Each entry quotes both sources, gives an archived link, and says separately whether the lesson still holds.",
             "summary: A draft. The ranking by how common and how misleading each story is comes after every candidate is checked.",
             "---",
             "Some stories get told so often that nobody checks them. This page checks them. For each story it finds the earliest "
             "telling it can, and the event, study or record the story claims to report. Both are quoted, and each has an archived copy.",
             "",
             "A story counts as false if the event did not happen as told: it was invented, it was changed in a way that carries "
             "its lesson, or it is told about the wrong people, place or field. Whether the lesson still holds is a separate question, "
             "and each entry answers it separately.",
             "",
             f"The rules were fixed and committed before any research began. The [method, the data and every change to the plan ↗]({AUDIT}) "
             "are public. Retellings and debunking articles were used only to find sources, never as evidence.",
             ""]
    if not ranking:
        lines += [f"**This is a draft.** {done} of the {total} candidate stories are checked. Nothing is ranked or scored yet: "
                  "the counts of how often each story is told, and the two raters' scores, come after every story is checked, "
                  "so that the scores cannot be shaped by the counts.", ""]
    lines += overview(es, takeaways, names)
    lines += ["## False or misleading", ""]
    if ranking:
        lines += ["| Rank | Story | How common | How misleading (two raters) |", "|---|---|---|---|"]
        for r in ranking:
            lines.append(f"| {'=' if r['tied'] else ''}{r['rank']} | {esc(names[r['id']])} | {r['f1']} | {r['f2_rater1']}, {r['f2_rater2']} |")
        lines.append("")
        order = [by_id[r["id"]] for r in ranking]
        scores = {r["id"]: r for r in ranking}
    else:
        order, scores = ranked, {}
    for e in order:
        lines += entry(e, names, takeaways, scores.get(e["id"]))
    if unsupported:
        lines += ["## Not established either way", "",
                  "No record shows these events happened, and none rules them out. They are not ranked.", ""]
        for e in unsupported:
            lines += entry(e, names, takeaways)
    if true:
        lines += ["## True as told", "",
                  "These stories were checked and found true as told, so they are not ranked. Some still carry a lesson the "
                  "evidence does not support.", ""]
        for e in true:
            lines += entry(e, names, takeaways)
    lines += ["## Out of scope", "",
              "These were set aside before research, because they are quotations, parables, personal stories or duplicates.", "",
              "| Story | Reason |", "|---|---|"]
    for r in read_tsv(DATA / "rejected_scope.tsv"):
        lines.append(f"| {esc(r['name'])} | {esc(r['reason']).replace('Out of scope before the freeze: ', '').capitalize()} |")
    lines.append("")
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text("\n".join(lines))
    print("wrote", OUT, done, "entries")


if __name__ == "__main__":
    main()
