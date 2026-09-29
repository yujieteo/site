"""Normalize the site's public sources into one content-addressed corpus."""

import hashlib
import html
import json
import re

from notes import note_id


SCHEMA_VERSION = 1

# Authored link relations and the relation the build writes on the target.
LINK_RELS = {
    "resolves": "resolvedBy",
    "extends": "extendedBy",
    "uses": "usedBy",
    "related": "related",
}


def _canonical(value):
    return json.dumps(value, ensure_ascii=False, sort_keys=True, separators=(",", ":"))


def _hash(value):
    return hashlib.sha256(value.encode("utf-8")).hexdigest()


def _note_identity(date, content):
    return note_id(date, content).removeprefix("note:")


def note_record_id(date, content):
    return _record_id("note", _note_identity(date, content))


def _slug(value):
    slug = re.sub(r"[^a-z0-9]+", "-", str(value).lower()).strip("-")
    return slug or _hash(str(value))[:12]


def _record_id(kind, identity):
    return f"{kind}:{identity}"


def _record(kind, identity, **fields):
    public = {"id": _record_id(kind, identity), "kind": kind}
    public.update({key: value for key, value in fields.items() if value not in (None, "", [])})
    public["revision"] = _hash(_canonical(public))
    return public


def build_published_corpus(cv, about, resources, papers, posts, notes, visualizations=(), media_items=(),
                           colophon=None):
    """Return the sole normalized projection of intentionally public content."""
    records = [
        _record(
            "profile", "site", title=cv["name"], summary=cv["bio"],
            content=cv["bio"], contentHtml=cv["bio_html"], url="index.html",
            tags=[],
        ),
        _record(
            "about", "intro", title="About", summary=about["intro"].strip(),
            content=about["intro"].strip(), contentHtml=about["intro_html"],
            url="about.html", tags=[],
        ),
    ]

    for section in about.get("sections", []):
        identity = _slug(section["title"])
        records.append(_record(
            "about", identity, title=section["title"], content=section["content"].strip(),
            contentHtml=section["content_html"], url=f"about.html#{identity}", tags=[],
        ))

    if colophon:
        records.append(_record(
            "about", "colophon", title=colophon["title"], summary=colophon["summary"],
            content=colophon["body_markdown"].strip(), contentHtml=colophon["body_html"],
            url="colophon.html", tags=[],
        ))

    for resource in resources:
        identity = _hash(f"{resource['url']}\0{resource['title']}")
        records.append(_record(
            "resource", identity, title=resource["title"], url=resource["url"],
            summary=resource.get("note", ""), content=resource.get("note", ""),
            tags=resource["tags"], category=resource["category"],
        ))

    for paper in papers:
        identity = _hash(f"{paper['url']}\0{paper['title']}")
        records.append(_record(
            "paper", identity, title=paper["title"], url=paper["url"],
            summary=paper.get("note", ""), content=paper.get("note", ""),
            tags=paper["tags"], category=paper["category"],
        ))

    for post in posts:
        records.append(_record(
            "blog", post["slug"], title=post["title"], url=f"blog/{post['slug']}.html",
            date=post["date"], summary=post["summary"], content=post["body_markdown"],
            contentHtml=post["body_html"], tags=post["tags"], category=post["category"],
            readingMinutes=post.get("reading_minutes"),
        ))

    for day in notes["entries"]:
        for note in day["notes"]:
            identity = _note_identity(day["date"], note["content"])
            record_id = _record_id("note", identity)
            records.append(_record(
                "note", identity, title=note["plain_text"][:100],
                url=f"notes.html#{record_id}", date=day["date"], tags=note["tags"],
                summary=note["plain_text"][:240], content=note["content"],
                contentHtml=note["body_html"],
            ))

    for visualization in visualizations:
        summary = visualization["summary"]
        records.append(_record(
            "visualization", visualization["slug"], title=visualization["title"],
            summary=summary, content=summary, contentHtml=f"<p>{html.escape(summary)}</p>",
            url=f"visuals/{visualization['slug']}/index.html",
            dataUrl=f"visuals/{visualization['slug']}/data.json",
            fetched=visualization["fetched"], webmcpTools=visualization["webmcp_tools"],
            tags=visualization["tags"], category=visualization["category"],
        ))

    for item in media_items:
        if "video" in item:
            records.append(_record(
                "video", item["id"], title=item["title"],
                summary=item["summary"], url=f"media/{item['id']}.html",
                date=item["date"], tags=item["focus_tags"],
                videoUrl=f"media/{item['video']}",
                captionsUrl=f"media/{item['captions']}",
                posterUrl=f"media/{item['poster']}",
                durationSeconds=item["duration_seconds"],
            ))
        else:
            records.append(_record(
                "podcast", item["id"], title=item["title"],
                summary=item["summary"], url=f"media/{item['id']}.html",
                date=item["date"], tags=item["focus_tags"],
                audioUrl=f"media/{item['audio']}",
                durationSeconds=item["duration_seconds"],
            ))

    unique_records = []
    seen_ids = set()
    for record in records:
        if record["id"] not in seen_ids:
            unique_records.append(record)
            seen_ids.add(record["id"])

    payload = {"schemaVersion": SCHEMA_VERSION, "records": unique_records}
    payload["revision"] = _hash(_canonical(payload))
    return payload


def attach_links(corpus, authored):
    """Add typed links, and the reverse of each, to the records they join.

    ``authored`` holds ``(source_id, rel, target_id)`` triples as written in the
    sources. A link whose source or target is not a Corpus Record is an error,
    so a renamed or deleted item cannot leave a dangling link behind.
    """
    records = {record["id"]: record for record in corpus["records"]}
    links = {}
    for source, rel, target in authored:
        if rel not in LINK_RELS:
            raise ValueError(f"{source} uses unknown link relation {rel!r}")
        if source not in records:
            raise ValueError(f"Link source {source} is not in the Published Corpus")
        if target not in records:
            raise ValueError(f"{source} {rel} {target}, which is not in the Published Corpus")
        if source == target:
            raise ValueError(f"{source} links to itself")
        for record_id, link in (
            (source, {"rel": rel, "target": target}),
            (target, {"rel": LINK_RELS[rel], "target": source}),
        ):
            if link not in links.setdefault(record_id, []):
                links[record_id].append(link)
    if not links:
        return corpus
    for record_id, record_links in links.items():
        record = records[record_id]
        record.pop("revision")
        record["links"] = record_links
        record["revision"] = _hash(_canonical(record))
    corpus.pop("revision")
    corpus["revision"] = _hash(_canonical(corpus))
    return corpus
