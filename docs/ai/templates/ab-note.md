# A/B note — <what you changed in the harness>

**Task given to the agent (identical in A and B):**
> <paste the exact prompt>

**A — before** (commit `<sha>`, no harness / old harness) · **B — after** (commit `<sha>`, your harness)

| Run | Side | Tests green? | Rule violations | Files touched | Turns / tokens or cost | Notes |
|---|---|---|---|---|---|---|
| 1 | A | | | | | |
| 2 | A | | | | | |
| 1 | B | | | | | |
| 2 | B | | | | | |

How to get the numbers: run `claude -p "<prompt>" --output-format json` in a fresh clone or worktree for each run;
the JSON has `num_turns` and `total_cost_usd` (or tokens). Then `git diff --stat`.

**What changed:** <concrete differences in diff and behaviour; quote the hook's message if it fired>

**What didn't change:** <be honest — "no difference" is a valid result>
