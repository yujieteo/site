"""Dish-type rules for the hedonic price model, fixed before the fit (see research/tampines/prereg.md).

The first matching rule wins. Form rules come first (dessert, buffet, pasta and pizza, burger,
ramen, porridge), then the cuisine types the pre-registration names (Korean, Thai, Mexican and
Middle Eastern), then the general forms. Anything left is "other".
"""
import re

TYPES = [
    "noodles", "rice", "porridge_soup", "bread_prata", "small_plates", "burger_sandwich",
    "pasta_pizza", "jp_bowl_sushi", "ramen", "western_main", "korean", "thai", "mex_me",
    "dessert_snack", "other",
]

def _has(name: str, words: str) -> bool:
    return re.search(rf"\b(?:{words})", name) is not None

PASTA = r"pasta|spaghetti|fettuccine|rigatoni|tagliatelle|pappardelle|linguine|lasagn|agnolotti|ravioli|orecchiette|tagliolini|gigli|paccheri|mafaldine|aglio (?:e )?olio|carbonara|bolognese|bolognaise|vongole|marinara|arrabbiata|orzo|mac (?:&|and) cheese|pizza|cacio e pepe"
NOODLE = r"noodle|mee|mie\b|hor ?fun|kway teow|bee hoon|laksa|ban mian|pho\b|udon|soba|kolo|wanton|lor mee|jjajangmyeon|jjapagetti|naengmyeon|kway chap|bun noodle|ramyeon"
RICE = r"rice|nasi|\bdon\b|don\b|bowl|biryani|briyani|lontong|bibimbap|bokkeumbab|penyet|gepuk|set meal|value set|rendang set|goreng set|trotter set|paella|risotto"
PORRIDGE = r"porridge|congee|soup|double boiled|stew|jjigae|gukbap|daktoritang|bak kut teh"
BREAD = r"thosai|dosai|prata|murtabak|roti|naan|chapati"
SMALL = r"dim sum|kang ?kong|lala|coffee pork|chilli crab|salted egg|pig liver|prawn paste|stingray|nachos|wings combo|rojak|carrot cake|tofu|bean curd|tokpokki|k-chicken|meatball|fu rong|har lok"
WESTERN = r"steak|chop|chicken|fish|salmon|lamb|duck|benedict|shakshuka|breakfast|porchetta|peposo|guazzetto|bangers|rosti|cutlet|dory|seabass|hake|lobster|beef cheek|waffle|platter|teppan|hamburg"
DRINK = r"espresso|latte|americano|brew\b|milk tea|\bblack\b|\bwhite\b|noir|cloud hug|bed of roses|ondeh|sago"

BUFFET = r"buffet|platter for two"


def is_buffet(dish: str) -> bool:
    """A buffet or a sharing platter is not one person's main, so the price model leaves it out."""
    return _has(dish.lower(), BUFFET)


def dish_type(dish: str, cuisine: str) -> str:
    name = dish.lower()
    if cuisine in ("Dessert", "Bakery"):
        return "dessert_snack"
    if cuisine in ("Coffee", "Drinks") and _has(name, DRINK):
        return "other"
    if _has(name, BUFFET):
        return "other"
    if _has(name, r"kueh|tau huay"):
        return "dessert_snack"
    if _has(name, r"baked rice"):
        return "rice"
    if _has(name, PASTA) and not _has(name, r"mee"):
        return "pasta_pizza"
    if _has(name, r"burger|sandwich|sando|philly|grilled cheese|roti john"):
        return "burger_sandwich"
    if _has(name, r"ramen|tsukemen|tonkotsu") and not _has(name, r"ramyeon"):
        return "ramen"
    if cuisine == "Korean":
        return "korean"
    if cuisine == "Thai":
        return "thai"
    if cuisine in ("Mexican", "Middle Eastern", "Turkish"):
        return "mex_me"
    if cuisine == "Japanese":
        if _has(name, r"udon|soba"):
            return "noodles"
        if _has(name, r"steak|teppan|hamburg"):
            return "western_main"
        return "jp_bowl_sushi"
    if _has(name, PORRIDGE) and not _has(name, NOODLE):
        return "porridge_soup"
    if _has(name, NOODLE):
        return "noodles"
    if _has(name, RICE):
        return "rice"
    if _has(name, BREAD):
        return "bread_prata"
    if "(medium)" in name or "(starting price)" in name or _has(name, SMALL):
        return "small_plates"
    if cuisine in ("Western", "Italian", "Fusion", "Coffee"):
        return "western_main"
    if cuisine in ("Chinese", "Seafood", "Local", "Malay", "Indian"):
        return "small_plates"
    if _has(name, WESTERN):
        return "western_main"
    return "other"
