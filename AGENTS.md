# Agents

This repository is the site of Yu Jie Teo. It was built from project-blueprint. Read VISION.md and REQUIREMENTS.md first.

1. Keep the site to posts. Prefer deletion to addition.
2. Run `./gate` before you say you are done. Never turn a check off.
3. Less code is better. Delete before you add. No JavaScript, not even in skills: strict TypeScript only.
4. No comments. Make the code say it. Allowed: a shebang, a source credit, a build directive.
5. No function values, no callbacks. Max 350 lines a file, 35 lines a function.
6. No native tests. Tests are evals in `evals/`.
7. Hot code goes in `.hot.go`, `.hot.ts` or `.hot.rs`. It must not allocate. Python has no hot files.
8. Prove a change with the `prove-change` skill. Model evals cost money: run them only when the author asks.
9. Markdown must grade under 4.0. Use short words.
10. `EXPIRY` is a date three months out. A late date only warns. Rethink the playbook, or rebuild.
11. Design work uses the `site-design` skill and the Emil Kowalski skills.
12. Never deploy a draft. Posts are in `posts/`. Browser code is in `src/kit/`.
13. Commit to `main`. Turn on the VPN, then run `scripts/deploy.sh`.
