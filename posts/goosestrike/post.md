---
title: Which numbers converge
date: 2026-11-07
draft: true
budget_kb: 80
summary: I threw a 4 lb bird at an aluminium panel on a laptop, four times, with a finer mesh each time. Some answers settled down. Some did not.
summary: The pressure on the skin has two parts. The long push settles with the mesh. The first shock does not.
summary: The deflection of the panel holds still until the skin starts to tear. Tearing depends on the mesh, so it never settles.
summary: The solver is small enough to run in this page. Press the button in the sixth figure and watch your own machine do it.
---

A bird hits an aeroplane. Nobody wants to be told the answer is "it depends on your mesh", yet that is what a finite element model tells you, and the whole craft is knowing which parts of the answer are about the aeroplane and which parts are about the mesh.

I wrote a bird strike solver to find out. It is small, it runs in a browser tab, and it is honest about its own coarse spots. This post walks through what it computes and, mostly, what it does not compute well. At the end you can run the real solver yourself, here, with no install.

## The short version

I think the most useful thing a simulation can do is tell you which of its numbers to believe. A single run gives you a pile of numbers with equal confidence. Four runs on four meshes give you a way to sort them.

- **The long push converges.** After the first shock, the bird flows over the panel like water against a wall. The pressure at the centre settles to a steady value that has a closed form. My plateau pressure was 26% too high on the coarsest mesh and 3% too high on the finest.
- **The first shock does not.** The peak pressure at the moment of contact has its own closed form too, but it is a spike one time step long on a patch of the panel 14 mm across. It was 43% low on the coarsest mesh, near the answer on two, and 11% high on the finest. It wanders.
- **The deflection holds, until it does not.** From 9 mm to 4.5 mm, the maximum deflection moved by less than 2%. At 3.5 mm it jumped by 50%, because a hole opened in the skin.
- **Tearing never settles.** Zero skin shells eroded on the coarsest mesh, then 8, then 25, then 249. A model that deletes elements when they fail will delete more of them as you make them smaller, unless you calibrate the failure strain to the mesh. Mine does not.

None of this is a surprise to people who do this for a living. What I wanted was to see it, with my own numbers, and to let you move the dials.

## A bird hits a panel

The rule is short. Aeroplanes that are certified under the American rules for transport category aircraft must be able to finish a flight after hitting a 4 lb bird at their cruise design speed.[^rule] I picked the Airbus A320 class, whose maximum operating speed is 350 knots, which makes the impact speed 180.06 m/s at sea level. The bird weighs 1.814 kg. Its kinetic energy is 29.41 kJ, about the same as a one-tonne car at 28 km/h, delivered to a patch of sheet metal the size of a dinner plate.

The panel I model is a piece of fuselage skin with stiffeners on the inside. It is an assumption, not a drawing of a real aeroplane. Press Next and the figure shows each part of it.

::figure kind=schematic src=panel.svg alt="A plan view of the panel from outside at about half scale. A rectangle, 1067 mm along the fuselage by 760 mm around it, is the skin. Three lines run along it, making four stringer bays of 190 mm. One heavy line runs across the middle, making two frame bays of 533 mm. The edges are heavy and clamped. An orange circle at the middle is the bird, 113 mm across." caption="The panel in plan, seen from outside. Next adds one part at a time: skin, stringers, frames, clamped edges, then the bird."

| Part | Value |
|---|---|
| Fuselage radius | 1.975 m, A320 class |
| Panel | 1.0668 m along the fuselage, 0.760 m around it |
| Skin | 2024-T3, 1.6 mm |
| Stringers | 4 bays, Z sections, 7075-T6, 1.6 mm |
| Frames | 2 bays, deeper Z sections, 7075-T6, 1.6 mm |
| Edges | clamped on the next frames and stringers |

The skin is thin: 1.6 mm is the thickness of a few coins. It curves with the fuselage, with a radius of just under two metres, and the stiffeners hold its shape. The bird arrives straight down onto the middle of the skin, between two stringers. I chose the worst case on purpose. Real birds do not usually hit dead centre at right angles.

## The bird is water

Here is the strangest idea in bird strike work, and the one that makes it tractable. At 180 m/s, a bird is not a solid thing. The impact is so fast that the bird has no time to behave like an animal. It behaves like a blob of water, or more exactly like a gelatin cylinder with a little air in it.[^gelatin]

So the standard test bird in a simulation is a cylinder with hemispherical ends and a length twice its diameter. For 4 lb that is 113.1 mm across and 226.2 mm long. The density is 950 kg/m³, a touch below water. The cartoon goose in the original page is just paint on top of this. The costume has no mass and no effect on the answer.

The physics is the equation of state of water, in the Tait form:

<p class="formula"><math display="block"><mi>p</mi><mo>=</mo><mfrac><mrow><msub><mi>ρ</mi><mn>0</mn></msub><msubsup><mi>c</mi><mn>0</mn><mn>2</mn></msubsup></mrow><mi>γ</mi></mfrac><mo>(</mo><msup><mrow><mo>(</mo><mfrac><mi>ρ</mi><msub><mi>ρ</mi><mn>0</mn></msub></mfrac><mo>)</mo></mrow><mi>γ</mi></msup><mo>−</mo><mn>1</mn><mo>)</mo></math></p>

with a sound speed of 1480 m/s and an exponent of 7. The bird cannot pull. If the pressure would go negative, it is set to zero.

### Two pressures

A fluid that hits a rigid wall makes two different pressures at the point where it lands. Wilbeck measured and wrote them down in 1978.[^wilbeck]

First comes a shock. For one instant the first layer of bird stops dead, and that sets up a compressed region that runs back into the bird faster than the bird is moving. The pressure in that region is:

<p class="formula"><math display="block"><msub><mi>P</mi><mi>H</mi></msub><mo>=</mo><msub><mi>ρ</mi><mn>0</mn></msub><msub><mi>U</mi><mi>s</mi></msub><mi>v</mi></math></p>

where *v* is the impact speed and *U<sub>s</sub>* is the speed of the shock. Then, once the shock has gone, the bird flows sideways over the wall in a steady stream, and the pressure at the centre drops to the stagnation pressure:

<p class="formula"><math display="block"><msub><mi>P</mi><mi>s</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>ρ</mi><mn>0</mn></msub><msup><mi>v</mi><mn>2</mn></msup></math></p>

At 180.06 m/s, *P<sub>H</sub>* is 314.4 MPa, with a shock speed of 1838 m/s, and *P<sub>s</sub>* is 15.40 MPa. The shock pressure is twenty times the steady pressure. Drag the slider and watch the gap move.

::figure kind=wilbeck lazy=true alt="A chart on a log scale of pressure at the centre of the impact against bird speed from 20 to 250 metres per second. A blue line for the shock pressure sits about twenty times above an orange line for the steady flow pressure. A dashed vertical line marks the certification speed of 180 metres per second, where the pressures are 314 and 15.4 megapascals. A slider moves a cursor along both lines." caption="Two pressures from one impact, on a log scale. Drag the speed. The shock (blue) rises a little faster than the square of the speed would give, because a faster bird also compresses itself more. The steady pressure (orange) is exactly half the density times the speed squared."

The gap matters for the rest of the post. The shock lasts for a moment, the steady push lasts until the bird has run out. The squash-up time, the time it takes the whole bird to flatten against the wall, is the length divided by the speed: 226 mm over 180 m/s, or 1260 µs. For about a millisecond the panel is pushed at 15 MPa, and for about a microsecond it is hit at 314.

[^rule]: The text is 14 CFR 25.571(e)(1), as amended to Amendment 25-148. The speed is the design cruise speed V<sub>C</sub> at sea level, or 0.85 V<sub>C</sub> at 8000 ft, whichever is more critical. For this aeroplane the sea level case wins: 0.85 V<sub>C</sub> at 8000 ft is about 0.96 V<sub>C</sub> in true airspeed.
[^gelatin]: The bird is gelatin with 10% porosity at 950 kg/m³, after Perdikoulis, Theotokoglou and Giannopoulos (2021), who took it from Barber and colleagues. Heimbs (2011) reviews the choices, and I took the shape and the equation of state from there.
[^wilbeck]: R. L. Wilbeck, *Impact behavior of low strength projectiles*, AFML-TR-77-134, 1978. The Hugoniot pressure uses the shock speed from the jump conditions with the same Tait equation of state the solver uses, so the check is fair: I am comparing the solver to what its own material model predicts, not to a different material.

## How fine is fine

To model the bird I use smoothed particle hydrodynamics. The bird is a cloud of particles. Each one carries mass, a density and a pressure, and feels its neighbours through a smooth kernel that reaches out about 1.2 particle spacings. There is no mesh in the bird, which is why it can splash.

The cost is in the count. Cut the spacing in half and you have eight times as many particles. Here is a slice through the bird at each spacing I use, with the circle of influence of one particle drawn in orange.

::figure kind=bird lazy=true alt="A vertical slice through a cylinder with hemispherical ends, drawn as a grid of grey dots, with a flat panel line under it. A slider changes the spacing of the dots from 9 millimetres to 3.5 millimetres. An orange circle shows the smoothing length of one particle, which is 1.2 times the spacing." caption="A slice through the bird at the spacing you pick. The orange ring is how far one particle can feel its neighbours. At 9 mm the ring is 10.8 mm wide, which is wider than the shock is thin."

At 9 mm the bird has 2,560 particles. At 3.5 mm it has 44,412. The slider counts the whole bird, not the slice: the volume divided by the cube of the spacing. The slice just shows the idea: the ring is the resolution. A shock in a real fluid is thinner than that ring on the coarse bird. The solver cannot draw something thinner than its own kernel, so it smears the shock out.[^kernel] That is the whole story of the peak pressure, and I will return to it.

[^kernel]: The kernel is a cubic spline. The smoothing length is h = 1.2 times the particle spacing, with Monaghan artificial viscosity (α = 1, β = 2) to keep the shock from ringing. The cubic spline is the old default for good reason, but a different kernel or a different viscosity would move the peak pressure by an amount I did not measure.

## The panel is metal

The skin and the stiffeners are two aluminium alloys. The skin is 2024-T3, soft and tough. The stringers and frames are 7075-T6, strong and a bit brittle. Their data come from the ASM data sheets.[^asm]

| | Density | Modulus | Yield | Ultimate | Elongation |
|---|---|---|---|---|---|
| 2024-T3 | 2780 kg/m³ | 73.1 GPa | 345 MPa | 483 MPa | 18% |
| 7075-T6 | 2810 kg/m³ | 71.7 GPa | 503 MPa | 572 MPa | 11% |

The solver treats each alloy as a straight line up to the yield stress, and then another straight line from the yield stress to the ultimate stress, which it reaches at the elongation. That is a plastic model with linear hardening. It is a crude stand-in for a real stress–strain curve, and it is enough to carry the energy into the metal.

There is one more rule. When the plastic strain in an element reaches its limit, the solver deletes the element. The limit is the elongation less the elastic strain at the ultimate stress: 17.3% for the skin and 10.2% for the stiffeners. Slide the strain across and see where each alloy gives up.

::figure kind=metal lazy=true alt="A stress–strain chart from 0 to 20 percent strain. A violet line for the 2024-T3 skin rises to 345 megapascals, then more slowly to 483 megapascals at 18 percent. A green line for the 7075-T6 stiffeners rises to 503 megapascals, then to 572 at 11 percent. Dots at the end of each line mark where elements are deleted. A slider moves a cursor and reads out the stress in each alloy." caption="Bilinear stress–strain curves for the two alloys. The stiffeners are stronger and break first. Drag the strain to 11% and the stiffeners are gone, while the skin is still carrying 428 MPa."

Notice what the model does not have. There is no necking, no strain rate effect, no temperature, no crack growth. Erosion is a single number, and the number does not know how big the element is. I will come back to that in a moment, because it is the villain of this post.

[^asm]: ASM Aerospace Specification Metals data sheets for 2024-T3 and 7075-T6 sheet, as published on MatWeb. The panel mass comes out at 5.05 kg.

## What one time step does

The solver is an explicit one. Explicit means that it takes small steps in time and never solves a big system of equations. At each step it knows the forces on everything, it moves everything by a tiny amount, and it repeats. For the 9 mm mesh that is 1,774 steps to reach 3 ms. For the 3.5 mm mesh it is 4,652.

Each step has five phases. Press Next to see them.

::figure kind=schematic src=step.svg alt="Five boxes in a row, joined by lines. They are the five phases of one time step: 0 time step, 1 SPH bird, 2 shells, 3 contact, 4 integrate. A dashed line from the last box returns to the first." caption="One time step in five phases. After phase 4 the loop starts again, about 1,800 to 4,700 times for the 3 ms strike."

The step length is set by the smallest thing in the model. A pressure wave must not cross an element in less than one step, so a finer mesh needs shorter steps. The solver takes the smaller of two limits: one from the bird's sound speed, and one from the smallest shell. That is why the cost grows so fast. Halve the spacing and you pay for eight times the particles, and also for twice the steps.[^cfl]

Two details that I like. The whole state is a fixed set of arrays that exist from the start, so the time loop never asks for memory. And contact is the simplest thing that could work: each particle pushes on the nearest shell element with a penalty spring.

[^cfl]: The factors are 0.25 of the stable step for the SPH bird and 0.9 for the shells. They are conventional. Because the time step is not the same on each mesh, I compare runs by the time they reach, not by the step count.

## Run it yourself

This is the part I wanted to build. The solver is written in Goose, a small language, compiled to C, and then to WebAssembly. The compiled file is 66 KB, or 34 KB after compression. That is smaller than the font this page uses, and it holds the entire bird strike solver.

The first thing you see below is a recording of one strike on the 9 mm mesh, with the deflection and the contact force drawn underneath. Press Play, or drag the time slider yourself. The bird is a slice of the particles along the middle of the panel. The black line is the skin along the same cut.

Then press **Run it yourself**. The page downloads the real solver, sets up the same bird and the same panel, and steps through the same 1,774 time steps on your machine. A green dotted line draws the deflection as it comes in. If your machine is the same as mine, the line will sit exactly on top of the blue one, because the solver is deterministic: same inputs, same bits out.

::figure kind=strike lazy=true wide=true alt="Top: a side view of the panel along its length, as a black line, with a cloud of grey dots for the bird above it. The line starts flat. A time slider and a Play button move it through 3 milliseconds, and the middle of the panel is pushed down to about 150 millimetres. Bottom: a chart of deflection in blue and contact force in orange against time. A green dotted line is drawn by the solver when the Run it yourself button is pressed. A skin thickness slider sets the panel for the live run." caption="One strike at 180 m/s on the 9 mm mesh. The recording has 31 frames, 100 µs apart. The button runs the full solver in this page, with the skin thickness you pick. At the default 1.6 mm it should reproduce the recording: 150.8 mm of deflection and 36 stiffener shells eroded."

Two things to try. First, leave the skin alone and press the button. You should see 150.8 mm and 36 eroded shells, and your own timing, which on an idle laptop is around ten seconds. Second, move the skin to 0.8 mm, press the button again, and see what a thinner skin costs. The recording does not change. The green line does.

The page on its own site can also use your graphics card. In that version, the same solver runs on the GPU, and the fine meshes take seconds, not minutes. I could not make that part work from this page without the small piece of glue code that the toolchain writes, and I did not want to ship a copy of it. The solver here is the processor version of the same code, and the numbers it makes are the ones in the tables.[^glue]

[^glue]: The compiler writes a file of JavaScript to load the WebAssembly. This site has a rule against JavaScript, so the page loads the file with 60 lines of TypeScript instead. The solver only needs five small functions from the browser: one to write text, one to grow memory, one to ask for the largest memory, one to seek and one to stop. The GPU version needs about thirty functions that wrap the browser's graphics interface, and I did not rewrite those.

## Four meshes

Now the experiment. I ran the same strike on four bird spacings: 9, 6, 4.5 and 3.5 mm. The skin is cut into cells to match, from 56 cells along the fuselage to 144, and the panel into 3,088 shells to 20,560. The shells are about 2.1 bird spacings wide.[^ratio]

First the rigid wall check, which is the simplest test of the bird alone. Put the bird against an unmoving wall and measure the force on a small disc at the centre. The peak is the largest value in one time step. The plateau is the mean between a quarter and three quarters of the squash-up time.

| Bird spacing | Particles | Peak (MPa) | Peak vs P<sub>H</sub> | Plateau (MPa) | Plateau vs P<sub>s</sub> |
|---|---|---|---|---|---|
| 9 mm | 2,560 | 180.5 | −42.6% | 19.37 | +25.8% |
| 6 mm | 8,760 | 317.4 | +0.9% | 19.67 | +27.7% |
| 4.5 mm | 20,902 | 322.9 | +2.7% | 17.42 | +13.1% |
| 3.5 mm | 44,412 | 350.1 | +11.3% | 15.90 | +3.2% |

Two columns are in the table because they behave differently. The plateau column walks down: 26, 28, 13, 3. That is what convergence looks like. The peak column walks up and over: −43, +1, +3, +11. On the coarse mesh the kernel smears the shock and the peak is too low. On the finest mesh the peak is too high. The peak is one time step of one 14 mm disc, so it is noisy, and I would not use it for anything more than an order of magnitude check.

Then the panel. The same four meshes, 3 ms of strike:

| Bird spacing | Peak contact force | Max deflection | Skin shells eroded | Stiffener shells eroded | Panel work |
|---|---|---|---|---|---|
| 9 mm | 240.1 kN | 150.8 mm | 0 | 36 | 18.53 kJ |
| 6 mm | 229.3 kN | 152.1 mm | 8 | 62 | 18.92 kJ |
| 4.5 mm | 209.1 kN | 152.9 mm | 25 | 152 | 19.29 kJ |
| 3.5 mm | 203.7 kN | 228.1 mm | 249 | 191 | 18.47 kJ |

I find tables like this hard to read, so here are the same numbers drawn six ways. Drag the slider to mark one mesh. Each panel has its own verdict, in the colour that says whether you can trust it: green for settles, orange for does not, violet for in between.

::figure kind=converge lazy=true wide=true alt="Six small charts, each with four dots for the four meshes from 9 to 3.5 millimetres. Plateau pressure error falls from 26 to 3 percent and is green. Peak pressure error goes from minus 43 to plus 11 percent and is orange. Maximum deflection is flat at about 151 millimetres and then jumps to 228, in violet. Skin shells eroded goes from 0 to 249 and is orange. Peak contact force drifts down from 240 to 204 kilonewtons in violet. Energy balance error stays under 0.4 percent and is green. A slider picks one mesh and highlights its dots." caption="Six answers on four meshes. Plateau pressure and energy balance behave. Peak pressure and skin erosion do not. Deflection behaves until the skin tears. Hover a dot for its value."

[^ratio]: The ratio of shell size to bird spacing is fixed at about 2.1 so that the two grids are refined together. Changing that ratio would change the contact between bird and skin, and I did not vary it.

## What settled and what did not

Take the answers one at a time.

**Energy.** The sum of the bird's kinetic and internal energy, plus the panel's kinetic energy and internal work, stays within 0.4% of the energy you started with in every run, and within 0.1% on the finer meshes. That is a good sign for the code. It says nothing about convergence, because a solver can conserve energy and still be wrong about where the energy goes. I list it in the figure because it is the number people reach for first, and it never moves.

**Impulse.** In the rigid wall test, the total impulse is the mass times the speed to within 1%. Same remark: it must be true, and it is.

**Plateau pressure.** This one converges the way textbooks say. The bird, after the shock, flows. The steady-flow pressure does not depend on a thin front, only on the bulk of the fluid, and the kernel can represent that. Down to 3.5 mm it is 3% over the closed form.

**Peak pressure.** This depends on how thin a shock the bird can have, and that depends on the spacing of its particles. So it changes with every mesh, and in the figure it overshoots the answer before the finest mesh even finishes.

**Deflection.** The maximum deflection of the panel is mostly set by energy: the bird has 29.41 kJ and the panel's work is around 18.5 to 19.3 kJ in all four runs. The shape the panel takes to hold that work is what the deflection measures. It barely moves from 9 mm to 4.5 mm. The jump at 3.5 mm is not a failure of the bird. It is a hole.

**Erosion.** At 9 mm no skin element reaches the failure strain. At 6 mm and 4.5 mm some do. At 3.5 mm there are 249, and a hole opens in the skin. Erosion with a fixed strain limit depends on the element size: a smaller element can strain more locally, because the strain concentrates into one element's width. So the finer you cut, the more you tear. Nothing converges here, because the model has no length scale. A failure model calibrated to the mesh would fix that. This model has none.

I want to be careful about what the 3.5 mm result means. It does not show that the real skin tears. It shows that the erosion model is the coarse part of this model.

> A tear prediction needs a failure model calibrated to the mesh. This model has none, so I do not claim one.

The stringers and frames fail locally in all four runs. That is a robust finding in the sense that it does not need the fine mesh to appear. The rule accepts damage. It asks that the aeroplane finishes the flight, and checking that needs a residual strength analysis, which this project does not do.

## The cost of fine

The numbers below are from a test machine. The page has three meshes on a CPU and four on a GPU. The GPU solver is a port of the same Goose code to WebGPU compute shaders. It uses 32-bit floats, since the shading language has no 64-bit type, and its results are bit-for-bit repeatable on one GPU.[^gpu]

Compare the two. The first view is the time for one step. The second is the time for the whole run on the page.

::figure kind=trade lazy=true wide=true alt="Grouped bars on a log scale for four meshes, a blue bar for the CPU and an orange bar for the GPU. In the first view, the time for one step is 18.2, 76.7, 146 and 288 milliseconds on the CPU and 0.99, 1.51, 1.64 and 2.25 milliseconds on the GPU. In the second view, the time for the whole strike is 65, 301 and 1085 seconds on the CPU, with no CPU run on the finest mesh, and 0.9, 3.6, 9.7 and 20.9 seconds on the GPU." caption="CPU against GPU on the four meshes, from the benchmark in the repository. The machine was busy with other work, so the CPU times are higher than an idle machine would give. Hover a bar for its value."

The speed-up is 18 times on the coarse mesh and 128 times on the fine one. The GPU wins more where the work is bigger, because the cost of starting a kernel is the same for any mesh. On the fine mesh the page is limited by the 2D canvas that draws the frames, not by the solver.

An honest note on the plateau. On the GPU, the plateau pressure at 4.5 mm and 3.5 mm comes out lower than on the CPU, by about 14 points and 3 points. I do not know why. The peak and the impulse agree to four digits. The centre sensor force jumps by about 20% from step to step, so a small difference in the details moves the mean. I show the CPU plateau for each preset for that reason.

[^gpu]: Eleven compute kernels do the five phases, plus a reduction. Atomic additions to the contact forces are done in integers, so the sum does not depend on the order in which threads add. The neighbour lists are sorted by index for the same reason. A test compares GPU and CPU runs of the 9 mm panel, step by step, with tolerances about ten times what I saw on Metal.

## What I would trust

If I had one run, I would trust the energy balance as a sanity check and nothing else. If I had two, I would compare the plateau. With four, I can say more:

1. **The impact load is about 15 to 20 MPa for about a millisecond.** The plateau converges and has a closed form I can check against.
2. **The panel takes about 150 mm of deflection.** I trust this one on the first three meshes, because it did not move.
3. **The stringers and frames fail locally.** All four meshes say so.
4. **Skin tearing is not predicted.** The count of eroded skin elements is a property of the mesh, not of the metal.
5. **The peak pressure is a number to look at once.** I would not put it in a report.

That list is shorter than the pile of numbers the solver prints. I think that is what a mesh study is for.

## Data and methods

The solver, the tables and the figures' data come from the goosestrike repository at commit 4ada067. The tables are the repository's README. The recording in the sixth figure was made by running the solver's WebAssembly file, unchanged, in Bun, with a cell count of 56, a spacing of 9 mm and a speed of 180.06 m/s, sampling the deflection every 25 steps and the middle line of the skin every 100 µs. The same file is loaded by the button. The Wilbeck curves are computed in your browser with the same Tait equation of state as the solver, by bisection on the shocked density.

This is not a certification analysis. The panel is a representative assumption. The material data are catalogue values. The model has no failure calibration, no residual strength analysis and no rate effects. The text version of this page lists every figure's caption and description.
