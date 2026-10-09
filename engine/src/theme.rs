//! Themes: BeamdSwitch's 14 presets in 7 light/dark families, plus the site's own pair.
//! Values are copied from BeamdSwitch, never invented. A theme ID names one preset; `custom ID`
//! keeps that base and applies explicit `token #rrggbb` overrides.

pub const VERSION: u32 = 1;
pub const TOKENS: [&str; 11] = ["bg", "surface", "fg", "fg2", "muted", "line", "accent", "accent-text", "warm", "green", "chrome"];
/// Family, light ID, dark ID, light palette, dark palette (in TOKENS order).
pub const THEMES: [(&str, &str, &str, &str, &str); 8] = [
    ("site", "site-light", "site-dark", "f4f3f1 ebe9e6 141414 3f3e3c 74726e e0dedb 141414 141414 74726e 3f3e3c f4f3f1",
        "000000 111111 f2f2f2 c2c2c2 8a8a8a 262626 f2f2f2 f2f2f2 c2c2c2 c2c2c2 000000"),
    ("beamdswitch", "light", "dark", "FAF9F5 EEF1F5 141413 55585E 9A9DA3 DCE1E8 2D63A8 1F4E8C C0653F 5F7A45 E9E7E1",
        "0F1C2E 182A40 EEF1F5 AAB6C5 6F7F94 26394F 6E9BD1 9CBEE8 E39A76 9DB985 0A1422"),
    ("solarized", "solarized-light", "solarized-dark", "FDF6E3 EEE8D5 586E75 657B83 93A1A1 E4DCC6 268BD2 1F6FA8 CB4B16 859900 EEE8D5",
        "002B36 073642 93A1A1 839496 657B83 0E4654 268BD2 6CB0E3 CB4B16 859900 00212B"),
    ("dracula", "dracula-light", "dracula", "FFFBEB F4EFD8 1F1F1F 4B4A5C 635D97 CFCFDE 644AC9 A3144D A34D14 14710A EFEAD4",
        "282A36 343746 F8F8F2 C3C5D2 6272A4 44475A BD93F9 FF79C6 FFB86C 50FA7B 21222C"),
    ("catppuccin", "catppuccin-latte", "catppuccin-mocha", "EFF1F5 E6E9EF 4C4F69 5C5F77 8C8FA1 CCD0DA 8839EF 1E66F5 FE640B 40A02B DCE0E8",
        "1E1E2E 313244 CDD6F4 BAC2DE 7F849C 45475A CBA6F7 89B4FA FAB387 A6E3A1 11111B"),
    ("tokyo-night", "tokyo-night-day", "tokyo-night", "E1E2E7 E9E9ED 3760BF 6172B0 848CB5 C4C8DA 2E7DE9 9854F1 B15C00 587539 D0D5E3",
        "1A1B26 24283B C0CAF5 A9B1D6 737AA2 3B4261 7AA2F7 7DCFFF FF9E64 9ECE6A 16161E"),
    ("gruvbox", "gruvbox-light", "gruvbox-dark", "FBF1C7 F2E5BC 3C3836 665C54 928374 D5C4A1 B57614 076678 AF3A03 79740E EBDBB2",
        "282828 3C3836 EBDBB2 D5C4A1 928374 504945 FABD2F 83A598 FE8019 B8BB26 1D2021"),
    ("nord", "nord-light", "nord", "ECEFF4 E5E9F0 2E3440 4C566A 7B88A1 D8DEE9 5E81AC 5E81AC D08770 A3BE8C D8DEE9",
        "2E3440 3B4252 ECEFF4 D8DEE9 7B88A1 434C5E 88C0D0 88C0D0 D08770 A3BE8C 242933"),
];

/// The family and scheme of a preset ID (`custom ` prefix allowed). Unknown IDs are None.
pub fn find(id: &str) -> Option<(&'static str, bool)> {
    let id = id.trim().trim_start_matches("custom").trim();
    THEMES.iter().find_map(|t| if id == t.1 { Some((t.0, false)) } else if id == t.2 { Some((t.0, true)) } else { None })
}

/// The preset canonical exports use: `print`, else the theme's own preset, else its family's light one.
pub fn export<'a>(theme: &'a str, print: &'a str) -> &'a str {
    match (print, find(theme)) {
        ("", Some(_)) => theme,
        ("", None) => THEMES.iter().find(|t| t.0 == theme).map_or("site-light", |t| t.1),
        (p, _) => p,
    }
}

fn hex(s: &str) -> Option<u32> {
    let s = s.trim().trim_start_matches('#');
    if s.len() == 6 { u32::from_str_radix(s, 16).ok() } else { None }
}

/// Overrides as `token #rrggbb` pairs, comma separated.
pub fn overrides(colors: &str) -> Vec<(usize, u32)> {
    colors.split(',').filter_map(|p| {
        let (k, v) = p.trim().split_once(' ')?;
        Some((TOKENS.iter().position(|t| *t == k.trim())?, hex(v)?))
    }).collect()
}

/// The exact palette of a preset with overrides applied. Unknown IDs fall back to site-light.
pub fn palette(id: &str, colors: &str) -> [u32; 11] {
    let (fam, dark) = find(id).unwrap_or(("site", false));
    let t = THEMES.iter().find(|t| t.0 == fam).unwrap();
    let mut p = [0; 11];
    for (v, h) in p.iter_mut().zip((if dark { t.4 } else { t.3 }).split(' ')) {
        *v = hex(h).unwrap_or(0);
    }
    overrides(colors).into_iter().for_each(|(i, c)| p[i] = c);
    p
}

/// Every family as CSS: `data-theme` picks a family, `data-scheme` a member; without
/// `data-scheme` the page follows the device (preview only).
pub fn css() -> String {
    let vars = |s: &str| s.split(' ').zip(TOKENS).map(|(h, t)| format!("--{t}:#{h};")).collect::<String>();
    THEMES.iter().map(|(f, _, _, l, d)| {
        let r = if *f == "site" { ":root".into() } else { format!(":root[data-theme={f}]") };
        format!("{r}{{{}color-scheme:light}}{r}[data-scheme=dark]{{{1}color-scheme:dark}}@media(prefers-color-scheme:dark){{{r}:not([data-scheme=light]){{{1}color-scheme:dark}}}}\n", vars(l), vars(d))
    }).collect()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn presets_pair_and_override() {
        assert_eq!(THEMES.len() * 2 - 2, 14);
        assert_eq!(find("dracula"), Some(("dracula", true)));
        assert_eq!(find("custom nord-light"), Some(("nord", false)));
        assert_eq!(palette("solarized-dark", "")[0], 0x002B36);
        assert_eq!(palette("custom nord", "accent #ff8800, bogus #000000")[6], 0xff8800);
        assert!(css().contains(":root[data-theme=gruvbox][data-scheme=dark]{--bg:#282828;"));
    }
}
