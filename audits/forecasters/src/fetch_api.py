# /// script
# requires-python = ">=3.12"
# ///
"""Full histories of the 40 people, from the sites' own APIs, with exact timestamps.

Hacker News: Algolia (hn.algolia.com), every comment and story by each of the 20 accounts.
LessWrong: GraphQL (lesswrong.com/graphql), every comment (quick takes included) and post.
Output: $FA_DUMPS/hn-api/<user>.jsonl and $FA_DUMPS/lw-api/<userId>.{comments,posts}.jsonl,
one raw API record per line, plus fetched_at.
"""

import json
import sys
import time
import urllib.parse
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))  # run with python -I: our own folder only
from common import HN_PEOPLE, LW_PEOPLE, dumps_dir, get, write_jsonl

ALGOLIA_PAUSE = 1.0  # Algolia allows 10,000 requests an hour; one a second stays far under it.
LW_PAUSE = 2.0  # The same pause feed-update keeps for LessWrong.


def hn_history(user: str):
    before, seen = 2**31, set()
    while True:
        q = urllib.parse.urlencode({
            "tags": f"author_{user},(story,comment)",
            "hitsPerPage": 1000,
            "numericFilters": f"created_at_i<{before}",
        })
        hits = get(f"https://hn.algolia.com/api/v1/search_by_date?{q}", ALGOLIA_PAUSE)["hits"]
        new = [h for h in hits if h["objectID"] not in seen]
        if not new:
            return
        for h in new:
            seen.add(h["objectID"])
            h.pop("_highlightResult", None)
            h["fetched_at"] = int(time.time())
            yield h
        if len(hits) < 1000:
            return
        # +1 so items sharing the oldest second are asked for again; seen drops the repeats.
        before = min(h["created_at_i"] for h in new) + 1


LW_COMMENT = ("_id postedAt lastEditedAt deleted deletedPublic retracted postId parentCommentId "
              "shortform pageUrl contents { html editedAt version } post { title postedAt }")
LW_POST = "_id postedAt modifiedAt title pageUrl draft question contents { html editedAt version }"


def lw_query(kind, terms, fields):
    query = f'{{ {kind}(input:{{terms:{{{terms}}}}}) {{ results {{ {fields} }} }} }}'
    body = json.dumps({"query": query}).encode()
    for attempt in range(5):
        r = get("https://www.lesswrong.com/graphql", LW_PAUSE, data=body, headers={"content-type": "application/json"})
        if (r.get("data") or {}).get(kind) is not None:
            return r["data"][kind]["results"]
        time.sleep(10 * (attempt + 1))  # a server error comes back as data null
    raise RuntimeError(f"LessWrong keeps failing: {terms}: {r.get('errors')}")


def lw_pages(kind: str, user_id: str):
    """Comments page by date (the API refuses offsets past 2,000); posts page by offset."""
    if kind == "comments":
        before, seen = None, set()
        while True:
            terms = f'view:"allRecentComments", userId:"{user_id}", limit:500'
            if before:
                terms += f', before:"{before}"'
            rows = [r for r in lw_query("comments", terms, LW_COMMENT) if r["_id"] not in seen]
            if not rows:
                return
            for row in rows:
                seen.add(row["_id"])
                row["fetched_at"] = int(time.time())
                yield row
            before = min(r["postedAt"] for r in rows)
    else:
        offset = 0
        while True:
            if offset >= 2000:
                raise RuntimeError(f"{user_id} has over 2,000 posts; page posts by date")
            rows = lw_query("posts", f'view:"userPosts", userId:"{user_id}", limit:500, offset:{offset}, sortedBy:"new"',
                            LW_POST)
            for row in rows:
                row["fetched_at"] = int(time.time())
                yield row
            if len(rows) < 500:
                return
            offset += 500


def main():
    d = dumps_dir()
    which = sys.argv[1:] or ["hn", "lw"]
    if "hn" in which:
        for u in HN_PEOPLE:
            n = write_jsonl(d / "hn-api" / f"{u}.jsonl", hn_history(u))
            print(f"hn {u}: {n}", flush=True)
    if "lw" in which:
        for name, uid in LW_PEOPLE:
            for kind in ("comments", "posts"):
                if (d / "lw-api" / f"{uid}.{kind}.jsonl.done").exists():
                    continue
                n = write_jsonl(d / "lw-api" / f"{uid}.{kind}.jsonl", lw_pages(kind, uid))
                (d / "lw-api" / f"{uid}.{kind}.jsonl.done").write_text(f"{n}\n")
                print(f"lw {name} {kind}: {n}", flush=True)


if __name__ == "__main__":
    main()
