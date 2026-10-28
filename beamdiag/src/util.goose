// Small helpers: base64, HTML escaping, SHA-256 and the print palette.

import std;

let BASE64_ALPHABET: const u8[:] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

// Standard base64 with padding.
fn base64(b: u8[:]) -> u8[>..] {
    var s: u8[>..] = [];
    var i = 0;
    while i < b.len {
        let have = if b.len - i < 3 { b.len - i } else { 3 };
        var n: u32 = 0;
        var k = 0;
        while k < have {
            n = n | ((b[i + k] as u32) << (16 - 8 * k) as u32);
            k++;
        }
        k = 0;
        while k < 4 {
            if k <= have { s.push(BASE64_ALPHABET[((n >> (18 - 6 * k) as u32) & 63) as i64]); } else { s.push('='); }
            k++;
        }
        i += 3;
    }
    return s;
}

// HTML text and attribute escaping.
fn esc_to(out: u8[>..]&, s: u8[:]) {
    for c in s {
        if c == '&' { out.append("&amp;"); }
        else if c == '<' { out.append("&lt;"); }
        else if c == '>' { out.append("&gt;"); }
        else if c == '"' { out.append("&quot;"); }
        else { out.push(c); }
    }
}
fn esc(s: u8[:]) -> u8[>..] {
    var out: u8[>..] = [];
    esc_to(out, s);
    return out;
}

let SHA256_K: u32[64] = [
    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3,
    0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
    0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13,
    0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208,
    0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2,
];

fn sha_rotr(x: u32, n: u32) -> u32 { return (x >> n) | (x << (32 - n)); }

let UTIL_HEX: const u8[:] = "0123456789abcdef";

// The SHA-256 of data, as 64 lowercase hex digits.
fn sha256(data: u8[:]) -> u8[>..] {
    var h: u32[8] = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
    var msg: u8[>..] = [];
    msg.append(data);
    msg.push(0x80);
    while msg.len % 64 != 56 { msg.push(0); }
    let bits: u64 = (data.len as u64) * 8;
    var k = 0;
    while k < 8 {
        msg.push(((bits >> ((7 - k) * 8) as u64) & 255) as u8);
        k++;
    }
    var w: u32[64] = [0; 64];
    var at = 0;
    while at < msg.len {
        var i = 0;
        while i < 16 {
            let o = at + 4 * i;
            w[i] = ((msg[o] as u32) << 24) | ((msg[o + 1] as u32) << 16) | ((msg[o + 2] as u32) << 8) | (msg[o + 3] as u32);
            i++;
        }
        while i < 64 {
            let s0 = sha_rotr(w[i - 15], 7) ^ sha_rotr(w[i - 15], 18) ^ (w[i - 15] >> 3);
            let s1 = sha_rotr(w[i - 2], 17) ^ sha_rotr(w[i - 2], 19) ^ (w[i - 2] >> 10);
            w[i] = w[i - 16] + s0 + w[i - 7] + s1;
            i++;
        }
        var v: u32[8] = h;
        i = 0;
        while i < 64 {
            let s1 = sha_rotr(v[4], 6) ^ sha_rotr(v[4], 11) ^ sha_rotr(v[4], 25);
            let ch = (v[4] & v[5]) ^ (~v[4] & v[6]);
            let t1 = v[7] + s1 + ch + SHA256_K[i] + w[i];
            let s0 = sha_rotr(v[0], 2) ^ sha_rotr(v[0], 13) ^ sha_rotr(v[0], 22);
            let maj = (v[0] & v[1]) ^ (v[0] & v[2]) ^ (v[1] & v[2]);
            let t2 = s0 + maj;
            v[7] = v[6];
            v[6] = v[5];
            v[5] = v[4];
            v[4] = v[3] + t1;
            v[3] = v[2];
            v[2] = v[1];
            v[1] = v[0];
            v[0] = t1 + t2;
            i++;
        }
        i = 0;
        while i < 8 { h[i] = h[i] + v[i]; i++; }
        at += 64;
    }
    var out: u8[>..] = [];
    var j = 0;
    while j < 8 {
        var d = 0;
        while d < 8 {
            out.push(UTIL_HEX[((h[j] >> ((7 - d) * 4) as u32) & 15) as i64]);
            d++;
        }
        j++;
    }
    return out;
}

// The colour tokens a figure paints with, and their print values (all black, or white for the grounds).
let PALETTE_NAMES: const u8[:][11] = ["bg", "surface", "fg", "fg2", "muted", "line", "accent", "accent-text", "warm", "green", "chrome"];

// The hex colour of token i of PALETTE_NAMES in the print palette.
fn print_color(i: i64) -> const u8[:] {
    return if i == 0 || i == 1 || i == 10 { "#ffffff" } else { "#000000" };
}

// The index of a token in PALETTE_NAMES, or -1.
fn palette_index(name: u8[:]) -> i64 {
    var i = 0;
    while i < 11 {
        if PALETTE_NAMES[i] == name { return i; }
        i++;
    }
    return -1;
}
