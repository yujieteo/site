"""Copy Markdown: the Markdown sources a page embeds for its Copy Markdown buttons.

Relative links are made absolute against the page the Markdown is published
on, so a copy pasted elsewhere still resolves. static/js/copy-markdown.js reads
the embedded sources in the browser.
"""

import json
import re
from urllib.parse import urljoin


# Code and math are kept verbatim; a link target is an inline link or image
# destination (only when a closing parenthesis follows, as CommonMark requires),
# a reference definition, or an HTML href/src attribute.
# Indented code blocks are not detected, since list continuations look the same.
MARKDOWN_LINK_TARGETS = re.compile(
    r"(?P<fence>^ {0,3}(?P<fchar>`{3,}|~{3,}).*?^ {0,3}(?P=fchar)[`~]*[ \t]*$)"
    r"|(?P<code>(?P<ticks>`+)[\s\S]+?(?<!`)(?P=ticks)(?!`))"
    r"|(?P<math>\$\$[\s\S]+?\$\$|\\\[[\s\S]+?\\\]|\\\([\s\S]+?\\\)"
    r"|(?<![\\$\w])\$(?=\S)[^$\n]*?(?<=\S)\$(?!\d))"
    r"|(?P<inline>\]\(\s*)(?P<dest><[^>\n]*>|(?:[^\s()]|\([^\s()]*\))++)"
    r"(?=\s*(?:\"[^\"]*\"|'[^']*'|\([^()]*\))?\s*\))"
    r"|(?P<refdef>^ {0,3}\[[^\]\n]+\]:[ \t]*)(?P<refdest><[^>\n]*>|\S+)"
    r"|(?P<attr>\b(?:href|src)=(?P<quote>[\"']))(?P<url>[^\"'\n]*)(?P=quote)",
    re.MULTILINE | re.DOTALL,
)
URL_SCHEME = re.compile(r"^[A-Za-z][A-Za-z0-9+.-]*:")


def absolute_url(url, base_url):
    """Resolve a relative link target against the page it is published on."""
    bracketed = url.startswith("<") and url.endswith(">")
    target = url[1:-1] if bracketed else url
    if not target or URL_SCHEME.match(target):
        return url
    resolved = urljoin(base_url, target)
    return f"<{resolved}>" if bracketed else resolved


def absolute_markdown(text, base_url):
    """Return Markdown with every relative link and image resolved against ``base_url``."""
    def replace(match):
        if match.group("inline"):
            return match.group("inline") + absolute_url(match.group("dest"), base_url)
        if match.group("refdef"):
            return match.group("refdef") + absolute_url(match.group("refdest"), base_url)
        if match.group("attr"):
            quote = match.group("quote")
            return match.group("attr") + absolute_url(match.group("url"), base_url) + quote
        return match.group(0)

    return MARKDOWN_LINK_TARGETS.sub(replace, text)


def titled_markdown(title, body):
    """Front matter is dropped, so give the copy its title unless it opens with one."""
    body = body.strip("\n") + "\n"
    return body if body.startswith("# ") else f"# {title}\n\n{body}"


def markdown_sources_script(sources):
    """Embed each copyable Markdown source, keyed by its button's data-copy-markdown."""
    data = json.dumps(sources, ensure_ascii=False).replace("<", "\\u003c")
    return f'<script type="application/json" id="markdown-sources">{data}</script>'


def copy_markdown_script(root=""):
    return f'<script type="module" src="{root}static/js/copy-markdown.js"></script>'


def page_copy_actions(extra=""):
    """Copy Markdown button for a whole page, whose source is the "page" entry."""
    return (
        '<div class="page-actions" data-copy-control>'
        '<button type="button" class="page-action" data-copy-markdown="page">Copy Markdown</button>'
        f'{extra}<span class="page-action-status" data-copy-status aria-live="polite"></span>'
        '</div>'
    )
