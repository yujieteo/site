#!/usr/bin/env python3
"""Author the action ontology for the convexity-action-engine visualization.

Every number here is author judgement: category priors plus per-action
overrides, on 0-4 ordinal scales (durations in minutes, hours in Singapore local
time). No external dataset was retrieved when this was written; the planned
sources are listed in SOURCES with that status. Running this script writes
raw.json next to it; build.py --verify checks that the committed raw.json
matches this script's output.
"""
import json
import re
import sys
import unicodedata
from pathlib import Path

OUT = Path(__file__).resolve().parent / "raw.json"

FIELDS = ["dur", "setup", "money", "act", "phys", "cog",
          "hea", "soc", "lrn", "joy", "car", "rec", "hom", "fin", "lt",
          "unc", "rev", "decay", "opt", "info", "reg", "intr", "dn", "tail", "nov", "freq", "out", "day", "open",
          "ev", "typ", "best", "evt"]

# Category priors. typ/best are lists of [hour, sd]; best is only set where a
# normative timing claim is being made, with its own evidence grade evt.
CATS = {
 "work": dict(tail=1, label="Work", dur=[30, 90, 180], setup=5, money=0, act=3, phys=0, cog=4, hea=0, soc=0, lrn=1, joy=1, car=4, rec=0, hom=0, fin=2, lt=3,
              unc=2, rev=4, decay=2, opt=3, info=2, reg=2, intr=3, dn=0, nov=1, freq=3, ev=1, typ=[[10, 2], [14.5, 2]],
              goals="work,progress,focus", flags="f", places="home,office,cafe,library",
              comp="take-a-short-break,go-for-a-walk,make-coffee,drink-water", opp="stop-working-for-the-day,rest"),
 "learning": dict(tail=2, label="Learning", dur=[20, 60, 120], setup=5, money=0, act=3, phys=0, cog=4, hea=0, soc=0, lrn=4, joy=2, car=2, rec=0, hom=0, fin=0, lt=4,
              unc=2, rev=4, decay=1, opt=3, info=4, reg=1, intr=2, dn=0, nov=2, freq=1, ev=2, typ=[[20, 3]],
              goals="learning,skill,understanding", flags="f", places="home,library,cafe",
              comp="take-notes,review-flashcards", opp="apply-what-you-know,stop-researching"),
 "exercise": dict(tail=0, label="Exercise", dur=[20, 45, 90], setup=10, money=0, act=3, phys=3, cog=1, hea=4, soc=0, lrn=0, joy=2, car=0, rec=2, hom=0, fin=0, lt=4,
              unc=1, rev=4, decay=1, opt=2, info=1, reg=2, intr=1, dn=1, nov=1, freq=1, ev=3, typ=[[7, 1.5], [18, 2]], best=[[17.5, 2.5]], evt=1,
              goals="fitness,health,stress-reduction,exercise", flags="fs", places="gym,outside,home,park",
              comp="stretch,drink-water,take-a-shower,eat-a-snack", opp="rest,nap"),
 "health": dict(tail=0, label="Health & self-care", dur=[5, 20, 60], setup=0, money=0, act=1, phys=1, cog=1, hea=3, soc=0, lrn=0, joy=1, car=0, rec=2, hom=0, fin=0, lt=3,
              unc=1, rev=4, decay=2, opt=1, info=1, reg=2, intr=1, dn=0, nov=0, freq=2, ev=2, typ=[[8, 2], [21, 2]],
              goals="health,self-care", flags="f", places="",
              comp="drink-water,go-to-bed-early", opp="skip-it-today"),
 "sleep": dict(tail=0, label="Sleep & rest", dur=[10, 30, 90], setup=0, money=0, act=0, phys=0, cog=0, hea=3, soc=0, lrn=0, joy=2, car=0, rec=4, hom=0, fin=0, lt=2,
              unc=1, rev=4, decay=1, opt=1, info=0, reg=1, intr=1, dn=0, nov=0, freq=3, ev=2, typ=[[14, 1.5], [23, 1.5]],
              goals="rest,recovery,sleep", flags="f", places="",
              comp="put-your-phone-away,drink-water", opp="continue-working,drink-coffee"),
 "food": dict(tail=0, label="Food", dur=[15, 30, 60], setup=5, money=1, act=1, phys=0, cog=0, hea=2, soc=1, lrn=0, joy=3, car=0, rec=2, hom=0, fin=0, lt=1,
              unc=1, rev=3, decay=3, opt=1, info=0, reg=1, intr=1, dn=0, nov=1, freq=4, ev=2, typ=[[7.5, 1], [12.5, 1], [19, 1.2]],
              goals="nutrition,energy,food", flags="s", places="home,restaurant",
              comp="take-a-walk-after-eating,do-the-dishes,drink-water", opp="skip-this-meal"),
 "cooking": dict(tail=0, label="Cooking", dur=[20, 45, 120], setup=5, money=1, act=2, phys=1, cog=1, hea=3, soc=1, lrn=1, joy=2, car=0, rec=1, hom=2, fin=2, lt=2,
              unc=1, rev=3, decay=2, opt=1, info=1, reg=1, intr=2, dn=0, nov=1, freq=3, ev=2, typ=[[12, 1], [18.5, 1.2]],
              goals="nutrition,food,saving-money", flags="fs", places="",
              comp="do-the-dishes,go-grocery-shopping", opp="order-takeaway"),
 "relationships": dict(tail=2, label="Relationships", dur=[20, 60, 180], setup=10, money=1, act=2, phys=0, cog=1, hea=1, soc=4, lrn=0, joy=3, car=0, rec=2, hom=0, fin=0, lt=3,
              unc=2, rev=3, decay=2, opt=2, info=1, reg=3, intr=2, dn=0, nov=1, freq=2, ev=3, typ=[[19.5, 2]],
              goals="connection,relationships,belonging", flags="f", places="",
              comp="send-a-text-message,plan-the-next-meetup", opp="spend-time-alone"),
 "communication": dict(tail=1, label="Communication", dur=[5, 15, 45], setup=0, money=0, act=1, phys=0, cog=2, hea=0, soc=1, lrn=0, joy=0, car=2, rec=0, hom=1, fin=0, lt=1,
              unc=1, rev=3, decay=3, opt=1, info=1, reg=1, intr=2, dn=0, nov=0, freq=4, ev=1, typ=[[9.5, 1.5], [16, 2]],
              goals="communication,coordination,admin", flags="f", places="",
              comp="batch-your-messages", opp="turn-off-notifications"),
 "leisure": dict(tail=0, label="Leisure", dur=[20, 60, 180], setup=0, money=0, act=1, phys=0, cog=1, hea=0, soc=0, lrn=1, joy=3, car=0, rec=3, hom=0, fin=0, lt=1,
              unc=1, rev=4, decay=0, opt=1, info=1, reg=0, intr=1, dn=0, nov=1, freq=3, ev=1, typ=[[21, 2]],
              goals="enjoyment,relaxation,leisure", flags="fs", places="home,outside",
              comp="make-tea", opp="do-something-useful"),
 "digital": dict(tail=0, label="Screens & media", dur=[5, 30, 120], setup=0, money=0, act=0, phys=0, cog=1, hea=0, soc=1, lrn=1, joy=2, car=0, rec=1, hom=0, fin=0, lt=0,
              unc=1, rev=4, decay=0, opt=0, info=1, reg=0, intr=1, dn=1, nov=1, freq=4, ev=1, typ=[[21.5, 2.5]],
              goals="entertainment,distraction,news", flags="f", places="",
              comp="set-a-timer", opp="put-your-phone-away,go-for-a-walk"),
 "household": dict(tail=0, label="Household", dur=[10, 30, 90], setup=0, money=0, act=2, phys=2, cog=0, hea=1, soc=0, lrn=0, joy=0, car=0, rec=0, hom=4, fin=0, lt=2,
              unc=0, rev=4, decay=1, opt=1, info=0, reg=1, intr=1, dn=0, nov=0, freq=3, ev=1, typ=[[10.5, 2.5], [19.5, 1.5]],
              goals="home,order,chores", flags="f", places="",
              comp="put-on-music,take-out-the-rubbish", opp="leave-it-for-now"),
 "errands": dict(tail=0, label="Errands", dur=[15, 40, 90], setup=15, money=1, act=2, phys=1, cog=1, hea=0, soc=0, lrn=0, joy=0, car=0, rec=0, hom=3, fin=1, lt=2,
              unc=1, rev=3, decay=2, opt=1, info=0, reg=2, intr=1, dn=0, nov=0, freq=2, ev=1, typ=[[11, 2.5], [17.5, 1.5]],
              goals="errands,chores,admin", flags="", places="",
              comp="batch-your-errands", opp="leave-it-for-now,order-it-online"),
 "purchases": dict(tail=0, label="Purchases", dur=[10, 30, 90], setup=0, money=2, act=1, phys=0, cog=2, hea=0, soc=0, lrn=0, joy=2, car=0, rec=0, hom=1, fin=0, lt=1,
              unc=2, rev=2, decay=1, opt=1, info=2, reg=1, intr=1, dn=1, nov=2, freq=2, ev=1, typ=[[20.5, 2.5], [12.5, 1.5]],
              goals="shopping,purchase,possessions", flags="", places="",
              comp="read-reviews,compare-prices", opp="wait-24-hours-before-buying,save-the-money"),
 "travel": dict(tail=2, label="Travel & outings", dur=[120, 240, 600], setup=30, money=2, act=3, phys=2, cog=1, hea=1, soc=2, lrn=2, joy=4, car=0, rec=2, hom=0, fin=0, lt=2,
              unc=2, rev=2, decay=2, opt=2, info=3, reg=2, intr=2, dn=1, nov=3, freq=1, ev=1, typ=[[10, 2.5]],
              goals="adventure,novelty,enjoyment,travel", flags="s", places="",
              comp="pack-a-bag,check-the-weather", opp="stay-home"),
 "admin": dict(tail=0, label="Admin & money", dur=[10, 30, 90], setup=0, money=0, act=3, phys=0, cog=2, hea=0, soc=0, lrn=0, joy=0, car=1, rec=0, hom=2, fin=3, lt=3,
              unc=1, rev=3, decay=3, opt=2, info=1, reg=3, intr=2, dn=0, nov=0, freq=1, ev=1, typ=[[10.5, 2], [20.5, 1.5]],
              goals="admin,money,security", flags="f", places="",
              comp="set-a-reminder", opp="leave-it-for-now"),
 "creative": dict(tail=2, label="Creative", dur=[20, 60, 150], setup=5, money=0, act=3, phys=0, cog=3, hea=0, soc=0, lrn=3, joy=3, car=1, rec=1, hom=0, fin=0, lt=3,
              unc=2, rev=4, decay=1, opt=2, info=2, reg=2, intr=3, dn=0, nov=3, freq=1, ev=1, typ=[[20.5, 2.5]],
              goals="creativity,expression,skill", flags="fs", places="home,cafe,outside",
              comp="take-a-short-break,put-on-music", opp="consume-instead-of-create"),
 "mind": dict(tail=1, label="Mind & reflection", dur=[5, 15, 45], setup=0, money=0, act=1, phys=0, cog=1, hea=2, soc=0, lrn=1, joy=1, car=0, rec=3, hom=0, fin=0, lt=3,
              unc=1, rev=4, decay=1, opt=2, info=2, reg=1, intr=1, dn=0, nov=1, freq=1, ev=2, typ=[[7.5, 1.5], [22, 1.5]],
              goals="clarity,stress-reduction,reflection", flags="f", places="home,outside",
              comp="drink-water", opp="keep-busy"),
 "avoid": dict(tail=0, label="Avoid", dur=[5, 30, 90], setup=0, money=0, act=1, phys=0, cog=0, hea=0, soc=0, lrn=0, joy=1, car=0, rec=0, hom=0, fin=0, lt=0,
              unc=3, rev=1, decay=0, opt=0, info=0, reg=0, intr=0, dn=2, nov=1, freq=1, ev=1,
              goals="avoid", flags="", places="", comp="", opp=""),
 "inaction": dict(tail=0, label="Inaction", dur=[5, 30, 120], setup=0, money=0, act=0, phys=0, cog=0, hea=0, soc=0, lrn=0, joy=1, car=0, rec=1, hom=0, fin=0, lt=0,
              unc=0, rev=4, decay=0, opt=3, info=0, reg=1, intr=0, dn=0, nov=0, freq=3, ev=1,
              goals="rest,waiting", flags="", places="", comp="", opp=""),
}

# name | aliases (comma) | overrides "k=v" (dur=lo/typ/hi; typ/best=h:sd;h:sd; goals=a,b; comp/opp/subs=ids)
ACTIONS = r"""
@work
Continue working | keep working,carry on working,continue work,work more,push on | intr=4 decay=2
Deep work | focus,focused work,concentrate,heads down,maker time | dur=60/120/240 act=4 car=4 lt=4 intr=4 opt=4 best=10:2 evt=1 ev=1
Continue debugging | debug,debugging,fix the bug,keep debugging,find the bug | dur=20/60/180 unc=3 info=3 reg=2 lrn=2 joy=1 opp=ask-a-colleague-for-help,take-a-short-break subs=write-a-test,rubber-duck-the-problem,take-a-short-break
Write code | coding,program,programming,implement,build the feature | dur=45/90/180 car=4 lrn=2 joy=2
Implement the idea | implement,build it,prototype,act now,just do it | dur=45/90/240 info=4 car=4 nov=2 unc=3 subs=write-a-plan,read-another-paper opp=read-another-paper
Write a plan | plan,planning,make a plan,outline | dur=15/30/60 cog=3 act=2 opt=4 info=2 reg=1
Write a test | unit test,testing,tests | dur=15/30/60 car=3 info=3 unc=1
Rubber-duck the problem | rubber duck,explain the problem,think aloud | dur=5/15/30 act=1 info=3 car=2
Ask a colleague for help | ask for help,ask coworker,get help,pair | dur=10/20/45 soc=2 info=4 act=2 car=3 unc=2
Review a pull request | code review,review pr,pr review | dur=15/30/60 car=3 soc=1 lrn=2 decay=3
Write documentation | docs,document,write docs | dur=30/60/120 act=3 car=2 lt=3 joy=0
Refactor code | refactor,clean up code,tidy code | dur=30/60/180 car=2 lt=3 opt=3 joy=2
Prepare a presentation | slides,deck,make slides,presentation | dur=45/90/180 car=3 decay=3 reg=3
Attend a meeting | meeting,go to meeting,join call,standup | dur=15/45/90 soc=2 act=1 car=2 decay=4 rev=1 cog=2
Skip the meeting | skip meeting,decline meeting,miss the meeting | dur=5/5/10 car=1 reg=2 rev=2 soc=0 unc=2
Plan tomorrow | plan the day,to do list,todo list,prioritise | dur=10/15/30 act=1 cog=2 opt=4 car=2 reg=1 typ=17:1.5
Clear your inbox | inbox zero,process email,triage email | dur=15/30/60 act=2 cog=2 car=2 hom=1 joy=0 decay=2
Write a report | report,write up,writeup | dur=45/90/180 car=4 decay=3
Analyse the data | data analysis,analyze data,crunch numbers,spreadsheet | dur=30/90/180 car=4 info=4 lrn=2
Do the hard task first | eat the frog,hardest task,important task | dur=30/60/120 act=4 car=4 reg=3 lt=4 best=9.5:1.5 evt=1
Do an easy task | quick win,small task,low hanging fruit | dur=5/15/30 act=1 car=2 cog=2 joy=1
Stop working for the day | stop working,finish work,log off,clock out,call it a day | dur=5/5/10 act=1 cog=0 car=0 rec=3 joy=2 hea=1 lt=1 opt=1 reg=1 typ=18:1.5
Apply for a job | job application,apply job,send cv,resume | dur=30/60/120 car=4 unc=4 lt=4 reg=3 info=3 opt=4 nov=2 fin=3
Update your CV | cv,resume,update resume,linkedin profile | dur=30/60/120 car=3 opt=4 decay=1
Negotiate your salary | ask for a raise,raise,salary negotiation | dur=15/30/60 act=4 fin=4 car=3 unc=3 rev=2 reg=3 soc=1
Work on a side project | side project,personal project,hobby project | dur=30/90/180 car=2 lrn=3 joy=3 nov=3 opt=4 lt=3
Mentor someone | mentoring,help a junior,teach colleague | dur=30/45/60 soc=3 car=2 lt=3 joy=2 lrn=1
Network | networking,meet people,professional event,conference | dur=60/120/180 setup=20 soc=3 car=3 opt=4 unc=3 act=4 nov=3
Write a grant | grant,proposal,funding application | dur=60/120/240 car=4 fin=3 unc=4 decay=3 reg=3
Submit the work | submit,ship it,send it off,publish | dur=5/10/30 car=4 rev=1 decay=3 reg=3 info=4 unc=3
Answer support tickets | support,tickets,customer support | dur=20/45/90 car=3 soc=1 decay=3 joy=0
Organise your files | organise files,file management,clean desktop | dur=15/30/60 car=1 hom=2 opt=2 joy=1 cog=1
Take a short break | break,short break,pause,step away,breather | dur=5/10/15 act=0 cog=0 car=0 rec=3 joy=2 hea=1 lt=1 opt=2 reg=0 ev=2 typ=11:2;15.5:2
Make coffee | coffee break,brew coffee,espresso | dur=5/10/15 act=1 cog=0 car=0 rec=1 joy=3 typ=8:1;14:1.5 goals=energy,ritual
Work from a café | cafe work,coffee shop work | dur=60/120/180 setup=20 money=1 nov=2 joy=2 car=3
@learning
Read a paper | paper,research paper,read an article,read a study,read literature | dur=30/60/120 lrn=4 car=3 info=3
Read another paper | another paper,more research,keep reading papers,literature review | dur=30/60/120 lrn=3 car=2 info=2 opt=2 reg=1 subs=write-it-up,implement-the-idea,take-notes,email-the-author,think-without-references opp=implement-the-idea,stop-researching
Write it up | write,writing,draft,write draft,write paper,write the section | dur=45/90/180 car=4 lrn=3 act=4 info=3 lt=4 cog=4
Take notes | notes,note taking,summarise,summarize | dur=10/20/45 lrn=3 act=2 opt=3 info=2
Email the author | email author,contact the author,ask the author,email a researcher,send researcher an email,contact a researcher,researcher,contact someone interesting,reach out to someone | dur=10/15/30 soc=2 info=4 unc=3 opt=3 act=3 nov=3
Stop researching | stop reading,enough research,stop looking | dur=5/5/10 act=1 lrn=0 info=0 car=1 rec=2 opt=1 reg=1
Think without references | think,thinking,think it through,reflect on the problem,whiteboard | dur=15/30/60 act=2 info=3 lrn=3 nov=2 setup=0
Apply what you know | apply,practice,use what you learned | dur=30/60/120 info=4 car=3 lrn=3 act=3
Do mathematics | maths,math,mathematics,proofs,solve problems,problem set | dur=45/90/180 lrn=4 cog=4 car=3 joy=3 act=4 lt=4 best=10:2.5 evt=1 goals=learning,understanding,focus
Study for an exam | study,revise,exam prep,revision | dur=45/90/180 lrn=4 car=3 decay=3 reg=3 act=4
Review flashcards | flashcards,anki,spaced repetition | dur=10/20/40 act=2 lrn=4 ev=3 lt=4 freq=1
Learn a language | language,duolingo,practise language,spanish,japanese,french | dur=15/30/60 lrn=4 nov=2 soc=1 lt=4
Take an online course | online course,mooc,course,coursera,lecture | dur=30/60/120 lrn=4 car=2 act=3
Watch a lecture | lecture,talk,educational video | dur=30/60/90 act=1 cog=3 lrn=3 joy=2
Read a textbook | textbook,read a chapter | dur=30/60/120 lrn=4 act=3
Read a book | book,read,reading,non-fiction | dur=20/45/120 act=1 lrn=3 joy=3 rec=2 cog=2 typ=21.5:1.5
Practise an instrument | practice instrument,piano,guitar,violin,music practice | dur=20/45/90 lrn=4 joy=3 nov=1 lt=4 cog=3
Learn to cook a new dish | new recipe,learn recipe | dur=45/60/120 lrn=3 hea=2 joy=3 nov=3 fin=1
Watch a tutorial | tutorial,how to video | dur=10/20/45 act=1 lrn=3 info=3
Listen to a podcast | podcast,podcasts,audio | dur=15/40/90 act=0 cog=1 lrn=2 joy=2 rec=1
Write in a journal | journal,journaling,diary | dur=10/15/30 act=2 lrn=1 rec=2 hea=2 lt=3 goals=reflection,clarity ev=2
Learn a new tool | new software,learn a tool,learn framework | dur=30/60/120 lrn=4 car=3 opt=4
Research a topic | research,look into,look it up,investigate | dur=20/45/120 lrn=3 info=4 act=2
Teach someone | teach,explain to someone,tutor | dur=30/60/90 soc=3 lrn=3 joy=2 lt=3
Attend a workshop | workshop,class,seminar | dur=60/120/240 setup=20 money=2 soc=2 lrn=4 nov=3
@exercise
Swim | swimming,go swimming,pool,laps,swim laps | dur=30/60/90 setup=20 money=1 rec=3 joy=3 dn=1 hea=4 comp=take-a-shower,stretch,eat-a-snack
Go for a walk | walk,take a walk,walking,stroll,go outside | dur=15/45/90 setup=0 act=1 phys=1 hea=3 rec=3 joy=3 dn=0 ev=3 places=outside,park typ=12.5:1.5;18.5:2
Go for a run | run,running,jog,jogging | dur=20/40/75 setup=5 act=3 phys=4 hea=4 rec=2 dn=2 joy=2
Cycle | cycling,bike,bike ride,ride a bike | dur=30/60/120 setup=10 phys=3 hea=4 rec=3 joy=3 dn=2 nov=2
Go to the gym | gym,work out,workout,exercise,training | dur=45/60/90 setup=20 money=1 phys=3 hea=4 dn=1 joy=2
Strength training | lift,lifting,weights,resistance training,strength | dur=30/45/75 setup=15 phys=4 hea=4 dn=2 ev=3 lt=4
Do mobility work | mobility,stretching routine,foam roll,foam rolling | dur=10/20/30 setup=0 act=1 phys=1 hea=3 rec=3 dn=0 ev=2 places=home
Stretch | stretching,quick stretch | dur=5/10/20 setup=0 act=1 phys=1 hea=2 rec=2 dn=0 ev=2 lt=2 places=home
Do yoga | yoga,yoga class,vinyasa | dur=20/45/75 setup=5 phys=2 hea=3 rec=4 joy=3 dn=1 ev=2
Go hiking | hike,hiking,trail,nature walk | dur=90/180/360 setup=30 phys=3 hea=4 rec=4 joy=4 nov=3 dn=2 places=outside
Play a sport | sport,football,basketball,tennis,badminton,social sport,futsal | dur=45/90/120 setup=20 soc=3 joy=4 dn=3 phys=4 nov=2 goals=fitness,exercise,connection
Row | rowing,rowing machine,erg | dur=20/30/60 setup=10 phys=4 hea=4 dn=1 joy=1
Climb | climbing,bouldering,rock climbing | dur=60/90/150 setup=20 money=2 phys=4 hea=3 joy=4 dn=3 soc=2 nov=3 lrn=2
Do a HIIT workout | hiit,interval training,intervals,tabata | dur=10/20/30 setup=0 phys=4 hea=4 dn=2 act=4 joy=1 places=home,gym
Dance | dancing,dance class,go dancing | dur=30/60/120 phys=3 soc=2 joy=4 rec=3 nov=2
Do bodyweight exercises | pushups,push ups,situps,bodyweight,calisthenics | dur=10/20/30 setup=0 phys=3 hea=3 act=2 places=home,park
Take the stairs | stairs,climb stairs | dur=2/5/10 setup=0 act=1 phys=2 hea=2 joy=0 freq=2 ev=2 places=
Walk to work | walk commute,active commute | dur=20/30/45 setup=0 act=1 phys=2 hea=3 rec=2 car=1 places=
Play with your dog | dog,walk the dog,play with pet | dur=15/30/60 setup=0 act=1 phys=2 joy=4 rec=3 soc=2 hea=2 freq=2 places=outside,home
Martial arts class | martial arts,karate,judo,bjj,boxing,kickboxing | dur=60/75/90 setup=20 money=2 phys=4 dn=3 soc=2 lrn=3 nov=2
Pilates | pilates,pilates class | dur=30/45/60 setup=10 money=2 phys=2 hea=3 rec=2 dn=1
@health
Take your medication | medication,meds,take pills,medicine | dur=1/2/5 act=0 phys=0 hea=4 decay=4 reg=4 ev=3 freq=2 typ=8:1;21:1.5 lt=4 flags=
Drink water | water,hydrate,glass of water,hydration | dur=1/2/5 act=0 hea=2 rec=1 decay=1 reg=0 freq=4 lt=1 flags=
Book a doctor's appointment | doctor,gp,see a doctor,book doctor,clinic | dur=10/15/30 act=3 hea=4 decay=3 reg=4 unc=2 info=4 lt=4 flags=
See a dentist | dentist,dental,teeth cleaning | dur=45/60/90 setup=20 money=2 act=3 hea=3 decay=1 lt=3 flags=
Get a health check-up | health check,check up,screening,blood test | dur=30/60/120 setup=20 money=2 act=3 hea=4 info=4 lt=4 decay=1 ev=2 flags=
Take a shower | shower,wash,bathe,bath | dur=5/10/20 act=1 hea=1 rec=2 joy=2 freq=4 typ=7.5:1;22:1.5 goals=hygiene,self-care,recovery
Brush and floss | floss,brush teeth,dental hygiene | dur=3/5/5 act=1 hea=2 lt=3 freq=3 ev=3 flags= typ=7.5:1;22.5:1
Do skincare | skincare,sunscreen,moisturise | dur=3/5/15 act=1 hea=1 joy=1 lt=2 flags=
Get sunlight | sunlight,go outside,morning light,daylight | dur=5/15/30 act=1 phys=1 hea=2 rec=2 joy=2 ev=2 best=8:1.5 evt=1 typ=12:2 goals=health,sleep,mood
Cut down on alcohol | skip the drink,no alcohol,dont drink | dur=1/1/1 act=2 hea=3 fin=1 joy=0 lt=3 flags= typ=20:2
Have a drink | drink alcohol,beer,wine,cocktail,go for a drink | dur=30/60/120 money=2 hea=0 joy=3 soc=3 dn=2 rec=1 lt=0 typ=20.5:2 flags=s
Go to bed early | early night,sleep early,bed early | dur=420/480/540 act=2 hea=4 rec=4 joy=1 lt=4 ev=3 best=22.5:1 evt=2 typ=23.5:1 opp=stay-up-late
Stay up late | stay up,late night,night owl | dur=60/120/180 act=0 hea=0 rec=0 joy=2 lt=0 reg=2 dn=1 typ=0.5:1 opp=go-to-bed-early
Check your posture | posture,sit up straight,ergonomics | dur=1/2/5 act=0 hea=1 flags=
Do breathing exercises | breathing,breathwork,box breathing,calm down | dur=3/5/15 act=0 hea=2 rec=3 ev=2 goals=stress-reduction,calm,health
Skip it today | skip,skip today,not today | dur=1/1/1 act=0 hea=0 rec=1 reg=2 rev=3 opt=1 lt=0 flags=
Track your sleep | sleep tracking,sleep log | dur=2/5/10 act=1 info=3 hea=1 flags=
Refill your prescription | prescription,pharmacy,refill | dur=10/20/40 setup=15 act=2 hea=3 decay=3 reg=3 flags=
Get a massage | massage,spa | dur=45/60/90 setup=20 money=3 rec=4 joy=4 hea=2 flags=
Get a haircut | haircut,barber,hairdresser | dur=30/45/60 setup=15 money=2 act=2 joy=2 hea=0 hom=1 decay=1 flags=
@sleep
Sleep | go to sleep,bed,go to bed,sleep now | dur=360/450/540 hea=4 rec=4 lt=4 ev=3 best=23:1.2 evt=2 typ=23.2:1 decay=2 reg=1 flags=
Nap | take a nap,power nap,snooze,siesta | dur=10/20/40 rec=4 hea=2 joy=2 ev=2 best=14:1.2 evt=1 typ=14.5:1.5 dn=1
Rest | relax,chill,lie down,take it easy,recover | dur=15/30/60 rec=3 hea=2 joy=2 act=0 goals=rest,recovery,relaxation
Rest in silence | quiet time,sit quietly | dur=10/20/30 rec=3 hea=1 joy=1
Lie in | sleep in,lie-in,stay in bed | dur=30/60/120 rec=3 joy=3 car=0 lt=1 typ=8.5:1
Put your phone away | phone away,no phone,screen free,digital detox | dur=30/60/180 act=2 rec=2 hea=2 lt=2 goals=focus,rest,sleep
Wind down for bed | wind down,bedtime routine,evening routine | dur=15/30/45 act=1 rec=3 hea=3 ev=2 typ=22.5:1 best=22:1 evt=1
@food
Eat dinner | dinner,have dinner,supper,evening meal | dur=20/40/60 hea=3 joy=3 decay=3 typ=19:1.2 best=18.5:1.5 evt=1 soc=2
Eat lunch | lunch,have lunch,midday meal | dur=15/30/60 hea=3 typ=12.5:0.8 best=12.5:1.2 evt=1
Eat breakfast | breakfast,morning meal | dur=10/20/30 hea=3 typ=7.5:1 best=8:1.5 evt=1
Eat a snack | snack,have a snack,something to eat,quick bite | dur=5/10/15 setup=0 hea=1 joy=3 rec=1 decay=2 typ=15.5:2 flags=
Try a new restaurant | new restaurant,try restaurant,eat somewhere new,restaurant | dur=45/75/120 setup=20 money=3 joy=4 nov=4 soc=2 unc=3 info=3 typ=19.5:1.2
Eat out | eat out,go out to eat,dine out | dur=45/60/120 setup=20 money=3 joy=3 soc=2 typ=19.5:1.2
Order takeaway | takeaway,takeout,delivery,order food,grab | dur=10/30/45 setup=0 money=2 act=0 joy=3 hea=1 typ=19.5:1.5 opp=cook-dinner
Eat leftovers | leftovers | dur=10/15/20 setup=0 money=0 fin=2 joy=1 hea=2 act=0
Have a healthy snack | fruit,healthy snack,nuts | dur=3/5/10 setup=0 hea=3 joy=2 flags=
Skip this meal | skip meal,fast,fasting,skip dinner | dur=1/1/1 hea=1 joy=0 rec=0 reg=1 unc=2 flags=
Get a coffee | coffee,buy coffee,latte,go for coffee | dur=10/15/30 setup=10 money=1 joy=3 rec=1 soc=1 typ=9:1.5;14.5:1.5 goals=energy,ritual,treat
Drink coffee | have a coffee,caffeine,drink caffeine | dur=5/10/15 setup=0 money=0 joy=3 rec=1 hea=1 best=10:2 evt=1 typ=8.5:1.5 dn=1 goals=energy,focus
Make tea | tea,cup of tea,herbal tea | dur=5/10/15 setup=0 money=0 joy=2 rec=2 hea=1 flags=
Have dessert | dessert,cake,ice cream,something sweet | dur=5/15/20 money=1 joy=4 hea=0 flags=s
Have brunch | brunch | dur=60/90/120 setup=20 money=3 soc=3 joy=4 typ=11:1
Get bubble tea | bubble tea,boba | dur=10/15/30 setup=10 money=1 joy=3 hea=0 flags=s
Eat at a hawker centre | hawker,hawker centre,food court,kopitiam | dur=20/30/45 setup=10 money=1 joy=3 soc=1 nov=1
Have a picnic | picnic | dur=60/120/180 setup=30 money=1 soc=3 joy=4 nov=2 rec=3 typ=12.5:2
Take a walk after eating | walk after dinner,post meal walk,digestive walk | dur=10/15/30 setup=0 act=1 phys=1 hea=3 rec=2 ev=2 flags=
@cooking
Cook dinner | cook,cooking,make dinner,prepare dinner | dur=30/45/90 typ=18.5:1 opp=order-takeaway
Cook lunch | make lunch,prepare lunch | dur=20/30/45 typ=12:1
Meal prep | meal prep,batch cook,prep meals | dur=60/120/180 act=3 hea=3 fin=3 hom=2 lt=3 opt=3 typ=11:2
Bake | baking,bake bread,bake a cake | dur=45/90/180 joy=3 nov=2 lrn=2 hea=0
Make a smoothie | smoothie,juice | dur=5/10/15 hea=3 joy=2 act=1
Try a new recipe | new recipe,cook something new | dur=45/75/120 nov=4 lrn=3 joy=3 unc=3
Pack a lunch | pack lunch,packed lunch,bento | dur=10/15/20 fin=3 hea=2 typ=7.5:1
@relationships
Call a friend | call friend,phone a friend,ring a friend,catch up with a friend | dur=10/30/60 setup=0 money=0 act=2 soc=4 joy=3 reg=3 ev=3 typ=19.5:2 subs=send-a-text-message,meet-a-friend,call-your-parents
Meet a friend | see a friend,hang out,meet up,catch up | dur=60/120/180 setup=20 money=2 act=3 soc=4 joy=4 rec=3 nov=1
Call your parents | call mom,call mum,call dad,call parents,call home | dur=10/30/60 setup=0 act=2 soc=4 reg=4 lt=4
Visit your family | visit family,visit parents,go home,see family | dur=90/180/300 setup=40 act=3 soc=4 reg=4 joy=3 lt=4
Go on a date | date,date night,romantic dinner | dur=90/150/240 setup=20 money=3 act=3 soc=4 joy=4 unc=3 nov=2 reg=3
Spend time with your partner | quality time,time with partner,partner | dur=30/90/180 setup=0 soc=4 joy=4 rec=3 reg=3 lt=4
Play with your kids | play with children,kids,family time | dur=20/60/120 setup=0 phys=2 soc=4 joy=4 reg=4 lt=4 typ=18:2
Host dinner | dinner party,host friends,have people over | dur=120/180/240 setup=60 money=3 act=4 soc=4 joy=4 hom=1 nov=2 unc=2
Send a thank-you note | thank you,thank someone,gratitude note | dur=5/10/15 setup=0 money=0 act=1 soc=3 joy=2 lt=3 ev=2
Apologise to someone | apologise,apologize,say sorry,make amends | dur=5/15/30 setup=0 money=0 act=4 soc=4 reg=4 unc=3 lt=4 rev=2 rec=1
Plan the next meetup | plan meetup,arrange to meet,organise plans | dur=5/10/20 setup=0 money=0 act=1 soc=3 opt=3
Spend time alone | alone time,solitude,me time,be alone | dur=30/60/120 setup=0 money=0 act=0 soc=0 rec=4 joy=3 lt=2 reg=0 goals=rest,recovery,solitude
Make a new friend | new friend,meet new people,join a club | dur=60/120/180 setup=20 act=4 soc=4 unc=4 nov=4 opt=4 info=3 lt=4
Help a neighbour | help neighbour,help someone,volunteer nearby | dur=15/30/90 setup=5 soc=3 joy=3 lt=3 phys=1
Volunteer | volunteering,charity work,community service | dur=90/180/240 setup=30 act=3 soc=3 joy=3 lt=3 nov=2 ev=2
Write a letter | letter,write to someone,postcard | dur=15/30/45 setup=0 act=2 soc=3 joy=2
Attend a birthday party | birthday,party,go to a party | dur=120/180/240 setup=30 money=2 act=3 soc=4 joy=3 reg=4 decay=4 rev=1
Resolve a conflict | have the difficult conversation,difficult conversation,talk it out | dur=15/30/60 setup=0 act=4 soc=4 unc=4 reg=4 lt=4 rev=2 rec=0 joy=0
Check in on a friend | check in,see how they are | dur=5/10/20 setup=0 act=1 soc=4 reg=3 ev=2
@communication
Reply to email | email,emails,answer email,respond to email,write email | dur=5/20/45 car=3 soc=1
Send a text message | text,message,whatsapp,sms,text someone,dm | dur=2/5/10 act=0 soc=3 joy=1 car=0 decay=2
Reply to messages | reply messages,catch up on messages,chat | dur=5/15/30 act=1 soc=2 car=1
Check Slack | slack,teams,work chat | dur=5/15/30 act=0 car=2 intr=3 reg=0 freq=3 typ=10:2;14:2
Make a phone call | phone call,call,ring | dur=5/10/30 act=3 soc=2 car=2 hom=2 info=2
Schedule an appointment | book appointment,schedule,book a slot | dur=5/10/20 act=2 hom=3 decay=3 opt=2
Batch your messages | batch messages,batch email,process in batches | dur=15/30/45 act=2 car=2 hom=1 ev=1
Turn off notifications | notifications off,do not disturb,dnd,silence phone | dur=1/1/2 act=0 car=2 hea=1 lt=2 opt=2 goals=focus,rest
Write a difficult email | tough email,hard email | dur=15/30/60 act=4 cog=3 car=3 reg=3 unc=3
Post an update online | post,tweet,post on social media,share online | dur=5/15/30 soc=2 joy=1 car=1 rev=2 unc=2
Set a reminder | reminder,remind me,calendar reminder | dur=1/2/3 act=0 hom=2 opt=2 reg=0
@leisure
Watch a film | film,movie,watch a movie,cinema,go to the movies | dur=90/120/150 joy=4 rec=3 soc=1 typ=21:1.5
Watch TV | tv,television,watch a show,binge,netflix,series | dur=30/60/180 joy=3 rec=3 lt=0 typ=21:1.5
Play video games | games,gaming,video games,play games,console | dur=30/90/180 joy=4 rec=2 cog=2 lt=0 dn=1
Play a board game | board game,cards,card game,chess | dur=30/60/120 soc=3 joy=4 cog=2 lrn=1
Read a novel | novel,fiction,read fiction | dur=20/45/120 joy=4 rec=3 lrn=1 cog=2 ev=1 typ=22:1.5
Listen to music | music,listen to an album,playlist | dur=10/30/60 act=0 joy=4 rec=3 cog=0
Put on music | background music,music on | dur=1/1/2 act=0 joy=2 rec=1
Go to a museum | museum,gallery,exhibition,art gallery | dur=90/120/180 setup=30 money=2 act=3 lrn=3 joy=3 nov=3 typ=14:2
Go to a concert | concert,gig,live music | dur=120/180/240 setup=30 money=3 act=3 soc=2 joy=4 nov=3 decay=4 rev=1 typ=20.5:1
Do a puzzle | puzzle,jigsaw,crossword,sudoku | dur=15/30/60 joy=3 cog=2 rec=2 lrn=1
Garden | gardening,water the plants,plants | dur=15/30/90 phys=2 hea=2 joy=3 rec=3 hom=2
Go to the beach | beach,seaside,east coast | dur=90/150/240 setup=30 phys=1 joy=4 rec=4 nov=2 soc=2 typ=16:2
Go to the park | park,sit in the park,green space | dur=30/60/120 setup=15 phys=1 joy=3 rec=4 hea=2 ev=2 typ=17:2
People-watch at a café | cafe,café,sit at a cafe | dur=30/60/90 setup=15 money=1 joy=3 rec=3 nov=2
Go shopping for fun | window shopping,browse shops,mall | dur=60/90/150 setup=20 money=3 joy=2 nov=2 soc=1 fin=0 dn=1
Do something useful | useful,productive,get something done | dur=15/30/60 act=2 joy=1 rec=0 hom=2 car=2 lt=2 goals=progress,order
Consume instead of create | consume,browse,passive | dur=20/40/90 act=0 joy=2 rec=2 lt=0 lrn=1
Go to a bookshop | bookshop,bookstore,library visit | dur=30/60/90 setup=20 money=1 lrn=2 joy=3 nov=2
Watch sport | watch the match,watch football,watch the game | dur=90/120/150 joy=4 soc=2 rec=2 decay=3 typ=20:2
Karaoke | karaoke,ktv,sing | dur=60/120/180 setup=20 money=2 soc=4 joy=4 nov=2 typ=21:1.5
@digital
Watch YouTube | youtube,watch videos,videos,yt | dur=10/30/120 joy=3 rec=1 lrn=1 reg=0 dn=1
Scroll social media | social media,instagram,tiktok,twitter,x,scroll,doomscroll,facebook,reddit | dur=5/20/60 joy=2 rec=0 soc=1 lt=0 reg=0 dn=2 hea=0 ev=1
Read the news | news,headlines,read news | dur=10/20/45 lrn=2 info=2 joy=1 rec=0 typ=8:1.5;20:2
Check your phone | phone,check phone | dur=2/5/15 joy=1 rec=0 intr=2 lt=0
Browse the internet | browse,surf the web,internet | dur=10/30/90 joy=2 lrn=1 nov=1
Play a mobile game | mobile game,phone game | dur=5/15/45 joy=2 rec=1 lt=0 dn=1
Set a timer | timer,time limit,pomodoro | dur=1/1/1 act=0 car=1 lt=1 opt=1 goals=focus,discipline
Clear your downloads | downloads,clean up computer,delete files | dur=10/15/30 hom=2 act=1 joy=1
Back up your files | backup,back up,backups | dur=10/20/60 act=2 fin=2 hom=2 lt=4 decay=1 reg=3 dn=0 opt=3 goals=security,admin
Update your software | software update,update phone,update laptop | dur=10/20/45 act=1 hom=2 lt=2 dn=0
@household
Clean your room | clean room,tidy room,tidy up,declutter room | dur=15/30/60 hom=4 joy=1 rec=1
Do the laundry | laundry,washing,wash clothes | dur=10/20/30 hom=4 decay=2
Fold the laundry | fold clothes,put clothes away | dur=10/15/30 hom=3 phys=1
Do the dishes | dishes,wash up,washing up,dishwasher | dur=10/15/30 hom=4 decay=2
Vacuum | vacuum,hoover,vacuuming | dur=15/20/45 hom=4 phys=2
Mop the floor | mop,mopping | dur=15/30/45 hom=4 phys=2
Clean the bathroom | bathroom,toilet,clean toilet | dur=20/30/60 hom=4 act=3 joy=0
Clean the kitchen | kitchen,wipe counters | dur=15/30/60 hom=4
Take out the rubbish | trash,garbage,rubbish,bins | dur=2/5/10 hom=3 decay=3 act=1
Change the bed sheets | bedsheets,sheets,change sheets | dur=10/15/20 hom=3 hea=1 joy=1
Declutter | declutter,get rid of stuff,marie kondo,donate stuff | dur=30/60/180 hom=4 rec=1 joy=1 lt=3 opt=2
Fix something broken | fix,repair,diy,fix it | dur=15/45/120 act=3 hom=4 lrn=2 fin=2 unc=2 cog=2
Water the plants | plants,watering | dur=2/5/10 hom=2 joy=1 act=0
Leave it for now | leave it,later,not now,ignore it | dur=1/1/1 act=0 hom=0 phys=0 rec=1 reg=1 decay=0 opt=2 goals=waiting
Iron clothes | ironing,iron | dur=10/20/40 hom=3
Organise a cupboard | organise,organize,cupboard,wardrobe | dur=20/45/90 hom=4 opt=1
Clean the fridge | fridge | dur=15/20/40 hom=3 hea=1
Deep clean the house | spring clean,deep clean | dur=120/180/300 act=4 phys=3 hom=4 lt=2
Make your bed | make bed | dur=2/3/5 act=1 hom=2 joy=1 ev=0
Feed the pet | feed cat,feed dog,pet food | dur=2/5/10 hom=2 decay=4 reg=4 soc=1
@errands
Go grocery shopping | groceries,grocery,supermarket,buy food,shopping,buy groceries,grocery shopping,pick up groceries,go to the supermarket | dur=20/40/75 money=2 hom=4 hea=2 fin=1
Go to the post office | post office,send a parcel,mail a package | dur=15/30/45 hom=2 decay=2
Go to the bank | bank,branch,atm | dur=15/30/60 hom=2 fin=2
Pick up a parcel | parcel,collect package,pickup | dur=10/15/30 hom=3 decay=3
Return an item | return,refund,send back | dur=10/20/45 fin=3 hom=2 decay=3 reg=3
Get the car serviced | car service,mechanic,service car | dur=60/120/240 money=3 hom=2 dn=0 decay=1 lt=3
Fill up petrol | petrol,gas,fuel,refuel | dur=10/15/20 money=3 hom=2 decay=3 flags=
Batch your errands | batch errands,combine errands,errand run | dur=45/90/120 hom=4 act=3 fin=1 ev=1
Order it online | order online,delivery instead,online order | dur=5/10/20 setup=0 money=2 act=1 hom=3 joy=1
Drop off dry cleaning | dry cleaning,tailor | dur=10/20/30 hom=2
Buy a gift | gift,present,buy present | dur=20/45/90 money=2 soc=3 joy=2 decay=3 reg=3 unc=2
Renew your passport | passport,renew id,id card | dur=20/45/90 act=3 hom=3 decay=2 reg=4 opt=4 lt=3
@purchases
Buy this | buy it,purchase,get it,checkout,add to cart | dur=5/10/20 money=2 joy=3 rev=2 unc=2 reg=1
Buy headphones | headphones,earphones,earbuds,airpods | dur=15/30/60 money=3 joy=3 lt=2 rev=3
Buy a laptop | laptop,new computer,macbook | dur=60/120/240 money=4 car=2 joy=3 lt=3 rev=2 unc=2 info=3
Buy a new phone | phone upgrade,new phone,iphone | dur=30/60/120 money=4 joy=3 lt=1 rev=2
Buy clothes | clothes,shirt,shoes,new outfit,trainers | dur=20/45/90 money=2 joy=3 rev=3
Buy a book | book purchase,order a book,kindle book | dur=5/10/20 money=1 lrn=3 joy=3 lt=2 rev=3 reg=0
Buy a gadget | gadget,tech,smartwatch,device | dur=20/40/90 money=3 joy=3 lt=1 rev=2 nov=3
Buy furniture | furniture,desk,chair,sofa,bed frame | dur=60/120/240 money=4 hom=3 joy=2 lt=3 rev=1
Buy a bike | bicycle,new bike | dur=60/120/240 money=4 hea=3 joy=3 lt=3 opt=2
Buy running shoes | running shoes,sneakers | dur=20/45/90 money=3 hea=2 joy=2 lt=2
Subscribe to a service | subscription,subscribe,netflix subscription,streaming | dur=5/10/15 money=2 joy=2 rev=3 reg=0 dn=2
Cancel a subscription | unsubscribe,cancel,cancel subscription | dur=5/10/20 money=0 act=2 fin=3 hom=2 joy=0 reg=1 rev=3 lt=2 goals=saving-money,admin
Wait 24 hours before buying | wait,sleep on it,wait before buying,cooling off | dur=1/1/1 money=0 act=1 joy=0 fin=2 info=3 opt=4 rev=4 reg=1 unc=0 goals=saving-money,deliberation
Save the money | save,dont buy,don't buy,save money,skip the purchase | dur=1/1/1 money=0 act=1 joy=0 fin=4 opt=4 rev=4 lt=3 reg=1 goals=saving-money,security
Read reviews | reviews,read reviews,research purchase | dur=10/20/45 money=0 info=4 joy=1 cog=2 unc=0 rev=4
Compare prices | price compare,shop around,cheaper | dur=10/20/45 money=0 fin=2 info=3 joy=0 rev=4
Buy it second-hand | second hand,used,refurbished,carousell,ebay | dur=20/45/90 money=1 fin=3 unc=3 nov=2 rev=2
Borrow it instead | borrow,rent it,rent instead | dur=10/20/30 money=0 soc=2 fin=3 rev=4 opt=3 joy=1
Buy a plant | plant,houseplant | dur=15/30/60 money=1 joy=3 hom=2 rev=2
Buy a lottery ticket | lottery,toto,4d,gamble | dur=5/10/15 money=1 fin=0 joy=2 unc=4 dn=2 reg=0
@travel
Go on a day trip | day trip,excursion,trip | dur=240/480/720 setup=45 money=2 joy=4 nov=4 rec=3 soc=2
Book a holiday | holiday,vacation,book a trip,plan a trip | dur=30/60/120 setup=0 money=4 act=3 joy=4 nov=3 opt=2 rec=3 unc=2 lt=2 rev=2 phys=0
Take a weekend trip | weekend away,weekend trip,staycation | dur=600/1440/2880 setup=60 money=4 joy=4 rec=4 nov=3 soc=2
Visit a new neighbourhood | explore,new neighbourhood,explore the city,wander | dur=60/120/180 setup=20 money=1 joy=3 nov=4 phys=2 info=2
Go to the airport | airport,catch a flight,fly | dur=60/120/180 setup=30 money=1 act=3 joy=0 decay=4 rev=0 reg=4
Pack a bag | pack,packing,pack for trip | dur=15/30/60 setup=0 money=0 act=2 phys=1 joy=0 hom=2 decay=3
Check the weather | weather,forecast | dur=1/2/3 setup=0 money=0 act=0 joy=0 info=3 phys=0 rec=0 nov=0 flags=
Stay home | stay in,stay at home,dont go out,don't go | dur=30/120/240 setup=0 money=0 act=0 phys=0 joy=2 rec=3 nov=0 soc=0 rev=4 unc=0 info=0 goals=rest,saving-money
Take public transport | mrt,bus,train,public transport | dur=15/30/60 setup=5 money=1 act=1 phys=1 joy=1 nov=1 fin=1 flags=
Take a taxi | taxi,grab,uber,cab | dur=10/20/40 setup=5 money=2 act=0 phys=0 joy=2 flags=
Go camping | camping,camp | dur=720/1440/2880 setup=60 money=2 phys=3 joy=4 nov=4 dn=2 rec=3
Go to a theme park | theme park,universal studios,amusement park | dur=300/420/600 setup=45 money=4 joy=4 nov=3 soc=3
Go to the zoo | zoo,aquarium,bird park | dur=120/180/300 setup=40 money=3 joy=4 lrn=2 soc=3
@admin
Pay your bills | pay bills,bills,pay bill,utilities | dur=5/15/30 fin=3 decay=4 reg=4 hom=3
Do your taxes | taxes,tax return,file taxes,iras | dur=30/90/180 act=4 fin=4 decay=3 reg=4 cog=3
Make a budget | budget,budgeting,track spending,review finances | dur=20/45/90 fin=4 info=4 lt=4 opt=3 cog=3
Check your bank account | bank balance,check account,balance | dur=2/5/10 act=1 fin=2 info=3
Invest | investing,buy stocks,index fund,etf | dur=15/30/60 fin=4 lt=4 unc=3 dn=2 rev=2 info=2
Review your insurance | insurance,insurance policy | dur=30/45/90 fin=3 lt=3 reg=2 decay=1
Write a will | will,estate planning | dur=60/120/240 act=4 fin=3 lt=4 reg=4 soc=2 decay=1
Sort your paperwork | paperwork,documents,filing,letters | dur=20/45/90 hom=3 fin=2
Change your password | password,passwords,password manager,2fa | dur=5/15/30 hom=2 lt=3 dn=0 reg=2 goals=security,admin
Fill in a form | form,application form,government form | dur=10/20/45 act=3 hom=3 decay=3
Respond to a letter | reply letter,official letter | dur=10/20/45 act=3 decay=3 reg=3
Set up a savings plan | savings plan,auto save,standing order | dur=15/30/60 fin=4 lt=4 opt=3
Check your credit card statement | credit card,statement,check transactions | dur=5/10/20 fin=3 info=3
@creative
Write something | writing,creative writing,write a story,blog,write a post | dur=30/60/120 lrn=2 joy=3 car=2 lt=3
Draw | drawing,sketch,sketching,doodle | dur=20/45/90 joy=4 lrn=3 rec=2
Paint | painting,watercolour,paint | dur=45/90/180 setup=15 joy=4 lrn=3 rec=2
Make music | compose,make a song,produce music,songwriting | dur=45/90/180 joy=4 lrn=3 nov=3
Take photos | photography,photo walk,take pictures | dur=30/60/120 setup=10 phys=1 joy=3 lrn=2 nov=3 places=outside
Knit or sew | knit,knitting,sew,sewing,crochet | dur=30/60/120 joy=3 rec=3 lrn=2 hom=1
Build something | make something,craft,crafts,woodwork,lego | dur=45/90/180 joy=4 lrn=3 hom=1 phys=1
Edit a video | video editing,edit video,youtube video | dur=60/120/240 lrn=3 car=2 joy=2
Write poetry | poem,poetry | dur=15/30/60 joy=3 rec=2 lrn=2
Brainstorm ideas | brainstorm,ideate,ideas,mind map | dur=10/20/45 opt=4 info=3 nov=3 car=2 joy=3
@mind
Meditate | meditation,mindfulness,sit,headspace,calm | dur=5/15/30 hea=3 rec=4 ev=2 lt=3
Reflect on your week | weekly review,reflect,review the week | dur=15/30/60 lrn=2 car=2 opt=3 info=3 typ=17:2
Set goals | goals,goal setting,plan the year | dur=20/45/90 opt=4 lt=4 car=2 info=2
Make a decision | decide,decision,choose,make up your mind | dur=5/20/60 act=3 cog=3 opt=1 info=2 reg=3 unc=3 rev=2 decay=3
Pray | prayer,pray | dur=5/15/30 rec=3 hea=1 soc=1
Practise gratitude | gratitude,three good things | dur=3/5/10 hea=2 rec=2 joy=2 ev=2
Sit with your feelings | feelings,process emotions,cry,feel it | dur=10/20/45 rec=3 hea=2 act=2
Keep busy | stay busy,distract yourself | dur=30/60/120 act=1 rec=0 hom=1 car=1 joy=1 lt=0
Daydream | daydream,mind wander,stare out the window | dur=5/10/30 act=0 rec=3 joy=2 nov=2 info=1
@inaction
Do nothing | nothing,do nothing at all,idle,just sit,wait,not do anything,inaction | dur=5/30/120
"""

# Additional bases generated from purchase objects, sports and study subjects so
# the base set covers ordinary vocabulary. Each gets category priors plus the
# overrides listed here.
PURCHASE_OBJECTS = [
    ("a keyboard", 3, "keyboard,mechanical keyboard"), ("a monitor", 3, "monitor,screen,display"),
    ("a tablet", 4, "ipad,tablet"), ("a camera", 4, "camera"), ("a watch", 3, "watch"),
    ("a backpack", 2, "bag,backpack"), ("a coffee machine", 3, "coffee machine,espresso machine"),
    ("a mattress", 4, "mattress"), ("a vacuum cleaner", 3, "vacuum cleaner,robot vacuum"),
    ("an air purifier", 3, "air purifier"), ("a desk lamp", 2, "lamp"), ("sunglasses", 2, "sunglasses"),
    ("a water bottle", 1, "water bottle,bottle"), ("a speaker", 3, "speaker,bluetooth speaker"),
    ("a game", 2, "video game,new game"), ("concert tickets", 3, "tickets,concert tickets"),
    ("a gym membership", 3, "gym membership,membership"), ("a course", 3, "buy a course,paid course"),
    ("skincare products", 2, "skincare products,moisturiser"), ("a gift card", 2, "gift card,voucher"),
    ("kitchen knives", 2, "knife,knives"), ("a blender", 2, "blender"), ("an umbrella", 1, "umbrella"),
    ("a suitcase", 3, "suitcase,luggage"), ("a phone case", 1, "phone case,case"), ("a chair", 3, "office chair"),
    ("a car", 4, "car,new car"), ("a TV", 4, "television set,tv set"), ("a console", 4, "ps5,switch,xbox"),
    ("a printer", 3, "printer"), ("board games", 2, "buy board game"), ("plants for the balcony", 1, "balcony plants"),
    ("new bedding", 2, "bedding,pillow,duvet"), ("a fan", 2, "fan,aircon"), ("a rice cooker", 2, "rice cooker"),
]
SPORTS = ["badminton", "tennis", "squash", "table tennis", "football", "basketball", "volleyball", "golf",
          "frisbee", "pickleball", "netball", "hockey", "cricket", "rugby", "futsal"]
SUBJECTS = ["statistics", "programming", "history", "economics", "physics", "chemistry", "biology", "philosophy",
            "psychology", "design", "writing", "machine learning", "finance", "law", "music theory", "art history",
            "a new language", "linear algebra", "calculus", "probability", "accounting", "marketing", "cooking theory",
            "public speaking", "negotiation", "nutrition", "first aid", "photography", "geography", "astronomy"]
HOBBIES = [("Go birdwatching", "birdwatching,birds", "leisure", "nov=3 phys=1 lrn=2 setup=20"),
           ("Go fishing", "fishing", "leisure", "setup=30 joy=3 rec=4 nov=2"),
           ("Play chess online", "online chess,chess.com,lichess", "leisure", "cog=3 joy=3 lrn=2"),
           ("Visit a library", "library", "learning", "setup=20 lrn=3 joy=2 nov=1"),
           ("Go to a farmers' market", "farmers market,market,wet market", "errands", "joy=3 nov=2 hea=2 soc=1"),
           ("Go ice skating", "ice skating,skating,rollerblading", "exercise", "joy=4 dn=3 nov=3 money=2"),
           ("Go kayaking", "kayak,kayaking,paddle,paddleboard", "exercise", "joy=4 nov=3 money=2 setup=40 dn=2"),
           ("Go to a sauna", "sauna,steam room", "health", "rec=4 joy=3 money=2 setup=20 dur=20/40/60"),
           ("Go to a café alone", "solo cafe", "leisure", "setup=15 money=1 rec=3 joy=3"),
           ("Visit a friend in hospital", "hospital visit", "relationships", "reg=4 soc=4 joy=1 act=3"),
           ("Attend a religious service", "church,temple,mosque,service", "mind", "soc=3 rec=3 setup=20 dur=45/60/120"),
           ("Go to a comedy show", "comedy,stand up", "leisure", "setup=30 money=2 joy=4 soc=2 nov=3 decay=3"),
           ("Go to the theatre", "theatre,theater,play,musical", "leisure", "setup=30 money=3 joy=4 nov=3 dur=120/150/180 decay=4"),
           ("Have a bath", "bath,bubble bath", "health", "rec=4 joy=3 dur=20/30/45"),
           ("Sit in the sun", "sunbathe,sun", "leisure", "rec=3 joy=3 hea=1"),
           ("Go to a hackathon", "hackathon", "work", "soc=3 lrn=4 nov=4 dur=240/480/720 setup=30"),
           ("Tidy your desk", "desk,clean desk,tidy desk", "household", "dur=5/10/15 hom=3 car=1"),
           ("Go for a swim in the sea", "sea swim,open water,ocean swim", "exercise", "dn=3 nov=3 joy=4 setup=40"),
           ("Walk in nature", "nature,forest,forest bathing,green", "exercise", "phys=1 act=1 rec=4 hea=3 setup=20 ev=2"),
           ("Go for a drive", "drive,road trip,go driving", "travel", "dur=45/90/180 setup=5 money=2 joy=3 rec=2 dn=2 phys=0"),
           ]


# Convexity overrides: right tail (tail), ordinary downside (dn), outdoor (out),
# daylight-dependent (day), typical opening hours in Singapore (open=h1-h2, may pass 24).
EXTRA = """
swim places=
go-to-the-gym places=
climb places=
dance places=home
martial-arts-class places=gym
pilates places=gym,home
walk-to-work places=
take-the-stairs places=
do-a-hiit-workout places=home,gym
attend-a-workshop places=
email-the-author places=
stop-researching places=
teach-someone places=
skip-the-meeting places=
stop-working-for-the-day places=
negotiate-your-salary places=
network places=
take-a-short-break places=
make-coffee places=
ask-a-colleague-for-help places=
eat-a-snack places=
have-a-healthy-snack places=
make-tea places=
drink-coffee places=
take-a-walk-after-eating places=
order-takeaway places=
eat-leftovers places=
skip-this-meal places=
check-the-weather flags=
implement-the-idea tail=3
apply-for-a-job tail=4 dn=1
negotiate-your-salary tail=3 dn=2
work-on-a-side-project tail=3
network tail=4 dn=1
write-a-grant tail=3 dn=1
submit-the-work tail=3 dn=1
ask-a-colleague-for-help tail=2
email-the-author tail=4
make-a-new-friend tail=4 dn=1
write-it-up tail=3
brainstorm-ideas tail=3
post-an-update-online tail=2 dn=2
go-on-a-date tail=3 dn=1
host-dinner tail=2
attend-a-workshop tail=3
go-to-a-hackathon tail=4
invest tail=3 dn=3
buy-a-lottery-ticket tail=4 dn=1 car=0 fin=0
visit-a-new-neighbourhood tail=2 out=1 day=1
try-a-new-restaurant tail=1 open=11-22
deep-work tail=2
do-mathematics tail=3
read-a-paper tail=2
read-another-paper tail=1
write-something tail=2
teach-someone tail=2
volunteer tail=2
mentor-someone tail=2
learn-a-language tail=2
learn-a-new-tool tail=2
make-music tail=2
edit-a-video tail=2
update-your-cv tail=2
resolve-a-conflict dn=2 tail=2
apologise-to-someone dn=1 tail=2
skip-the-meeting dn=2
write-a-difficult-email dn=2
have-a-drink dn=2
stay-up-late dn=2
scroll-social-media dn=1
buy-a-car dn=2
go-for-a-walk out=1
go-for-a-run out=1
cycle out=1
go-hiking out=1 day=1
walk-in-nature out=1 day=1
walk-to-work out=1
take-a-walk-after-eating out=1 money=0 decay=1
play-with-your-dog out=1
get-sunlight out=1 day=1
go-to-the-beach out=1 day=1
go-to-the-park out=1
have-a-picnic out=1 day=1
take-photos out=1 day=1
go-birdwatching out=1 day=1
go-fishing out=1 day=1
go-kayaking out=1 day=1 open=8-18.5
go-for-a-swim-in-the-sea out=1 day=1
go-camping out=1
garden out=1
swim out=1 open=8-21.5
go-to-the-gym open=6-23
climb open=10-22.5
go-grocery-shopping open=7-23
go-to-the-post-office open=9-18
go-to-the-bank open=9.5-16.5
go-to-a-museum open=10-19
eat-out open=11-22
eat-at-a-hawker-centre open=7-22
get-a-coffee open=7.5-22
have-brunch open=9-15
get-bubble-tea open=10-22
get-a-haircut open=10-21
see-a-dentist open=9-18
get-a-health-check-up open=8-17
get-a-massage open=10-22
refill-your-prescription open=9-21
go-to-a-bookshop open=10-21.5
go-shopping-for-fun open=10-22
go-to-a-farmers-market open=6-12
get-the-car-serviced open=8.5-17.5
drop-off-dry-cleaning open=9-20
pick-up-a-parcel open=8-22
return-an-item open=10-22
go-to-a-sauna open=10-22
go-to-the-theatre open=19-23
go-to-a-comedy-show open=19.5-23.5
karaoke open=12-26
go-to-the-zoo open=8.5-18
go-to-a-theme-park open=10-19
go-to-a-concert open=19-23.5
people-watch-at-a-cafe open=8-22
work-from-a-cafe open=8-22
go-to-a-cafe-alone open=8-22
visit-a-library open=10-21
play-badminton open=7-23
play-tennis open=7-22 out=1
play-football open=7-23 out=1
play-golf open=7-19 out=1 day=1
play-frisbee out=1
play-pickleball open=7-23
go-ice-skating open=10-22
"""

# Extreme-downside screen inputs for ordinary actions: kind | probability label
# (never a number) | severity 0-4 | irreversibility 0-4 | repeated exposure | trigger.
RUIN = {
 "swim": ("drowning", "very low (supervised pool)", 4, 4, 1, "swimming alone, open water, alcohol, exhaustion, lightning"),
 "go-for-a-swim-in-the-sea": ("drowning", "low; unknown for a given spot", 4, 4, 1, "currents, swimming alone, storms"),
 "go-kayaking": ("drowning or capsizing", "low", 4, 4, 1, "no buoyancy aid, squalls"),
 "cycle": ("road traffic injury", "low", 4, 3, 1, "riding on roads, darkness, no helmet"),
 "go-for-a-drive": ("road traffic injury", "low", 4, 4, 1, "fatigue, alcohol, phone use"),
 "take-a-taxi": ("road traffic injury", "very low", 4, 4, 1, "none specific to you"),
 "go-for-a-run": ("heat illness", "very low; higher in midday heat", 3, 3, 1, "midday heat and humidity"),
 "go-hiking": ("injury, heat illness, getting lost", "low", 3, 3, 1, "hiking alone, heat, no water"),
 "climb": ("fall injury", "low", 3, 3, 1, "belay errors, fatigue"),
 "martial-arts-class": ("injury", "low", 3, 2, 1, "hard sparring"),
 "play-rugby": ("injury", "low", 3, 3, 1, "tackles"),
 "have-a-drink": ("accident or health harm", "low per occasion; repeated", 3, 3, 1, "quantity, then driving or swimming"),
 "invest": ("financial loss", "unknown", 3, 2, 0, "leverage, concentration"),
 "go-camping": ("injury or weather exposure", "low", 3, 3, 0, "storms, remote sites"),
 "go-ice-skating": ("fall injury", "low", 3, 2, 1, "falls"),
 "post-an-update-online": ("reputational harm", "low", 2, 3, 1, "tone, permanence"),
 "submit-the-work": ("reputational harm", "very low", 2, 2, 0, "errors in public work"),
}

# Related actions to avoid: name | aliases | related ids | ruin tuple | why | safer | hours (when it is most relevant) | facts
AVOID = [
 ("Swim alone in open water", "swim alone,sea swim alone,open water alone", "swim,go-for-a-swim-in-the-sea",
  ("drowning", "unknown; materially higher than a supervised pool", 4, 4, 1, "no one to raise the alarm, currents"),
  "Same goal as swimming, but with no one to help if something goes wrong.", "swim", "6-20", "joy=3 hea=3 tail=0 dn=1"),
 ("Swim after drinking", "drink and swim,swim drunk", "swim,have-a-drink",
  ("drowning", "unknown; alcohol raises it", 4, 4, 1, "alcohol impairs judgement and coordination"),
  "Two ordinary actions whose combination creates a catastrophic tail.", "rest", "18-26", "joy=3 hea=0 tail=0 dn=2"),
 ("Drive after drinking", "drink driving,drunk driving,drive home after drinks", "have-a-drink,go-for-a-drive",
  ("road death, legal", "low per trip; repeated exposure", 4, 4, 1, "any alcohol before driving"),
  "Small per-trip probability, repeated across trips, with irreversible and legal consequences.", "take-a-taxi", "19-27", "joy=1 tail=0 dn=3"),
 ("Text while driving", "phone while driving,texting and driving", "go-for-a-drive,send-a-text-message",
  ("road death", "low per trip; repeated exposure", 4, 4, 1, "eyes off the road"),
  "The message rarely matters; the tail is permanent.", "take-public-transport", "0-24", "joy=1 soc=1 tail=0 dn=2"),
 ("Drive while exhausted", "drowsy driving,drive tired", "go-for-a-drive,stay-up-late",
  ("road death", "low per trip; higher when sleep-deprived", 4, 4, 1, "micro-sleeps"),
  "Fatigue is invisible to the driver until the micro-sleep.", "take-a-taxi", "21-30", "tail=0 dn=2"),
 ("Cycle on roads at night without lights", "cycle at night,no bike lights", "cycle",
  ("road traffic injury", "unknown; higher than daytime with lights", 4, 4, 1, "drivers cannot see you"),
  "Same exercise benefit is available with lights or on a park connector.", "cycle", "19-31", "hea=3 joy=2 tail=0 dn=2"),
 ("Run hard in the midday heat", "run at noon,run in the heat,midday run", "go-for-a-run,go-hiking",
  ("heat stroke", "low; higher in tropical midday heat", 4, 3, 1, "high heat and humidity, dehydration"),
  "In Singapore the same run in the early morning or evening keeps the benefit and drops most of the heat tail.", "go-for-a-run", "11-16", "hea=3 tail=0 dn=2"),
 ("Hike alone without telling anyone", "solo hike,hike alone", "go-hiking,walk-in-nature",
  ("injury with no rescue", "low; unknown", 4, 3, 1, "a fall with no one knowing where you are"),
  "Telling someone your route costs a minute and caps the tail.", "walk-in-nature", "6-19", "hea=3 joy=3 tail=0 dn=1"),
 ("Swim in the sea during a thunderstorm", "swim in storm,beach in lightning", "go-for-a-swim-in-the-sea,go-to-the-beach,swim",
  ("lightning strike, drowning", "low; Singapore has frequent lightning", 4, 4, 1, "storms, which in Singapore are often afternoon"),
  "Outdoor water during lightning combines two catastrophic tails.", "stay-home", "13-19", "joy=2 tail=0 dn=2"),
 ("Lift heavy without warming up", "max lift cold,ego lift", "strength-training,go-to-the-gym",
  ("musculoskeletal injury", "unknown", 3, 2, 1, "cold tissue, poor form, fatigue"),
  "The warm-up is cheap; the injury can cost months.", "do-mobility-work", "6-23", "hea=3 tail=0 dn=2"),
 ("Exercise through sharp pain", "train through pain,ignore pain", "go-to-the-gym,go-for-a-run,strength-training",
  ("injury", "unknown", 3, 3, 1, "sharp or unusual pain"),
  "Stopping keeps nearly all of the long-run benefit.", "rest", "0-24", "hea=1 tail=0 dn=3"),
 ("Ignore chest pain", "chest pain,ignore symptoms", "rest,book-a-doctors-appointment",
  ("severe health event", "unknown", 4, 4, 0, "chest pain, breathlessness, sudden weakness"),
  "Waiting changes nothing if it is benign and can be irreversible if it is not.", "seek-urgent-medical-care", "0-24", "tail=0 dn=3"),
 ("Skip your medication", "skip meds,miss medication", "take-your-medication",
  ("health deterioration", "depends on the medicine", 3, 3, 1, "prescribed daily medicine"),
  "Taking it is a two-minute action with a large protected downside.", "take-your-medication", "0-24", "tail=0 dn=2"),
 ("Mix medication with alcohol", "alcohol and meds,drink on medication", "have-a-drink,take-your-medication",
  ("adverse interaction", "unknown; depends on the medicine", 4, 3, 1, "sedatives, painkillers, some antibiotics"),
  "Check the label or ask a pharmacist first.", "drink-water", "18-26", "joy=2 tail=0 dn=2"),
 ("Leave the stove on and go out", "stove on,leave cooking unattended", "cook-dinner,cook-lunch",
  ("fire", "very low; repeated", 4, 4, 1, "unattended heat"),
  "A two-second check removes a catastrophic tail.", "cook-dinner", "11-21", "tail=0 dn=1"),
 ("Send an angry email", "angry email,rage email,reply angry", "reply-to-email,write-a-difficult-email",
  ("relationship and reputational harm", "moderate", 3, 3, 1, "writing while angry; cannot be unsent"),
  "Drafting now and sending tomorrow keeps every option.", "write-in-a-journal", "0-24", "car=0 soc=0 tail=0 dn=3"),
 ("Post something inflammatory online", "flame,inflammatory post,rant online", "post-an-update-online,scroll-social-media",
  ("permanent reputational harm", "low to moderate", 3, 4, 1, "screenshots persist"),
  "The upside is small and brief; the record is permanent.", "write-in-a-journal", "0-24", "joy=1 tail=0 dn=3"),
 ("Invest borrowed money in a speculative asset", "leverage,margin trading,crypto on credit,borrow to invest", "invest,buy-a-lottery-ticket",
  ("catastrophic financial loss", "unknown", 4, 3, 0, "leverage turns a drawdown into a debt"),
  "Unlevered, diversified saving keeps most upside without the ruin path.", "set-up-a-savings-plan", "0-24", "fin=1 tail=3 dn=4"),
 ("Gamble to win back losses", "chase losses,win it back", "buy-a-lottery-ticket",
  ("escalating financial loss", "moderate once chasing starts", 4, 3, 1, "chasing"),
  "Negative expected value, repeated, with an absorbing bottom.", "save-the-money", "0-24", "joy=1 tail=1 dn=4"),
 ("Take on high-interest debt for a purchase", "buy now pay later,credit card debt,finance a gadget", "buy-this,buy-a-new-phone,buy-a-car,buy-a-laptop",
  ("compounding debt", "moderate if the balance rolls over", 3, 2, 1, "interest compounding against you"),
  "Waiting or buying second-hand keeps the item within reach without the tail.", "wait-24-hours-before-buying", "0-24", "joy=2 tail=0 dn=3"),
 ("Sign a contract without reading it", "sign without reading,click agree", "fill-in-a-form,buy-furniture,subscribe-to-a-service",
  ("legal or financial lock-in", "low", 3, 3, 1, "auto-renewals, penalties, liability clauses"),
  "Reading the key clauses is cheap relative to the lock-in.", "read-the-contract-carefully", "0-24", "tail=0 dn=2"),
 ("Click a suspicious link", "phishing,scam link,suspicious sms", "check-your-phone,reply-to-email,reply-to-messages",
  ("account takeover, financial loss", "low per message; repeated", 3, 2, 1, "urgent messages asking you to log in or pay"),
  "Going to the site directly costs seconds.", "change-your-password", "0-24", "tail=0 dn=2"),
 ("Quit your job impulsively", "rage quit,quit now", "apply-for-a-job,stop-working-for-the-day",
  ("income loss", "high if no plan", 3, 3, 0, "a bad day"),
  "Searching while employed keeps the same upside with a floor.", "apply-for-a-job", "0-24", "car=1 tail=2 dn=3"),
 ("Make a major decision while exhausted or angry", "decide angry,decide tired", "make-a-decision,resolve-a-conflict",
  ("irreversible commitment", "moderate", 3, 3, 1, "fatigue, anger"),
  "Sleeping on it is reversible; many major decisions are not.", "sleep-on-it", "20-30", "tail=0 dn=2"),
 ("Doomscroll past midnight", "scroll in bed,late night scrolling", "scroll-social-media,stay-up-late",
  ("sleep loss (not ruin)", "high", 1, 1, 1, "phone in bed"),
  "Not dangerous, just poor payoff: little upside and it taxes tomorrow.", "wind-down-for-bed", "23-27", "joy=1 rec=0 hea=0 tail=0 dn=1"),
 ("Stay up all night before a big day", "all nighter,all-nighter", "stay-up-late,study-for-an-exam",
  ("performance collapse (not ruin)", "high", 2, 1, 0, "the big day itself"),
  "Poor payoff rather than ruin: sleep usually beats the extra hours.", "go-to-bed-early", "21-29", "car=1 tail=0 dn=2"),
]
NEW_BASES = """
@health
Seek urgent medical care | a and e,emergency,urgent care,go to hospital | dur=30/120/240 setup=20 act=3 hea=4 decay=4 reg=4 lt=4 rev=3 flags=
@admin
Read the contract carefully | read contract,read the terms,terms and conditions | dur=10/20/45 act=2 fin=3 info=4 reg=2 opt=3
@mind
Sleep on it | sleep on it,decide tomorrow,defer the decision | dur=1/1/1 act=0 opt=4 info=2 rev=4 reg=1 rec=1 goals=deliberation,clarity
"""


def slug(s):
    s = unicodedata.normalize("NFKD", s).encode("ascii", "ignore").decode().lower().replace("'", "").replace("’", "")
    return re.sub(r"[^a-z0-9]+", "-", s).strip("-")


def parse_hours(v):
    return [[float(a), float(b)] for a, b in (x.split(":") for x in v.split(";") if x)]


def parse_over(s):
    out = {}
    for tok in s.split():
        k, v = tok.split("=", 1)
        if k == "dur":
            out[k] = [int(x) for x in v.split("/")]
        elif k in ("typ", "best"):
            out[k] = parse_hours(v)
        elif k in ("goals", "comp", "opp", "subs", "places"):
            out[k] = [x for x in v.split(",") if x]
        elif k == "flags":
            out[k] = v
        elif k == "open":
            out[k] = [float(x) for x in v.split("-")]
        else:
            out[k] = int(v)
    return out


SOURCES = [
    {"id": "judgement", "title": "Author judgement for this build (category priors and per-action overrides)", "type": "heuristic",
     "status": "used", "url": "", "notes": "Ordinal 0-4 estimates. Not measured. Every field that uses it is labelled JUDGEMENT."},
    {"id": "model", "title": "This page's model: formulas that transform the judged facts into fit, classes and lens rankings", "type": "model",
     "status": "used", "url": "", "notes": "Formulas are shown on the page under Method. MODEL values inherit the confidence of their inputs."},
    {"id": "singapore", "title": "Singapore context assumptions: daylight about 07:00-19:15, midday heat 11:00-16:00, typical opening hours", "type": "heuristic",
     "status": "used", "url": "", "notes": "Stored as a Singapore adjustment separate from the global prior; switch it off to see the global prior alone."},
    {"id": "personal", "title": "Your own decision history in this browser", "type": "personal",
     "status": "used when present", "url": "", "notes": "Shown with its sample size n. Not used to change rankings."},
    {"id": "onet", "title": "O*NET occupational task database", "type": "observational", "status": "planned; not retrieved (network blocked in the build environment)", "url": "", "notes": "Would ground work-task actions."},
    {"id": "atus", "title": "American Time Use Survey (activity lexicon and time-of-day patterns)", "type": "survey", "status": "planned; not retrieved", "url": "", "notes": "Would replace the judged typical-time curves with observed ones."},
    {"id": "oecd-tus", "title": "OECD time-use database", "type": "survey", "status": "planned; not retrieved", "url": "", "notes": "Cross-country typical durations."},
    {"id": "sg-tus", "title": "Singapore time-use survey and data.gov.sg datasets", "type": "survey", "status": "planned; not retrieved", "url": "", "notes": "Singapore-specific timing and opening hours."},
    {"id": "health-reviews", "title": "Systematic reviews on exercise, sleep, meal timing and injury risk", "type": "review", "status": "planned; not retrieved", "url": "", "notes": "Would replace judged health, timing and tail-risk fields."},
]

MODIFIERS = {
    "manner": {
        "short": {"label": "short", "suffix": ", short", "flag": "f", "note": "about half the duration; benefits x0.65, right tail x0.7, activation -1"},
        "long": {"label": "long", "suffix": ", long", "flag": "f", "note": "about 1.6x the duration; benefits x1.2, activation +1"},
        "friend": {"label": "with a friend", "suffix": " with a friend", "flag": "s", "note": "social +2, enjoyment +1, activation +1, setup +10 min"},
        "family": {"label": "with family", "suffix": " with family", "flag": "s", "note": "social +2, enjoyment +0.5, activation +1, setup +10 min"},
        "partner": {"label": "with your partner", "suffix": " with your partner", "flag": "s", "note": "social +2, enjoyment +1, activation +0.5"},
        "alone": {"label": "alone", "suffix": " alone", "flag": "s", "note": "social 0, activation -0.5, recovery +0.5"},
        "gym": {"label": "at the gym", "suffix": " at the gym", "place": 1, "note": "setup +15 min, money +1"},
        "outside": {"label": "outside", "suffix": " outside", "place": 1, "note": "outdoor: daylight and heat adjustments apply; setup +5 min"},
        "home": {"label": "at home", "suffix": " at home", "place": 1, "note": "setup at most 2 min, no money cost, indoor"},
        "park": {"label": "in the park", "suffix": " in the park", "place": 1, "note": "outdoor, setup +10 min, recovery +0.5"},
        "office": {"label": "at the office", "suffix": " at the office", "place": 1, "note": "setup +20 min"},
        "cafe": {"label": "at a café", "suffix": " at a café", "place": 1, "note": "setup +15 min, money +1, novelty +1"},
        "library": {"label": "at the library", "suffix": " at the library", "place": 1, "note": "setup +20 min, work and learning +0.5"},
        "restaurant": {"label": "at a restaurant", "suffix": " at a restaurant", "place": 1, "note": "setup +15 min, money +2, enjoyment +1"},
    },
    "time": {
        "now": {"label": "now", "suffix": ""},
        "morning": {"label": "this morning", "suffix": " this morning", "hour": 8},
        "lunch": {"label": "at lunch", "suffix": " at lunch", "hour": 12.5},
        "afternoon": {"label": "this afternoon", "suffix": " this afternoon", "hour": 15.5},
        "evening": {"label": "this evening", "suffix": " this evening", "hour": 19},
        "tonight": {"label": "tonight", "suffix": " tonight", "hour": 21.5},
        "tomorrow": {"label": "tomorrow", "suffix": " tomorrow", "delay": 24},
        "weekend": {"label": "this weekend", "suffix": " this weekend", "delay": 48, "hour": 10},
    },
}


def main():
    bases = []
    cat = None
    for line in (ACTIONS.strip() + "\n" + NEW_BASES.strip()).splitlines():
        line = line.strip()
        if not line:
            continue
        if line.startswith("@"):
            cat = line[1:]
            continue
        parts = [p.strip() for p in line.split("|")]
        name, aliases, over = parts[0], parts[1], parts[2] if len(parts) > 2 else ""
        bases.append((name, cat, [a.strip() for a in aliases.split(",") if a.strip()], parse_over(over)))
    for obj, price, al in PURCHASE_OBJECTS:
        bases.append((f"Buy {obj}", "purchases", [x.strip() for x in al.split(",")],
                      dict(money=price, dur=[15, 40, 120] if price >= 3 else [5, 15, 30], rev=2 if price >= 3 else 3)))
    for sp in SPORTS:
        bases.append((f"Play {sp}", "exercise", [sp, f"{sp} game"],
                      dict(dur=[45, 75, 120], setup=20, soc=3, joy=4, dn=2, phys=3, nov=1,
                           goals=["fitness", "exercise", "connection"], flags="s", places=["outside", "gym"])))
    for sub in SUBJECTS:
        bases.append((f"Study {sub}", "learning", [sub, f"learn {sub}"], dict()))
    for name, al, c, over in HOBBIES:
        bases.append((name, c, [x.strip() for x in al.split(",")], parse_over(over)))

    extra = {}
    for line in EXTRA.strip().splitlines():
        aid, rest = line.split(" ", 1)
        extra.setdefault(aid, {}).update(parse_over(rest))
    for name, al, rel, ruin, why, safer, hours, facts in AVOID:
        over = parse_over(facts)
        over.update(dur=[5, 30, 90], act=1, rev=1, unc=3, freq=1, ev=1, lt=0, opt=0, info=0, reg=0, decay=0, rec=0, nov=1)
        over.update(parse_over(facts))
        bases.append((name, "avoid", [x.strip() for x in al.split(",")], dict(over, _avoid=dict(rel=rel.split(","), why=why, safer=safer, when=[float(x) for x in hours.split("-")]), _ruin=ruin)))
    out_actions = []
    seen = set()
    for name, c, aliases, over in bases:
        pri = CATS[c]
        aid = slug(name)
        assert aid not in seen, aid
        seen.add(aid)
        if aid in extra:
            over = {**over, **extra.pop(aid)}
        a = {"id": aid, "name": name, "cat": c, "aliases": aliases}
        for f in FIELDS:
            if f in over:
                a[f] = over[f]
            elif f in pri:
                a[f] = pri[f]
        if "best" in a and "evt" not in a:
            a["evt"] = pri.get("evt", 1)
        a["goals"] = over.get("goals", pri["goals"].split(","))
        a["flags"] = over.get("flags", pri["flags"])
        a["places"] = over.get("places", [p for p in pri["places"].split(",") if p])
        if "places" not in over and ("open" in a or a["setup"] >= 15):
            a["places"] = []
        if "subs" in over:
            a["subs"] = over["subs"]
        a["comp"] = over.get("comp", [p for p in pri["comp"].split(",") if p])
        a["opp"] = over.get("opp", [p for p in pri["opp"].split(",") if p])
        a["own"] = sorted(k for k in over if k in FIELDS)
        r = over.get("_ruin") or RUIN.get(aid)
        if r:
            a["ruin"] = dict(kind=r[0], p=r[1], sev=r[2], irrev=r[3], rep=bool(r[4]), trig=r[5])
        if "_avoid" in over:
            a["avoid"] = over["_avoid"]
        out_actions.append(a)

    assert not extra, extra
    assert set(RUIN) <= seen, set(RUIN) - seen
    ids = {a["id"] for a in out_actions}
    for a in out_actions:
        if "avoid" in a:
            assert all(r in ids for r in a["avoid"]["rel"]), (a["id"], a["avoid"]["rel"])
            assert a["avoid"]["safer"] in ids, a["avoid"]["safer"]
    for a in out_actions:
        for k in ("comp", "opp", "subs"):
            a[k] = [x for x in a.get(k, []) if x in ids and x != a["id"]]
            if not a[k]:
                a.pop(k, None)
    missing = sorted({x for n, c, al, o in bases for k in ("comp", "opp", "subs") for x in o.get(k, []) if x not in ids})
    cats_missing = sorted({x for c in CATS.values() for k in ("comp", "opp") for x in c[k].split(",") if x and x not in ids})
    assert not missing and not cats_missing, (missing, cats_missing)

    cats = {k: {kk: vv for kk, vv in v.items() if kk in ("label",)} for k, v in CATS.items()}
    for k, v in CATS.items():
        cats[k]["prior"] = {f: v[f] for f in FIELDS if f in v}
    return {"topic": "Convexity Action Engine: an ordinal, judgement-labelled atlas of everyday actions",
            "scales": "0-4 ordinal unless stated; durations in minutes; hours are Singapore local time (may exceed 24 to mean after midnight)",
            "sources": SOURCES, "modifiers": MODIFIERS, "categories": cats, "actions": out_actions}


def write():
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(main(), ensure_ascii=False, indent=1) + "\n", encoding="utf-8")


if __name__ == "__main__":
    write()
