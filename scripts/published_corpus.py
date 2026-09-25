"""Normalize the site's public sources into one content-addressed corpus."""

import hashlib
import json
import re


SCHEMA_VERSION = 1


def _canonical(value):
    return json.dumps(value, ensure_ascii=False, sort_keys=True, separators=(",", ":"))


def _hash(value):
    return hashlib.sha256(value.encode("utf-8")).hexdigest()


def _slug(value):
    slug = re.sub(r"[^a-z0-9]+", "-", str(value).lower()).strip("-")
    return slug or _hash(str(value))[:12]


def _record(kind, identity, **fields):
    public = {"id": f"{kind}:{identity}", "kind": kind}
    public.update({key: value for key, value in fields.items() if value not in (None, "", [])})
    public["revision"] = _hash(_canonical(public))
    return public


def build_published_corpus(cv, about, resources, papers, posts, notes):
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
        ))

    for day in notes["entries"]:
        for note in day["notes"]:
            identity = _hash(f"{day['date']}\0{note['content']}")
            record_id = f"note:{identity}"
            note["record_id"] = record_id
            records.append(_record(
                "note", identity, title=note["plain_text"][:100],
                url=f"notes.html#{record_id}", date=day["date"], tags=note["tags"],
                summary=note["plain_text"][:240], content=note["content"],
                contentHtml=note["body_html"],
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
