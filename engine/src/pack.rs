//! Packaging: SHA-256, CRC-32, stored ZIP, JSON strings and the engine's own byte bundles.
//! Every output is a pure function of its input: no clocks, no compression levels, fixed order.

/// SHA-256 (FIPS 180-4) as lowercase hex.
pub fn sha256(data: &[u8]) -> String {
    let primes = (2u32..).filter(|n| (2..*n).all(|d| n % d != 0));
    let frac = |x: f64| (x.fract() * 4_294_967_296.0) as u32;
    let k: Vec<u32> = primes.clone().take(64).map(|p| frac((p as f64).cbrt())).collect();
    let mut h: Vec<u32> = primes.take(8).map(|p| frac((p as f64).sqrt())).collect();
    let mut m = data.to_vec();
    m.push(0x80);
    m.resize((m.len() + 8).div_ceil(64) * 64 - 8, 0);
    m.extend((data.len() as u64 * 8).to_be_bytes());
    for c in m.chunks(64) {
        let mut w = [0u32; 64];
        for i in 0..64 {
            w[i] = if i < 16 { u32::from_be_bytes(c[i * 4..i * 4 + 4].try_into().unwrap()) } else {
                let (a, b) = (w[i - 15], w[i - 2]);
                let (s0, s1) = (a.rotate_right(7) ^ a.rotate_right(18) ^ a >> 3, b.rotate_right(17) ^ b.rotate_right(19) ^ b >> 10);
                w[i - 16].wrapping_add(s0).wrapping_add(w[i - 7]).wrapping_add(s1)
            };
        }
        let mut v = h.clone();
        for i in 0..64 {
            let (a, e) = (v[0], v[4]);
            let s1 = e.rotate_right(6) ^ e.rotate_right(11) ^ e.rotate_right(25);
            let t1 = v[7].wrapping_add(s1).wrapping_add(e & v[5] ^ !e & v[6]).wrapping_add(k[i]).wrapping_add(w[i]);
            let t2 = (a.rotate_right(2) ^ a.rotate_right(13) ^ a.rotate_right(22)).wrapping_add(a & v[1] ^ a & v[2] ^ v[1] & v[2]);
            v.rotate_right(1);
            (v[0], v[4]) = (t1.wrapping_add(t2), v[4].wrapping_add(t1));
        }
        h.iter_mut().zip(v).for_each(|(h, v)| *h = h.wrapping_add(v));
    }
    h.iter().map(|x| format!("{x:08x}")).collect()
}

pub fn crc32(data: &[u8]) -> u32 {
    !data.iter().fold(!0u32, |c, &b| (0..8).fold(c ^ b as u32, |c, _| c >> 1 ^ 0xEDB8_8320 & (c & 1).wrapping_neg()))
}

/// A stored (uncompressed) ZIP with fixed 1980-01-01 timestamps, in the given order.
pub fn zip(files: &[(&str, &[u8])]) -> Vec<u8> {
    let le = |v: &[u32], n: usize| v.iter().flat_map(|x| x.to_le_bytes()[..n].to_vec()).collect::<Vec<u8>>();
    let (mut out, mut dir) = (vec![], vec![]);
    for (name, data) in files {
        let (len, name) = (data.len() as u32, name.as_bytes());
        // Version 20, no flags, stored, time 0, date 1980-01-01; CRC, sizes, name length, no extra.
        let head = [le(&[20, 0, 0, 0, 0x21], 2), le(&[crc32(data), len, len], 4), le(&[name.len() as u32, 0], 2)].concat();
        dir.extend([le(&[0x0201_4b50], 4), le(&[20], 2), head.clone(), vec![0; 10], le(&[out.len() as u32], 4), name.into()].concat());
        out.extend([le(&[0x0403_4b50], 4), head, name.into(), data.to_vec()].concat());
    }
    let (n, size, at) = (files.len() as u32, dir.len() as u32, out.len() as u32);
    [out, dir, le(&[0x0605_4b50], 4), le(&[0, 0, n, n], 2), le(&[size, at], 4), vec![0, 0]].concat()
}

pub fn base64(b: &[u8]) -> String {
    const A: &[u8] = b"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    let mut s = String::with_capacity(b.len().div_ceil(3) * 4);
    for c in b.chunks(3) {
        let n = c.iter().enumerate().fold(0u32, |n, (i, &x)| n | (x as u32) << (16 - 8 * i));
        s.extend((0..4).map(|i| if i <= c.len() { A[(n >> (18 - 6 * i) & 63) as usize] as char } else { '=' }));
    }
    s
}

/// A data URL for an asset, typed by its extension.
pub fn data_url(name: &str, b: &[u8]) -> String {
    let t = match name.rsplit('.').next().unwrap_or("") {
        "png" => "image/png", "jpg" | "jpeg" => "image/jpeg", "svg" => "image/svg+xml", "otf" => "font/otf", "wasm" => "application/wasm",
        _ => "application/octet-stream",
    };
    format!("data:{t};base64,{}", base64(b))
}

/// A JSON string literal, safe to place inside an HTML <script>.
pub fn json(s: &str) -> String {
    let mut o = String::from('"');
    for c in s.chars() {
        match c {
            '"' => o += "\\\"", '\\' => o += "\\\\", '\n' => o += "\\n", '<' => o += "\\u003c",
            c if (c as u32) < 32 => w!(o, "\\u{:04x}", c as u32),
            c => o.push(c),
        }
    }
    o + "\""
}

/// A bundle: name, NUL, little-endian u32 length, bytes; repeated.
pub fn bundle(files: &[(&str, &[u8])]) -> Vec<u8> {
    files.iter().flat_map(|(n, d)| [n.as_bytes(), &[0], &(d.len() as u32).to_le_bytes(), d].concat()).collect()
}

pub fn unbundle(mut b: &[u8]) -> Vec<(&str, &[u8])> {
    let mut o = vec![];
    while let Some(z) = b.iter().position(|&c| c == 0) && let Some(len) = b.get(z + 1..z + 5) {
        let len = u32::from_le_bytes(len.try_into().unwrap()) as usize;
        let Some(d) = b.get(z + 5..z + 5 + len) else { break };
        o.push((std::str::from_utf8(&b[..z]).unwrap_or(""), d));
        b = &b[z + 5 + len..];
    }
    o
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn digests_match_their_standards() {
        assert_eq!(sha256(b"abc"), "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad");
        assert_eq!(sha256(&[b'a'; 1000])[..8], *"41edece4");
        assert_eq!(crc32(b"123456789"), 0xCBF4_3926);
        let z = zip(&[("a.txt", b"hi"), ("b/c", b"")]);
        assert_eq!((&z[..4], z.len()), (&b"PK\x03\x04"[..], 2 * 30 + 5 + 3 + 2 + 2 * 46 + 5 + 3 + 22));
        assert_eq!(unbundle(&bundle(&[("x", b"12"), ("y", b"")])), vec![("x", &b"12"[..]), ("y", &b""[..])]);
        assert_eq!((base64(b"foobar").as_str(), base64(b"fooba").as_str(), base64(b"f").as_str()), ("Zm9vYmFy", "Zm9vYmE=", "Zg=="));
        assert_eq!(json("a\"<\n"), "\"a\\\"\\u003c\\n\"");
    }
}
