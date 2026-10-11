//! Themes: seven light/dark families, the site's own pair first. The page follows the device's
//! light or dark setting; exports use one preset. A theme ID names a family or one preset.

pub const VERSION: u32 = 2;
pub const TOKENS: [&str; 11] = ["bg", "surface", "fg", "fg2", "muted", "line", "accent", "accent-text", "warm", "green", "chrome"];
/// Family, light ID, dark ID, light palette, dark palette (in TOKENS order).
pub const THEMES: [(&str, &str, &str, &str, &str); 7] = [
    ("site", "site-light", "site-dark", "f4f3f1 ebe9e6 141414 3f3e3c 716f6b 8e8c8a 141414 141414 74726e 3f3e3c f4f3f1",
        "000000 111111 f2f2f2 c2c2c2 8a8a8a 5a5a5a f2f2f2 f2f2f2 c2c2c2 c2c2c2 000000"),
    ("solarized", "solarized-light", "solarized-dark", "FDF6E3 EEE8D5 586E75 657B83 667474 968E7A 268BD2 1F6FA8 CB4B16 859900 EEE8D5",
        "002B36 073642 93A1A1 839496 7A9199 437786 268BD2 6CB0E3 CB4B16 859900 00212B"),
    ("dracula", "dracula-light", "dracula", "FFFBEB F4EFD8 1F1F1F 4B4A5C 635D97 91909E 644AC9 A3144D A34D14 14710A EFEAD4",
        "282A36 343746 F8F8F2 C3C5D2 7E90C4 6F7287 BD93F9 FF79C6 FFB86C 50FA7B 21222C"),
    ("catppuccin", "catppuccin-latte", "catppuccin-mocha", "EFF1F5 E6E9EF 4C4F69 5C5F77 6B6D7F 888B95 8839EF 1E66F5 FE640B 40A02B DCE0E8",
        "1E1E2E 313244 CDD6F4 BAC2DE 80859E 66687D CBA6F7 89B4FA FAB387 A6E3A1 11111B"),
    ("tokyo-night", "tokyo-night-day", "tokyo-night", "E1E2E7 E9E9ED 3760BF 6172B0 5C638A 7D8091 2E7DE9 9854F1 B15C00 587539 D0D5E3",
        "1A1B26 24283B C0CAF5 A9B1D6 7A81A9 5E6687 7AA2F7 7DCFFF FF9E64 9ECE6A 16161E"),
    ("gruvbox", "gruvbox-light", "gruvbox-dark", "FBF1C7 F2E5BC 3C3836 665C54 7A6B5D 9A8968 B57614 076678 AF3A03 79740E EBDBB2",
        "282828 3C3836 EBDBB2 D5C4A1 9B8C7C 77706B FABD2F 83A598 FE8019 B8BB26 1D2021"),
    ("nord", "nord-light", "nord", "ECEFF4 E5E9F0 2E3440 4C566A 616D86 858A95 5E81AC 5E81AC D08770 A3BE8C D8DEE9",
        "2E3440 3B4252 ECEFF4 D8DEE9 8E9CB5 737D90 88C0D0 88C0D0 D08770 A3BE8C 242933"),
];

/// The family and scheme of a preset ID. Unknown IDs are None.
pub fn find(id: &str) -> Option<(&'static str, bool)> {
    let id = id.trim();
    THEMES.iter().find_map(|t| if id == t.1 { Some((t.0, false)) } else if id == t.2 { Some((t.0, true)) } else { None })
}

/// The preset canonical exports use: the theme's own preset, else its family's light one.
pub fn export(theme: &str) -> &str {
    if find(theme).is_some() { theme } else { THEMES.iter().find(|t| t.0 == theme).map_or("site-light", |t| t.1) }
}

/// The exact palette of a preset. Unknown IDs fall back to site-light.
pub fn palette(id: &str) -> [u32; 11] {
    let (fam, dark) = find(id).unwrap_or(("site", false));
    let t = THEMES.iter().find(|t| t.0 == fam).unwrap();
    let mut p = [0; 11];
    p.iter_mut().zip((if dark { t.4 } else { t.3 }).split(' ')).for_each(|(v, h)| *v = u32::from_str_radix(h, 16).unwrap_or(0));
    p
}

/// Every family as CSS: `data-theme` on <html> picks a family. Light or dark follows the device
/// unless <html data-mode> holds the reader's choice (the header's button).
pub fn css() -> String {
    let vars = |s: &str, m: &str| s.split(' ').zip(TOKENS).map(|(h, t)| format!("--{t}:#{h};")).collect::<String>() + "color-scheme:" + m;
    THEMES.iter().map(|(f, _, _, l, d)| {
        let r = if *f == "site" { ":root".into() } else { format!(":root[data-theme={f}]") };
        let (light, dark) = (vars(l, "light"), vars(d, "dark"));
        format!("{r}{{{light}}}@media(prefers-color-scheme:dark){{{r}:not([data-mode=light]){{{dark}}}}}{r}[data-mode=dark]{{{dark}}}\n")
    }).collect()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn presets_pair() {
        assert_eq!(find("dracula"), Some(("dracula", true)));
        assert_eq!(find("nord-light"), Some(("nord", false)));
        assert_eq!(palette("solarized-dark")[0], 0x002B36);
        assert!(css().contains("@media(prefers-color-scheme:dark){:root[data-theme=gruvbox]:not([data-mode=light]){--bg:#282828;"));
        assert!(css().contains(":root[data-mode=dark]{--bg:#000000;"));
    }
}
