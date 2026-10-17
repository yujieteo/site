---
title: A seed in numbers
summary: Type a number or a word. Inspect the five parts of its seed.
---

## Your seed

Pick an example or type a seed. The tables show its parts.

```rust
//| caption: Example seeds. When you pick one, the seed box starts at it.
let example = choice("Example", &EXAMPLES.map(|s| format!("{s}: {}", named(s))), 0);
```

```rust
//| caption: Your seed. A whole number from 0 to 4294967295 is the seed. Other text becomes a seed through its 32-bit FNV-1a hash.
let typed = field(&format!("Seed (from example {})", example + 1), &EXAMPLES[example].to_string());
let seed = seed_of(typed.trim());
println!("Seed {seed}: {}, variety {}.", named(seed), parts(seed).4);
```

## One number, five parts

Remainders divide the seed into five parts. Each part selects a label from a fixed set:

- The seed mod 20 picks the motion (20 motions).
- The seed ÷ 20, mod 20, picks the backdrop (20 backdrops).
- The seed ÷ 400, mod 15, picks the character: one of 5 moods in one of 5 tints (15 characters).
- The seed ÷ 6000, mod 6, picks the composition: who is on the stage, and where (6 compositions).
- The seed ÷ 36000 is the variety: a group of extra choices.

Change one part and the other parts stay the same: add 1 to the seed to change the motion, add 20 for the backdrop. The five parts select one combination of labels.

```rust
//| caption: All the parts. A dot (●) marks the parts of your seed.
let (m, b, c, k, _) = parts(seed);
let mark = |on: bool, name: &str| if on { format!("● {name}") } else { name.to_string() };
let rows: Vec<Vec<String>> = (0..20).map(|d| vec![d.to_string(), mark(d == m, MOTIONS[d]), mark(d == b, BACKDROPS[d]), CHARACTERS.get(d).map_or(String::new(), |n| mark(d == c, n)), COMPOSITIONS.get(d).map_or(String::new(), |n| mark(d == k, n))]).collect();
table(&["Part", "Motion", "Backdrop", "Character", "Composition"], &rows);
```

## The same seed, the same parts

The same seed always gives the same parts. A whole number is its own seed. Other text uses the hash below.

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
