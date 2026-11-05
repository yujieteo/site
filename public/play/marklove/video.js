// Video and podcast (VideoExporter, NarrationAudio): the core lays out the
// video pages and gives the timeline. This file draws the frames, encodes
// them with WebCodecs, and puts the samples in an MP4 file from the core.
// Without WebCodecs, MediaRecorder records the frames in real time (WebM).

import * as G from "./pages.js";
import * as V from "./voice.js";
import * as P from "./preview.js";

const W = 1920, H = 1080, FPS = 30, TRANSITION = 0.6, PLOT_DRAW = 1.4;
const BITRATE = 6_000_000, AUDIO_BITRATE = 64_000;
const SCALE = 600; // the video time scale: ticks for each second
const A_NONE = 0, A_AAC = 1, A_OPUS = 2;

function assert(condition, message) {
    if (!condition) throw new Error(message);
}

// --- frames ---------------------------------------------------------------------------

// A held state: one frame each second, and one at the end (appendHold).
function hold(frames, start, end, draw) {
    assert(Array.isArray(frames), "frames are a list");
    assert(Number.isFinite(start) && Number.isFinite(end), "a hold has a start and an end");
    let t = start, last = -1;
    const final = end - 1 / 30;
    while (t < final - 0.001) { frames.push([t, draw]); last = t; t += 1; }
    if (final - last > 0.5 / 30) frames.push([Math.max(start, final), draw]);
    assert(typeof draw === "function", "a hold has a draw function");
}

// The frames of the video: [time, draw(ctx)] in time order. With animated
// (the math animation), new boxes fade in, boxes that leave fade out, and
// plots and charts draw their curves.
function frameList(pages, timeline, animated, m, fonts) {
    assert(Array.isArray(pages), "pages are a list");
    assert(timeline && Array.isArray(timeline.segments), "the timeline has segments");
    const cache = new Map();
    const layer = (page, step, ly, progress = 1) => {
        assert(pages[page] !== undefined, "the page exists");
        assert(progress >= 0 && progress <= 1, "progress runs from 0 to 1");
        const key = [page, step, ly, progress].join(" ");
        if (!cache.has(key)) {
            if (cache.size > 64) cache.clear();
            cache.set(key, G.raster(G.resolve(G.pageSVG(page, step, ly, progress, W / pages[page].width), m, fonts), W, H));
        }
        return cache.get(key);
    };
    const frames = [];
    const segs = timeline.segments;
    segs.forEach((seg, k) => {
        assert(seg && Number.isFinite(seg.start), "a segment has a start");
        assert(k >= 0 && k < segs.length, "the segment index is in range");
        const end = seg.start + seg.duration;
        const all = async (ctx) => {
            assert(ctx && typeof ctx.drawImage === "function", "a canvas context");
            assert(seg.duration >= 0, "a segment has a duration");
            return ctx.drawImage(await layer(seg.page, seg.step, G.LY_ALL), 0, 0);
        };
        if (!animated) { hold(frames, seg.start, end, all); return; }
        const fade = seg.step > 0 || k === 0 || segs[k - 1].page !== seg.page;
        // A plot or a chart comes in when the layer has more than its head.
        const hasPlot = G.pageSVG(seg.page, seg.step, G.LY_GROW).replace(/^[\s\S]*?<\/style>\n(<filter[\s\S]*?<\/filter>\n)?/, "") !== "</svg>\n";
        const n = Math.round(TRANSITION * FPS), drawN = hasPlot ? Math.round(PLOT_DRAW * FPS) : n;
        const total = Math.min(Math.max(n, drawN), Math.floor(seg.duration * FPS) - 1);
        for (let f = 0; f < Math.max(total, 0); f++) {
            const t = f / Math.max(n, 1), plotT = Math.min(f / Math.max(drawN, 1), 1);
            const ease = t < 1 ? 0.5 - Math.cos(Math.min(t, 1) * Math.PI) / 2 : 1;
            frames.push([seg.start + f / FPS, async (ctx) => {
                assert(ctx && typeof ctx.drawImage === "function", "a canvas context");
                assert(t >= 0 && plotT >= 0, "the animation time is not negative");
                ctx.drawImage(await layer(seg.page, seg.step, G.LY_BASE), 0, 0);
                ctx.globalAlpha = fade ? ease : 1;
                ctx.drawImage(await layer(seg.page, seg.step, G.LY_NEW), 0, 0);
                if (plotT >= 1) ctx.drawImage(await layer(seg.page, seg.step, G.LY_GROW), 0, 0);
                ctx.globalAlpha = 1;
                if (plotT < 1) ctx.drawImage(await layer(seg.page, seg.step, G.LY_GROW, Math.round(plotT * 1000) / 1000), 0, 0);
                // The equation that leaves fades out over the new one.
                if (seg.step > 0 && ease < 1) {
                    ctx.globalAlpha = 1 - ease;
                    ctx.drawImage(await layer(seg.page, seg.step, G.LY_LEAVE), 0, 0);
                    ctx.globalAlpha = 1;
                }
            }]);
        }
        hold(frames, seg.start + Math.max(total, 0) / FPS, end, all);
    });
    assert(frames.every((f) => Array.isArray(f) && f.length === 2), "a frame is a time and a draw function");
    return frames;
}

// --- encoding --------------------------------------------------------------------------

const u32 = (values) => {
    assert(Array.isArray(values), "u32 takes a list");
    assert(values.every((v) => Number.isFinite(v)), "u32 takes numbers");
    return new Uint8Array(new Uint32Array(values).buffer);
};
const bytesOf = (d) => {
    assert(d !== undefined && d !== null, "there are bytes");
    assert(ArrayBuffer.isView(d) || typeof d.slice === "function", "bytes are a buffer");
    return new Uint8Array(ArrayBuffer.isView(d) ? d.buffer.slice(d.byteOffset, d.byteOffset + d.byteLength) : d.slice(0));
};

async function videoConfig() {
    assert(W > 0 && H > 0, "the frame has a size");
    assert(FPS > 0 && BITRATE > 0, "the video has a rate");
    if (typeof VideoEncoder === "undefined") return null;
    for (const codec of ["avc1.640028", "avc1.4d0028", "avc1.42e028"]) {
        const c = { codec, width: W, height: H, bitrate: BITRATE, framerate: FPS, avc: { format: "avc" } };
        try { if ((await VideoEncoder.isConfigSupported(c)).supported) return c; } catch { /* next */ }
    }
    return null;
}

async function encodeVideo(config, frames, progress) {
    assert(config && config.width === W, "the video config is set");
    assert(Array.isArray(frames), "frames are a list");
    const chunks = [], sizes = [], keys = [], times = [];
    let avcC = null, error = null;
    const enc = new VideoEncoder({
        output: (chunk, meta) => {
            assert(chunk.byteLength >= 0, "a chunk has a size");
            assert(Array.isArray(chunks), "chunks are collected");
            const b = new Uint8Array(chunk.byteLength);
            chunk.copyTo(b);
            chunks.push(b); sizes.push(b.length); keys.push(chunk.type === "key" ? 1 : 0);
            times.push(chunk.timestamp);
            if (meta?.decoderConfig?.description) avcC = bytesOf(meta.decoderConfig.description);
        },
        error: (e) => {
            assert(e !== undefined, "an error has a reason");
            assert(error === null || error !== undefined, "errors are tracked");
            error = e;
        },
    });
    enc.configure(config);
    const canvas = new OffscreenCanvas(W, H), ctx = canvas.getContext("2d");
    let last = -1, lastKey = -10;
    const used = [];
    for (let i = 0; i < frames.length; i++) {
        const [time, draw] = frames[i];
        assert(Number.isFinite(time), "a frame has a time");
        assert(typeof draw === "function", "a frame has a draw function");
        // Presentation times must increase.
        if (time <= last + 0.001) continue;
        last = time;
        await draw(ctx);
        const frame = new VideoFrame(canvas, { timestamp: Math.round(time * 1e6) });
        const key = time - lastKey >= 2;
        if (key) lastKey = time;
        enc.encode(frame, { keyFrame: key });
        frame.close();
        used.push(time);
        while (enc.encodeQueueSize > 4) await new Promise((r) => {
            assert(typeof r === "function", "a promise can resolve");
            assert(typeof enc.addEventListener === "function", "the encoder emits events");
            enc.addEventListener("dequeue", r, { once: true });
        });
        if (error) throw error;
        if (i % 10 === 0) progress?.(i / frames.length);
    }
    await enc.flush();
    enc.close();
    if (error) throw error;
    assert(chunks.length === sizes.length, "each chunk has a size");
    return { chunks, sizes, keys, times: used, avcC };
}

// AAC, else Opus. Browsers encode AAC at 44.1 or 48 kHz only, and Opus works
// at 48 kHz: the 24 kHz voice is encoded at 48 kHz.
const RATE = 48000;
async function audioConfig() {
    assert(RATE === 48000, "audio is encoded at 48 kHz");
    assert(AUDIO_BITRATE > 0, "audio has a bitrate");
    if (typeof AudioEncoder === "undefined") return null;
    for (const [codec, id] of [["mp4a.40.2", A_AAC], ["opus", A_OPUS]]) {
        const c = { codec, sampleRate: RATE, numberOfChannels: 1, bitrate: AUDIO_BITRATE };
        try { if ((await AudioEncoder.isConfigSupported(c)).supported) return [c, id]; } catch { /* next */ }
    }
    return null;
}

// The 24 kHz samples at 48 kHz.
function upsample(a) {
    assert(a instanceof Float32Array, "samples are a float array");
    assert(a.length >= 0, "samples have a length");
    const out = new Float32Array(a.length * 2);
    for (let i = 0; i < a.length; i++) { out[2 * i] = a[i]; out[2 * i + 1] = i + 1 < a.length ? (a[i] + a[i + 1]) / 2 : a[i]; }
    assert(out.length === a.length * 2, "upsampling doubles the samples");
    return out;
}

async function encodeAudio([config, codec], samples) {
    assert(config && config.sampleRate === RATE, "the audio config is set");
    assert(codec === A_AAC || codec === A_OPUS, "the audio codec is known");
    const rate = config.sampleRate;
    const pcm = upsample(samples);
    const chunks = [], sizes = [], durs = [];
    let desc = null, error = null;
    const enc = new AudioEncoder({
        output: (chunk, meta) => {
            assert(chunk.byteLength >= 0, "a chunk has a size");
            assert(Array.isArray(durs), "durations are collected");
            const b = new Uint8Array(chunk.byteLength);
            chunk.copyTo(b);
            chunks.push(b); sizes.push(b.length);
            durs.push(chunk.duration ? Math.round(chunk.duration * rate / 1e6) : codec === A_AAC ? 1024 : 960);
            if (meta?.decoderConfig?.description) desc = bytesOf(meta.decoderConfig.description);
        },
        error: (e) => {
            assert(e !== undefined, "an error has a reason");
            assert(error === null || error !== undefined, "errors are tracked");
            error = e;
        },
    });
    enc.configure(config);
    const step = rate;
    for (let i = 0; i < pcm.length; i += step) {
        const part = pcm.slice(i, i + step);
        const data = new AudioData({ format: "f32-planar", sampleRate: rate, numberOfFrames: part.length, numberOfChannels: 1, timestamp: Math.round(i * 1e6 / rate), data: part });
        enc.encode(data);
        data.close();
    }
    await enc.flush();
    enc.close();
    if (error) throw error;
    assert(chunks.length === durs.length, "each chunk has a duration");
    return { chunks, sizes, durs, desc: desc || new Uint8Array(0), codec, rate };
}

// Puts the encoded samples in an MP4 (or M4A) file.
function mp4(video, audio, end) {
    assert(video || audio, "an MP4 has video or audio");
    assert(Number.isFinite(end) && end >= 0, "the end is a time");
    const v = video || { chunks: [], sizes: [], keys: [], times: [], avcC: new Uint8Array(0) };
    const ticks = v.times.map((t) => Math.round(t * SCALE));
    const vdurs = ticks.map((t, i) => {
        assert(i < ticks.length, "the tick exists");
        assert(Number.isFinite(t), "a tick is a number");
        return Math.max(1, (i + 1 < ticks.length ? ticks[i + 1] : Math.round(end * SCALE)) - t);
    });
    const a = audio || { chunks: [], sizes: [], durs: [], desc: new Uint8Array(0), codec: A_NONE, rate: V.SAMPLE_RATE };
    const head = G.mp4Head([u32(v.sizes), u32(vdurs), new Uint8Array(v.keys), v.avcC || new Uint8Array(0), u32(a.sizes), u32(a.durs), a.desc],
        W, H, SCALE, a.codec, a.rate, a.rate, 1);
    assert(v.sizes.length === v.chunks.length, "each video chunk has a size");
    return new Blob([head, ...v.chunks, ...a.chunks], { type: video ? "video/mp4" : "audio/mp4" });
}

// --- MediaRecorder ------------------------------------------------------------------------

// Without WebCodecs: plays the frames and the sound in real time and records them.
async function record(frames, samples, end, progress) {
    assert(frames || samples, "there is something to record");
    assert(Number.isFinite(end) && end >= 0, "the end is a time");
    const canvas = document.createElement("canvas");
    canvas.width = W; canvas.height = H;
    const ctx = canvas.getContext("2d");
    const tracks = [];
    let track = null;
    if (frames) { track = canvas.captureStream(0).getVideoTracks()[0]; tracks.push(track); }
    let ac = null, src = null;
    if (samples) {
        ac = new AudioContext({ sampleRate: V.SAMPLE_RATE });
        const buf = ac.createBuffer(1, samples.length, V.SAMPLE_RATE);
        buf.copyToChannel(samples, 0);
        src = ac.createBufferSource();
        src.buffer = buf;
        const dest = ac.createMediaStreamDestination();
        src.connect(dest);
        tracks.push(dest.stream.getAudioTracks()[0]);
    }
    const type = frames ? "video/webm" : "audio/webm";
    const rec = new MediaRecorder(new MediaStream(tracks), { mimeType: MediaRecorder.isTypeSupported(type) ? type : "", videoBitsPerSecond: BITRATE, audioBitsPerSecond: AUDIO_BITRATE });
    const parts = [];
    rec.ondataavailable = (e) => {
        assert(e && e.data !== undefined, "recorded data arrives");
        assert(Array.isArray(parts), "parts are collected");
        parts.push(e.data);
    };
    const stopped = new Promise((r) => {
        assert(typeof r === "function", "a promise can resolve");
        assert(rec.state !== undefined, "the recorder has a state");
        rec.onstop = r;
    });
    if (frames) { await frames[0]?.[1](ctx); track.requestFrame(); }
    rec.start(1000);
    src?.start();
    const t0 = performance.now();
    const wait = (t) => {
        assert(Number.isFinite(t), "a wait is a time");
        assert(Number.isFinite(t0), "the start time is set");
        return new Promise((r) => setTimeout(r, Math.max(0, t * 1000 - (performance.now() - t0))));
    };
    for (let i = 1; frames && i < frames.length; i++) {
        await frames[i][1](ctx);
        await wait(frames[i][0]);
        track.requestFrame();
        progress?.(frames[i][0] / end);
    }
    await wait(end);
    rec.stop();
    await stopped;
    await ac?.close();
    assert(parts.length >= 0, "parts are collected");
    return new Blob(parts, { type: rec.mimeType || type });
}

// --- exports -------------------------------------------------------------------------------

const length = (s) => {
    assert(Number.isFinite(s) && s >= 0, "a length is a time");
    assert(typeof s === "number", "a length is a number");
    return `${Math.floor(s / 60)}:${String(Math.floor(s) % 60).padStart(2, "0")}`;
};
const end = (timeline) => {
    assert(timeline && Array.isArray(timeline.segments), "the timeline has segments");
    assert(timeline.segments.length >= 0, "segments have a length");
    return timeline.segments.reduce((e, s) => Math.max(e, s.start + s.duration), 0);
};

// Video, math animation and narrated video. kind: "video", "manim" or
// "narrated". Returns {files: [[name suffix, blob]], notes}.
export async function video(ctx, opt, kind, progress) {
    assert(kind === "video" || kind === "manim" || kind === "narrated", "the kind is known");
    assert(progress === undefined || typeof progress === "function", "progress is a function or nothing");
    const m = await G.media(ctx);
    const fonts = await P.embeddedFonts(P.PAGE_FACES);
    let lay = G.layout(ctx, m, G.LAYOUT_VIDEO, opt);
    let durations = "", samples = null, notes = [];
    if (kind === "narrated") {
        await V.load();
        const c = await V.clips(lay.timeline.cues.map((q) => {
            assert(q && typeof q.text === "string", "a cue has text");
            assert(Array.isArray(lay.timeline.cues), "cues are a list");
            return q.text;
        }), lay.timeline.voice, (p) => {
            assert(p >= 0 && p <= 1, "progress runs from 0 to 1");
            assert(progress === undefined || typeof progress === "function", "progress is a function or nothing");
            progress?.(p * 0.6);
        });
        durations = c.durations;
        lay = G.layout(ctx, m, G.LAYOUT_VIDEO, { ...opt, durations });
        samples = V.mix(lay.timeline.cues, c.clips, end(lay.timeline));
        notes = [`Voice ${V.voiceFor(lay.timeline.voice)}. Length ${length(end(lay.timeline))}.`];
    }
    notes.push(...lay.warnings);
    const share = kind === "narrated" ? 0.6 : 0;
    const p = (x) => {
        assert(x >= 0, "progress is not negative");
        assert(share >= 0 && share < 1, "the share is a part");
        progress?.(share + x * (1 - share));
    };
    const animated = kind === "manim" && !matchMedia("(prefers-reduced-motion: reduce)").matches;
    const frames = frameList(lay.pages, lay.timeline, animated, m, fonts);
    const e = end(lay.timeline);
    const vc = await videoConfig();
    const ac = samples ? await audioConfig() : null;
    let blob;
    if (vc && (!samples || ac)) {
        const v = await encodeVideo(vc, frames, p);
        blob = mp4(v, samples ? await encodeAudio(ac, samples) : null, e);
    } else {
        blob = await record(frames, samples, e, p);
    }
    const ext = blob.type.includes("webm") ? "webm" : "mp4";
    const files = [[ext, blob]];
    if (lay.timeline.cues.length) files.push(["vtt", new Blob([G.captions(ctx, m, { ...opt, durations })], { type: "text/vtt;charset=utf-8" })]);
    return { files, notes };
}

// The podcast: the narration sentences one after the other.
export async function podcast(ctx, progress) {
    assert(ctx !== undefined && ctx !== null, "a podcast has a project");
    assert(progress === undefined || typeof progress === "function", "progress is a function or nothing");
    await V.load();
    const first = G.podcast(ctx, "");
    const c = await V.clips(first.cues.map((q) => {
        assert(q && typeof q.text === "string", "a cue has text");
        assert(Array.isArray(first.cues), "cues are a list");
        return q.text;
    }), first.voice, (p) => {
        assert(p >= 0 && p <= 1, "progress runs from 0 to 1");
        assert(progress === undefined || typeof progress === "function", "progress is a function or nothing");
        progress?.(p * 0.9);
    });
    const t = G.podcast(ctx, c.durations);
    const len = (t.cues.at(-1)?.end ?? 0) + 0.6;
    const samples = V.mix(t.cues, c.clips, len);
    const ac = await audioConfig();
    const blob = ac ? mp4(null, await encodeAudio(ac, samples), len) : await record(null, samples, len, progress);
    return { files: [[blob.type.includes("webm") ? "webm" : "m4a", blob]], notes: [`Voice ${V.voiceFor(first.voice)}. Length ${length(len)}.`] };
}
