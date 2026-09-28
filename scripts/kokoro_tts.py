#!/usr/bin/env python3
"""Render podcast speech locally with Kokoro-82M and encode mono MP3.

This module is the only place that touches the optional speech-synthesis
runtime. ``scripts/podcast.py`` depends on the small interface it exposes
(``start``/``add``/``duration_seconds``/``finish``/``abort``) so the planning
and metadata code stays importable without Kokoro installed.
"""

import hashlib
import shutil
from pathlib import Path

DEFAULT_SAMPLE_RATE = 24000
DEFAULT_VOICE = "af_heart"
DEFAULT_BIT_RATE = 64
LEAD_SILENCE_SECONDS = 0.10
SECTION_SILENCE_SECONDS = 0.45


class KokoroUnavailable(RuntimeError):
    """Raised when the optional Kokoro runtime is not installed."""


def _load_runtime():
    try:
        import lameenc
        import numpy
        import soundfile
        from kokoro import KPipeline
    except ImportError as exc:
        raise KokoroUnavailable(
            "Podcast audio generation needs the optional Kokoro dependencies. "
            "Install them with: uv pip install -r requirements-podcast.txt"
        ) from exc
    return numpy, soundfile, lameenc, KPipeline


class KokoroSynthesizer:
    """Stream synthesized sections into a single mono MP3 file.

    Sections are cached as WAV files under ``work_dir`` so an interrupted
    episode can resume without re-synthesizing finished sections. Call
    ``start`` with a temporary output path, ``add`` one speaker section at a
    time, then ``finish`` to write the MP3 and clear the cache.
    """

    sample_rate = DEFAULT_SAMPLE_RATE

    def __init__(self, voice=DEFAULT_VOICE, work_dir=None):
        self.voice = voice
        self.work_dir = Path(work_dir) if work_dir else None
        if self.work_dir is not None:
            self.work_dir.mkdir(parents=True, exist_ok=True)
        self._numpy = None
        self._soundfile = None
        self._pipeline = None
        self._encoder = None
        self._parts = []
        self._frames = 0
        self._path = None

    def _ensure_runtime(self):
        if self._pipeline is not None:
            return
        numpy, soundfile, _, pipeline_class = _load_runtime()
        self._numpy = numpy
        self._soundfile = soundfile
        self._pipeline = pipeline_class(lang_code="a")

    def _section_audio(self, text):
        self._ensure_runtime()
        cache = None
        if self.work_dir is not None:
            digest = hashlib.sha1(
                f"kokoro-82m\0f32\0{self.sample_rate}\0{self.voice}\0{text}".encode("utf-8")
            ).hexdigest()
            cache = self.work_dir / f"{digest}.wav"
            if cache.is_file():
                data, rate = self._soundfile.read(str(cache), dtype="float32")
                return self._numpy.asarray(data), int(rate)
        chunks = [
            self._numpy.asarray(audio)
            for _, _, audio in self._pipeline(text, voice=self.voice)
        ]
        if chunks:
            data = self._numpy.concatenate(chunks)
        else:
            data = self._numpy.zeros(0, dtype="float32")
        if cache is not None:
            self._soundfile.write(str(cache), data, self.sample_rate)
        return data, self.sample_rate

    def start(self, path):
        self._ensure_runtime()
        _, _, lameenc, _ = _load_runtime()
        self._path = Path(path)
        self._path.parent.mkdir(parents=True, exist_ok=True)
        encoder = lameenc.Encoder()
        encoder.set_bit_rate(DEFAULT_BIT_RATE)
        encoder.set_in_sample_rate(self.sample_rate)
        encoder.set_channels(1)
        encoder.set_quality(2)
        self._encoder = encoder
        self._parts = []
        self._frames = 0

    def add(self, text):
        if self._encoder is None:
            raise KokoroUnavailable("start() must be called before add()")
        data, rate = self._section_audio(text)
        if rate != self.sample_rate:
            raise RuntimeError(f"Kokoro returned {rate} Hz audio, expected {self.sample_rate} Hz")
        if self._frames == 0:
            self._write(self._numpy.zeros(int(LEAD_SILENCE_SECONDS * rate), dtype="float32"))
        self._write(data)
        self._write(self._numpy.zeros(int(SECTION_SILENCE_SECONDS * rate), dtype="float32"))

    def _write(self, data):
        if data.size == 0:
            return
        pcm = (self._numpy.clip(data, -1.0, 1.0) * 32767.0).astype("<i2")
        self._parts.append(self._encoder.encode(pcm.tobytes()))
        self._frames += int(data.size)

    @property
    def duration_seconds(self):
        return self._frames / self.sample_rate

    def finish(self):
        if self._encoder is None:
            raise KokoroUnavailable("start() must be called before finish()")
        self._parts.append(self._encoder.flush())
        with self._path.open("wb") as handle:
            for part in self._parts:
                handle.write(part)
        self._parts = []
        self._encoder = None
        if self.work_dir is not None and self.work_dir.is_dir():
            shutil.rmtree(self.work_dir, ignore_errors=True)

    def abort(self):
        self._parts = []
        self._encoder = None
        if self._path is not None and self._path.exists():
            self._path.unlink()
