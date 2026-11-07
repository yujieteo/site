---
title: Charts choose before you look
date: 2026-11-07
budget_kb: 80
summary: Every chart makes choices before you see a single mark, such as how to bin, what to sum up, which groups to pool.
summary: Three classic datasets let you make those choices yourself and watch what changes.
summary: A finding that survives every reasonable choice is about the data. A finding that flips with one choice is about the choice.
---

Every chart is a small machine. Data goes in one end, a picture comes out the other, and in between sit a few choices that most readers never see. How wide is each bar? Which number stands in for the whole cloud of points? Which groups get added together before anything is drawn?

These choices are not bugs. You cannot draw a chart without them. But they are not neutral either, and the habit I want to argue for is simple: before you trust a picture, move the choices and see what holds still.

Below are three famous datasets, one for each kind of choice. In each figure you make the choice. Some findings will barely move. Others will turn over completely.

## The short version

- **Bins.** A histogram of Old Faithful eruptions shows two humps at almost any bar width. That stability is the evidence. When the bars get very thin, the humps break into noise; when they get very wide, where the bars start decides whether you see one hump or two.
- **Summaries.** Anscombe's four datasets share the same mean, variance, correlation and fitted line to two decimals. Remove one point and one of them goes from a weak trend to a perfect line; remove one point from another and no line fits at all.
- **Groups.** In 1973, Berkeley's six largest departments admitted 45% of the men who applied and 30% of the women. Yet four of the six departments admitted women at a higher rate than men. Both statements are true. Pooling is the choice that makes them disagree.

## Bins: what holds still

Old Faithful is a geyser in Yellowstone. The dataset below is 272 of its eruptions: how long each one lasted, and how long the crowd then waited for the next one.[^faithful] The top panel is a histogram of eruption length. The bottom panel shows every eruption as a dot and does not depend on any choice at all. Thin lines carry the edges of the bins down into it, so you can see where each bar cuts the cloud.

::figure kind=faithful wide=true alt="A histogram of 272 Old Faithful eruption lengths above a scatter plot of each eruption's length against the wait until the next one. The histogram has two humps, near 2 and 4.5 minutes. Two sliders change the bin width and shift where the bins start." caption="Drag the width down to 0.05 minutes and the two humps shatter into about twenty spikes. Drag it up past 1.2 and try the shift: some starts show one hump, some show two. Between 0.3 and 1 minute, every start shows two."

Try the width slider first. At very thin bars the histogram turns into a comb: twenty or so spikes, most of them one or two eruptions tall. Nothing about the geyser changed. The spikes are made by the bars, not by the data, and some come from how the times were written down.[^rounding]

Now go the other way. At a width of 1.2 minutes or more, move the shift slider. For some starting points, the bars blur the two groups into one broad lump. A reader shown only that chart would say Old Faithful has one typical eruption length. They would be wrong, and nothing on the chart would warn them.

In between, from about 0.3 to 1 minute wide, the histogram shows two humps at every shift. That is what a real feature looks like: it survives every reasonable choice. The bottom panel agrees. Eruptions come in two kinds, short ones near 2 minutes and long ones near 4.5, and the wait after a short one averages about 54 minutes while the wait after a long one averages about 80.

The bars are scaled so that their total area stays the same at every width.[^density] If they were plain counts, a wider bar would hold more eruptions and look taller, and the chart would seem to grow as you dragged. Keeping area fixed means that only the shape changes, which is the only thing the width should be allowed to change.

## Summaries: what the numbers hide

In 1973 the statistician Francis Anscombe built four small datasets to make one point: compute the numbers, but draw the picture.[^anscombe] Each set has eleven points. Each has a mean x of 9, a mean y of 7.50, a correlation of 0.82 and a best-fit line of y = 3.00 + 0.50x. A table of those numbers would show four copies of the same thing.

The figure shows them as points. Click a point to remove it from the fit; click again to put it back. The line and the numbers under each panel are computed again from the points you keep.

::figure kind=anscombe wide=true alt="Four scatter plots in a two-by-two grid, labelled I to IV, each with eleven points and the same fitted line, y = 3.00 + 0.50x, with correlation 0.82. Points can be clicked to remove them from the fit." caption="Anscombe's quartet, all four panels on one scale. Remove the high point in III and the correlation jumps to 1.00. Remove the far point in IV and every remaining x is 8, so no line can be fitted. Removing any one point from I barely moves it."

Set I is what the numbers suggest: a loose cloud around a line. You can take out any single point and the correlation stays between 0.75 and 0.89. Set II is a smooth curve. The line is the wrong model, but the numbers cannot tell you that. Set III is a perfect line with one point off it. Take that point away and the correlation goes to 1.00 while the slope falls from 0.50 to 0.35: one point out of eleven was holding up the slope that all four sets share.

Set IV is the strangest. Ten of its points sit on a single x value. The eleventh point, far to the right, creates the whole line on its own. Remove it, and the fit is not weak, it is undefined: there is no slope through a vertical stack.

So the summary is not wrong. It is just a choice to keep five numbers and throw the rest away, and the rest is where the four sets differ.

## Groups: when the totals disagree with the parts

In the fall of 1973, the graduate school at Berkeley looked at its admission numbers and saw what looked like a clear bias against women. In its six largest departments, 45% of men and 30% of women were admitted.[^berkeley] The figure starts with those totals.

::figure kind=berkeley alt="Admission rates for men and women at Berkeley's six largest departments in 1973. Pooled, men are admitted at 44.5% and women at 30.4%. Split by department, women are admitted at a higher rate than men in four of the six departments. Dot area shows the number of applicants." caption="Each dot is one group of applicants; its area is how many applied. Pooled, men lead by 14 points. By department, women lead in A, B, D and F, and trail by 3 to 4 points in C and E."

Now press "By department." The gap does not just shrink. In department A, which admitted most of its applicants, 82% of women got in against 62% of men. Women do better in four of the six departments, and in the two where they do worse, the gap is three or four points.

How can women do better in most of the parts and worse in the total? Look at the sizes of the dots. Most men applied to A and B, which admitted around two thirds of their applicants. Most women applied to C through F, where admission was much harder for everyone. The pooled rate is not a property of the applicants. It is a mix of department rates, weighted by where each group chose to apply.

The next figure makes that mix a slider. The top bar shows how men split their applications across the six departments; the second shows how women did. Darker segments are departments that admitted more of their applicants. As you drag, the women's split moves toward the men's, while each department keeps its own admission rate for women.

::figure kind=mix alt="Two stacked bars show how men and women split their applications across six departments, shaded by each department's admission rate. A slider moves the women's split toward the men's. Below, the pooled admission rate for women rises from 30.4% to 51.6% and passes the men's 44.5%." caption="Same departments, same admission rates for women, a different mix. At their own mix women are admitted at 30.4%. At the men's mix they would be admitted at 51.6%, above the men's 44.5%. The two rates cross about two thirds of the way along."

At the men's mix, the women's pooled rate would be 51.6%, seven points above the men.[^standard] Nothing about any department changed. The whole 14-point gap in the totals, and then some, came from which doors each group knocked on.

This does not settle whether the departments treated women fairly; the original study was careful to say that the choice of department might itself be shaped by bias earlier on. What it settles is narrower and more useful. The pooled chart and the split chart answer different questions, and the choice to pool decided which question got answered.

## What to do with this

None of these choices can be avoided. Every histogram has a width, every report has a summary, every table has a level of grouping. The useful habit is to treat each one as a dial, not a fact:

1. **Move the dial.** Draw the chart at a few bin widths, starts, or groupings. If the story holds, say so. If it does not, the story is about the dial.
2. **Show the marks.** Put the raw points beside or under the summary, as the bottom panel of the first figure does. A scatter of 272 dots costs a reader two seconds and protects them from the bars.
3. **Name the choice.** Say which width, which summary and which grouping you used, and why. A reader who knows the dial exists can ask what happens when it turns.

The findings worth keeping are the ones that hold still while you move everything else. Old Faithful has two kinds of eruption; that held at every reasonable width. Anscombe's sets share a line; that broke the moment you looked. Berkeley's totals showed a gap; the parts showed it came from where people applied. In each case the data was the same the whole time. Only the choices moved.

## Data and methods

All three datasets ship with the R language as `faithful`, `anscombe` and `UCBAdmissions`; I used the copies published by the Rdatasets project. Every number in the text and the figures is computed in your browser from those values by the code that draws the figures. The fits are ordinary least squares. The peak count in the first figure counts runs of rising then falling bars, so a flat top counts once. The text version of this page lists every figure's caption and description.

[^faithful]: W. Härdle, *Smoothing Techniques with Implementation in S*, Springer, 1991, as published in R's `faithful` dataset. A. Azzalini and A. W. Bowman analysed a longer record of the same geyser in *Applied Statistics* 39 (1990), 357–365.
[^rounding]: Many lengths are recorded to the second, such as 3.333 minutes, but some are rounded to a tenth of a minute, such as 1.8 or 3.6. Rounded values pile up and make thin bars spike.
[^density]: Each bar's height is the share of eruptions in it divided by its width in minutes. This is a density: the areas always add up to one.
[^anscombe]: F. J. Anscombe, "Graphs in Statistical Analysis," *The American Statistician* 27, no. 1 (1973): 17–21.
[^berkeley]: P. J. Bickel, E. A. Hammel and J. W. O'Connell, "Sex Bias in Graduate Admissions: Data from Berkeley," *Science* 187 (1975): 398–404. The six departments here are the ones in R's `UCBAdmissions` table; across the whole school, 44% of 8,442 men and 35% of 4,321 women were admitted.
[^standard]: This is called direct standardization: hold each group's rates fixed and swap in a common mix.
