"""Find each visualization's published files: its HTML and data, assets and pinned downloads.

A visualization is either built in this repository (visuals/<slug>/) or read
from the separate visuals repository at the commit pinned in
data/visuals/<slug>.pin. Large files are listed in a downloads file and
fetched into a cache shared by every build, checked against their sha256.
"""

import csv
import hashlib
import io
import json
import os
import re
import subprocess
import urllib.request
from pathlib import Path

from site_data import DATA, ROOT, check_document, first_duplicate, load_all, load_validator


def resolve_visuals_repo():
    configured = os.environ.get("VISUALS_REPO")
    candidates = [Path(configured).expanduser()] if configured else []
    candidates.extend([
        ROOT.parent / "visuals",
        ROOT.parent.parent / "visuals",
        ROOT.parent.parent / "tmp" / "visuals",
    ])
    for candidate in candidates:
        if candidate.is_dir():
            return candidate.resolve()
    checked = ", ".join(str(path) for path in candidates)
    raise RuntimeError(
        "Visuals repository not found. Set VISUALS_REPO or place it in a supported "
        f"repository-relative location. Checked: {checked}"
    )


def load_visualizations():
    visualizations = load_all("visuals")
    validator = load_validator("schema/visualization.schema.json")
    for visualization in visualizations:
        check_document(validator, visualization,
                       f"visualization {visualization.get('slug', '<unknown>')}")
    duplicate = first_duplicate(visualization["slug"] for visualization in visualizations)
    if duplicate is not None:
        raise RuntimeError(f"Duplicate visualization slug: {duplicate}")
    # Newest first, like notes and the blog; a stable sort keeps same-day
    # visualizations in slug order.
    visualizations.sort(key=lambda visualization: visualization["fetched"], reverse=True)
    return visualizations


def visualization_pin(slug):
    """Return the visuals commit that an externally built visualization is published from."""
    path = DATA / "visuals" / f"{slug}.pin"
    if not path.is_file():
        raise RuntimeError(f"Visualization pin is missing: data/visuals/{slug}.pin")
    pin = path.read_text(encoding="utf-8").strip()
    if not re.fullmatch(r"[0-9a-f]{40}", pin):
        raise RuntimeError(f"Visualization pin is not a full commit hash: data/visuals/{slug}.pin")
    return pin


def git(repo, *args):
    return subprocess.run(["git", *args], cwd=repo, check=True, capture_output=True).stdout


def visualization_source(visuals_repo, visualization, key):
    """Return the bytes of a visualization's ``html_path`` or ``data_path``.

    Paths under visuals/ name visualizations built in this repository; every
    other path is read from the separate visuals repository at the commit
    pinned in data/visuals/<slug>.pin, whatever that checkout has checked out.
    """
    relative_path = visualization[key]
    if relative_path.startswith("visuals/"):
        source = (ROOT / relative_path).resolve()
        try:
            source.relative_to(ROOT.resolve())
        except ValueError as exc:
            raise RuntimeError(f"Visualization source escapes its repository: {relative_path}") from exc
        if not source.is_file():
            raise RuntimeError(f"Visualization source is missing: {relative_path}")
        return source.read_bytes()
    pin = visualization_pin(visualization["slug"])
    try:
        git(visuals_repo, "cat-file", "-e", f"{pin}^{{commit}}")
    except subprocess.CalledProcessError:
        try:
            git(visuals_repo, "fetch", "--quiet", "--no-tags", "origin", pin)
        except subprocess.CalledProcessError as exc:
            raise RuntimeError(
                f"Visuals commit {pin} is not in {visuals_repo} and could not be fetched: "
                f"{exc.stderr.decode().strip()}"
            ) from None
    try:
        return git(visuals_repo, "show", f"{pin}:{relative_path}")
    except subprocess.CalledProcessError:
        raise RuntimeError(f"Visualization source is missing at visuals {pin}: {relative_path}") from None


def load_visualization_sources(visualizations, visuals_repo):
    """Map each slug to its published HTML bytes and parsed data."""
    sources = {}
    for visualization in visualizations:
        html_bytes = visualization_source(visuals_repo, visualization, "html_path")
        data_text = visualization_source(visuals_repo, visualization, "data_path").decode("utf-8")
        if visualization["data_path"].endswith(".csv"):
            data = list(csv.DictReader(io.StringIO(data_text, newline="")))
        else:
            data = json.loads(data_text)
        sources[visualization["slug"]] = (html_bytes, data)
    return sources


def visualization_file(visualization, relative_path, key):
    """Resolve ``relative_path``, which must name a file in the visualization's visuals/<slug>/.

    Return the file and its path relative to that folder, which is also its
    path under site/visuals/<slug>/.
    """
    slug = visualization["slug"]
    folder = (ROOT / "visuals" / slug).resolve()
    source = (ROOT / relative_path).resolve()
    if not source.is_relative_to(folder):
        raise RuntimeError(f"Visualization {slug}: {key} must be under visuals/{slug}/: {relative_path}")
    if not source.is_file():
        raise RuntimeError(f"Visualization {slug}: {key} is missing: {relative_path}")
    return source, source.relative_to(folder).as_posix()


def download_cache():
    """Directory of fetched downloads, one file per sha256, shared by every build.

    It lives outside the repository so that site/ rebuilds, other checkouts and
    scripts/site_diff.py's rebuild of the live commit reuse one fetch.
    """
    return Path(os.environ.get("XDG_CACHE_HOME") or Path.home() / ".cache") / "teoyujie-site" / "downloads"


def sha256_of(path):
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        while chunk := handle.read(1 << 20):
            digest.update(chunk)
    return digest.hexdigest()


def fetch_download(entry, cache):
    """Return the cached file for one pinned download, fetching it when needed.

    The file is kept only if its size and sha256 match the pin, so a changed or
    truncated upstream file fails the build instead of being published.
    """
    cached = cache / entry["sha256"]
    if cached.is_file() and cached.stat().st_size == entry["bytes"] and sha256_of(cached) == entry["sha256"]:
        return cached
    cache.mkdir(parents=True, exist_ok=True)
    partial = cache / f"{entry['sha256']}.{os.getpid()}.part"
    digest, size = hashlib.sha256(), 0
    request = urllib.request.Request(entry["url"], headers={"User-Agent": "teoyujie-site-build"})
    try:
        with urllib.request.urlopen(request, timeout=60) as response, partial.open("wb") as handle:
            while chunk := response.read(1 << 20):
                digest.update(chunk)
                size += len(chunk)
                handle.write(chunk)
        if size != entry["bytes"] or digest.hexdigest() != entry["sha256"]:
            raise RuntimeError(
                f"Download does not match its pin: {entry['url']} gave {size} bytes, "
                f"sha256 {digest.hexdigest()}; expected {entry['bytes']} bytes, sha256 {entry['sha256']}"
            )
        os.replace(partial, cached)
    except OSError as exc:
        raise RuntimeError(f"Could not download {entry['url']}: {exc}") from None
    finally:
        partial.unlink(missing_ok=True)
    print(f"Fetched {entry['url']} ({size} bytes)")
    return cached


DOWNLOAD_KEYS = {"path", "url", "sha256", "bytes"}


def load_visualization_downloads(visualization, cache):
    """Fetch the files listed in a visualization's ``downloads`` file.

    Return (cached file, path under site/visuals/<slug>/, True) triples.
    """
    slug = visualization["slug"]
    manifest, _ = visualization_file(visualization, visualization["downloads"], "downloads")
    entries = json.loads(manifest.read_text(encoding="utf-8")).get("downloads")
    if not isinstance(entries, list) or not entries:
        raise RuntimeError(f"Visualization {slug}: {visualization['downloads']} has no downloads list")
    files = []
    for entry in entries:
        if not isinstance(entry, dict) or not DOWNLOAD_KEYS <= entry.keys():
            raise RuntimeError(f"Visualization {slug}: each download needs {sorted(DOWNLOAD_KEYS)}: {entry}")
        path = entry["path"]
        if (not isinstance(path, str) or not re.fullmatch(r"[A-Za-z0-9._-]+(?:/[A-Za-z0-9._-]+)*", path)
                or ".." in path.split("/")):
            raise RuntimeError(f"Visualization {slug}: download path must be a relative path: {path}")
        if not str(entry["url"]).startswith("https://"):
            raise RuntimeError(f"Visualization {slug}: download url must use https: {entry['url']}")
        if not re.fullmatch(r"[0-9a-f]{64}", str(entry["sha256"])):
            raise RuntimeError(f"Visualization {slug}: download sha256 must be 64 hex digits: {path}")
        if not isinstance(entry["bytes"], int) or entry["bytes"] <= 0:
            raise RuntimeError(f"Visualization {slug}: download bytes must be a positive integer: {path}")
        files.append((fetch_download(entry, cache), path, True))
    return files


def load_visualization_files(visualizations):
    """Map each slug to the files published beside its index.html.

    Each is (source, path under site/visuals/<slug>/, whether to hard-link it).

    Only visualizations built in this repository have them: ``assets`` are files
    in visuals/<slug>/, and ``downloads`` names a file that pins large files,
    such as model weights, to a URL and sha256 so they are fetched at build
    time instead of being committed.
    """
    published = {}
    for visualization in visualizations:
        slug = visualization["slug"]
        files = [(*visualization_file(visualization, path, "asset"), False)
                 for path in visualization.get("assets", [])]
        if "downloads" in visualization:
            files += load_visualization_downloads(visualization, download_cache())
        seen = {"index.html", "data.json"}
        for _, path, _ in files:
            if path in seen:
                raise RuntimeError(f"Visualization {slug}: two files publish to {path}")
            seen.add(path)
        if files:
            published[slug] = files
    return published
