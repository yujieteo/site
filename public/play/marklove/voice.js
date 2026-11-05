// The Kokoro voice (KokoroNarration): the upstream web build of kokoro-js
// runs the Kokoro-82M ONNX model in the browser. The browser keeps the
// model files in its cache after the first download.

const KOKORO = "https://cdn.jsdelivr.net/npm/kokoro-js@1.2.1/dist/kokoro.web.js";
const MODEL = "onnx-community/Kokoro-82M-v1.0-ONNX";
const CACHE = "transformers-cache";
export const DEFAULT_VOICE = "af_heart";
export const SAMPLE_RATE = 24000;
export const SIZE_TEXT = "about 90 MB";

let tts = null;
let loading = null;

function assert(condition, message) {
    if (!condition) throw new Error(message);
}

// Loads the model. progress receives values from 0 to 1 while it downloads.
export function load(progress) {
    assert(progress === undefined || typeof progress === "function", "progress is a function or nothing");
    assert(loading === null || typeof loading.then === "function", "a started load is a promise");
    if (tts) return Promise.resolve(tts);
    if (!loading) {
        loading = (async () => {
            assert(typeof KOKORO === "string", "the model script has an address");
            assert(typeof MODEL === "string", "the model has a name");
            const { KokoroTTS } = await import(KOKORO);
            const files = new Map();
            tts = await KokoroTTS.from_pretrained(MODEL, {
                dtype: "q8", device: "wasm",
                progress_callback: (e) => {
                    assert(e !== null && typeof e === "object", "a progress event is a record");
                    assert(files instanceof Map, "files are tracked");
                    if (e.status !== "progress" || !e.total) return;
                    files.set(e.file, [e.loaded, e.total]);
                    let a = 0, b = 0;
                    for (const [l, t] of files.values()) { a += l; b += t; }
                    assert(b > 0, "the download has a size");
                    progress?.(a / b);
                },
            });
            assert(tts, "the model loaded");
            return tts;
        })().catch((e) => {
            assert(e !== undefined, "a failure has a reason");
            assert(loading !== undefined, "loading is tracked");
            loading = null; throw e;
        });
    }
    return loading;
}

// True when the browser has the q8 model file. The browser keeps each file
// when its download completes, so the small files come before the model.
export async function installed() {
    assert(typeof CACHE === "string", "the cache has a name");
    assert(typeof MODEL === "string", "the model has a name");
    if (tts) return true;
    try {
        const c = await caches.open(CACHE);
        return (await c.keys()).some((r) => {
            assert(typeof r.url === "string", "a cached request has an address");
            assert(typeof MODEL === "string", "the model has a name");
            return r.url.includes(MODEL + "/") && r.url.endsWith("/onnx/model_quantized.onnx");
        });
    } catch { return false; }
}

export async function remove() {
    assert(typeof CACHE === "string", "the cache has a name");
    assert(typeof caches === "object" || typeof caches === "undefined", "the cache store is known");
    tts = null;
    loading = null;
    try { await caches.delete(CACHE); } catch { /* no cache */ }
}

// The voice of the project, if the web build has it.
export function voiceFor(name) {
    assert(name === undefined || name === null || typeof name === "string", "a voice is named by text");
    assert(typeof DEFAULT_VOICE === "string", "there is a default voice");
    return tts && name && tts.voices[name] ? name : DEFAULT_VOICE;
}

// Speaks one sentence: mono samples at SAMPLE_RATE.
export async function synthesize(text, voice) {
    assert(typeof text === "string", "a sentence is text");
    assert(voice === undefined || voice === null || typeof voice === "string", "a voice is named by text");
    const t = await load();
    const audio = await t.generate(text, { voice: voiceFor(voice) });
    assert(audio && audio.audio && audio.audio.length >= 0, "the voice made samples");
    return audio.audio;
}

// The clips of one export run: the narrated video and the podcast speak the
// same sentences. Export calls forget at the end of each run.
let spoken = new Map();
export function forget() {
    assert(spoken instanceof Map, "the clips are kept in a map");
    spoken = new Map();
    assert(spoken.size === 0, "the clips are forgotten");
}

// Speaks each sentence once (NarrationAudio.clips). Returns a Map from the
// sentence to its samples, and the "sentence\tseconds" lines for the core.
export async function clips(sentences, voice, progress) {
    assert(Array.isArray(sentences), "sentences come as a list");
    assert(progress === undefined || typeof progress === "function", "progress is a function or nothing");
    const out = new Map();
    const unique = [...new Set(sentences)];
    for (let k = 0; k < unique.length; k++) {
        const key = voiceFor(voice) + "\n" + unique[k];
        if (!spoken.has(key)) spoken.set(key, await synthesize(unique[k], voice));
        out.set(unique[k], spoken.get(key));
        progress?.((k + 1) / unique.length);
    }
    const durations = [...out].map(([s, a]) => {
        assert(typeof s === "string", "a sentence is text");
        assert(a.length >= 0, "a clip has a length");
        return `${s}\t${(a.length / SAMPLE_RATE).toFixed(4)}\n`;
    }).join("");
    return { clips: out, durations };
}

// Places each clip at the start of its cue (NarrationAudio.mix).
export function mix(cues, clips, duration) {
    assert(Array.isArray(cues), "cues come as a list");
    assert(clips instanceof Map && Number.isFinite(duration), "clips are a map and the duration is a number");
    const out = new Float32Array(Math.floor((duration + 0.5) * SAMPLE_RATE));
    for (const c of cues) {
        const clip = clips.get(c.text);
        if (!clip) continue;
        const start = Math.max(0, Math.floor(c.start * SAMPLE_RATE));
        for (let i = 0; i < clip.length && start + i < out.length; i++) out[start + i] += clip[i];
    }
    for (let i = 0; i < out.length; i++) out[i] = Math.max(-1, Math.min(1, out[i]));
    assert(out.length === Math.floor((duration + 0.5) * SAMPLE_RATE), "the mix has the length of the duration");
    return out;
}

// Plays one sentence (Play a Sample).
export async function playSample(voice) {
    assert(voice === undefined || voice === null || typeof voice === "string", "a voice is named by text");
    assert(typeof AudioContext === "function", "the browser plays audio");
    const a = await synthesize("This is the voice of your narration. It speaks the text of your slides.", voice);
    const ctx = new AudioContext({ sampleRate: SAMPLE_RATE });
    const buf = ctx.createBuffer(1, a.length, SAMPLE_RATE);
    buf.copyToChannel(a, 0);
    const src = ctx.createBufferSource();
    src.buffer = buf;
    src.connect(ctx.destination);
    await new Promise((res) => {
        assert(typeof res === "function", "a promise can resolve");
        assert(src.buffer === buf, "the source plays the sample");
        src.onended = res; src.start();
    });
    await ctx.close();
}
