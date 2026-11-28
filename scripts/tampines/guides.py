"""Build the guide matrix for the Tampines study (prereg "Inputs" 1 and 2).

Reads scripts/tampines/guide_urls.tsv, fetches each article (cached outside the repo),
finds its published date, sponsorship disclosure and which of the 139 places in
research/tampines/raw/places.tsv it names, and writes research/tampines/raw/articles.tsv
and mentions.tsv. With --michelin it also checks the year lists in michelin_lists.tsv
and writes michelin.tsv.

Run:  uv run --with beautifulsoup4 python scripts/tampines/guides.py [--michelin] [--offline]
Only facts are stored: names, dates, URLs, flags, numbers; evidence phrases are <= 10 words.
"""
import csv, hashlib, json, os, re, sys, time, unicodedata, urllib.error, urllib.parse, urllib.request
from datetime import date
from pathlib import Path

from bs4 import BeautifulSoup

ROOT = Path(__file__).resolve().parents[2]
RAW = ROOT / "research/tampines/raw"
URLS = ROOT / "scripts/tampines/guide_urls.tsv"
CACHE = Path(os.environ.get("GUIDES_CACHE", Path.home() / ".cache/tampines-guides"))
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15"
OFFLINE = "--offline" in sys.argv
_last = {}


def fetch(url):
    """GET with a per-host 1 request/second limit and a disk cache keyed by URL."""
    CACHE.mkdir(parents=True, exist_ok=True)
    key = CACHE / (hashlib.sha1(url.encode()).hexdigest() + ".html")
    meta = key.with_suffix(".json")
    if key.exists():
        return key.read_text(errors="replace"), json.loads(meta.read_text()) if meta.exists() else {}
    if OFFLINE:
        return "", {"status": 0}
    host = urllib.parse.urlsplit(url).netloc
    wait = 1.05 - (time.time() - _last.get(host, 0))
    if wait > 0:
        time.sleep(wait)
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept-Language": "en-SG,en;q=0.9"})
    info = {"status": 0, "final": url, "fetched": date.today().isoformat()}
    try:
        with urllib.request.urlopen(req, timeout=40) as r:
            body = r.read()
            info.update(status=r.status, final=r.geturl())
    except urllib.error.HTTPError as e:
        body, info["status"] = e.read() or b"", e.code
    except Exception as e:  # network error: do not cache
        _last[host] = time.time()
        print(f"  fetch failed {url}: {e}", file=sys.stderr)
        return "", info
    _last[host] = time.time()
    text = body.decode("utf-8", errors="replace")
    if info["status"] == 200:
        key.write_text(text)
        meta.write_text(json.dumps(info))
    return text, info


# ---------------------------------------------------------------- dates

def _iso(s):
    m = re.search(r"(20\d\d)-(\d\d)-(\d\d)", s or "")
    return f"{m[1]}-{m[2]}-{m[3]}" if m else ""


MONTHS = {m: i for i, m in enumerate("january february march april may june july august september october november december".split(), 1)}


def _human_date(s):
    m = re.search(r"([A-Za-z]+)\s+(\d{1,2}),?\s+(20\d\d)", s or "")
    if m and m[1].lower() in MONTHS:
        return f"{m[3]}-{MONTHS[m[1].lower()]:02d}-{int(m[2]):02d}"
    return ""


# Dates read by hand where the page carries none: url -> (date, how)
DATE_OVERRIDES = {
    "https://faithfullyours18.blogspot.com/2024/04/pocha-tampines-review.html": "2024-04-06",  # Blogger feed entry 'published' for this post
}


def page_dates(soup, url):
    """(published, modified) from page metadata; '' when absent."""
    pub = mod = ""
    for prop in ("article:published_time", "og:published_time", "datePublished", "pubdate", "publish-date", "date"):
        t = soup.find("meta", attrs={"property": prop}) or soup.find("meta", attrs={"name": prop}) or soup.find("meta", attrs={"itemprop": prop})
        if t and _iso(t.get("content")):
            pub = _iso(t.get("content"))
            break
    t = soup.find("meta", attrs={"property": "article:modified_time"}) or soup.find("meta", attrs={"itemprop": "dateModified"})
    if t:
        mod = _iso(t.get("content"))
    for s in soup.find_all("script", type="application/ld+json"):
        txt = s.string or s.get_text() or ""
        if not pub:
            m = re.search(r'"datePublished"\s*:\s*"([^"]+)"', txt)
            if m:
                pub = _iso(m[1])
        if not mod:
            m = re.search(r'"dateModified"\s*:\s*"([^"]+)"', txt)
            if m:
                mod = _iso(m[1])
    if not pub:
        t = soup.find(attrs={"itemprop": re.compile("datePublished")})
        if t:
            pub = _iso(t.get("content") or t.get("datetime") or "") or _human_date(t.get("title") or t.get_text(" ", strip=True))
    if not pub:
        t = soup.find("time", attrs={"datetime": True})
        if t:
            pub = _iso(t["datetime"])
    if url in DATE_OVERRIDES:
        pub = DATE_OVERRIDES[url]
    if not pub:  # dated permalinks (danielfooddiary.com/YYYY/MM/DD/, mothership.sg/YYYY/MM/)
        m = re.search(r"/(20\d\d)/(\d\d)/(\d\d)/", url)
        if m:
            pub = f"{m[1]}-{m[2]}-{m[3]}"
    return pub, mod


def wayback_first(url):
    u = "https://web.archive.org/cdx/search/cdx?" + urllib.parse.urlencode({"url": url.split("://", 1)[1], "output": "json", "limit": "1"})
    text, info = fetch(u)
    try:
        rows = json.loads(text)
        ts = rows[1][1]
        return f"{ts[:4]}-{ts[4:6]}-{ts[6:8]}"
    except Exception:
        return ""


# ---------------------------------------------------------------- body text

BODY_SELECTORS = [
    "div.entry-content", "div.td-post-content", "div.post-content", "div.article-content", "div.single-content",
    "div.content-body", "div.article-body", "div.post-body", "div.blog-post-content",
    "div.elementor-widget-theme-post-content", "div.wpb-content-wrapper",
]
JUNK = "script style noscript iframe form nav header footer aside svg".split()


def _densest(soup):
    """Readability-style fallback: the node whose paragraphs carry the most text."""
    score = {}
    for p in soup.find_all(["p", "h2", "h3", "li"]):
        n = len(p.get_text(" ", strip=True))
        if n < 25:
            continue
        node, w = p.parent, 1.0
        for _ in range(4):
            if node is None or node.name in ("body", "html", "[document]"):
                break
            score[id(node)] = (score.get(id(node), (0, node))[0] + n * w, node)
            node, w = node.parent, w / 2
    if not score:
        return soup.body or soup
    best = max(score.values(), key=lambda x: x[0])[1]
    # climb while the parent holds clearly more paragraph text (articles split into many blocks)
    ptext = lambda n: sum(len(p.get_text(" ", strip=True)) for p in n.find_all(["p", "h2", "h3", "li"]) if len(p.get_text(" ", strip=True)) >= 25)
    while best.parent is not None and best.parent.name not in ("body", "html", "[document]") and ptext(best.parent) > 1.25 * ptext(best):
        best = best.parent
    return best


def body_text(soup):
    for sel in BODY_SELECTORS:
        el = soup.select_one(sel)
        if el and len(el.get_text(" ", strip=True)) > 400:
            break
    else:
        el = _densest(soup)
    el = BeautifulSoup(str(el), "html.parser")
    for tag in el.find_all(JUNK):
        tag.decompose()
    root = el.find(True)
    for tag in el.select("[class*=related], [class*=sharedaddy], [class*=addtoany], [class*=share-], [class*=newsletter], [id^=comments], [class^=comments], [class*=sidebar], [class*=author-box], [class*=jp-relatedposts], [class*=yarpp]"):
        if tag is not root and not tag.decomposed:
            tag.decompose()
    for tag in el.find_all(["p", "h2", "h3", "h4", "li"]):
        txt = tag.get_text(" ", strip=True)
        if XLINK_RE.match(txt[:40].lower()) and len(txt) < 300:
            tag.decompose()
    t = el.get_text("\n", strip=True)
    t = unicodedata.normalize("NFKC", t).replace("’", "'").replace("‘", "'")
    m = TAIL_RE.search(t, int(len(t) * 0.3))
    return t[: m.start()] if m else t


# Cross-links to other articles are not mentions: drop "Also read: <title>" lines and cut the related-posts tail.
XLINK_RE = re.compile(r"(?:people also read|also read|read also|read more|related:|related post|related article|see also|you may also like|you might also like|other related entries)")
TAIL_RE = re.compile(r"\n(?:People also read|Other Related Entries|Check out our other|Related Posts|Related Articles|You may also like|You might also like|Drop us your email|Read Next)", re.I)


def title_of(soup):
    t = soup.find("meta", attrs={"property": "og:title"})
    s = (t.get("content") if t else "") or (soup.title.string if soup.title and soup.title.string else "")
    s = re.sub(r"\s*[|\-–]\s*(Eatbook\.sg|SETHLUI\.com|Seth Lui|DanielFoodDiary\.com|Daniel Food Diary|Miss Tam Chiak|ieatishootipost|HungryGoWhere|Mothership\.SG|Makansutra|The Honeycombers|Honeycombers|Faithfullyours)\b.*$", "", s.strip(), flags=re.I)
    s = re.sub(r"^Faithfullyours:\s*", "", s)
    if re.match(r"Mothership\.SG - News", s) and soup.find("h1"):  # site-wide og:title: use the headline
        s = soup.find("h1").get_text(" ", strip=True)
    return re.sub(r"\s+", " ", s)[:200]


# ---------------------------------------------------------------- sponsorship

SPONSOR = [
    r"brought to you by", r"\bsponsored (?:by|post|content|article)\b", r"\bthis (?:post|article|entry|review) is sponsored\b",
    r"in (?:partnership|collaboration) with", r"\bmedia (?:invite|invitation|tasting|preview|drop|event)\b",
    r"\bhosted (?:tasting|lunch|dinner|meal|session)\b", r"\b(?:we|i) (?:were|was) (?:kindly )?invited\b",
    r"\binvited (?:us|me) (?:down|over|to)\b", r"\bat the invitation of\b", r"\b(?:we|i) (?:were|was) hosted\b",
    r"\b(?:meal|tasting|dinner|lunch|session|visit) (?:was|were) (?:kindly )?(?:hosted|sponsored|complimentary)\b",
    r"\badvertorial\b", r"\bpaid partnership\b", r"\bthanks to .{0,40} for (?:having|hosting|inviting)\b",
    r"\bfood (?:tasting|review) (?:was )?(?:sponsored|hosted)\b", r"\bcomplimentary (?:meal|tasting|food)\b",
]
SPONSOR_RE = re.compile("|".join(f"(?:{p})" for p in SPONSOR), re.I)


NOT_SPONSOR = re.compile(r"\s*(?:the (?:folks|team|people|makers|creators|owners|minds|brains|founders|same)|the brand behind)", re.I)


def sponsorship(text):
    m = next((m for m in SPONSOR_RE.finditer(text) if not (m[0].lower().startswith("brought") and NOT_SPONSOR.match(text, m.end()))), None)
    if not m:
        return 0, ""
    pre = re.split(r"[.!?\n]", text[max(0, m.start() - 60):m.start()])[-1].split()[-3:]
    post = re.split(r"[.!?\n]", text[m.end():m.end() + 80])[0].split()[:4]
    words = (pre + m[0].split() + post)[:10]
    return 1, " ".join(words).replace("\t", " ")


# ---------------------------------------------------------------- places

def load_places():
    with (RAW / "places.tsv").open() as f:
        return list(csv.DictReader(f, delimiter="\t"))


def norm(s):
    s = unicodedata.normalize("NFKD", s).encode("ascii", "ignore").decode().lower()
    s = s.replace("&", " and ").replace("'", "").replace("’", "")
    return re.sub(r"[^a-z0-9]+", " ", s).strip()


# Extra spellings seen in articles (normalised by norm()).
VARIANTS = {
    "p001": ["tampines hawker nasi lemak specialist", "nasi lemak specialist"],
    "p002": ["sarawak kolo mee", "yummy sarawak kolo mee"],
    "p003": ["song han carrot cake", "song han"],
    "p004": ["137 lor mee prawn mee", "137 lor mee"],
    "p005": ["teo kee mushroom minced pork noodle", "teo kee minced pork", "teo kee mushroom"],
    "p006": ["xing ji wanton mee", "xing ji wan ton mee", "xing ji wonton mee", "xing ji"],
    "p007": ["rajarani thosai", "raja rani thosai"],
    "p008": ["hai chang fish head steamboat", "hai chang"],
    "p009": ["yi le shu shi"],
    "p010": ["house of dessert"],
    "p011": ["lao lee pigs viscera", "lao lee pig viscera", "lao lee prawn noodle", "pigs viscera pork ribs prawn noodle"],
    "p012": ["yong huat chicken rice"],
    "p013": ["jie shen shou gong bao", "jie shen handmade pau", "jie shen"],
    "p014": ["shen li restaurant", "shen li"],
    "p015": ["yi pin wei braised duck", "yi pin wei"],
    "p016": ["xiong kee famous carrot cake", "xiong kee carrot cake", "xiong kee"],
    "p017": ["ju ming xiang mushroom minced meat noodle", "ju ming xiang mushroom"],
    "p018": ["137 market pancake"],
    "p019": ["xing yun kway chap"],
    "p020": ["ah gong ban mian"],
    "p021": ["botak cantonese porridge", "botak delicacy"],
    "p022": ["munchi pancakes", "munchi pancake"],
    "p023": ["penang savour"],
    "p024": ["ippon fusion bowl", "ippon pork rice"],
    "p025": ["yong seng heng prawn noodle", "yong seng heng"],
    "p026": ["indian cuisine"],  # generic: STRICT, so only with the venue in scope or the unit nearby
    "p027": ["jue shi lor mee"],
    "p028": ["japanese curry house"],  # generic: STRICT
    "p029": ["ofanz rojak popiah", "ofanz"],
    "p030": ["the fish soup"],  # generic: STRICT
    "p031": ["warung wak dindang", "wak dindang"],
    "p032": ["social bite"],
    "p033": ["p and j western food", "p j western food", "pj western food"],
    "p034": ["gopizza"],
    "p035": ["guzman y gomez"],
    "p036": ["rumah makan minang"],
    "p037": ["ramen hitoyoshi"],
    "p038": ["wingstop"],
    "p039": ["saap saap thai"],
    "p040": ["wok hey"],
    "p041": ["dutch colony coffee", "dutch colony"],
    "p042": ["best zaika"],
    "p043": ["haji salim food stall", "haji salim", "hj salim"],
    "p044": ["hainan beef noodle and claypot rice", "hainan beef noodle"],
    "p045": ["maxwell chicken rice", "maxwell hainanese chicken rice"],  # also the Maxwell Food Centre stalls: STRICT
    "p046": ["im thai kitchen"],
    "p047": ["jinjja kitchen", "jinjja chicken"],
    "p048": ["mommy rendang", "mommys rendang"],
    "p049": ["tai wah pork noodle"],
    "p050": ["koungs wan tan mee", "koung s wan tan mee", "koungs wantan mee"],
    "p051": ["tiong bahru boneless chicken rice", "tiong bahru hainanese boneless chicken rice", "tiong bahru hainanese chicken rice"],
    "p052": ["keming bing sat"],
    "p053": ["haruyama udon"],
    "p054": ["bari bari steak"],
    "p055": ["sushiro"],
    "p056": ["tanyu"],
    "p057": ["monster planet"],
    "p058": ["cafe bom bom", "cafe bombom", "bombom"],
    "p059": ["fieldnotes"],
    "p060": ["brotherbird bakehouse", "brotherbird", "brother bird"],
    "p061": ["churn"],
    "p062": ["108 matcha saro"],
    "p063": ["mister donut"],
    "p064": ["luckin coffee", "luckin"],
    "p065": ["wanpo tea shop", "wanpo"],
    "p066": ["alley wei"],
    "p067": ["swensens"],
    "p068": ["nandos"],
    "p069": ["so pho"],
    "p070": ["tokyo shokudo"],
    "p071": ["genki sushi"],
    "p072": ["legendary hong kong"],
    "p073": ["ging sun ho"],
    "p074": ["pocha korean street dining", "pocha"],
    "p075": ["casa vostra"],
    "p076": ["lolas cafe", "lolas"],
    "p077": ["ruxu"],
    "p078": ["yeah gelato"],
    "p079": ["gokuku"],
    "p080": ["yang xiao xian"],  # Mango Ice = Yang Xiao Xian; bare "mango ice" is a dish
    "p081": ["abundance"],
    "p082": ["butahage"],
    "p083": ["nanyang dao"],
    "p084": ["the tree cafe"],
    "p085": ["putien"],
    "p086": ["sushi zanmai"],
    "p087": ["seoul garden"],
    "p088": ["dian xiao er"],
    "p089": ["tongue tip lanzhou beef noodles", "tongue tip"],
    "p090": ["tim ho wan"],
    "p091": ["steak 99"],
    "p092": ["a one signature"],
    "p093": ["big fish small fish"],
    "p094": ["ichiban boshi"],
    "p095": ["ramen taisho"],
    "p096": ["keng eng kee", "kek seafood"],
    "p097": ["captain kim"],
    "p098": ["little tokio"],
    "p099": ["soi thai kitchen"],
    "p100": ["jin hock seafood"],
    "p101": ["the only burger"],
    "p102": ["super gepuk"],
    "p103": ["jin kimchi express", "jin kimchi"],
    "p104": ["old world bakuteh", "old world bak kut teh"],
    "p105": ["soon soon prawn noodle"],
    "p106": ["fu yuan minced pork noodle", "fu yuan teochew bak chor mee", "fu yuan"],
    "p107": ["mui kee chicken rice"],
    "p108": ["al mahboob"],
    "p109": ["grannys pancake", "granny s pancake"],
    "p110": ["tokyo western food"],
    "p111": ["tipsy penguin"],
    "p112": ["888 mookata"],
    "p113": ["craze kitchen"],
    "p114": ["hundred acre creamery"],
    "p115": ["delato"],
    "p116": ["glasshouse creamery"],
    "p117": ["threes a crowd", "three s a crowd"],
    "p118": ["puffs and peaks", "puff and peaks", "puffs peaks"],
    "p119": ["new deli bakery", "new deli"],
    "p120": ["betsubara"],
    "p121": ["ben baker"],
    "p122": ["one18 bakery", "one 18 bakery", "one18"],
    "p123": ["spilled roaster"],
    "p124": ["baobei coffee"],
    "p125": ["my fathers minced meat noodles", "my father s minced meat", "my fathers minced meat"],
    "p126": ["srisun express", "srisun"],
    "p127": ["jofa meepok", "jofa mee pok", "jofa"],
    "p128": ["san ye seafood", "sanye seafood"],
    "p129": ["wongs family western", "wong s family western"],
    "p130": ["zouls corner", "zoul s corner"],
    "p131": ["lawa bintang"],
    "p132": ["rong kee roasted delights", "rong kee"],
    "p133": ["the grace bowl", "grace bowl"],
    "p134": ["baan kai khon", "banom kai khon", "ban kai khon", "baankaikhon"],
    "p135": ["heartland by enjoy"],
    "p136": ["professor brawn"],
    "p137": ["fpc seafood"],
    "p138": ["ashes burnnit"],
}

# Chains or names that recur outside Tampines: a mention counts only when an address
# hint for the Tampines outlet appears nearby (see place_hints) or by override.
STRICT = set("p002 p006 p011 p012 p020 p021 p022 p026 p028 p030 p034 p035 p036 p037 p038 p040 p041 p045 p049 p050 p051 p052 p053 p054 p055 p056 p057 p059 p060 "
             "p061 p062 p063 p064 p065 p066 p067 p068 p069 p070 p071 p072 p073 p074 p075 p076 p078 p079 p081 p082 p083 p085 "
             "p086 p087 p088 p089 p090 p091 p093 p094 p095 p096 p097 p103 p104 p106 p107 p108 p109 p115 p116 p117 p118 p122 p127 p132 p133".split())


def place_hints(p):
    """Address strings that tie a mention to this place's Tampines outlet."""
    hints = []
    for col in ("venue", "place"):
        v = p[col].strip()
        if v:
            hints.append(norm(v))
    hints.append("tampines")
    for u in re.findall(r"(?:#?B?\d{1,2}-[A-Z]?\d{1,4}[A-Z]?)", p["unit"]):
        hints.append(norm(u))
    return [h for h in hints if h]


def build_patterns(places):
    pats = {}
    for p in places:
        vs = set(VARIANTS.get(p["id"], [])) | ({norm(p["name"])} if p["id"] not in ("p080",) else set())
        vs = sorted({v for v in vs if len(v) >= 4}, key=len, reverse=True)
        if vs:
            pats[p["id"]] = re.compile(r"(?<![a-z0-9])(?:" + "|".join(re.escape(v).replace(r"\ ", r"\s+") for v in vs) + r")(?![a-z0-9])")
    return pats


def find_mentions(text, places, pats, scope):
    """Return {place_id: name_as_written} for the 139 places the text names."""
    raw = text
    low = norm(text)
    # map normalised offsets back to the original text approximately via a parallel scan of words
    found = {}
    pmap = {p["id"]: p for p in places}
    for pid, rx in pats.items():
        for m in rx.finditer(low):
            p = pmap[pid]
            # a venue- or place-scoped article locates the place already; elsewhere a chain or generic
            # name needs an address hint for the Tampines outlet near the mention
            located = re.search(r"(?:^|;)(?:venue|place|single)=", scope)
            if pid in STRICT and not located:
                win = low[max(0, m.start() - 250): m.end() + 900]
                if not any(h in win for h in place_hints(p) if h != "tampines") and not _tampines_address_near(win):
                    continue
            found[pid] = _as_written(raw, m.group(0))
            break
    return found


def _tampines_address_near(win):
    return bool(re.search(r"tampines (?:street|st|avenue|ave|central|north drive|walk|concourse|hub)|singapore 52\d{4}|\b52\d{4}\b", win))


def _as_written(raw, normed):
    words = normed.split()
    rx = r"[^A-Za-z0-9]{0,4}".join("(?:and|&)" if w == "and" else "".join(re.escape(c) + "'?" for c in w) for w in words)
    m = re.search(rx, unicodedata.normalize("NFKD", raw).encode("ascii", "ignore").decode(), re.I)
    return (m.group(0) if m else normed).replace("\t", " ").replace("\n", " ")[:80]


# ---------------------------------------------------------------- scores, closures

SCORE_RE = re.compile(r"\b(?:rating|rated|score|verdict|we gave (?:it|this [a-z ]{1,30}|them) an?)\s*[:\-]?\s*(\d{1,2}(?:\.\d{1,2})?)\s*/\s*(10|5)\b", re.I)
CLOSED_RE = re.compile(r"\b(?:has|have) (?:since )?(?:closed|ceased operations)|\bpermanently closed\b|\bno longer (?:operating|open|in operation)\b|\bclosed (?:down|for good)\b|\b(?:update|editor'?s note)\s*:?[^.\n]{0,80}\bclosed\b", re.I)


# Eatbook review box: "<title>\n7.5/10\n...\nSummary\nPros"
BOX_RE = re.compile(r"\n(\d{1,2}(?:\.\d)?)/(10)\n(?:[^\n]*\n){0,5}Summary\n", re.I)


def score_near(text, name, single):
    """Numeric score given by the author for this place: for single reviews anywhere, else within the place's block."""
    idx = text.lower().find(name.lower())
    seg = text if single else (text[idx: idx + 2500] if idx >= 0 else "")
    m = (BOX_RE.search(seg) if single else None) or SCORE_RE.search(seg)
    if not m:
        return "", ""
    return m[1], m[2]


CLOSED_TAG = re.compile(r"[\[(](?:permanently )?closed[\])]", re.I)


def closed_near(text, name, single, title=""):
    """1 when the article says this place has closed for good: a (Closed) tag in the title or by the
    name, or a closure phrase in a sentence that names the place (single reviews) or in its block."""
    low, nm = text.lower(), name.lower()
    if single and CLOSED_TAG.search(title):
        return 1
    for m in re.finditer(re.escape(nm), low):
        if CLOSED_TAG.search(text[m.start(): m.end() + 40]):
            return 1
    if single:
        sents = re.split(r"(?<=[.!?])\s|\n", text)
        return int(any(nm in x.lower() and CLOSED_RE.search(x) for x in sents))
    idx = low.find(nm)
    return int(bool(idx >= 0 and CLOSED_RE.search(text[max(0, idx - 100): idx + 600])))


# ---------------------------------------------------------------- main

def read_urls():
    """Rows of guide_urls.tsv plus the area=<name> place lists from its '# area=' comment lines."""
    rows, areas = [], {}
    with URLS.open() as f:
        for line in f:
            m = re.match(r"# area=(\w+): (.*)", line)
            if m:
                areas[m[1]] = _expand_ids(m[2])
            if not line.strip() or line.startswith("#"):
                continue
            rows.append(line.rstrip("\n").split("\t"))
    hdr, data = rows[0], rows[1:]
    return [dict(zip(hdr, r)) for r in data], areas


def _expand_ids(spec):
    out = set()
    for tok in spec.split():
        a, _, b = tok.partition("-")
        out |= {f"p{i:03d}" for i in range(int(a[1:]), int((b or a)[1:]) + 1)}
    return out


def in_scope(p, scope, areas):
    """A place is in scope when it matches every ';' filter; ',' inside a value means either value."""
    for flt in scope.split(";"):
        key, _, val = flt.partition("=")
        if key == "all":
            continue
        opts = val.split(",")
        if key == "single":
            ok = p["id"] in opts
        elif key == "area":
            ok = any(p["id"] in areas.get(o, set()) for o in opts)
        else:
            ok = p.get(key, "") in opts
        if not ok:
            return False
    return True


def main():
    places = load_places()
    pmap = {p["id"]: p for p in places}
    pats = build_patterns(places)
    urls, areas = read_urls()
    arts, ments = [], []
    review = "--review" in sys.argv
    for i, u in enumerate(urls):
        aid = f"a{i:03d}"
        url = u["url"]
        html, info = fetch(url)
        soup = BeautifulSoup(html, "html.parser")
        text = body_text(soup) if html else ""
        if not text:
            print(f"  EMPTY {url}", file=sys.stderr)
        pub, mod = page_dates(soup, url)
        src = "page"
        if not pub:
            pub, src = wayback_first(url), "wayback"
        sp, ev = sponsorship(text)
        scope = u.get("scope") or "all"
        single = scope.startswith("single=")
        scoped = {pid for pid in pmap if in_scope(pmap[pid], scope, areas)}
        found = find_mentions(text, places, pats, scope)
        if single:
            pid = scope.split("=", 1)[1]
            found.setdefault(pid, _subject_name(text, places, pid))
        out = {pid: nm for pid, nm in found.items() if pid not in scoped}
        found = {pid: nm for pid, nm in found.items() if pid in scoped}
        if review and out and not single:
            print(f"  {aid} out of scope ({scope}): " + ", ".join(f"{k}={v}" for k, v in sorted(out.items())), file=sys.stderr)
        arts.append([aid, u["outlet"], url, title_of(soup), pub, src, scope, u.get("theme", ""), sp, ev, info.get("fetched", ""), mod])
        for pid, nm in sorted(found.items()):
            sc, scale = score_near(text, nm, single)
            cl = CLOSED_OVERRIDES.get((url, pid), closed_near(text, nm, single, title_of(soup)))
            ments.append([aid, pid, nm, sc, scale if sc else "", cl])
        print(f"{aid} {u['outlet'][:12]:12} {pub} sp={sp} n={len(found):2}/{len(scoped):3} {url}", file=sys.stderr)
    _write(RAW / "articles.tsv", ["article_id", "outlet", "url", "title", "published", "date_source", "scope", "theme", "sponsored", "sponsored_evidence", "fetched", "modified"], arts)
    _write(RAW / "mentions.tsv", ["article_id", "place_id", "name_as_written", "numeric_score", "score_scale", "says_closed"], ments)
    if "--michelin" in sys.argv:
        michelin(places)


def _subject_name(text, places, pid):
    p = next(x for x in places if x["id"] == pid)
    rx = build_patterns([p]).get(pid)
    m = rx.search(norm(text)) if rx else None
    return _as_written(text, m.group(0)) if m else p["name"]


def _write(path, hdr, rows):
    clean = lambda v: re.sub(r"[\t\r\n]+", " ", str(v)).strip()
    with path.open("w", encoding="utf-8") as f:
        for r in [hdr] + rows:
            f.write("\t".join(clean(v) for v in r) + "\n")
    print(f"{len(rows)} rows -> {path.relative_to(ROOT)}", file=sys.stderr)


# says_closed corrections after reading the sentence: (url, place_id) -> flag
CLOSED_OVERRIDES = {
    ("https://eatbook.sg/lawa-bintang/", "p131"): 0,  # the closed outlets are Kaki Bukit and Tai Seng, not Tampines
}


# ---------------------------------------------------------------- Michelin

def michelin(places):
    """Write michelin.tsv from the hand-confirmed entries below, re-checking that each source page
    still names the place next to a Tampines address; warn about any other Tampines entry on the
    year lists in michelin_lists.tsv (source_url is a space-separated list)."""
    pats = build_patterns(places)
    out = []
    for (pid, year), (dist, src) in sorted(MICHELIN_CONFIRMED.items()):
        html, _ = fetch(src)
        low = norm(body_text(BeautifulSoup(html, "html.parser"))) if html else ""
        ok = any("tampines" in low[max(0, m.start() - 300): m.end() + 300] for m in pats[pid].finditer(low))
        if not ok:
            print(f"  michelin: {pid} {year} not confirmed on {src}", file=sys.stderr)
        out.append([pid, year, dist, src])
    with (RAW / "michelin_lists.tsv").open() as f:
        for row in csv.DictReader(f, delimiter="\t"):
            for src in row["source_url"].split():
                html, _ = fetch(src)
                text = body_text(BeautifulSoup(html, "html.parser")) if html else ""
                for t in re.finditer(r"tampines", text, re.I):
                    seg = norm(text[max(0, t.start() - 120): t.end()])
                    for pid, rx in pats.items():
                        if rx.search(seg) and (pid, row["year"]) not in MICHELIN_CONFIRMED:
                            print(f"  michelin: unconfirmed Tampines entry {pid} on {row['year']} list {src}", file=sys.stderr)
    _write(RAW / "michelin.tsv", ["place_id", "year", "distinction", "source_url"], out)


# (place_id, year) -> (distinction, source), read by hand: the entry names the stall and its Tampines address.
MICHELIN_CONFIRMED = {
    ("p007", "2026"): ("bib", "https://mothership.sg/2026/07/the-complete-list-of-97-eateries-that-made-it-to-michelin-bib-gourmand-2026/"),
    ("p015", "2026"): ("bib", "https://mothership.sg/2026/07/the-complete-list-of-97-eateries-that-made-it-to-michelin-bib-gourmand-2026/"),
    # Michelin Selected (plate) additions at Round Market in 2026, from contemporary reviews; not on a full list
    ("p002", "2026"): ("plate", "https://danielfooddiary.com/2026/06/09/yummysarawakkolomee/"),
    ("p006", "2026"): ("plate", "https://danielfooddiary.com/2026/06/08/xingjiwantonmee/"),
    ("p003", "2026"): ("plate", "https://danielfooddiary.com/2026/06/15/songhancarrotcake/"),  # inferred: "five new stalls" piece
}


if __name__ == "__main__":
    main()
