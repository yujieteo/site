"""Minimal TOON encoder (https://toonformat.dev/reference/spec.html).

Supports what the paper-link exports need: nested objects, inline primitive
arrays, and tabular arrays of uniform flat objects, with the comma delimiter
and two-space indentation.
"""

import re

_NUMERIC = re.compile(r"^[+-]?[0-9]+(?:\.[0-9]+)?(?:e[+-]?[0-9]+)?$", re.IGNORECASE)
_KEY = re.compile(r"^[A-Za-z_][A-Za-z0-9_.]*$")
_ESCAPES = {"\\": "\\\\", '"': '\\"', "\n": "\\n", "\r": "\\r", "\t": "\\t"}
DELIMITER = ","


def _escape(value):
    out = []
    for char in value:
        if char in _ESCAPES:
            out.append(_ESCAPES[char])
        elif ord(char) < 0x20:
            out.append(f"\\u{ord(char):04x}")
        else:
            out.append(char)
    return "".join(out)


def needs_quotes(value, delimiter=DELIMITER):
    """Apply the string quoting rules of TOON spec section 7.2."""
    return (
        value == ""
        or value != value.strip(" \t")
        or value in {"true", "false", "null"}
        or bool(_NUMERIC.match(value))
        or any(char in value for char in ':"\\[]{}')
        or any(ord(char) < 0x20 for char in value)
        or delimiter in value
        or value.startswith("-")
        or value.startswith("#")
    )


def encode_string(value, delimiter=DELIMITER):
    return f'"{_escape(value)}"' if needs_quotes(value, delimiter) else value


def encode_key(key):
    return key if _KEY.match(key) else f'"{_escape(key)}"'


def encode_primitive(value, delimiter=DELIMITER):
    if value is None:
        return "null"
    if value is True:
        return "true"
    if value is False:
        return "false"
    if isinstance(value, int):
        return str(value)
    if isinstance(value, float):
        if value != value or value in (float("inf"), float("-inf")):
            return "null"
        text = repr(value)
        return text[:-2] if text.endswith(".0") else text
    return encode_string(str(value), delimiter)


def _is_primitive(value):
    return value is None or isinstance(value, (str, int, float, bool))


def _is_tabular(items):
    if not items or not all(isinstance(item, dict) and item for item in items):
        return False
    keys = set(items[0])
    return all(set(item) == keys and all(_is_primitive(v) for v in item.values()) for item in items)


def _encode_value(key, value, depth, lines):
    pad = "  " * depth
    name = encode_key(key)
    if isinstance(value, dict):
        lines.append(f"{pad}{name}:")
        for child_key, child in value.items():
            _encode_value(child_key, child, depth + 1, lines)
    elif isinstance(value, list):
        if not value:
            lines.append(f"{pad}{name}: []")
        elif all(_is_primitive(item) for item in value):
            cells = DELIMITER.join(encode_primitive(item) for item in value)
            lines.append(f"{pad}{name}[{len(value)}]: {cells}")
        elif _is_tabular(value):
            fields = list(value[0])
            header = DELIMITER.join(encode_key(field) for field in fields)
            lines.append(f"{pad}{name}[{len(value)}]{{{header}}}:")
            for item in value:
                cells = DELIMITER.join(encode_primitive(item[field]) for field in fields)
                lines.append(f"{pad}  {cells}")
        else:
            raise TypeError(f"{key}: only primitive or uniform flat object arrays are supported")
    else:
        lines.append(f"{pad}{name}: {encode_primitive(value)}")


def encode(document):
    """Encode a dict as a TOON document (no trailing newline, per spec 12)."""
    lines = []
    for key, value in document.items():
        _encode_value(key, value, 0, lines)
    return "\n".join(lines)
