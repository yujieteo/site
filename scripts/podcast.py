#!/usr/bin/env python3
"""Plan and generate dated podcast episodes from the canonical daily notes.

Episodes are rendered locally with the Kokoro-82M text-to-speech model and
encoded as mono MP3. Nothing is sent to a paid or remote speech service. The
stable episode contract is documented in
``skills/playbooks/generate-podcast.md`` and enforced by
``schema/podcasts.schema.json``.
"""

import argparse
import datetime
import os
import re
import sys
from collections import defaultdict
from pathlib import Path
from zoneinfo import ZoneInfo

import yaml
from notes import NotesError, load_notes

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "data"

SITE_TIMEZONE = ZoneInfo("Asia/Singapore")
DEFAULT_TARGET_MINUTES = 30
DEFAULT_VOICE = "af_heart"
DEFAULT_WPM = 150
CONTENT_CLASSES = frozenset({"topic", "project", "arxiv-math"})
MAX_CONNECTED_TAGS = 12
MAX_FOCUS_TAGS = 24
MATERIAL_FACTOR = 1.05


class PodcastError(ValueError):
    """A podcast input, planning, or generation problem."""


def _words(text):
    return len(re.findall(r"\S+", text))


def _slugify(value):
    slug = re.sub(r"[^a-z0-9]+", "-", str(value).lower()).strip("-")
    return slug or "notes"


def _display_tag(tag):
    return tag.replace(".", " ").replace("-", " ")


def _human_join(items):
    items = list(items)
    if not items:
        return ""
    if len(items) == 1:
        return items[0]
    if len(items) == 2:
        return f"{items[0]} and {items[1]}"
    return ", ".join(items[:-1]) + f", and {items[-1]}"


def index_notes(document, registry):
    """Return (tag -> notes, note id -> content tags) for content tags only.

    Workflow tags such as ``todo`` and ``read`` describe state or action, not
    subject matter, and are excluded from episode focus selection.
    """
    classes = {tag: definition["class"] for tag, definition in registry["tags"].items()}
    index = defaultdict(list)
    note_tags = {}
    for entry in document["entries"]:
        for note in entry["notes"]:
            spoken = speech_text(note["content"])
            if not spoken:
                note_tags[note["id"]] = []
                continue
            tags = [tag for tag in note["tags"] if classes.get(tag) in CONTENT_CLASSES]
            note_tags[note["id"]] = tags
            for tag in tags:
                index[tag].append({
                    "id": note["id"],
                    "date": entry["date"],
                    "content": spoken,
                })
    return index, note_tags


def _union_words(index, focus):
    seen = set()
    total = 0
    for tag in focus:
        for note in index[tag]:
            if note["id"] in seen:
                continue
            seen.add(note["id"])
            total += _words(note["content"])
    return total


def choose_focus(index, note_tags, target_minutes=DEFAULT_TARGET_MINUTES,
                 previous=(), wpm=DEFAULT_WPM):
    """Pick a focus led by the most common useful tag and its neighbours.

    The seed is the most common content tag that has not led a previous
    episode. Expansion prefers tags that co-occur with the seed, then tags
    connected to the growing focus, and finally the most common remaining
    tags until there is enough material for the target duration.
    """
    if not index:
        raise PodcastError("data/notes.md has no content-tagged notes to build an episode from")
    previous_seeds = {
        episode["focus_tags"][0]
        for episode in previous
        if episode.get("focus_tags")
    }
    candidates = [tag for tag in index if tag not in previous_seeds] or list(index)
    seed = min(candidates, key=lambda tag: (-len(index[tag]), -_union_words(index, [tag]), tag))
    focus = [seed]
    seed_touches = {
        tag: sum(1 for note in notes if seed in set(note_tags[note["id"]]))
        for tag, notes in index.items()
    }

    material_target = target_minutes * wpm * MATERIAL_FACTOR
    while len(focus) < MAX_CONNECTED_TAGS:
        current_words = _union_words(index, focus)
        if current_words >= material_target:
            break
        in_focus = set(focus)
        related = []
        for tag, notes in index.items():
            if tag in in_focus:
                continue
            touches = sum(1 for note in notes if in_focus & set(note_tags[note["id"]]))
            if not touches:
                continue
            marginal = _union_words(index, focus + [tag]) - current_words
            related.append((
                tag, marginal, seed_touches.get(tag, 0), touches, len(notes),
            ))
        if not related:
            break
        best = min(
            related,
            key=lambda item: (-item[2], -item[1], -item[3], -item[4], item[0]),
        )
        focus.append(best[0])

    while len(focus) < MAX_FOCUS_TAGS:
        current_words = _union_words(index, focus)
        if current_words >= material_target:
            break
        related = []
        for tag, notes in index.items():
            if tag in focus:
                continue
            marginal = _union_words(index, focus + [tag]) - current_words
            if marginal <= 0:
                continue
            related.append((tag, marginal, len(notes)))
        if not related:
            break
        best = min(related, key=lambda item: (-item[1], -item[2], item[0]))
        focus.append(best[0])
    return focus


def group_notes(index, focus, used_note_ids=frozenset()):
    """Group every selected note under its first matching focus tag.

    Notes not used by a previous episode come first within each tag, then
    newest date first, so fresh material leads each day's episode.
    """
    assigned = set()
    sections = []
    for tag in focus:
        notes = []
        for note in index[tag]:
            if note["id"] in assigned:
                continue
            assigned.add(note["id"])
            notes.append(note)
        notes.sort(key=lambda note: note["date"], reverse=True)
        notes.sort(key=lambda note: note["id"] in used_note_ids)
        if notes:
            sections.append({"tag": tag, "notes": notes})
    return sections


TEX_COMMANDS = {
    r"\to": " to ",
    r"\mapsto": " maps to ",
    r"\times": " times ",
    r"\cdot": " times ",
    r"\leq": " less than or equal to ",
    r"\geq": " greater than or equal to ",
    r"\neq": " not equal to ",
    r"\approx": " approximately ",
}

_LINK = re.compile(r"\[([^\]]+)\]\([^)]*\)")
_URL = re.compile(r"<?https?://\S+>?")
_EMPHASIS = re.compile(r"(\*\*|__|\*|_)(?=\S)(.*?)(?<=\S)\1")


def speech_text(markdown):
    """Reduce note Markdown to spoken prose.

    Links lose their targets, code and emphasis markers are dropped, and
    LaTeX is reduced to roughly readable words. It is deliberately
    conservative: the goal is listenable prose, not a TeX renderer.
    """
    text = str(markdown or "")
    text = _LINK.sub(r"\1", text)
    text = _URL.sub(" ", text)
    text = re.sub(r"`([^`]*)`", r"\1", text)
    text = _EMPHASIS.sub(r"\2", text)
    text = re.sub(r"^\s{0,3}#{1,6}\s+", "", text, flags=re.MULTILINE)
    text = re.sub(r"^\s{0,3}[-*+]\s+", "", text, flags=re.MULTILINE)
    for command, spoken in TEX_COMMANDS.items():
        text = text.replace(command, spoken)
    text = text.replace("&", " and ")
    text = re.sub(r"\\(?:[a-zA-Z]+|.)", " ", text)
    text = text.replace("{", " ").replace("}", " ").replace("$", " ")
    return re.sub(r"\s+", " ", text).strip()


def build_script(plan, site_name):
    """Return the spoken segments for one episode plan."""
    display_focus = _human_join([_display_tag(tag) for tag in plan["focus_tags"][:4]])
    intro = (
        f"Welcome to the notes podcast from {site_name}. "
        f"This episode is dated {plan['display_date']}. The focus is {display_focus}. "
        "These are condensed notes from the site, grouped by tag."
    )
    notes = []
    for position, section in enumerate(plan["sections"]):
        display_tag = _display_tag(section["tag"])
        transition = (
            f"First, notes on {display_tag}."
            if position == 0
            else f"Next, notes on {display_tag}."
        )
        first_note = True
        for note in section["notes"]:
            spoken = speech_text(note["content"])
            if not spoken:
                continue
            lead = f"{transition} " if first_note else ""
            notes.append({
                "note_id": note["id"],
                "date": note["date"],
                "tag": section["tag"],
                "speak": lead + spoken,
            })
            first_note = False
    outro = (
        "That concludes this episode. These notes and their source links are published "
        "on the site, and the next episode will take up another focus from the notes. "
        "Thanks for listening."
    )
    return {"intro": intro, "notes": notes, "outro": outro}


def plan_episode(document, registry, target_minutes=DEFAULT_TARGET_MINUTES,
                 episode_date=None, previous=(), wpm=DEFAULT_WPM, today=None):
    """Select the next episode's date, focus tags, notes, and spoken script."""
    if target_minutes <= 0 or target_minutes > 240:
        raise PodcastError("--target-minutes must be greater than 0 and at most 240")
    if episode_date is None:
        episode_date = today or datetime.datetime.now(SITE_TIMEZONE).date()
    elif isinstance(episode_date, str):
        try:
            episode_date = datetime.date.fromisoformat(episode_date)
        except ValueError as exc:
            raise PodcastError(f"invalid --date {episode_date!r}; expected YYYY-MM-DD") from exc
    if not isinstance(episode_date, datetime.date):
        raise PodcastError("episode date must be a date or YYYY-MM-DD string")

    index, note_tags = index_notes(document, registry)
    focus = choose_focus(index, note_tags, target_minutes, previous, wpm)
    used_note_ids = {
        note_id
        for episode in previous
        for note_id in episode.get("notes", [])
    }
    sections = group_notes(index, focus, used_note_ids)
    title_tags = focus[:3]
    slug = "-".join(_slugify(tag) for tag in title_tags)
    return {
        "id": f"{episode_date.isoformat()}-{slug}",
        "date": episode_date.isoformat(),
        "display_date": episode_date.strftime("%-d %B %Y"),
        "title": f"Notes on {_human_join([_display_tag(tag) for tag in title_tags])}",
        "focus_tags": list(focus),
        "sections": sections,
        "estimated_seconds": _union_words(index, focus) / wpm * 60,
        "candidate_notes": sum(len(section["notes"]) for section in sections),
    }


def load_episodes(root=ROOT):
    """Load every episode metadata file, newest first."""
    directory = root / "data" / "podcasts"
    episodes = []
    if not directory.is_dir():
        return episodes
    for path in sorted(directory.glob("*.yaml")):
        with path.open(encoding="utf-8") as handle:
            episode = yaml.safe_load(handle)
        if isinstance(episode, dict):
            episodes.append(episode)
    episodes.sort(key=lambda episode: str(episode.get("date", "")), reverse=True)
    return episodes


def load_site_name(root=ROOT):
    path = root / "data" / "cv" / "cv.yaml"
    try:
        with path.open(encoding="utf-8") as handle:
            document = yaml.safe_load(handle) or {}
    except OSError:
        return "the site"
    return str(document.get("name") or "the site")


def _write_metadata(path, metadata):
    path.parent.mkdir(parents=True, exist_ok=True)
    temporary = path.with_suffix(path.suffix + ".tmp")
    temporary.write_text(
        yaml.safe_dump(metadata, sort_keys=False, allow_unicode=True),
        encoding="utf-8",
    )
    os.replace(temporary, path)


def _summarize(plan, used_notes):
    dates = sorted(note["date"] for note in used_notes)
    span = f"{dates[0]} to {dates[-1]}" if dates else plan["date"]
    display_focus = _human_join([_display_tag(tag) for tag in plan["focus_tags"][:4]])
    return (
        f"Condensed notes on {display_focus} from {len(used_notes)} notes "
        f"dated {span}."
    )


def generate_episode(target_minutes=DEFAULT_TARGET_MINUTES, episode_date=None,
                     voice=DEFAULT_VOICE, synthesizer=None, root=ROOT,
                     wpm=DEFAULT_WPM, today=None):
    """Render one episode and write its metadata and MP3 under ``root``."""
    notes_path = root / "data" / "notes.md"
    tags_path = root / "data" / "note-tags.json"
    document, registry = load_notes(notes_path, tags_path)
    previous = load_episodes(root)
    plan = plan_episode(
        document,
        registry,
        target_minutes=target_minutes,
        episode_date=episode_date,
        previous=previous,
        wpm=wpm,
        today=today,
    )

    metadata_path = root / "data" / "podcasts" / f"{plan['id']}.yaml"
    audio_path = root / "data" / "podcasts" / "audio" / f"{plan['id']}.mp3"
    if metadata_path.exists() or audio_path.exists():
        raise PodcastError(
            f"episode {plan['id']} already exists"
        )

    script = build_script(plan, load_site_name(root))
    if not script["notes"]:
        raise PodcastError("data/notes.md has no speakable notes for this episode")
    if synthesizer is None:
        from kokoro_tts import KokoroSynthesizer

        synthesizer = KokoroSynthesizer(voice=voice)

    work_audio = audio_path.with_suffix(".mp3.part")
    target_seconds = target_minutes * 60
    outro_words = _words(script["outro"])
    used_notes = []
    synthesizer.start(work_audio)
    try:
        seconds_per_word = 60 / wpm

        def add_segment(text):
            nonlocal seconds_per_word
            words = _words(text)
            if synthesizer.duration_seconds + words * seconds_per_word > target_seconds:
                raise PodcastError("selected material exceeds the target duration")
            start = synthesizer.duration_seconds
            synthesizer.add(text)
            elapsed = synthesizer.duration_seconds - start
            if synthesizer.duration_seconds > target_seconds:
                raise PodcastError("selected material exceeds the target duration")
            if words:
                seconds_per_word = max(seconds_per_word, elapsed / words * 1.05)

        add_segment(script["intro"])
        for note in script["notes"]:
            remaining_words = int(
                (target_seconds - synthesizer.duration_seconds - outro_words * seconds_per_word)
                / seconds_per_word
            )
            if remaining_words <= 0:
                break
            add_segment(" ".join(note["speak"].split()[:remaining_words]))
            used_notes.append(note)
        if synthesizer.duration_seconds + outro_words * seconds_per_word <= target_seconds:
            add_segment(script["outro"])
        duration_seconds = synthesizer.duration_seconds
        synthesizer.finish()
    except BaseException:
        synthesizer.abort()
        raise
    os.replace(work_audio, audio_path)

    metadata = {
        "id": plan["id"],
        "date": plan["date"],
        "title": plan["title"],
        "summary": _summarize(plan, used_notes),
        "focus_tags": plan["focus_tags"],
        "notes": [note["note_id"] for note in used_notes],
        "duration_seconds": round(duration_seconds, 1),
        "voice": voice,
        "audio": f"audio/{plan['id']}.mp3",
    }
    _write_metadata(metadata_path, metadata)
    return metadata


def _plan_summary(plan):
    return {
        "id": plan["id"],
        "date": plan["date"],
        "title": plan["title"],
        "focus_tags": plan["focus_tags"],
        "sections": [
            {"tag": section["tag"], "notes": [note["id"] for note in section["notes"]]}
            for section in plan["sections"]
        ],
        "candidate_notes": plan["candidate_notes"],
        "estimated_minutes": round(plan["estimated_seconds"] / 60, 1),
    }


def _print_plan(plan_summary):
    print(f"id: {plan_summary['id']}")
    print(f"date: {plan_summary['date']}")
    print(f"title: {plan_summary['title']}")
    print(f"focus_tags: {', '.join(plan_summary['focus_tags'])}")
    print(f"estimated_minutes: {plan_summary['estimated_minutes']}")
    print(f"candidate_notes: {plan_summary['candidate_notes']}")
    for section in plan_summary["sections"]:
        print(f"  {section['tag']}: {len(section['notes'])} notes")


def _parser():
    parser = argparse.ArgumentParser(description=__doc__)
    subparsers = parser.add_subparsers(dest="command", required=True)

    def add_planning_arguments(subparser):
        subparser.add_argument(
            "--target-minutes", type=float, default=DEFAULT_TARGET_MINUTES,
            help=f"target spoken duration (default {DEFAULT_TARGET_MINUTES})",
        )
        subparser.add_argument("--date", dest="episode_date", help="episode date (YYYY-MM-DD)")

    plan = subparsers.add_parser("plan", help="select the next episode without rendering audio")
    add_planning_arguments(plan)

    generate = subparsers.add_parser("generate", help="render an episode with local Kokoro")
    add_planning_arguments(generate)
    generate.add_argument(
        "--voice", default=DEFAULT_VOICE,
        help=f"Kokoro voice id (default {DEFAULT_VOICE})",
    )
    return parser


def main(argv=None):
    args = _parser().parse_args(argv)
    try:
        if args.command == "plan":
            document, registry = load_notes(DATA / "notes.md", DATA / "note-tags.json")
            plan = plan_episode(
                document,
                registry,
                target_minutes=args.target_minutes,
                episode_date=args.episode_date,
                previous=load_episodes(ROOT),
            )
            summary = _plan_summary(plan)
            _print_plan(summary)
            return 0
        metadata = generate_episode(
            target_minutes=args.target_minutes,
            episode_date=args.episode_date,
            voice=args.voice,
        )
    except (PodcastError, NotesError) as exc:
        diagnostics = getattr(exc, "diagnostics", None) or [str(exc)]
        for diagnostic in diagnostics:
            print(f"[FAIL] {diagnostic}", file=sys.stderr)
        return 1
    print(
        f"Wrote data/podcasts/{metadata['id']}.yaml and "
        f"data/podcasts/{metadata['audio']} "
        f"({metadata['duration_seconds']}s, {len(metadata['notes'])} notes)."
    )
    print("Run scripts/validate.py and scripts/build.py, then publish through the playbook.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
