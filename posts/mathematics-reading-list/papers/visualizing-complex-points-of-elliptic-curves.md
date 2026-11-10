source: https://im.icerm.brown.edu/portfolio/visualizing-complex-points-of-elliptic-curves/
slogan: Project a complex elliptic curve from four real dimensions to three, print it, and you can hold the torus that the real picture hides.
basis: the page itself

## Before you start

This page has almost no text, so the likely feeling is mild guilt: "this is only pictures, it is not real study". You are allowed to feel that, and to look anyway. If you want to believe, with your hands as well as your head, that an elliptic curve is a torus, this page serves that want. Enjoy the pictures first. Whether you read every caption matters less.

## The story

Every textbook draws an elliptic curve as a loop and a wandering branch in the plane. That drawing shows only the real solutions of y<sup>2</sup> = x<sup>3</sup> + ax + b. The complex solutions live in ℂ<sup>2</sup>, which has four real dimensions, so nobody draws them. Yet the standard fact is that the complex points form a torus, and the real drawing gives no hint of it.

Sebastian Bozlee and Silviana Amethyst started this ICERM project in September 2019 to close that gap. They compute the curve as a surface in ℝ<sup>4</sup>, project it orthogonally to ℝ<sup>3</sup>, and then render it, 3D print it and show it in virtual reality. The printed surface looks knotted. Unfold it in your mind and the torus appears, with the familiar real curve drawn on it.

## Main definitions

**Elliptic curve over ℂ (as on the page).** The set of pairs (x, y) of complex numbers with y<sup>2</sup> = x<sup>3</sup> + ax + b, together with one extra point at infinity.
- Real picture: the solutions with x and y in ℝ, a curve in ℝ<sup>2</sup>.
- Complex picture: all solutions in ℂ<sup>2</sup> ≅ ℝ<sup>4</sup>, a real surface.

**Orthogonal projection ℝ<sup>4</sup> → ℝ<sup>3</sup>.** Write x and y by their real and imaginary parts, which gives four real coordinates. Drop one direction and keep the other three. The page's first image drops the imaginary part of x.

**Degeneration to a nodal curve.** The family y<sup>2</sup> = x(x + 1)(x − a), with the parameter a moving from 1 to 0. At a = 0 the cubic on the right has a double root, and the curve gets a node and stops being an elliptic curve.

## Main results

**Claim (the torus can be seen; "Abstract" and "Media").** For the curve y<sup>2</sup> = x<sup>3</sup> − x, the authors generate a four-dimensional computer model with Amethyst's software bertini\_real and project it to ℝ<sup>3</sup>. The result is a surface that unfolds to a torus.
- Step 1: compute the complex points numerically as a real surface in ℝ<sup>4</sup>.
- Step 2: project to ℝ<sup>3</sup>, render in Blender, and 3D print. One larger print has the real points painted white.

**Claim (a degeneration you can line up on a table; "Media").** A series of printed models of y<sup>2</sup> = x(x + 1)(x − a), for a from 1 down to 0, shows an elliptic curve turning into a nodal curve. The page reads this as a picture of nodal curves as limit points in the compactified moduli space of elliptic curves.

**Claim (the choice of projection matters; "Media").** Bozlee wrote virtual reality software in which the user rotates the curve in four dimensions and so moves through the possible projections. The page adds that other elliptic curves sit in ℂ<sup>2</sup> in a way that feels different.

## Note, then ignore

- The point at infinity. It is part of the elliptic curve but does not lie in ℂ<sup>2</sup>, so the models show the curve without it. Safe to skip on a first look.
- "Knotted" surface. The page uses this word for how the projected surface looks, and gives no theorem about it. Safe to skip.
- The symbol for the moduli space. The page names the compactified moduli space of elliptic curves once, to explain the nodal limit. You do not need its definition to follow the prints. Safe to skip.
- bertini\_real. This is the numerical software that produces the model. The page cites a paper on it (Brake and others, 2017). How it works does not change what you see. Safe to skip.
- No proofs. The page reports a project and its media. The torus statement is quoted as known, not proved here. Safe to accept for now.

## One next step

Open the page, scroll to "Media", and look at the first rendered image for one minute. Find the real curve y<sup>2</sup> = x<sup>3</sup> − x on the surface.
