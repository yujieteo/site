---
title: Dots from a seed
summary: Type a number or a word. The seed makes a dot animation, and the same seed always makes the same one.
palette: #4f6f92 #1f2a3c #f0a050 #ffe39a
thumb: 41213
---

<!-- skill: The seed goes to scene 7 through the stage, as its high and low 16 bits. The parts and their names come from engine::thumb: change them there, never here. Add an example seed only after you see its animation on the page. -->

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
println!("Seed {seed}: {}, variety {}.", named(seed), seed / 1000);
```

## One digit, one part

Each digit of the seed picks one part of the animation:

- The last digit (the units) picks the motion.
- The tens digit picks the backdrop.
- The hundreds digit picks the character. The digits 5 to 9 give the same characters as 0 to 4.
- All the other digits (the variety) pick the colours, the size, the speed and the small details.

Change one digit to change one part.

```rust
//| caption: All the parts. A dot (●) marks the parts of your seed.
let (m, b, ..) = parts(seed);
let mark = |on: bool, name: &str| if on { format!("● {name}") } else { name.to_string() };
let rows: Vec<Vec<String>> = (0..10).map(|d| vec![d.to_string(), mark(d == m, MOTIONS[d]), mark(d == b, BACKDROPS[d]), mark(d as u32 == seed / 100 % 10, CHARACTERS[d % 5])]).collect();
table(&["Digit", "Motion", "Backdrop", "Character"], &rows);
```

## The same seed, the same animation

Each frame comes from the seed, the time and the pointer only, so one seed always gives the same animation. Pause, Render and Export use your seed. The cards on the Stories page are seeds too. Type 26457 to see the card of the radar story.

# The code

```rust
//| caption: The examples, the parts in words, and the seed of a text.
use engine::thumb::{BACKDROPS, CHARACTERS, MOTIONS, parts};
const EXAMPLES: [u32; 6] = [41213, 12108, 26457, 77189, 90376, 61434];
/// The parts of a seed in words: motion, backdrop, character.
fn named(seed: u32) -> String {
    let (m, b, c, _) = parts(seed);
    format!("{}, {}, {}", MOTIONS[m], BACKDROPS[b], CHARACTERS[c])
}
/// The seed of a text: the number itself, or else the 32-bit FNV-1a hash of its bytes.
fn seed_of(s: &str) -> u32 {
    s.parse().unwrap_or_else(|_| s.bytes().fold(0x811c_9dc5, |h, b| (h ^ b as u32).wrapping_mul(0x0100_0193)))
}
```
