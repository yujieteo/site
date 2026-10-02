"""Write ../index.html from deck.md: run `python3 make_index.py` in this folder after editing the deck.

The page is self-contained (the house style tokens inlined, no network requests). It embeds deck.md
verbatim, lists its slides, links the handout and article PDFs that beamdswitch printed from the same
deck, and opens the deck in the site's beamdswitch, which loads decks only from this origin: the page
hands it a same-origin blob URL of the embedded Markdown.
"""
import html
import re
from pathlib import Path

HERE = Path(__file__).resolve().parent
DECK = (HERE / "deck.md").read_text(encoding="utf-8")
VIDEO = "https://youtu.be/q3ca41YIZjc"


def inline(md):
    """The deck's inline Markdown, as used in its quote blocks: links and plain text."""
    out, pos = [], 0
    for m in re.finditer(r"\[([^\]]+)\]\((https://[^)\s]+)\)", md):
        out.append(html.escape(md[pos:m.start()]))
        out.append(f'<a href="{html.escape(m.group(2))}">{html.escape(m.group(1))}</a>')
        pos = m.end()
    out.append(html.escape(md[pos:]))
    return "".join(out)


def outline():
    """Sections and slides, each slide with its bullets and its credited quote."""
    meta = dict(re.findall(r"^(\w+): (.*)$", DECK.split("---")[1], re.M))
    sections, div = [], None
    for line in DECK.split("---", 2)[2].splitlines():
        if line.startswith(":::"):
            div = line[3:].strip() or None
            continue
        if line.startswith("# "):
            sections.append({"title": line[2:], "slides": []})
        elif line.startswith("## "):
            sections[-1]["slides"].append({"title": line[3:], "points": [], "quote": "", "key": ""})
        elif sections and sections[-1]["slides"] and line.strip():
            slide = sections[-1]["slides"][-1]
            if div is None and line.startswith("- "):
                slide["points"].append(line[2:])
            elif div == "block Kun Chen":
                slide["quote"] = line
            elif div == "key":
                slide["key"] = line
    return meta, sections


def page():
    meta, sections = outline()
    style = (HERE / "page.css").read_text(encoding="utf-8")
    parts, n = [], 1
    for section in sections:
        parts.append(f'<section class="part"><h2>{html.escape(section["title"])}</h2><ol class="slides" start="{n}">')
        for slide in section["slides"]:
            points = "".join(f"<li>{inline(p)}</li>" for p in slide["points"])
            quote = f'<p class="quote"><span class="label">Kun Chen</span> {inline(slide["quote"])}</p>' if slide["quote"] else ""
            key = f'<p class="key">{inline(slide["key"])}</p>' if slide["key"] else ""
            parts.append(f'<li class="slide"><h3>{html.escape(slide["title"])}</h3><ul>{points}</ul>{quote}{key}</li>')
            n += 1
        parts.append("</ol></section>")
    assert "</script" not in DECK.lower(), "deck.md would end its <script> early"
    return f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<script id="site-theme">try {{ var t = localStorage.getItem("theme"); if (t === "light" || t === "dark") document.documentElement.dataset.theme = t; }} catch (e) {{}}</script>
<title>{html.escape(meta["title"])}</title>
<meta name="description" content="A narrated beamdswitch deck of the career and AI advice Kun Chen gives in the A Life Engineered interview, one idea per slide, each with a short credited quote and a timestamp.">
<style>
{style}</style>
</head>
<body>
<main>
<p class="eyebrow"><a href="../../index.html">teoyujie.org</a><span>Deck</span><span>beamdswitch</span></p>
<h1>{html.escape(meta["title"])}</h1>
<p class="lede">{len([s for p in sections for s in p["slides"]])} slides of the advice Kun Chen, formerly E7 at Facebook and partner level at Microsoft, gives in <a href="{VIDEO}">The 2% of Engineers Winning the AI Era (Ex-Meta L8)</a>, an interview by Steve on A Life Engineered. Each slide is one idea, paraphrased, with a short quote and timestamps into the video.</p>
<div class="toolbar">
<button type="button" class="primary no-print" id="present">Present with narration</button>
<button type="button" class="no-print" id="download">Download deck (.md)</button>
<a class="btn" href="talk-handout.pdf">Handout (PDF)</a>
<a class="btn" href="talk-article.pdf">Article with narration (PDF)</a>
<a class="btn" href="{VIDEO}">Watch the interview</a>
</div>
<p class="note no-print" id="status" role="status">Present opens the deck in <a href="../../visuals/beamdswitch/index.html">beamdswitch</a> in a new tab, with slides, a handout, narration and video export, all generated in your browser. Keep this tab open while it loads. Narration downloads a voice model the first time (about 111 MB).</p>
<hr>
{"".join(parts)}
<hr>
<p class="note">Source: Kun Chen, interviewed on A Life Engineered, <a href="{VIDEO}">{VIDEO}</a>. Quotes are short and credited; the rest is paraphrase. Deck by {html.escape(meta["author"])}, {html.escape(meta["date"])}.</p>
</main>
<script type="text/markdown" id="deck">{DECK}</script>
<script>
(() => {{
  const md = document.getElementById("deck").textContent;
  const file = () => new Blob([md], {{ type: "text/markdown" }});
  document.getElementById("present").addEventListener("click", () => {{
    // beamdswitch loads ?src only from this origin; a blob URL made here is same-origin and lives
    // as long as this tab does.
    const src = URL.createObjectURL(file());
    const url = new URL("../../visuals/beamdswitch/index.html", location.href);
    url.searchParams.set("src", src);
    url.searchParams.set("view", "");
    if (!window.open(url.href, "_blank")) document.getElementById("status").textContent = "The browser blocked the new tab. Allow pop-ups for this site, or download the deck and open it in beamdswitch.";
  }});
  document.getElementById("download").addEventListener("click", () => {{
    const a = Object.assign(document.createElement("a"), {{ href: URL.createObjectURL(file()), download: "kun-chen-ai-era-advice.md" }});
    document.body.append(a); a.click(); a.remove();
  }});
}})();
</script>
</body>
</html>
"""


(HERE.parent / "index.html").write_text(page(), encoding="utf-8")
