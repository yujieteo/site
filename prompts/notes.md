# Write notes

Paste this into a Claude session in this repo. Replace PART with `policy`, `reading`, `forecasts` or `prices`.

```text
Read https://teoyujie.org/api/notes.txt and write notes for PART.
```

The guide is built from `src/notes.ts`. It gives the list to read, the line format and the rules for each part. The build checks every line of `notes/PART.tsv`.

- `policy`: Saturday afternoon, Singapore time, is best. The server fetches that morning. After the deploy, the server ranks again within the hour.
- `reading`: the server reads the notes each hour.
- `forecasts` and `prices`: the pages `/forecasts/` and `/deals/` change on deploy.

To add a policy source or change the rules, use the prompt in the [server repo](https://github.com/yujieteo/server/blob/main/prompts/singapore-policy-actionables.md).
