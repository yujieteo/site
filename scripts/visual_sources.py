"""Find each visualization's published files: its HTML and data, assets and pinned downloads.

A visualization is either one of this repository's own, with a catalogue stub data/visuals/<slug>.yaml
and its files in visuals/<slug>/ (the private beamdswitch and connes-qft), or a folder viz/<slug>/ of
the public visuals repository, read as the checkout VISUALS_REPO has it: its visual.json is the
catalogue entry, unless it says "published": false. Large files are listed in a downloads file and
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

from site_data import ROOT, check_document, first_duplicate, load_all, load_validator


SIBLINGS = (Path("..", "visuals"), Path("..", "..", "visuals"), Path("..", "..", "tmp", "visuals"))


def primary_checkout(root):
    """The primary checkout of the repository ``root`` belongs to, or None when Git cannot tell.

    A linked worktree, such as a disposable agent worktree, shares the primary checkout's Git directory:
    ``git rev-parse --git-common-dir`` names it, and the checkout is its parent (or, for a bare
    repository, the Git directory itself).
    """
    try:
        common = subprocess.run(["git", "rev-parse", "--path-format=absolute", "--git-common-dir"], cwd=root,
                                check=True, capture_output=True, text=True).stdout.strip()
    except (OSError, subprocess.CalledProcessError):
        return None
    common = Path(common)
    return common.parent if common.name == ".git" else common


def visuals_candidates(root=ROOT, environ=None):
    """The places to look for the visuals checkout, in order, as (where it came from, path) pairs.

    VISUALS_REPO alone when it is set; else the sibling paths of this checkout, then the same sibling
    paths of the primary checkout when this checkout is a linked worktree.
    """
    environ = os.environ if environ is None else environ
    if configured := environ.get("VISUALS_REPO"):
        return [("VISUALS_REPO", Path(configured).expanduser())]
    candidates = [("sibling of this checkout", root / sibling) for sibling in SIBLINGS]
    primary = primary_checkout(root)
    if primary is not None and primary.resolve() != root.resolve():
        candidates += [(f"sibling of the primary checkout {primary}", primary / sibling) for sibling in SIBLINGS]
    return candidates


def is_visuals_checkout(path):
    """Whether ``path`` is a yujieteo/visuals checkout: a Git checkout with a viz/ folder."""
    return (path / "viz").is_dir() and (path / ".git").exists()


def find_visuals_repo(root=ROOT, environ=None):
    """Return (visuals checkout, where it came from) for the first candidate that is a visuals checkout.

    Raise RuntimeError naming every path tried and the fix when there is none. The build never clones
    or uses the network to find it.
    """
    candidates = visuals_candidates(root, environ)
    if candidates[0][0] == "VISUALS_REPO":
        path = candidates[0][1]
        if not is_visuals_checkout(path):
            raise RuntimeError(
                f"VISUALS_REPO is {path}, which is not a yujieteo/visuals checkout (a Git checkout with a "
                "viz/ folder). Set VISUALS_REPO to the path of a yujieteo/visuals checkout."
            )
        return path.resolve(), "VISUALS_REPO"
    for source, path in candidates:
        if is_visuals_checkout(path):
            return path.resolve(), source
    tried = "\n".join(f"  {os.path.normpath(path)} ({source})" for source, path in candidates)
    raise RuntimeError(
        "Visuals repository not found. Tried, in order:\n"
        f"{tried}\n"
        "Fix: export VISUALS_REPO=/path/to/visuals, or clone it next to the site checkout:\n"
        f"  git clone https://github.com/yujieteo/visuals.git {root.parent / 'visuals'}"
    )


def resolve_visuals_repo(root=ROOT, environ=None):
    return find_visuals_repo(root, environ)[0]


CATALOGUE_FIELDS = ("title", "summary", "source_url", "fetched", "webmcp_tools", "tags", "category", "links")


def visuals_repo_visualizations(visuals_repo):
    """The visuals repository's published visualizations, as catalogue entries.

    Each viz/<slug>/visual.json becomes the stub its folder would have had here, with paths relative to
    the visuals repository: html_path viz/<slug>/index.html and data_path viz/<slug>/<its data file>.
    """
    entries = []
    for path in sorted((visuals_repo / "viz").glob("*/visual.json")):
        slug = path.parent.name
        meta = json.loads(path.read_text(encoding="utf-8"))
        if meta.get("published", True) is False:
            continue
        folder = f"viz/{slug}/"
        entry = {"slug": slug, **{key: meta[key] for key in CATALOGUE_FIELDS if key in meta},
                 "html_path": f"{folder}index.html", "data_path": folder + meta.get("data", "")}
        if "assets" in meta:
            entry["assets"] = [folder + asset for asset in meta["assets"]]
        if "downloads" in meta:
            entry["downloads"] = folder + meta["downloads"]
        entries.append(entry)
    return entries


def load_visualizations(visuals_repo=None):
    """Every visualization: this repository's stubs and the visuals repository's folders, newest first."""
    visualizations = load_all("visuals")
    visualizations += visuals_repo_visualizations(visuals_repo or resolve_visuals_repo())
    validator = load_validator("schema/visualization.schema.json")
    for visualization in visualizations:
        check_document(validator, visualization,
                       f"visualization {visualization.get('slug', '<unknown>')}")
    duplicate = first_duplicate(visualization["slug"] for visualization in visualizations)
    if duplicate is not None:
        raise RuntimeError(f"Duplicate visualization slug: {duplicate}")
    # Newest first, like notes and the blog, and same-day visualizations in slug order, whichever
    # repository they come from.
    visualizations.sort(key=lambda visualization: visualization["slug"])
    visualizations.sort(key=lambda visualization: visualization["fetched"], reverse=True)
    return visualizations


def visuals_commit(visuals_repo):
    """The visuals commit a build reads, with "+dirty" when the checkout has uncommitted changes."""
    commit = git(visuals_repo, "rev-parse", "HEAD").decode().strip()
    return commit + ("+dirty" if git(visuals_repo, "status", "--porcelain", "--", "viz").strip() else "")


def git(repo, *args):
    return subprocess.run(["git", *args], cwd=repo, check=True, capture_output=True).stdout


def folder_of(visuals_repo, visualization):
    """The folder a visualization's files must stay inside: visuals/<slug>/ here or viz/<slug>/ there."""
    slug = visualization["slug"]
    if visualization["html_path"].startswith("visuals/"):
        return ROOT / "visuals" / slug, ROOT
    return visuals_repo / "viz" / slug, visuals_repo


def visualization_source(visuals_repo, visualization, key):
    """Return the bytes of a visualization's ``html_path`` or ``data_path``.

    Paths under visuals/ name visualizations built in this repository; paths under viz/ are read from the
    visuals repository checkout, as it is checked out.
    """
    relative_path = visualization[key]
    folder, base = folder_of(visuals_repo, visualization)
    source = (base / relative_path).resolve()
    if not source.is_relative_to(folder.resolve()):
        raise RuntimeError(f"Visualization {visualization['slug']}: {key} must be in its folder: {relative_path}")
    if not source.is_file():
        raise RuntimeError(f"Visualization source is missing: {relative_path}")
    return source.read_bytes()


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


def visualization_file(visuals_repo, visualization, relative_path, key):
    """Resolve ``relative_path``, which must name a file in the visualization's folder.

    Return the file and its path relative to that folder, which is also its
    path under site/visuals/<slug>/.
    """
    slug = visualization["slug"]
    folder, base = folder_of(visuals_repo, visualization)
    source = (base / relative_path).resolve()
    if not source.is_relative_to(folder.resolve()):
        raise RuntimeError(f"Visualization {slug}: {key} must be in its folder: {relative_path}")
    if not source.is_file():
        raise RuntimeError(f"Visualization {slug}: {key} is missing: {relative_path}")
    return source, source.relative_to(folder.resolve()).as_posix()


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


def load_visualization_downloads(visuals_repo, visualization, cache):
    """Fetch the files listed in a visualization's ``downloads`` file.

    Return (cached file, path under site/visuals/<slug>/, True) triples.
    """
    slug = visualization["slug"]
    manifest, _ = visualization_file(visuals_repo, visualization, visualization["downloads"], "downloads")
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


def load_visualization_files(visualizations, visuals_repo):
    """Map each slug to the files published beside its index.html.

    Each is (source, path under site/visuals/<slug>/, whether to hard-link it).

    ``assets`` are further files of the visualization's folder, and ``downloads`` names a file that pins
    large files, such as model weights, to a URL and sha256 so they are fetched at build time instead of
    being committed.
    """
    published = {}
    for visualization in visualizations:
        slug = visualization["slug"]
        files = [(*visualization_file(visuals_repo, visualization, path, "asset"), False)
                 for path in visualization.get("assets", [])]
        if "downloads" in visualization:
            files += load_visualization_downloads(visuals_repo, visualization, download_cache())
        seen = {"index.html", "data.json"}
        for _, path, _ in files:
            if path in seen:
                raise RuntimeError(f"Visualization {slug}: two files publish to {path}")
            seen.add(path)
        if files:
            published[slug] = files
    return published
