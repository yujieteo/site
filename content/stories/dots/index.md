---
title: Dots from a seed
summary: Type a number or a word. The seed makes a dot animation, and the same seed always makes the same one.
palette: #4f6f92 #1f2a3c #f0a050 #ffe39a
thumb: 41213
---

<!-- skill: The seed goes to scene 7 through the stage, as its high and low 16 bits. The parts and their names come from engine::thumb: change them there, never here. Every colour is a theme token. Add an example seed only after you see its animation on the page, in a light and a dark theme. -->

## Your seed {scene=7 t=3}

The picture shows the animation of the seed in the box. Pick an example, or type a seed.

```rust
//| caption: Example seeds. When you pick one, the seed box starts at it.
let example = choice("Example", &EXAMPLES.map(|s| format!("{s}: {}", named(s))), 0);
```

```rust
//| caption: Your seed. A whole number from 0 to 4294967295 is the seed. Other text becomes a seed through its 32-bit FNV-1a hash.
let typed = field(&format!("Seed (from example {})", example + 1), &EXAMPLES[example].to_string());
let seed = seed_of(typed.trim());
stage(&[(seed >> 16) as f64, (seed & 0xffff) as f64]);
println!("Seed {seed}: {}, variety {}.", named(seed), parts(seed).4);
```

## One number, five parts

The seed is cut by remainders into five parts. Each part picks one thing in the animation:

- The seed mod 20 picks the motion (20 motions).
- The seed ÷ 20, mod 20, picks the backdrop (20 backdrops).
- The seed ÷ 400, mod 15, picks the character: one of 5 moods in one of 5 tints (15 characters).
- The seed ÷ 6000, mod 6, picks the composition: who is on the stage, and where (6 compositions).
- The seed ÷ 36000 is the variety: the tint of the backdrop's dots, the tempo, the size, a mirror and the small details.

Change the part and only that part changes: add 1 to the seed to change the motion, add 20 for the backdrop. That makes 20 × 20 × 15 × 6 × 54 = 1,944,000 different animations. Every colour comes from the theme you chose, so the animation follows the theme live. Characters keep a contrast of 3 to 1 with the backdrop in every theme.

```rust
//| caption: All the parts. A dot (●) marks the parts of your seed.
let (m, b, c, k, _) = parts(seed);
let mark = |on: bool, name: &str| if on { format!("● {name}") } else { name.to_string() };
let rows: Vec<Vec<String>> = (0..20).map(|d| vec![d.to_string(), mark(d == m, MOTIONS[d]), mark(d == b, BACKDROPS[d]), CHARACTERS.get(d).map_or(String::new(), |n| mark(d == c, n)), COMPOSITIONS.get(d).map_or(String::new(), |n| mark(d == k, n))]).collect();
table(&["Part", "Motion", "Backdrop", "Character", "Composition"], &rows);
```

## The same seed, the same animation

Each frame comes from the seed, the time and the pointer only, so one seed always gives the same animation. Pause, Render and Export use your seed. The cards on the Stories page are seeds too. Type 26457 to see the card of the radar story.

# The code

```rust
//| caption: The examples, the parts in words, and the seed of a text.
use engine::thumb::{BACKDROPS, CHARACTERS, COMPOSITIONS, MOTIONS, parts};
const EXAMPLES: [u32; 6] = [41213, 12108, 26457, 77189, 90376, 61434];
/// The parts of a seed in words: motion, backdrop, character.
fn named(seed: u32) -> String {
    let (m, b, c, k, _) = parts(seed);
    format!("{} {}, {}, {}", COMPOSITIONS[k], MOTIONS[m], BACKDROPS[b], CHARACTERS[c])
}
/// The seed of a text: the number itself, or else the 32-bit FNV-1a hash of its bytes.
fn seed_of(s: &str) -> u32 {
    s.parse().unwrap_or_else(|_| s.bytes().fold(0x811c_9dc5, |h, b| (h ^ b as u32).wrapping_mul(0x0100_0193)))
}
```
