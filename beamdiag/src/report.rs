use crate::engine::{Q, Units, to_units};
use crate::fmt::{from_origin, sig4, spoken_unit, tex_number, tex_unit};
/// How a report or a hand calculation writes its numbers: the unit convention and the origin of x.
#[derive(Clone, Copy)]
pub struct View<'a> { pub u: &'a Units, pub mid: bool, pub l: f64 }

impl View<'_> {
    pub fn show(&self, si: f64, q: Q) -> f64 { to_units(si, q, self.u) }
    pub fn sym(&self, q: Q) -> &'static str { self.u.symbol(q) }
    /// The display coordinate of a position measured from the left end, as the page shows it.
    pub fn x(&self, x: f64) -> f64 { self.show(from_origin(x, self.l, self.mid), Q::Length) }
    pub fn text(&self, t: &str, q: Q) -> String { format!("{t} {}", self.sym(q)) }
    pub fn say(&self, t: &str, q: Q) -> String { crate::fmt::say(t, q, self.u) }
    pub fn tex(&self, t: &str, q: Q) -> String { format!("{}\\ {}", tex_number(t), tex_unit(self.sym(q))) }
    pub fn v4(&self, si: f64, q: Q) -> String { sig4(self.show(si, q)) }
    pub fn pos(&self, x: f64) -> String { self.text(&sig4(self.x(x)), Q::Length) }
    pub fn say_pos(&self, x: f64) -> String { format!("x equals {}", self.say(&sig4(self.x(x)), Q::Length)) }
    pub fn units_spoken(&self) -> String {
        format!("{}, {} and {}", spoken_unit(self.u, Q::Force, true), spoken_unit(self.u, Q::Length, true), spoken_unit(self.u, Q::Stress, true))
    }
}

