"""HTML shared by every page: escaping, the page shell, MathJax and Related links."""

import html
import json
import re
import unicodedata

from site_data import ROOT

TEMPLATES = ROOT / "templates"
BASE_TEMPLATE = (TEMPLATES / "base.html").read_text(encoding="utf-8")


def contains_math(html_text):
    """Detect TeX outside code blocks so MathJax is loaded only when needed."""
    prose = re.sub(r"<(pre|code)\b[^>]*>.*?</\1>", "", html_text, flags=re.DOTALL)
    return bool(re.search(r"\$[^$\n]+\$|\\\(|\\\[", prose))


def esc(value):
    """Escape a value for HTML text or a quoted attribute."""
    return html.escape("" if value is None else str(value), quote=True)


def time_tag(date, label=None, css_class=""):
    """A <time> element for an ISO date, showing ``label`` (the date by default)."""
    class_attr = f' class="{css_class}"' if css_class else ""
    return f'<time{class_attr} datetime="{esc(date)}">{esc(date if label is None else label)}</time>'


# MathJax 4 typesets in Fira Math: it fetches the mathjax-fira font package
# for its own version from jsDelivr, so the font stays matched to the core.
MATHJAX_SCRIPT = r"""
<script>
  window.MathJax = {
    tex: {
      inlineMath: [['$', '$'], ['\\(', '\\)']],
      displayMath: [['$$', '$$'], ['\\[', '\\]']],
      processEscapes: true
    },
    options: {
      skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code', 'input']
    },
    output: { font: 'mathjax-fira' },
    chtml: { scale: 1.06 }
  };
  document.addEventListener('entries-rendered', function (event) {
    if (!(window.MathJax && window.MathJax.typesetPromise)) return;
    const target = event.detail && event.detail.target;
    if (window.MathJax.typesetClear) MathJax.typesetClear(target ? [target] : undefined);
    MathJax.typesetPromise(target ? [target] : undefined);
  });
</script>
<script id="MathJax-script" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/4.1.3/tex-mml-chtml.js"></script>
"""


NAV_KEYS = ["home", "about", "paper_links", "notes", "media", "blog", "visuals"]


def render_page(cv, active, title, content, corpus_revision, root="", math=False,
                shell_class=""):
    """Wrap ``content`` in the site shell; ``active`` is the current NAV_KEYS entry, or None."""
    name = cv["name"]
    # Every tab reads "<page> — <site>"; the homepage passes the full title.
    full_title = title if title.startswith(name) else f"{title} — {name}"
    fields = {
        "shell_class": shell_class,
        "title": esc(full_title),
        "content": content + (MATHJAX_SCRIPT if math else ""),
        "root": root,
        "corpus_revision": corpus_revision,
        "name": esc(name),
        **{f"aria_{key}": ' aria-current="page"' if key == active else "" for key in NAV_KEYS},
    }
    return BASE_TEMPLATE.format_map(fields)


def build_redirect(target, title):
    """A minimal static redirect page for a moved URL."""
    return (
        '<!doctype html>\n'
        '<html lang="en">\n'
        '<head>\n'
        '  <meta charset="utf-8">\n'
        '  <meta name="viewport" content="width=device-width, initial-scale=1">\n'
        f'  <meta http-equiv="refresh" content="0; url={esc(target)}">\n'
        f'  <link rel="canonical" href="{esc(target)}">\n'
        f'  <title>{esc(title)}</title>\n'
        '</head>\n'
        '<body>\n'
        f'  <p>This page has moved. <a href="{esc(target)}">Continue</a>.</p>\n'
        f'  <script>window.location.replace({json.dumps(target)});</script>\n'
        '</body>\n'
        '</html>\n'
    )


KIND_LABELS = {
    "note": "Note", "blog": "Post", "visualization": "Visual", "podcast": "Episode",
    "video": "Video", "paper": "Paper link", "resource": "Resource", "about": "Page",
    "profile": "Page", "calibration": "Calibration",
}
LINK_LABELS = {
    "resolves": "Resolves", "resolvedBy": "Resolved by", "extends": "Extends",
    "extendedBy": "Extended by", "uses": "Uses", "usedBy": "Used by", "related": "Related",
}


def shorten(text, limit):
    text = re.sub(r"\s+", " ", str(text or "")).strip()
    if len(text) <= limit:
        return text
    cut = text[:limit - 1].rsplit(" ", 1)[0].rstrip(",;:–—-")
    return f"{cut}…"


SENTENCE_END = re.compile(r"(?<=[.!?])\s+(?=[\"“(\[A-Z0-9])")


def split_first_sentence(text, limit=110):
    """Return (first sentence, the rest) of plain text, the first shortened to ``limit``."""
    text = re.sub(r"\s+", " ", text or "").strip()
    parts = SENTENCE_END.split(text, maxsplit=1)
    first = parts[0]
    rest = parts[1] if len(parts) > 1 else ""
    return shorten(first, limit), rest


def record_label(record):
    """A short human label for a Corpus Record, used in link lists."""
    kind = KIND_LABELS.get(record["kind"], record["kind"])
    if record["kind"] == "note":
        first, _ = split_first_sentence(record.get("summary", ""), 90)
        return f"{kind}, {record['date']} — {first}"
    return f"{kind} — {record.get('title', '')}"


def render_links(record, records, root="", compact=False):
    """The Related block for one record, or "" when it has no links."""
    links = record.get("links") or []
    if not links:
        return ""
    items = "".join(
        f'<li><span class="related-rel">{esc(LINK_LABELS[link["rel"]])}</span> '
        f'<a href="{esc(root + records[link["target"]]["url"])}">'
        f'{esc(record_label(records[link["target"]]))}</a></li>'
        for link in links
    )
    if compact:
        return f'<ul class="related-list related-compact" aria-label="Related items">{items}</ul>'
    return (
        '<section class="related" aria-labelledby="related-heading">'
        '<h2 class="related-title" id="related-heading">Related</h2>'
        f'<ul class="related-list">{items}</ul></section>'
    )


def heading_slug(text):
    """Return a URL fragment for a heading's plain text."""
    ascii_text = unicodedata.normalize("NFKD", text).encode("ascii", "ignore").decode()
    slug = re.sub(r"[^a-z0-9]+", "-", ascii_text.lower()).strip("-")
    return slug or "section"


def add_heading_anchors(body_html):
    """Give each h2/h3 a unique id and return (html, [(level, id, inner_html)])."""
    headings = []
    used = set()

    def anchor(match):
        level, attrs, inner = match.group(1), match.group(2), match.group(3)
        existing = re.search(r'\bid="([^"]*)"', attrs)
        if existing:
            slug = existing.group(1)
        else:
            text = html.unescape(re.sub(r"<[^>]+>", "", inner))
            base = heading_slug(re.sub(r"[\\$]", "", text))
            slug, n = base, 2
            while slug in used:
                slug, n = f"{base}-{n}", n + 1
            attrs = f' id="{slug}"{attrs}'
        used.add(slug)
        # The TOC wraps each entry in a link, so drop links inside the heading.
        headings.append((int(level), slug, re.sub(r"</?a\b[^>]*>", "", inner)))
        return f"<h{level}{attrs}>{inner}</h{level}>"

    body_html = re.sub(r"<h([23])((?:\s[^>]*)?)>(.*?)</h\1>", anchor, body_html,
                       flags=re.DOTALL)
    return body_html, headings
