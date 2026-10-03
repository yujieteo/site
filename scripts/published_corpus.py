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


def _slug(value):
    slug = re.sub(r"[^a-z0-9]+", "-", str(value).lower()).strip("-")
    return slug or _hash(str(value))[:12]


def _record(kind, identity, **fields):
    public = {"id": f"{kind}:{identity}", "kind": kind}
    public.update({key: value for key, value in fields.items() if value not in (None, "", [])})
    public["revision"] = _hash(_canonical(public))
    return public


def _calibration_content(entry):
    """Plain text of one answered Calibrator question, with its full provenance."""
    question, response = entry["question"], entry["response"]
    revisions = response["revision_count"] or 0
    lines = [
        question["proposition"],
        *([question["context"]] if question["context"] else []),
        f"Probability: {response['final_probability']}% (first answer {response['first_probability']}%,"
        f" {revisions} revision{'' if revisions == 1 else 's'}).",
        f"High: {question['high_action']}",
        f"Low: {question['low_action']}",
        f"Resolution: {question['resolution_status']}; rule: {question['resolution_rule']};"
        f" horizon: {question['resolution_horizon']}.",
    ]
    if question["outcome"] is not None:
        lines.append(f"Outcome: {'true' if question['outcome'] else 'false'}.")
    if question["resolution_evidence"]:
        lines.append(f"Evidence: {question['resolution_evidence']}")
    for source in entry["sources"]:
        lines.append(f"Source: {source['title']} <{source['url']}>")
        lines += [f"Claim: {claim['claim']}" for claim in entry["claims"]
                  if claim["source_id"] == source["source_id"]]
    return "\n".join(lines)


def build_published_corpus(cv, about, resources, papers, posts, notes, visualizations=(), media_items=(),
                           colophon=None, calibrations=()):
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

    for kind, entries in (("resource", resources), ("paper", papers)):
        for entry in entries:
            identity = _hash(f"{entry['url']}\0{entry['title']}")
            records.append(_record(
                kind, identity, title=entry["title"], url=entry["url"],
                summary=entry.get("note", ""), content=entry.get("note", ""),
                tags=entry["tags"], category=entry["category"],
                # Paper links carry what their BibTeX entry needs (scripts/paper_tags.py citation).
                citation=entry.get("citation") or None,
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
            record_id = note_id(day["date"], note["content"])
            records.append(_record(
                "note", record_id.removeprefix("note:"), title=note["plain_text"][:100],
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
            kind, assets = "video", {
                "videoUrl": f"media/{item['video']}",
                "captionsUrl": f"media/{item['captions']}",
                "posterUrl": f"media/{item['poster']}",
            }
        else:
            kind, assets = "podcast", {"audioUrl": f"media/{item['audio']}"}
        records.append(_record(
            kind, item["id"], title=item["title"],
            summary=item["summary"], url=f"media/{item['id']}.html",
            date=item["date"], tags=item["focus_tags"], **assets,
            durationSeconds=item["duration_seconds"],
        ))

    # One record per answered Calibrator question: raw probabilities, not notes.
    for entry in calibrations:
        question, response = entry["question"], entry["response"]
        records.append(_record(
            "calibration", question["question_id"], title=question["proposition"],
            summary=f"{response['final_probability']}% — {question['proposition']}",
            content=_calibration_content(entry), url="visuals/calibrator/index.html",
            dataUrl="calibrator/raw.toon", date=response["final_answered_at"][:10], tags=["calibrator"],
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
