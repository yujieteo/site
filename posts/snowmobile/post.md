---
title: Take apart before you put together
date: 2026-11-07
draft: true
budget_kb: 80
summary: In 1976 John Boyd said that new things come from the parts of old things. I built a tool that takes apart real software and puts the parts back together. The hard part was not the putting back.
summary: To find parts that are far apart you need a ruler, and a ruler needs axes. The axes are a choice. Move them and the same 27 ideas change neighbours.
summary: Most of what you can build from distant parts already exists, or has no gain. The best use of the tool is to kill ideas fast, with a reason.
summary: The tool needs a local Claude, so it cannot run in this page. Everything else here runs on the real data from the tool.
---

In 1976 a fighter pilot and strategist wrote an essay about snowmobiles. He did not care about snowmobiles. He cared about how anyone ever makes something new, and he needed a thing that is plainly new, plainly made of old parts, and not much like any of them. A snowmobile will do. Take the skis of a skier, the outboard motor of a boat, the treads of a tank and the handlebars of a bicycle. None of those four things can cross a field of snow with a person on it. Put them together and you can.

The pilot was John Boyd. The essay is called *Destruction and Creation*.[^boyd] It says something that sounds obvious and is not. You cannot make the snowmobile by looking harder at a bicycle. You have to break the bicycle first. You have to be willing to see it as a pile of parts, one of which, the handlebars, is a good answer to a question that has nothing to do with bicycles.

Snowmobile is a tool that does this on purpose, for software. It hunts real tools and programming paradigms, breaks each into parts, and puts parts of distant sources back together as candidates for something new. Then it tries to kill each candidate. This post is about what the tool's data shows, and most of that is about the word *distant*.

## The short version

You might think the putting-together is the clever part. It is the easy part. A language model will happily join any two things you hand it. The hard parts are before and after.

- **Before: what does distant mean?** If two ideas are far apart, you may get more from joining them. But far on what? Distance needs a ruler, a ruler needs axes, and someone has to pick the axes. The tool uses eight. Move one and the neighbours change.
- **After: what is the idea for?** A joined pair of parts is a candidate. Most candidates already exist, or solve no problem that anyone has. I make each candidate answer four lines before it is allowed to live: the problem, the evidence, today's fix, and the gain.
- **Most ideas die.** That is the point. A tool that never kills anything is a tool that makes you feel good. This one buries ideas with a reason and shows you the graveyard.
- **The data is real and small.** Twenty-seven paradigms, eleven real repositories, eight axes, 216 scores, and 73 sourced links from paradigms to the frustrations of 28,251 developers. All of it fits in this page, and every figure below runs on it.

Be careful about what is not measured here. The scores are manual estimates from cited sources. They are good enough to argue with. They are not good enough to publish as findings. I say so again near the end.

## Boyd's parts

Here is the idea in its smallest form. Press Next to take the four parts out of their wholes, and again to put them together.

::figure kind=schematic src=boyd.svg alt="Four boxes in a row at the top: Skis from a ski, Outboard motor from a boat, Tank treads from a tank and Handlebars from a bicycle. Each box has a line in its own colour that runs down and joins a single wider box at the bottom, labelled Snowmobile, a new whole." caption="Boyd's snowmobile. Press Next to show one part at a time, then the new whole. No part belongs to the thing it joins."

Look at what each part had to give up. The skis lose the skier, who gave them their purpose. The motor loses the boat, and with it the water it was built to push against. The treads lose the tank and its gun. The handlebars lose the frame and the wheels. In every case, what you keep is a mechanism, a way of doing one thing, and you drop the story around it.

This is why the method is hard to do by hand. It asks you to be rude to things you know well. Think of a database and you think of tables and queries. To get its parts you have to forget that and ask a different question: what does it do that nothing else does? A database file that survives a power cut. A log you can only add to. A way to ask for a result without saying how to find it. Each of those is a part, and each could go into something that is not a database.

## What snowmobile does

The tool is a loop with four stops. You give it a seed, which can be a pain, a domain, a tool or a paradigm. It does the rest in turn.

::figure kind=schematic src=pipeline.svg alt="Five boxes in a row, joined by lines: Seed, Hunt, Create, Grill and Brief. A dashed line from Create goes down to a box called Graveyard. A dashed line from Grill goes back up and across to Hunt." caption="The snowmobile loop. Seed, hunt, create, grill, brief. A candidate that exists goes to the graveyard. A kill in the grill sends you back to the hunt with the bad part marked."

**Hunt.** Claude searches the web for six real tools and paradigms that relate to your seed. It breaks each into its principal parts, the mechanisms that make it work, and gives every part a link to its source. You can ask for more.

**Create.** Claude joins parts of distant sources into candidates. Each candidate has to name the problem and who has it, give a link that shows the problem is real, name the solution people use today, and name the gain over it on one axis, with a claim that a test could prove false. Then Claude searches for prior art. If the idea exists, or has no real source for its problem, or has no clear gain, it goes to the graveyard with the reason written next to it.

**Grill.** What survives, you settle one decision at a time. Each round shows every open decision whose prerequisites are settled, with the recommended card already picked. One tap answers the round. The first round always asks why the idea beats what people use today.

**Brief.** When no decision is open you get a brief: all the settled decisions in one text, which you can paste into a coding agent.

Everything lives in one SQLite file on your machine. The tool runs your own local `claude` command, so it uses your own sign-in and needs no key. That is also why I cannot put it in this page. A browser cannot run Claude Code. What I can put in this page is the data that the tool built up and the arithmetic it does with that data, and that turns out to be the interesting half.

## What distant means

Here is the problem. If I say a CRDT and a pipelined processor are far apart, you will nod. If I say a CRDT and an actor model are close, you will nod again. But nobody has told you what you are measuring. You are using a ruler in your head, and you have not shown it to me.

A tool cannot use a ruler in its head, so the ruler has to be written down. The tool's Stack mode proposes a set of axes, eight in the data used here. Each axis has two ends, a zero and a ten, and each paradigm gets a score between them. Here are the eight, with the ends as the data file states them.

| Axis | At 0 | At 10 |
|---|---|---|
| Declarative interface | Explicit steps control the result. | A desired result controls the steps. |
| Immutable state | Updates replace state in place. | Updates produce new values and preserve old values. |
| Distributed operation | One local instance performs the work. | Multiple network nodes coordinate the work. |
| Runtime flexibility | The build fixes system behavior. | Runtime commands can change system behavior. |
| Hardware proximity | A managed interface hides machine details. | The system defines or directly controls hardware. |
| Build specialization | One general artifact serves many tasks. | The build selects components for a specific task. |
| Component isolation | Components share a failure boundary. | Independent boundaries contain component failures. |
| Durable state | State exists only during execution. | Durable state is a principal system function. |

Why these eight? Each axis has to run through all four layers: the language, the hardware, the operating system and the software on top. "Where does state live" makes sense for a language and for a chip. "Does the build fix the behaviour" makes sense for a unikernel and for Nix. An axis that only made sense for one layer could not be used to compare across layers, and comparing across layers is the whole idea.

The tool asks Claude to propose the axes once, and you can edit each one. So this is the first place where taste enters the data, and I will keep pointing at it.

There are 27 paradigms in the scored data. For each, the file holds a definition, a scope that says which implementation the score is about, eight scores with a one-line reason and a source for each, and the layer it belongs to. Six are languages, seven are hardware, seven are operating systems, and seven are software. Rather than tell you what the scores look like, here they are. Press an axis name to sort the rows by it.

::figure kind=matrix lazy=true wide=true alt="A table drawn as a grid of 27 rows and 8 columns. Each row is a paradigm, with a coloured dot for its layer. Each column is an axis, named at a slant above the grid. Each cell shows a score from 0 to 10, with a deeper blue for higher scores. Pressing a column name sorts the rows by that axis, highest first." caption="All 216 scores. Press a column name to sort the rows. Hover or focus a cell or a column name to read what that end of the axis means."

Sort by *Durable state* and the top rows are the embedded database, functional package management, the single-level store and the warehouse cluster, all at 10. Sort by *Hardware proximity* and the top is hardware, as it should be. Now sort by *Distributed operation* and look at the zeros. Sixteen of the 27 paradigms score zero. A zero says that the paradigm describes the work of one machine. That says as much about the list as about the paradigms. The seed list comes from the usual taxonomies, and most of them describe a single computer.

The layers differ in the way you expect, and one difference stands out. Averaged over its seven paradigms, software scores 6.3 on *Distributed operation*, against 1.7 for the six languages and 1.7 for the seven chips. Hardware scores 10.0 on *Hardware proximity*, which tells you less about the paradigms than about the axis, because the axis is defined that way.

A word about the number five. Twenty of the 216 scores are a five, about 9%. The file warns that a five can mark uncertain evidence, and that its reason says so. I flag it here because a five is the score a reader is most likely to take at face value and the one to trust least.

[^boyd]: John R. Boyd, *Destruction and Creation*, 3 September 1976. The parts and the wholes (skis, an outboard motor, tank treads and bicycle handlebars) are the ones the snowmobile README lists. This draft was written from that README, not from a fresh read of the essay. Read Boyd, not a summary of him.

## Two ideas, one number

With scores on eight axes, I can say how far apart two paradigms are. The plainest way is the straight-line distance. For two paradigms *a* and *b*, take the gap on each axis, square it, add the eight squares, and take the root.

<p class="formula"><math display="block"><mi>d</mi><mo>(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo>)</mo><mo>=</mo><msqrt><munder><mo>∑</mo><mrow><mi>j</mi><mo>∈</mo><mi>S</mi></mrow></munder><msup><mrow><mo>(</mo><msub><mi>a</mi><mi>j</mi></msub><mo>−</mo><msub><mi>b</mi><mi>j</mi></msub><mo>)</mo></mrow><mn>2</mn></msup></msqrt></math></p>

Here *S* is the set of axes you keep. By default *S* is all eight axes. Here is what happens when you change it.

Pick two paradigms below, and watch where they disagree. Each row is an axis. A dot is a paradigm's score. The bar between the two dots is the gap, and the number on the right is its size.

::figure kind=pair lazy=true alt="Eight rows, one per axis, each a line from 0 to 10 with two dots on it. A blue dot is the first paradigm and an orange dot is the second. A grey bar joins them and a number at the right gives the gap. Two menus above pick the paradigms. A line of text gives the straight-line distance and the widest gap." caption="Two paradigms, axis by axis. The functional language and the actor model start on screen. Their distance is 13.9. Change either menu to compare any two of the 27."

Start with the pair on screen. Functional programming and the actor model are both things programmers talk about as if they were cousins. Both like to avoid shared mutable state. Look at the gaps. They agree on *Immutable state* (8 and 9), on *Runtime flexibility* (10 and 9) and on *Hardware proximity* (1 and 1). They split on *Distributed operation* (0 and 10, a gap of 10) and on *Component isolation* (1 and 9, a gap of 8). They are 13.9 apart. For comparison, functional programming and logic programming are 6.2 apart, and constraint programming 12.3. The closest pair in the whole data is Microservices and the Distributed OS, at 4.2. The farthest is the CRDT and the separation kernel, at 23.7.

Try a pair you feel sure about. If the number disagrees with your feeling, one of two things is wrong: the score or the feeling. The figure cannot tell you which.

## Move an axis, move the neighbours

The distance depends on the set of axes, and that is not a nitpick. Take the functional language again. With all eight axes its nearest neighbour is logic programming, at 6.2, then event sourcing at 11.7 and the embedded database at 12.0. Now leave out *Immutable state*. The nearest is still logic programming, but now at 1.4. Event sourcing falls out of the top three. The concatenative language, which looked far away, is second at 9.3, and the embedded database third at 9.7.

Nothing about the paradigms changed. I changed the ruler.

The embedded database shows it more clearly. With all eight axes its nearest neighbour is logic programming at 10.6, then event sourcing, then functional programming. Drop *Immutable state* and event sourcing jumps to the front, at 7.5, then the functional language at 9.7 and logic programming at 10.6. The functional language and the database were 7 points apart on that one axis, so removing it moves them closer.

That is a lesson from a tool for making ideas. When the tool says "these two are distant, join them", it is quoting its axes. With other axes, it would have quoted those. This is not a bug I can fix. It is the cost of having a ruler.

## A map

Eight numbers per paradigm are hard to look at. I want a picture. The usual way to draw eight-dimensional points on a page is to find the two directions along which they spread out the most, and draw them there. That is principal component analysis.

Here is how it works, in one paragraph. Take the 27 rows of scores and subtract the mean of each column. Make an 8 by 8 table of how each axis varies with each other axis. That table is the covariance matrix.

<p class="formula"><math display="block"><mi>C</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></mfrac><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><mo>(</mo><msub><mi>x</mi><mi>i</mi></msub><mo>−</mo><mi>μ</mi><mo>)</mo><msup><mrow><mo>(</mo><msub><mi>x</mi><mi>i</mi></msub><mo>−</mo><mi>μ</mi><mo>)</mo></mrow><mi>T</mi></msup></math></p>

The direction of the most spread is the vector *v* that solves *Cv* = λ*v* with the largest λ. The second direction is the next one, at a right angle to the first. You draw each paradigm at its position along those two directions. The page does exactly this in your browser, each time you press a box below, in under a hundred lines of code that never ask for memory while they run.[^pca]

How much of the spread do two directions keep? With all eight axes: 41% along the first and 20% along the second, 61% in all. So the map is a squashed picture. About two fifths of what differs between paradigms is not on it. Hold that thought, because it matters when you look at two dots that seem close.

::figure kind=map lazy=true wide=true alt="A scatter plot of 38 dots on a rounded panel. Twenty-seven dots are paradigms, coloured by layer: blue for language, orange for hardware, violet for operating system and green for software. Eleven of them have a grey ring around them for a real repository. Eight tick boxes below the plot switch each axis on or off, and the dots move when you do. Pressing a dot names it and its three nearest neighbours." caption="The 27 paradigms and 11 real repositories on their two main directions. Untick an axis and the map is fitted again, in your browser. Press a dot to see its three nearest neighbours on the axes you keep."

Look at what the first direction is. The text under the map says it for you: left to right, the dots lean to more *Distributed operation* and more *Durable state*, and less *Hardware proximity*. That is close to "hardware versus software". The separation kernel, the pipelined processor and hardware generators sit at the far left. Peer-to-peer, CRDTs and the actor model sit at the far right. The second direction, bottom to top, leans to more *Immutable state* and more *Declarative interface*. Constraint programming is highest, with functional programming and package management next. The warehouse cluster, the single-level store and the multikernel are lowest.

The gray rings are eleven real repositories. SQLite, Redis, Erlang/OTP, Unikraft, Rocket Chip, Nix, seL4, GHCi, Gforth, Automerge and Kubo. Each sits on top of a paradigm. Do not be impressed by that. I scored each repository as one worked example of its paradigm, so the two have the same eight numbers by construction. The rings are there to show that each paradigm is real, not to show that the map found them.

Now play with it. Untick an axis and the map is fitted again, so every dot can move. Untick everything but *Hardware proximity* and *Durable state*, and you are left with a plot of two numbers, which you could have drawn by hand. That is what the other six axes buy you. Turn them off one by one to find the axes that do most of the work. *Durable state* and *Distributed operation* carry the most spread (variances 20.3 and 19.4, against 8.7 for *Component isolation*).

[^pca]: The page fits the two directions to the 27 paradigms only. The 11 repositories are placed on that map afterwards and do not move it. The method is power iteration with 300 steps, then a second pass on the covariance with the first direction removed. Each direction's sign is set so that its largest loading is positive. The arithmetic lives in a file marked as hot, which a check in this repository runs to confirm that it makes no garbage while it works.

## A stack

The tool has a second mode. A *stack* is one paradigm from each of four layers: a language, a hardware design, an operating system and a piece of software. You pick one from each. The question is what the stack asks of you.

The answer is the gap on each axis, between the highest and the lowest of your four picks. A small gap says the parts agree about something. A large gap says there is a seam. Every seam is a place where the stack will fight you, and also, maybe, a place where something interesting could grow.

::figure kind=stack lazy=true alt="Eight rows, one per axis, each a line from 0 to 10 with up to four coloured dots on it. A blue dot is the language, an orange dot the hardware, a violet dot the operating system and a green dot the software. A grey bar spans the dots and a number at the right is the gap. Four menus above pick one paradigm for each layer, and a line of text gives the total of the gaps and the widest one." caption="A stack of four: functional programming, an FPGA, a unikernel and an embedded database. The gaps add up to 52. The widest, 10, is on durable state. Change any menu, or choose none, to try another stack."

The stack on screen is one I made up, and not a good one. A pure functional language, on a chip you program yourself, on a unikernel, with an embedded database on top. The gaps add up to 52. The widest is *Durable state*: the language scores 1 and the database 10. The next widest is *Hardware proximity* and *Build specialization*, at 9 each. A stack like this has a clear complaint to make about each layer, which is a way of saying you have a lot of design left to do.

A stack with small gaps is a stack where the parts agree. That is not automatically good. It is the stack you would build without thinking. It is also the stack with the least to teach you, because nobody learns anything from joining two things that already fit.

A good seam is large enough to be interesting and small enough to bridge. The data cannot tell you where that line is. The tool's job is to try: you pick, it makes ideas from the seams, and then it kills the ones that do not hold.

## What people actually complain about

Distance gives you ideas. It does not tell you which ideas matter. For that the tool uses a source that is not its own: the Stack Overflow Developer Survey for 2024. It asked professional developers what frustrates them most. The tool uses four of the answers. The shares, as the tool has them, are: technical debt, 62.4%; build stack complexity, 32.9%; deployment stack complexity, 32.3%; and tool and system unreliability, 31.5%. The sample is 28,251 respondents, and each could choose more than one.[^survey]

I want to be careful with those numbers. They measure how many developers picked an answer. They do not measure how bad it is, or how much a fix would be worth, and four answers are not all the problems. They are a few real, widely felt ones.

Then the tool links paradigms to them. A link says that a documented source reports a paradigm reducing, or worsening, one of the four frustrations. There are 73 links from 46 of the 49 seed paradigms. Not all are good news. Of the 73, 44 say a paradigm reduces a problem and 29 say it makes one worse. Paradigms in the hardware layer are linked as worsening nine times and reducing three.

::figure kind=problems lazy=true alt="Four horizontal bars, one per frustration: technical debt at 62.4 percent, build stack complexity at 32.9, deployment stack complexity at 32.3 and tool and system unreliability at 31.5. The first bar is picked and drawn in orange. Below the bars two lines of small coloured name tags list the paradigms that reduce the picked problem and those that worsen it." caption="Four frustrations from the 2024 survey, with the paradigms that sourced links say reduce or worsen each. Press a bar to change the problem. Tag colours show the paradigm's layer."

Press through them. Tool and system unreliability has the most links by far, 38 of the 73, and the picture is mixed: 23 say reduce and 15 say worsen. Technical debt has 22 links and the most hopeful tilt, 16 to 6. Build complexity has only 5 links, and 4 of them say a paradigm makes it worse. Deployment complexity has 8, split four and four.

I do not want to oversell this. The links are claims that a model made, each with a source and a reason. Many of the reasons say plainly what they do not show. The README puts it best: *Links are model claims. The problem evidence and gain still need review.* This draft did not check each source against its claim.

The use of the figure is simpler. When you pick a problem as the seed for an idea, the tool already knows how many developers feel it, and which paradigms, in someone's view, make it worse. That is a useful thing to know before I join two parts and say I fixed it.

[^survey]: Stack Overflow Developer Survey 2024, professional developers, most common frustrations. The shares are of all respondents to that question, 28,251 in all. The data file says that they describe this sample, do not measure severity and do not rank all practical problems.

## The four lines

Now the part that matters most, which is a rule and not a feature. Every candidate idea has to fill in four lines.

1. **The problem**, and who has it.
2. **The evidence**: a link that shows the problem is real.
3. **Today's fix**: what people use now.
4. **The gain**: what it does better, on one axis, in a claim that a test could prove false.

It looks like paperwork. It is the most useful thing in the tool. When a language model is asked to join two parts into a new idea, it is happy to do so, and the idea sounds good. Make it fill in the fourth line, and say how you could show that it is wrong, and it will often find that it cannot.

Press Next to read one idea from a real hunt, one line at a time.

::figure kind=schematic src=idea.svg alt="A card with four lines that appear one at a time: the problem, the evidence, today's fix and the gain, followed by what happened to the idea." caption="One idea from a real hunt: a packer that puts a WebAssembly app in one HTML file. Next shows each line in turn, and then what happened to the idea."

This idea came from a hunt whose seed asked for a general tool that turns any program into a single HTML file interface, with a focus on small size. The tool made five candidates. Three went to the graveyard, one is still in the grill, and this one survived.

Read the fourth line again. It names a size, a module, a baseline and a time limit. A reader could run it tomorrow and show that it is wrong. That is the whole point. The first line is a plain pain with a number in it, the second is a link, and the third names what people use today, so the claim has something to beat.

Notice also what the last box says. Survived does not mean true. It means nobody found the thing already built, and the gain is a claim with a test. The size gain is still unmeasured, and the decoder is slower. The tool left both facts on the card.

I want you to notice how little room there is. Each line is a sentence or two. There is no place to hide.

## What kills an idea

An idea can die in three places.

First, **prior art**. Claude searches the web for the idea. If it exists, the idea goes to the graveyard with a link to the thing that already exists. This is the most common death by a wide margin, and it is a good one: it costs a minute, and it saves a week.

Second, **no clear gain**. If the fourth line cannot be written as a claim that a test could prove false, the idea is buried, with that as the reason. "It would be more elegant" is not a gain.

Third, **the grill**. Even a survivor is still a pile of decisions. In the grill, the tool shows each open decision with a recommended answer already picked. A decision can kill the idea: when the answer is "this part cannot work here", the tool marks the part and the next round of ideas leaves it out. You go back to the hunt with a better map of what does not work.

The graveyard is a first-class thing in the tool. You can restore an idea, and you can read why each one died. A reason can go out of date, and then the idea can come back.

## What I would trust

Here is how much weight the pieces will bear.

**The axes.** They are a choice, proposed by Claude and editable, and another day would give another set. What I would trust is the *method*: write the ruler down, give each end a sentence, and keep a reason for each score. What I would not trust is any single distance, to better than a few points.

**The scores.** Manual estimates from sources, with a stated scope: the score is for one cited example of the paradigm, and not for every implementation. Twenty of them are fives. I would trust the large gaps and not the small ones.

**The map.** A faithful picture of about three fifths of the spread of 27 points. Two dots that touch may be far apart in the part that you cannot see. This is why the figure names the two nearest neighbours on the real axes, not on the picture.

**The problem links.** Claims a model made. Useful as a prompt to look. Not evidence.

**The tool.** Killing ideas fast, with a reason, is the feature I would trust. Whether it finds an idea worth building is not something this data can say.

What I would most like to know, and cannot tell from this data, is whether distance helps at all. Boyd says the parts should come from unrelated wholes. I have given you a way to measure *unrelated*. I have not shown that unrelated gives better ideas than related. That is a test one could run, with a set of ideas that survived the four lines and a count of how many came from far parts and how many from near ones. Nobody has run it.

## Data and methods

The scores, axes, definitions and the paradigm and repository lists come from `data/repo-scores.json` in the snowmobile repository at commit bc05041, checked against its sources on 27 October 2026. Each of the 11 repositories is pinned to the revision named in that file. The survey shares and the 73 links come from `src/seeds/practical-problems.json` and `src/seeds/problem-links.json` at the same commit. The 49 paradigm names and their layers come from `src/seeds/start.json`. The four-line figure is hunt 8, idea 36, from `snowmobile-hunts.json`, an export of the snowmobile database on my own computer. The export holds 14 hunts and 70 ideas, and I picked one idea that survived. The description of the tool is its README at that commit. The page reads none of these files at run time. A script turned them into the typed tables the figures use, and a check in this repository confirms that the numbers quoted in this post match what the figures compute.

The two directions of the map are fitted in your browser to the 27 paradigms. They do not use the repositories. Distances are straight-line on the axes you keep, on the raw 0 to 10 scores, with no scaling.

This is not a study. The scores are manual estimates. The axes are a choice. The survey sample is the survey's sample. The text version of this page lists every figure's caption and description.
