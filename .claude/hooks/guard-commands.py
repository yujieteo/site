#!/usr/bin/env python3
"""Refuse Bash calls that deploy, use SSH, or run src/build.ts without --out."""

import json
import re
import shlex
import sys
from pathlib import PurePosixPath

SSH_COMMANDS = {"ssh", "scp", "sftp", "mosh", "ssh-copy-id"}
SHELLS = {"bash", "sh", "zsh", "dash"}
WRAPPERS = {"sudo", "exec", "command", "builtin", "nohup", "time", "nice", "timeout", "xargs", "env"}
WRAPPER_VALUE_OPTIONS = {
    "env": {"-u", "--unset", "-C", "--chdir", "-S", "--split-string"},
    "nice": {"-n", "--adjustment"},
    "timeout": {"-s", "--signal", "-k", "--kill-after"},
    "xargs": {"-I", "-J", "-L", "-n", "-P", "-s", "-d", "-E", "-a"},
    "sudo": {"-u", "-g"},
}
SHELL_VALUE_OPTIONS = {"-o", "+o"}
PUNCTUATION = set(";&|()<>")
HEREDOC = re.compile(r"""<<-?\s*(['"]?)([A-Za-z_][A-Za-z0-9_]*)\1""")
MAX_DEPTH = 8


def tokens(text):
    text = text.replace("\n", " ; ")
    try:
        lexer = shlex.shlex(text, posix=True, punctuation_chars=True)
        lexer.whitespace_split = True
        return list(lexer)
    except ValueError:
        return text.split()


def commands(words):
    result = [[]]
    for word in words:
        if set(word) <= PUNCTUATION:
            result.append([])
        else:
            result[-1].append(word)
    return [c for c in result if c]


def strip_wrappers(words):
    i = 0
    while i < len(words):
        word = words[i]
        if "=" in word and not word.startswith("-") and word.split("=", 1)[0].isidentifier():
            i += 1
        elif PurePosixPath(word).name in WRAPPERS:
            wrapper = PurePosixPath(word).name
            val_opts = WRAPPER_VALUE_OPTIONS.get(wrapper, set())
            i += 1
            while i < len(words):
                cur = words[i]
                if cur == "--":
                    i += 1
                    break
                if cur in val_opts:
                    i += 2
                elif cur.startswith("-") or (wrapper == "timeout" and cur[:1].isdigit()):
                    i += 1
                else:
                    break
        else:
            break
    return words[i:]


def has_short_flag(options, flag):
    return any(o.startswith("-") and not o.startswith("--") and flag in o[1:] for o in options)


def split_shell_args(args):
    options, operands = [], []
    i = 0
    in_options = True
    while i < len(args):
        arg = args[i]
        if in_options:
            if arg == "--":
                in_options = False
                i += 1
                continue
            if arg in SHELL_VALUE_OPTIONS:
                options.append(arg)
                i += 2
                continue
            if (arg.startswith("-") or arg.startswith("+")) and arg not in {"-", "+"}:
                options.append(arg)
                i += 1
                continue
            in_options = False
        operands.append(arg)
        i += 1
    return options, operands


def shell_reads(line):
    for cmd in commands(tokens(HEREDOC.sub(" ", line))):
        w = strip_wrappers(cmd)
        if w and PurePosixPath(w[0]).name in SHELLS | {"eval", "source", "."}:
            return True
    return False


def without_data_heredocs(text):
    lines = text.split("\n")
    kept = []
    i = 0
    while i < len(lines):
        line = lines[i]
        kept.append(line)
        i += 1
        match = HEREDOC.search(line)
        if match is None:
            continue
        body = []
        while i < len(lines) and lines[i].strip() != match.group(2):
            body.append(lines[i])
            i += 1
        i += 1
        if shell_reads(line):
            kept.extend(body)
    return "\n".join(kept)


def is_deploy_script(path):
    return path.endswith("scripts/deploy.sh") or path == "deploy.sh"


def is_build_script(path):
    return path.endswith("src/build.ts")


def has_out_flag(args):
    for i, arg in enumerate(args):
        if arg == "--out" and i + 1 < len(args) and args[i + 1]:
            return True
        if arg.startswith("--out=") and len(arg) > len("--out="):
            return True
    return False


def reason(words):
    words = strip_wrappers(words)
    if not words:
        return None
    name = PurePosixPath(words[0]).name
    args = words[1:]
    if is_deploy_script(words[0]):
        return "scripts/deploy.sh deploys the live site; ask the owner to run it."
    if name in SHELLS | {"source", "."}:
        options, operands = split_shell_args(args)
        if not has_short_flag(options, "n") and operands and is_deploy_script(operands[0]):
            return "scripts/deploy.sh deploys the live site; ask the owner to run it."
    if name in SSH_COMMANDS:
        return f"{name} reaches another machine over SSH; ask the owner to run it."
    if name == "bun":
        rest = args[1:] if args and args[0] == "run" else args
        if rest and is_build_script(rest[0]) and not has_out_flag(rest[1:]):
            return 'A bare bun src/build.ts replaces dist/. Add --out "$(mktemp -d)".'
    return None


def inner_texts(words):
    words = strip_wrappers(words)
    texts = []
    if words and PurePosixPath(words[0]).name in SHELLS:
        options, operands = split_shell_args(words[1:])
        if has_short_flag(options, "c") and operands:
            texts.append(operands[0])
    if words and words[0] == "eval":
        texts.append(" ".join(words[1:]))
    texts.extend(
        word.replace("$(", " ; ").replace("`", " ; ") for word in words if "$(" in word or "`" in word
    )
    return texts


def check(text, depth=0):
    if depth > MAX_DEPTH:
        return "The command nests too deep to check."
    cleaned = without_data_heredocs(text)
    toks = tokens(cleaned)
    for idx, tok in enumerate(toks):
        if tok == "<" and idx + 1 < len(toks) and is_deploy_script(toks[idx + 1]):
            if shell_reads(cleaned):
                return "scripts/deploy.sh deploys the live site; ask the owner to run it."
    for cmd in commands(toks):
        found = reason(cmd)
        if found is None:
            for inner in inner_texts(cmd):
                found = check(inner, depth + 1)
                if found is not None:
                    break
        if found is not None:
            return found
    return None


def main():
    try:
        command = json.load(sys.stdin)["tool_input"]["command"]
    except (ValueError, KeyError, TypeError):
        print("guard-commands: could not read the command, so it is refused.", file=sys.stderr)
        return 2
    found = check(str(command))
    if found is None:
        return 0
    print(found, file=sys.stderr)
    return 2


if __name__ == "__main__":
    sys.exit(main())
