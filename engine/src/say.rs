//! Narration: the `say` fences, sentence by sentence, as Kokoro phonemes, then the podcast,
//! captions and video timeline from the audio the page synthesises. A word's pronunciation is
//! the notebook's override (`pronounce: word phonemes, …`), else its line in `say.lock` (Misaki
//! 0.9.4 US gold, then silver; written by the build). A sentence with a word left unresolved is
//! spoken by kokoro-js's own grapheme-to-phoneme step instead, and flagged in the captions.

use crate::doc::{B, Doc};
use crate::pack;
use std::collections::BTreeMap;

/// Kokoro's US phoneme inventory (Misaki's symbols) and the punctuation it reads.
const INVENTORY: &str = "AIOWYbdfhijklmnpstuvwzæðŋɑɔəɛɜɡɪɹɾʃʊʌʒʔʤʧˈˌθᵊᵻ";
const PUNCT: &str = ";:,.!?—…\"()“”";
/// Misaki's symbols that are not IPA, and their IPA.
const IPA: [(char, &str); 9] = [('A', "eɪ"), ('I', "aɪ"), ('O', "oʊ"), ('W', "aʊ"), ('Y', "ɔɪ"), ('ʤ', "dʒ"), ('ʧ', "tʃ"), ('ᵊ', "ə"), ('ᵻ', "ɨ")];
pub const RATE: usize = 24_000;

/// A spoken sentence: its chapter (0 before the first), text, phonemes (empty when any word is
/// missing) and the missing words.
pub struct Line {
    pub chapter: usize,
    pub text: String,
    pub ph: String,
    pub missing: Vec<String>,
}

/// A sentence's words (letters, digits, apostrophes) and punctuation; anything else is a word too,
/// so that it is reported rather than silently dropped.
fn tokens(s: &str) -> Vec<String> {
    let mut v: Vec<String> = vec![];
    let mut glue = false;
    for c in s.chars() {
        let word = c.is_alphanumeric() || c == '\'' || c == '’';
        if word && glue { v.last_mut().unwrap().push(c) } else if !c.is_whitespace() && c != '-' { v.push(c.into()) }
        glue = word;
    }
    v
}

/// Every narrated sentence with its chapter.
pub fn sentences(d: &Doc) -> Vec<(usize, String)> {
    let (mut ch, mut v) = (0, vec![]);
    for b in &d.blocks {
        match b {
            B::H(2, ..) => ch += 1,
            B::C(l, s, _) if l == "say" => {
                for p in s.split("\n\n").map(|p| p.split_whitespace().collect::<Vec<_>>().join(" ")) {
                    let mut rest = p.as_str();
                    while !rest.is_empty() {
                        let end = [". ", "? ", "! "].iter().filter_map(|e| rest.find(e)).min().map_or(rest.len(), |i| i + 1);
                        v.push((ch, rest[..end].to_string()));
                        rest = rest[end..].trim_start();
                    }
                }
            }
            _ => {}
        }
    }
    v
}

/// The distinct words to pronounce, in order of first use.
pub fn words(d: &Doc) -> Vec<String> {
    let mut v: Vec<String> = vec![];
    for t in sentences(d).iter().flat_map(|s| tokens(&s.1)).filter(|t| !PUNCT.contains(t.as_str())) {
        if !v.contains(&t) { v.push(t) }
    }
    v
}

pub fn lines(d: &Doc, lock: &str) -> Vec<Line> {
    let mut dict: BTreeMap<&str, &str> = lock.lines().filter(|l| !l.starts_with('#')).filter_map(|l| l.split_once('\t')).collect();
    dict.extend(d.get("pronounce").split(',').filter_map(|p| p.trim().split_once(' ')).map(|(w, p)| (w, p.trim())));
    let ok = |p: &&&str| !p.is_empty() && p.chars().all(|c| INVENTORY.contains(c));
    sentences(d).into_iter().map(|(chapter, text)| {
        let (mut ph, mut missing) = (String::new(), vec![]);
        for t in tokens(&text) {
            match [t.clone(), t.to_lowercase()].iter().find_map(|k| dict.get(k.as_str()).filter(ok)) {
                _ if PUNCT.contains(t.as_str()) => ph += &t,
                Some(p) => (ph += " ", ph += p).1,
                None => missing.push(t),
            }
        }
        Line { chapter, ph: if missing.is_empty() { ph.trim().into() } else { String::new() }, text, missing }
    }).collect()
}

pub fn ipa(ph: &str) -> String {
    ph.chars().map(|c| IPA.iter().find(|m| m.0 == c).map_or(c.to_string(), |m| m.1.into())).collect()
}

/// The plan the page speaks: voice, speed and each line's text and phonemes, as JSON.
pub fn plan(d: &Doc, lock: &str) -> String {
    let l: Vec<String> = lines(d, lock).iter().map(|l| format!("{{\"chapter\":{},\"text\":{},\"ph\":{}}}", l.chapter, pack::json(&l.text), pack::json(&l.ph))).collect();
    format!("{{\"voice\":{},\"speed\":{},\"lines\":[{}]}}", pack::json(voice(d)), speed(d), l.join(","))
}

pub fn voice(d: &Doc) -> &str {
    match d.get("voice") { "" => "af_heart", v => v }
}

fn speed(d: &Doc) -> f32 {
    d.get("speed").parse().unwrap_or(1.0)
}

/// The schedule: each line's start, in samples, after a lead-in and a pause between lines
/// (longer between chapters), and the total length.
fn schedule(lines: &[Line], audio: &[Vec<f32>]) -> (Vec<usize>, usize) {
    let mut at = RATE / 2;
    let starts = lines.iter().zip(audio).enumerate().map(|(i, (l, a))| {
        at += if i > 0 && lines[i - 1].chapter != l.chapter { RATE * 9 / 10 } else if i > 0 { RATE * 3 / 10 } else { 0 };
        (at, at += a.len()).0
    }).collect();
    (starts, at + RATE * 4 / 5)
}

/// The podcast: 16-bit mono PCM WAV at `RATE`.
pub fn wav(d: &Doc, lock: &str, audio: &[Vec<f32>]) -> Vec<u8> {
    let (starts, n) = schedule(&lines(d, lock), audio);
    let mut pcm = vec![0i16; n];
    for (s, a) in starts.iter().zip(audio) {
        pcm[*s..s + a.len()].iter_mut().zip(a).for_each(|(o, x)| *o = (x.clamp(-1.0, 1.0) * 32767.0).round() as i16);
    }
    let len = 2 * n as u32;
    let head: Vec<u32> = vec![0x4646_4952, 36 + len, 0x4556_4157, 0x2074_6d66, 16, 0x0001_0001, RATE as u32, 2 * RATE as u32, 0x0010_0002, 0x6174_6164, len];
    head.iter().flat_map(|v| v.to_le_bytes()).chain(pcm.iter().flat_map(|v| v.to_le_bytes())).collect()
}

/// Each line's start in seconds, as f32s, for the video.
pub fn times(d: &Doc, lock: &str, audio: &[Vec<f32>]) -> Vec<u8> {
    schedule(&lines(d, lock), audio).0.iter().flat_map(|&s| (s as f32 / RATE as f32).to_le_bytes()).collect()
}

/// WebVTT captions. Notes keep the voice, the podcast's hash and, per line, the IPA, Kokoro
/// phonemes and the hash of its audio, or the words that sent it to the fallback.
pub fn vtt(d: &Doc, lock: &str, audio: &[Vec<f32>]) -> String {
    let lines = lines(d, lock);
    let (starts, _) = schedule(&lines, audio);
    let ts = |s: usize| { let ms = s * 1000 / RATE; format!("{:02}:{:02}:{:02}.{:03}", ms / 3_600_000, ms / 60_000 % 60, ms / 1000 % 60, ms % 1000) };
    let mut o = format!("WEBVTT\n\nNOTE\n{}: voice {} at speed {}, Kokoro-82M v1.0 (q8, kokoro-js 1.2.1; see kokoro.lock). Podcast sha256 {}.\n", d.get("title"), voice(d), speed(d), pack::sha256(&wav(d, lock, audio)));
    for ((l, a), s) in lines.iter().zip(audio).zip(starts) {
        let bytes: Vec<u8> = a.iter().flat_map(|x| x.to_le_bytes()).collect();
        let how = if l.ph.is_empty() { format!("fallback (kokoro-js G2P) for: {}", l.missing.join(" ")) } else { format!("ipa: {}\nphonemes: {}", ipa(&l.ph), l.ph) };
        w!(o, "\nNOTE\n{how}\naudio sha256: {}\n\n{} --> {}\n{}\n", pack::sha256(&bytes), ts(s), ts(s + a.len()), l.text);
    }
    o
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn lines_resolve_and_schedule() {
        let d = crate::doc::parse("---\npronounce: R ˈɑɹ\n---\nNo chapter.\n\n## One\n\n```say\nR one sends a pulse, at 10 GHz. It waits!\n```\n");
        assert_eq!(sentences(&d), vec![(1, "R one sends a pulse, at 10 GHz.".into()), (1, "It waits!".into())]);
        assert_eq!(words(&d)[..4], ["R", "one", "sends", "a"]);
        let lock = "# a comment\none\twˈʌn\nsends\tsˈɛndz\na\tə\npulse\tpˈʌls\nat\tæt\nit\tɪt\nwaits\twˈAts\n";
        let l = lines(&d, lock);
        assert_eq!((l[0].ph.as_str(), l[0].missing.clone()), ("", vec!["10".to_string(), "GHz".into()]));
        assert_eq!(l[1].ph, "ɪt wˈAts!");
        assert_eq!(ipa("wˈAts"), "wˈeɪts");
        let audio = vec![vec![0.5; 100], vec![-2.0; 50]];
        let w = wav(&d, lock, &audio);
        assert_eq!((&w[..4], w.len()), (&b"RIFF"[..], 44 + 2 * (12_000 + 100 + 7_200 + 50 + 19_200)));
        assert_eq!(i16::from_le_bytes([w[44 + 2 * 12_000], w[45 + 2 * 12_000]]), 16384);
        assert!(vtt(&d, lock, &audio).contains("fallback (kokoro-js G2P) for: 10 GHz\naudio sha256: "));
        assert!(vtt(&d, lock, &audio).contains("\n00:00:00.804 --> 00:00:00.806\nIt waits!\n"));
    }
}
