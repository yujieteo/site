"""Record Claude models answering the 30 questions through the claude CLI, with no API key: the CLI uses
the owner's Claude login. Each session runs in an empty folder with one tool, tests/questions/fetch.sh,
which can only GET https://teoyujie.org/ and logs every fetch. The CLI's JSON result gives Anthropic's own
token usage for the session.

  python3 -I tests/questions/run_claude.py --model haiku --label after --base http://localhost:8765
  python3 -I tests/questions/run_claude.py --model sonnet --label before --base http://localhost:8766

Rows go to runs/LABEL/claude--MODEL.jsonl in the format score.py reads. Same-vendor models are a weaker
test than other vendors' models: they share training with whoever wrote the API.
"""
import argparse, json, os, pathlib, subprocess, sys, tempfile, time

HERE = pathlib.Path(__file__).resolve().parent
FETCH = HERE / "fetch.sh"
PROMPT = (
    "Answer one question using only the website teoyujie.org. Your only way to read it is the shell command "
    f"`{FETCH} URL`, which prints the page at that URL; it fetches only https://teoyujie.org/ addresses, one per call. "
    "Start with https://teoyujie.org/llms.txt and fetch only what you need. "
    "When you are done, reply with exactly three lines and nothing else:\n"
    "ANSWER: <the value only, with no unit or currency sign>\n"
    "AS_OF: <the date the site gives for that fact, as YYYY, YYYY-MM or YYYY-MM-DD, or none>\n"
    "SOURCE: <the URL you read it from>\n\nQuestion: "
)


def session(model, question, base, bodies, timeout):
    with tempfile.TemporaryDirectory() as empty:
        log = pathlib.Path(empty) / "fetches.jsonl"
        env = {**os.environ, "SITE_BASE": base, "FETCH_LOG": str(log), "FETCH_BODIES": str(bodies), "BASH_MAX_OUTPUT_LENGTH": "120000"}
        cmd = [
            "claude", "-p", PROMPT + question, "--model", model, "--output-format", "json",
            "--tools", "Bash", "--allowedTools", f"Bash({FETCH}:*)", "--permission-mode", "default",
            "--strict-mcp-config", "--setting-sources", "", "--disable-slash-commands", "--no-session-persistence",
        ]
        run = subprocess.run(cmd, cwd=empty, env=env, capture_output=True, text=True, timeout=timeout)
        fetches = [json.loads(l) for l in log.read_text().splitlines()] if log.exists() else []
        try:
            out = json.loads(run.stdout)
        except json.JSONDecodeError:
            return "", fetches, {}, f"exit {run.returncode}: {run.stderr.strip()[:300] or run.stdout.strip()[:300]}"
        u = out.get("usage", {})
        usage = {"input": u.get("input_tokens", 0) + u.get("cache_read_input_tokens", 0) + u.get("cache_creation_input_tokens", 0), "output": u.get("output_tokens", 0), "turns": out.get("num_turns"), "cost_usd": out.get("total_cost_usd")}
        return out.get("result", ""), fetches, usage, (None if not out.get("is_error") else out.get("subtype", "error"))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--model", required=True, help="haiku, sonnet or opus")
    ap.add_argument("--label", required=True)
    ap.add_argument("--base", required=True, help="where the site is served, such as http://localhost:8765")
    ap.add_argument("--only", help="comma-separated question ids")
    ap.add_argument("--timeout", type=int, default=600)
    args = ap.parse_args()
    runs = HERE / "runs"
    bodies = runs / "bodies"
    bodies.mkdir(parents=True, exist_ok=True)
    out = runs / args.label / f"claude--{args.model}.jsonl"
    out.parent.mkdir(parents=True, exist_ok=True)
    done = {json.loads(l)["id"] for l in out.read_text().splitlines()} if out.exists() else set()
    questions = [json.loads(l) for l in (HERE / "questions.jsonl").read_text().splitlines() if l]
    if args.only:
        questions = [q for q in questions if q["id"] in args.only.split(",")]
    with out.open("a") as f:
        for q in questions:
            if q["id"] in done:
                continue
            started = time.time()
            try:
                text, fetches, usage, error = session(args.model, q["question"], args.base, bodies, args.timeout)
            except subprocess.TimeoutExpired:
                text, fetches, usage, error = "", [], {}, "timeout"
            row = {"id": q["id"], "vendor": "claude", "model": args.model, "label": args.label, "base": args.base, "at": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()), "seconds": round(time.time() - started, 1), "fetches": fetches, "reply": text, "usage": usage, "error": error}
            f.write(json.dumps(row) + "\n")
            f.flush()
            print(f"{args.label} {args.model} {q['id']}: {len(fetches)} fetches, {sum(x['bytes'] for x in fetches)} bytes, {usage.get('input', 0)} input tokens, {(text.splitlines() or [str(error)])[0][:60]}", file=sys.stderr)


if __name__ == "__main__":
    main()
