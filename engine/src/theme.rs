//! Site palettes, with Penumbra Light as the default for every page.

pub const VERSION: u32 = 4;
pub const TOKENS: [&str; 11] = ["bg", "surface", "fg", "fg2", "muted", "line", "accent", "accent-text", "warm", "green", "chrome"];
/// Preset ID, label, dark scheme, and official sRGB palette in TOKENS order. See docs/themes.md.
pub const THEMES: [(&str, &str, bool, &str); 2] = [
    ("penumbra-light", "Penumbra Light", false, "fff7ed f2e6d4 303338 636363 636363 bebebe 7e87d6 636363 cb7459 46a473 f2e6d4"),
    ("penumbra-dark-plus-plus", "Penumbra Dark ++", true, "181b1f 0d0f13 dedede aeaeae aeaeae 3e4044 97a6ff aeaeae f48e74 61c68a 0d0f13"),
];

/// Old and unknown export themes use Penumbra Light.
pub fn export(id: &str) -> &str {
    if THEMES.iter().any(|t| t.0 == id.trim()) { id.trim() } else { THEMES[0].0 }
}

pub fn palette(id: &str) -> [u32; 11] {
    let t = THEMES.iter().find(|t| t.0 == export(id)).unwrap();
    let mut p = [0; 11];
    p.iter_mut().zip(t.3.split(' ')).for_each(|(v, h)| *v = u32::from_str_radix(h, 16).unwrap());
    p
}

/// Light does not depend on the device preference. Only an explicit choice enables a dark preset.
pub fn css() -> String {
    THEMES.iter().enumerate().map(|(i, (id, _, dark, p))| {
        let selector = if i == 0 { ":root".into() } else { format!(":root[data-mode={}]", id) };
        let vars: String = p.split(' ').zip(TOKENS).map(|(h, t)| format!("--{t}:#{h};")).collect();
        format!("{selector}{{{vars}color-scheme:{}}}\n", if *dark { "dark" } else { "light" })
    }).collect()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn choices_with_penumbra_light_default() {
        for old in ["", "site", "site-dark", "solarized-dark", "rose-pine", "selenized-dark", "penumbra-dark", "tokyo-night", "gruvbox-dark", "catppuccin-mocha"] {
            assert_eq!(export(old), "penumbra-light");
            assert_eq!(palette(old), palette("penumbra-light"));
        }
        assert_eq!(THEMES.map(|t| t.0), ["penumbra-light", "penumbra-dark-plus-plus"]);
        assert_eq!(export("penumbra-dark-plus-plus"), "penumbra-dark-plus-plus");
        assert_eq!(palette("penumbra-light")[0], 0xfff7ed);
        assert_eq!(palette("penumbra-dark-plus-plus")[0], 0x181b1f);
        assert!(css().starts_with(":root{--bg:#fff7ed;"));
        assert!(!css().contains("prefers-color-scheme"));
        assert!(css().contains(":root[data-mode=penumbra-dark-plus-plus]{--bg:#181b1f;"));
    }

    #[test]
    fn text_contrast() {
        for (id, _, _, _) in THEMES {
            let p = palette(id);
            for (a, b) in [(2, 0), (3, 0), (4, 0), (7, 0), (2, 1), (3, 1), (4, 1)] {
                assert!(crate::thumb::ratio(p[a], p[b]) >= 4.5, "{id}: {} on {}", TOKENS[a], TOKENS[b]);
            }
        }
    }
}
