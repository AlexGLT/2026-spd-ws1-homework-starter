# Rule header

Put this at the top of every rule, skill, subagent and hook. HTML comments are not sent to the model, so the header
costs no tokens.

For Markdown files (after the YAML frontmatter, if there is one):

```md
<!-- owner: @github-handle · why: <the incident or need that created this rule> · review-by: YYYY-MM-DD -->
```

For scripts:

```js
// owner: @github-handle · why: <reason> · review-by: YYYY-MM-DD
```

- **owner** — who answers questions about it and approves changes.
- **why** — the reason. A rule without a reason can't be judged later, so it never gets deleted.
- **review-by** — a date, 3–6 months out. Past that date the rule is re-confirmed or removed.
