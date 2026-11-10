# Add analysis to Singapore policy actionables

Paste this into a Claude session in this repo. Saturday afternoon, Singapore time, is best: the server fetches that morning.

```text
Read https://teoyujie.org/singapore-policy-actionables.txt. Its header explains the format.
Open the documents that look useful for a Singapore resident: investing, career, and public services.
For each one worth a note, add a line to static/public/sg-notes.tsv: id, tab, points from -60 to 60, tab, one sentence on what to do and by when.
Lower the documents that the rules overrate. Remove notes whose id is no longer in the file.
State facts from the document only. No investment advice.
Then commit, open a PR, and deploy after I merge.
```

After the deploy, the hourly job on the server sees the newer notes file and ranks again within the hour.

To add a source or change the rules, use the prompt in the [server repo](https://github.com/yujieteo/server/blob/main/prompts/singapore-policy-actionables.md).
