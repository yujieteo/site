"""Record a model answering the 30 questions with nothing but a fetch tool and the address of /llms.txt.

Every fetch is logged with its URL, status, bytes and SHA-256; bodies are kept once each under
runs/bodies/ so score.py can count tokens. Only https://teoyujie.org/ can be fetched. --base maps that
origin to another server, so the new build can be scored before it is deployed (serve dist/ locally).

  python3 -I tests/questions/run.py --vendor openai --model MODEL --label before
  python3 -I tests/questions/run.py --vendor gemini --model MODEL --label after --base http://localhost:8765

Vendors and their keys: openai (OPENAI_API_KEY), gemini (GEMINI_API_KEY), xai (XAI_API_KEY),
deepseek (DEEPSEEK_API_KEY), mistral (MISTRAL_API_KEY), anthropic (ANTHROPIC_API_KEY). Stdlib only.
"""
import argparse, hashlib, json, os, pathlib, sys, time, urllib.error, urllib.request

HERE = pathlib.Path(__file__).resolve().parent
SITE = "https://teoyujie.org"
OPENAI_COMPATIBLE = {
    "openai": ("https://api.openai.com/v1", "OPENAI_API_KEY"),
    "gemini": ("https://generativelanguage.googleapis.com/v1beta/openai", "GEMINI_API_KEY"),
    "xai": ("https://api.x.ai/v1", "XAI_API_KEY"),
    "deepseek": ("https://api.deepseek.com/v1", "DEEPSEEK_API_KEY"),
    "mistral": ("https://api.mistral.ai/v1", "MISTRAL_API_KEY"),
}
SYSTEM = (
    "You answer one question using only the website teoyujie.org, through the fetch tool. "
    f"Start by fetching {SITE}/llms.txt. Fetch only what you need. "
    "When you are done, reply with exactly three lines and nothing else:\n"
    "ANSWER: <the value only, with no unit or currency sign>\n"
    "AS_OF: <the date the site gives for that fact, as YYYY, YYYY-MM or YYYY-MM-DD, or none>\n"
    "SOURCE: <the URL you read it from>"
)
TOOL = {"name": "fetch", "description": f"HTTP GET a URL under {SITE}/ and return its text.", "parameters": {"type": "object", "properties": {"url": {"type": "string"}}, "required": ["url"]}}
MAX_FETCHES = 15
MAX_CHARS = 120_000  # what the tool hands the model; the log keeps the full size


def http(url, body=None, headers=None, timeout=120):
    req = urllib.request.Request(url, data=None if body is None else json.dumps(body).encode(), headers={"content-type": "application/json", **(headers or {})})
    with urllib.request.urlopen(req, timeout=timeout) as res:
        return res.status, res.read()


def fetch(url, base, bodies):
    if not url.startswith(SITE + "/"):
        return {"url": url, "status": "refused", "bytes": 0}, f"Refused: only {SITE}/ can be fetched."
    try:
        status, data = http(base + url[len(SITE):], headers={"user-agent": "teoyujie-question-run"}, timeout=30)
    except urllib.error.HTTPError as e:
        status, data = e.code, e.read()
    digest = hashlib.sha256(data).hexdigest()
    (bodies / digest).write_bytes(data)
    text = data.decode("utf-8", "replace")
    shown = text if len(text) <= MAX_CHARS else text[:MAX_CHARS] + f"\n[truncated: {len(text)} characters in all]"
    return {"url": url, "status": status, "bytes": len(data), "sha256": digest, "truncated": len(text) > MAX_CHARS}, shown


def ask_openai(vendor, model, question, base, bodies):
    root, env = OPENAI_COMPATIBLE[vendor]
    key = os.environ[env]
    messages = [{"role": "system", "content": SYSTEM}, {"role": "user", "content": question}]
    log, usage = [], {"input": 0, "output": 0}
    for _ in range(MAX_FETCHES + 1):
        _, raw = http(f"{root}/chat/completions", {"model": model, "messages": messages, "tools": [{"type": "function", "function": TOOL}]}, {"authorization": f"Bearer {key}"})
        reply = json.loads(raw)
        usage["input"] += reply.get("usage", {}).get("prompt_tokens", 0)
        usage["output"] += reply.get("usage", {}).get("completion_tokens", 0)
        msg = reply["choices"][0]["message"]
        messages.append(msg)
        calls = msg.get("tool_calls") or []
        if not calls:
            return msg.get("content") or "", log, usage
        for call in calls:
            url = json.loads(call["function"]["arguments"] or "{}").get("url", "")
            entry, text = fetch(url, base, bodies) if len(log) < MAX_FETCHES else ({"url": url, "status": "over limit", "bytes": 0}, "Fetch limit reached. Answer now.")
            log.append(entry)
            messages.append({"role": "tool", "tool_call_id": call["id"], "content": text})
    return "", log, usage


def ask_anthropic(model, question, base, bodies):
    key = os.environ["ANTHROPIC_API_KEY"]
    messages = [{"role": "user", "content": question}]
    tool = {"name": TOOL["name"], "description": TOOL["description"], "input_schema": TOOL["parameters"]}
    log, usage = [], {"input": 0, "output": 0}
    for _ in range(MAX_FETCHES + 1):
        _, raw = http("https://api.anthropic.com/v1/messages", {"model": model, "max_tokens": 1024, "system": SYSTEM, "tools": [tool], "messages": messages}, {"x-api-key": key, "anthropic-version": "2023-06-01"})
        reply = json.loads(raw)
        usage["input"] += reply["usage"]["input_tokens"]
        usage["output"] += reply["usage"]["output_tokens"]
        messages.append({"role": "assistant", "content": reply["content"]})
        uses = [b for b in reply["content"] if b["type"] == "tool_use"]
        if not uses:
            return "".join(b.get("text", "") for b in reply["content"] if b["type"] == "text"), log, usage
        results = []
        for use in uses:
            url = use["input"].get("url", "")
            entry, text = fetch(url, base, bodies) if len(log) < MAX_FETCHES else ({"url": url, "status": "over limit", "bytes": 0}, "Fetch limit reached. Answer now.")
            log.append(entry)
            results.append({"type": "tool_result", "tool_use_id": use["id"], "content": text})
        messages.append({"role": "user", "content": results})
    return "", log, usage


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--vendor", required=True, choices=[*OPENAI_COMPATIBLE, "anthropic"])
    ap.add_argument("--model", required=True)
    ap.add_argument("--label", required=True, help="before, after, or after-mcp")
    ap.add_argument("--base", default=SITE)
    ap.add_argument("--only", help="comma-separated question ids")
    args = ap.parse_args()
    runs = HERE / "runs"
    bodies = runs / "bodies"
    bodies.mkdir(parents=True, exist_ok=True)
    out = runs / args.label / f"{args.vendor}--{args.model.replace('/', '_')}.jsonl"
    out.parent.mkdir(parents=True, exist_ok=True)
    questions = [json.loads(l) for l in (HERE / "questions.jsonl").read_text().splitlines() if l]
    if args.only:
        questions = [q for q in questions if q["id"] in args.only.split(",")]
    with out.open("a") as f:
        for q in questions:
            started = time.time()
            try:
                text, log, usage = ask_anthropic(args.model, q["question"], args.base, bodies) if args.vendor == "anthropic" else ask_openai(args.vendor, args.model, q["question"], args.base, bodies)
                error = None
            except Exception as e:  # a failed session is recorded, not retried, so the score counts it
                text, log, usage, error = "", [], {}, repr(e)
            row = {"id": q["id"], "vendor": args.vendor, "model": args.model, "label": args.label, "base": args.base, "at": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()), "seconds": round(time.time() - started, 1), "fetches": log, "reply": text, "usage": usage, "error": error}
            f.write(json.dumps(row) + "\n")
            f.flush()
            print(f"{q['id']}: {len(log)} fetches, {sum(e['bytes'] for e in log)} bytes, {text.splitlines()[0] if text else error}", file=sys.stderr)


if __name__ == "__main__":
    main()
